<?php
/**
 * Buy pass list template
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ],
 *   "redirect": none|cart|tkt_cart|tkt_checkout
 * }
 */

$types = $data->tickettypes;
?>
<?php if (!empty($types)) : ?>

<div class="tkt-wrapper">

  <?php if (count($types) == 1 && count($types[0]->pricings()) == 1) : ?>

    <div id="item-<?= $types[0]->_id(); ?>" data-type="<?= $types[0]->_id(); ?>" class="pass">
      <input type="hidden" class="choose-pass" name="user[pass]" value="<?= $types[0]->_id().':'.array_keys($types[0]->pricings())[0]; ?>">
      <input type="hidden" class="required-fields" id="<?= $types[0]->_id().'-fields' ?>" value="<?= implode(',', $types[0]->required_fields()) ?>" />
    </div>

  <?php else : ?>

    <div id="accordion">
      <?php foreach ($types as $tickettype) :?>
        <div class="card" id="pass-<?= $tickettype->_id() ?>">
          <div class="card-header">
            <h5 class="card-title mb-0">
              <button data-toggle="collapse" data-target="#item-<?= $tickettype->_id(); ?>" class="btn btn-link pass_title" aria-expanded="true" aria-controls="#item-<?= $tickettype->_id(); ?>">
                <?= tkt_h($tickettype->name(TKT_LANG)) ?>
              </button>
            </h5>
          </div>
          <div id="item-<?= $tickettype->_id(); ?>" data-type="<?= $tickettype->_id(); ?>" class="pass collapse" data-parent="#accordion">
            <div class="card-body">
              <p><?= nl2br(tkt_html($tickettype->description(TKT_LANG))) ?></p>
              <input type="hidden" class="required-fields" id="<?= $tickettype->_id().'-fields' ?>" value="<?= implode(',', $tickettype->required_fields()) ?>"
              <b><?= tkt_t('Tarifs :') ?></b>
              <?php foreach ($tickettype->pricings() as $key => $pricing) :?>
                <div class="radio">
                  <label>
                    <input class="choose-pass" type="radio" name="user[pass]" value="<?= $key; ?>">
                    <?php if (!empty($pricing->description(TKT_LANG))) :?>
                      <?= tkt_h($pricing->name(TKT_LANG)) ?> (<?= $pricing->price('CHF') ?>) <a class="popoverdata" href="#" title="<?= tkt_h($pricing->description(TKT_LANG)) ?>" rel="popover" data-placement="bottom" data-toggle="tooltip"  data-trigger="hover"><span class="glyphicon glyphicon-info-sign" /></a>
                    <?php else: ?>
                      <?= tkt_h($pricing->name(TKT_LANG)) ?> (<?= $pricing->price('CHF') ?>)
                    <?php endif;?>
                  </label>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

    <?php endif; ?>

</div>

<?php endif; ?>
