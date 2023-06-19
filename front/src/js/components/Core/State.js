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
     * Push a new value in a state array
     * @param {String} path - The path
     * @param {*} value - The value
     * @param {String} uniqueBy - If set, ensure that the new entry
     *                            is unique in the array (by this property)
     *
     * Example:
     *     this.state.push('tickets', {...}, '_id')
     */
    push(arrayPath, value, uniqueBy) {
        let array = this.get(arrayPath, []);
        if (uniqueBy)
            array = array.filter(entry => entry[uniqueBy] !== value[uniqueBy]);

        array.push(value);

        this.set(arrayPath, array);
    }

    /**
     * Unset a state value
     * @param {String} path - The path
     */
    unset(path) {
        return this.set(path, undefined);
    }

    /**
     * Remove an entry for a state array
     * @param {String} path - The path
     * @param {String} uniqueBy - Property used to identify the entries in the array
     * @param {*} value - The unique value to use to find the entry to remove
     *
     * Example:
     *     this.state.pull('tickets', '_id', '12345678-1234-1234-4321-123456789012')
     */
    pull(arrayPath, uniqueBy, uniqueValue) {
        const array = this
            .get(arrayPath, [])
            .filter(entry => entry[uniqueBy] !== uniqueValue);

        this.set(arrayPath, array);
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
     * Check if the state contains a value in the array at a specific path
     * @param {String} path - The path
     * @param {String} uniqueBy - Property used to identify the entries in the array
     * @param {*} value - The unique value to use to find the entry
     *
     * Example:
     *     this.state.hasInArray('tickets', '_id', '12345678-1234-1234-4321-123456789012')
     */
    hasInArray(arrayPath, uniqueBy, uniqueValue) {
        const array = this.get(arrayPath, []);
        return array.filter(entry => entry[uniqueBy] === uniqueValue).length > 0;
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

    /**
     * Get a value from a state array
     * @param {String} path - The path
     * @param {String} uniqueBy - Property used to identify the entries in the array
     * @param {*} value - The unique value to use to find the entry
     *
     * Example:
     *     this.state.getInArray('tickets', '_id', '12345678-1234-1234-4321-123456789012')
     */
    getInArray(arrayPath, uniqueBy, uniqueValue) {
        const array = this.get(arrayPath, []);
        return array.find(entry => entry[uniqueBy] === uniqueValue);
    }
};
