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
 *   "filter_fields": ['date', 'cinema_hall', ...]
 * }
 */
?>
<div id="tkt_program" class="tkt-wrapper" data-component="Program/BookabilityState">
    <div class="container">
        <?php if (empty($data->events)) : ?>
        <h3 class="no-event-title"><?= tkt_t('Aucun événement programmé actuellement, revenez nous visiter prochainement.') ?></h3>
        <?php else: ?>

        <?php foreach ($data->events as $event) : ?>
        <div class="tkt_program_event" <?= tkt_event_data_attributes($event, $data->filter_fields) ?>>
            <?= TKTTemplate::render('program/list/event', (object)[ 'event' => $event ]) ?>
        </div>
        <?php endforeach; ?>

      <?php endif; ?>
    </div>
</div>
