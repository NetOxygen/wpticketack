<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Articles listtemplate
 *
 * Input:
 * $data: {
 *   "articles": [ ... ],
 *   "hide_sorters": true|false,
 *   "sort": ""
 * }
 */
?>
<div id="tkt-shop" class="tkt-wrapper">
    <?php if (empty($data->articles)) : ?>
        <h3 class="no-event-title"><?= tkt_t('Aucun article dans cette catégorie, revenez nous visiter prochainement.') ?></h3>
    <?php else: ?>
        <?php if (!$data->hide_sorters) : ?>
        <div class="tkt-articles-toolbar">
            <div class="tkt-articles-sort-wrapper">
                <?= TKTTEmplate::render('shop/sort/sort', $data) ?>
            </div>
        </div>
        <?php endif; ?>
        <?php foreach ($data->articles as $chunk) : ?>
            <div class="row mb-4">
            <?php foreach ($chunk as $article) : ?>
                <div class="col tkt-article">
                    <?= TKTTemplate::render('shop/list/article', (object)[ 'article' => $article ]) ?>
                </div>
            <?php endforeach; ?>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>

<!-- Underscore.js templates used by client side -->
<script type="text/template" id="tkt-buy-article-form-pricings-tpl">
    <?= TKTTEmplate::render('buy_article/form_pricings', $data) ?>
</script>
<script type="text/template" id="tkt-buy-article-form-success-tpl">
    <?= TKTTEmplate::render('buy_article/form_success', $data) ?>
</script>
