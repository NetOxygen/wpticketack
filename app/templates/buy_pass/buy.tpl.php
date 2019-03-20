<?php
/**
 * Buy pass template
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ]
 * }
 */
?>
<div class="tkt-wrapper"data-component="Pass/BuyForm">
  <div class="row">
    <div class="col">
      <?= TKTTEmplate::render('buy_pass/pass_list', $data) ?>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <?= TKTTEmplate::render('buy_pass/form', $data) ?>
    </div>
  </div>
</div>
