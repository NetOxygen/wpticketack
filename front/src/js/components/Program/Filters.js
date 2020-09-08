import { Component } from '../Core';
import _ from 'lodash';
import moment from 'moment';
import postal from 'postal';

/**
 * Handle program filters
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Program/Filters"
 *
 *    <!-- Optional -->
 *    data-target-class="tkt_program_event"
 * >
 *   <ul>
 *     <li class="tkt-filter data-filter-type=[day|time|place] data-filter="...">...</div>
 *     <li class="tkt-filter data-filter-type=[day|time|place] data-filter="...">...</div>
 *     <li class="tkt-filter data-filter-type=[day|time|place] data-filter="...">...</div>
 *     <li class="tkt-filter data-filter-type=[day|time|place] data-filter="...">...</div>
 *   </ul>
 * </div>
 */
export default class Filters extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.FILTER_TYPE_DAY   = 'day';
        this.FILTER_TYPE_TIME  = 'time';
        this.FILTER_TYPE_PLACE = 'place';

        this.target   = '.' + (this.$container.data('target-class') || 'tkt_program_event');
        this.$targets = $(this.target, this.$container);
        this.$filters = $('.tkt-filter', this.$container);
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        this.$filters.click((e) => this.handle_click(e));
    }

    handle_click(e) {
        let $filter = $(e.target);
        if ($filter.parent('.tkt-filter').length) {
            $filter = $filter.parent('.tkt-filter');
        }

        const value    = $filter.data('filter');
        const criteria = $filter.data('filter-type');

        if ($filter.hasClass('active')) {
            $('.tkt-filter[data-filter-type="' + criteria + '"]').removeClass('active');
        } else {
            $('.tkt-filter[data-filter-type="' + criteria + '"]').removeClass('active');
            $filter.addClass('active');
        }

        _.map(this.$targets, (t) => { $(t).attr('data-filter-show', true); });

        this.filter_on_day(this.get_active_filter_value(this.FILTER_TYPE_DAY));
        this.filter_on_time(this.get_active_filter_value(this.FILTER_TYPE_TIME));
        this.filter_on_place(this.get_active_filter_value(this.FILTER_TYPE_PLACE));

        $(this.target + '[data-filter-show="false"]', this.$container).hide();
        $(this.target + '[data-filter-show="true"]', this.$container).fadeIn();
    }

    filter_on_day(value) {
        if (!value)
            return;

        $(this.target).not('[data-day*="' + value + '"]').attr('data-filter-show', false);
    }

    filter_on_time(value) {
        if (!value)
            return;

        const parts = value.split('-');
        const lower = moment(parts[0], 'HH:mm');
        const upper = moment(parts[1], 'HH:mm');

        _.map(this.$targets, (t) => {
            const time = moment($(t).data('time'), 'HH:mm');
            if (time.isBefore(lower) || time.isSame(upper) || time.isAfter(upper))
                $(t).attr('data-filter-show', false);
        });
    }

    filter_on_place(value) {
        if (!value)
            return;

        $(this.target).not('[data-place*="' + value + '"]').attr('data-filter-show', false);
    }

    get_active_filter_value(criteria) {
        const active = $('.tkt-filter[data-filter-type="' + criteria + '"].active');
        return active ? $(active).data('filter') : null;
    }
}
