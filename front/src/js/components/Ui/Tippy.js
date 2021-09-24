import { Component, Template } from '../Core';
import tippy, {roundArrow} from 'tippy.js';

import 'tippy.js/themes/light.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/themes/translucent.css';

import 'tippy.js/dist/svg-arrow.css';

/**
 * create simple static text tooltips or 
 * complex HTML popovers
 *
 * Usage:
 *
 * <div
 *      <!-- Required -->
 *      data-component="Ui/Tippy"
 *      data-tippy-content="Tooltip text"
 * 
 *      <!-- Optional -->
 *      data-tippy-position="auto|top|right|bottom|left|top-start|top-end"
 *      data-tippy-theme="light|light-border|translucent|dark|default"
 * >
 * 
 * See https://kabbouchi.github.io/tippyjs-v4-docs/all-options/
 */
export default class Tippy extends Component {
    constructor($container, state, loader) {
        super($container, state, loader);

        this.position = this.$container.data('tippy-position') || 'auto';
        this.theme    = this.$container.data('tippy-theme') || 'default';
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        tippy(this.$container.get(0), {
            placement: this.position,
            theme: this.theme,
            arrow: roundArrow,
            flip: true,
            maxWidth: 800,
        });
    }
}
