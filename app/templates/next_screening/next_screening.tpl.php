<?php

use Ticketack\WP\TKTApp;
use Ticketack\Core\Models\Event;

/**
 * Program screening template
 *
 * Input:
 * $data: {
 *   "screening": { ... },
 *   "output": "title|date|time|datetime|venue|poster"
 * }
 */

$s      = $data->screening;
$output = $data->output;
$m = array_shift(Event::from_screenings([$s]));

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
$image_url     = tkt_img_proxy_url($m->first_poster()->url, $images_width, $images_height);
?>

<?php if (empty($output)) : ?>
<div class="tkt-wrapper next-screening event-inner">
  <div class="row">
    <div class="col">
      <div class="poster-wrapper">
        <a href="<?= tkt_event_book_url($m, $s) ?>">
          <img src="<?= $image_url ?>" />
        </a>
      </div>
      <div class="infos-wrapper">
        <h4 class="title text-center">
            <span>
              <?= $m->localized_title_or_original(TKT_LANG) ?>
            </span>
        </h4>
        <div class="datetime text-center">
            <span>
              <?= tkt_datetime_to_s($s->start_at()) ?>
            </span>
        </div>
      </div>
    </div>
  </div>
</div>
<?php else: ?>
    <?php
    switch ($output) {
        case 'title':
            echo $m->localized_title_or_original(TKT_LANG);
            break;
        case 'date':
            echo tkt_date_to_min_s($s->start_at());
            break;
        case 'time':
            echo tkt_date_and_time_to_time_s($s->start_at());
            break;
        case 'datetime':
            echo tkt_date_and_time_to_min_s($s->start_at());
            break;
        case 'venue':
            echo $s->place()->name();
            break;
        case 'poster':
            echo '<img src="'.$image_url.'" />';
            break;
    }
    ?>
<?php endif; ?>
