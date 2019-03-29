<?php
/**
 * Article variants form
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "article": Article instance
 * }
 */
$a = $data->article;

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.medium_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.medium_height');
$image_url     = tkt_img_proxy_url($a->first_poster()->url, $images_width, $images_height);
?>
<div class="tkt-wrapper article-variants-form" data-id="<?= $a->_id() ?>">
    <div class="close-variants"></div>
    <div class="row">
        <div class="col">
            <span class="variants-title"> <?= tkt_t('Vous avez choisi :') ?> </span>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <span class="variants-article-name"> <?= $a->name(TKT_LANG) ?> </span>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="poster-wrapper" style="background-image: url('<?= $image_url ?>')"></div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <span class="variants-subtitle">
                <?= tkt_t('Sélectionnez votre contenance et votre quantité :') ?>
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="variants-wrapper">
                <?php foreach ($a->variants() as $v) : ?>
                <tr class="variant-wrapper" data-id="<?= $v->_id() ?>">
                    <td class="variant-name"><?= $v->name(TKT_LANG) ?></td>
                    <td class="variant-sub"></td>
                    <td class="variant-quantity">0</td>
                    <td class="variant-add"></td>
                    <td class="variant-price" data-price="<?= $v->price()->value() ?>"><?= $v->price() ?></td>
                </tr>
                <?php endforeach; ?>
                <tr class="variant-total-row">
                    <td class="variant-total-label" colspan="5">
                        <?= tkt_t('Total') ?>
                        CHF <span class="variant-total">0.00</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <span class="variants-error">
                <?= tkt_t('Veuillez choisir au moins un produit') ?>
            </a>
            <span class="variants-submit-error"></span>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <a class="btn btn-link variants-submit">
                <?= tkt_t('Valider') ?>
            </a>
        </div>
    </div>
</div>
