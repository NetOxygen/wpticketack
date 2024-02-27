<?php

use Ticketack\WP\TKTApp;

/**
 * Program event template
 *
 * Input:
 * $data: {
 *   "event": { ... }
 * }
 */

$e          = $data->event;
$screenings = $e->screenings();
$s = current($screenings);

$ids = implode(',', array_map(function ($s) {
    return $s->_id();
}, $e->screenings()));

$description = $s ? current($s->movies())->opaque('description')[TKT_LANG] : "";
$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
$image_url     = tkt_img_proxy_url($e->first_poster()->url, $images_width, $images_height);

?>
<div class="event-inner">

  <div class="row">

        <div class="col-12 col-md-6 text-center left-col">
            <div class="poster-wrapper">
                <img class="img-fluid poster poster-event-list m-0" src="<?= $image_url ?>" />
            </div>
        </div>

        <div class="col-12 col-md-6 right-col">

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
                    <p class="description text-justify mt-3">
                        <?= $description ?>
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <span class="tickets" data-bookability-ids="<?= $ids ?>">
                        <a class="show-while-loading">...</a>
                        <span class="more-infos show-if-not-bookable d-none">
                            <a href="<?= tkt_event_details_url($e) ?>">
                            <?= tkt_t('Plus d\'informations') ?>
                            </a>
                        </span>
                        <a
                            class="show-if-bookable show-if-almost-not-bookable"
                            href="<?= tkt_event_details_url($e) ?>">
                            <?= tkt_t('Billets') ?> <span class="event-complete"></span>
                        </a>
                        <div class="show-if-almost-not-bookable assertive d-none"><?= tkt_t('Il ne reste que quelques places !') ?></div>
                        <div class="show-if-not-bookable assertive d-none"><?= tkt_t('Complet') ?></div>
                    </span>
                </div>
            </div>

        </div>
    </div>
</div>
