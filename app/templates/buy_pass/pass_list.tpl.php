<?php
/**
 * Buy pass list template
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ]
 * }
 */

$types = $data->tickettypes;
?>
<?php if (!empty($types)) : ?>

  <?php if (count($types) == 1 && count($types[0]->pricings()) == 1) : ?>

    <div id="item-<?= $types[0]->_id(); ?>" data-type="<?= $types[0]->_id(); ?>" class="pass">
      <input type="hidden" class="choose-pass" name="user[pass]" value="<?= $types[0]->_id().':'.array_keys($types[0]->pricings())[0]; ?>">
      <input type="hidden" class="required-fields" id="<?= $types[0]->_id().'-fields' ?>" value="<?= implode(',', $types[0]->required_fields()) ?>" />
    </div>

  <?php else : ?>

    <div class="panel-group" id="accordion">
      <?php foreach ($types as $tickettype) :?>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#item-<?= $tickettype->_id(); ?>" class="pass_title">
                <?= h($tickettype->name(LANG)) ?>
              </a>
            </h4>
          </div>
          <div id="item-<?= $tickettype->_id(); ?>" data-type="<?= $tickettype->_id(); ?>" class="pass panel-collapse collapse in">
            <div class="panel-body">
              <p><?= nl2br(html($tickettype->description(LANG))) ?></p>
              <input type="hidden" class="required-fields" id="<?= $tickettype->_id().'-fields' ?>" value="<?= implode(',', $tickettype->required_fields()) ?>"
              <b><?= t('Tarifs :') ?></b>
              <?php foreach ($tickettype->pricings() as $key => $pricing) :?>
                <div class="radio">
                  <label>
                    <input class="choose-pass" type="radio" name="user[pass]" value="<?= $tickettype->_id().':'.$key; ?>">
                    <?php if (!empty($pricing->description(LANG))) :?>
                      <?= h($pricing->name(LANG)) ?> (<?= $pricing->price('CHF') ?>) <a class="popoverdata" href="#" data-content="<?= h($pricing->description(LANG)) ?>" rel="popover" data-placement="bottom" data-trigger="hover"><span class="glyphicon glyphicon-info-sign" /></a>
                    <?php else: ?>
                      <?= h($pricing->name(LANG)) ?> (<?= $pricing->price('CHF') ?>)
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
<?php endif; ?>
