/**
 * Config manager
 */
class Config {
    /**
     * Configuration, got from global
     * variable tkt_config
     */
    params = {};

    /**
     * @constructor
     */
    constructor() {
        this.params = window.tkt_config;
    }

    /**
     * Get a configuration value
     * @param {string} key - The key
     * @param {*} default - The default value
     */
    get(key, _default) {
        if (key in this.params)
            return this.params[key];

        return _default;
    };
}

const ConfigSingleton = new Config();
export default ConfigSingleton;
