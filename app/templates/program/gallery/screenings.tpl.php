<?php

if (!defined('ABSPATH')) exit;

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
 *   "filter_fields": ['date', 'cinema_hall', ...]
 *   "item_width": 12
 * }
 */
$item_width = $data->item_width;
$nb_per_row = 12 / $item_width;
?>
<div id="tkt_program" class="tkt-wrapper tkt-gallery" data-component="Program/BookabilityState">
    <div class="container">
        <?php if (empty($data->screenings)) : ?>
            <h3 class="no-screening-title"><?php echo tkt_t("Aucune séance à afficher") ?></h3>
        <?php else: ?>

        <div class="row no-gutters">
            <?php foreach($data->screenings as $screening) : ?>
            <div class="tkt_program_screening col-12 col-sm-6 col-md-<?php echo $item_width ?>" <?php echo tkt_screening_data_attributes($screening, $data->filter_fields) ?>>
                <?php echo TKTTemplate::render('program/gallery/screening', (object)[ 'screening' => $screening ]) ?>
            </div>
            <?php endforeach; ?>
        </div>

      <?php endif; ?>
    </div>
</div>
