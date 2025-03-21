<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Buy pass template
 *
 * @templateVersion 2.87.0
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ],
 *   "selected": "festival_pass",
 *   "theme"   : "dark|light",
 * }
 */
?>
<div
  class="tkt-wrapper"
  data-component="Pass/BuyWithQuantity"
  data-redirect="<?php echo esc_attr(TKTApp::get_instance()->get_config('cart.cart_redirect', 'none')) ?>"
  data-cart-url="<?php echo esc_attr(tkt_cart_url()) ?>"
  data-checkout-url="<?php echo esc_attr(tkt_checkout_url()) ?>">
  <div class="row">
    <div class="col">
      <?php TKTTemplate::output('buy_pass/pass_list_with_quantity', $data) ?>
    </div>
  </div>
</div>
