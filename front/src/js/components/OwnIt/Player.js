import { Component, Template, Config } from '../Core';
import { Ticket } from '../Models';
import { TKTLib } from '../Ticketack';
import postal from 'postal';

/**
 * Handle the OwnIt player
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="OwnIt/Player"
 *    data-screening-id="..."
 *    data-product-id="..."
 *    data-allowed-ticket-types=="..."
 * >
 */
export default class OwnItPlayer extends Component {
    /**
     * @constructor
     * @param {DOMElement} $container - The DOM node to attach this component to
     * @param {State} $container - The global state
     */
    constructor($container, state, loader) {
        super($container, state, loader);

        this.screeningId  = this.$container.data('screening-id');
        this.productId    = this.$container.data('product-id');
        this.allowedTypes = (this.$container.data('allowed-ticket-types') || "").split(',');

        this.$watchButton = $('.tkt-own_it-button', this.$container);

        this.eligibleTickets = [];
    }

    attach() {
        super.attach();
        this.init();
    }

    async init() {
        postal.subscribe({
            channel: "connection",
            topic: "update",
            callback: (data, envelope) => {
                const { ticket } = data;
                this.findEligibleTicketsInState();
                this.render(!this.isEligible(new Ticket(ticket)));
            }
        });

        this.$watchButton.on('click', (e) => {
            this.showModal();
        });

        this.findEligibleTicketsInState();
    }

    /**
     * Find in the state all the eligible tickets
     */
    findEligibleTicketsInState() {
        this.eligibleTickets = [
            ...(this.state.get('tickets', [])),
            ...(this.state.get('user', {})?.tickets || [])
        ].map(ticket => new Ticket(ticket))
        .filter(t => !!t)
        .filter(t => this.isEligible(t));
    }

    /**
     * Check if a ticket is eligible
     *
     * @param {Ticket} ticket
     */
    isEligible(ticket) {
        const edition = Config.get('edition', '');
        return (
            (ticket?.isActivated()) &&
            (!edition?.length || ticket.edition === edition) &&
            (this.allowedTypes?.includes(ticket?.type?._id))
        );
    }

    /**
     * @param {Boolean} lastTicketIsNotEligible
     */
    render(lastTicketIsNotEligible) {
        this.$modal.html(Template.render('tkt-own_it-player-login-tpl', {
            tickets: this.eligibleTickets,
            invalid_ticket: lastTicketIsNotEligible
        }));

        this.hideErrors();

        $('.watch-btn').click(async e => {
            this.hideErrors();

            try {
                const code     = $(e.target).data('code');
                const ticketId = $(e.target).data('ticket-id');
                const result   = await TKTLib.TicketService.check(ticketId, this.screeningId);

                /**
                 * result is an object like {
                 *   ticket: Ticket,
                 *   bookings: Booking[],
                 *   book_on_check_booking: Booking?,
                 *   screening: {
                 *     _id: UUID,
                 *     buckets: Bucket[]
                 *   }
                 */

                if (!result?.bookings?.length && !result?.book_on_check_booking) {
                    // the entry check failed
                    // let's check if this is because of the ticket or the screening
                    if (result.screening) {
                        const available = (result.screening.buckets || []).reduce((acc, b) => acc + b.available, 0);
                        if (available === 0)
                            // the screening is no more available
                            return this.showNoMoreSeatsError();
                    }

                    // let's check the ticket
                    if (result.ticket) {
                        result.ticket = new Ticket(result.ticket);
                        if (!this.screening)
                            this.screening = await TKTLib.ScreeningService.get(this.screeningId);
                        if (this.screening && !result.ticket.canBook(this.screening))
                            // the ticket can not book this screening
                            return this.showTicketCanotBookError();
                    }

                    // fallback message
                    this.showNoMoreSeatsError();
                } else {
                    this.$modal.html(Template.render('tkt-own_it-player-iframe-tpl', {
                        code,
                        productId: this.productId
                    }));
                }
            } catch (err) {
                console.error(err);
            }
        });
    }

    showModal() {
        $('.tkt-own_it-wrapper').remove();
        this.$wrapper = $('<div class="tkt-own_it-wrapper" style="display: none; "/>').appendTo(this.$container);
        this.$modal   = $('<div class="tkt-own_it-modal" />').appendTo(this.$wrapper);

        this.$wrapper.on('click', (e) => {
            this.hideModal();
        });

        this.$modal.on('click', (e) => {
            e.stopPropagation();
        });

        this.$wrapper.fadeIn();
        this.render();

        this.loader.attach();
    }

    hideModal() {
        this.$wrapper.fadeOut();
        setTimeout(() => {
            this.$wrapper.remove();
        }, 300);
    }

    showNoMoreSeatsError() { $('.no-more-seats', this.$container).fadeIn(); }
    showTicketCanotBookError() { $('.ticket-can-not-book', this.$container).fadeIn(); }
    hideErrors() {
        $('.no-more-seats', this.$container).hide();
        $('.ticket-can-not-book', this.$container).hide();
    }
}
