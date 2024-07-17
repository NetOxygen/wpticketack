<?php

use Ticketack\WP\TKTApp;
use Ticketack\Core\Models\Article;
use Ticketack\Core\Models\User;
use Ticketack\Core\Base\TKTApiException;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Article template
 *
 * Input:
 * $data: {
 *   "theme": 'dark|light',
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


$salepoint_id  = TKTApp::get_instance()->get_config('ticketack.salepoint_id');
$images_width  = TKTApp::get_instance()->get_config('images_dimensions.medium_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.medium_height');

$posters   = $article->posters();
$nb_slides = count($posters);

?>
<div class="tkt-wrapper">
    <div class="tkt-article" data-component="Articles/Article" data-id="<?php echo $article->_id() ?>">
        <section class="tkt-section tkt-light-section article-infos-section">
            <div class="row">
                <div class="col">
                    <h2 class="name"><?php echo $article->name(TKT_LANG) ?></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <div id="article-carousel" data-component="Media/Carousel" data-format="1" class="glide">
                    <div class="glide__track" data-glide-el="track">
                      <ul class="glide__slides">
                      <?php foreach ($posters as $i => $p) : ?>
                      <li class="glide__slide <?php echo $i == 0 ? 'active' : '' ?>">
                        <img class="d-block w-100" src="<?php echo tkt_img_proxy_url($p->url, $images_width, $images_height) ?>" alt="<?php echo $article->name(TKT_LANG) ?>">
                      </li>
                      <?php endforeach; ?>
                    </div>
                    <?php if ($nb_slides > 1) : ?>
                    <div class="glide__arrows" data-glide-el="controls">
                      <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><</button>
                      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>
                    </div>
                    <?php endif; ?>
                  </div>
                </div>
                <div class="col-sm-12 col-md-8">
                    <p class="description"><?php echo $article->description(TKT_LANG) ?></p>
                </div>
            </div>
        </section>

        <section class="tkt-section tkt-<?php echo $data->theme ?>-section buy-section">
            <h3 class="tkt-section-title">
                <?php echo tkt_t('Acheter') ?>
            </h3>

            <?php echo TKTTemplate::render('buy_article/form', (object)[
                'article'      => $article,
                'salepoint_id' => $salepoint_id,
                'theme'        => $data->theme
            ]) ?>
        </section>

    </div>
</div>
