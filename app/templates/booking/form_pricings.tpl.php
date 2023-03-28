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
        <% if ('map_only_bookings' in screening.opaque && screening.opaque.map_only_bookings) { %>
            <div class="row">
                <div class="col">
                    <iframe width="100%" style="min-height: 500px" frameborder="0" src="<%= TKTApi.getScreeningMapUrl(screening._id) %>"></iframe>
                </div>
            </div>
        <% } else { %>
            <div class="pricings-form">
                <div class="row">
                    <div class="col">
                        <span>
                            <?= tkt_t('Entrez le nombre de place(s) que vous souhaitez ajouter à votre panier :') ?>
                        </span>
                    </div>
                </div>
                <% _.mapKeys(screening.pricings, function(p, key) { %>
                <div class="row pricing-row" data-pricing-wrapper="<%= key %>">
                    <div class="col">
                        <span class="tkt-badge tkt-badge-split flex-rev-on-mobile tkt-badge-plus-minus">
                            <span class="tkt-badge-part tkt-grey-badge tkt-minus-btn text-center">-</span>
                            <span class="tkt-badge-part tkt-light-badge text-center">
                                <span class="pricing-qty">
                                    0
                                </span>
                                x
                                <span class="pricing-name">
                                    <%= p.name.<?= TKT_LANG ?> %> :
                                    <% if (p.description.<?= TKT_LANG ?>) { %>
                                        <i class="tkt-icon-info" data-component="Ui/Tippy" data-tippy-content="<%= p.description.<?= TKT_LANG ?> %>"></i>
                                    <% } %>
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
    <% } %>
    <% if (screening.opaque && (!('map_only_bookings' in screening.opaque && screening.opaque.map_only_bookings)) && screening.eligible_types.length) { %>
    <div class="pass-form mt-3">
        <div class="connect-panel">
            <div class="ticket_connect">
                <div class="row">
                    <div class="col">
                        <span class="pass-title">
                            <?= tkt_ticketidize(tkt_t("Vous avez un TicketID ?")) ?>

                            <a href="" class="show-connect-panel-form"><?= tkt_t('Connectez-vous') ?></a> <?= tkt_t('pour réserver.') ?><br/>
                        </span>
                    </div>
                </div>
                <div class="connect-panel-form d-none">
                    <div class="col">
                        <div class="row mt-5 input-pass">
                            <input id="pass-id" type="number" class="tkt-input input-invert form-control text-center pass-number-input" placeholder="123456" maxlength="6"/>
                            <p class="minus">-</p>
                            <input id="pass-code" type="password" class="input input-invert text-center pass-key-input" placeholder="abcde" maxlength="6"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-center">
                            <div class="error pass-error d-none text-center text-danger"></div>
                                <button class="btn btn-primary button login-btn connect-btn mt-5 mb-3">
                                    <i class="fa fa-sign-in-alt"></i> <?= tkt_t('Connexion') ?> 
                                </button>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <?= tkt_ticketidize(tkt_t("Votre TicketID se trouve sur votre abonnement")) ?>
                        </div>
                        <br>
                        <?php if ($data->show_id_code_message) : ?>
                        <div>
                            <?= tkt_ticketidize(tkt_t("Si vous n'avez pas de TicketID sur votre abonnement, saisissez l'ID dans le premier champ et le Code dans le second.")) ?>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
                <?php if (TKTApp::get_instance()->get_config('pages.pass')) : ?>
                <div class="row">
                    <div class="col mt-3">
                        <div class="buy-pass-link">
                            <span><?= tkt_t("Acheter un abonnement") ?></span>
                            <ul class="eligible-types-list">
                            <% screening.eligible_types.map(function (t) { %>
                            <li class="elligible-type">
                                <span class="type-name">
                                    <i class="fa fa-ticket"></i>
                                    <a href="<?= tkt_buy_pass_url() ?>?selected=<%= t._id %>" class="type-link">
                                        <%= t.name.<?= TKT_LANG ?> %>
                                    </a>
                                </span>
                            </li>
                            <% }); %>
                            </ul>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
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
                    <button class="button book-btn-more active d-none" >
                        <?= tkt_t('Réserver une place de plus sur mon abonnement') ?>
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

