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
<div id="tkt-wrapper tkt_articles" data-component="Article/AvailabilityState">
  <?php if (empty($data->articles)) : ?>
    <h3 class="no-event-title"><?= tkt_t('Aucun article dans cette catégorie, revenez nous visiter prochainement.') ?></h3>
  <?php else: ?>
    <?php foreach ($data->articles as $article) : ?>
    <div class="tkt_article">
        <?= TKTTemplate::render('shop/list/article', (object)[ 'article' => $article ]) ?>
    </div>
    <?php endforeach; ?>
  <?php endif; ?>
</div>
