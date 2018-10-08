define(function (require) {
    var moment = require('moment');
    moment.locale(window.moment_locale || 'fr');

    var components = require('components');
    components.attach();
});

