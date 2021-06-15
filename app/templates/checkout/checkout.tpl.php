<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Checkout template
 *
 * Input:
 * $data: {
 *    "result": ok|error|null
 * }
 */
$app               = TKTApp::get_instance();
$cgv_url           = $app->get_config('checkout.cgv');
$privacy_url       = $app->get_config('checkout.privacy');
$requested_fields  = explode(',', $app->get_config('checkout.requested_fields'));
$required_fields   = explode(',', $app->get_config('checkout.required_fields'));
$allow_later       = intval($app->get_config('checkout.allow_later')) === 1;
$allow_postfinance = intval($app->get_config('checkout.allow_postfinance')) === 1;
?>

<div
    class="tkt-wrapper tkt-checkout"
    data-component="Checkout/Checkout"
    data-redirect="<?= tkt_thank_you_url() ?>"
>
    <div class="tkt-checkout-form">
        <?= TKTTEmplate::render('checkout/checkout_form', (object)[
            'cgv_url'           => $cgv_url,
            'privacy_url'       => $privacy_url,
            'requested_fields'  => $requested_fields,
            'required_fields'   => $required_fields,
            'allow_later'       => $allow_later,
            'allow_postfinance' => $allow_postfinance
        ]) ?>
    </div>
</div>


<!-- Underscore.js templates used by client side -->
<script type="text/template" id="tkt-checkout-result-ok-tpl">
    <?= TKTTEmplate::render('checkout/checkout_result_ok', (object)[]) ?>
</script>
<script type="text/template" id="tkt-checkout-result-error-tpl">
    <?= TKTTEmplate::render('checkout/checkout_result_error', (object)[]) ?>
</script>
