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
            this.$nb = $('<div class="cart-icon-nb assertive empty"></div>');
            this.$container.append(this.$nb);

            TKTApi.loadCart((err, status, rsp) => {
                this.update_nb(rsp.items.length);
            });

            postal.subscribe({
                channel: "cart",
                topic: "update",
                callback: (data, envelope) => {
                    this.update_nb(data.cart.items.length);
                }
            });
        },

        update_nb: function (nb) {
            if (nb > 0)
                this.$nb.removeClass('empty');
            else
                this.$nb.addClass('empty');

            this.$nb.html(nb > 0 ? nb : "");
        },

        detach: function() {

        }
    };

    return CartIcon;
});

