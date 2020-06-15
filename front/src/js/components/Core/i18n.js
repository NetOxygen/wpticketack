import Config from './Config';

/**
 * i18n manager
 */
class i18n {
    /**
     * @constructor
     */
    constructor() {
        this.translations = Config.get('i18n', {});
    }

    /**
     * Get a translation
     * @param {String} key - The key
     * @return {String}
     */
    t(key) {
        if (key in this.translations)
            return this.translations[key];

        return key;
    };
}

const i18nSingleton = new i18n();
export default i18nSingleton;
