import { Component, Template } from '../Core';
import { TKTLib } from '../Ticketack';
import StarRating from 'star-rating.js';

/**
 * Convert a select into a star rating input
 *
 * Usage:
 *
 * <select
 *    <!-- Required -->
 *    data-component="Ui/Rating"
 *    data-ticket-id="12345678-1234-1234-4321-123456789012"
 *    data-booking-id="12345678-1234-1234-4321-123456789012"
 * >
 *    <option value="">Select a rating</option>
 *    <option value="5">Excellent</option>
 *    <option value="4">Very Good</option>
 *    <option value="3">Average</option>
 *    <option value="2">Poor</option>
 *    <option value="1">Terrible</option>
 * </select>
 * >
 */
export default class Rating extends Component {
    attach() {
        super.attach();

        this.ticketId  = this.$container.data('ticket-id');
        this.bookingId = this.$container.data('booking-id');

        this.init();
    }

    init() {
        this.$container.change(async () => {
            if (!this.ticketId || !this.bookingId)
                return false;

            if (!this.stars || !this.stars.widgets?.length)
                return;

            const values = this.stars?.widgets[0].values || [];
            if (!values.length)
                return;

            const index = this.stars.widgets[0].indexSelected;
            if (!values[index])
                return;

            const score = values[index].value;

            try {
                const { TicketService } = TKTLib;
                const ticket = await TicketService.voteForBooking(
                    this.ticketId,
                    this.bookingId,
                    score
                );
            } catch (e) {
                console.error(e);
            }
        });

        const uniqClass = `rating-${this.uniqid}`;
        this.$container.addClass(uniqClass);
        this.stars = new StarRating('.' + uniqClass, {
            tooltip: '',
            clearable: false // not supported for now by the engine
        });
    }
}
