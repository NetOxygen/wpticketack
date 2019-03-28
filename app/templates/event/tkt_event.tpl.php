<?php
/**
 * TKTEvent template
 *
 * Input:
 * $data: {
 *   "tkt_event": { ... }
 * }
 */

$e = $data->tkt_event;

$title   = get_post_meta($e->ID, 'title')[0];
$posters = array_map(function ($s) {
    return json_decode($s);
}, get_post_meta($e->ID, 'posters'))[0];
$trailers = array_map(function ($s) {
    return json_decode($s);
}, get_post_meta($e->ID, 'trailers'))[0];
$opaque     = json_decode(get_post_meta($e->ID, 'opaque')[0]);
$screenings = array_map(function ($s) {
    return new Screening($s);
}, json_decode(get_post_meta($e->ID, 'screenings')[0], /*assoc*/true));


$description = "";
if (!empty($opaque->description)) {
    $description = $opaque->description->fr;
    if (strip_tags($description) == "") {
        $description = "";
    }
}

$ids = array_map(function ($s) {
    return $s->_id();
}, $screenings);

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
?>
<div class="tkt-wrapper tkt_event">

  <div class="row">
    <div class="col">
      <div id="event-carousel" data-component="Media/Carousel">
        <div class="carousel-inner">
          <?php foreach ($trailers as $i => $t) : ?>
          <div class="carousel-item <?= $i == 0 ? 'active' : '' ?>">
            <div class="tkt-event-carousel-trailer-wrapper d-block w-100">
              <div
              id="tkt-event-carousel-trailer-<?= $i ?>"
                class="tkt-event-carousel-trailer"
                data-component="Media/YoutubeVideo"
                data-video-id="<?= tkt_yt_video_id($t->url) ?>"
                data-video-image="<?= tkt_img_proxy_url($t->image, $images_width, $images_height) ?>"
                data-bs4-carousel-id="event-carousel">
              </div>
            </div>
          </div>
          <?php endforeach; ?>
          <?php foreach ($posters as $i => $p) : ?>
          <div class="carousel-item <?= count($trailers) == 0 && $i == 0 ? 'active' : '' ?>">
            <img style="max-width: 924px" class="d-block w-100" src="<?= tkt_img_proxy_url($p->url, $images_width, $images_height) ?>" alt="<?= $title ?>">
          </div>
          <?php endforeach; ?>
        </div>
        <?php if (count($trailers) + count($posters) > 1) : ?>
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
          <span class="title active">
            <?= $title ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="genre">
            <?= $opaque->genre ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="free-text-one">
            <?= $opaque->free_text_1->fr ?>
          </span>
        </div>
      </div>
    </div>

    <div class="col-sm right-col text-right align-self-start">
      <div class="infos">
        <?= $opaque->free_text_2->fr ?>
      </div>
    </div>

  </div>

  <?php if (!empty($description)) : ?>
  <div class="row">
    <div class="col">
      <div class="synopsis">
        <span class="text">
            <?= $description ?>
        </span>
      </div>
    </div>
  </div>
  <?php endif; ?>

  <div class="row" data-component="Program/BookabilityState">
    <div class="col" data-bookability-ids="<?= implode(',', $ids) ?>">
      <span class="show-booking-form">
        <div data-component="Media/Loading" data-size-sm class="show-while-loading"></div>
        <span class="show-if-bookable show-if-almost-not-bookable d-none">
          <a href=""><?= t('Billets') ?></a>
        </span>
        <span class="show-if-almost-not-bookable assertive d-none"><?= t('Il ne reste que quelques places !') ?></span>
        <span class="show-if-not-bookable assertive d-none"><?= t('Complet !') ?></span>
      </span>
    </div>
  </div>

  <?= TKTTemplate::render('booking/form', (object)[ 'ids' => $ids ]) ?>

</div>
