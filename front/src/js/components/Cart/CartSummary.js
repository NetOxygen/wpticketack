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
 *    data-component="Cart/CartIems"
 * >
 */
export default class CartItems extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.cart = {};
    }

    attach() {
        this.init();
    }

    init() {
        this.loadCart();
    }

    loadCart(callback) {
        callback = callback || ((err, cart) => {});

        CartModel.load((err, cart) => {
            if (err)
                return callback(err);

            this.cart = cart;
            this.cart.loadItemsInfos((err) => {
                if (err)
                    return callback(err);

                this.cart.mergeItems();
                this.buildTable();
                this.emitUpdate();

                this.bindRemoveItemIcons((err, cart) => {
                 if (err)
                    console.error(err);
                });

                return callback(/*err*/null, cart);
            });
        });
    }

    buildTable() {
        this.$container.html(
            Template.render( 'tkt-cart-summary-table-tpl',
                { cart: this.cart }
            )
        );

        $('.promo-code-button', this.$container).on('click', () => {
            const $promoCodeInput  = $('.promo-code-input', this.$container);
            const code = $promoCodeInput.val();
            if (code && code.length)
                this.usePromoCode(code);
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

    /**
     * Detach the components from the DOM node
     */
    detach() {}

    bindRemoveItemIcons(callback) {
        $('.tkt-remove-cart-item').on('click', (e) => {
            const $x      = $(e.target);
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

    emitUpdate() {
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
