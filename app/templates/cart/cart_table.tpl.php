<?php

use Ticketack\WP\TKTApp;

/**
 * Cart table template
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "cart": Cart instance,
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
                            <th scope="col"><?= tkt_t('Prix') ?></th>
                            <th scope="col"></th>
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

            <% if (!hide_links.includes('finalize')) { %>
        <div class="row">
            <div class="col finish-cart-wrapper">
                <a href="<%= checkout_url %>" class="button active">
                    <?= tkt_t('Finaliser ma commande') ?>
                </a>
            </div>
        </div>
            <% } %>

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
