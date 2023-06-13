import BaseModel from './Base';
import Screening from './Screening';
import Booking from './Booking';
import { Api as TKTApi, TKTLib } from '../Ticketack';
import { i18n, Config } from '../Core';
import _ from 'lodash';
import async from 'async';
import moment from 'moment';

/**
 * Ticket model
 */
export default class Ticket extends TKTLib.Ticket {
    static type = 'ticket';

    /**
     * @constructor
     * @param {Object} ticket like returned from the engine
     */
    constructor(ticket) {
        super(ticket);

        if (this.bookings)
            this.bookings = this.bookings.map((b) => new Booking(b));

        if (this.activated_at)
            this.activated_at = moment(this.activated_at);

        this.windows = (this.windows || []).map(w => {
            if ('start_at' in w)
                w.start_at = moment.tz(w.start_at, window.moment_timezone);
            if ('stop_at' in w)
                w.stop_at = moment.tz(w.stop_at, window.moment_timezone);

            return w;
        });
    }

    /**
     * Get this ticket formatted name built with the contact firstname
     * and lastname if exists, with the ticketID otherwise
     * @return {String}
     */
    getOwnerNameOrId() {
        if (this.contact?.firstname || this.contact?.lastname)
            return [this.contact?.firstname, this.contact?.lastname].filter(v => !!v).join(' ');

        return this.vdr_auth_serial;
    };

    /**
     * Get this ticket PDF url
     * @return {String}
     */
    getPdfUrl() {
        if (!this.isActivated() && !this.isPending())
            return null;

        return TKTApi.getTicketPdfUrl(this._id);
    }

    /**
     * Get this ticket view url
     * @return {String}
     */
    getTicketViewUrl() {
        if (!this.isActivated() && !this.isPending())
            return null;

        return Config.get('ticket_view_url') ?
            Config.get('ticket_view_url') + '?uuid=' + this._id :
            TKTApi.getTicketViewUrl(this._id);
    }

    /**
     * Get this ticket QR Code url
     * @return {String}
     */
    getQRCodeUrl() {
        return TKTApi.getTicketQRCodeUrl(this._id);
    }

    /**
     * Get this ticket formatted activated_at date balance
     * @return {String}
     */
    getFormattedActivatedAt() {
        if (!this.activated_at)
            return null;

        return this.activated_at.format('LLL');
    };

    /**
     * Get this ticket formatted status
     * @return {String}
     */
    getFormattedStatus() {
        return i18n.t(this.status.toUpperCase());
    };

    /**
     * Get the color to represent this ticket status
     * @return {String}
     */
    getStatusColorClassname() {
        switch (this.status) {
            case Ticket.STATUS_ACTIVATED:
                return 'success';
            case Ticket.STATUS_PENDING_PAYMENT:
                return 'warning';
            case Ticket.STATUS_NEW:
            case Ticket.STATUS_BLOCKED:
            case Ticket.STATUS_DELETED:
            default:
                return 'danger';
        }
        return i18n.t(this.status.toUpperCase());
    };

    placesAvailable() {
        var sumNbookings = _.reduce(this.windows, function(sum, w) {
            return sum + w.nbookings;
          }, 0);

        if (sumNbookings - this.bookings.length <= 1)
            return [
                sumNbookings - this.bookings.length,
                i18n.t('réservation'),
                i18n.t('sur'),
                sumNbookings,
                i18n.t('disponible')
            ].join(' ');

        // Does not display number of reservations if greater than 100
        return sumNbookings < 100 ?
            [
                sumNbookings - this.bookings.length,
                i18n.t('réservations'),
                i18n.t('sur'),
                sumNbookings,
                i18n.t('disponibles')
            ].join(' ') : '';
    }

    static loadTicketsInfos(tickets, callback) {
        const screeningIds = _.flatten(
            tickets.map(ticket => (ticket.bookings || []).map(booking => booking.screening_id))
        );
        if (screeningIds.length == 0)
            return callback(/*err*/null, tickets);

        Screening.getInfos(screeningIds, (err, infos) => {
            if (err)
                return callback(err);

            tickets.map(ticket => {
                ticket.bookings = _.map(ticket.bookings, (booking) => {
                    booking.screening = _.find(infos, (s) => s._id === booking.screening_id);
                    return booking;
                });
            });

            return callback(/*err*/null, tickets);
        });
    }

    /**
     * Load the current connected ticket from Ticketack
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
