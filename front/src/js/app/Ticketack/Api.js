/**
 * Wrap the Ticketack API
 */
define(['config', 'ticketack'], function dependencies(config, Ticketack) {
    return new Ticketack(
        config.get('eshop_uri'),
        config.get('api_key')
    );
});
