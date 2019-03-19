<?php
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
$rows = array_chunk($data->articles, ceil(count($data->articles) / 2));
?>
<div id="tkt_articles">
    <div class="category-name"><?= the_title() ?></div>

  <?php if (empty($data->articles)) : ?>
    <h3 class="no-article-title"><?= t('Aucun article dans cette catégorie, revenez nous visiter prochainement.') ?></h3>
  <?php else: ?>
    <?php foreach ($rows as $articles) : ?>
    <div class="articles-carousel">
        <div class="carousel-inner">
            <?php foreach ($articles as $article) : ?>
            <div class="tkt_article carousel-item">
                <?= TKTTemplate::render('article/slider/article', (object)[ 'article' => $article ]) ?>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
    <?php endforeach; ?>
  <?php endif; ?>
</div>
<script type="text/javascript">
    jQuery(document).ready(function($) {
        $('.carousel-inner').width( <?= count($data->articles) ?> * 600);
    });
</script>
