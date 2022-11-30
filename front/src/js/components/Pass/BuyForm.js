import { Component, i18n } from '../Core';
import { Tickettype, Cart } from '../Models';
import { Api as TKTApi } from '../Ticketack';
import _ from 'lodash';
import postal from 'postal';
import serialize from 'form-serialize';

/**
 * Show a pass buy form
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Pass/BuyForm"
 *    data-redirect="none|cart|checkout"
 *    data-cart-url="https://..."
 *    data-checkout-url="https://..."
 * >
 */
export default class BuyForm extends Component {
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
        this.tickettypes    = [];
        this.activePass     = null;
        this.passPhotoWidth = this.$container.data('width') || '150 px';

        this.$selected_pass = this.$pass.eq(0)

        this.$form     = $('form', this.$container);
        this.$wrappers = $('.field-wrapper', this.$container);
        this.$fields   = $('.field-wrapper .field', this.$container);
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        TKTApi.getPasses((err, status, tickettypes) => {
            this.tickettypes = tickettypes.map(tickettype => new Tickettype(tickettype));

            this.activePass = this.$pass.eq(0).data('type');
            this.sync_pass_pricings();
            this.sync_pass_form();
        });

        if ($('.choose-pass', this.$container).length > 1) {
            $('.tkt-pass-form-section', this.$container).hide();
        };

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

            this.activePass = $pass.data('type'); ;
            this.sync_pass_pricings();
            this.sync_pass_form();
            $('.pass_title', this.$container).removeClass('open');
            $('.pass', this.$container).removeClass('open');
            if (!$pass.is(':visible')) {
                $title.addClass('open');
                $pass.addClass('open');
            }
            $('.pass:not(.open)', this.$container).hide();
            $('.pass.open', this.$container).fadeIn();
        });

        $('.choose-pass', this.$container).change((e) => {
            $('.tkt-pass-form-section', this.$container).show();
        });

        $('form', this.$container).submit((e) => {
            e.preventDefault();
            this.add_to_cart();
            return false;
        });

    }

    add_to_cart() {
        let userdata = serialize(this.$form[0], { hash: true });

        this.$selected_pass = $('.choose-pass:checked', this.$container).parents('.pass');
        let type            = this.$selected_pass.data('type');
        let pricing         = $('.choose-pass:checked', this.$container).val();

        if (!pricing) {
            if ($('.choose-pass', this.$container).val().indexOf(':') === -1)
                return this.show_error(i18n.t('Veuillez choisir un tarif'));

            const pass = $('.choose-pass', this.$container).val().split(':');
            type    = pass[0];
            pricing = pass[1];
        }

        TKTApi.addPassToCart(type, pricing, userdata, (err, status, rsp) => {
            /* TODO: Handle no_photo field */
            if (err) {
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

    show_success(msg) {
        $('.alert-success', this.$container).html(msg).show().delay(3000).fadeOut();
    }

    show_error(msg) {
        $('.alert-danger', this.$container).html(msg).show().delay(3000).fadeOut();
    }

    sync_pass_pricings() {
        if (!(this.tickettypes || []).length || !this.activePass)
            return;
        const userTicket       = this.state.get('user.ticket');
        const tickettype       = this.tickettypes.find(tickettype => tickettype._id === this.activePass);
        const matchingPricings = tickettype.getMatchingPricings('eshop', userTicket ? userTicket.type._id : null);

        const $shownPricings = $(`#item-${this.activePass} .radio input`);
        $shownPricings.each((i, p) => {
            const $p         = $(p);
            const $container = $p.closest('.radio');

            $container.hide();

            const pricing = tickettype.pricings[$(p).val()];
            if (pricing.key in matchingPricings)
                $container.show();
        });
    }

    sync_pass_form() {
        if (!this.activePass)
            return;

        let required_fields  = $('#' + this.activePass + '-required-fields').val()? $('#' + this.activePass + '-required-fields').val()?.split(',') : [];
        let requested_fields = $('#' + this.activePass + '-requested-fields').val()? $('#' + this.activePass + '-requested-fields').val()?.split(',') : [];
        requested_fields     = _.differenceBy(requested_fields, required_fields);

        // Hides the title and notice in the form if there are no fields
        if (required_fields.length === 0 && requested_fields.length === 0) {
            $('.tkt-section-title', this.$container).hide();
            $('#notice-required', this.$container).hide();
        } else {
            $('.tkt-section-title', this.$container).show();
            $('#notice-required', this.$container).show();
        }

        // Set not required and hide all fields
        $('.field', this.$container).each(function (i) {
            $(this).attr('required', false);
        });

        this.$wrappers.hide();

        _.each(this.$wrappers, (w) => {
            // Set required and show requested fields
            let id     = $(w).attr('id').replace('field-wrapper-', '');
            let $field = $('#' + id);
            let $label = $('label[for='+id+']');

            if (required_fields.includes(id)) {
                $field.attr('required', true);
                $label.addClass('required');
                $(w).fadeIn();

                if (id == 'photo') {
                    $('#photo_data_url', this.$container).attr('required', true);
                    $('#photo', this.$container).removeAttr('required');
                }
            } else if (requested_fields.includes(id)) {
                $label.removeClass('required');
                $(w).fadeIn();
            }
        });

        if ($('#gift_toggl').length) {
            $('#gift_toggl').change(function () {
                var $input = $('#user_gift_message');
                var default_content = $input.data('default');
                if ($(this).is(':checked')) {
                    $input.attr('required', true).val(default_content).show();
                }
                else {
                    $input.attr('required', false).val("").hide();
                }
            });
        };
    }
}
