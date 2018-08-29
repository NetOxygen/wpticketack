<?php
/**
 * Program events template
 *
 * Input:
 * $data: {
 *   "events": [
 *
 *   ]
 * }
 */
?>
<div id="tkt_program" data-component="Program/BookabilityState">
  <?php if (empty($data->events)) : ?>
    <h3 class="no-event-title">Aucun événement programmé actuellement, revenez nous visiter prochainement.</h3>
  <?php else: ?>
    <?php foreach ($data->events as $event) : ?>
    <div class="tkt_program_event" data-type="<?= $event->opaque('type') ?>">
        <?= TKTTemplate::render('program/event', (object)[ 'event' => $event ]) ?>
    </div>
    <?php endforeach; ?>
  <?php endif; ?>
</div>
