import BaseModel from './Base';
import Config from '../Core/Config';
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

    /**
     * Get this cart item user data
     *
     * @param {String} field
     */
    getUserData(field) {
        return (field in this.user_data) ? this.user_data[field] : null;
    }

    /**
     * Check if this cart item has any missing user data
     *
     * @note: We only handle one-time-pass for now.
     */
    hasMissingData() {
        let hasMissingData = false;

        if (this.type != CartItem.SCREENING_TYPE)
            return hasMissingData ;

        const requiredFields = Config.get('otp_required_fields');
        if (_.isEmpty(requiredFields))
            return hasMissingData;

        requiredFields.map(field => {
            if (!requiredFields.includes(field))
                return;

            if (!(field in this.user_data) || _.isEmpty(this.user_data[field])) {
                hasMissingData = true;
            }
        });

        return hasMissingData;
    }
}
