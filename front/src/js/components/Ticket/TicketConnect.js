import { Component, Config, Template, i18n } from '../Core';
import { TKTLib, Api as TKTApi } from '../Ticketack';
import { Ticket } from '../Models';
import postal from 'postal';

/**
 * Show a ticket connection widget
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Tcket/TicketConnect"
 * >
 */
export default class TicketConnect extends Component {
    /**
     * @constructor
     */
    constructor($container, state, loader) {
        super($container, state, loader);
        this.data       = {
            pass_infos: {}
        };
    }

    attach() {
        super.attach();

        postal.subscribe({
            channel: "connection",
            topic: "update",
            callback: (data, envelope) => {
                this.init();
            }
        });

        postal.subscribe({
            channel: "ticket",
            topic: "update",
            callback: (data, envelope) => {
                this.init();
            }
        });

        TKTLib.ready(() => {
            this.votesConfig = TKTLib.setting('votes');
            this.init();
        });
    }

    async init(ticketId) {
        let ticket;
        let tickets = this.state.get('tickets', []);
        if (tickets.length) {
            this.ticketId = ticketId || new Ticket(tickets[tickets.length - 1])._id;
            try {
                ticket = await TKTLib.TicketService.get(this.ticketId, /*noCache*/true);

                ticket.store         = 'tickets';
                ticket.isForgettable = true;

                await ticket.enhanceBookings();
                this.state.push('tickets', ticket, '_id');
            } catch (err) {
                if (err.message === 'Ticket not found (by _id)')
                    this.state.pull('tickets', '_id', this.ticketId);
                console.error(err.message);
            }
        }

        // filter tickets on current edition, if any
        const edition = Config.get('edition', '');
        if (edition?.length)
            tickets = tickets.filter(t => t.edition === edition);

        this.render(ticket, tickets?.map(t => new Ticket(t)));
    }

    emit_connection_update(ticket) {
        postal.publish({
            channel: "connection",
            topic: "update",
            data: {
                ticket: ticket
            }
        });
    }

    async connect_pass() {
        $('.ticket-connect-error', this.$container).html("").addClass('d-none');

        if (!this.data.pass_infos.number || !this.data.pass_infos.key)
            return $('.pass-error')
                .html(i18n.t('Veuillez remplir les deux champs'))
                .removeClass('d-none');

        const { number, key } = this.data.pass_infos;
        try {
            const rsp = await TKTLib.TicketService.getTicketByTicketId({number, key});

            this.data.ticket = new Ticket(rsp);
            this.state.push('tickets', this.data.ticket, /*uniqueBy*/'_id');
            this.emit_connection_update(this.data.ticket);

            // Redirect to ticket activation if needed
            if (this.data.ticket.status == "new")
                window.location.href = TKTApi.getTicketViewUrl(this.data.ticket._id);
        } catch (err) {
            return $('.pass-error')
                .html(i18n.t('Les informations que vous avez saisies sont invalides'))
                .removeClass('d-none');
        }
    }

    forgetTicket(ticketId) {
        this.state.pull('tickets', '_id', ticketId);
        this.emit_connection_update(null);
    }

    render(ticket, tickets) {
        this.$container.html(Template.render('tkt-ticket-tpl', {
            ticket,
            tickets,
            program_url : Config.get('program_url') ? Config.get('program_url') : TKTApi.getProgramViewUrl(),
            votesConfig: this.votesConfig
        }));
        this.$container.append(Template.render('tkt-ticket-connect-tpl', {
            ticket,
            program_url : Config.get('program_url') ? Config.get('program_url') : TKTApi.getProgramViewUrl()
        }));

        // bind pass fields
        $('.pass-number-input,.pass-key-input', this.$container).change((e) => {
          this.data.pass_infos = {
            number: $('.pass-number-input', this.$container).val(),
            key: $('.pass-key-input', this.$container).val()
          };
        });

        // bind pass connect button
        $('.connect-btn', this.$container).click(this.connect_pass.bind(this));

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

        $('.ticket-link', this.$container).click((e) => {
            const _id = $(e.target).data('ticket-id');
            if (_id)
                this.init(_id);
        });

        this.loader.attach();
    }
}
