<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\TKTApp;

/**
 * Buy pass without user informations list template
 *
 * @templateVersion 2.89.0
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ],
 *   "selected": "festival_pass",
 *   "theme"   : "dark|light",
 * }
 */
$types = $data->tickettypes;
$salepoint_id = TKTApp::get_instance()->get_config('ticketack.salepoint_id');
?>
<?php if (!empty($types)) : ?>

<div class="tkt-wrapper">
  <section class="tkt-section buy-pass tkt-<?php echo esc_attr($data->theme) ?>-section tkt-pass-section">

    <?php if (count($types) == 1 && count($types[0]->pricings()) == 1) : ?>
      <div id="item-<?php echo esc_html($types[0]->_id()); ?>" data-type="<?php echo esc_attr($types[0]->_id()); ?>" class="pass">
        <input type="hidden" class="choose-pass" name="user[pass]" value="<?php echo esc_attr($types[0]->_id().':'.array_keys($types[0]->pricings())[0]); ?>">
      </div>

    <?php else : ?>

      <div id="pass-accordion" class="tkt-accordion">
        <?php foreach ($types as $tickettype) :?>
          <div class="card" id="pass-<?php echo esc_attr($tickettype->_id()) ?>">
            <div class="card-header tkt-<?php echo esc_attr($data->theme) ?>-section">
              <h5 class="card-title mb-0">
                <button class="btn btn-link pass_title" aria-expanded="true" aria-controls="#item-<?php echo esc_attr($tickettype->_id()); ?>">
                  <?php echo esc_html($tickettype->name(TKT_LANG)) ?>
                </button>
              </h5>
            </div>
            <div id="item-<?php echo esc_attr($tickettype->_id()); ?>" data-type="<?php echo esc_attr($tickettype->_id()); ?>" class="card-content pass <?php echo esc_attr($tickettype->_id() === $data->selected ? 'open' : '') ?>">
              <div class="card-body tkt-<?php echo esc_attr($data->theme) ?>-section">
                <p><?php echo wp_kses_post($tickettype->description(TKT_LANG)) ?></p>

                <?php foreach ($tickettype->pricings() as $key => $pricing) :?>
                <div class="pricing-row" data-pricing-key="<?= esc_attr($key) ?>">
                    <span class="tkt-badge tkt-badge-split flex-rev-on-mobile tkt-badge-plus-minus">
                        <span class="tkt-badge-part tkt-inactive-badge tkt-minus-btn text-center">-</span>
                        <span class="tkt-badge-part tkt-light-badge tkt-badge-center-part text-center">
                            <span class="pricing-qty">
                                0
                            </span>
                            x
                            <span class="pricing-name">
                              <?php echo esc_html($pricing->name(TKT_LANG)) ?>
                              <?php if (!empty(strip_tags($pricing->description(TKT_LANG)))) :?>
                                  <i class="tkt-icon-info" data-component="Ui/Tippy" data-tippy-content="<?php echo esc_html($pricing->description(TKT_LANG)) ?>"></i>
                              <?php endif;?>
                            </span>
                            <span class="pricing-price">
                              <?php echo esc_html($pricing->price()) ?>
                            </span>
                        </span>
                        <span class="tkt-badge-part tkt-dark-badge tkt-plus-btn text-center">+</span>
                    </span>
                    <input type="hidden" data-pricing="<?= $key ?>" class="input pricing-input" value="0"/>
                  </div>
                <?php endforeach; ?>

                <fieldset>
                  <div class="submit-section" class="row">
                    <div class="col-md-12 text-right">
                      <button type="submit" class="add-to-cart-button button active btn-block">
                        <i class="glyphicon glyphicon-shopping-cart"></i><?php echo esc_html(tkt_t("Ajouter au panier")) ?>
                      </button>
                    </div>
                  </div>
                </fieldset>
                <div class="row mt-2">
                    <div class="col-md-12 alert alert-success"></div>
                    <div class="col-md-12 alert alert-danger"></div>
                </div>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </section>
</div>

<script>
jQuery(document).ready(function ($) {
  // Open first pass if there is only one
  var pass = $('.pass_title');
  if (pass.length == 1) {
    $(pass[0]).trigger('click');

    // Open first pricing if there is only one
    var pricings = $('.choose-pass');
    if (pricings.length == 1) {
      $(pricings[0]).trigger('click');
    }
  }
});
</script>

<?php endif; ?>
