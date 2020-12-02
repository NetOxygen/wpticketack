<?php

use Ticketack\WP\TKTApp;

/**
 * Cart table template
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "cart": Cart instance,
 *   "ticket": Ticket instance, if the user is connected,
 *   "program_url": String,
 *   "cart_reset_url": String,
 *   "checkout_url": String,
 *   "hide_links": ['finalize', 'cancel', 'continue']
 * }
 */
?>
<div class="tkt-wrapper">
    <section class="tkt-section tkt-light-section tkt-cart-section">
        <% if (cart.items.length == 0) { %>
        <div class="row">
            <div class="col">
                <h3 class="empty-cart-title">
                    <?= tkt_t('Votre panier est vide') ?>
                </h3>
            </div>
        </div>
        <% } else { %>
        <div class="row" style="font-family: 'SimplonBP', sans-serif;">
            <div class="col">
                <h3 class="tkt-section-title mb-3"><?= tkt_t("Votre panier") ?></h3>
                <table class="tkt-cart-table">
                    <thead>
                        <tr>
                            <th scope="col"><?= tkt_t('Achats') ?></th>
                            <th scope="col" width="120px"><?= tkt_t('Prix') ?></th>
                            <th scope="col" width="20px"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <% _.each(cart.items, function(item) { %>
                        <tr>
                            <td class="title-cell"><%= item.getFormattedTitle() %></td>
                            <td class="price-cell"><%= item.getFormattedPrice() %></td>
                            <td class="action-cell">
                                <span class="tkt-remove-cart-item" data-item="<%= item.id %>">
                                    X
                                </span>
                            </td>
                        </tr>
                        <% }); %>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3">
                                <span class="total-title-cell">
                                    <?= tkt_t('Total :') ?>
                                </span>
                                <span class="total-price-cell">
                                    <%= cart.getFormattedTotal() %>
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <% if (cart.getTotal() > 0 && ticket && ticket.getWalletBalance() > 0 && !hide_links.includes('wallet')) { %>
        <hr/>
        <div class="row justify-content-md-end">
            <div class="col col-12 use-wallet-wrapper">
                <h4>
                    <?= tkt_t('Vous disposez de') ?>
                    <%= ticket.getFormattedWalletBalance() %>
                    <?= tkt_t('sur votre porte-monnaie') ?>
                </h4>
                <span><?= tkt_t('Saisissez ci-dessous le montant que vous souhaitez utiliser') ?></span>
                <div class="input-group mb-2">
                    <input type="number" min="0" max="<%= Math.min(ticket.getWalletBalance(), cart.getTotal()) %>" class="wallet-input form-control" placeholder="15.50" value="<%= Math.min(ticket.getWalletBalance(), cart.getTotal()) %>"/>
                    <div class="input-group-append">
                        <a href="javascript:;" class="wallet-button button active">
                            <?= tkt_t('Utiliser mon porte-monnaie') ?>
                        </a>
                    </div>
                </div>
                <div class="alert alert-danger wallet-error d-none"></div>
                <div class="alert alert-success wallet-success d-none"></div>
            </div>
        </div>
        <% } %>

        <% if (!hide_links.includes('promo')) { %>
        <hr/>
        <div class="row justify-content-md-end">
            <div class="col col-12 use-promo-code-wrapper">
                <h4>
                    <?= tkt_t('Vous disposez d\'un code promo ?') ?>
                </h4>
                <span><?= tkt_t('Saisissez ci-dessous votre code promo') ?></span>
                <div class="input-group mb-2">
                    <input type="text" class="promo-code-input form-control" placeholder="<?= tkt_t('Utiliser un code promo') ?>" />
                    <div class="input-group-append">
                        <a href="javascript:;" class="promo-code-button button active">
                            <?= tkt_t('Valider') ?>
                        </a>
                    </div>
                </div>
                <div class="alert alert-danger promo-code-error d-none"></div>
                <div class="alert alert-success promo-code-success d-none"></div>
            </div>
        </div>
        <% } %>

        <hr/>
        <div class="row justify-content-md-end">
            <% if (!hide_links.includes('finalize')) { %>
            <div class="col col-12 col-sm-6 finish-cart-wrapper">
                <a href="<%= checkout_url %>" class="button active">
                    <?= tkt_t('Finaliser ma commande') ?>
                </a>
            </div>
            <% } %>
        </div>

            <% if (!hide_links.includes('cancel')) { %>
        <div class="row">
            <div class="col cancel-order-wrapper">
                <div class="cancel-order" >
                    <a href="" class="tkt-reset-cart-btn"><?= tkt_t('Annuler') ?></a> <?= tkt_t('ma commande') ?>
                </div>
            </div>
        </div>
            <% } %>

            <% if (!hide_links.includes('continue')) { %>
        <div class="row">
            <div class="col continue-shopping-wrapper">
                <div class="continue-shopping" >
                    <a href="<%= program_url %>"><?= tkt_t('Continuer') ?></a> <?= tkt_t('mes réservations') ?>
                </div>
            </div>
        </div>
            <% } %>
        <% } %>
    </section>
</div>
