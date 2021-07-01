<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Pantaflix player template
 *
 * Input:
 * $data: {
 *   "screening": Screening
 *   "content_id": int
 * }
 */
?>
<div
    class="tkt-wrapper tkt-pantaflix-player"
    data-component="Pantaflix/Player"
    data-screening-id="<?= $data->screening->_id() ?>"
    data-content-id="<?= $data->content_id ?>"
>
    <button class="tkt-pantaflix-button">
        <svg viewBox="0 0 36 37" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.728 5.669c7.03 7.029 7.03 18.427 0 25.456-7.029 7.03-18.427 7.03-25.456 0-7.03-7.029-7.03-18.427 0-25.456 7.029-7.03 18.427-7.03 25.456 0zm-4.617 12.465l-11.707-6.76c-.299-.172-.543-.03-.543.314v13.518c0 .345.244.486.543.313L26.11 18.76c.299-.172.299-.454 0-.626z" fill="#FFF" fill-rule="nonzero"></path>
        </svg>
        <span>
            <?= tkt_t('Regarder') ?>
        </span>
    </button>

    <!-- Underscore.js templates used by client side -->
    <script type="text/template" id="tkt-pantaflix-player-login-tpl">
        <?= TKTTEmplate::render('pantaflix/login', (object)[]) ?>
    </script>
    <script type="text/template" id="tkt-pantaflix-player-iframe-tpl">
        <?= TKTTEmplate::render('pantaflix/iframe', $data) ?>
    </script>
</div>
