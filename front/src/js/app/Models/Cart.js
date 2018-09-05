/**
 * Cart model
 */
define(
    ['lodash', 'api', 'app/Models/Base', 'CartItem', 'Screening'],
    function dependencies(_, TKTApi, BaseModel, CartItem, Screening) {

    Cart.type = 'cart';

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

        this.items = _.map(this.items, (i) => new CartItem(i));
    }

    Cart.prototype.loadItemsInfos = function(callback) {

        if (!this.items || this.items.length === 0)
            return callback(/*err*/null);

        let screening_ids = _.map(
            _.filter(this.items, (i) => i.type === CartItem.SCREENING_TYPE),
            (i) => i.item_id
        );

        TKTApi.getScreeningsInfo(screening_ids, (err, status, rsp) => {
            if (err)
                return callback(err);

            const screenings = _.map(rsp, (s) => new Screening(s));
            this.items = _.map(this.items, (i) => {
                if (i.type === CartItem.SCREENING_TYPE)
                    i.screening = _.find(screenings, (s) => s._id === i.item_id);

                return i;
            });

            return callback(/*err*/null);
        });
    };

    Cart.prototype.getFormattedTotal = function() {
        const total = _.reduce(this.items, (memo, item) => memo + parseFloat(item.amount), 0);

        return `${total} CHF`;
    };

    return Cart;
});
