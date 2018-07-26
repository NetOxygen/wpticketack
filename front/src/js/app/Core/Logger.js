// Simple console.* wrapper
define(function () {
    return {
        log: function debug(msg) {
            console.log(msg);
        },
        err: function debug(msg) {
            console.error(msg);
        }
    };
});
