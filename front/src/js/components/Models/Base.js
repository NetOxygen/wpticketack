import { i18n } from '../Core';

/**
 * Base model
 */
export default class BaseModel {
    /**
     * @constructor
     * @param {Object} properties - The model properties
     */
    constructor(properties) {
        Object.assign(this, properties || {});
    }

    /**
     * Helper function to  format an amount depending on the current locale and currency
     *
     * @param  {number}
     * @return {String}
     */
    getFormatedAmount(amount) {
        return parseFloat(amount).toLocaleString(i18n.language, {currency: 'CHF', style: 'currency'});
    }

    /**
      * Clean formatted amounts (like the ones received from the eshop, ex: 1'234)
      *
      * @param {String}
      * @return {String}
      */
    cleanAmount(string) {
        return string.replace("'", "");
    }

}
