<?php
/**
 * Article template
 *
 * Input:
 * $data: {
 *   "article": { ... }
 * }
 */

$a = $data->article;

$images_width  = TKTApp::get_instance()->get_config('images.dimensions.medium.width');
$images_height = TKTApp::get_instance()->get_config('images.dimensions.medium.height');
$image_url     = img_proxy_url($a->first_poster()->url, $images_width, $images_height);
?>
<div class="article-inner" data-component="Articles/Article" data-id="<?= $a->_id() ?>">

  <div class="row show-variants">

    <div class="poster-wrapper" style="background-image: url('<?= $image_url ?>')"></div>

    <div class="article-bottom-infos">
      <div class="info">
        <img src="<?= assets_url('build/images/articles/i.png') ?>" />
      </div>
      <div class="name">
        <?= $a->name(LANG) ?>
      </div>
      <div class="description">
        <?= $a->additional_name(LANG) ?>
      </div>
    </div>

  </div>

    <?= TKTTEmplate::render('article/slider/variant_form', (object)[ "article" => $a ]) ?>
</div>

