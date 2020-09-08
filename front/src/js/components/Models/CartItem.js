import BaseModel from './Base';
import _ from 'lodash';
import moment from 'moment';

/**
 * CartItem model
 */
export default class CartItem extends BaseModel {
    static type = 'cart_item';

    static SCREENING_TYPE = 'screening';

    /**
     * @constructor
     * @param {Object} cart item like returned from the engine
     */
    constructor(cartItem) {
        super(cartItem);
        this.expire = moment(this.expire);
    }

    /**
     * Get this cart item formatted title
     * @return {String}
     */
    getFormattedTitle() {
        return this.name;
    };

    /**
     * Get this cart item formatted expire_at date
     * @return {String}
     */
    getFormattedExpireAt() {
        return this.expire.format('HH:mm');
    };

    /**
     * Get this cart item formatted price
     * @return {String}
     */
    getFormattedPrice() {
        return `${this.amount} CHF`;
    };
}
