<?php
/**
 * Booking form: pricings partial
 * This template will be parsed by underscore.js
 *
 * JS Input: {
 *   "screening": Screening instance,
 *   "ticket_view_url": Link to see the ticket bookings (with PHPSESSID)
 * }
 */
?>
<div class="tkt-wrapper">
    <% if (_.keys(screening.pricings).length) { %>
    <div class="pricings-form">
        <div class="row">
            <div class="col">
                <span class="tickets-title assertive">
                    <?= t('Entrez le nombre de place(s) que vous souhaitez ajouter à votre panier :') ?>
                </span>
            </div>
        </div>
        <% _.mapKeys(screening.pricings, function(p, key) { %>
        <div class="row pricing-row">
            <div class="col col-md-9">
                <span class="pricing-name">
                    <%= p.name.<?= LANG ?> %> :
                </span>
                <span class="pricing-price">
                    <%= p.price.CHF.toFixed(2) %> CHF
                </span>
            </div>
            <div class="col">
                <input type="number" data-pricing="<%= key %>" min="0" value="" class="input pricing-input"/>
            </div>
        </div>
        <% }) %>
        <div class="row">
            <div class="col">
                <div class="error pricings-error d-none"></div>
                <button class="button add-to-cart-btn active" >
                    <?= t('Ajouter à mon panier') ?>
                </button>
            </div>
        </div>
    </div>
    <% } %>
    <% if (screening.eligible_types.length) { %>
    <div class="pass-form">
        <div class="connect-panel">
            <div class="row">
                <div class="col">
                    <span class="pass-title">
                        <?= t('Vous avez un abonnement ?') ?>
                        <a href="" class="show-connect-panel-form"><?= t('Connectez-vous') ?></a> <?= t('pour réserver.') ?><br/>
                    </span>
                </div>
            </div>
            <div class="connect-panel-form d-none">
                <div class="row">
                    <div class="col">
                        <span class="pass-number"><?= t('ID') ?></span>
                    </div>
                    <div class="col">
                        <input type="text" class="input pass-number-input"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span class="pass-key"><?= t('Code') ?></span>
                    </div>
                    <div class="col">
                        <input type="password" class="input pass-key-input"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                      <div class="error pass-error d-none"></div>
                        <button class="button connect-btn active" >
                            <?= t('Me connecter') ?>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="buy-pass-link">
                        <span><?= LANG == 'fr' ? "Acheter un abonnement: " : "Buy a pass: " ?></span>
                        <ul class="eligible-types-list">
                            <% _.forEach(screening.eligible_types, function(t) { %>
                            <li>
                                <a href="<?= LANG == 'fr' ? "/infos-pratiques/billets-passes/" : "/en/infos-pratiques/tickets-passes/" ?>">
                                    <%= t.name.<?= LANG ?> %>
                                </a>
                            </li>
                        <% }) %>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="book-panel">
            <div class="row">
                <div class="col">
                    <h3 class="success book-form-success d-none">
                        <?= t('Vous ne pouvez pas réserver de place pour cette séance avec votre abonnement.') ?>
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="book-form-error d-none">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="error pass-book-error d-none"></div>
                    <button class="button book-btn active d-none" >
                        <?= t('Réserver une place sur mon abonnement') ?>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="<%= ticket_view_url %>" class="button show-bookings-btn active d-none" >
                        <?= t('Afficher mes réservations') ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <% } %>
</div>
