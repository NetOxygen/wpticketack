define(function (require) {
    const moment = require('moment');
    moment.locale(window.moment_locale || 'fr');

    const moment_timezone = require('moment-timezone');
    moment.tz.setDefault(window.moment_timezone || 'Europe/Zurich');

    const components = require('components');
    components.attach();
});

