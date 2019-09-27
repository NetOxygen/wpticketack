requirejs.config({
    paths: {
        assets: 'app/Core/Assets',
        config: 'app/Core/Config',
        i18n: 'app/Core/i18n',
        components: 'app/Core/Components',
        csrf: 'app/Core/Csrf',
        logger: 'app/Core/Logger',
        state: 'app/Core/State',
        template: 'app/Core/Template',

        api: 'app/Ticketack/Api',
        Cart: 'app/Models/Cart',
        CartItem: 'app/Models/CartItem',
        Screening: 'app/Models/Screening',
        Ticket: 'app/Models/Ticket',

        es6: '../../node_modules/requirejs-babel/es6',
        babel: '../../node_modules/requirejs-babel/babel-5.8.34',
        babel_polyfill: '../../node_modules/requirejs-babel/polyfill.min',
        async: '../../node_modules/async/dist/async.min',
        dottie: '../../node_modules/dottie/dottie',
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min',
        ticketack: './ext/ticketack',
        urijs: '../../node_modules/urijs/src',
        moment: '../../node_modules/moment/min/moment-with-locales.min',
        postal: '../../node_modules/postal/lib/postal.min',
        lodash: '../../node_modules/lodash/lodash.min',
        hammer: '../../node_modules/hammerjs/hammer.min',
        jqueryjson: '../../node_modules/jquery-serializejson/jquery.serializejson.min'
    }
});

// and the 'jquery-private' module, in the
// jquery-private.js file:
define("jquery", [], function () {
    return window.jQuery.noConflict(true);
});


require([
    'app/main',
    // We need to require all the lazyloaded components so as
    // the optimizer can compile them.
    'app/Articles/Article',
    'app/Booking/Form',
    'app/Cart/Cart',
    'app/Cart/CartIcon',
    'app/User/UserConnect',
    'app/Media/Carousel',
    'app/Media/Loading',
    'app/Media/YoutubeVideo',
    'app/Pass/BuyForm',
    'app/Program/BookabilityState',
    'app/Program/Filter',
    'app/Program/FilterRows',
    'app/Program/Filters',
    'app/Ui/PlusMinus',
    'app/Ui/ScreenSaver',
    'app/People/Filter',
]);
