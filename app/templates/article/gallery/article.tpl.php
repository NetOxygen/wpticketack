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
$m = array_shift($s->movies());

$section       = $m->opaque('sections')[0];
$premiere_type = $m->opaque('premiere_type');

$directors = implode(', ', array_filter(array_map(function ($p) {
    return $p['activity'] == 'directors' ? $p['fullname'] : null;
}, $m->opaque('people'))));
$countries = implode(', ', array_map(function ($c) {
    return $c['name'];
}, $m->opaque('countries')));
$year            = $m->opaque('year');
$duration        = $m->opaque('duration');
$first_line_desc = implode(', ', array_filter([
    $directors,
    $countries,
    $year,
    $duration.' min'
]));

$screening_people = implode(', ', array_map(function ($p) {
    return $p['fullname'];
}, $s->opaque('people')));
$second_line_desc = empty($screening_people) ? "" : sprintf(
    "%s %s",
    // FIXME: Use WPML for this
    LANG == 'fr' ? "En présence de " : "In presence of ",
    $screening_people
);

$place = $s->place()->name();
$ids = $s->_id();
$screenings_lines = sprintf(
    '%s %s <span>/</span> %s:%s <span>/</span> %s <span>/</span> %s',
    $s->start_at()->format('D'),
    $s->start_at()->format('d'),
    $s->start_at()->format('H'),
    $s->start_at()->format('i'),
    $s->place()->name(),
    '
      <span class="tickets" data-bookability-ids="'.$ids.'">
        <a
          class="show-if-not-bookable d-none"
          href="'.screening_details_url($s).'">
          <span class="event-complete"></span>
        </a>
        <a
          class="show-if-bookable show-if-almost-not-bookable"
          href="'.screening_book_url($s).'">
          <span class="cart-btn-link screening-cart"></span>
        </a>
        <div class="show-if-almost-not-bookable assertive d-none">Il ne reste que quelques places !</div>
        <div class="show-if-not-bookable assertive d-none">Complet !</div>
      </span>
    '
);

$images_width  = TKTApp::get_instance()->get_config('images.dimensions.big.width');
$images_height = TKTApp::get_instance()->get_config('images.dimensions.big.height');
$image_url     = img_proxy_url($s->first_poster()->url, $images_width, $images_height);
?>
<div class="screening-inner">

  <div class="row">
    <div class="poster-wrapper d-none d-md-block">
        <a href="<?= screening_details_url($s) ?>">
      <img class="img-fluid poster" src="<?= $image_url ?>" />
      </a>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="main_section">
          <?= $section[LANG] ?>
      </span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="sub_section">
        <?= $premiere_type[LANG] ?>
      </span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="title">
      <a href="<?= screening_details_url($s) ?>">
          <?= $s->localized_title_or_original('fr') ?>
        </a>
      </span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="genre">
        <?= $s->opaque()['genre'] ?>
      </span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="first_line"><?= $first_line_desc ?></span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="second_line"><?= $second_line_desc ?></span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="screenings"><?= $screenings_lines ?></span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <span class="more-infos">
        <a href="<?= screening_details_url($s) ?>">
          Plus d'informations
        </a>
      </span>
    </div>
  </div>

</div>
