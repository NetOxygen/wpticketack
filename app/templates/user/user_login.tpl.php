<?php

use Ticketack\WP\TKTApp;

/**
 * User login template
 */
?>
<div class="tkt-wrapper" data-component="User/UserLogin"></div>

<?php
/**
 * User login widget content
 * This template will be parsed by underscore.js
 *
 * JS Input: {
 *   "user": User instance, if the user is logged in,
 *   "userAccountUrl": Link to see the user account,
 *   "registrationUrl": Link to the registration page
 *   "lostpasswordUrl": Link to the lost password page
 * }
 */
?>
<script type="text/template" id="tkt-user-login-tpl">
    <div class="tkt-user-login">
        <% if (user) { %>
        <div class="row">
            <div class="col">
                <div class="user-infos">
                    <span><%= [user.contact.firstname, user.contact.lastname].join(' ') %></span>
                </div>
                <a class="btn button"href="<%= userAccountUrl %>">
                    <?= tkt_t("Mon compte") ?>
                </a>
                <button class="btn button logout-btn">
                    <i class="tkt-icon-sign-out-alt"></i>
                    <?= tkt_t('Me déconnecter') ?>
                </button>
            </div>
        </div>
        <% } else { %>
        <div class="login-panel">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="username"><?= tkt_t('Identifiant') ?></label>
                    <input id="username" type="text" class="tkt-input input-invert form-control username-input" placeholder="<?= tkt_t('Identifiant') ?>"/>
                </div>
                <div class="form-group col-md-6">
                    <label for="password"><?= tkt_t('Mot de passe') ?></label>
                    <input id="password" type="password" class="tkt-input input-invert form-control password-input" placeholder="<?= tkt_t('Mot de passe') ?>"/>
                </div>
            </div>

            <div class="row">
                <div class="col text-center">
                    <div class="error user-error d-none text-center text-danger"></div>
                    <button class="btn btn-primary button login-btn">
                        <i class="tkt-icon-sign-in-alt"></i>
                        <?= tkt_t('Connexion') ?>
                    </button>
                </div>
            </div>
            <% if (registrationUrl) { %>
            <hr />
            <div class="row">
                <div class="col text-center">
                    <a href="<%= registrationUrl %>">
                        <?= tkt_t('Pas encore de compte ? Créez-en un !') ?>
                    </a>
                </div>
            </div>
            <% } %>
            <% if (lostpasswordUrl) { %>
            <hr />
            <div class="row">
                <div class="col text-center">
                    <a href="<%= lostpasswordUrl %>">
                        <?= tkt_t('Mot de passe perdu ? Changez-le !') ?>
                    </a>
                </div>
            </div>
            <% } %>
        </div>
        <% } %>
    </div>
</script>
