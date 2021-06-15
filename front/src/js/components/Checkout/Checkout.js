import { Component, Config, i18n, Template } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Cart } from '../Models';
import _ from 'lodash';
import async from 'async';
import postal from 'postal';
import serialize from 'form-serialize';
import URI from 'urijs';

/**
 * Show a debug bar for the Reader
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Checkout/Checkout"
 *    data-redirect="https://..."
 * >
 */
export default class Checkout extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        // redirection url
        this.redirect_url = this.$container.data('redirect');
        this.result       = this.getUrlParam('result');
    }

    attach() {
        this.init();
    }

    init() {
        postal.subscribe({
            channel: "cart",
            topic: "update",
            callback: (data, envelope) => {
                this.cart = data.cart;

                // check empty cart
                if (!this.cart.id || !this.cart.items.length) {
                    this.hide_form();
                }

                this.render();
            }
        });

        this.render();
    }

    render() {
        if (this.result === 'ok')
            return this.$container.html(Template.render('tkt-checkout-result-ok-tpl', {}));

        if (this.result === 'error')
            return this.$container.html(Template.render('tkt-checkout-result-error-tpl', {}));

        if (!this.cart)
            return setTimeout(() => { this.render() }, 1000);

        const missingDataItems = this.cart.getMissingDataItems();

        if (this.cart.items.length == 0) {
            $('.tkt-checkout-form-section', this.$container).hide();
            $('.tkt-checkout-user-data-section', this.$container).hide();
        } else if (missingDataItems && missingDataItems.length > 0) {
            $('.tkt-checkout-form-section', this.$container).hide();
            $('.tkt-checkout-user-data-section', this.$container)
                .html(Template.render('tkt-checkout-user-data-tpl', {
                    items: missingDataItems,
                    requestedFields: Config.get('otp_requested_fields'),
                    requiredFields: Config.get('otp_required_fields')
                })).show();
        } else {
            $('.tkt-checkout-user-data-section', this.$container).hide();
            $('.tkt-checkout-form-section', this.$container).show();
        }

        // forms
        this.$checkoutForm  = $('form.checkout-form', this.$container);
        this.$userDataForm  = $('form.user-data-form', this.$container);

        this.$fieldsets     = $('fieldset', this.$checkoutForm);
        this.$fields        = $('.data-field', this.$container);
        this.$pmField       = $('#payment-method-field', this.$container);
        this.$submitButtons = $('.submit-button', this.$container);

        // messages panels
        this.$infoMsg       = $('.info-msg', this.$container);
        this.$successMsg    = $('.success-msg', this.$container);
        this.$errorMsg      = $('.error-msg', this.$container);

        this.setEventListeners();
    }

    setEventListeners() {
        // user data
        this.$userDataForm.submit(e => {
            const data     = serialize(this.$userDataForm[0], { hash: true });
            const userData = {};

            Object.keys(data.user_data).map(key => {
                userData[key.replace('index-', '')] = data.user_data[key];
            });

            TKTApi.setCartItemsUserData(this.cart.id, userData, (err, status, rsp) => {
                if (err)
                    return this.show_error(err, rsp);

                Cart.load((err, cart) => {
                    if (err)
                        return callback(err);

                    this.cart = cart;
                    this.render();
                });
            });

            return false;
        });

        // set payment method before checkoutForm submit
        this.$submitButtons.on('click', e => {
            this.$pmField.val($(e.target).data('payment-method'));
        });

        // on checkoutForm submit
        this.$checkoutForm.submit(e => {
            // get all 'data-field' values (user data + payment method)
            let data = serialize(this.$checkoutForm[0], { hash: true });

            // inject redirect url in user data
            if (this.redirect_url)
                data.user.redirect_after_payment = this.redirect_url;

            // Put the cart in paying status
            TKTApi.pay(this.cart.id, data.payment_method, data.user, (err, status, rsp) => {
                if (err)
                    return this.show_error(err, rsp);

                if (!('next_step' in rsp)) {
                    console.err('No next step in server response');
                    return this.show_error(i18n.t('Une erreur est survenue'));
                }

                switch (rsp.next_step) {
                    case Cart.CHECKOUT_STEP_CONFIRM:
                        TKTApi.confirm(this.cart.id, (err, status, rsp) => {
                            if (err)
                                return this.show_error(err, rsp);

                            this.go_to_thank_you_page();
                        });
                        break;
                    case Cart.CHECKOUT_STEP_GO_TO_PAYMENT:
                        if (!('next_step_url' in rsp)) {
                            console.err('No next step url in server response');
                            return this.show_error(i18n.t('Une erreur est survenue'));
                        }
                        window.location.href = rsp.next_step_url;
                        break;
                    default:
                        console.err('Unknown next step ' + rsp.netx_step);
                        return this.show_error(i18n.t('Une erreur est survenue'));
                }
            });

            return false;
        });
    }

    go_to_thank_you_page() {
        const uri = new URI(this.redirect_url);
        uri.setQuery('result', 'ok');
        window.location.href = uri;
    }

    hide_form(msg) {
        this.$fieldsets.hide();
    }

    show_success(msg) {
        this.$successMsg.html(msg);
        this.$successMsg.fadeIn();
    }

    show_error(msg, rsp) {
        if ('flash' in rsp && 'error' in rsp.flash)
            msg = rsp.flash.error;

        this.$errorMsg.html(msg);
        this.$errorMsg.fadeIn();
    }

    getUrlParam(name) {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}
