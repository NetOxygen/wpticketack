<?php
/**
 * Booking form: pricings partial
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "screening": Screening instance
 * }
 */
?>
<% if (_.keys(screening.pricings).length) { %>
<div class="pricings-form">
    <div class="error pricings-error d-none"></div>
    <button class="button book-btn active d-none my-3">
        <?= tkt_t("Réserver une place sur mon abonnement") ?>
    </button>
    <% if (screening.eligible_types.length) { %>
    <ul class="elligible-types-list mt-3">
        <% screening.eligible_types.map(function (t) { %>
        <li class="elligible-type">
            <span class="type-name">
                <i class="fa fa-ticket"></i>
                <%= t.name.<?= TKT_LANG ?> %>
            </span>
            <a href="<?= TKT_LANG == 'fr' ? '/acheter-un-pass' : '/en/buy-a-pass' ?>" class="type-link"><?= tkt_t('Acheter') ?></a>
        </li>
        <% }); %>
    </ul>
    <% } %>
    <table>
    <% _.mapKeys(screening.pricings, function(p, key) { %>
    <tr class="pricing-row">
        <td>
            <span class="pricing-name"><%= p.name.<?= TKT_LANG ?> %></span>
        </td>
        <td width="60px">
            <div>
                <span class="tkt-minus-btn text-center">-</span>
                <span class="text-center">
                    <span class="pricing-qty"> 0 </span>
                </span>
                <span class="tkt-plus-btn text-center">+</span>
            </div>
            <input type="hidden" data-pricing="<%= key %>" class="input pricing-input" value="0"/>
        </td>
        <td width="60px">
            <span class="pricing-price">
                <%= p.price.CHF.toFixed(0) %>.-
            </span>
        </td>
    </tr>
    <% }) %>
    </table>
    <button class="button add-to-cart-btn active my-3" >
        <?= tkt_t('Ajouter au panier') ?>
    </button>
</div>
<% } else if (screening.opaque.booking_mode === 'free') { %>
<div class="pricings-form">
    <?= tkt_t("Entrée libre") ?>
</div>
<% } %>
<script>
$('[data-toggle="popover"]').popover();
</script>
