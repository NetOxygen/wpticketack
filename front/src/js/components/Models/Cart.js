import BaseModel from './Base';
import CartItem from './CartItem';
import Article from './Article';
import Screening from './Screening';
import { Api as TKTApi } from '../Ticketack';

import { Api } from '../Ticketack';
import _ from 'lodash';

/**
 * Cart model
 */
export default class Cart extends BaseModel {
    static type = 'cart';

    static CHECKOUT_STEP_CONFIRM       = 'confirm';
    static CHECKOUT_STEP_GO_TO_PAYMENT = 'go_to_payment';

    /**
     * @constructor
     * @param {Object} cart like returned from the engine
     */
    constructor(cart) {
        super(cart);

        if (this.order_id && this.order_id.length) {
            const parts = this.order_id.split('-');
            this.id = parts.length > 1 && parts[1].length > 0 ?
                parseInt(parts[1]) :
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
        return _.reduce(this.items, (memo, item) => memo + parseFloat(item.amount), 0);
    };

    /**
     * Get this cart formatted total
     * @return {String}
     */
    getFormattedTotal() {
        const total = this.getTotal().toFixed(2);
        return `CHF ${total}`;
    };

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
}
