/**
 * Show a booking form
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="BuyArticle/Form"
 *    data-article-id="12345678-1234-1234-1234-123456789012"
 *    data-ids="12345678-1234-1234-1234-123456789012,..."
 * >
 */
define( [
        'config', 'i18n', 'postal', 'lodash',
        'template', 'jquery', 'api',
        'moment', 'Cart'
    ], function dependencies(
        config, i18n, postal, _,
        Template, $, TKTApi,
        moment, CartModel) {

    function Form($container, state) {
        this.$container  = $container;
        this.initialized = false;

        //this.ids                = this.$container.data('ids').split(',');
        //this.show_on_load       = parseInt(this.getUrlParam('book')) == 1;
        //this.selected_screening = this.getUrlParam('s_id');
    }

    Form.prototype = {
        attach: function() {
            this.init_store();

            // postal.subscribe({
            //     channel: "connection",
            //     topic: "update",
            //     callback: (data, envelope) => {
            //         //this.check_bookability();
            //     }
            // });

            this.init();
        },

        init: function() {
            this.data.article_id = this.$container.data('article-id');
            this.data.variants   = this.$container.data('variants');

            this.build_form();
            this.initialized = true;
        },

        init_store: function() {
            this.data = {
                article_id: null, // selected article id
                variants: [],     // current variants
                articles: [],     // selected variants
            };
        },

        emit_cart_update: function(cart) {
            postal.publish({
                channel: "cart",
                topic: "update",
                data: {
                    cart: cart
                }
            });
        },

        build_form: function() {
            this.$container.html("");
            this.$variants_form  = $('<div class="variants-form"></div>').appendTo(this.$container);
            this.$success_panel  = $('<div class="success-panel d-none"></div>').appendTo(this.$container);

            this.build_variants_form();
            this.build_success_panel();
        },

        build_variants_form: function() {
            // render template
            this.$variants_form.html(Template.render('tkt-buy-article-form-pricings-tpl', {
                variants: this.data.variants
            }));

            // bind pricings minus buttons if any
            $('.tkt-minus-btn', this.$container).click((e) => {
                const $t     = $(e.target);
                const $input = $t.parent().next('.variant-input').eq(0);
                const val    = parseInt($input.val());
                if (val > 0) {
                    $input.val(val - 1).trigger('change');
                    const $qty = $t.parent().find('.variant-qty').eq(0);
                    $qty.text(val - 1);
                }
                if (val > 1)
                    $t.removeClass('tkt-grey-badge').addClass('tkt-dark-badge');
                else
                    $t.removeClass('tkt-dark-badge').addClass('tkt-grey-badge');
            });

            // bind pricings plus buttons if any
            $('.tkt-plus-btn', this.$container).click((e) => {
                const $t     = $(e.target);
                const $input = $t.parent().next('.variant-input').eq(0);
                const val    = parseInt($input.val());
                $input.val(val + 1).trigger('change');
                const $qty = $t.parent().find('.variant-qty').eq(0);
                $qty.text(val + 1);
                $('.tkt-minus-btn', $t.parent())
                    .removeClass('tkt-grey-badge')
                    .addClass('tkt-dark-badge');
            });

            // bind variant fields
            $('.variant-input', this.$container).change((e) => {
                const $input = $(e.target);
                this.data.articles[$input.data('variant')] = parseInt($input.val());
            });

            // bind add-to-cart button
            $('.add-to-cart-btn').click((e) => {
              this.process_add_to_cart();
            });
        },

        build_success_panel: function() {
            // render template
            this.$success_panel.html(Template.render('tkt-buy-article-form-success-tpl', {
                shop_url: config.get('shop_url'),
                cart_url: config.get('cart_url')
            }));
        },

        process_add_to_cart: function() {
            $('.variants-error').html("").addClass('d-none');
            $('.success-panel').addClass('d-none');


            // Check chosen articles
            const chosen_articles = _.find(this.data.articles, (nb) => nb > 0);
            if (!chosen_articles) {
                return $('.variants-error')
                    .html(i18n.t('Veuillez choisir au moins un article'))
                    .removeClass('d-none');
            }

            const variants = [];
            this.data.articles.map((quantity, key) => {
                variants.push({
                    _id: this.data.variants[key]._id,
                    quantity: quantity,
                    price: this.data.variants[key].price['CHF']
                });
            })
            // Add to cart
            TKTApi.addArticlesToCart(
                [{
                    _id: this.data.article_id,
                    variants: variants
                }],
                (err, status, rsp) => {
                    if (err) {
                        return $('.variants-error')
                            .html((rsp || {}).errorMsg)
                            .removeClass('d-none');
                    }

                // Hide forms and show success message
                $('.variants-form').addClass('d-none');
                $('.success-panel').removeClass('d-none');

                // Reload and emit cart update
                TKTApi.loadCart((err, status, rsp) => {
                    if (err)
                        return;

                    this.emit_cart_update(new CartModel(rsp));
                });
            });
        },

        detach: function() {

        }
    };

    return Form;
});
