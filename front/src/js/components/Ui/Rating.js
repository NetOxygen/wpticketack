import { Component } from '../Core';
import { TKTLib } from '../Ticketack';
import rater from 'rater-js';

/**
 * Convert a select into a star rating input
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Ui/Rating"
 *    data-ticket-id="12345678-1234-1234-4321-123456789012"
 *    data-booking-id="12345678-1234-1234-4321-123456789012"
 *    data-score="2.5"
 *    data-size="32"
 *    data-disabled-reason="You can not vote for now..."
 *    data-step="0.5"
 *    data-max="10"
 * />
 */
export default class Rating extends Component {
    attach() {
        super.attach();

        this.ticketId       = this.$container.data('ticket-id');
        this.bookingId      = this.$container.data('booking-id');
        this.max            = this.$container.data('max');
        this.step           = this.$container.data('step');
        this.score          = this.$container.data('score');
        this.disabledReason = this.$container.data('disabled-reason');
        this.disabled       = this.disabledReason?.length > 0;
        this.size           = this.$container.data('size') || 24;

        this.$container.attr('id', `rating-${this.uniqid}`);
        this.init();
    }

    init() {
        const rating = rater({
            element: document.querySelector(`#rating-${this.uniqid}`),
            max: this.max,
            step: this.step,
            showToolTip: true,
            readOnly: !!this.disabled,
            disableText: this.disabledReason,
            starSize: this.size,
            rateCallback: async (score, done) => {
                try {
                    const { TicketService } = TKTLib;
                    const ticket = await TicketService.voteForBooking(
                        this.ticketId,
                        this.bookingId,
                        score
                    );
                    rating.setRating(score);
                    done();
                } catch (e) {
                    done();
                    console.error(e);
                }
            }
        });
        rating.setRating(parseFloat(this.score) || 0);
    }
}
