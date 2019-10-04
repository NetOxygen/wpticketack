/**
 * People filters
 *
 * Usage:
 *
 * <div
 *     <!-- Required -->
 *     data-component="People/Filters"
 * >
 */
define(
    ['jquery', 'lodash', 'urijs', 'matchsorter'],
    function dependencies($, _, URI, matchsorter) {
        function Filter($container, state) {
            this.$container = $container;

            this.state = {};

            this.$person = $('.tkt-person', this.$container);

            this.$filters_country    = $('ul li a.tkt-filter-country', this.$container);
            this.$filters_company    = $('ul li a.tkt-filter-company', this.$container);
            this.$filters_profession = $('ul li a.tkt-filter-profession', this.$container);
            this.$filters_tags       = $('input.tkt-filter-tags', this.$container);
        };

        Filter.prototype = {
            attach: function() {
                this.init();
            },

            init: function() {
                this.state = {
                    filters: {
                        country: undefined,
                        company: undefined,
                        profession: undefined
                    }
                };

                ['country', 'company', 'profession'].map(filter => {
                    this['$filters_'+filter].on('click', e => {
                        e.preventDefault();

                        const $link = $(e.target);
                        const href  = $link.attr('href');

                        this.set_filter_value(filter, $link.attr('href'))
                        this.run();
                    });
                });

                ['tags'].map(filter => {
                    this['$filters_'+filter].on('input', _.debounce(e => {
                        this.set_filter_value(filter, e.target.value);
                        this.run();
                    }, 250));
                });

                this.run();
            },

            set_filter_value: function (filter, value) {
                this.state.filters[filter] = this.clean_filter_value(value);

                this.sync_dom_with_state_filters();
                this.sync_url_with_state_filters();
            },

            // Update the UI
            sync_dom_with_state_filters: function () {
                ['country', 'company', 'profession'].map(filter => {
                    this['$filters_' + filter].removeClass('active');

                    const filter_value = this.state.filters[filter];
                    if (filter_value) {
                        const $active_link = $('a[href="#' + filter_value + '"]', this.$container);
                        $active_link.addClass('active');
                    }
                });
                ['tags'].map(filter => {
                    const filter_value = this.state.filters[filter];

                    if (filter_value) {
                        this['$filters_' + filter].val(filter_value);
                    }
                });
            },

            // Update the url
            sync_url_with_state_filters: function () {
                const new_url = new URI(window.location.href);

                ['country', 'company', 'profession', 'tags'].map(filter => {
                    new_url.removeQuery(filter);
                    if (this.state.filters[filter]) {
                        new_url.setQuery(filter, this.state.filters[filter]);
                    }
                });
                window.history.pushState("", "Title", new_url.toString());
            },

            // Update the state depending on url
            sync_state_with_url: function () {
                const url   = new URI(window.location.href);
                const query = URI.parseQuery(url.query());

                this.state.filters = _.defaults(this.state.filters, query);
            },

            sync_total_by_filter_value: function () {
                ['country', 'company', 'profession'].map(filter => {
                    this['$filters_'+filter].parent('li:not(.reset-filter)').removeClass('to_show');
                    this['$filters_'+filter].map((i, link) => {
                        const filter_value = this.clean_filter_value($(link).attr('href'));
                        const shown_person = this.$person.filter('[data-' + filter + '="' + filter_value + '"].to_show').length;
                        $('.tkt-filter-' + filter + '-total[data-' + filter + '="' + filter_value + '"]').html(shown_person);

                        if (shown_person > 0) {
                            this['$filters_'+filter].filter('[href="#' + filter_value + '"]').parent('li').addClass('to_show');
                        }
                    });

                    this['$filters_'+filter].parent('li:not(.reset-filter)').hide();
                    this['$filters_'+filter].parent('li.to_show').fadeIn();
                });
            },

            run: function () {
                this.sync_state_with_url();
                this.sync_dom_with_state_filters();
                this.handle_filters();
                this.sync_total_by_filter_value();
            },

            clean_filter_value: function (value) {
                if (!value) {
                    return value;
                }
                return value.replace('#', '');
            },

            handle_filters: function () {
                // Reset filters
                this.$person.addClass('to_show');

                ['country', 'company', 'profession'].map(filter => {
                    if (this.state.filters[filter]) {
                        const filter_value = this.state.filters[filter];
                        this.$person.not('[data-' + filter + '="' + filter_value + '"]').removeClass('to_show');
                    }
                });

                const ms = matchsorter.default;
                ['tags'].map(filter => {
                    if (this.state.filters[filter]) {
                        this.$person.map((i, person) => {
                            const match = ms([$(person).data(filter)], this.state.filters[filter], {threshold: ms.rankings.CONTAINS});
                            if (!match.length) {
                                $(person).removeClass('to_show');
                            }
                        });
                    }
                });

                this.$person.hide();
                $('.to_show', this.$container).fadeIn();
            },

            detach: function() {

            }
        };

        return Filter;
    }
);