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

$date_title = "";
if (!empty($e->opaque('free_text_3'))) {
    $date_title = $e->opaque('free_text_3')['fr'];
    if (strip_tags($date_title) == "") {
        $date_title = "";
    }
}

if (empty($date_title)) {
    $date_title = implode('<br/>', array_unique(array_map(function ($s) {
        return str_replace(':', 'H', date_and_time_to_min_s($s->start_at()));
    }, $e->screenings())));
}

$description = "";
if (!empty($e->opaque('description'))) {
    $description = $e->opaque('description')['fr'];
    if (strip_tags($description) == "") {
        $description = "";
    }
}

$ids = array_map(function ($s) {
    return $s->_id();
}, $e->screenings());

$images_width  = TKTApp::get_instance()->get_config('images.dimensions.big.width');
$images_height = TKTApp::get_instance()->get_config('images.dimensions.big.height');
?>
<div class="tkt_event">

  <div class="row">
    <div class="col">
      <div id="event-carousel" data-component="Media/Carousel">
        <div class="carousel-inner">
          <?php foreach ($e->trailers() as $i => $t) : ?>
          <div class="carousel-item <?= $i == 0 ? 'active' : '' ?>">
            <div class="tkt-event-carousel-trailer-wrapper d-block w-100">
              <div
              id="tkt-event-carousel-trailer-<?= $i ?>"
                class="tkt-event-carousel-trailer"
                data-component="Media/YoutubeVideo"
                data-video-id="<?= yt_video_id($t->url) ?>"
                data-video-image="<?= img_proxy_url($t->image, $images_width, $images_height) ?>"
                data-bs4-carousel-id="event-carousel">
              </div>
            </div>
          </div>
          <?php endforeach; ?>
          <?php foreach ($e->posters() as $i => $p) : ?>
          <div class="carousel-item <?= count($e->trailers()) == 0 && $i == 0 ? 'active' : '' ?>">
            <img style="max-width: 924px" class="d-block w-100" src="<?= img_proxy_url($p->url, $images_width, $images_height) ?>" alt="<?= $e->localized_title_or_original('fr') ?>">
          </div>
          <?php endforeach; ?>
        </div>
        <?php if (count($e->trailers()) + count($e->posters()) > 1) : ?>
        <a class="carousel-control-prev" href="#event-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Précédent</span>
        </a>
        <a class="carousel-control-next" href="#event-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Suivant</span>
        </a>
        <?php endif; ?>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm left-col text-left align-self-start">

      <div class="row">
        <div class="col">
          <span class="screening-date"><?= $date_title ?></span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="title active">
            <?= $e->localized_title_or_original('fr') ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="genre">
            <?= $e->opaque()['genre'] ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="free-text-one">
            <?= $e->opaque('free_text_1')['fr'] ?>
          </span>
        </div>
      </div>
    </div>

    <div class="col-sm right-col text-right align-self-start">
      <div class="infos">
        <?= $e->opaque('free_text_2')['fr'] ?>
      </div>
    </div>

  </div>

  <div class="row" data-component="Program/BookabilityState">
    <div class="col" data-bookability-ids="<?= implode(',', $ids) ?>">
      <span class="show-booking-form">
        <div data-component="Media/Loading" data-size-sm class="show-while-loading"></div>
        <span class="show-if-bookable show-if-almost-not-bookable d-none">
          <a href="">Billets</a>
        </span>
        <span class="show-if-almost-not-bookable assertive d-none">Il ne reste que quelques places !</span>
        <span class="show-if-not-bookable assertive d-none">Complet !</span>
      </span>
    </div>
  </div>

  <?= TKTTemplate::render('booking/form', (object)[ 'ids' => $ids ]) ?>

  <div class="row">
    <div class="col">
      <div class="synopsis">
        <span class="title assertive">
          <?= $e->localized_title_or_original('fr') ?>
        </span>
        <span class="text">
            <?= $description ?>
        </span>
      </div>
    </div>
  </div>

</div>
