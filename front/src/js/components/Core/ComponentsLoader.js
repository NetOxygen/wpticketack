import State from './State';
import _ from 'lodash';
import async from 'async';

/**
 * Components loader class
 */
export default class ComponentsLoader {
    /**
     * Global app state, will be injected in attached components
     */
    app_state = null;

    /**
     * Registered components
     */
    registeredComponents = [];

    /**
     * Attached components
     */
    attachedComponents = [];

    /**
     * @constructor
     */
    constructor() {
        this.app_state = new State();
        this.app_state.restore();
    }

    /**
     * Register a component
     * @param {string} alias - The alias used to load the component
     * @param {string} className - The component class name
     */
    registerComponent(alias, className) {
        this.registeredComponents[alias] = className;
    }

    /**
     * Find in the DOM the components to load and attach them
     * @param {Array} $targets - Optional, targets to load
     * @param {Function} callback - Callback function
     */
    attach($targets, callback) {
        $targets = $targets || $('[data-component]');

        let tasks = [];
        _.each($targets, (componentItem) => {
            let $componentItem = $(componentItem);

            if ($componentItem.data('attached')) {
                return;
            }

            let components = $componentItem.data('component').split(' ');

            _.each(components, (alias) => {
                if (!alias)
                    return;

                if (!this.registeredComponents[alias])
                    return;

                tasks.push((done) => {
                    const className = this.registeredComponents[alias];
                    const component = new className(
                        $componentItem,
                        this.app_state,
                        this
                    );
                    component.attach();
                    this.attachedComponents.push(component);

                    return done(/*err*/null, component);
                });
            });
        });

        async.parallel(tasks, (err, results) => {
            return callback && callback(err, results);
        });
    }

    /**
     * Detach the components from the DOM
     * @param {Array} uniqids - Optional, target(s) to detach
     */
    detach(uniqids) {
        if (!Array.isArray(uniqids))
            uniqids = [uniqids];

        let to_detach = this.attachedComponents;
        if (uniqids) {
            to_detach = _.filter(this.attachedComponents, (c) => {
                return uniqids.includes(c.uniqid);
            });
        }

        to_detach.forEach((c) => {
            if (typeof c.detach === 'function') {
                c.detach();
            }
        });

        this.attachedComponents = _.difference(this.attachedComponents, to_detach);
    }
}
