define(['components', 'jquery', 'app/Cart/Cart'], function(components, $, Cart) {
    let $container;

    beforeEach((done) => {
        $container = $('<div id="test-component" data-component="Cart"></div>');
        $('body').append($container);

        const cart = new Cart($container);
        //cart.attach();
        done();
    });
});

