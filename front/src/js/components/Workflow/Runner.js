import { Component, Template, Config } from '../Core';
import { Ticket } from '../Models';
import { TKTLib } from '../Ticketack';
import postal from 'postal';

/**
 * Handle the workflow runner
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Workflow/Runner"
 *    data-url="..."
 * >
 */
export default class WorkflowRunner extends Component {
    /**
     * @constructor
     * @param {DOMElement} $container - The DOM node to attach this component to
     * @param {State} $container - The global state
     */
    constructor($container, state, loader) {
        super($container, state, loader);

        this.url  = this.$container.data('url');
    }

    attach() {
        super.attach();
        this.init();
    }

    async init() {
        this.render();
    }

    render() {
        const url = new URL(this.url);
        // first load the current cart, if any, to inject
        // the cart_id into the workflow
        TKTLib.CartService.get().then(cart => {
            if (cart?.uuid)
                url.searchParams.set('cart_id', cart.uuid);
        }).finally(() => {
            this.$container.html(Template.render('tkt-workflow-runner-iframe-tpl', {
                url: url.toString()
            }));
            this.loader.attach();

            $('.workflow_iframe', this.$container).hide();
            $('.workflow_iframe', this.$container).on('load', () => {
                $('.workflow_iframe', this.$container).show();
                setTimeout(() => {
                    $('.loader', this.$container).fadeOut();
                }, 500);
            });
        });

        addEventListener("message", function (e) {
            if (e.data?.type !== '__tkt_workflow_message__')
                return;

            if (e.data?.action === 'resize') {
                const { height } = e.data.params;
                $('.workflow_iframe', this.$container).attr('height', height);
            } else if (e.data?.action === 'redirect') {
                const { url } = e.data.params;
                window.location.href = url;
            }
        }, true);
    }
}
