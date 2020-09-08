import { Ticketack } from '../Ext';
import { Config } from '../Core';

/**
 * Wrap the Ticketack API
 */
class Api extends Ticketack {
    /**
     * @constructor
     */
    constructor() {
        super(
            Config.get('eshop_uri'),
            Config.get('api_key')
        );
    }
}

const ApiSingleton = new Api();
export default ApiSingleton;
