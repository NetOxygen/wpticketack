<?php

use Ticketack\WP\TKTApp;

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
                <span class="assertive">
                    <?= tkt_t('Entrez le nombre de place(s) que vous souhaitez ajouter à votre panier :') ?>
                </span>
            </div>
        </div>
        <% _.mapKeys(screening.pricings, function(p, key) { %>
        <div class="row pricing-row">
            <div class="col">
                <span class="tkt-badge tkt-badge-split flex-rev-on-mobile">
                    <span class="tkt-badge-part tkt-grey-badge tkt-minus-btn text-center">-</span>
                    <span class="tkt-badge-part tkt-light-badge text-center">
                        <span class="pricing-qty">
                            0
                        </span>
                        x
                        <span class="pricing-name">
                            <%= p.name.<?= TKT_LANG ?> %> :
                        </span>
                        <span class="pricing-price">
                            <%= p.price.CHF.toFixed(2) %> CHF
                        </span>
                    </span>
                    <span class="tkt-badge-part tkt-dark-badge tkt-plus-btn text-center">+</span>
                </span>
                <input type="hidden" data-pricing="<%= key %>" class="input pricing-input" value="0"/>
            </div>
        </div>
        <% }) %>
        <div class="row">
            <div class="col">
                <div class="error pricings-error d-none"></div>
                <button class="button add-to-cart-btn active" >
                    <?= tkt_t('Ajouter à mon panier') ?>
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
                        <?= tkt_t('Vous avez un abonnement ?') ?>
                        <a href="" class="show-connect-panel-form"><?= tkt_t('Connectez-vous') ?></a> <?= tkt_t('pour réserver.') ?><br/>
                    </span>
                </div>
            </div>
            <div class="connect-panel-form d-none">
                <div class="row">
                    <div class="col">
                        <span class="pass-number"><?= tkt_t('ID') ?></span>
                    </div>
                    <div class="col">
                        <input type="text" class="input pass-number-input"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span class="pass-key"><?= tkt_t('Code') ?></span>
                    </div>
                    <div class="col">
                        <input type="password" class="input pass-key-input"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                      <div class="error pass-error d-none"></div>
                        <button class="button connect-btn active" >
                            <?= tkt_t('Me connecter') ?>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="buy-pass-link">
                        <span><?= TKT_LANG == 'fr' ? "Acheter un abonnement: " : "Buy a pass: " ?></span>
                        <ul class="eligible-types-list">
                            <% _.forEach(screening.eligible_types, function(t) { %>
                            <li>
                                <a href="<?= TKT_LANG == 'fr' ? "/infos-pratiques/billets-passes/" : "/en/infos-pratiques/tickets-passes/" ?>">
                                    <%= t.name.<?= TKT_LANG ?> %>
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
                        <?= tkt_t('Vous ne pouvez pas réserver de place pour cette séance avec votre abonnement.') ?>
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
                        <?= tkt_t('Réserver une place sur mon abonnement') ?>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="<%= ticket_view_url %>" class="button show-bookings-btn active d-none" >
                        <?= tkt_t('Afficher mes réservations') ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <% } %>
</div>
