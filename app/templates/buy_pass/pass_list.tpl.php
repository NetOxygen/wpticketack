<?php
/**
 * Buy pass list template
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ],
 * }
 */

$types = $data->tickettypes;
?>
<?php if (!empty($types)) : ?>

<div class="tkt-wrapper">
  <section class="tkt-section tkt-light-section tkt-pass-section">
    <?php if (count($types) == 1 && count($types[0]->pricings()) == 1) : ?>
      <div id="item-<?= $types[0]->_id(); ?>" data-type="<?= $types[0]->_id(); ?>" class="pass">
        <input type="hidden" class="choose-pass" name="user[pass]" value="<?= $types[0]->_id().':'.array_keys($types[0]->pricings())[0]; ?>">
        <input type="hidden" class="required-fields" id="<?= $types[0]->_id().'-fields' ?>" value="<?= implode(',', $types[0]->required_fields()) ?>" />
      </div>

    <?php else : ?>

      <div id="pass-accordion" class="tkt-accordion">
        <?php foreach ($types as $tickettype) :?>
          <div class="card" id="pass-<?= $tickettype->_id() ?>">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <button class="btn btn-link pass_title" aria-expanded="true" aria-controls="#item-<?= $tickettype->_id(); ?>">
                  <?= tkt_h($tickettype->name(TKT_LANG)) ?>
                </button>
              </h5>
            </div>
            <div id="item-<?= $tickettype->_id(); ?>" data-type="<?= $tickettype->_id(); ?>" class="card-content pass">
              <div class="card-body">
                <p><?= nl2br(tkt_html($tickettype->description(TKT_LANG))) ?></p>
                <input type="hidden" class="required-fields" id="<?= $tickettype->_id().'-fields' ?>" value="<?= implode(',', $tickettype->required_fields()) ?>"
                <b><?= tkt_t('Tarifs :') ?></b>
                <?php foreach ($tickettype->pricings() as $key => $pricing) :?>
                  <div class="radio">
                    <label>
                      <input class="choose-pass" type="radio" name="user[pass]" value="<?= $key; ?>">
                      <?php if (!empty($pricing->description(TKT_LANG))) :?>
                        <?= tkt_h($pricing->name(TKT_LANG)) ?> (<?= $pricing->price('CHF') ?>) <a class="popoverdata" href="#" title="<?= tkt_h($pricing->description(TKT_LANG)) ?>" rel="popover" data-placement="bottom" data-trigger="hover"><span class="glyphicon glyphicon-info-sign" /></a>
                      <?php else: ?>
                        <?= tkt_h($pricing->name(TKT_LANG)) ?> (<?= $pricing->price('CHF') ?>)
                      <?php endif;?>
                    </label>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
    <?php endif; ?>
  </section>
</div>

<script>
$(document).ready(function () {
    $('.popoverdata').popover();
    // Open first pass if there is only one
    var pass = $('.pass_title');
    if (pass.length == 1) {
        $(pass[0]).trigger('click');

        // Open first pricing if there is only one
        var pricings = $('.choose-pass');
        if (pricings.length == 1) {
            $(pricings[0]).trigger('click');
        }
    }
});
</script>

<?php endif; ?>
