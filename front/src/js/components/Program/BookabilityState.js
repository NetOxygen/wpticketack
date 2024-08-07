import { Component } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Screening } from '../Models';
import _ from 'lodash';

/**
 * Handle program filters
 *
 * Usage:
 *
 * <[*]
 *    <!-- Required -->
 *    data-component="Program/BookabilityState"
 * >
 *
 *   For each screening/event you want to check the bookability, add:
 *   <[*] data-bookability-ids="12345678-1234-1234-1234-123456789012,...">
 *     <[*] class="show-while-loading"></[*]>
 *     <[*] class="show-if-bookable"></[*]>
 *     <[*] class="show-if-almost-not-bookable"></[*]>
 *     <[*] class="show-if-not-bookable"></[*]>
 *   </[*]>
 *
 * </[*]>
 */
export default class BookabilityState extends Component {
    static MIN_SEATS_OCCUPATION = 90;

    static STATE_NOT_SOLD_HERE       = 0;
    static STATE_NOT_BOOKABLE        = 1;
    static STATE_ALMOST_NOT_BOOKABLE = 2;
    static STATE_BOOKABLE            = 3;

    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.$container
            .addClass('tkt-bookability-state-wrapper')
            .addClass('loading-bookability-state');
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        const items = $('[data-bookability-ids]', this.$container);

        if (!items)
            return;

        const ids = _.compact(_.uniq(_.flatten(_.map(items, (i) => {
            return $(i).attr('data-bookability-ids').split(',');
        }))));

        let map = {};

        Screening.getInfos(ids, (err, screenings) => {
            _.each(screenings, (s) => {
                map[s._id] = {
                    seats: s.seats,
                    sold_here: (_.keys(s.pricings) || []).length > 0 || (s.eligible_types || []).length > 0,
                    booking_mode: s.opaque?.booking_mode,
                    booking_note: s.opaque?.booking_note,
                    cannot_book_explanation: s.cannot_book_explanation || ''
                }
                // sometimes we use the Program/BookabilityState component
                // with refs and not screening _ids.
                if (s.screening_refs?.length > 0) {
                    s.screening_refs.map(ref => {
                        if (ref?.id)
                            map[ref.id] = map[s._id];
                    });
                }
            });

            _.each(items, (i) => {
                let booking_mode = null;
                let booking_note = "";
                let ids = $(i).attr('data-bookability-ids').split(',');

                let cannot_book_explanation = '';
                let state = _.max(_.map(ids, (id) => {
                    // FIXME: we consider only the first booking_mode...
                    cannot_book_explanation = map[id].cannot_book_explanation || '';
                    booking_mode  = booking_mode || map[id].booking_mode;
                    if (booking_mode) {
                        booking_note  = map[id].booking_note || booking_note;
                    }

                    let seats     = map[id] ? map[id]['seats'] : 0;
                    let sold_here = map[id] ? map[id]['sold_here'] : false;
                    if (!sold_here)
                        return BookabilityState.STATE_NOT_SOLD_HERE;
                    if (seats.available == 0) {
                        return BookabilityState.STATE_NOT_BOOKABLE;
                    }
                    if (seats.occupation_percentage >= BookabilityState.MIN_SEATS_OCCUPATION)
                        return BookabilityState.STATE_ALMOST_NOT_BOOKABLE;
                    return BookabilityState.STATE_BOOKABLE;
                }));


                if (cannot_book_explanation.length)
                    $('.show-if-not-bookable', $(i)).html(cannot_book_explanation);

                switch (state) {
                    case BookabilityState.STATE_NOT_SOLD_HERE:
                        if (booking_mode) {
                            // Replace the bookingform if TKT is not used
                            // and display a message booking_note
                            const lang = window.tkt_config?.lang || 'fr';
                            $('.book-section').html('<div class="booking_note">'+ booking_note[lang] +'</div>');
                            return $(i).addClass('not-bookable-with-tkt');
                        }
                        return $(i).addClass('not-sold-here');
                    case BookabilityState.STATE_NOT_BOOKABLE:
                        return $(i).addClass('not-bookable');
                    case BookabilityState.STATE_ALMOST_NOT_BOOKABLE:
                        return $(i).addClass('almost-not-bookable');
                    case BookabilityState.STATE_BOOKABLE:
                        return $(i).addClass('bookable');
                }
            });

            this.$container
                .removeClass('loading-bookability-state')
                .addClass('loaded-bookability-state');
        });
    }
}
