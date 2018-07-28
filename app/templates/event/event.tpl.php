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

$date_title = date_to_min_s($e->start_at());
if ($e->start_at()->format('Y-m-d') != $e->stop_at()->format('Y-m-d')) {
    $dates = sprintf(
        "Du %s au %s",
        date_to_min_s($e->start_at()),
        date_to_min_s($e->stop_at())
    );
}

$ids = array_map(function ($s) {
    return $s->_id();
}, $e->screenings());
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
                data-video-image="<?= $t->image ?>"
                data-bs4-carousel-id="event-carousel">
              </div>
            </div>
          </div>
          <?php endforeach; ?>
          <?php foreach ($e->posters() as $i => $p) : ?>
          <div class="carousel-item <?= count($e->trailers()) == 0 && $i == 0 ? 'active' : '' ?>">
            <img class="d-block w-100" src="<?= $p->url ?>" alt="<?= $e->localized_title_or_original('fr') ?>">
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
    </div>

    <div class="col-sm right-col text-right align-self-start">
      <ul class="infos">
        <li class="website">Site officiel : www.vaiteani.fr</li>
        <li class="facebook">Facebook</li>
        <li class="twitter">Twitter</li>
        <li class="instagram">Instagram</li>
        <li class="credits">Crédit photo: Frank Loriou</li>
      </ul>
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
          S'asseoir tranquillement, prendre le temps et se mettre au rythme des îles de Polynésie l'espace d'une soirée. Et tout ça en plein hiver. Voici l'expérience que nous vous proposons avec Vaiteani. Quelque part dans une vallée du Pacifique sud, nichée sous les fougères arborescentes et les bougainvilliers rubiconds, se cache une source magique. On raconte qu’elle serait descendue du ciel pour nous abreuver de son chant profond et nous prendre sous sa coupe, si d’aventure on s’approchait pour la goûter. Vaiteani, c’est elle, la ‘source céleste’ en polynésien.
        </span>
      </div>
    </div>
  </div>

</div>
