<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Program events template
 *
 * Input:
 * $data: {
 *   "events": [
 *
 *   ],
 *   "filter_fields": ['date', 'cinema_hall', ...],
 *   "nb_per_row": 3
 * }
 */
$item_width = $data->item_width;
$nb_per_row = 12 / $item_width;
?>
<div id="tkt_program" class="tkt-wrapper tkt-gallery" data-component="Program/BookabilityState">
    <div class="container">
        <?php if (empty($data->events)) : ?>
        <h3 class="no-event-title"><?= tkt_t('Aucun événement programmé actuellement, revenez nous visiter prochainement.') ?></h3>
        <?php else: ?>

        <div class="row no-gutters">
            <?php foreach($data->events as $event) : ?>
            <div class="tkt_program_event col-12 col-sm-6 col-md-<?= $item_width ?>" data-type="<?= $event->opaque('type') ?>" <?= tkt_event_data_attributes($event, $data->filter_fields) ?>>
                <?= TKTTemplate::render('program/gallery/event', (object)[ 'event' => $event ]) ?>
            </div>
            <?php endforeach; ?>
        </div>

        <?php endif; ?>
    </div>
</div>
