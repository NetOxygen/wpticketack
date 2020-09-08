<?php

use Ticketack\WP\Templates\TKTTemplate;

/**
 * People template
 *
 * Input:
 * $data: {
 *   "people": {  },
 *   "filter_fields": ['name', 'company', ...],
 *   "countries": [],
 *   "companies": [],
 *   "professions": [],
 * }
 */
?>
<div id="tkt-people-wrapper" class="tkt-wrapper">
    <div class="tkt-people" data-component="People/Filter">
        <div class="row">
            <div class="col-md-9 tkt-people-list">
                <div class="row">
                    <?php while ( $data->people->have_posts() ) : ?>
                        <?php $data->people->the_post(); ?>
                        <?php $meta = get_post_meta(get_the_ID()); ?>

                        <div class="col-md-6 tkt-person" style="display: none;" <?= tkt_person_data_attributes(get_post(), $data->filter_fields) ?>>
                            <?php echo TKTTemplate::render('people/person', $meta); ?>
                        </div>

                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                </div>
            </div>
            <div class="col-md-3 tkt-people-filters">
                <div class="tkt-people-filter-search">
                    <h4><?= tkt_t('Recherche') ?></h4>
                    <input type="text" class="tkt-filter-tags form-control" placeholder="<?= tkt_t('Rechercher') ?>">
                </div>
                <div class="tkt-people-filter-country">
                    <h4><?= tkt_t('Pays') ?></h4>
                    <ul>
                        <li class="reset-filter"><a class="tkt-filter-country" href="#"><?= tkt_t('Tous') ?></a></li>
                        <?php foreach ($data->countries as $country) : ?>
                            <li style="display: none;">
                                <a class="tkt-filter-country" href="#<?= $country ?>"><?= $country ?></a> (<span class="tkt-filter-country-total" data-country="<?= $country ?>">0</span>)
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="tkt-people-filter-company">
                    <h4><?= tkt_t('Compagnie') ?></h4>
                    <ul>
                        <li class="reset-filter"><a class="tkt-filter-company" href="#"><?= tkt_t('Tous') ?></a></li>
                        <?php foreach ($data->companies as $company) : ?>
                            <li style="display: none;">
                                <a class="tkt-filter-company" href="#<?= $company ?>"><?= $company ?></a> (<span class="tkt-filter-company-total" data-company="<?= $company ?>">0</span>)
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="tkt-people-filter-profession">
                    <h4><?= tkt_t('Profession') ?></h4>
                    <ul>
                        <li class="reset-filter"><a class="tkt-filter-profession" href="#"><?= tkt_t('Tous') ?></a></li>
                        <?php foreach ($data->professions as $profession) : ?>
                            <li style="display: none;">
                                <a class="tkt-filter-profession" href="#<?= $profession ?>"><?= $profession ?></a>  (<span class="tkt-filter-profession-total" data-profession="<?= $profession ?>">0</span>)
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
