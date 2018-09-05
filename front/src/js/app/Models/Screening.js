/**
 * Screening model
 */
define(
    ['module', 'lodash', 'moment', 'app/Models/Base'],
    function dependencies(module, _, moment, BaseModel) {

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

    return Screening;
});
