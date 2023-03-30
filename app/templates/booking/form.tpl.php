<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Booking form template
 *
 * Input:
 * $data: {
 *   "ids": [ ... ],
 *   "theme": 'dark|light'
 * }
 */
$theme = isset($data->theme) ? $data->theme : 'dark';
?>
<div class="tkt-wrapper">
    <section class="tkt-section tkt-<?= $theme ?>-section book-section">
        <div data-component="Program/BookabilityState">
            <div data-bookability-ids="<?= implode(',', $data->ids) ?>">
                <span class="show-booking-form">
                    <div data-component="Media/Loading" data-size-sm class="show-while-loading"></div>
                    <span class="show-if-not-bookable assertive d-none"></span>

                    <div class="show-if-bookable show-if-almost-not-bookable" style="width: 100%;">
                        <div class="row">
                            <div class="col">
                                <div
                                    class="booking-form v2"
                                    data-component="Booking/Form"
                                    data-redirect="<?= TKTApp::get_instance()->get_config('cart.cart_redirect', 'none') ?>"
                                    data-cart-url="<?= tkt_cart_url() ?>"
                                    data-checkout-url="<?= tkt_checkout_url() ?>"
                                    data-show-on-load="<?= tkt_get_url_param( 'book', -1 ) == 1 ? 'true' : 'false' ?>"
                                    data-ids="<?= implode(',', $data->ids) ?>">
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </section>

    <!-- Underscore.js templates used by client side -->
    <script type="text/template" id="tkt-booking-form-dates-tpl">
        <?= TKTTEmplate::render('booking/form_dates', (object)[]) ?>
    </script>
    <script type="text/template" id="tkt-booking-form-pricings-tpl">
        <?= TKTTEmplate::render('booking/form_pricings', (object)[]) ?>
    </script>
    <script type="text/template" id="tkt-booking-form-success-tpl">
        <?= TKTTEmplate::render('booking/form_success', (object)[]) ?>
    </script>
</div>
