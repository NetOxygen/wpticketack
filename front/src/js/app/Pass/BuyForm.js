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
        'config', 'postal', 'lodash', 'jquery', 'jqueryjson', 'api', 'i18n', 'exif', 'filetodataurl'
    ], function dependencies(
        config, postal, _, $, $json, TKTApi, i18n, EXIF, filetodataurl) {

    function BuyForm($container, state) {
        this.$container = $container;
        this.$pass      = $('.pass', this.$container);

        this.$selected_pass = $(this.$pass[0]);

        this.$wrappers = $('.field-wrapper', this.$container);
        this.$fields   = $('.field-wrapper .field', this.$container);
    }

    BuyForm.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            if (this.$pass.length == 1) {
                this.sync_pass_form(this.$selected_pass.data('type'));
                this.$selected_pass.addClass('show');
            }


            $('form', this.$container).submit((e) => {
                e.preventDefault();
                this.add_to_cart($('button[type="submit"]', this.$container).data('redirect'));
                return false;
            });

            if ($('.popoverdata', this.$container).length) {
                $('.popoverdata', this.$container).tooltip();
            }
        },

        add_to_cart: function(redirect) {
            let userdata = $('.field:visible,.opaque_field', this.$container)
                .filter(function(i) { return !!($(this).val()); })
                .serializeJSON();
            userdata.no_photo = true;

            this.$selected_pass = $('.choose-pass:checked', this.$container).parents('.pass');
            let type            = this.$selected_pass.data('type');
            let pricing         = $('.choose-pass:checked', this.$container).val();

            if (!pricing) {
                if ($('.choose-pass', this.$container).val().indexOf(':') === -1)
                    return this.show_error(i18n.t('Veuillez choisir un tarif'));

                const pass = $('.choose-pass', this.$container).val().split(':');
                type    = pass[0];
                pricing = pass[1];
            }

            TKTApi.addPassToCart(type, pricing, userdata, (err, status, rsp) => {
                if (err)
                    return this.show_error(i18n.t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.'));

                let url = null;
                switch (redirect) {
                    case 'none':
                        this.show_success(i18n.t('Votre panier a été mis à jour'));
                        break;
                    case 'cart':
                        url = config.get('cart_url');
                        break;
                    case 'tkt_cart':
                        url = TKTApi.getCartViewUrl();
                        break;
                    case 'tkt_checkout':
                        url = TKTApi.getCheckoutUrl();
                        break;
                }
                url && (window.location.href = url);

                postal.publish({
                    channel: "cart",
                    topic: "reload"
                });
            });
        },

        show_success(msg) {
            $('.alert-success', this.$container).html(msg).show();
        },

        show_error(msg) {
            $('.alert-danger', this.$container).html(msg).show();
        },

        sync_pass_form: function (pass) {
            let fields_to_show   = $('#' + pass + '-fields').val().split(',');
            let required_fields  = [];
            let requested_fields = [];

            fields_to_show.map(field => {
                if (field.endsWith('?'))
                    requested_fields.push(field.slice(0, -1));
                else
                    required_fields.push(field);
            });

            // Set not required and hide all fields
            $('.field', this.$container).each(function (i) {
                $(this).attr('required', false);
            });
            this.$wrappers.hide();

            _.each(this.$wrappers, (w) => {
                // Set required and show requested fields
                let id     = $(w).attr('id').replace('field-wrapper-', '');
                let $field = $('#' + id);
                let $label = $('label[for='+id+']');
                if (required_fields.includes(id)) {
                    $field.attr('required', true);
                    $(w).fadeIn();
                } else if (requested_fields.includes(id)) {
                    $label.removeClass('required');
                    $(w).fadeIn();
                }
            });
        },

        detach: function() {

        }
    };

    return BuyForm;
});
