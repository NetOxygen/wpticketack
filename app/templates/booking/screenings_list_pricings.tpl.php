<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\TKTApp;

/**
 * Booking form: pricings partial
 * This template will be parsed by underscore.js
 *
 * @templateVersion 2.82.0
 *
 * Input: {
 *   "screening": Screening instance
 * }
 */
$currency = TKTApp::get_instance()->get_config('currency', 'CHF');
?>
<% if (screening && _.keys(screening.pricings).length) { %>
<%
    const sorted_pricings = _.chain(screening.pricings || {})
        .map(function (pricing, key) {
            const opaque = pricing && pricing.opaque ? pricing.opaque : {};
            const weight = parseFloat(opaque.eshop_sort_weight);
            return {
                key,
                pricing,
                weight: isFinite(weight) ? weight : Number.POSITIVE_INFINITY
            };
        })
        .sortBy(function (item) { return item.key; })
        .sortBy(function (item) { return item.weight; })
        .value();
%>
<div class="pricings-form">
    <div class="error pricings-error d-none"></div>
    <button class="button book-btn active d-none my-3">
        <?php echo esc_html(tkt_t("Réserver une place sur mon abonnement")) ?>
    </button>
    <table width="100%">
    <% _.each(sorted_pricings, function(item) { const p = item.pricing; const key = item.key; %>
    <tr class="pricing-row">
        <td>
            <span class="pricing-name"><%= p.name.<?php echo esc_html(TKT_LANG) ?> %></span>
        </td>
        <td width="60px">
            <span class="pricing-price">
                <%= p.price.<?php echo esc_html($currency) ?>.toFixed(0) %> <?php echo esc_html($currency) ?>
            </span>
        </td>
        <td width="60px">
            <span class="tkt-badge tkt-badge-split flex-rev-on-mobile tkt-badge-plus-minus">
                <span class="tkt-badge-part tkt-grey-badge tkt-minus-btn text-center">-</span>
                <span class="tkt-badge-part tkt-light-badge text-center">
                    <span class="pricing-qty">
                        0
                    </span>
                </span>
                <span class="tkt-badge-part tkt-dark-badge tkt-plus-btn text-center">+</span>
            </span>
            <input type="hidden" data-pricing="<%= key %>" class="input pricing-input" value="0"/>
        </td>
    </tr>
    <% }) %>
    </table>
    <button class="button add-to-cart-btn active my-3" >
        <?php echo esc_html(tkt_t('Ajouter au panier')) ?>
    </button>
</div>
<% } else if (screening && screening.opaque.booking_mode === 'free') { %>
<div class="pricings-form">
    <?php echo esc_html(tkt_t("Entrée libre")) ?>
</div>
<% } %>
