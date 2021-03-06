<?php

use Ticketack\WP\TKTApp;
use Ticketack\Core\Models\Event;

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

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
$image_url     = tkt_img_proxy_url($m->first_poster()->url, $images_width, $images_height);
?>
<div class="tkt-wrapper event-inner">
  <div class="row">
    <div class="poster-wrapper">
      <a href="<?= tkt_event_details_url($m) ?>">
        <img src="<?= $image_url ?>" />
        <span>
          <?= $m->localized_title_or_original(TKT_LANG) ?>
        </span>
      </a>
    </div>
  </div>
</div>
