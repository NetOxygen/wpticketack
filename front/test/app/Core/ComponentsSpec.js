let nb_attach_calls = 0;
let nb_detach_calls = 0;

define('app/Test/Component', function dependencies() {
    function TestComponent($container, state) {}

    TestComponent.prototype = {
        attach: function() { nb_attach_calls++; },
        detach: function() { nb_detach_calls++; },
    };

    return TestComponent;
});

define(['components', 'jquery'], function(components, $) {
    let $container;

    beforeEach((done) => {
        nb_attach_calls = 0;
        nb_detach_calls = 0;

        $container = $('<div id="test-component" data-component="Test/Component"></div>');
        $('body').append($container);

        components.attach($container, (err, results) => {
            expect(err).to.not.exist;
            expect(results).to.be.an('array').of.length(1);
            done();
        });
    });

    describe('Core components loading', () => {
        it('should add a data-attached attribute on containers', (done) => {
            expect($container.data('attached')).to.exist;
            done();
        });
        it('should call attach on loaded component', (done) => {
            expect(nb_attach_calls).to.equal(1);
            done();
        });
        it('should call detach on loaded component', (done) => {
            const uniqid = $container.data('attached');
            components.detach(uniqid);
            expect(nb_detach_calls).to.equal(1);
            done();
        });
    });
});
