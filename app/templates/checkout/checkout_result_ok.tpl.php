<?php

use Ticketack\WP\TKTApp;

/**
 * Checkout success result template
 * This template will be parsed by underscore.js
 *
 * Input: {}
 */
?>
<div class="tkt-wrapper">
  <div class="tkt-checkout-result checkout-result-ok text-center alert alert-success">
    <?= tkt_t("Nous vous remercions pour votre commande.") ?>
  </div>
</div>

