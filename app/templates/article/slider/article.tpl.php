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

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.medium_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.medium_height');
$image_url     = img_proxy_url($a->first_poster()->url, $images_width, $images_height);
?>
<div class="tkt-wrapper article-inner" data-component="Articles/Article" data-id="<?= $a->_id() ?>">

  <div class="row">

    <div class="poster-wrapper show-variants" style="background-image: url('<?= $image_url ?>')"></div>

    <div class="article-bottom-infos">
<!--
      <div class="info">
        <img src="<?= assets_url('build/images/articles/i.png') ?>" />
      </div>
-->
      <div class="name">
        <?= $a->name(LANG) ?>
      </div>
      <div class="description show-variants">
        <?= $a->additional_name(LANG) ?>
      </div>
    </div>

  </div>

    <?= TKTTEmplate::render('article/slider/variant_form', (object)[ "article" => $a ]) ?>
</div>

