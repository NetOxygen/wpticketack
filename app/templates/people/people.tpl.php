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
<div class="tkt-wrapper">
    <div class="tkt-people" data-component="People/Filter">
        <div class="row">
            <div class="col-md-9">
                <div class="row">
                    <?php while ( $data->people->have_posts() ) : ?>
                        <?php $data->people->the_post(); ?>
                        <?php $meta = get_post_meta(get_the_ID()); ?>

                        <div class="col-md-6 tkt-person" <?= tkt_person_data_attributes(get_post(), $data->filter_fields) ?>>
                            <?php echo TKTTemplate::render('people/person', $meta); ?>
                        </div>

                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                </div>
            </div>
            <div class="col-md-3">
                <h4><?= tkt_t('Country') ?></h4>
                <ul>
                <?php foreach ($data->countries as $country) : ?>
                    <li><a href="#country=<?= $country ?>"><?= $country ?></a></li>
                <?php endforeach; ?>
                </ul>
                <h4><?= tkt_t('Company') ?></h4>
                <ul>
                <?php foreach ($data->companies as $company) : ?>
                    <li><a href="#company=<?= $company ?>"><?= $company ?></a></li>
                <?php endforeach; ?>
                </ul>
                <h4><?= tkt_t('Profession') ?></h4>
                <ul>
                <?php foreach ($data->professions as $profession) : ?>
                    <li><a href="#profession=<?= $profession ?>"><?= $profession ?></a></li>
                <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</div>
