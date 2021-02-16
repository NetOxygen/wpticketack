import BaseModel from './Base';
import _ from 'lodash';
import moment from 'moment';

/**
 * CartItem model
 */
export default class CartItem extends BaseModel {
    static type = 'cart_item';

    static SCREENING_TYPE = 'screening';
    static ARTICLE_TYPE   = 'article';
    static WALLET_TYPE    = 'wallet';
    static SHIPPING_TYPE  = 'shipping';

    /**
     * @constructor
     * @param {Object} cart item like returned from the engine
     */
    constructor(cartItem) {
        super(cartItem);

        this.expire   = moment(this.expire);
        this.quantity = this.quantity || 1;
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
        return `CHF ${this.amount}`;
    };

    /**
     * Get this cart item url poster
     * @return {String}
     */
    getFormattedPoster() {
        if (this.article.posters[0]) {
            return this.article.posters[0]["url"];
        }
    }
}
