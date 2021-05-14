import { Config, Component } from '../Core';
import flatpickr from "flatpickr";
import { French } from "flatpickr/dist/l10n/fr.js";
import { English } from "flatpickr/dist/l10n/default.js";
import { Deutsch } from "flatpickr/dist/l10n/de.js";

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
 *    data-data-format="d.m.Y" <!-- default: d.m.Y -->
 * >
 */
export default class Calendar extends Component {
    constructor($container, state) {
        super($container, state);

        this.dateFormat  = this.$container.data('date-format') || 'Y-m-d';
        this.altFormat   = this.$container.data('alt-format') || this.dateFormat;
        this.defaultDate = this.$container.data('default-date') || '';
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
        flatpickr(this.$container, {
            locale: this.get_locale(),
            altInput: true,
            dateFormat: this.dateFormat,
            altFormat: this.altFormat,
            defaultDate: this.defaultDate,
        });
    }
}
