import { Component, i18n } from '../Core';
import { Tickettype, Cart } from '../Models';
import { Api as TKTApi } from '../Ticketack';
import _ from 'lodash';
import postal from 'postal';
import async from 'async';

/**
 * Show a pass buy form without any informations fields
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Pass/BuyWithQuantity"
 *    data-redirect="none|cart|checkout"
 *    data-cart-url="https://..."
 *    data-checkout-url="https://..."
 * >
 */
export default class BuyWithQuantity extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.$pass          = $('.pass', this.$container);
        this.$titles        = $('.pass_title', this.$container);
        this.redirect       = this.$container.data('redirect');
        this.cartUrl        = this.$container.data('cart-url');
        this.checkoutUrl    = this.$container.data('checkout-url');
        this.activePass     = null;

        this.$selected_pass = this.$pass.eq(0)

        this.$wrappers = $('.field-wrapper', this.$container);
        this.$fields   = $('.field-wrapper .field', this.$container);
    }

    attach() {
        super.attach();
        this.init_store();
        this.init();
    }

    init() {
        this.hide_success();
        this.hide_error();

        TKTApi.getPasses((err, status, tickettypes) => {
            this.data.tickettypes = tickettypes.map(tickettype => new Tickettype(tickettype));

            this.activePass = this.$pass.eq(0).data('type');

            // open pre-selected pass, if any
            if ($('.pass.open').length > 0) {
                const selected = $('.pass.open').eq(0).attr('id');
                $(`.pass_title[aria-controls="#${selected}"]`).trigger('click');
                this.data.tickettype = this.data.tickettypes.find(t => t._id === selected.replace('item-', ''));
            }

            this.sync_pass_pricings();

            // bind pricings minus buttons if any
            $('.tkt-minus-btn', this.$container).click((e) => {
                const $t     = $(e.target);
                const $input = $t.parent().next('.pricing-input').eq(0);

                let val = parseInt($input.val());
                if (val > 0) {
                    val -= 1;
                    $input.val(val).trigger('change');
                    this.data.pricings[$input.data('pricing')] = val;
                    const $qty = $t.parent().find('.pricing-qty').eq(0);
                    $qty.text(val);
                }
                if (val > 0)
                    $t.removeClass('tkt-inactive-badge').addClass('tkt-dark-badge');
                else
                    $t.removeClass('tkt-dark-badge').addClass('tkt-inactive-badge');

                this.sync_submit_buttons();
            });

            // bind pricings plus buttons if any
            $('.tkt-plus-btn', this.$container).click((e) => {
                const $t     = $(e.target);
                const $input = $t.parent().next('.pricing-input').eq(0);
                const val    = parseInt($input.val());
                $input.val(val + 1).trigger('change');
                this.data.pricings[$input.data('pricing')] = val + 1;
                const $qty = $t.parent().find('.pricing-qty').eq(0);
                $qty.text(val + 1);
                $('.tkt-minus-btn', $t.parent())
                    .removeClass('tkt-inactive-badge')
                    .addClass('tkt-dark-badge');

                this.sync_submit_buttons();
            });
        });

        postal.subscribe({
            channel: "connection",
            topic: "update",
            callback: (data, envelope) => {
                this.sync_pass_pricings();
            }
        });

        $('.pass_title', this.$container).click((e) => {
            var $title = $(e.target);
            var $card  = $title.closest('.card');
            var $pass  = $card.find('.pass');
            var $price = $pass.find('.choose-pass:checked', this.$container);

            $price.prop('checked', false);
            $('.tkt-pass-form-section', this.$container).hide();

            this.data.tickettype = this.data.tickettypes.find(t => t._id ===$pass.data('type'));
            this.sync_pass_pricings();
            $('.pass_title', this.$container).removeClass('open');
            $('.pass', this.$container).removeClass('open');
            if (!$pass.is(':visible')) {
                $title.addClass('open');
                $pass.addClass('open');
            }
            $('.pass:not(.open)', this.$container).hide();
            $('.pass.open', this.$container).fadeIn();

            this.sync_submit_buttons();
        });

        $('.choose-pass', this.$container).change((e) => {
            $('.tkt-pass-form-section', this.$container).show();
        });

        $('.add-to-cart-button', this.$container).hide();
        $('.add-to-cart-button', this.$container).click(async e => {
            e.preventDefault();
            await this.add_to_cart();
            return false;
        });

    }

    init_store() {
        this.data = {
            tickettypes: [], // tickettypes
            tickettype: null,  // selected tickettypes
            pricings: {},   // selected tickettypes pricings
        };
    }

    sync_submit_buttons() {
        let qty = 0;
        const inputs = $(`#item-${this.data.tickettype._id} .input.pricing-input`, this.$container);
        inputs.each((index, e) => qty += parseInt($(e).val()));
        if (qty > 0)
            $('.add-to-cart-button', this.$container).show();
        else
            $('.add-to-cart-button', this.$container).fadeOut();
    }

    async add_to_cart() {
        this.data.added_to_cart  = 0;
        this.data.to_add_to_cart = 0;

        this.hide_success();
        this.hide_error();

        const { tickettype, pricings } = this.data || {};
        if (!(tickettype && Object.keys(pricings || {})?.length > 0))
            return this.show_error(i18n.t('Veuillez choisir un tarif'));


        const flattenPricings = [];
        Object.keys(this.data?.pricings).forEach(pricing_key => {
            for (let i = 0; i < this.data.pricings[pricing_key]; i++) {
                flattenPricings.push(pricing_key);
            }
        });

        const tasks = flattenPricings.map(pricing_key => done => {
            TKTApi.addPassToCart(tickettype._id, pricing_key, /*userdata*/{}, (err, status, rsp) => {
                this.data.added_to_cart += err ? 0 : 1;
                return done(err, rsp);
            });
        });
        this.data.to_add_to_cart = tasks.length;

        async.series(tasks, (err, results) => {
            $('.tkt-minus-btn', this.$container).removeClass('tkt-inactive-badge').addClass('tkt-dark-badge');
            $('.pricing-qty', this.$container).text(0);
            $('.input.pricing-input', this.$container).val(0);
            this.sync_submit_buttons();

            this.data.pricings = {};
            if (err || (this.data.added_to_cart < this.data.to_add_to_cart)) {
                let err_msg = i18n.t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.');
                if (rsp?.flash?.error?.length && rsp.flash.error[0].length)
                    err_msg = rsp.flash.error[0];

                return this.show_error(err_msg);
            }

            switch (this.redirect) {
                case 'cart':
                    window.location.href = this.cartUrl;
                    break;
                case 'checkout':
                    window.location.href = this.checkoutUrl;
                    break;
                default:
                    this.show_success(i18n.t('Votre panier a été mis à jour'));
                    TKTApi.loadCart((err, status, rsp) => {
                        if (err)
                            return;

                        this.emit_cart_update(new Cart(rsp));
                    });
            }
        });
    }

    emit_cart_update(cart) {
        postal.publish({
            channel: "cart",
            topic: "update",
            data: {
                cart: cart
            }
        });
    }

    hide_success() { $('.alert-success', this.$container).html("").hide(); }
    show_success(msg) { $('.alert-success', this.$container).html(msg).show().delay(3000).fadeOut(); }

    hide_error() { $('.alert-danger', this.$container).html("").hide(); }
    show_error(msg) { $('.alert-danger', this.$container).html(msg).show().delay(3000).fadeOut(); }

    sync_pass_pricings() {
        if (!this.data.tickettype)
            return;

        const { tickettype } = this.data;

        const userTickets      = this.state.get('tickets', []);
        const matchingPricings = tickettype.getMatchingPricings(
            'eshop', // FIXME
            userTickets.map(t => t.type._id)
        ) || [];

        const $shownPricings = $(`#item-${tickettype._id} .pricing-row`);
        $shownPricings.each((i, p) => {
            const $p         = $(p);
            const $container = $p;

            $container.hide();

            const pricing = tickettype?.pricings[$(p).data('pricing-key')];
            if (pricing?.key in matchingPricings)
                $container.show();
        });
    }
}
