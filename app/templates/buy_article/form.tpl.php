<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Buy article form template
 *
 * Input:
 * $data: {
 *   "article": { ... },
 *   "salepoint_id": "12345678-1234-1234-1234-123456789012"
 * }
 */
?>
<div class="tkt-wrapper">
    <div class="row">
        <div class="col">
            <div
                class="buy-article-form"
                data-component="BuyArticle/Form"
                data-redirect="<?= TKTApp::get_instance()->get_config('cart.cart_redirect', 'none') ?>"
                data-cart-url="<?= tkt_cart_url() ?>"
                data-checkout-url="<?= tkt_checkout_url() ?>"
                data-article-id="<?= $data->article->_id() ?>"
                data-salepoint-id="<?= $data->salepoint_id ?>"
            >
            </div>
        </div>
    </div>

    <!-- Underscore.js templates used by client side -->
    <script type="text/template" id="tkt-buy-article-form-pricings-tpl">
        <?= TKTTEmplate::render('buy_article/form_pricings', $data) ?>
    </script>
    <script type="text/template" id="tkt-buy-article-form-success-tpl">
          <?= TKTTEmplate::render('buy_article/form_success', $data) ?>
    </script>
</div>
