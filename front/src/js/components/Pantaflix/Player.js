import { Component, Template } from '../Core';
import { Ticket } from '../Models';
import postal from 'postal';

/**
 * Handle the Pantaflix player
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Pantaflix/Player"
 *    data-provider="..."
 *    data-screening-id="..."
 *    data-content-id="..."
 * >
 */
export default class PantaflixPlayer extends Component {
    /**
     * @constructor
     * @param {DOMElement} $container - The DOM node to attach this component to
     * @param {State} $container - The global state
     */
    constructor($container, state, loader) {
        super($container, state, loader);

        this.provider     = this.$container.data('provider');
        this.screeningId  = this.$container.data('screening-id');
        this.contentId    = this.$container.data('content-id');
        this.allowedTypes = (this.$container.data('allowed-ticket-types') || "").split(',');

        this.$watchButton = $('.tkt-pantaflix-button', this.$container);
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        postal.subscribe({
            channel: "connection",
            topic: "update",
            callback: (data, envelope) => {
                this.ticket = data.ticket;
                this.showModal();
            }
        });

        this.$watchButton.on('click', (e) => {
            this.showModal();
        });

        Ticket.load((err, ticket) => {
            if (!err)
                this.ticket = ticket;
        });
    }

    render() {
        if (this.ticket) {
            if (this.allowedTypes && this.allowedTypes.length > 0 && !this.allowedTypes.includes(this.ticket.type._id)) {
                this.$modal.html(Template.render('tkt-pantaflix-player-login-tpl', {invalid_ticket: true}));
            } else {
                this.$modal.html(Template.render('tkt-pantaflix-player-iframe-tpl', {
                    ticket: this.ticket,
                    provider: this.provider,
                    contentId: this.contentId
                }));
            }
        } else
            this.$modal.html(Template.render('tkt-pantaflix-player-login-tpl', { invalid_ticket: false }));
    }

    showModal() {
        $('.tkt-pantaflix-wrapper').remove();
        this.$wrapper = $('<div class="tkt-pantaflix-wrapper" style="display: none; "/>').appendTo(this.$container);
        this.$modal   = $('<div class="tkt-pantaflix-modal" />').appendTo(this.$wrapper);

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
}
