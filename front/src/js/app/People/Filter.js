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
    ['lodash', 'urijs/URI'],
    function dependencies(_, URI) {
        function Filter($container, state) {
            this.$container = $container;

            this.state = {}; 
        };

        Filter.prototype = {
            attach: function() {
                this.init();

                console.log('Testddd');
            },

            init: function() {
                this.state = {
                    filters: {
                        country: undefined
                    },
                    items_to_show: []
                };

                ['country'].map(filter => {
                    console.log(filter);
                });
            },

            detach: function() {

            }
        };

        return Filter;
    }
);