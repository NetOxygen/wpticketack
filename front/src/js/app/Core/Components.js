define(['underscore', 'jquery', 'moment', 'async', 'state'], function dependencies(_, $, moment, async, State) {
    // Global app state, will be injected in attached components
    var app_state         = new State();
    // Attached components
    var enabledComponents = [];

    // when we unload the window, detach our components
    window.onbeforeunload = function alertUnsaved() {
        var haltUnload = null;
        var returnValue;
        enabledComponents.forEach(function detachComponents(component) {
            var componentWantsHalt;
            if (typeof component.detach === 'function') {
                componentWantsHalt = component.detach();
                haltUnload = haltUnload || componentWantsHalt;
            }
        });
        if (haltUnload) {
            returnValue = haltUnload;
        }
        return returnValue;
    };

    return {
        // Handle all data-module attributes by loading the corresponding
        // module for the each given item
        attach: function($targets, callback) {
            $targets = $targets || $('[data-component]');

            let tasks = [];
            _.each($targets, (componentItem) => {
                let $componentItem = $(componentItem);

                if ($componentItem.data('attached')) {
                    return;
                }

                let components = $componentItem.data('component').split(' ');

                _.each(components, (componentName) => {
                    if (!componentName)
                        return;

                    tasks.push((done) => {
                        require(['app/' + componentName], (Component) => {
                            let c;
                            if (typeof Component === 'function') {
                                c = new Component($componentItem, app_state);
                                c.attach();
                                let uniqid = moment().format('HHmmssSSSSSSSSS') + '' + Math.floor((Math.random() * 100000) + 1);
                                c.uniqid = uniqid;
                                $componentItem.attr('data-attached', uniqid);
                                enabledComponents.push(c);
                            }

                            return done(/*err*/null, c);
                        })
                    });
                });
            });

            async.parallel(tasks, (err, results) => {
                return callback && callback(err, results);
            });
        },

        detach: function (uniqid) {
            if (!Array.isArray(uniqid))
                uniqid = [uniqid];

            let to_detach = enabledComponents;
            if (uniqid) {
                to_detach = _.filter(enabledComponents, (c) => {
                    return c.uniqid == uniqid;
                });
            }

            to_detach.forEach((c) => {
                if (typeof c.detach === 'function') {
                    c.detach();
                }
            });

            enabledComponents = _.difference(enabledComponents, to_detach);
        }
    };
});
