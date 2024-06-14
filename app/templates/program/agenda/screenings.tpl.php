<?php

use Ticketack\WP\Templates\TKTTemplate;

/**
 * Screenings program template
 *
 * Input:
 * $data: {
 *   "screenings": [
 *
 *   ],
 * }
 */

?>
<div id="tkt_program" class="tkt-wrapper tkt-agenda" data-component="Program/Agenda">
    <div class="container">
        <?php if (empty($data->screenings)) : ?>
            <h3 class="no-screening-title"><?= tkt_t("Aucune séance à afficher") ?></h3>
        <?php else: ?>

            <?php
                $days = [];
                foreach($data->screenings as $screening) {
                    $key = $screening->start_at()->format('Y-m-d');
                    if (!array_key_exists($key, $days)) {
                        $days[$key] = [];
                    }
                    $days[$key][] = $screening;
                }
            ?>

            <? $index = 0; ?>
            <?php foreach($days as $date => $screenings) : ?>
                <?= TKTTemplate::render('program/agenda/day',
                    (object)[
                        'date'         => new Datetime($date),
                        'screenings'   => $screenings,
                        'can_go_left'  => $index > 0,
                        'can_go_right' => $index++ < count($days) - 1
                     ]
                ) ?>
            <?php endforeach; ?>
      <?php endif; ?>
    </div>
</div>

<!-- Underscore.js templates used by client side -->
<script type="text/template" id="tkt-agenda-modal-tpl">
    <?= TKTTEmplate::render('program/agenda/modal', (object)[]) ?>
</script>
<script type="text/template" id="tkt-booking-form-dates-tpl">
    <?= TKTTEmplate::render('booking/form_dates', (object)[]) ?>
</script>
<script type="text/template" id="tkt-booking-form-pricings-tpl">
    <?= TKTTEmplate::render('booking/form_pricings', (object)[]) ?>
</script>
<script type="text/template" id="tkt-booking-form-success-tpl">
    <?= TKTTEmplate::render('booking/form_success', (object)[]) ?>
</script>
