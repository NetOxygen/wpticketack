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
     * Check if this ticket has at least one information in its contact property
     * that must be shown on the ticket view :
     *  - firstname
     *  - lastname
     *  - email
     *  - rfc2397_portrait
     *  - birthdate
     *  - address.street
     *  - address.zip
     *  - address.city
     *  - address.country
     *
     * @return {Boolean}
     */
    hasContactInfo() {
        const mainProps = [
            'firstname', 'lastname',
            'email', 'birthdate',
            'rfc2397_portrait'
        ];

        let hasInfo = false;
        mainProps.forEach(info => (hasInfo = hasInfo || !!this.contact[info]));

        if (!('address' in this.contact))
            return hasInfo;

        const addressProps = [ 'street', 'zip', 'city', 'country' ];
        addressProps.forEach(info => (hasInfo = hasInfo || !!this.contact.address[info]));

        return hasInfo;
    }

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

    getValidityWindows() {
        var validity = moment();

        this.windows.map(w => {
            validity = moment(w.stop_at).isAfter(validity) ? w.stop_at : validity;
        });

        return validity
    }

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

    /**
     * Get this ticket formatted price and currency
     * @return {String}
     */
    getFormattedPriceAndCurrency() {
        var currency = Object.keys(this.activated_pricing.price)[0];
        if (currency == 'CHF')
            return currency + ' ' + this.activated_pricing.price[currency].toFixed(2);

        return this.activated_pricing.price[currency].toFixed(2) + ' ' + currency;
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
