import BaseModel from './Base';
import Screening from './Screening';
import Booking from './Booking';
import { Api as TKTApi } from '../Ticketack';
import { i18n, Config } from '../Core';
import _ from 'lodash';
import async from 'async';
import moment from 'moment';

/**
 * Ticket model
 */
export default class Ticket extends BaseModel {
    static type             = 'ticket';
    static ONE_TIME_PASS_ID = 'one-time-pass';

    static STATUS_NEW             = "new";
    static STATUS_ACTIVATED       = "activated";
    static STATUS_BLOCKED         = "blocked";
    static STATUS_PENDING_PAYMENT = "pending";
    static STATUS_DELETED         = "deleted";

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
    }

    /**
     * Check if this is a one-time-pass
     * @return {Boolean}
     */
    isOneTimePass() {
        return this.type._id === Ticket.ONE_TIME_PASS_ID;
    };

    /**
     * Status check shortcuts
     */
    isNew() { return this.status === Ticket.STATUS_NEW; };
    isActivated() { return this.status === Ticket.STATUS_ACTIVATED; };
    isBlocked() { return this.status === Ticket.STATUS_BLOCKED; };
    isPending() { return this.status === Ticket.STATUS_PENDING_PAYMENT; };
    isDeleted() { return this.status === Ticket.STATUS_DELETED; };

    /**
     * Get this ticket formatted type name
     * @return {String}
     */
    getTypeName() {
        if (this.isOneTimePass())
            return i18n.t('Billet pour une séance unique');

        return this.type.name[i18n.lang];
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
            Config.get('ticket_view_url') :
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
     * Get this ticket wallet balance
     * @return {String}
     */
    getWalletBalance() {
        return this.wallet.balance;
    };

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

    /**
     * Get this ticket formatted wallet balance
     * @return {String}
     */
    getFormattedWalletBalance() {
        return `${this.getWalletBalance().toFixed(2)} ${this.wallet.currency}`;
    };

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
