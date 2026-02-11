import { Component, Config, i18n, Template } from '../Core';
import { TKTLib, Api as TKTApi } from '../Ticketack';
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
 *    data-cart-id="UUID"
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
        this.cart_id    = this.$container.data('cart-id');
        this.$promoCodeInput  = $('.promo-code-input', this.$container);
        this.$promoCodeButton = $('.promo-code-button', this.$container);
    }

    attach() {
        super.attach();

        this.init();
    }

    init() {
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

        if (!this.cart_id) {
            return this.loadTicket(() => {
                this.loadCart();
            });
        }

        TKTLib.CartService.getById(this.cart_id).catch(err => {
            console.error(err);
        }).finally(() => {
            this.loadTicket(() => {
                this.loadCart();
            });
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

        TKTLib.CartService.get().then(cart => {
            if (cart.isFinished()) {
                // let's remove the cart id from the TKTLib
                TKTLib.CartService.resetCartId();
                // and reset the cart
                this.cart = new CartModel({});
            } else {
                this.cart = new CartModel(cart);
            }

            return this.loadItemsInfos(callback);
        }).catch(err => {
            return callback(err);
        });
    }

    loadItemsInfos(callback) {
        callback = callback || ((err, cart) => {});

        this.cart.loadItemsInfos(err => {
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

    async build_table() {
        this.$container.html(Template.render('tkt-cart-table-tpl', {
            cart: this.cart,
            ticket: this.ticket,
            program_url: Config.get('program_url') ?? (await TKTLib.CartService.getProgramUrl()),
            cart_reset_url: Config.get('cart_reset_url'),
            checkout_url: Config.get('checkout_url') ?? (await TKTLib.CartService.getCheckoutUrl()),
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

        TKTLib.CartService.usePromoCode(code).then(cart => {
            this.loadCart();
        }).catch(err => {
            const msg = 'Impossible d\'utiliser ce code promo';

            return $('.promo-code-error')
                .html(i18n.t(msg))
                .removeClass('d-none');
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

        TKTLib.CartService.useWallet(this.ticket._id, amount, /*vat*/0).then(cart => {
            this.loadTicket(() => {
                this.loadCart();
            });
        }).catch(err => {
            let msg = 'Impossible d\'utiliser votre porte-monnaie';
            /**
             * FIXME : how to get the status here ???
             */
            switch (err.status) {
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
        TKTLib.CartService.removeItemFromCart(item_id).then(cart => {
            callback && callback(/*err*/null, cart);
        }).catch(err => {
            return callback(err);
        });
    }

    reset_cart(callback) {
        callback  = callback || ((err) => {});

        TKTLib.CartService.emptyCart().then(() => {
            return calllback && callback(/*err*/null);
        }).catch(err => {
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
