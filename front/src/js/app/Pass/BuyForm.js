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
        'config', 'postal', 'lodash', 'jquery', 'jqueryjson', 'api', 'i18n'
    ], function dependencies(
        config, postal, _, $, $json, TKTApi, i18n) {

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
            let userdata = $('.field:visible,.opaque_field', this.$container)
                .filter(function(i) { return !!($(this).val()); })
                .serializeJSON();
            console.log(userdata);
            userdata.no_photo = true;

            this.$selected_pass = $('.choose-pass:checked', this.$container).parents('.pass');
            let type            = this.$selected_pass.data('type');

            const pricing = $('.choose-pass:checked', this.$container).val();
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
            let fields_to_show = $('#' + pass + '-fields').val().split(',');

            // Set not required and hide all fields
            $('.field', this.$container).each(function (i) {
                $(this).required = false;
            });
            this.$wrappers.hide();

            _.each(this.$wrappers, (w) => {
                // Set required and show requested fields
                let id     = $(w).attr('id').replace('field-wrapper-', '');
                let $field = $('#' + id);
                if (fields_to_show.includes(id)) {
                    $field.required = true;
                    $(w).fadeIn();
                }
            });
        },

        detach: function() {

        }
    };

    return BuyForm;
});
