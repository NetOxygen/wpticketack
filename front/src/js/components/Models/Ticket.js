import BaseModel from './Base';
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
}
