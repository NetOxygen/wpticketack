<?php

use Ticketack\WP\TKTApp;

/**
 * User connection template
 */
?>
<div class="tkt-wrapper" data-component="User/UserConnect"></div>

<?php
/**
 * User connection widget content
 * This template will be parsed by underscore.js
 *
 * JS Input: {
 *   "ticket": Ticket instance, if the user is connected,
 *   "ticket_view_url": Link to see the ticket bookings (with PHPSESSID)
 * }
 */
?>
<script type="text/template" id="tkt-user-connect-tpl">
    <div class="tkt-user-connect">
        <% if (ticket) { %>
        <div class="row">
            <div class="col">
                <div class="user-infos">
                    <span><%= [ticket.contact.firstname, ticket.contact.lastname].join(' ') %></span>
                </div>
                <a class="btn button"href="<%= ticket_view_url %>">
                    <?= tkt_t("Voir mes réservations") ?>
                </a>
                <button class="btn button disconnect-btn">
                    <?= tkt_t('Me déconnecter') ?>
                </button>
            </div>
        </div>
        <% } else { %>
        <div class="connect-panel">
            <span><?= tkt_t('Vous avez un abonnement ?') ?></span>
            <span><?= tkt_t('Connectez-vous !') ?></span>

            <div class="row">
                <div class="col">
                    <input type="text" class="tkt-input input-invert form-control text-center pass-number-input" placeholder="<?= tkt_t('ID') ?>"/>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <input type="password" class="input input-invert text-center pass-key-input" placeholder="<?= tkt_t('Code') ?>"/>
                </div>
            </div>

            <div class="row">
                <div class="col text-right">
                    <div class="error pass-error d-none"></div>
                    <button class="button button-small connect-btn">
                        <?= tkt_t('Me connecter') ?>
                    </button>
                </div>
            </div>

            <span>
            <a class="" href="<?= tkt_buy_pass_url() ?>"><?= tkt_t('Acheter') ?></a> <?= tkt_t('un abonnement') ?>
            </span>
        </div>
        <% } %>
    </div>
</script>
