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

$a = $data->article;

/*$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
$image_url     = tkt_img_proxy_url($s->first_poster()->url, $images_width, $images_height); TODO implement images*/
?>
<div class="tkt-wrapper article-inner">

  <div class="row">

    <div
      class="poster-background d-block d-md-none"
      style="background-image: url('<?= $image_url ?>')">
      <div class="overlay"></div>
    </div>

    <div class="col-md-9 col-sm-12 left-col">
      <div class="poster-wrapper d-none d-md-block">
        <img class="img-fluid poster" src="<?= $image_url ?>" />
      </div>
    </div>

    <div class="col-md-3 right-col text-right align-self-end">

      <div class="row">
        <div class="col">
          <span class="name"><?= $a->name(TKT_LANG) ?></span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="description">
            <a href="">
              <?= $a->description(TKT_LANG) ?>
            </a>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="price">
            <?= $a->price() ?>
          </span>
        </div>
      </div>
<!--
      <div class="row">
        <div class="col">
          <span class="more-infos">
            <a href="">
              <?= tkt_t('Plus d\'informations') ?>
            </a>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="tickets" data-buyability-ids="<?= $ids ?>">
            <div class="show-when-loading" data-component="Media/Loading" data-size-sm data-align-center></div>
            <a
              class="show-if-buyable show-if almost-not-buyable"
              href="<?= tkt_article_buy_url($e) ?>">
              <?= tkt_t('Commander') ?> <span class="article-soldout"></span>
            </a>
            <span class="show-if-almost-not-buyable article-soldout"><?= tkt_t('Il ne reste que quelques articles') ?></span>
            <span class="show-if-not-buyable article-soldout"><?= tkt_t('Plus de stock') ?></span>
          </span>
        </div>
      </div>
-->
    </div>

  </div>
</div>
