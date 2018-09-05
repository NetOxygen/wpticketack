/**
 * Show a debug bar for the Reader
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Cart/CartIcon"
 * >
 */
define(
    ['postal', 'lodash', 'jquery', 'api', 'moment', 'Screening'],
    function dependencies(postal, _, $, TKTApi, moment, Screening) {

    function CartIcon($container, state) {
        this.$container = $container;
        this.$icons = $('.tkt-cart-icon');
    }

    CartIcon.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            TKTApi.loadCart((err, status, rsp) => {
                this.update_nb(rsp.items.length);
            });

            this.$nb = $('<div class="cart-icon-nb assertive"></div>');
            this.$container.append(this.$nb);

            postal.subscribe({
                channel: "cart",
                topic: "update",
                callback: (data, envelope) => {
                    this.update_nb(data.cart.items.length);
                }
            });
        },

        update_nb: function (nb) {
            this.$nb.html(nb > 0 ? nb : "");
        },

        detach: function() {

        }
    };

    return CartIcon;
});

