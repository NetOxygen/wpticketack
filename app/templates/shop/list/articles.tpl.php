<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Articles listtemplate
 *
 * Input:
 * $data: {
 *   "articles": [
 *
 *   ]
 * }
 */
?>
<div id="tkt-shop" class="tkt-wrapper">
    <?php if (empty($data->articles)) : ?>
        <h3 class="no-event-title"><?= tkt_t('Aucun article dans cette catégorie, revenez nous visiter prochainement.') ?></h3>
    <?php else: ?>
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
