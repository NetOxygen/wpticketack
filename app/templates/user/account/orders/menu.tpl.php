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
        <i class="fa fa-cart-arrow-down fa-3x"></i>
        <span>
            <?= tkt_t("Mes commandes") ?>
        </span>
    </a>
</div>
