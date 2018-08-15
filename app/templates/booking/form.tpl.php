<?php
/**
 * Booking form template
 *
 * Input:
 * $data: {
 *   "ids": [ ... ]
 * }
 */
?>
<div class="row">
  <div class="col">
    <div
      class="booking-form"
      data-component="Booking/Form"
      data-show-on-load="<?= get_query_var( 'book', -1 ) == 1 ? 'true' : 'false' ?>"
      data-ids="<?= implode(',', $data->ids) ?>">
    </div>
  </div>
</div>

<!-- Underscore.js templates used by client side -->
<script type="text/template" id="tkt-booking-form-dates-tpl">
    <?= TKTTEmplate::render('booking/form_dates', (object)[]) ?>
</script>
<script type="text/template" id="tkt-booking-form-pricings-tpl">
    <?= TKTTEmplate::render('booking/form_pricings', (object)[]) ?>
</script>
<script type="text/template" id="tkt-booking-form-success-tpl">
    <?= TKTTEmplate::render('booking/form_success', (object)[]) ?>
</script>
