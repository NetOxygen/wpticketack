<?php
/**
 * Screenings program template
 *
 * Input:
 * $data: {
 *   "screenings": [
 *
 *   ]
 * }
 */
?>
<div id="tkt_program" data-component="Program/BookabilityState">
  <?php if (empty($data->screenings)) : ?>
    <h3 class="no-event-title">Aucune séance à afficher</h3>
  <?php else: ?>
    <?php foreach ($data->screenings as $screening) : ?>
    <div class="tkt_program_screening">
        <?= TKTTemplate::render('program/screening', (object)[ 'screening' => $screening ]) ?>
    </div>
    <?php endforeach; ?>
  <?php endif; ?>
</div>
