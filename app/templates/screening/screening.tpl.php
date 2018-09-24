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

echo '<!--';
print_r($e);
echo '-->';
$countries = implode(', ', array_map(function ($c) {
    return $c['name'];
}, $e->opaque('countries')));
// FIXME: Get year from Eventival
$year = 2017;
$duration = $e->opaque('duration');
$first_line_desc = sprintf(
    "%s, %d, %d min",
    $countries,
    $year,
    $duration
);

// FIXME Get audio and subtitles from Eventival
$languages = 'Anglais, français sous-titres anglais, français';
// FIXME Get free  text 1 from Eventival
$free_text_1 = 'En présence de Nathan Silver, Damien Bonnard, Chris Wells';
// FIXME Get subsection from Eventival
$subsection = 'Première suisse';

$description = "";
if (!empty($e->opaque('description'))) {
    $description = $e->opaque('description')['fr'];
    if (strip_tags($description) == "") {
        $description = "";
    }
}

$activities = [
    "actor"             => "Acteur(s)",
    "director"          => "Réalisateur(s)",
    "Editor"            => "Monteur(s)",
    "music"             => "Musique",
    "producer"          => "Producteur(s)",
    "writer"            => "Scénario",
    "sound"             => "Son",
    "Production design" => "Design de production"
];
$people = [];
foreach ($e->opaque('people') as $p) {
    $activity = isset($activities[strtolower($p['activity'])]) ?
        $activities[strtolower($p['activity'])] :
        $p['activity'];
    if (!isset($people[$activity])) {
        $people[$activity] = [];
    }
    array_push($people[$activity], $p['fullname']);
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
            <img style="max-width: <?= $images_width ?>px" class="d-block w-100" src="<?= img_proxy_url($p->url, $images_width, $images_height) ?>" alt="<?= $e->localized_title_or_original('fr') ?>">
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
          <span class="main_section">
              <?= $e->section()['name'] ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="title">
            <?= $e->localized_title_or_original('en') ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="first_line_desc">
            <?= $first_line_desc ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="languages">
            <?= $languages ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="free-text-one">
            <?= $free_text_1 ?>
          </span>
        </div>
      </div>

      <div class="col-sm right-col text-right align-self-start">
        <div class="row">
          <div class="col">
            <span class="follow-us">
              Follow us
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="subsection">
              <?= $subsection ?>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="hr-separator" />

  <div class="row" data-component="Program/BookabilityState">
    <div class="col" data-bookability-ids="<?= implode(',', $ids) ?>">
      <span class="show-booking-form">
        <div data-component="Media/Loading" data-size-sm class="show-while-loading"></div>
        <span class="synopsis-title">Synopsis | </span>
        <span class="show-if-bookable show-if-almost-not-bookable d-none">
          <a href=""><span class="oi oi-cart" data-glyph="cart"></span></a>
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

  <div class="row people-wrapper">
    <?php foreach ($people as $activity => $p) : ?>
      <div class="col col-md-6">
        <div class="activity">
          <span><?= $activity ?></span>
        </div>
        <div class="people">
            <?= implode(',', $p) ?>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>
