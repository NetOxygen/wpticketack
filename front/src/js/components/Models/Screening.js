import BaseModel from './Base';
import { Api as TKTApi } from '../Ticketack';
import Pricing from './Pricing';
import _ from 'lodash';
import async from 'async';
import moment from 'moment';

/**
 * Screening model
 */
export default class Screening extends BaseModel {
    static type = 'screening';

    static infos_cache = new (function() {
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

    /**
     * @constructor
     * @param {Object} screening like returned from the engine
     */
    constructor(screening) {
        super(screening);

        this.start_at = moment(screening.start_at);
        this.stop_at  = moment(screening.stop_at);
        this.buckets  = this.buckets.map((b) => {
            if ('not_before' in b.rules)
                b.rules.not_before = moment(b.rules.not_before);
            if ('not_after' in b.rules)
                b.rules.not_after = moment(b.rules.not_after);

            return b;
        });

        if (this.pricings) {
            Object.keys(this.pricings).map((pricingId) => {
                this.pricings[pricingId]= new Pricing(this.pricings[pricingId]);
                this.pricings[pricingId].key = pricingId;
            });
        }
    }

    /**
     * Get this screening localized title
     *
     * @return {String}
     */
    getTitle(lang) {
        if (!(lang in this.title))
            return this.title.original;

        return this.title.fr;
    }

    /**
     * Get this screening formatted start_at date
     * @return {String}
     */
    getFormattedStartAt() {
        return this.start_at.format('LLL');
    };

    /**
     * Get this screening first poster
     *
     * @return {String}
     */
    getFirstPosterUrl() {
        if (!this.opaque.posters || this.opaque.posters.length == 0)
            return null;

        return this.opaque.posters[0].url;
    }

    /**
     * Load some screenings infos
     * @param {Array} ids - The ids to get infoos for
     * @param {Function} callback - Callback function
     */
    static getInfos = (ids, callback) => {
        if (!ids || ids.length == 0)
            return callback(/*err*/null, []);

        if (Screening.isAlreadyGettingInfos)
            return setTimeout(
                () => Screening.getInfos(ids, callback),
                20
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

        if (ids.length === 0) {
            Screening.isAlreadyGettingInfos = false;
            return callback(/*err*/null, infos);
        }

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
            // release lock
            Screening.isAlreadyGettingInfos = false;

            if (err)
                return callback(err);

            _.flatten(results).map(s => {
                const screening = new Screening(s);
                screening.eligible_types = s.eligible_types;

                // put in cache
                Screening.infos_cache.set(screening._id, screening);

                infos.push(screening);
            });

            return callback(/*err*/null, infos);
        });
    }

    getMatchingPricings(roles, tickettype) {
        const allowedPricings = {};
        Object.keys(this.pricings).map(pricingId => {
            const pricing = this.pricings[pricingId];
            if (pricing.rulesMatch(roles, tickettype))
                allowedPricings[pricingId] = pricing;
        })

        return allowedPricings;
    }
}
