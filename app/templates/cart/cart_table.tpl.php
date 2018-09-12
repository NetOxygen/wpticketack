<?php
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
<% if (cart.items.length == 0) { %>
<div class="row">
    <div class="col">
        <h3 class="empty-cart-title">
            <?= t('Votre panier est vide') ?>
        </h3>
    </div>
</div>
<% } else { %>
<div class="row">
    <div class="col">
        <table class="tkt-cart-table">
            <thead>
                <tr>
                    <th scope="col"><?= t('Achats') ?></th>
                    <th scope="col"><?= t('Réservé jusqu\'à') ?></th>
                    <th scope="col"><?= t('Prix') ?></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <% _.each(cart.items, (item) => { %>
                <tr>
                    <td class="title-cell"><%= item.getFormattedTitle() %></td>
                    <td class="expire-cell"><%= item.getFormattedExpireAt() %></td>
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
                    <td colspan="2" class="total-title-cell">Total :</td>
                    <td colspan="2" class="total-price-cell"><%= cart.getFormattedTotal() %></td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>

<div class="row">
    <div class="col finish-cart-wrapper">
        <a href="<%= validate_cart_url %>" class="button finish-cart-btn active">
            <?= t('Finaliser ma commande') ?>
        </a>
    </div>
</div>

<div class="row">
    <div class="col cancel-order-wrapper">
        <div class="cancel-order" >
            <a href="" class="tkt-reset-cart-btn"><?= t('Annuler') ?></a> <?= t('ma commande') ?>
        </div>
    </div>
</div>

<div class="row">
    <div class="col continue-shopping-wrapper">
        <div class="continue-shopping" >
            <a href="<%= program_url %>"><?= t('Continuer') ?></a> <?= t('mes réservations') ?>
        </div>
    </div>
</div>
<% } %>
