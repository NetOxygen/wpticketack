import { Config, Component } from '../Core';
import flatpickr from "flatpickr";
import { French } from "flatpickr/dist/l10n/fr.js";
import { English } from "flatpickr/dist/l10n/default.js";
import { Deutsch } from "flatpickr/dist/l10n/de.js";
import _ from 'lodash';
import moment from 'moment';

/**
 * Convert a text input into a calendar
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Form/Calendar"
 *
 *    <!-- Optional -->
 *    data-date-format="d.m.Y" <!-- default: d.m.Y -->
 *    data-alt-format="d.m.Y" <!-- default: d.m.Y -->
 *    data-default-date="2024-07-23"
 *    data-enable="2024-07-23,2024-07-24,2024-07-25"
 *    data-inline="true"
 *    data-theme="dark"
 *    data-dots=''
 *    data-dots='{"2024-07-23":["section-1","section-3"],"2024-07-24":["section-2","section-1"],"2024-07-25":["section-1","section-3"]}'
 * >
 */
export default class Calendar extends Component {
    constructor($container, state) {
        super($container, state);

        this.dateFormat  = this.$container.data('date-format') || 'Y-m-d';
        this.altFormat   = this.$container.data('alt-format') || this.dateFormat;
        this.defaultDate = this.$container.data('default-date') || '';
        this.enable      = this.$container.data('enable') || '';
        this.inline      = !!this.$container.data('inline');
        this.dots        = this.$container.data('dots') || {};
        this.theme       = this.$container.data('theme');
    }

    attach() {
        this.init();
    }

    get_locale() {
        switch (Config.get('lang')) {
            case 'fr':
                return French;
            case 'de':
                return Deutsch;
            case 'en':
            default:
                return English;
        }
    }

    init() {
        const config = {
            locale: this.get_locale(),
            altInput: true,
            dateFormat: this.dateFormat,
            altFormat: this.altFormat,
            defaultDate: this.defaultDate,
            enable: this.enable.split(','),
            position: 'auto center',
            inline: this.inline,
            allowInvalidPreload: true,
            onDayCreate:(dObj, dStr, fp, dayElem) => {
                if (!_.isObject(this.dots))
                    return;

                const day = moment(dayElem.dateObj).format('YYYY-MM-DD');
                if (!(day in this.dots))
                    return;

                let html = '<span class="dots-wrapper">';
                this.dots[day].forEach(dot => {
                    html += `<span class='dot ${dot}'></span>`;
                });
                html += '</span>';
                dayElem.innerHTML += html;
            }
        }

        if (this.theme)
            config.theme = this.theme;

        if (this.theme === 'dark')
            $('body').addClass('dark-calendar');

        const instance = flatpickr(this.$container, config);
    }
}
