<?php

use Ticketack\WP\TKTApp;

/**
 * Checkout success result template
 *
 * Input:
 * $data: {
 *   "cgv_url": "https://...",
 *   "privacy_url": "https://...",
 *   "requested_fields": ["firstname", "lastname", ... ],
 *   "required_fields": ["firstname", "lastname", ... ],
 *   "allow_later": true|false,
 *   "allow_postfinance": true|false
 * }
 */
$cgv_url           = $data->cgv_url;
$privacy_url       = $data->privacy_url;
$requested_fields  = $data->requested_fields;
$required_fields   = $data->required_fields;
$allow_later       = $data->allow_later;
$allow_postfinance = $data->allow_postfinance;
?>
<div class="tkt-wrapper">
  <div class="checkout-result-ok text-center alert alert-success">
    <?= tkt_t("Nous vous remercions pour votre commande.") ?>
  </div>
</div>

