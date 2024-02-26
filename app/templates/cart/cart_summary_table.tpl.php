<?php

use Ticketack\WP\TKTApp;

/**
 * Cart table template
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "cart"              : Cart instance,
 *   "theme"             : 'dark|light',
 *   "enable_promo_code" : bool
 * }
 */
?>
<%
    const fees = cart.getFees();
%>

<% if (cart.items.length > 0) { %>

<div class="tkt-wrapper">
    <section class="tkt-section tkt-<?= $data->theme ?>-section tkt-cart-section">
        <div class="row mt-3">
            <div class="col">
                <h5> <?= tkt_t('Résumé du panier') ?></h5>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <table class="table table-borderless">
                    <tr>
                        <td align="left">
                            <?= tkt_t('Panier') ?>: <%= cart.items.length %> <?= tkt_t('produit(s)') ?>
                        </td>
                        <td align="right">
                            <%= cart.getFormattedTotal(/*inversed*/true) %>
                        </td>
                    </tr>
                    <% if (fees.length) { %>
                        <tr>
                            <td align="left">
                                <?= tkt_t('Frais') ?>
                            </td>
                        </tr>
                        <tr>
                            <% _.each(fees, function(item) { %>
                                <% if(item.type == "shipping" || item.type == "paymentfee") { %>
                                    <td align="left" class="title-cell"><%= item.getFormattedTitle() %></td>
                                    <td align="right" class="price-cell"><%= item.getFormattedPrice() %></td>
                                <% } %>
                            <% }); %>
                        </tr>
                    <% }; %>
                    <tr>
                        <td colspan="2">
                            <hr/>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <?= tkt_t('Total TTC') ?>
                        </td>
                        <td align="right">
                            <%= cart.getFormattedTotal(/*inversed*/true) %>
                        </td>
                    </tr>
                    <?php if ($data->enable_promo_code) : ?>
                        <tr>
                            <td colspan="2">
                                <div class="row justify-content-md-end mt-5">
                                    <div class="col col-12 use-promo-code-wrapper">
                                        <div class="input-group mb-2">
                                            <input type="text" class="promo-code-input form-control" placeholder="<?= tkt_t('Code promo') ?>" />
                                            <div class="input-group-append">
                                                <a href="javascript:;" class="promo-code-button button active">
                                                    <?= tkt_t('OK') ?>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="alert alert-danger promo-code-error d-none"></div>
                                        <div class="alert alert-success promo-code-success d-none"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    <?php endif; ?>
                </table>
            </div>
        </div>
   <!-- <% _.each(cart.mergedItems, function(item) { %>
    <% }); %> -->
    </section>
</div>
<% } %>
