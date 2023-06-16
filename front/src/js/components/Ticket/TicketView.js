import { Component, Config, Template, i18n } from '../Core';
import { Api as TKTApi, TKTLib } from '../Ticketack';
import { Booking, Ticket } from '../Models';
import postal from 'postal';

/**
 * Show a ticket
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Tcket/TicketView"
 *    data-ticket-id="13245678-1234-1234-4321-123456789012"
 * >
 */
export default class TicketConnect extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);
        this.ticketId   = this.$container.data('ticket-id');
    }

    attach() {
        super.attach();
        this.init();
    }

    async init() {
        try {
            const ticket = await TKTLib.TicketService.get(this.ticketId, /*noCache*/true);

            // update the state cache if the ticket exists, otherwise add it to the
            // tickets storage (just like if we entered its TicketID)
            ticket.store = 'tickets';
            if (this.state.hasInArray('user.tickets', '_id', ticket._id))
                ticket.store = 'user.tickets';
            this.state.push(ticket.store, ticket, '_id');

            await ticket.enhanceBookings();
            ticket.isForgettable = ticket.store === 'tickets';
            this.render(ticket);
        } catch (err) {

        }

        postal.subscribe({
            channel: "connection",
            topic: "update",
            callback: (data, envelope) => {
                this.render(data.ticket);
            }
        });
    }

    forgetTicket(ticketId) {
        this.state.pull('tickets', '_id', ticketId);
        location.replace(Config.get('program_url') ? Config.get('program_url') : TKTApi.getProgramViewUrl());
    }

    render(ticket) {
        this.$container.html(Template.render('tkt-ticket-tpl', {
            ticket,
            program_url : Config.get('program_url') ? Config.get('program_url') : TKTApi.getProgramViewUrl()
        }));

        // bind pass disconnect button
        $('.forget-ticket-btn', this.$container).click(e => this.forgetTicket(ticket._id));

        // delete a booking
        $('.cancel-booking-btn', this.$container).click(async (e) => {
            try {
                const res = await TKTLib.TicketService.deleteBooking(
                    ticket._id,
                    $(e.target).data('booking-id'),
                );
            } catch (err) {
                return $('.cancelable_booking_err')
                    .html(i18n.t("Une erreur est survenue. Veuillez ré-essayer ultérieurement."))
                    .removeClass('d-none');
            }
            location.reload();
        });
    }
}
