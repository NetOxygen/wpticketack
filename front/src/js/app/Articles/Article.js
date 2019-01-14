/**
 * Handle Article buy
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Articles/Article"
 *    data-id="12345678-1234-1234-1234-123456789012"
 * >
 *   <[*] class="show-variants"><[*]>
 * </div>
 */
define(
    ['postal', 'jquery', 'lodash', 'api', 'bootstrap'],
    function dependencies(postal, $, _, TKTApi) {

        function Article($container, state) {
            this.$container = $container;

            this._id = this.$container.data('id');

            this.$triggers     = $('.show-variants', this.$container);
            this.$closers      = $('.close-variants', this.$container);
            this.$modal        = $('.article-variants-form', this.$container);
            this.$variants     = $('.variant-wrapper', this.$container);
            this.$submit       = $('.variants-submit', this.$container);
            this.$error        = $('.variants-error', this.$container);
            this.$submit_error = $('.variants-submit-error', this.$container);
        }

        Article.prototype = {
            attach: function() {
                this.init();
            },

            init: function() {
                this.$triggers.click((e) => this.show_variants(e));
                this.$closers.click((e) => this.hide_variants(e));

                const $total = $('.variant-total', this.$container);

                _.map(this.$variants, (v) => {
                    const v_id = $(v).data('id');

                    const $sub      = $('.variant-sub', $(v));
                    const $add      = $('.variant-add', $(v));
                    const $quantity = $('.variant-quantity', $(v));
                    const price     = parseFloat($('.variant-price', $(v)).data('price'));

                    $add.click((e) => {
                        this.hide_errors();
                        $quantity.html(parseInt($quantity.html()) + 1);
                        $total.html((parseFloat($total.html()) + price).toFixed(2));
                    });

                    $sub.click((e) => {
                        $quantity.html(Math.max(0, parseInt($quantity.html()) - 1));
                        $total.html(parseFloat(($total.html()) - price).toFixed(2));
                    });
                });

                const $submit = $('.variants-submit', this.$container);
                $submit.click((e) => {
                    this.add_to_cart();
                });
            },

            show_variants: function (e) {
                this.$modal.fadeIn();
            },

            hide_variants: function (e) {
                this.$modal.fadeOut();
            },

            show_error: function() {
                this.$error.fadeIn();
            },

            show_submit_error: function(err) {
                this.$submit_error.html(err).fadeIn();
            },

            hide_errors: function() {
                this.$error.fadeOut();
                this.$submit_error.fadeOut();
            },

            build_articles_to_add: function() {
                let article = {
                    "_id": this._id,
                    "variants": []
                };
                _.map(this.$variants, (v) => {
                    const v_id = $(v).data('id');

                    const $quantity = $('.variant-quantity', $(v));
                    const quantity  = parseInt($quantity.html());
                    if (quantity <= 0)
                        return false;

                    const price = parseFloat($('.variant-price', $(v)).data('price'));

                    article.variants.push({
                        "_id": v_id,
                        "quantity": quantity,
                        "price": price
                    });
                });

                return [ article ];
            },

            add_to_cart: function() {
                const articles = this.build_articles_to_add();
                console.log(articles);

                if (_.isEmpty(articles[0].variants)) {
                    this.show_error();
                    return false;
                }

                // Add to cart
                TKTApi.addArticlesToCart(articles, (err, status, rsp) => {
                    this.hide_variants();
                    if (err)
                        return this.show_submit_error(rsp.errorMsg);

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

        return Article;
    });
