<?php
/**
 * Booking form: success message partial
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "cart_url": String,
 *   "program_url": String
 * }
 */
?>
<div class="row">
    <div class="col">
        <h3 class="success-title">
            Merci, votre commande est réservée dans votre panier pour 30 minutes.
        </h3>
        <div class="float-right text-right">
            <a href="<%= cart_url %>" class="button show-cart-btn active" >
                <?= t('Accéder au panier') ?>
            </a>
            <div class="continue-shopping" >
                <a href="<%= program_url %>"><?= t('Continuer') ?></a> <?= t('ma visite') ?>
            </div>
        </div>
    </div>
</div>
