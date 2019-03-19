// i18n manager
define(['module'], function dependencies(module) {

    function i18n() {
        this.translations = module.config();
    }

    i18n.prototype.t = function(key) {
        if (key in this.translations)
            return this.translations[key];

        return key;
    };

    return new i18n();
});
