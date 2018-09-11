/**
 * Handle program filters
 *
 * Usage:
 *
 * <[*]
 *    <!-- Required -->
 *    data-component="Program/BookabilityState"
 * >
 *
 *   For each screening/event you want to check the bookability, add:
 *   <[*] data-bookability-ids="12345678-1234-1234-1234-123456789012,...">
 *     <[*] class="show-while-loading"></[*]>
 *     <[*] class="show-if-bookable"></[*]>
 *     <[*] class="show-if-almost-not-bookable"></[*]>
 *     <[*] class="show-if-not-bookable"></[*]>
 *   </[*]>
 *
 * </[*]>
 */
define(
    ['jquery', 'lodash', 'async', 'api'],
    function dependencies($, _, async, TKTApi) {

    const MIN_SEATS_OCCUPATION = 90;

    const STATE_NOT_SOLD_HERE       = 0;
    const STATE_NOT_BOOKABLE        = 1;
    const STATE_ALMOST_NOT_BOOKABLE = 2;
    const STATE_BOOKABLE            = 3;

    function BookabilityState($container, state) {
        this.$container = $container;

        this.$container
            .addClass('tkt-bookability-state-wrapper')
            .addClass('loading-bookability-state');
    }

    BookabilityState.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            const items = $('[data-bookability-ids]', this.$container);

            if (!items)
                return;

            const ids = _.uniq(_.flatten(_.map(items, (i) => {
                return $(i).attr('data-bookability-ids').split(',');
            })));

            let map = {};

            const chunks = _.chunk(ids, 150);
            const tasks  = _.map(chunks, (ids) => {
                return (done) => {
                    TKTApi.getScreeningsInfo(ids, (err, status, rsp) => {
                        if (err)
                            return done(err);

                        _.each(rsp, (s) => {
                            map[s._id] = {
                                seats: s.seats,
                                sold_here: _.keys(s.pricings).length > 0
                            }
                        });

                        return done(/*err*/null);
                    });
                };
            });

            async.parallel(tasks, (err, results) => {
                if (err)
                    return err;

                _.each(items, (i) => {
                    let ids = $(i).attr('data-bookability-ids').split(',');
                    let state = _.max(_.map(ids, (i) => {
                        let seats     = map[i]['seats'];
                        let sold_here = map[i]['sold_here'];
                        if (!sold_here)
                            return STATE_NOT_SOLD_HERE;
                        if (seats.available == 0)
                            return STATE_NOT_BOOKABLE;
                        if (seats.occupation_percentage >= MIN_SEATS_OCCUPATION)
                            return STATE_ALMOST_NOT_BOOKABLE;
                        return STATE_BOOKABLE;
                    }));

                    switch (state) {
                        case STATE_NOT_SOLD_HERE:
                            return;
                        case STATE_NOT_BOOKABLE:
                            return $(i).addClass('not-bookable');
                        case STATE_ALMOST_NOT_BOOKABLE:
                            return $(i).addClass('almost-not-bookable');
                        case STATE_BOOKABLE:
                            return $(i).addClass('bookable');
                    }
                });

                this.$container
                    .removeClass('loading-bookability-state')
                    .addClass('loaded-bookability-state');

                $('.show-if-bookable,.show-if-almost-not-bookable,.show-if-not-bookable', this.$container).removeClass('d-none');
            });
        },

        detach: function() {

        }
    };
 
    return BookabilityState;
});
