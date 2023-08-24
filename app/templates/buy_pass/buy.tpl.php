<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Buy pass template
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ],
 *   "redirect": "none",
 *   "selected": "festival_pass",
 *   "theme"   : "dark|light",
 * }
 */
?>
<div
  class="tkt-wrapper"
  data-component="Pass/BuyForm"
  data-redirect="<?= TKTApp::get_instance()->get_config('cart.cart_redirect', 'none') ?>"
  data-cart-url="<?= tkt_cart_url() ?>"
  data-checkout-url="<?= tkt_checkout_url() ?>">
  <div class="row">
    <div class="col">
      <?= TKTTEmplate::render('buy_pass/pass_list', $data) ?>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <?= TKTTEmplate::render('buy_pass/form', $data) ?>
    </div>
  </div>
</div>
