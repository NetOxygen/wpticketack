import { Component, Config, i18n, Template } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Ticket, Cart as CartModel } from '../Models';
import async from 'async';
import postal from 'postal';

/**
 * Show a debug bar for the Reader
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Cart/Cart"
 * >
 */
export default class Cart extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.cart       = {};
        this.hide_links = (this.$container.data('hide-links') || '').split(',');
        this.$promoCodeInput  = $('.promo-code-input', this.$container);
        this.$promoCodeButton = $('.promo-code-button', this.$container);
    }

    attach() {
        this.init();
    }

    init() {
        this.loadTicket(() => {
            this.loadCart();
        });

        postal.subscribe({
            channel: "cart",
            topic: "reload",
            callback: (data, envelope) => {
                this.loadCart();
            }
        });

        postal.subscribe({
            channel: "cart",
            topic: "update",
            callback: (data, envelope) => {
                if (!data.internal) {
                    this.cart = data.cart;
                    this.loadItemsInfos();
                }
            }
        });
    }

    loadTicket(callback) {
        Ticket.load((err, ticket) => {
            this.ticket = !err ? ticket : null;
            callback && callback();
        });
    }

    loadCart(callback) {
        callback = callback || ((err, cart) => {});

        CartModel.load((err, cart) => {
            if (err)
                return callback(err);

            this.cart = cart;

            return this.loadItemsInfos(callback);
        });
    }

    loadItemsInfos(callback) {
        callback = callback || ((err, cart) => {});

        this.cart.loadItemsInfos((err) => {
            if (err)
                return callback(err);

            this.build_table();
            this.emit_update();

            this.bind_remove_item_icons((err, cart) => {
             if (err)
                console.error(err);
            });

            return callback(/*err*/null, this.cart);
        });
    }

    build_table() {
        this.$container.html(Template.render('tkt-cart-table-tpl', {
            cart: this.cart,
            ticket: this.ticket,
            program_url: Config.get('program_url') ? Config.get('program_url') : TKTApi.getProgramViewUrl(),
            cart_reset_url: Config.get('cart_reset_url'),
            checkout_url: Config.get('checkout_url') ? Config.get('checkout_url') : TKTApi.getCheckoutUrl(),
            hide_links: this.hide_links
        }));
        $('.promo-code-button', this.$container).on('click', () => {
            const $promoCodeInput  = $('.promo-code-input', this.$container);
            const code = $promoCodeInput.val();
            if (code && code.length)
                this.usePromoCode(code);
        });
        $('.wallet-button', this.$container).on('click', () => {
            const $promoAmountInput  = $('.wallet-input', this.$container);
            const amount = $promoAmountInput.val();
            if (amount && amount > 0)
                this.useWallet(amount);
        });
    }

    usePromoCode(code) {
        $('.promo-code-error').html("").addClass('d-none');
        $('.promo-code-success').html("").addClass('d-none');

        TKTApi.usePromoCode(code, (err, status, rsp) => {
            if (err) {
                const msg = status === 404 ?
                    'Code promo invalide' :
                    'Impossible d\'utiliser ce code promo';

                return $('.promo-code-error')
                    .html(i18n.t(msg))
                    .removeClass('d-none');
            }

            this.loadCart();

            /*return $('.promo-code-success')
                .html(i18n.t('Le code promo a bien été pris en compte'))
                .removeClass('d-none');*/
        });
    }

    useWallet(amount) {
        $('.wallet-error').html("").addClass('d-none');
        $('.wallet-success').html("").addClass('d-none');

        // Force negative amount
        if (amount > 0)
            amount *= -1;

        if ((this.cart.getTotal() + amount) < 0)
            return $('.wallet-error')
                .html(i18n.t('Montant trop élevé'))
                .removeClass('d-none');

        TKTApi.useWallet(this.ticket.id, amount, /*vat*/0, (err, status, rsp) => {
            if (err) {
                let msg = 'Impossible d\'utiliser votre porte-monnaie';
                switch (status) {
                    case 404:
                        msg ='Ticket invalide';
                        break
                    case 410:
                        msg ='Montant trop élevé';
                        break;
                }

                return $('.wallet-error')
                    .html(i18n.t(msg))
                    .removeClass('d-none');
            }

            this.loadTicket(() => {
                this.loadCart();
            });
        });
    }

    bind_remove_item_icons(callback) {
        $('.tkt-remove-cart-item').on('click', (e) => {
            let $x = $(e.target);

            if (!$x.hasClass('tkt-remove-cart-item'))
                $x = $x.closest('.tkt-remove-cart-item');
            const item_id = parseInt($x.data('item'));

            this.remove_item(item_id, (err) => {
                if (err)
                    return callback(err);

                return this.loadCart(callback);
            });
        });

        $('.tkt-reset-cart-btn').on('click', (e) => {
            e.preventDefault();
            this.reset_cart((err) => {
                if (err)
                    console.error(err);

                this.loadCart(callback);
            });
        });
    }

    remove_item(item_id, callback) {
        TKTApi.removeFromCart(item_id, (err, status, rsp) => {
            return callback(err);
        });
    }

    reset_cart(callback) {
        callback  = callback || ((err) => {});

        TKTApi.resetCart((err, status, rsp) => {
            return callback(err);
        });
    }

    set_pending(callback) {
        callback  = callback || ((err) => {});

        TKTApi.setPending(this.cart.id, (err, status, rsp) => {
            if (err)
                return callback(err);

            return callback(/*err*/null, rsp);
        });
    }

    set_open(callback) {
        callback  = callback || ((err) => {});

        TKTApi.setOpen(this.cart.id, (err, status, rsp) => {
            return callback(err);
        });
    }

    get_new(callback) {
        callback  = callback || ((err) => {});

        TKTApi.getNew((err, status, rsp) => {
            if (err)
                return callback(err);

            return this.loadCart(callback);
        });
    }

    set_user_data(data, callback) {
        callback  = callback || ((err) => {});

        TKTApi.setUserData(this.cart.id, data, (err, status, rsp) => {
            return callback(err);
        });
    }

    emit_update() {
        postal.publish({
            channel: "cart",
            topic: "update",
            data: {
                cart: this.cart,
                internal: true
            }
        });
    }
}
