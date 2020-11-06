import { Component, Config, i18n, Template } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Article, Cart } from '../Models';
import _ from 'lodash';
import postal from 'postal';
import moment from 'moment';

/**
 * Show a booking form
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="BuyArticle/Form"
 *    data-article-id="12345678-1234-1234-1234-123456789012"
 *    data-redirect="none|cart|checkout"
 *    data-cart-url="https://..."
 *    data-checkout-url="https://..."
 *    data-ids="12345678-1234-1234-1234-123456789012,..."
 * >
 */
export default class ArticleForm extends Component {
    /**
     * @constructor
     * @param {DOMElement} $container - The DOM node to attach this component to
     * @param {State} $container - The global state
     */
    constructor($container, state) {
        super($container, state);

        this.article_id      = this.$container.data('article-id');
        this.salepoint_id    = this.$container.data('salepoint-id');
        this.redirect        = this.$container.data('redirect');
        this.cart_url        = this.$container.data('cart-url');
        this.checkout_url    = this.$container.data('checkout-url');
        this.chosen_variants = {};
    }

    attach() {
        super.attach();

        this.init();
    }

    init() {
        Article.getInfos([this.article_id], /*forceReload*/true, (err, articles) => {
            if (err)
                console.error(err);
            else {
                this.article  = articles[0];

                this.chosen_variants = {};
                this.article.variants.map((variant, variant_index) => {
                    this.chosen_variants[variant_index] = {
                        _id: variant._id,
                        price: variant.getFormattedPrice(),
                        stock: variant.getStockForSalepoint(this.salepoint_id),
                        quantity: 0
                    };
                });

                this.build_form();
            }
        });
    }

    emit_cart_update(cart) {
        postal.publish({
            channel: "cart",
            topic: "update",
            data: {
                cart: cart
            }
        });
    }

    build_form() {
        this.$container.html("");
        this.$variants_form  = $('<div class="variants-form"></div>').appendTo(this.$container);
        this.$success_panel  = $('<div class="success-panel d-none"></div>').appendTo(this.$container);

        this.build_variants_form();
        this.build_success_panel();
    }

    build_variants_form() {
        // render template
        this.$variants_form.html(Template.render('tkt-buy-article-form-pricings-tpl', {
            article: this.article,
            salepoint_id: this.salepoint_id
        }));

        // bind pricings minus buttons if any
        $('.tkt-minus-btn', this.$container).click((e) => {
            e.stopPropagation();
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

            $('.tkt-plus-btn', $t.parent()).removeClass('tkt-out-of-stock-badge')
        });

        // bind pricings plus buttons if any
        $('.tkt-plus-btn', this.$container).click((e) => {
            e.stopPropagation();
            const $t     = $(e.target);
            const $input = $t.parent().next('.variant-input').eq(0);
            const val    = parseInt($input.val());

            const variant = this.chosen_variants[$input.data('variant')];
            if (variant.stock > val) {
                const new_val = val + 1;
                $input.val(new_val).trigger('change');

                const $qty = $t.parent().find('.variant-qty').eq(0);
                $qty.text(val + 1);

                $('.tkt-minus-btn', $t.parent())
                    .removeClass('tkt-grey-badge')
                    .addClass('tkt-dark-badge');

                if (variant.stock == new_val) {
                    $t.addClass('tkt-out-of-stock-badge');
                }
            }

            return false;
        });

        // bind variant fields
        $('.variant-input', this.$container).change((e) => {
            const $input = $(e.target);
            const variant_index = $input.data('variant');
            this.chosen_variants[$input.data('variant')].quantity = parseInt($input.val());
        });

        // bind add-to-cart button
        $('.add-to-cart-btn').click((e) => {
            e.stopPropagation();
            this.process_add_to_cart();
        });
    }

    build_success_panel() {
        // render template
        this.$success_panel.html(Template.render('tkt-buy-article-form-success-tpl', {
            shop_url: Config.get('shop_url'),
            cart_url: Config.get('cart_url')
        }));
    }

    process_add_to_cart() {
        $('.error-panel').html("").addClass('d-none');
        $('.tkt-variant-error-msg').html("").addClass('d-none');
        $('.success-panel').addClass('d-none');


        // Check chosen variants
        this.chosen_variants = _.filter(this.chosen_variants, (v) => v.quantity > 0);
        if (this.chosen_variants.length === 0) {
            return $('.error-panel')
                .html(i18n.t('Veuillez choisir au moins un article'))
                .removeClass('d-none');
        }

        // Add to cart
        TKTApi.addArticlesToCart(
            [{
                _id: this.article_id,
                variants: this.chosen_variants
            }],
            (err, status, rsp) => {
                this.chosen_variants = {};
                if (err && status != 409) {
                    return $('.error-panel')
                        .html(i18n.t('Une erreur est survenue'))
                        .removeClass('d-none');
                }

                const hasAvailabilityError = (status === 409);
                if (this.redirect === 'none' && hasAvailabilityError) {
                    Article.getInfos([this.article_id], /*forceReload*/true, (err, articles) => {
                        if (err)
                            console.error(err);
                        else {
                            this.article  = articles[0];
                            this.build_variants_form();

                            if ('articles' in rsp) {
                                rsp.articles.map(article => {
                                    article.variants.map(variant => {
                                        if (!variant.flash || !variant.flash.error)
                                            return;

                                        const $variant_error_panel = $('.tkt-variant-error-msg[data-variant-id="' + variant._id + '"]');
                                        if (!$variant_error_panel)
                                            return;

                                        $variant_error_panel
                                            .html(variant.flash.error)
                                            .removeClass('d-none');
                                    });
                                });
                            }
                        }
                    });
                }

                switch (this.redirect) {
                    case 'cart':
                        window.location.href = this.cart_url;
                        break;
                    case 'checkout':
                        window.location.href = this.checkout_url;
                        break;
                    default:
                        // Hide forms and show success message
                        if (!hasAvailabilityError)
                            $('.variants-form').addClass('d-none');
                        $('.success-panel').removeClass('d-none');

                        // Reload and emit cart update
                        TKTApi.loadCart((err, status, rsp) => {
                            if (err)
                                return;

                            this.emit_cart_update(new Cart(rsp));
                        });
                }
        });
    }
}
