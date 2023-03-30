import { Component, Config, Template } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Booking, Ticket } from '../Models';
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
    constructor($container, state) {
        super($container, state);
        this.data       = {
            pass_infos: {}
        };
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        TKTApi.viewTicket((err, status, rsp) => {
            const ticket = !err ? new Ticket(rsp) : null;

            if (err)
                this.state.unset('user.ticket');
            else
                this.state.set('user.ticket', ticket);

            this.render(!err ? new Ticket(rsp) : null);
        });

        postal.subscribe({
            channel: "connection",
            topic: "update",
            callback: (data, envelope) => {
                this.render(data.ticket);
            }
        });
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

    connect_pass() {
        $('.ticket-connect-error', this.$container).html("").addClass('d-none');

        if (!this.data.pass_infos.number || !this.data.pass_infos.key)
            return $('.pass-error')
                .html('Veuillez remplir les deux champs')
                .removeClass('d-none');

        TKTApi.loginTicket(
            this.data.pass_infos.number,
            this.data.pass_infos.key,
            (err, status, rsp) => {
                if (err)
                    return $('.pass-error')
                        .html('Les informations que vous avez saisies sont invalides')
                        .removeClass('d-none');

                this.data.ticket = new Ticket(rsp);
                this.state.set('user.ticket', this.data.ticket);
                this.state.set('user.pass_infos', this.data.pass_infos);

                this.emit_connection_update(this.data.ticket);

                // Redirect to ticket activation if needed
                if (this.data.ticket.status == "new")
                    window.location.href =  TKTApi.getTicketViewUrl();
            }
        );
    }

    disconnect_pass() {
        TKTApi.logoutTicket((err, status, rsp) => {
            if (!err) {
                this.state.unset('user.ticket');
                this.emit_connection_update(null);
            }
        });
    }

    render(ticket) {
        this.$container.html(Template.render('tkt-ticket-connect-tpl', { ticket,
                                                                         ticket_view_url : Config.get('ticket_view_url') ? Config.get('ticket_view_url') : TKTApi.getTicketViewUrl(),
                                                                         program_url : Config.get('program_url') ? Config.get('program_url') : TKTApi.getProgramViewUrl() }));
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
        $('.disconnect-btn', this.$container).click(this.disconnect_pass.bind(this));

        // delete a booking
        $('.cancelable-btn', this.$container).click((e) => {
            TKTApi.unbook($(e.target).data('id'), (err, result) => {
                if (err) {
                    return $('.cancelable_booking_err')
                        .html("Une erreur est survenue. Veuillez ré-essayer ultérieurement.")
                        .removeClass('d-none');
                }
                location.reload();
            });
        });
    }
}
