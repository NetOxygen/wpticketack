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
define(
    ['config', 'async', 'jquery', 'api', 'template', 'postal', 'Cart'],
    function dependencies(config, async, $, TKTApi, Template, postal, CartModel) {

    function Cart($container, state) {
        this.$container = $container;
        this.cart       = {};
    }

    Cart.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            this.load_cart((err) => {
                // FIXME: handle error
                if (err)
                    return;
            });
            postal.subscribe({
                channel: "cart",
                topic: "reload",
                callback: (data, envelope) => {
                    this.load_cart();
                }
            });
        },

        load_cart: function(callback) {
            callback = callback || ((err) => {});

            TKTApi.loadCart((err, status, rsp) => {
                if (err)
                    return callback(err);

                this.cart = new CartModel(rsp);
                this.cart.loadItemsInfos((err) => {
                    if (err)
                        return callback(err);

                    this.build_table();
                    this.emit_update();

                    this.bind_remove_item_icons((err) => {
                        return callback(err);
                    });
                });
            });
        },

        build_table: function() {
            this.$container.html(Template.render('tkt-cart-table-tpl', {
                cart: this.cart,
                program_url: config.get('program_url'),
                cart_reset_url: config.get('cart_reset_url'),
                validate_cart_url: this.cart.validate_cart_url + '?PHPSESSID=' + TKTApi.session_id
            }));
        },

        bind_remove_item_icons: function(callback) {
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
        },

        remove_item: function(item_id, callback) {
            TKTApi.removeFromCart(item_id, (err, status, rsp) => {
                return callback(err);
            });
        },

        reset_cart: function(e) {
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
        },

        emit_update: function() {
            postal.publish({
                channel: "cart",
                topic: "update",
                data: {
                    cart: this.cart
                }
            });
        },

        detach: function() {

        }
    };

    return Cart;
});

