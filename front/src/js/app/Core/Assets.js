// Assets manager
define(['module', 'logger', 'urijs/URI'], function dependencies(module, logger, URI) {

    function Assets() {
        this.base_url = module.config().base_url || '';
        this.version  = module.config().version || (Math.floor(Date.now() / 1000));
    }

    Assets.prototype.url = function(asset) {
        let uri = URI(asset).absoluteTo(this.base_url);
        uri.addSearch('_v', this.version);

        return uri.toString();
    };

    return new Assets();
});
