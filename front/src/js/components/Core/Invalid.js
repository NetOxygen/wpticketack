import { i18n } from '../Core';
import _ from 'lodash';

/**
 * Invalid manager
 */
class Invalid {
    /**
     * Interprets an "invalid" object sent by the engine
     *
     * @param {Object} invalid - The invalid data received from the engine
     *
     * @return {Array}
     */
    interpret(invalid) {
        return Object.keys(invalid).map(key => (
            i18n.t(key) + ': ' + i18n.t(invalid[key])
        ));
    };
}

const invalidSingleton = new Invalid();
export default invalidSingleton;
