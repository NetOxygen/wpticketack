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

            <!-- <div class="row">
                <div class="col">
                    <span class="description">
                        <a href="">
                            <?= $article->description(TKT_LANG) ?>
                        </a>
                    </span>
                </div>
            </div> -->

            <!-- <div class="row">
                <div class="col">
                    <span class="price">
                        <?= $article->price() ?>
                    </span>
                </div>
            </div> -->
            <!-- <div class="row">
                <div class="col">
                    <span class="more-infos">
                        <a href="">
                            <?= tkt_t('Plus d\'informations') ?>
                        </a>
                    </span>
                </div>
            </div> -->

            <!-- <div class="row">
                <div class="col">
                    <span class="tickets" data-buyability-ids="<?= $ids ?>">
                        <div class="show-when-loading" data-component="Media/Loading" data-size-sm data-align-center></div>
                        <a
                            class="show-if-buyable show-if almost-not-buyable"
                            href="<?= tkt_article_buy_url($e) ?>"
                        >
                            <?= tkt_t('Commander') ?> <span class="article-soldout"></span>
                        </a>
                        <span class="show-if-almost-not-buyable article-soldout"><?= tkt_t('Il ne reste que quelques articles') ?></span>
                        <span class="show-if-not-buyable article-soldout"><?= tkt_t('Plus de stock') ?></span>
                    </span>
                </div>
            </div> -->

    </div>
</div>
