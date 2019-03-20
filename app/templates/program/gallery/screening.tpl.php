<?php
/**
 * Program screening template
 *
 * Input:
 * $data: {
 *   "screening": { ... }
 * }
 */

$s = $data->screening;
$m = array_shift(Event::from_screenings([$s]));

$images_width  = TKTApp::get_instance()->get_config('images.dimensions.big.width');
$images_height = TKTApp::get_instance()->get_config('images.dimensions.big.height');
$image_url     = img_proxy_url($m->first_poster()->url, $images_width, $images_height);
?>
<div class="tkt-wrapper event-inner">
  <div class="row">
    <div class="poster-wrapper">
      <a href="<?= event_details_url($m) ?>">
        <img src="<?= $image_url ?>" />
        <span>
          <?= $m->localized_title_or_original(LANG) ?>
        </span>
      </a>
    </div>
  </div>
</div>
