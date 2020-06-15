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
    }

    attach() {
        this.init();
    }

    init() {
        this.load_cart();
        postal.subscribe({
            channel: "cart",
            topic: "reload",
            callback: (data, envelope) => {
                this.load_cart();
            }
        });
        postal.subscribe({
            channel: "cart",
            topic: "update",
            callback: (data, envelope) => {
                if (!data.internal)
                    this.load_cart();
            }
        });
    }

    load_cart(callback) {
        callback = callback || ((err) => {});

        CartModel.load((err, cart) => {
            if (err)
                return callback(err);

            this.cart = cart;
            this.cart.loadItemsInfos((err) => {
                if (err)
                    return callback(err);

                this.build_table();
                this.emit_update();

                this.bind_remove_item_icons();

                return callback();
            });
        });
    }

    build_table() {
        this.$container.html(Template.render('tkt-cart-table-tpl', {
            cart: this.cart,
            program_url: Config.get('program_url'),
            cart_reset_url: Config.get('cart_reset_url'),
            hide_links: this.hide_links
        }));
    }

    bind_remove_item_icons(callback) {
        $('.tkt-remove-cart-item').on('click', (e) => {
            const $x      = $(e.target);
            const item_id = parseInt($x.data('item'));

            this.remove_item(item_id, (err) => {
                if (err)
                    return callback(err);

                return this.load_cart(callback);
            });
        });

        $('.tkt-reset-cart-btn').on('click', this.reset_cart.bind(this));
    }

    remove_item(item_id, callback) {
        TKTApi.removeFromCart(item_id, (err, status, rsp) => {
            return callback(err);
        });
    }

    reset_cart(e) {
        e.preventDefault();

        const tasks = _.map($('.tkt-remove-cart-item'), (x) => {
            return (done) => {
                let item_id = parseInt($(x).data('item'));
                this.remove_item(item_id, done);
            };
        });

        async.parallel(tasks, (err, results) => {
            return this.load_cart();
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

            return this.load_cart(callback);
        });
    }

    set_user_data(data, callback) {
        callback  = callback || ((err) => {});

        TKTApi.setUserData(this.cart.id, data, (err, status, rsp) => {
            return callback(err);
        });
    }

    checkout(user_data, callback) {
        callback  = callback || ((err) => {});
        user_data = user_data || {};

        TKTApi.pay(this.cart.id, 'POS_CASH', user_data, (err, status, rsp) => {
            if (err)
                return callback(err);

            TKTApi.confirm(this.cart.id, (err, status, rsp) => {
                if (err)
                    return callback(err);

                return callback(/*err*/null, rsp);
            });
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
