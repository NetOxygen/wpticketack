import BaseModel from './Base';
import CartItem from './CartItem';
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

    /**
     * Get this cart formatted total
     * @return {String}
     */
    getFormattedTotal() {
        const total = _.reduce(this.items, (memo, item) => memo + parseFloat(item.amount), 0).toFixed(2);

        return `${total} CHF`;
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
