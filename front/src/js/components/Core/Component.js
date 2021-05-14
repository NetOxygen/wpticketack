import moment from 'moment'

/**
 * Component class
 */
export default class Component {
    /**
     * Global app state, will be injected in attached components
     */
    state = null;

    /**
     * DOM node this component is attached to
     */
    $container = null;

    /**
     * Unique id
     */
    uniqid = null;

    /**
     * @constructor
     * @param {DOMElement} $container - The DOM node to attach this component to
     * @param {State} $container - The global state
     * @param {ComponentsLoader} $loader - The global components loader
     */
    constructor($container, state, loader) {
        this.$container = $container;
        this.state      = state;
        this.loader     = loader;
        this.uniqid     = moment().format('HHmmssSSSSSSSSS') +
            '' + Math.floor((Math.random() * 100000) + 1);
    }

    /**
     * Attach this component to a DOM node
     */
    attach() {
        this.$container.attr('data-attached', this.uniqid);
    }

    /**
     * Detach the components from the DOM node
     */
    detach() {}
}
