<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\TKTApp;

/**
 * OwnIt player template
 * This template will be parsed by underscore.js
 *
 * @templateVersion 2.85.0
 *
 * Input: {
 *   "productId": string
 *   "code": string
 * }
 *

 */
?>
<div class="tkt-own-it-player-wrapper">
    <own-it-player product-id="<%= productId %>" code="<%= code %>" />
</div>
