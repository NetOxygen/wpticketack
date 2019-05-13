<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Article template
 *
 * Input:
 * $data: {
 *   "article": { ... }
 * }
 */

$a = $data->article;
?>
<div class="tkt-wrapper">
  <div class="tkt-article" data-component="Articles/Article" data-id="<?= $a->_id() ?>">

    <div class="row">
      <div class="col">
        <h3 class="name"><?= $a->name(TKT_LANG) ?></h3>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <span class="description">
          <a href="">
            <?= $a->description(TKT_LANG) ?>
          </a>
        </span>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="article-variants">
          <?= TKTTemplate::render('article/variants_form', (object)[ 'article' => $a ]) ?>
        </div>
      </div>
    </div>
  </div>
</div>
