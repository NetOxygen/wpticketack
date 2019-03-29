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
 *   "nb_per_row": 3
 * }
 */
$item_width = $data->item_width;
$nb_per_row = 12 / $item_width;
?>
<div id="tkt_program" class="tkt-wrapper" data-component="Program/BookabilityState">
  <?php if (empty($data->events)) : ?>
  <h3 class="no-event-title"><?= tkt_t('Aucun événement programmé actuellement, revenez nous visiter prochainement.') ?></h3>
  <?php else: ?>

    <?php $i = 0; ?>
    <?php foreach($data->events as $event) : ?>

      <?php if ($i % $nb_per_row == 0) : ?>
      <div class="row">
      <?php endif; ?>

        <div class="tkt_program_event col col-<?= $item_width ?>" data-type="<?= $event->opaque('type') ?>">
          <?= TKTTemplate::render('program/grid/event', (object)[ 'event' => $event ]) ?>
        </div>

      <?php if (($i) % $nb_per_row == $nb_per_row - 1) : ?>
      </div>
      <?php endif; ?>

      <?php $i += 1; ?>

    <?php endforeach; ?>

    <?php if ($i % $nb_per_row != $nb_per_row) : ?>
      </div>
    <?php endif; ?>

  <?php endif; ?>
</div>
