import BaseModel from './Base';
import ArticleVariant from './ArticleVariant';
import { Api as TKTApi } from '../Ticketack';
import _ from 'lodash';
import async from 'async';
import moment from 'moment';

/**
 * Article model
 */
export default class Article extends BaseModel {
    static type               = 'article';
    static STOCK_TYPE_NONE    = 'none';
    static STOCK_TYPE_ARTICLE = 'article';
    static STOCK_TYPE_VARIANT = 'variant';

    static infos_cache = new (function() {
        this.set = (id, article) => {
            this[id] = article;
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
     * @param {Object} article like returned from the engine
     */
    constructor(article) {
        super(article);

        this.variants = this.variants.map(variant => new ArticleVariant(variant));
    }

    /**
     * Get a variant by its id
     *
     * @param {UUID} variant id
     * @return {ArticleVariant} if found, undefined otherwise
     */
    getVariant(_id) {
        return _.find(this.variants, ['_id', _id]);
    }

    /**
     * Load some articles infos
     * @param {Array} ids - The ids to get infos for
     * @param {Function} callback - Callback function
     */
    static getInfos = (ids, forceReload, callback) => {
        callback = callback || (() => {
            console.log('callback not defined');
        });

        if (Article.isAlreadyGettingInfos)
            return setTimeout(
                () => Article.getInfos(ids, forceReload, callback),
                500
            );

        // lock to prevent concurrent calls
        Article.isAlreadyGettingInfos = true;

        const infos   = [];

        // consider only not already loaded ids
        if (!forceReload) {
            ids = ids.filter(id => {
                if (Article.infos_cache.has(id)) {
                    infos.push(Article.infos_cache.get(id));
                    return false;
                }
                return true;
            });
        }

        if (ids.length === 0) {
            Article.isAlreadyGettingInfos = false;
            return callback(/*err*/null, infos);
        }

        // The chunk size could be more precise. For now, we
        // know it works for 100 (for parc-aventure.ticketack.com)
        // and not for 120.
        const chunks = _.chunk(ids, 100);
        const tasks  = _.map(chunks, (ids) => {
            return (done) => {
                TKTApi.getArticlesInfo(ids, (err, status, rsp) => {
                    if (err)
                        return done(err);

                    return done(/*err*/null, rsp);
                });
            };
        });

        async.parallel(tasks, (err, results) => {
            // release lock
            Article.isAlreadyGettingInfos = false;

            if (err)
                return callback(err);

            _.flatten(results).map(result => {
                result.articles.map(a => {
                    const article = new Article(a);

                    // put in cache
                    Article.infos_cache.set(article._id, article);

                    infos.push(article);
                });
            });

            return callback(/*err*/null, infos);
        });
    }
}
