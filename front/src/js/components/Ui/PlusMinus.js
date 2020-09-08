import { Component, Template } from '../Core';
import _ from 'lodash';
import postal from 'postal';

/**
 * Convert number inputs to components with a plus and
 * a minus button.
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Ui/PlusMinus"
 *
 *    <!-- Optional -->
 * >
 */
export default class PlusMinus extends Component {
    attach() {
        super.attach();
        setTimeout((e) => {
            this.init();
        }, 4000);
    }

    init() {
        this.$inputs = $('.plus-minus-input', this.$container);
        _.map(this.$inputs, (i) => {
            this.build_ui(i);
        });
    }

    build_ui(input) {
        const $parent = $(input).parent();
        const $wrapper = $('<div/>')
            .addClass('input-group');
        const $minus_btn = $('<span/>')
            .addClass('.input-group-btn')
            .text('-');
        const $plus_btn = $('<span/>')
            .addClass('.input-group-btn')
            .text('-');
        $wrapper
            .append($minus_btn)
            .append(input)
            .append($plus_btn)
            .appendTo($parent);
    }
}
