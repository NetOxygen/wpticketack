<?php
/**
 * User connection template
 */
?>
<div data-component="User/UserConnect"></div>

<?php
/**
 * User connection widget content
 * This template will be parsed by underscore.js
 *
 * JS Input: {
 *   "ticket": Ticket instance, if the user is connected,
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
                <button class="button button-small button-invert disconnect-btn">
                    <?= t('Me déconnecter') ?>
                </button>
            </div>
        </div>
        <% } else { %>
        <div class="connect-panel">
            <span class="dark"><?= t('Vous avez un abonnement ?') ?></span>
            <span class="dark"><?= t('Connectez-vous !') ?></span>

            <div class="row">
                <div class="col">
                    <input type="text" class="input input-invert text-center pass-number-input" placeholder="<?= t('Numéro') ?>"/>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <input type="password" class="input input-invert text-center pass-key-input" placeholder="<?= t('Clé') ?>"/>
                </div>
            </div>

            <div class="row">
                <div class="col text-right">
                    <div class="error pass-error d-none"></div>
                    <button class="button button-small button-invert connect-btn">
                        <?= t('Me connecter') ?>
                    </button>
                </div>
            </div>

            <span class="dark">
            <a href="<?= buy_pass_url() ?>"><?= t('Acheter') ?></a> <?= t('un abonnement') ?>
            </span>
        </div>
        <% } %>
    </div>
</script>
