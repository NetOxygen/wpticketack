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
                    <span class="dark"><%= [ticket.contact.firstname, ticket.contact.lastname].join(' ') %></span>
                </div>
            	<span class="dark">
                    <a href="<%= ticket_view_url %>">
                        <?= tkt_t("Voir mes réservations") ?>
                    </a>
            	</span>
				<br/>
                <button class="button button-small button-invert disconnect-btn">
                    <?= tkt_t('Me déconnecter') ?>
                </button>
            </div>
        </div>
        <% } else { %>
        <div class="connect-panel">
            <span class="dark"><?= tkt_t('Vous avez un abonnement ?') ?></span>
            <span class="dark"><?= tkt_t('Connectez-vous !') ?></span>

            <div class="row">
                <div class="col">
                    <input type="text" class="input input-invert text-center pass-number-input" placeholder="<?= tkt_t('ID') ?>"/>
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
                    <button class="button button-small button-invert connect-btn">
                        <?= tkt_t('Me connecter') ?>
                    </button>
                </div>
            </div>

            <span class="dark">
            <a href="<?= tkt_buy_pass_url() ?>"><?= tkt_t('Acheter') ?></a> <?= tkt_t('un abonnement') ?>
            </span>
        </div>
        <% } %>
    </div>
</script>
