import BaseModel from './Base';
import CartItem from './CartItem';
import Article from './Article';
import Screening from './Screening';
import { Api as TKTApi } from '../Ticketack';
import { i18n } from '../Core';

import { Api } from '../Ticketack';
import _ from 'lodash';
import moment from 'moment';

/**
 * Cart model
 */
export default class Cart extends BaseModel {
    static type = 'cart';

    static CHECKOUT_STEP_CONFIRM       = 'confirm';
    static CHECKOUT_STEP_GO_TO_PAYMENT = 'go_to_payment';

    static STATUS_PENDING_STATUS   = 'PENDING';
    static STATUS_OPEN             = 'OPEN';
    static STATUS_PAYING           = 'PAYING';
    static STATUS_PAID             = 'PAID';
    static STATUS_COMPLETED        = 'COMPLETED';
    static STATUS_ACTIVATION_ERROR = 'ACTIVATION_ERROR';
    static STATUS_CANCELED         = 'CANCELED';

    /**
     * @constructor
     * @param {Object} cart like returned from the engine
     */
    constructor(cart) {
        super(cart);

        if (this.order_id && this.order_id.length) {
            const parts = this.order_id.split('-');
            this.id = parts.length > 1 && parts[parts.length - 1].length > 0 ?
                parseInt(parts[parts.length - 1]) :
                null;
        }

        this.items = _.map(this.items, (i) => new CartItem(i));
    }

    /**
     * Load the cart items infos
     * @param {Function} callback - Callback function
     */
    loadItemsInfos(callback) {
        if (!this.items || this.items.length === 0)
            return callback(/*err*/null);

        let screeningIds = _.map(
            _.filter(this.items, (i) => i.type === CartItem.SCREENING_TYPE),
            (i) => i.item_id
        );

        let articleIds = _.map(
            _.filter(this.items, (i) => i.type === CartItem.ARTICLE_TYPE),
            (i) => i.item_id
        );

        if (screeningIds.length == 0 && articleIds.length == 0) {
            return callback(/*err*/null);
        }

        if (screeningIds.length > 0) {
            Screening.getInfos(screeningIds, (err, screenings) => {
                if (err)
                    return callback(err);

                this.items = _.map(this.items, (i) => {
                    if (i.type === CartItem.SCREENING_TYPE)
                        i.screening = _.find(screenings, (s) => s._id === i.item_id);

                    return i;
                });

                return callback(/*err*/null);
            });
        }

        if (articleIds.length > 0) {
            Article.getInfos(articleIds, /*force_reload*/false, (err, articles) => {
                if (err)
                    return callback(err);

                this.items = _.map(this.items, (i) => {
                    if (i.type === CartItem.ARTICLE_TYPE)
                        i.article = _.find(articles, (a) => a.getVariant(i.item_id));

                    return i;
                });

                return callback(/*err*/null);
            });
        }
    };

    /**
     * Get this items quantity
     * @return {Number}
     */
    mergeItems() {
        this.mergedItems = {};
        this.items.forEach((item) => {
            if (!(item.item_id in this.mergedItems))
                this.mergedItems[item.item_id] = item;
            else
                this.mergedItems[item.item_id].quantity += 1;
        })

        this.mergedItems = _.values(this.mergedItems);
    }

    /**
     * Get this cart total
     * @return {Number}
     */
    getTotal() {
        if (!this.items || this.items.length == 0)
            // loadItemsInfos has not been called
            return this.amount / 100;

        return _.reduce(this.items, (memo, item) => { return memo + parseFloat(this.cleanAmount(item.amount)); }, 0);
    };

    /**
     * Get this cart formatted total
     * @return {String}
     */
    getFormattedTotal() {
        return this.getFormatedAmount(this.getTotal());
    };

    /**
     * Get the total of all the bought items, i.e, all the
     * items but the fees and discounts.
     * 
     * @return {String}
     */
    getOrderTotal() {
        const items = _.map(_.filter(this.items, (i) =>
            i.article?.type === CartItem.PRODUCT_TYPE 
            || i.type === CartItem.SCREENING_TYPE 
            || i.type === CartItem.PASS_TYPE),
            (i) => i
        );

        if (!items || this.items.length == 0)
            // loadItemsInfos has not been called
            return 0;

        const amount = _.reduce(items, (memo, item) => { return memo + parseFloat(this.cleanAmount(item.amount)); }, 0);
        return this.getFormatedAmount(amount);
    };

    /**
     * Get this cart formatted date
     * @return {String}
     */
    getFormattedDate() {
        return moment(this.created_at).format('LL');
    };

    /**
     * Get this cart payment method
     * @return {String}
     */
    getFormattedPaymentMethod() {
        return i18n.t(this.payment_method);
    };

    /**
     * Get this cart status
     * @return {String}
     */
    getFormattedStatus() {
        return i18n.t(this.status);
    };

    /**
     * Get the color to represent this cart status
     * @return {String}
     */
    getStatusColorClassname() {
        switch (this.status) {
            case Cart.STATUS_COMPLETED:
                return 'success';
            case Cart.STATUS_PAYING:
            case Cart.STATUS_PAID:
                return 'info';
            case Cart.STATUS_OPEN:
            case Cart.STATUS_PENDING_STATUS:
                return 'warning';
            case Cart.STATUS_ACTIVATION_ERROR:
            case Cart.STATUS_CANCELED:
            default:
                return 'danger';
        }
    };

    /**
     * Returns an array with all items that miss some user data.
     */
    getMissingDataItems() {
        return this.items.filter(item => item.hasMissingData());
    }

    /**
     * Load the cart from Ticketack
     * @param {Function} callback  -Callback function
     */
    static load(callback) {
        TKTApi.loadCart((err, status, rsp) => {
            if (err)
                return callback(err);

            return callback(/*err*/null, new Cart(rsp));
        });
    };

    /**
     * Get item of type pass
     * @return {Array}
     */
    getPass() {
        return _.map(_.filter(this.items, (i) => i.type === CartItem.PASS_TYPE),(i) => i);
    }

    /**
     * Get item of type screening
     * @return {Array}
     */
    getTickets() {
        return _.map(_.filter(this.items, (i) => i.type === CartItem.SCREENING_TYPE),(i) => i);
    }

    /**
     * Get item of type product
     * @return {Array}
     */
    getArticles() {
        return _.map(_.filter(this.items, (i) => i.article?.type === CartItem.PRODUCT_TYPE),(i) => i);
    }

    /**
     * Get item of type manual_discount & code_discount
     * @return {Array}
     */
    getDiscounts() {
        return _.map(_.filter(this.items, (i) => i.article?.type === CartItem.MANUEL_DISCOUNT_TYPE || i.article?.type === CartItem.CODE_DISCOUNT_TYPE),(i) => i);
    }

    /**
     * Get item of type shipping
     * @return {Array}
     */
    getFees() {
        return _.map(_.filter(this.items, (i) => i.type === CartItem.SHIPPING_TYPE),(i) => i);
    }
}
