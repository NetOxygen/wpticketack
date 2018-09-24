<?php
/**
 * Program event template
 *
 * Input:
 * $data: {
 *   "days": [ Datetime, Datetime, ... ]
 * }
 */

$days = $data->days;
$query_mask = 'd=%s';
?>

<?php if (!empty($days)) : ?>
<div class="tkt-days-filters">
  <div class="row">
    <div class="col">
        <ul>
            <?php foreach ($days as $day) : ?>
            <li class="tkt-day-filter">
                <a href="<?= program_url(sprintf($query_mask, $day->format('Y-m-d'))) ?>">
                    <span class="tkt-day-filter-day">
                        <?= strftime('%a', $day->getTimestamp()) ?>
                    </span>
                    <span class="tkt-day-filter-date"><?= $day->format('j') ?></span>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
    </div>
  </div>
</div>
<?php endif; ?>
