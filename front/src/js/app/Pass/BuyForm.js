/**
 * Show a pass buy form
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Pass/BuyForm"
 *    data-redirect="none|cart|checkout"
 *    data-cart-url="https://..."
 *    data-checkout-url="https://..."
 * >
 */
define([
        'config', 'postal', 'lodash', 'jquery', 'api', 'i18n',
    ], function dependencies(
        config, postal, _, $, TKTApi, i18n) {

    function BuyForm($container, state) {
        this.$container   = $container;
        this.$pass        = $('.pass', this.$container);
        this.redirect     = this.$container.data('redirect');
        this.cart_url     = this.$container.data('cart-url');
        this.checkout_url = this.$container.data('checkout-url');

        this.$selected_pass = this.$pass.eq(0)

        this.$wrappers = $('.field-wrapper', this.$container);
        this.$fields   = $('.field-wrapper .field', this.$container);
    }

    BuyForm.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            this.sync_pass_form(this.$pass.eq(0).data('type'));
            this.$pass.eq(0).addClass('show');

            $('.pass_title', this.$container).click(e => {
                const $title = $(e.target);
                const $pass = $('.pass', $title.closest('.card'));
                const type = $pass.data('type');
                this.sync_pass_form(type);
            });

            $('form', this.$container).submit((e) => {
                e.preventDefault();
                this.add_to_cart();
                return false;
            });

            if ($('.popoverdata', this.$container).length) {
                $('.popoverdata', this.$container).tooltip();
            }
        },

        add_to_cart: function() {
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

                switch (this.redirect) {
                    case 'cart':
                        window.location.href = this.cart_url;
                        break;
                    case 'checkout':
                        window.location.href = this.checkout_url;
                        break;
                    default:
                        this.show_success(i18n.t('Votre panier a été mis à jour'));
                        postal.publish({
                            channel: "cart",
                            topic: "reload"
                        });
                }

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
