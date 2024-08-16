<?php

if (!defined('ABSPATH')) exit;

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
<div class="tkt-account-menu-entry <?php echo $data->active ? 'active' : '' ?>">
    <a href="javascript:;" class="logout-btn">
        <i class="tkt-icon-sign-out tkt-3x"></i>
        <span>
            <?php echo tkt_t('Me déconnecter') ?>
        </span>
    </a>
</div>
