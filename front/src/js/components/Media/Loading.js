import { Component } from '../Core';

/**
 * Generate a loading animation
 *
 * Usage:
 *
 * <[*]
 *    <!-- Required -->
 *    data-component="Media/Loading"
 *
 *    <!-- Optional -->
 *    [data-md | data-sm | data-xs]
 * >
 * </[*]>
 */
export default class Loading extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.$container.addClass('tkt-loading');
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        this.$container.append(`
          <div class="tkt-loading-wrapper">
            <div class="lds-double-ring">
              <div class="tkt-loading-outer"></div>
              <div class="tkt-loading-inner"></div>
            </div>
          </div>
        `);
    }
}
