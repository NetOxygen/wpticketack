/**
 * CartItem model
 */
define(
    ['lodash', 'moment', 'app/Models/Base'],
    function dependencies(_, moment, BaseModel) {

    CartItem.type = 'cart_item';

    CartItem.SCREENING_TYPE = 'screening';

    /**
     * Constructor
     *
     * @param {Object} cart item like returned from the engine
     */
    function CartItem(cartItem) {
        BaseModel.call(this, cartItem);
        cartItem = cartItem || {};

        _.mapKeys(cartItem, (val, key) => {
            this[key] = val;
        });

        this.expire = moment(this.expire);
    }

    CartItem.prototype.getFormattedTitle = function() {
        return this.name;
    };

    CartItem.prototype.getFormattedExpireAt = function() {
        return this.expire.format('HH:mm');
    };

    CartItem.prototype.getFormattedPrice = function() {
        return `${this.amount} CHF`;
    };

    return CartItem;
});
