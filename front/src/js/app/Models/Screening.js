/**
 * Screening model
 */
define(
    ['module', 'lodash', 'moment', 'app/Models/Base', 'api', 'async'],
    function dependencies(module, _, moment, BaseModel, TKTApi, async) {

    Screening.type = 'screening';

    /**
     * Constructor
     *
     * @param {Object} screening like returned from the engine
     */
    function Screening(screening) {
        BaseModel.call(this, screening);
        screening = screening || {};

        _.mapKeys(screening, (val, key) => {
            this[key] = val;
        });

        this.start_at = moment(screening.start_at);
        this.stop_at  = moment(screening.stop_at);
        this.buckets  = this.buckets.map((b) => {
            if ('not_before' in b.rules)
                b.rules.not_before = moment(b.rules.not_before);
            if ('not_after' in b.rules)
                b.rules.not_after = moment(b.rules.not_after);

            return b;
        });
    }

    Screening.getInfos = (ids, callback) => {
        if (Screening.isAlreadyGettingInfos)
            return setTimeout(
                () => Screening.getInfos(ids, callback),
                500
            );

        // lock to prevent concurrent calls
        Screening.isAlreadyGettingInfos = true;

        const infos   = [];

        // consider only not already loaded ids
        ids = ids.filter(id => {
            if (Screening.infos_cache.has(id)) {
                infos.push(Screening.infos_cache.get(id));

                return false;
            }

            return true;
        });

        if (ids.length === 0)
            return callback(/*err*/null, infos);

        // The chunk size could be more precise. For now, we
        // know it works for 100 (for parc-aventure.ticketack.com)
        // and not for 120.
        const chunks = _.chunk(ids, 100);
        const tasks  = _.map(chunks, (ids) => {
            return (done) => {
                TKTApi.getScreeningsInfo(ids, (err, status, rsp) => {
                    if (err)
                        return done(err);

                    return done(/*err*/null, rsp);
                });
            };
        });

        async.parallel(tasks, (err, results) => {
            if (err)
                return err;

            results.flat().map(s => {
                const screening = new Screening(s);
                screening.eligible_types = s.eligible_types;

                // put in cache
                Screening.infos_cache.set(screening._id, screening);

                infos.push(screening);
            });

            // release lock
            Screening.isAlreadyGettingInfos = false;

            return callback(/*err*/null, infos);
        });
    }

    Screening.infos_cache = new (function() {
        this.set = (id, screening) => {
            this[id] = screening;
        };
        this.has = (id) => {
            return id in this;
        };
        this.get = (id) => {
            return this.has(id) ? this[id] : null;
        };
    });

    return Screening;
});
