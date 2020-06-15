import Config from './Config';

/**
 * Csrf manager
 */
class Csrf {
    /**
     * @constructor
     */
    constructor() {
        this.param = Config.get('csrf_param', 'csrf');
        this.token = Config.get('csrf_token', '');
    }

    /**
     * Get the CSRF param
     * @return {String}
     */
    getParam() {
        return this.param;
    }

    /**
     * Get the CSRF token
     * @return {String}
     */
    getToken() {
        return this.token;
    }
}

const CsrfSingleton = new Csrf();
export default CsrfSingleton;
