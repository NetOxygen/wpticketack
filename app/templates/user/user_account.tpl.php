<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * User account
 *
 * Input:
 * $data: {
 *   "tabs" : [profile|orders|tickets],
 *   "active_tab": "profile|orders|tickets"
 * }
 */
?>
<div
    id="tkt-user-account"
    class="tkt-wrapper"
    data-component="User/UserAccount"
    data-tab="<?= $data->active_tab ?>"
>
    <div id="tkt-user-account-menu">
        <i class="tkt-icon-spinner tkt-2x tkt-spin"></i>
    </div>

    <div id="tkt-user-account-content"></div>

    <div id="tkt-user-account-verify-message" class="text-danger text-center" style="display: none;">
        <?= tkt_t('Votre compte n\'est pas activé.') ?><br/>
        <b><?= tkt_t('Veuillez l\'activer en cliquant sur le lien que vous avez reçu par e-mail.') ?></b><br />
    </div>

    <div class="row">
        <div class="col-md-12 text-center mt-3">
            <div style="display: none;" class="text-center alert alert-info info-msg"></div>
            <div style="display: none;" class="text-center alert alert-danger error-msg"></div>
            <div style="display: none;" class="text-center alert alert-success success-msg"></div>
        </div>
    </div>
</div>


<!-- Underscore.js templates used by client side -->
<script type="text/template" id="tkt-user-account-menu-tpl">
    <?= TKTTemplate::render('user/account/menu', (object)[ 'tabs' => $data->tabs, 'active_tab' => $data->active_tab ]) ?>
</script>
<script type="text/template" id="tkt-user-account-content-tpl">
    <?= TKTTEmplate::render('user/account/'.$data->active_tab.'/content', (object)[]) ?>
</script>
