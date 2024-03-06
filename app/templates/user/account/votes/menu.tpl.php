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
    <a href="?tab=votes">
        <i class="tkt-icon-star tkt-3x"></i>
        <span>
            <?= tkt_t("Mes votes") ?>
        </span>
    </a>
</div>
