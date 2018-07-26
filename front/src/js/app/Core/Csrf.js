// Csrf manager
define(['module'], function dependencies(module, logger) {

    function Csrf() {
        this.param = module.config().param || 'csrf';
        this.token = module.config().token || '';
    }

    return new Csrf();
});
