import { Component, Template } from '../Core';
import { Screening } from '../Models';
import _ from 'lodash';

/**
 * Handle program agenda
 *
 * Usage:
 *
 * <[*]
 *    <!-- Required -->
 *    data-component="Program/Agenda"
 * >
 *
 *   For each day, add:
 *   <[*] class="tkt_agenda_day">
 *       <[*] class="day_title_wrapper">
 *           <[*] class="arrow arrow-left inactive|active"></[*]>
 *           <[*] class="day_title"></[*]>
 *           <[*] class="arrow arrow-right inactive|active"></[*]>
 *       </[*]>
 *       <[*] class="tkt_program_screenings">
 *       </[*]>
 *   </[*]>
 *
 * </[*]>
 */
export default class Agenda extends Component {

    /**
     * @constructor
     */
    constructor($container, state, loader) {
        super($container, state, loader);

        /**
         * Current day index
         */
        this.current = 0;

        /**
         * All available days
         **/
        this.$days = $('.tkt_agenda_day', this.$container);
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        $('.arrow-left.active', this.$container).on('click', () => {
            this.current--;
            this.render();
        });
        $('.arrow-right.active', this.$container).on('click', () => {
            this.current++;
            this.render();
        });

        this.$modal = $('<div class="tkt-modal"></div>').appendTo(this.$container);
        $('.show-booking-modal', this.$container).on('click', e => {
            e.preventDefault();

            let $target = $(e.target);
            if (!$target.hasClass('show-booking-modal'))
                $target = $target.closest('.show-booking-modal');
            const screeningId = $target.data('screening-id');


            Screening.getInfos([screeningId], (err, screenings) => {
                this.$modal.html(Template.render('tkt-agenda-modal-tpl', {
                    screening: screenings[0],
                }));
                this.loader.attach();

                $('.close-modal', this.$container).on('click', () => {
                    this.$modal.html('');
                });
            });
        });

        this.render();
    }

    render() {
        this.$days.addClass('hidden');
        this.$days.eq(this.current).removeClass('hidden');
    }
}
