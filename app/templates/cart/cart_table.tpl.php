<?php

use Ticketack\WP\TKTApp;

/**
 * Cart table template
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "cart": Cart instance,
 *   "program_url": String,
 *   "cart_reset_url": String
 * }
 */
?>
<div class="tkt-wrapper">
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
                        <td colspan="2" class="total-title-cell"><?= tkt_t('Total :') ?></td>
                        <td class="total-price-cell"><%= cart.getFormattedTotal() %></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <div class="row">
        <div class="col finish-cart-wrapper">
            <!--
                If we want the automatic checkout without going to the eshop,
                add the "finish-cart-btn" class to the following <a/>, like
                <a href="<%= validate_cart_url %>" class="button finish-cart-btn active">
            -->
            <a href="<%= validate_cart_url %>" class="button active">
                <?= tkt_t('Finaliser ma commande') ?>
            </a>
        </div>
    </div>

    <div class="row">
        <div class="col cancel-order-wrapper">
            <div class="cancel-order" >
                <a href="" class="tkt-reset-cart-btn"><?= tkt_t('Annuler') ?></a> <?= tkt_t('ma commande') ?>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col continue-shopping-wrapper">
            <div class="continue-shopping" >
                <a href="<%= program_url %>"><?= tkt_t('Continuer') ?></a> <?= tkt_t('mes réservations') ?>
            </div>
        </div>
    </div>
    <% } %>
</div>
