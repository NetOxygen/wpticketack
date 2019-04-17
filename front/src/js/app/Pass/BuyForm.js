/**
 * Show a pass buy form
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Pass/BuyForm"
 * >
 */
define([
        'config', 'postal', 'lodash', 'jquery', 'api', 'i18n'
    ], function dependencies(
        config, postal, _, $, TKTApi, i18n) {

    function BuyForm($container, state) {
        this.$container = $container;
        this.$pass      = $('.pass', this.$container);

        // Ensure $pass is always an array
        if ('object' === typeof this.$pass)
            this.$pass = [this.$pass];

        this.$selected_pass = this.$pass[0];

        this.$wrappers = $('.field-wrapper', this.$container);
        this.$fields   = $('.field-wrapper .field', this.$container);
    }

    BuyForm.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            if (this.$pass.length == 1)
                this.sync_pass_form(this.$pass[0].data('type'));

            $('button[type="submit"]', this.$container).click((e) => {
                e.preventDefault();
                this.add_to_cart();
            });
        },

        add_to_cart: function() {
            let userdata = {};
            _.each($('.field:visible', this.$container), (f) => {
                let name = $(f).attr('id').replace('user_', '');
                userdata[name] = $(f).val();
            });
            userdata.no_photo = true;
            const pricing = $('.choose-pass:checked', this.$container).val();
            this.$selected_pass = $('.choose-pass:checked', this.$container).parents('.pass');
            let type = this.$selected_pass.data('type');
            if (!pricing)
                return this.show_error(i18n.t('Veuillez choisir un tarif'));

            TKTApi.addPassToCart(type, pricing, userdata, (err, status, rsp) => {
                if (err)
                    return this.show_error(i18n.t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.'));

                const cart_url = config.get('cart_url');
                if (cart_url)
                    window.location.href = cart_url;
                else
                    this.show_success(i18n.t('Votre panier a été mis à jour'));


                postal.publish({
                    channel: "cart",
                    topic: "reload"
                });
            });
        },

        show_success(msg) {
            alert(msg);
        },

        show_error(msg) {
            alert(msg);
        },

        sync_pass_form: function (pass) {
            let fields = $('#' + pass + '-fields').val().split(',');
            _.each(this.$wrappers, (w) => {
                let field = $(w).attr('id').replace('field-wrapper-', '');
                $(w)[fields.includes(field) ? 'fadeIn' : 'hide']();
            });
        },

        detach: function() {

        }
    };

    return BuyForm;
});
