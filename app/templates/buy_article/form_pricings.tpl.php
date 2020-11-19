<?php

use Ticketack\WP\TKTApp;

/**
 * BuyArticle form: pricings partial
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "article": { ... },
 *   "salepoint_id": "12345678-1234-1234-1234-123456789012"
 * }
 */
?>
<div class="tkt-wrapper">
    <% if (article.variants.length) { %>
    <div class="pricings-form">
        <div class="row">
            <div class="col">
                <span class="assertive">
                    <?= tkt_t('Entrez le nombre d\'éléments que vous souhaitez ajouter à votre panier :') ?>
                </span>
            </div>
        </div>
        <% _.mapKeys(article.variants, function(variant, key) { %>
            <div class="row pricing-row">
                <div class="col">
                    <% if (variant.hasStockForSalepoint(salepoint_id)) { %>
                    <span class="tkt-badge tkt-badge-plus-minus tkt-badge-split flex-rev-on-mobile">
                        <span class="tkt-badge-part tkt-grey-badge tkt-minus-btn text-center">-</span>
                        <span class="tkt-badge-part tkt-light-badge text-center">
                            <span class="variant-qty">
                                0
                            </span>
                            x
                            <span class="pricing-name">
                                <%= variant.name.<?= TKT_LANG ?> %> :
                            </span>
                            <span class="pricing-price">
                                <%= variant.price.CHF %> CHF
                            </span>
                        </span>
                        <span class="tkt-badge-part tkt-dark-badge tkt-plus-btn text-center">+</span>
                    </span>
                    <input type="hidden" data-variant="<%= key %>" class="tkt-input variant-input" value="0"/>
                    <% } else { %>
                    <span class="tkt-badge tkt-badge-split flex-rev-on-mobile">
                        <span class="tkt-badge-part tkt-light-badge text-center out-of-stock">
                        <%= variant.name.<?= TKT_LANG ?> %> : <?= tkt_t("Épuisé") ?>
                        </span>
                    </span>
                    <% } %>
                    <div class="tkt-variant-error-msg d-none" data-variant-id="<%= variant._id %>"></div>
                </div>
            </div>
        <% }) %>
        <div class="row">
            <div class="col">
                <div class="error-panel d-none"></div>
                <button class="button add-to-cart-btn active" >
                    <?= tkt_t('Ajouter à mon panier') ?>
                </button>
            </div>
        </div>
    </div>
    <% } %>
</div>
