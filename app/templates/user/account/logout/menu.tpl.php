<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * User account logout menu entry
 *
 * Input:
 * $data: {
 *   "active" => true|false
 * }
 */
?>
<div class="tkt-account-menu-entry <?= $data->active ? 'active' : '' ?>">
    <a href="javascript:;" class="logout-btn">
        <i class="fa fa-sign-out-alt fa-3x"></i>
        <span>
            <?= tkt_t('Me déconnecter') ?>
        </span>
    </a>
</div>
