/**
 * Cart model
 */
define(
    ['lodash', 'api', 'app/Models/Base', 'CartItem', 'Screening'],
    function dependencies(_, TKTApi, BaseModel, CartItem, Screening) {

    Cart.type = 'cart';

    Cart.CHECKOUT_STEP_CONFIRM       = 'confirm';
    Cart.CHECKOUT_STEP_GO_TO_PAYMENT = 'go_to_payment';

    /**
     * Constructor
     *
     * @param {Object} cart like returned from the engine
     */
    function Cart(cart) {
        BaseModel.call(this, cart);
        cart = cart || {};

        _.mapKeys(cart, (val, key) => {
            this[key] = val;
        });

        if (this.order_id && this.order_id.length) {
            const parts = this.order_id.split('-');
            this.id = parts.length > 1 && parts[1].length > 0 ?
                parseInt(parts[1]) :
                null;
        }

        this.items = _.map(this.items, (i) => new CartItem(i));
    }

    Cart.prototype.loadItemsInfos = function(callback) {

        if (!this.items || this.items.length === 0)
            return callback(/*err*/null);

        let screening_ids = _.map(
            _.filter(this.items, (i) => i.type === CartItem.SCREENING_TYPE),
            (i) => i.item_id
        );

        Screening.getInfos(screening_ids, (err, screenings) => {
            if (err)
                return callback(err);

            this.items = _.map(this.items, (i) => {
                if (i.type === CartItem.SCREENING_TYPE)
                    i.screening = _.find(screenings, (s) => s._id === i.item_id);

                return i;
            });

            return callback(/*err*/null);
        });
    };

    Cart.prototype.getFormattedTotal = function() {
        const total = _.reduce(this.items, (memo, item) => memo + parseFloat(item.amount), 0).toFixed(2);

        return `${total} CHF`;
    };

    Cart.load = function (callback) {
        TKTApi.loadCart((err, status, rsp) => {
            if (err)
                return callback(err);

            return callback(/*err*/null, new Cart(rsp));
        });
    };

    return Cart;
});
