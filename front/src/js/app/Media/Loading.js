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
define(['jquery'], function dependencies(postal, $) {
    function Loading($container, state) {
        this.$container = $container;
        this.$container.addClass('tkt-loading');
    }

    Loading.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            this.$container.append(`
              <div class="tkt-loading-wrapper">
                <div class="lds-double-ring">
                  <div class="tkt-loading-outer"></div>
                  <div class="tkt-loading-inner"></div>
                </div>
              </div>
            `);
        },

        detach: function() {

        }
    };

    return Loading;
});
