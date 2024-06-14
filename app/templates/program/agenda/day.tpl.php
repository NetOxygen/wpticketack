<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Program screening template
 *
 * Input:
 * $data: {
 *   "date": Datetime,
 *   "screenings": [{ ... }]
 *   "can_go_left": boolean,
 *   "can_go_right": boolean,
 * }
 */

$screenings = $data->screenings;

$date  = $data->date;
$title = $date->format('Ymd') === (new Datetime())->format('Ymd') ? tkt_t('Aujourd\'hui') : tkt_date_to_min_s($date);

if (!function_exists('audio')) {
    function audio($movie) {
        if (empty($movie->opaque('languages'))) {
            return null;
        }

        $audio = $movie->opaque('languages')['audio'];
        if (is_array($audio)) {
            $audio = strtoupper(implode(',', $audio));
        }
        $subtitles = $movie->opaque('languages')['subtitles'];
        if (is_array($subtitles)) {
            $subtitles = implode(',', $subtitles);
        }

        return implode('/', array_filter([$audio, $subtitles]));
    }
}
?>

<div class="tkt-wrapper tkt_agenda_day hidden">
    <div class="day_title_wrapper">
        <div class="arrow arrow-left <?= !$data->can_go_left ? 'inactive' : 'active' ?>"></div>
        <h3 class="day_title">
            <?= $title ?>
        </h3>
        <div class="arrow arrow-right <?= !$data->can_go_right ? 'inactive' : 'active' ?>"></div>
    </div>
    <div class="tkt_program_screenings">
        <?php foreach ($screenings as $s) : ?>
            <?php $m = $s->movies()[0]; ?>
            <div class="row">
                <div class="col">
                    <div class="tkt_program_screening">

                    <span class="tkt_screening_date show-booking-modal" data-screening-id="<?= $s->_id() ?>">
                            <a class="tkt_screening_link" href="<?= tkt_event_details_url($s) ?>">
                                <span class="dot"></span>
                                <span class="date">
                                    <?= tkt_date_and_time_to_time_s($s->start_at()) ?>
                                </span>
                            </a>
                        </span>

                        <h3 class="tkt_screening_title">
                            <span class="dot color"></span>
                            <a class="tkt_screening_link" href="<?= tkt_event_book_url($m, $s) ?>">
                                <?= $s->localized_title_or_original(TKT_LANG) ?>
                            </a>
                        </h3>

                        <span class="tkt_screening_audio">
                            <?= audio($m) ?>
                        </span>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<script type="text/template" id="tkt-agenda-screening-modal-tpl">
    <?= TKTTEmplate::render('program/agenda/modal', (object)[]) ?>
</script>
