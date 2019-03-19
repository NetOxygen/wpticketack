/**
 * Convert number inputs to components with a plus and
 * a minus button.
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Ui/Loader"
 *
 *    <!-- Optional -->
 * >
 */
define(
    ['postal', 'jquery', 'lodash', 'bootstrap', 'template'],
    function dependencies(postal, $, _, Template) {

    function Loader($container, state) {
        this.$container = $container;
        this.$container.addClass('tkt-loader-wrapper');
    }

    Loader.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            this.$overlay = $('<div/>').addClass('tkt-loader-overlay');
            const $spinner = $('<img/>')
                .addClass('tkt-loader-spinner')
                .attr('src', '/wp-content/themes/lafabrica/images/spinner.svg');
            this.$overlay.append($spinner);
            this.$container.append(this.$overlay);

            $(document).ajaxStart((e) => {
                this.$overlay.show();
            });
            $(document).ajaxComplete((e) => {
                this.$overlay.hide();
            });
        },

        detach: function() {
            this.$overlay.show();
        }
    };

    return Loader;
});
