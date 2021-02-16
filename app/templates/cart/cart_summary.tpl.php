<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Cart summary template
 *
 * Input: {
 * }
 */
?>
<div class="tkt-wrapper tkt-cart-summary" data-component="Cart/CartSummary">
    <div data-component="Media/Loading" data-size-sm data-align-center></div>
</div>

<!-- Underscore.js template used by client side -->
<script type="text/template" id="tkt-cart-summary-table-tpl">
    <?= TKTTEmplate::render('cart/cart_summary_table', (object)[]) ?>
</script>
