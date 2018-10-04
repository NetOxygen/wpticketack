<?php
/**
 * Program event template
 *
 * Input:
 * $data: {
 *   "event": { ... }
 * }
 */

$e = $data->event;

$images_width  = TKTApp::get_instance()->get_config('images.dimensions.big.width');
$images_height = TKTApp::get_instance()->get_config('images.dimensions.big.height');
$image_url     = img_proxy_url($e->first_poster()->url, $images_width, $images_height);
?>
<div class="event-inner">
  <div class="row">
    <div class="poster-wrapper">
      <a href="<?= event_details_url($e) ?>">
        <img src="<?= $image_url ?>" />
        <span>
          <?= $e->localized_title_or_original(LANG) ?>
        </span>
      </a>
    </div>
  </div>
</div>
