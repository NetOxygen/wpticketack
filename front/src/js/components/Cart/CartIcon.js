import { Component } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Screeningg } from '../Models';
import _ from 'lodash';
import moment from 'moment';
import postal from 'postal';

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
export default class CartIcon extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.$icons = $('.tkt-cart-icon');
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        this.$nb = $('<div class="cart-icon-nb assertive empty"></div>');
        this.$container.append(this.$nb);

        TKTApi.loadCart((err, status, rsp) => {
            this.update_nb(rsp?.items);
        });

        postal.subscribe({
            channel: "cart",
            topic: "update",
            callback: (data, envelope) => {
                this.update_nb(data.cart.items);
            }
        });
    }

    update_nb(items) {
        let nb = 0;
        items.map((i) => {
            if (i.type != 'shipping') {
                nb ++;
            }
        })

        if (nb > 0)
            this.$nb.removeClass('empty');
        else
            this.$nb.addClass('empty');

        this.$nb.html(nb > 0 ? nb : "");
    }
}
