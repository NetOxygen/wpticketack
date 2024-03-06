<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * User account profile menu entry
 *
 * Input:
 * $data: {
 *   "active" => true|false
 * }
 */
?>
<div class="tkt-account-menu-entry <?= $data->active ? 'active' : '' ?>">
    <a href="?tab=orders">
        <i class="tkt-icon-cart-arrow-down tkt-3x"></i>
        <span>
            <?= tkt_t("Mes commandes") ?>
        </span>
    </a>
</div>
