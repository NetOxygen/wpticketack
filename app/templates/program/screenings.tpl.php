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
<div id="tkt_program">
  <?php foreach ($data->screenings as $screening) : ?>
  <div class="tkt_program_screening">
      <?= TKTTemplate::render('program/screening', (object)[ 'screening' => $screening ]) ?>
  </div>
  <?php endforeach; ?>
</div>
