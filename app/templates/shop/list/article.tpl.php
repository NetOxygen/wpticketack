<?php

use Ticketack\WP\TKTApp;
use Ticketack\Core\Models\User;
use Ticketack\Core\Models\Article;
use Ticketack\Core\Base\TKTApiException;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Article template
 *
 * Input:
 * $data: {
 *   "article": { ... }
 * }
 */

$article = $data->article;

$images_width  = TKTApp::get_instance()->get_config('images_dimensions.big_width');
$images_height = TKTApp::get_instance()->get_config('images_dimensions.big_height');
$image_url     = tkt_img_proxy_url($article->first_poster()->url, $images_width, $images_height);

$user       = User::get_current();
$salepoints = $user->salepoints();
// TODO: Are we sure that user has only one salepoint ?
$salepoint  = current($salepoints);
?>
<div class="tkt-wrapper article-inner">
    <div class="row">

        <div class="col-sm-12">
            <div class="poster-wrapper">
                <a href="<?= tkt_article_details_url($article) ?>">
                    <img class="img-fluid poster" src="<?= $image_url ?>" />
                </a>
            </div>
        </div>

        <div class="col-sm-12">
            <h3 class="name">
                <a href="<?= tkt_article_details_url($article) ?>">
                    <?= $article->name(TKT_LANG) ?>
                </a>
            </h3>
        </div>

        <div class="col-sm-12 mt-4">
            <span class="short_description"><?= $article->short_description(TKT_LANG) ?></span>
        </div>

        <div class="col-sm-12 text-center mt-3 mb-3">
            <a class="button" href="<?= tkt_article_details_url($article) ?>">
                <?= tkt_t('Plus d\'informations'); ?>
            </a>
        </div>
        <?php if (!$article->has_stock_for_salepoint($salepoint)) : ?>
            <span class="article-out-of-stock"><?= tkt_t("Épuisé") ?></span>
            </br>
        <?php else : ?>
            </br>
            <div class="add-to-cart" data-component="Shop/Shop">
                <button class="button add-to-cart-from-shop">
                    <?= tkt_t("Acheter") ?>
                </button>
                </br>
                <div
                    class="buy-article-form"
                    style="display: none;"
                    data-component="BuyArticle/Form"
                    data-redirect="<?= TKTApp::get_instance()->get_config('cart.cart_redirect', 'none')      ?>"
                    data-cart-url="<?= tkt_cart_url() ?>"
                    data-checkout-url="<?= tkt_checkout_url() ?>"
                    data-article-id="<?= $article->_id() ?>"
                    data-salepoint-id="<?= $salepoint ?>"
                >
                    <section class "tkt-section tkt-dark-section buy-section">
                    </section>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>
