<?php
/**
 * Person template
 *
 * Input:
 * $data: { ... }
 */

$photo = null;

if ($data['photos'][0]) {
    $photo = json_decode($data['photos'][0])[0];
}
?>
<div class="row">
    <div class="col-sm-4">
    <?php if ($photo) : ?>
        <img src="<?= tkt_img_proxy_url($photo) ?>" alt="<?= the_title(); ?>">
    <?php endif;?>
    </div>
    <div class="col-sm-8">
        <h3><?= the_title(); ?></h3>
        <div class="row">
            <div class="col-6"><?= tkt_t('Country') ?></div>
            <div class="col-6"><?= $data['country'][0] ?></div>
            <div class="col-6"><?= tkt_t('Company') ?></div>
            <div class="col-6"><?= $data['company'][0] ?></div>
            <div class="col-6"><?= tkt_t('Profession') ?></div>
            <div class="col-6"><?= $data['profession'][0] ?></div>
        </div>
    </div>
</div>
