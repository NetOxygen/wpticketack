/**
 * Show a debug bar for the Reader
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Checkout/Checkout"
 * >
 */
define(
    [
        'config', 'async', 'jquery', 'jqueryjson', 'api',
        'template', 'postal', 'Cart', 'i18n', 'urijs'],
    function dependencies(
        config, async, $, Json, TKTApi,
        Template, postal, Cart, i18n, URI
    ) {

    function Checkout($container, state) {
        this.$container     = $container;

        // redirection url
        this.redirect_url   = this.$container.data('redirect');

        // form
        this.$form          = $('form.checkout-form', this.$container);
        this.$fieldsets     = $('fieldset', this.$form);
        this.$fields        = $('.data-field', this.$container);
        this.$pmField       = $('#payment-method-field', this.$container);
        this.$cartAmount    = $('#tkt-checkout-cart-amount', this.$container);
        this.$submitButtons = $('.submit-button', this.$container);

        // messages panels
        this.$infoMsg       = $('.info-msg', this.$container);
        this.$successMsg    = $('.success-msg', this.$container);
        this.$errorMsg      = $('.error-msg', this.$container);
    }

    Checkout.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            // first, load the cart
            Cart.load((err, cart) => {
                if (err)
                    this.show_error(i18n.t('Une erreur est survenue lors du chargement de votre panier'));

                this.cart = cart;

                // update cart total field
                this.$cartAmount.html(this.cart.cart_amount);

                // check empty cart
                if (!this.cart.id || !this.cart.items.length) {
                    this.switch_to_info_msg(i18n.t('Votre panier est vide'));
                }
            });

            // set payment method before form submit
            this.$submitButtons.on('click', e => {
                this.$pmField.val($(e.target).data('payment-method'));
            });

            // on form submit
            this.$form.submit(e => {
                // get all 'data-field' values (user data + payment method)
                let data = this.$fields
                    .filter(function(i) { return !!($(this).val()); })
                    .serializeJSON();

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
        },

        go_to_thank_you_page: function() {
            const uri = new URI(this.redirect_url);
            uri.setQuery('result', 'ok');
            window.location.href = uri;
        },

        switch_to_info_msg: function (msg) {
            this.$infoMsg.html(msg);
            this.$fieldsets.hide();
            this.$infoMsg.fadeIn();
        },

        show_success: function (msg) {
            this.$successMsg.html(msg);
            this.$successMsg.fadeIn();
        },

        show_error: function (msg, rsp) {
            if ('flash' in rsp && 'error' in rsp.flash)
                msg = rsp.flash.error;

            this.$errorMsg.html(msg);
            this.$errorMsg.fadeIn();
        },

        detach: function() {
        }
    };

    return Checkout;
});

