<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Screenings program template
 *
 * Input:
 * $data: {
 *   "screenings": [
 *
 *   ],
 *   "item_width": 12
 * }
 */
$item_width = $data->item_width;
$nb_per_row = (int)(12 / $item_width);
?>
<div id="tkt_program" class="tkt-wrapper" data-component="Program/BookabilityState">
    <div class="container">
        <?php if (empty($data->screenings)) : ?>
        <h3 class="no-screening-title">Aucune séance à afficher</h3>
        <?php else: ?>

        <?php $i = 0; ?>
        <?php foreach($data->screenings as $screening) : ?>

          <?php if ($i % $nb_per_row == 0) : ?>
          <div class="row">
          <?php endif; ?>

            <div class="tkt_program_screening col col-<?= $item_width ?>">
              <?= TKTTemplate::render('program/grid/screening', (object)[ 'screening' => $screening ]) ?>
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
</div>
