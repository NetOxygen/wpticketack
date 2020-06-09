<?php

use Ticketack\Core\Models\Article;
use Ticketack\Core\Base\TKTApiException;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Article template
 *
 * Input:
 * $data: {
 *   "tkt_article": { ... }
 * }
 */
try {
    $article = Article::first()
        ->in_ids(json_decode(get_post_meta($data->tkt_article->ID, 'id')[0]))
        ->get();
}  catch (TKTApiException $e) {
    return sprintf(
        "Impossible de charger l'article : %s",
        $e->getMessage()
    );
}

?>
<div class="tkt-wrapper">
    <div class="tkt-article" data-component="Articles/Article" data-id="<?= $article->_id() ?>">
        <section class="tkt-section infos-section">
            <div class="row">
                <div class="col">
                    <h2 class="name"><?= $article->name(TKT_LANG) ?></h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h3 class="tkt-section-title"><?= tkt_t('Description') ?></h3>
                    <p class="description"><?= $article->description(TKT_LANG) ?></p>
                </div>
            </div>
        </section>

        <section class="tkt-section tkt-dark-section buy-section">
            <h3 class="tkt-section-title">
                <?= tkt_t('Acheter') ?>
            </h3>

            <?= TKTTemplate::render('buy_article/form', (object)[ 'article' => $article ]) ?>
        </section>

    </div>
</div>