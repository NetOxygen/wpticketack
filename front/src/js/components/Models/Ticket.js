import BaseModel from './Base';
import { Api as TKTApi } from '../Ticketack';
import _ from 'lodash';
import moment from 'moment';

/**
 * Ticket model
 */
export default class Ticket extends BaseModel {
    static type = 'ticket';

    /**
     * @constructor
     * @param {Object} ticket like returned from the engine
     */
    constructor(ticket) {
        super(ticket);

        if (this.bookings) {
          this.bookings            = this.bookings.map((b) => {
              b.created_at         = moment(b.created_at);
              b.confirmed_at       = moment(b.confirmed_at);
              b.expire_at          = moment(b.expire_at);
              b.screening_start_at = moment(b.screening_start_at);
              b.screening_stop_at  = moment(b.screening_stop_at);

              return b;
          });
        }
    }

    /**
     * Get this ticket wallet balance
     * @return {String}
     */
    getWalletBalance() {
        return this.wallet.balance;
    };

    /**
     * Get this ticket formatted wallet balance
     * @return {String}
     */
    getFormattedWalletBalance() {
        return `${this.getWalletBalance().toFixed(2)} ${this.wallet.currency}`;
    };

    /**
     * Load the cart from Ticketack
     * @param {Function} callback  -Callback function
     */
    static load(callback) {
        TKTApi.viewTicket((err, status, rsp) => {
            if (err)
                return callback(err);

            return callback(/*err*/null, new Ticket(rsp));
        });
    };
}
