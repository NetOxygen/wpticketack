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
<div id="tkt_program" class="tkt-wrapper" data-component="Program/BookabilityState">
  <?php if (empty($data->screenings)) : ?>
    <h3 class="no-event-title"><?= tkt_t('Aucuné séance programmée actuellement, revenez nous visiter prochainement.') ?></h3>
  <?php else: ?>
    <?php foreach ($data->screenings as $screening) : ?>
    <div class="tkt_program_screening">
        <?= TKTTemplate::render('program/list/screening', (object)[ 'screening' => $screening ]) ?>
    </div>
    <?php endforeach; ?>
  <?php endif; ?>
</div>
