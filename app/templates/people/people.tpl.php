<?php

if (!defined('ABSPATH')) exit;

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

                        <div class="col-md-6 tkt-person" style="display: none;" <?php echo tkt_person_data_attributes(get_post(), $data->filter_fields) ?>>
                            <?php echo TKTTemplate::render('people/person', $meta); ?>
                        </div>

                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                </div>
            </div>
            <div class="col-md-3 tkt-people-filters">
                <div class="tkt-people-filter-search">
                    <h4><?php echo tkt_t('Recherche') ?></h4>
                    <input type="text" class="tkt-filter-tags form-control" placeholder="<?php echo tkt_t('Rechercher') ?>">
                </div>
                <div class="tkt-people-filter-country">
                    <h4><?php echo tkt_t('Pays') ?></h4>
                    <ul>
                        <li class="reset-filter"><a class="tkt-filter-country" href="#"><?php echo tkt_t('Tous') ?></a></li>
                        <?php foreach ($data->countries as $country) : ?>
                            <li style="display: none;">
                                <a class="tkt-filter-country" href="#<?php echo $country ?>"><?php echo $country ?></a> (<span class="tkt-filter-country-total" data-country="<?php echo $country ?>">0</span>)
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="tkt-people-filter-company">
                    <h4><?php echo tkt_t('Société') ?></h4>
                    <ul>
                        <li class="reset-filter"><a class="tkt-filter-company" href="#"><?php echo tkt_t('Tous') ?></a></li>
                        <?php foreach ($data->companies as $company) : ?>
                            <li style="display: none;">
                                <a class="tkt-filter-company" href="#<?php echo $company ?>"><?php echo $company ?></a> (<span class="tkt-filter-company-total" data-company="<?php echo $company ?>">0</span>)
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="tkt-people-filter-profession">
                    <h4><?php echo tkt_t('Profession') ?></h4>
                    <ul>
                        <li class="reset-filter"><a class="tkt-filter-profession" href="#"><?php echo tkt_t('Tous') ?></a></li>
                        <?php foreach ($data->professions as $profession) : ?>
                            <li style="display: none;">
                                <a class="tkt-filter-profession" href="#<?php echo $profession ?>"><?php echo $profession ?></a>  (<span class="tkt-filter-profession-total" data-profession="<?php echo $profession ?>">0</span>)
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
