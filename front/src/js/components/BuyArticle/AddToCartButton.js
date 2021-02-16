import { Component, Config, i18n, Template } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Article, Cart } from '../Models';
import _ from 'lodash';
import postal from 'postal';
import moment from 'moment';

/**
 * Button to add an article to the cart
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="BuyArticle/AddToCartButton"
 *    data-article-id="12345678-1234-1234-1234-123456789012"
 *    data-redirect="none|cart|checkout"
 *    data-cart-url="https://..."
 *    data-checkout-url="https://..."
 *    data-salepoint="{...}"
 * >
 */
export default class AddArticleToCartButton extends Component {
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
        this.indicator_icon  = $('.add-to-cart-indicator', this.$container);
        this.payload         = {};
        this.successPanel    = $('<div class="mt-3 success-panel text-center text-success"></div>');
        this.errorPanel      = $('<div class="mt-3 error-panel text-center text-danger"></div>');
    }

    attach() {
        super.attach();

        this.init();
    }

    init() {
        this.$container.closest('.tkt-wrapper,.tkt-section').append(this.successPanel);
        this.$container.closest('.tkt-wrapper,.tkt-section').append(this.errorPanel);

        this.set_indicator_mode('idle');

        $(this.$container).click((e) => {
            e.stopPropagation();
            this.add_to_cart();
        });
    }

    add_to_cart() {
        this.set_indicator_mode('loading');

        Article.getInfos([this.article_id], /*forceReload*/true, (err, articles) => {
            if (err)
                return console.error(err);

            const article = articles[0];
            const variant = article.variants[0];
            const payload  = [{
                _id: variant._id,
                price: variant.getFormattedPrice(),
                stock: variant.getStockForSalepoint(this.salepoint_id),
                quantity: 1
            }];

            // Add to cart
            TKTApi.addArticlesToCart(
                [{
                    _id: article._id,
                    variants: payload
                }],
                (err, status, rsp) => {
                    const flash = rsp.articles[0].variants[0].flash;
                    if (err && status != 409) {
                        return this.set_indicator_mode('error', flash.error);
                    }

                    const hasAvailabilityError = (status === 409);
                    if (this.redirect == 'none' && hasAvailabilityError)
                        return this.set_indicator_mode('error', flash.error);

                    this.set_indicator_mode('ok', flash.success);

                    switch (this.redirect) {
                        case 'cart':
                            window.location.href = this.cart_url;
                            break;
                        case 'checkout':
                            window.location.href = this.checkout_url;
                            break;
                        default:
                            // Reload and emit cart update
                            TKTApi.loadCart((err, status, rsp) => {
                                if (err)
                                    return;

                                this.emit_cart_update(new Cart(rsp));
                            });
                    }
            });
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

    set_indicator_mode(mode, msg) {
        switch (mode) {
            case 'idle':
                this.indicator_icon
                    .removeClass('glyphicon-ok')
                    .removeClass('glyphicon-remove')
                    .removeClass('glyphicon-refresh')
                    .removeClass('spin-icon')
                    .addClass('glyphicon-plus');
                this.successPanel.hide();
                this.errorPanel.hide();
                break;
            case 'loading':
                this.indicator_icon
                    .removeClass('glyphicon-plus')
                    .removeClass('glyphicon-ok')
                    .removeClass('glyphicon-remove')
                    .addClass('glyphicon-refresh')
                    .addClass('spin-icon');
                this.successPanel.hide();
                this.errorPanel.hide();
                break;
            case 'ok':
                this.indicator_icon
                    .addClass('glyphicon-ok')
                    .removeClass('glyphicon-plus')
                    .removeClass('glyphicon-remove')
                    .removeClass('glyphicon-refresh')
                    .removeClass('spin-icon');
                this.successPanel.html(msg).show();
                this.errorPanel.hide();
                setTimeout(() => {
                    this.set_indicator_mode('idle');
                }, 3000);
                break;
            case 'error':
                this.indicator_icon
                    .addClass('glyphicon-remove')
                    .removeClass('glyphicon-plus')
                    .removeClass('glyphicon-ok')
                    .removeClass('glyphicon-refresh')
                    .removeClass('spin-icon');
                this.successPanel.hide();
                this.errorPanel.html(msg).show();
                setTimeout(() => {
                    this.set_indicator_mode('idle');
                }, 3000);
                break;
        }
    }
}
