<?php
/**
 * Cart template
 */
?>
<div class="tkt-cart" data-component="Cart/Cart"></div>

<!-- Underscore.js template used by client side -->
<script type="text/template" id="tkt-cart-table-tpl">
    <?= TKTTEmplate::render('cart/cart_table', (object)[]) ?>
</script>
