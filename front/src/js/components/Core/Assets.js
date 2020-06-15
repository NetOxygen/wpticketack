import Config from './Config';
import Logger from './Logger';
import urijs from 'urijs';

/**
 * Assets helper
 */
class Assets {
    /**
     * @constructor
     */
    constructor() {
        this.base_url = Config.get('base_url', '');
        this.version  = Config.get('version', (Math.floor(Date.now() / 1000)));
    }

    /**
     * Get an asset's versionned url
     * @param {String} asset - The asset
     * @return {String}
     */
    url(asset) {
        let uri = URI(asset).absoluteTo(this.base_url);
        uri.addSearch('_v', this.version);

        return uri.toString();
    }
}

const AssetsSingleton = new Assets();
export default AssetsSingleton;
