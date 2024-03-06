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
    <a href="?tab=profile">
        <i class="tkt-icon-address-book tkt-3x"></i>
        <span>
            <?= tkt_t("Mes informations") ?>
        </span>
    </a>
</div>
