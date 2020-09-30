import Logger from './Logger';
import _ from 'lodash';
import dottie from 'dottie';

/**
 * Application state abstraction, stored in LocalStorage
 */
export default class State {

    static STATE_KEY = 'js_components_state';

    /**
     * @constructor
     */
    construct() {
        this.restore();
    }

    /**
     * Restore previous state from storage
     */
    restore() {
        this.state = localStorage.getItem(State.STATE_KEY) || {};

        if (_.isString(this.state))
            this.state = JSON.parse(this.state);

        this.needs_to_read_from_storage = false;
    }

    /**
     * Save current state into the storage
     */
    save() {
        this.needs_to_read_from_storage = true;
        return localStorage.setItem(State.STATE_KEY, JSON.stringify(this.state));
    }

    /**
     * Set a new state value
     * @param {String} path - The path
     * @param {*} value - The value
     */
    set(path, value) {
        if (_.isArray(path))
            path = path.join('.');

        dottie.set(this.state, path, value);
        this.save();
    }

    /**
     * Unset a state value
     * @param {String} path - The path
     */
    unset(path) {
        return this.set(path, undefined);
    }

    /**
     * Check if the state contains the path
     * @param {String} path - The path
     */
    has(path) {
        if (_.isArray(path))
            path = path.join('.');

        return dottie.exists(this.state, path);
    }

    /**
     * Get a value from the state
     * @param {String} path - The path
     * @param {*} default_value - The default value
     */
    get(path, default_value) {
        if (this.needs_to_read_from_storage)
            this.restore();

        if (_.isArray(path))
            path = path.join('.');

        if (!dottie.exists(this.state, path))
            return default_value;

        return dottie.get(this.state, path);
    }
};
