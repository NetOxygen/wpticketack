<?php

use Ticketack\WP\Templates\TKTTemplate;

/**
 * Buy article form template
 *
 * Input:
 * $data: {
 *   "article": { ... }
 * }
 */

?>
<div class="tkt-wrapper">
    <div class="row">
        <div class="col">
            <div
                class="buy-article-form"
                data-component="BuyArticle/Form"
                data-article-id="<?= $data->article->_id() ?>"
                data-variants="<?= htmlspecialchars(json_encode($data->article->variants())) ?>"
            >
            </div>
        </div>
    </div>

    <!-- Underscore.js templates used by client side -->
    <script type="text/template" id="tkt-buy-article-form-pricings-tpl">
        <?= TKTTEmplate::render('buy_article/form_pricings', (object)[]) ?>
    </script>
    <script type="text/template" id="tkt-buy-article-form-success-tpl">
          <?= TKTTEmplate::render('buy_article/form_success', (object)[]) ?>
    </script>
</div>
