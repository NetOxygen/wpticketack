<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\Templates\TKTTemplate;

/**
 * Cart template
 *
 * @templateVersion 2.102.0
 *
 * Input: {
 *   "theme"             : 'dark|light',
 *   "hidden_links"      : 'finalize,cancel,continue',
 *   "enable_promo_code" : bool
 *   "hide_items"        : bool
 *   "hide_summary"      : bool
 *   "cart_id"           : string (UUID)
 * }
 */
?>
    <div class="tkt-wrapper tkt-cart" data-component="Cart/Cart" data-hide-links="<?php echo esc_attr($data->hidden_links) ?>" data-cart-id="<?php echo esc_attr($data->cart_id) ?>">
    <div data-component="Media/Loading" data-size-sm data-align-center></div>
</div>

<!-- Underscore.js template used by client side -->
<script type="text/template" id="tkt-cart-table-tpl">
    <?php TKTTemplate::output('cart/cart_table', $data)
    ?>
</script>
