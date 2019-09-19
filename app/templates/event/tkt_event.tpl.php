<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Screening;

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
    $description = $opaque->description->{TKT_LANG};
    if (strip_tags($description) == "") {
        $description = "";
    }
}

$ids = array_map(function ($s) {
    return $s->_id();
}, $screenings);

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');

$nb_slides = count($trailers) + count($posters);
?>
<div class="tkt-wrapper tkt_event">
  <div id="tkt-event">

    <?php if ($nb_slides > 0) : ?>
    <section class="tkt-full-section carousel-section">
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
            <?php if ($nb_slides > 1) : ?>
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
    </section>
    <?php endif; ?>

    <section class="tkt-section infos-section">
      <?php if (!empty($description)) : ?>
      <div class="row">
        <div class="col">
          <h3 class="tkt-section-title"><?= tkt_t('Synopsis') ?></h3>
          <div class="synopsis">
            <span class="text">
                <?= $description ?>
            </span>
          </div>
        </div>
      </div>
      <?php endif; ?>

      <div class="row">

        <?php if (!empty($opaque->genre) || !empty($opaque->duration)) : ?>
        <div class="col-md left-col text-left">
          <h3 class="tkt-section-title"><?= tkt_t('Details') ?></h3>

          <?php if (!empty($opaque->genre)) : ?>
          <div class="row">
            <div class="col">
              <span class="tkt-badge tkt-badge-split">
                <span class="tkt-badge-part tkt-dark-badge"><?= tkt_t('Genre') ?></span>
                <span class="tkt-badge-part tkt-grey-badge"><?= $opaque->genre ?></span>
              </span>
            </div>
          </div>
          <?php endif; ?>

          <?php if (!empty($opaque->duration)) : ?>
          <div class="row">
            <div class="col">
              <div class="duration">
                <span class="tkt-badge tkt-badge-split">
                  <span class="tkt-badge-part tkt-dark-badge"><?= tkt_t('Durée') ?></span>
                  <span class="tkt-badge-part tkt-grey-badge"><?= $opaque->duration ?> <?= tkt_t('min') ?></span>
                </span>
              </div>
            </div>
          </div>
          <?php endif; ?>

          <?php if (!empty($opaque->free_text_1->{TKT_LANG})) : ?>
          <div class="row">
            <div class="col">
              <span class="free-text-one">
                <?= $opaque->free_text_1->{TKT_LANG} ?>
              </span>
            </div>
          </div>
          <?php endif; ?>

        </div>
        <?php endif; ?>

        <div class="col-md right-col">
          <?php if (!empty($opaque->people)) : ?>
          <h3 class="tkt-section-title"><?= tkt_t('Casting') ?></h3>
          <?php foreach ($opaque->people as $p) : ?>
          <div class="row">
            <div class="col">
              <span class="tkt-badge tkt-badge-split">
                <span class="tkt-badge-part tkt-dark-badge"><?= $p->activity ?></span>
                <span class="tkt-badge-part tkt-grey-badge"><?= $p->firstname.' '.$p->lastname ?></span>
              </span>
            </div>
          </div>
          <?php endforeach; ?>
          <?php endif; ?>

          <?php if (!empty($opaque->free_text_2->{TKT_LANG})) : ?>
          <div class="row">
            <div class="col">
              <div class="free-text-2">
                <span><?= $opaque->free_text_2->{TKT_LANG} ?></span>
              </div>
            </div>
          </div>
          <?php endif; ?>
        </div>

      </div>
    </section>

    <section class="tkt-section tkt-dark-section book-section">
      <h3 class="tkt-section-title">
        <?= tkt_t('Achetez vos billets') ?>
      </h3>
      <div class="row" data-component="Program/BookabilityState">
        <div class="col" data-bookability-ids="<?= implode(',', $ids) ?>">
          <span class="show-booking-form">
            <div data-component="Media/Loading" data-size-sm class="show-while-loading"></div>
            <span class="show-if-almost-not-bookable assertive d-none"><?= tkt_t('Il ne reste que quelques places !') ?></span>
            <span class="show-if-not-bookable assertive d-none"><?= tkt_t('Complet !') ?></span>
          </span>
        </div>
      </div>

      <?= TKTTemplate::render('booking/form', (object)[ 'ids' => $ids ]) ?>

    </section>
  </div>
</div>
