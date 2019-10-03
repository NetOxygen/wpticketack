/**
 * Handle program filters
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Program/Filter"
 *    data-criterium="date,section,..."
 *
 *    <!-- Optional -->
 *    data-target="tkt_program_event"
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

            this.criterium = this.$container.data('criterium').split(',');
            this.target      = this.$container.data('target') ||
                               '.tkt_program_event,.tkt_program_screening';
            this.$filters = $('.tkt-filter', this.$container);
        }

        Filter.prototype = {
            attach: function() {
                this.init();
            },

            init: function() {
                this.state = { filters: {}};
                this.criterium.map((k) => {
                    this.update_state(k, "");
                });
                this.$filters.click((e) => this.handle_click(e));

                this.$filters.each((i, f) => {
                    let criteria = $(f).data('criteria');
                    let value    = $(f).data(criteria);
                    if (!value)
                        return;
                    if ($(this.target + '[data-' + criteria + '*="' + value + '"]').length == 0)
                        $(f).remove();
                });
            },

            handle_click: function (e) {
                let $filter    = $(e.target);
                if ($filter.parent('.tkt-filter').length) {
                    $filter = $filter.parent('.tkt-filter');
                }
                let criteria = $filter.data('criteria');
                let value    = $filter.data(criteria);

                this.update_state(criteria, value);

                this.sync_ui();
            },

            update_state: function (criteria, value) {
                this.state.filters[criteria] = value;
            },

            sync_ui: function() {
                $(this.target).addClass('to_show');
                this.criterium.map((criteria) => {
                    const value = this.state.filters[criteria];
                    $('.tkt-filter[data-criteria="' + criteria + '"]').not('[data-criteria=""]').removeClass('active');
                    $('.tkt-filter[data-criteria="' + criteria + '"][data-' + criteria + '="' + value + '"]').addClass('active');

                    if (value)
                        $(this.target).not('[data-' + criteria + '*="' + value + '"]').removeClass('to_show');
                });

                $(this.target).hide();
                $(this.target.replace(',', '.to_show,') + '.to_show').fadeIn();
            },

            detach: function() {

            }
        };

        return Filter;
    });
