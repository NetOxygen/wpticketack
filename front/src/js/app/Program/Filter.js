/**
 * Handle program filters
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Program/Filter"
 *
 *    <!-- Optional -->
 *    data-class="tkt_program_event"
 *    data-criteria="type"
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
    ['postal', 'jquery', 'lodash', 'bootstrap'],
    function dependencies(postal, $, _) {

        function Filter($container, state) {
            this.$container = $container;

            this.target   = this.$container.data('target') || '.tkt_program_event';
            this.criteria = this.$container.data('criteria') || 'type';
            this.$filters = $('.tkt-filter', this.$container);
        }

        Filter.prototype = {
            attach: function() {
                this.init();
            },

            init: function() {
                this.$filters.click((e) => this.handle_click(e));

                this.$filters.each((i, f) => {
                    let value = $(f).data(this.criteria);
                    if (!value)
                        return;
                    if ($(this.target + '[data-' + this.criteria + '*="' + value + '"]').length == 0)
                        $(f).remove();
                });
            },

            handle_click: function (e) {
                let $filter = $(e.target);
                if ($filter.parent('.tkt-filter').length) {
                    $filter = $filter.parent('.tkt-filter');
                }
                let value = $filter.data(this.criteria);

                $('.tkt-filter').removeClass('active');
                $filter.addClass('active');

                this.filter_on(this.target, this.criteria, value);
            },

            filter_on: (target, criteria, value) => {
                if (!value)
                    return $(this.target).not('[data-' + this.criteria + '*="' + value + '"]').fadeIn();

                $(target).not('[data-' + criteria + '*="' + value + '"]').hide();
                $(target + '[data-' + criteria + '*="' + value + '"]').fadeIn();
            },

            detach: function() {

            }
        };

        return Filter;
    });
