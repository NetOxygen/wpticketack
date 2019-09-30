<?php

use Ticketack\WP\TKTApp;

/**
 * Program event template
 *
 * Input:
 * $data: {
 *   "rows": [
 *      "date" => [
 *          "value" => "label",
 *      ],
 *      "section" => [
 *          "value" => "label",
 *          "value" => "label",
 *      ],
 *   ],
 *   "target": "..."
 * }
 */

$rows = $data->rows;
?>

<?php if (!empty($rows)) : ?>
<div
  class="tkt-wrapper tkt-filters"
  data-component="Program/FilterRows"
  data-criterium="<?= implode(',', array_keys($rows)) ?>"
  <?= (!empty($data->target) ? 'data-target="'.$data->target.'"' : '') ?>
>
  <div class="row">
    <div class="col">
        <?php foreach ($rows as $type => $filters) : ?>
        <ul>
            <li class="tkt-filter active" data-criteria="<?= $type ?>" data-<?= $type ?>="">
                <?= tkt_t('Tout') ?>
            </li>
            <?php foreach ($filters as $filter) : ?>
            <li class="tkt-filter" data-criteria="<?= $type ?>" data-<?= $type ?>="<?= $filter['value'] ?>">
                <?= $filter['label'] ?>
            </li>
            <?php endforeach; ?>
        </ul>
        <?php endforeach; ?>
    </div>
  </div>
</div>
<?php endif; ?>
