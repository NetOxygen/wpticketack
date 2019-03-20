<?php
/**
 * Program event template
 *
 * Input:
 * $data: {
 *   "filters": [ "type1" => "label1", ... ]
 * }
 */

$filters = $data->filters;
?>

<?php if (!empty($filters)) : ?>
<div class="tkt-wrapper tkt-filters" data-component="Program/Filter">
  <div class="row">
    <div class="col">
        <ul>
            <li class="tkt-filter active" data-type="">
                Tout
            </li>
            <?php foreach ($filters as $type => $label) : ?>
            <li class="tkt-filter" data-type="<?= $type ?>">
                <?= $label ?>
            </li>
            <?php endforeach; ?>
        </ul>
    </div>
  </div>
</div>
<?php endif; ?>
