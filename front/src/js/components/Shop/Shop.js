import { Component, Config, Template } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Cart as CartModel } from '../Models';
import async from 'async';
import postal from 'postal';

/**
* Show a debug bar for the Reader
*
* Usage:
*
* <div
*    <!-- Required -->
*    data-component="Shop/Shop"
* >
*/

export default class Shop extends Component {
    /**
    * @constructor
    */
    constructor($container, state) {
        super($container, state);
        this.$button = $('.add-to-cart-from-shop', this.$container);
        this.$form   = $('.buy-article-form', this.$container);
    }

    attach() {
        this.init();
    }

    init() {
        this.$button.click(() => {
            this.display_buy_form();
        });
        this.$form.click(() => {
            this.hide_buy_form();
        });
    }

    display_buy_form(callback) {
        this.$form.show();
    }

    hide_buy_form(callback) {
        this.$form.hide();
    }
}
