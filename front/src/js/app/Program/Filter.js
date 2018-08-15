/**
 * Handle program filters
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Program/Filter"
 * >
 *   <ul>
 *     <li class="tkt-filter>...</div>
 *     <li class="tkt-filter>...</div>
 *     <li class="tkt-filter>...</div>
 *     <li class="tkt-filter>...</div>
 *   </ul>
 * </div>
 */
define(
    ['postal', 'jquery', 'bootstrap'],
    function dependencies(postal, $) {

        function Filter($container, state) {
            this.$container = $container;

            this._class   = this.$container.data('class') || 'tkt_program_event';
            this.$filters = $('.tkt-filter', this.$container);
        }

        Filter.prototype = {
            attach: function() {
                this.init();
            },

            init: function() {
                this.$filters.click((e) => {
                    let $filter = $(e.target);
                    let type    = $filter.data('type');

                    $('.tkt-filter').removeClass('active');
                    $filter.addClass('active');

                    this.filter_on($filter.data('type'));
                });

                this.$filters.each((i, f) => {
                    let type = $(f).data('type');
                    if (!type)
                        return;
                    if ($('.' + this._class + '[data-type="' + type + '"]').length == 0)
                        $(f).remove();
                });
            },

            filter_on: function (type) {
                if (!type)
                    return $('.' + this._class + '[data-type!="' + type + '"]').fadeIn();

                $('.' + this._class + '[data-type!="' + type + '"]').hide();
                $('.' + this._class + '[data-type="' + type + '"]').fadeIn();
            },

            detach: function() {

            }
        };

        return Filter;
    });
