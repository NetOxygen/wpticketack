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
$m = Event::from_screenings([$s])[0];

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
$image_url     = tkt_img_proxy_url($m->first_poster()->url, $images_width, $images_height);
?>
<div class="tkt-wrapper event-inner">
  <div class="row no-gutters">
    <div class="col">
      <div class="poster-wrapper">
        <a href="<?= tkt_event_book_url($m, $s) ?>">
          <img src="<?= $image_url ?>" />
          <div class="event-infos">
            <span>
              <?= $m->localized_title_or_original(TKT_LANG) ?>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
