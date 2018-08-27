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
    $date_title = strip_tags($e->opaque('free_text_3')['fr'], '<br/>');
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
    $description = strip_tags($e->opaque('description')['fr'], '<br/>');
    if (strip_tags($description) == "") {
        $description = "";
    }
}

$ids = array_map(function ($s) {
    return $s->_id();
}, $e->screenings());

$first_poster = $e->first_poster();
$upload_dir   = wp_upload_dir();
$poster_url   = $upload_dir['url'].'/'.basename($first_poster->url);
?>

<h2>
  <?= strtoupper($e->opaque()['genre']) ?>
</h2>
<h3>
  <strong><?= strtoupper($date_title) ?></strong><p>&nbsp;</p>
</h3>
<?php if (!empty($e->opaque('free_text_1'))) : ?>
<div>
  <?= $e->opaque('free_text_1')['fr'] ?><p>&nbsp;</p>
</div>
<?php endif; ?>
<div>
  <?= $description ?><p>&nbsp;</p>
</div>
<div>
  <?= $e->opaque('free_text_2')['fr'] ?><p>&nbsp;</p>
</div>
<div>
<a href="<?= event_book_url($e) ?>" alt="$e->localized_title_or_original('fr')">Billets</a>
</div>
<div>
<a href="<?= event_details_url($e) ?>" alt="$e->localized_title_or_original('fr')">En savoir plus</a>
</div>
<!--more-->
