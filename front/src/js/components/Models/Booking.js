import BaseModel from './Base';
import { Api as TKTApi } from '../Ticketack';
import Screening from './Screening';
import moment from 'moment';

/**
 * Booking model
 */
export default class Booking extends BaseModel {
    static type = 'booking';

    /**
     * @constructor
     * @param {Object} booking like returned from the engine
     */
    constructor(booking) {
        super(booking);

        this.created_at         = moment(this.created_at);
        this.confirmed_at       = moment(this.confirmed_at);
        this.expire_at          = moment(this.expire_at);
        this.screening_start_at = moment(this.screening_start_at);
        this.screening_stop_at  = moment(this.screening_stop_at);

        if (this.screening)
            this.screening = new Screening(this.screening);
    }
}
