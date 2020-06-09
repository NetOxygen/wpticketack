<?php

use Ticketack\WP\TKTApp;

/**
 * BuyArticle form: pricings partial
 * This template will be parsed by underscore.js
 *
 * JS Input: {
 *
 * }
 */
?>
<div class="tkt-wrapper">
    <% if (variants.length) { %>
    <div class="pricings-form">
        <div class="row">
            <div class="col">
                <span class="assertive">
                    <?= tkt_t('Entrez le nombre d\'éléments (s) que vous souhaitez ajouter à votre panier :') ?>
                </span>
            </div>
        </div>
        <% _.mapKeys(variants, function(variant, key) { %>
        <div class="row pricing-row">
            <div class="col">
                <span class="tkt-badge tkt-badge-split flex-rev-on-mobile">
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
                <input type="hidden" data-variant="<%= key %>" class="input variant-input" value="0"/>
            </div>
        </div>
        <% }) %>
        <div class="row">
            <div class="col">
                <div class="error variants-error d-none"></div>
                <button class="button add-to-cart-btn active" >
                    <?= tkt_t('Ajouter à mon panier') ?>
                </button>
            </div>
        </div>
    </div>
    <% } %>
</div>