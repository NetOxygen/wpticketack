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
}
