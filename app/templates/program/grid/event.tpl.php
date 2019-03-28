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

$ids = implode(',', array_map(function ($s) {
    return $s->_id();
}, $e->screenings()));

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
$image_url     = tkt_img_proxy_url($e->first_poster()->url, $images_width, $images_height);
?>
<div class="tkt-wrapper event-inner">

  <div class="row">
    <div class="col left-col">
      <div class="poster-wrapper d-none d-md-block">
        <img class="img-fluid poster" src="<?= $image_url ?>" />
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="title">
      <a href="<?= tkt_event_details_url($e) ?>">
          <?= $e->localized_title_or_original('fr') ?>
        </a>
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
      <span class="more-infos">
        <a href="<?= tkt_event_details_url($e) ?>">
          <?= tkt_t('Plus d\'informations') ?>
        </a>
      </span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="tickets" data-bookability-ids="<?= $ids ?>">
        <a class="show-while-loading">...</a>
        <a
          class="show-if-not-bookable d-none"
          href="<?= tkt_event_details_url($e) ?>">
          <?= tkt_t('Billets') ?> <span class="event-complete"></span>
        </a>
        <a
          class="show-if-bookable show-if-almost-not-bookable"
          href="<?= tkt_event_book_url($e) ?>">
          <?= tkt_t('Billets') ?> <span class="event-complete"></span>
        </a>
        <div class="show-if-almost-not-bookable assertive d-none"><?= tkt_t('Il ne reste que quelques places !') ?></div>
        <div class="show-if-not-bookable assertive d-none"><?= tkt_t('Complet !') ?></div>
      </span>
    </div>
  </div>
</div>
