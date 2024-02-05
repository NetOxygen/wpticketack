<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Screening;

/**
 * TKTEvent template
 *
 * Input:
 * $data: {
 *   "screening": TKTScreening instance,
 *   "tkt_event": { ... }
 * }
 */

$s = $data->screening;
$e = $data->tkt_event;
$screenings = array_map(function ($s) {
    return new Screening($s);
}, json_decode(get_post_meta($e->ID, 'screenings')[0], /*assoc*/true));
$ids = array_map(function ($s) {
    return $s->_id();
}, $screenings);

$title    = $s->localized_title_or_original(TKT_LANG);
$posters  = $s->posters();
$trailers = $s->trailers();

$opaque     = $s->opaque();

$screenings = array_map(function ($s) {
    return new Screening($s);
}, json_decode(get_post_meta($e->ID, 'screenings')[0], /*assoc*/true));


$description = $s->description(TKT_LANG);
if (!empty($description)) {
    if (strip_tags($description) == "") {
        $description = "";
    }
}

$movies = $s->movies();

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');

$nb_slides = count($trailers) + count($posters);
?>
<div class="tkt-wrapper tkt_event">
  <div id="tkt-event">

    <div class="row">
      <div class="col">
        <h1 class="title">
          <?= $title ?>
        </h1>
      </div>
    </div>

    <?php if ($nb_slides > 0) : ?>
    <section class="tkt-full-section carousel-section">
      <div class="row">
        <div class="col">
          <div id="event-carousel" data-component="Media/Carousel" class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
              <?php foreach ($trailers as $i => $t) : ?>
              <li class="glide__slide <?= $i == 0 ? 'active' : '' ?>">
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
              </li>
              <?php endforeach; ?>
              <?php foreach ($posters as $i => $p) : ?>
              <li class="glide__slide <?= count($trailers) == 0 && $i == 0 ? 'active' : '' ?>">
                <img class="d-block w-100" src="<?= tkt_img_proxy_url($p->url, $images_width, $images_height) ?>" alt="<?= $title->{TKT_LANG} ?>">
              </li>
              <?php endforeach; ?>
            </div>
            <?php if ($nb_slides > 1) : ?>
            <div class="glide__arrows" data-glide-el="controls">
              <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><</button>
              <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>
            </div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </section>
    <?php endif; ?>

    <section class="tkt-section infos-section">

      <div class="row">
        <div class="col-md left-col text-left">
          <h3 class="tkt-section-title"><?= tkt_t('Details') ?></h3>
          <div class="row">

            <?php if (!empty($s->sections())) : ?>
            <div class="col">
              <span class="tkt-badge tkt-badge-split">
                <span class="tkt-badge-part tkt-dark-badge"><?= (count($s->sections())>1) ? tkt_t('Sections') : tkt_t('Section') ?></span>
                <?php foreach ($s->sections() as $section) : ?>
                    <span class="tkt-badge-part tkt-grey-badge"><?= $section->name(TKT_LANG) ?></span>
                <?php endforeach; ?>
              </span>
            </div>
            <?php endif; ?>

          </div>
        </div>
      </div>

      <?php if (!empty($description)) : ?>
      <div class="row mt-2">
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
    </section>

    <?php if (!empty($s->movies())) : ?>
    <section class="tkt-section movies-section">
      <h3 class="tkt-section-title"><?= tkt_t('Films') ?></h3>
      <div class="movies-wrapper">
        <?php foreach ($s->movies() as $m) : ?>
        <div class="movie-wrapper">
          <div class="row">
            <div class="col-md left-col text-left">
              <div class="row">
                <?php if (count($m->posters()) > 0) : ?>
                <div class="col col-sm-12 col-md-6">
                  <a href="<?= tkt_event_details_url($m) ?>">
                    <div class="movie-poster" style="background-image: url('<?= tkt_img_proxy_url(array_shift($m->posters())['url'], $images_width, $images_height) ?>');">
                    </div>
                  </a>
                </div>
                <?php endif; ?>

                <div class="col col-sm-12 col-md-6">
                  <div class="movie-title">
                    <a href="<?= tkt_event_details_url($m) ?>">
                      <?= $m->localized_title_or_original(TKT_LANG) ?>
                    </a>
                  </div>
                  <?php $infos = implode(', ', array_filter([
                    ucfirst(strtolower($m->opaque('genre'))),
                    $m->opaque('duration', 0).' min',
                  ]));
                  ?>
                  <div class="movie-infos"><?= $infos ?></div>
                  <div class="movie-description"><?= $m->opaque('description', [])[TKT_LANG] ?></div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <?php endforeach; ?>
      </div>

    </section>
    <?php endif; ?>

    <section class="tkt-section tkt-dark-section book-section">
      <h3 class="tkt-section-title">
        <?= tkt_t('Achetez vos billets') ?>
      </h3>

      <?= do_shortcode('[tkt_booking_form layout="form" theme="dark" ids="'.$s->_id().'" /]') ?>

    </section>
  </div>
</div>
