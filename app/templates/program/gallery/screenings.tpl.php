<?php
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
$nb_per_row = 12 / $item_width;
?>
<h1 class="tkt-title">
 <?= get_the_title() ?>
</h1>
<div class="flollow-bloc-right"><?php  get_template_part( 'template-parts/social-follow' ); ?></div>
<div id="tkt_program" data-component="Program/BookabilityState">
  <?php if (empty($data->screenings)) : ?>
    <h3 class="no-screening-title">Aucune séance à afficher</h3>
  <?php else: ?>

    <div class="row">
    
    <?php $i = 0; ?>
    <?php foreach($data->screenings as $screening) : ?>

        <?php if ($i % $nb_per_row == 0) : ?>
        <div class="row">
	<?php endif; ?>

            <div class="tkt_program_screening col col-<?= $item_width ?>">
                <?= TKTTemplate::render('program/gallery/screening', (object)[ 'screening' => $screening ]) ?>
            </div>

        <?php if ($i % $nb_per_row == ($nb_per_row - 1)) : ?>
        </div>
	<?php endif; ?>

      <?php $i ++; ?>
    <?php endforeach; ?>
    
    <?php if ($i % $nb_per_row != $nb_per_row) : ?>
    </div>
    <?php endif; ?>
    
  <?php endif; ?>
</div>