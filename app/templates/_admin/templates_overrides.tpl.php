<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\Templates\TKTTemplate;

$overrides = TKTTemplate::get_overrides_versions();
$outdated  = array_filter($overrides, fn ($v) => $v->current !== $v->override);

if (!function_exists('tkt_link')) {
    function tkt_link($file, $from, $to) {
        return sprintf('%s/public/projects/%s/diff/from/%s/to/%s/file/%s',
            TKT_YODA_URL,
            TKT_YODA_PROJECT_ID,
            $from != '0' ? $from : '2.80.3',
            $to,
            base64_encode($file)
        );
    }
}
?>

<?php if (!empty($outdated)) : ?>
    <div class="notice notice-warning">
        <p>
            <?= tkt_t('[Ticketack] Vous avez des overrides de templates à mettre à jour') ?>
            <a id="tkt-show-overrides-details" href="javascript: void;">
                <?= tkt_t('Voir les détails') ?>
            </a>
            <a id="tkt-hide-overrides-details" href="javascript: void;" style="display: none;">
                <?= tkt_t('Cacher les détails') ?>
            </a>
        </p>
        <div id="tkt-overrides-details" style="display: none;">
            <ul class="tkt-overrides-wrapper">
            <?php foreach ($outdated as $template => $infos) : ?>
                <li class="tkt-override-wrapper">
                    <span class="tkt-override-file">
                        <?= $template ?>
                    </span>
                    <span class="tkt-override-link">
                        <a target="_blank" a href="<?= tkt_link('app/templates/'.$template, $infos->override, $infos->current) ?>">
                            <?= tkt_t('Voir les modifications') ?>
                        </a>
                    </span>
                </li>
            <?php endforeach; ?>
            </ul>
        </div>
    </div>
<?php endif; ?>

<script type="text/javascript">
jQuery(document).ready(function ($) {
    const showDetails = function () {
        $('#tkt-overrides-details').show();
        $('#tkt-show-overrides-details').hide();
        $('#tkt-hide-overrides-details').show();
    };
    const hideDetails = function () {
        $('#tkt-overrides-details').hide();
        $('#tkt-show-overrides-details').show();
        $('#tkt-hide-overrides-details').hide();
    };

    $('#tkt-show-overrides-details').click(showDetails);
    $('#tkt-hide-overrides-details').click(hideDetails);
});
</script>

<style type="text/css">
    .tkt-override-wrapper {
        padding: 5px;
        border: 1px solid #F0F0F0;
        background-color: #FAFAFA;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tkt-override-wrapper:hover {
        background-color: #F0F0F0;
    }
    .tkt-override-wrapper .tkt-override-file {
    }
</style>
