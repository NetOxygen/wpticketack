// Config manager
define(['module'], function dependencies(module) {

    function Config() {
        this.config = module.config();
    }

    Config.prototype.get = function(key, _default) {
        if (key in this.config)
            return this.config[key];

        return _default;
    };

    return new Config();
});
