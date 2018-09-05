// Application state abstraction, stored in LocalStorage
define(['logger', 'lodash', 'dottie'], function dependencies(logger, _, dottie) {

    const STATE_KEY = 'js_components_state';

    function State() {
        this.restore();
    }

    State.prototype = {
        restore: function() {
            this.state = localStorage.getItem(STATE_KEY) || {};

            if (_.isString(this.state))
                this.state = JSON.parse(this.state);

            this.needs_to_read_from_storage = false;
        },

        save: function() {
            this.needs_to_read_from_storage = true;
            return localStorage.setItem(STATE_KEY, JSON.stringify(this.state));
        },

        set: function(path, value) {
            if (_.isArray(path))
                path = path.join('.');

            dottie.set(this.state, path, value);
            this.save();
        },

        get: function(path, default_value) {
            if (this.needs_to_read_from_storage)
                this.restore();

            if (_.isArray(path))
                path = path.join('.');

            if (!dottie.exists(this.state, path))
                return default_value;

            return dottie.get(this.state, path);
        }
    }

    return State;
});
