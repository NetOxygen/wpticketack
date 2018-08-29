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
        return date_to_min_s($s->start_at());
    }, $e->screenings())));
}

$ids = implode(',', array_map(function ($s) {
    return $s->_id();
}, $e->screenings()));
?>
<div class="event-inner">

  <div class="row">

    <div
      class="poster-background d-block d-md-none"
      style="background-image: url('<?= $e->first_poster()->url ?>')">
      <div class="overlay"></div>
    </div>

    <div class="col-md-9 col-sm-12 left-col">
      <div class="poster-wrapper d-none d-md-block">
        <img class="img-fluid poster" src="<?= $e->first_poster()->url ?>" />
      </div>
    </div>

    <div class="col-md-3 right-col text-right align-self-end">

      <div class="row">
        <div class="col">
          <span class="date"><?= $date_title ?></span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="title">
          <a href="<?= event_details_url($e) ?>">
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
            <a href="<?= event_details_url($e) ?>">
              Plus d'informations
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
              href="<?= event_details_url($e) ?>">
              Billets <span class="event-complete"></span>
            </a>
            <a
              class="show-if-bookable show-if-almost-not-bookable"
              href="<?= event_book_url($e) ?>">
              Billets <span class="event-complete"></span>
            </a>
            <div class="show-if-almost-not-bookable assertive d-none">Il ne reste que quelques places !</div>
            <div class="show-if-not-bookable assertive d-none">Complet !</div>
          </span>
        </div>
      </div>

    </div>

  </div>
</div>
