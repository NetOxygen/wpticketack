<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Settings;
use Ticketack\Core\Base\TKTApiException;
use Ticketack\WP\TKTApp;

/**
 * Checkout shortcode
 *
 * Usage:
 *
 * [tkt_checkout fields="firstname,lastname,email,address,zip,city,phone,cellphone"]
 */
class CheckoutShortcode extends TKTShortcode
{
    CONST NULL_PAYMENT  = 'NULL_PAYMENT';
    CONST LATER_PAYMENT = 'LATER_PAYMENT';
    CONST PROXYPAY      = 'PROXYPAY';

    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_checkout";
    }

    /**
     * Run it
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        try {
            $fields = Settings::first()->id('default')->get(['eshop.required_buyer_data', 'eshop.requested_buyer_data'])->toArray();
            $result = tkt_get_url_param('result');
            $payment_method        = TKTApp::get_instance()->get_config('payment.methods');
            $pay_online            = [];
            $proxypay_config_error = "";

            foreach ($payment_method as $method) {
                switch ($method["_id"]) {
                    case static::NULL_PAYMENT:
                        $pay_online[static::NULL_PAYMENT] = $method['enabled'];
                        break;
                    case static::LATER_PAYMENT:
                        $pay_online[static::LATER_PAYMENT] = $method['enabled'];
                        break;
                    case static::PROXYPAY:
                        if (!$method['enabled'] || empty($method['url']) || empty($method['sha_out']) || empty($method['sha_in']) || empty($method['api_key']) || empty($method['seller'])) {
                            $pay_online[$method[static::PROXYPAY]] = false;
                            $proxypay_config_error = 'Error in Proxypay configuration, please update the online payment method in Kronos';
                            break;
                        }
                        $pay_online[static::PROXYPAY] = $method['enabled'];
                        break;
                    default:
                        $pay_online[$method["_id"]] = false;
                        break;
                }
            }

            return TKTTemplate::render(
                'checkout/checkout',
                (object)[
                    "result"           => $result,
                    'requested_fields' => $fields["eshop"]["requested_buyer_data"],
                    'required_fields'  => $fields["eshop"]["required_buyer_data"]
                    'allow_null_payment'    => $pay_online['NULL_PAYMENT'],
                    'allow_later'           => $pay_online['LATER_PAYMENT'],
                    'allow_proxypay'        => $pay_online['PROXYPAY'],
                    'proxypay_config_error' => $proxypay_config_error
                ]
            );
        } catch (TKTApiException $e) {
            return sprintf(
                "Impossible de charger la configuration du checkout: %s",
                $e->getMessage()
            );
        }
    }
}
