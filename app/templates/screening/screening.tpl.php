
<?php
/**
 * Program screening template
 *
 * Input:
 * $data: {
 *   "screening": { ... }
 * }
 */

$s = $data->screening;

$countries = [];
foreach ($s->movies() as $m) {
    $countries = array_merge($countries, array_map(function ($c) {
        return $c['name'];
    }, $m->opaque('countries')));
}
$countries = implode(', ', $countries);
$year     = $s->movies()[0]->opaque('year');
$duration = $s->movies()[0]->opaque('duration');
$first_line_desc = sprintf(
    "%s, %d, %d min",
    $countries,
    $year,
    $duration
);

$audio = implode(', ', array_map(function ($l) {
    return $l[LANG];
}, $s->movies()[0]->opaque('languages')['audio']));
$subtitles = implode(', ', array_map(function ($l) {
    return $l[LANG];
}, $s->movies()[0]->opaque('languages')['subtitles']));
$languages = $audio;
if (!empty($subtitles)) {
    $languages .= _('sous-titres').' '.$subtitles;
}

$screening_people = implode(', ', array_map(function ($p) {
    return $p['fullname'];
}, $s->opaque('people')));
$free_text_1 = empty($screening_people) ? "" : sprintf(
    "%s %s",
    // FIXME: Use WPML for this
    LANG == 'fr' ? "En présence de " : "In presence of ",
    $screening_people
);

$description = "";
if (!empty($s->opaque('description'))) {
    $description = strip_tags($e->opaque('description')[LANG], '<br><em><b><i><u><strong><a><p>');
    if (strip_tags($description) == "") {
        $description = "";
    }
}

$people     = [];
$activities = people_activities();
foreach ($s->movies()[0]->opaque('people') as $p) {
    $activity = isset($activities[strtolower($p['activity'])]) ?
        $activities[strtolower($p['activity'])][LANG] :
        $p['activity'];
    if (!isset($people[$activity])) {
        $people[$activity] = [];
    }
    array_push($people[$activity], $p['fullname']);
}
$ids = [$s->_id()];

$images_width  = TKTApp::get_instance()->get_config('images.dimensions.big.width');
$images_height = TKTApp::get_instance()->get_config('images.dimensions.big.height');
?>
<div class="tkt-wrapper tkt_screening">

  <div class="row">
    <div class="col">
      <div id="screening-carousel" data-component="Media/Carousel">
        <div class="carousel-inner">
          <?php foreach ($s->trailers() as $i => $t) : ?>
          <div class="carousel-item <?= $i == 0 ? 'active' : '' ?>">
            <div class="tkt-screening-carousel-trailer-wrapper d-block w-100">
              <div
              id="tkt-screening-carousel-trailer-<?= $i ?>"
                class="tkt-screening-carousel-trailer"
                data-component="Media/YoutubeVideo"
                data-video-id="<?= yt_video_id($t->url) ?>"
                data-video-image="<?= img_proxy_url($t->image, $images_width, $images_height) ?>"
                data-bs4-carousel-id="screening-carousel">
              </div>
            </div>
          </div>
          <?php endforeach; ?>
          <?php foreach ($s->posters() as $i => $p) : ?>
          <div class="carousel-item <?= count($s->trailers()) == 0 && $i == 0 ? 'active' : '' ?>">
            <img style="max-width: <?= $images_width ?>px" class="d-block w-100" src="<?= img_proxy_url($p->url, $images_width, $images_height) ?>" alt="<?= $s->localized_title_or_original(LANG) ?>">
          </div>
          <?php endforeach; ?>
        </div>
        <?php if (count($s->trailers()) + count($s->posters()) > 1) : ?>
        <a class="carousel-control-prev" href="#screening-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Précédent</span>
        </a>
        <a class="carousel-control-next" href="#screening-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Suivant</span>
        </a>
        <?php endif; ?>
      </div>
    </div>
  </div>

  <div class="row contentrow">
    <div class="col-sm left-col text-left align-self-start">

      <div class="row">
        <div class="col">
          <span class="main_section">
              <?= $s->opaque('sections')[0]['name'] ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="title">
            <?= $s->localized_title_or_original('en') ?>
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
          <?= $s->localized_title_or_original(LANG) ?>
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
            <?= implode(', ', $p) ?>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>
/div>
