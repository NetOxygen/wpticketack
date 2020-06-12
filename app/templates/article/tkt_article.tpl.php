<?php

use Ticketack\WP\TKTApp;
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

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.medium_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.medium_height');

$posters   = $article->posters();
$nb_slides = count($posters);

?>
<div class="tkt-wrapper">
    <div class="tkt-article" data-component="Articles/Article" data-id="<?= $article->_id() ?>">
        <section class="tkt-section tkt-light-section article-infos-section">
            <div class="row">
                <div class="col">
                    <h2 class="name"><?= $article->name(TKT_LANG) ?></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <div id="article-carousel" data-component="Media/Carousel" data-format="1">
                    <div class="carousel-inner">
                      <?php foreach ($posters as $i => $p) : ?>
                      <div class="carousel-item <?= $i == 0 ? 'active' : '' ?>">
                        <img class="d-block w-100" src="<?= tkt_img_proxy_url($p->url, $images_width, $images_height) ?>" alt="<?= $article->name(TKT_LANG) ?>">
                      </div>
                      <?php endforeach; ?>
                    </div>
                    <?php if ($nb_slides > 1) : ?>
                    <a class="carousel-control-prev" href="#article-carousel" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Précédent</span>
                    </a>
                    <a class="carousel-control-next" href="#article-carousel" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Suivant</span>
                    </a>
                    <?php endif; ?>
                  </div>
                </div>
                <div class="col-sm-12 col-md-8">
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
