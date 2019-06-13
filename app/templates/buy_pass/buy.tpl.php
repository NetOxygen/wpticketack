<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Buy pass template
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ],
 *   "redirect": none|cart|tkt_cart|tkt_checkout
 * }
 */
?>
<div class="tkt-wrapper"data-component="Pass/BuyForm">
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
