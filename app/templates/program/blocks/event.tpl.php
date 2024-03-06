<?php

use Ticketack\WP\TKTApp;

/**
 * Program event template
 *
 * Input:
 * $data: {
 *   "event": { ... },
 *   "image_width_pct": float ,
 *   "image_ratio": float | "auto",
 *   "description_max_line": int
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
<div class="event-inner">
    <div class="row">
        <div class="image-wrapper" style="width: <?= $data->image_width_pct ?>%; aspect-ratio: <?= $data->image_ratio ?>;">
            <div class="poster-wrapper w-100 h-100">
                <img class="img-fluid poster poster-event-list m-0 w-100 h-100"
                    src="<?= $image_url ?>" />
            </div>
        </div>
        <div class="details pr-3 pl-3"
            style="width: <?= $data->image_width_pct != 100 ? (100 - $data->image_width_pct) : 100 ?>%;">
            <div class="row">
                <div class="col">
                    <a href="<?= tkt_event_details_url($e) ?>">
                        <h2 class="title">
                            <?= $e->localized_title_or_original(TKT_LANG) ?>
                        </h2>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="description text-justify mt-3"
                        style="-webkit-line-clamp: <?= $data->description_max_line ?>;">
                        <?= ($e->localized_description(TKT_LANG)) ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span class="tickets" data-bookability-ids="<?= $ids ?>">
                        <a class="show-while-loading">...</a>
                        <a class="show-if-bookable show-if-almost-not-bookable" href="<?= tkt_event_details_url($e) ?>">
                            <?= tkt_t('Billets') ?> <span class="event-complete"></span>
                        </a>
                        <div class="show-if-almost-not-bookable assertive d-none">
                            <?= tkt_t('Il ne reste que quelques places !') ?></div>
                        <div class="show-if-not-bookable assertive d-none"><?= tkt_t('Complet') ?></div>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
