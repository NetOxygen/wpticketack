<?php

use Ticketack\WP\TKTApp;
use Ticketack\Core\Models\Article;

/**
 * Articles listtemplate
 *
 * Input:
 * $data: {
 *   "articles"             : [ ... ],
 *   "pagination"           : [
 *      "show_pagination"   : bool,
 *      "tkt_page"          : int,
 *      "total_page"        : int
 *   ]
 * }
 */
?>

<div class="tkt-articles-pagination">
    <div class="btn-group" role="group">
            <button type="button" class="button btn btn-secondary page-item <?= ($data->pagination->tkt_page == 1) ? "disabled" : "" ?>">
                <a href="?tkt_page=1" class="button btn btn-secondary"> << </a>
            </button>
            <button type="button" class="button btn btn-secondary page-item <?= ($data->pagination->tkt_page == 1) ? "disabled" : "" ?>">
                <a href="?tkt_page=<?= $data->pagination->tkt_page - 1 ?>" class="button btn btn-secondary">Précédente</a>
            </button>
            <?php if ($data->pagination->tkt_page >= 4) : ?>
                <button type="button" class="button btn btn-secondary">...</button>
            <?php endif; ?>
            <?php for ($page = 1; $page <= $data->pagination->total_page; $page++) : ?>
                <?php if ($page > $data->pagination->tkt_page -3 && $page < $data->pagination->tkt_page + 3) : ?>
                    <button type="button" class="button btn btn-secondary page-item <?= ($data->pagination->tkt_page == $page) ? "active" : "" ?>">
                        <a href="?tkt_page=<?= $page ?>" class="button btn btn-secondary"><?= $page ?></a>
                    </button>
                <?php endif; ?>
            <?php endfor; ?>
            <?php if ($data->pagination->tkt_page <= $data->pagination->total_page - 3) : ?>
                <button type="button" class="button btn btn-secondary">...</button>
            <?php endif; ?>
            <button type="button" class="button btn btn-secondary page-item <?= ($data->pagination->tkt_page == $data->pagination->total_page) ? "disabled" : "" ?>">
                <a href="?tkt_page=<?= $data->pagination->tkt_page + 1 ?>" class="button btn btn-secondary">Suivante</a>
            </button>
            <button type="button" class="button btn btn-secondary page-item <?= ($data->pagination->tkt_page == $data->pagination->total_page) ? "disabled" : "" ?>">
                <a href="?tkt_page=<?= $data->pagination->total_page ?>" class="button btn btn-secondary"> >> </a>
            </button>
    </div>
</div>

