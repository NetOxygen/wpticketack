<?php

use Ticketack\WP\TKTApp;

/**
 * Article template
 *
 * Input:
 * $data: {
 *   "article": { ... }
 * }
 */

$article = $data->article;

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
$image_url     = tkt_img_proxy_url($article->first_poster()->url, $images_width, $images_height);
?>
<div class="tkt-wrapper article-inner">
    <div class="row">

        <div class="col-sm-12">
            <div class="poster-wrapper">
                <a href="<?= tkt_article_details_url($article) ?>">
                    <img class="img-fluid poster" src="<?= $image_url ?>" />
                </a>
            </div>
        </div>

        <div class="col-sm-12">
            <h3 class="name">
                <a href="<?= tkt_article_details_url($article) ?>">
                    <?= $article->name(TKT_LANG) ?>
                </a>
            </h3>
        </div>

        <div class="col-sm-12 mt-4">
            <span class="short_description"><?= $article->short_description(TKT_LANG) ?></span>
        </div>

        <div class="col-sm-12 text-center mt-4">
            <a class="btn btn-primary" href="<?= tkt_article_details_url($article) ?>">
                <?= tkt_t('Plus d\'informations'); ?>
            </a>
        </div>
    </div>
</div>
