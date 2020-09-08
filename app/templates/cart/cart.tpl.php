<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Cart template
 *
 * Input: {
 *   "hidden_links": 'finalize,cancel,continue'
 * }
 */
?>
<div class="tkt-wrapper tkt-cart" data-component="Cart/Cart" data-hide-links="<?= $data->hidden_links ?>">
    <div data-component="Media/Loading" data-size-sm data-align-center></div>
</div>

<!-- Underscore.js template used by client side -->
<script type="text/template" id="tkt-cart-table-tpl">
    <?= TKTTEmplate::render('cart/cart_table', (object)[]) ?>
</script>
