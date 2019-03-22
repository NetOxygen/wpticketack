<?php
/**
 * Module settings documentation tab
 */
?>
<h2><?= t('Shortcodes disponibles') ?></h2>
<div class="row">
    <div class="shortcode">
        <h3><?= t('Affichage en liste') ?></h3>
        <figure>
            <img src="<?= assets_url('build/images/admin/screen-program2.png') ?>"/>
            <figcaption>
                <label><?= t('Affichage des prochaines séances en liste') ?></label>
                [tkt_program layout="screenings" template="list"][/tkt_program]
            </figcaption>
        </figure>
    </div>
    <div class="shortcode">
        <h3><?= t('Affichage en grille') ?></h3>
        <figure>
            <img src="<?= assets_url('build/images/admin/screen-program1.png') ?>"/>
            <figcaption>
                <label><?= t('Affichage des prochains films en grille de 4') ?></label>
                [tkt_program layout="events" template="grid" item_width="3"][/tkt_program]
            </figcaption>
        </figure>
    </div>
    <div class="shortcode">
        <h3><?= t('Affichage en galerie') ?></h3>
        <figure>
            <img src="<?= assets_url('build/images/admin/screen-program3.png') ?>"/>
            <figcaption>
                <label><?= t('Affichage des prochains films en galerie de 4 colonnes') ?></label>
                [tkt_program layout="events" template="gallery" item_width="3"][/tkt_program]
            </figcaption>
        </figure>
    </div>
    <div class="shortcode">
        <h3><?= t('Panier') ?></h3>
        <figure>
            <img src="<?= assets_url('build/images/admin/screen-cart.png') ?>"/>
            <figcaption>
                <label><?= t('Affichage du contenu du panier') ?></label>
                [tkt_cart][/tkt_cart]
            </figcaption>
        </figure>
    </div>
    <div class="shortcode">
        <h3><?= t('Abonnements') ?></h3>
        <figure>
            <img src="<?= assets_url('build/images/admin/screen-pass.png') ?>"/>
            <figcaption>
                <label><?= t('Vente des différents types d\'abonnements') ?></label>
                [tkt_buy_pass][/tkt_buy_pass]
            </figcaption>
        </figure>
    </div>
</div>
<style type="text/css">
    .row {
        clear: both;
    }
    .shortcode {
        width: calc(100% / 3);
        float: left;
    }
    .shortcode h3 {
        text-align: center;
    }
    figure {
        text-align: center;
    }
    figure img {
        max-height: 170px;
    }
    figcaption {
    }
    figcaption label {
        display: block;
        font-weight: bold;
    }
</style>
