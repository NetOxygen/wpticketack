<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Settings;
use Ticketack\Core\Base\TKTApiException;

/**
 * Checkout shortcode
 *
 * Usage:
 *
 * [tkt_checkout fields="firstname,lastname,email,address,zip,city,phone,cellphone"]
 */
class CheckoutShortcode extends TKTShortcode
{
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

            return TKTTemplate::render(
                'checkout/checkout',
                (object)[
                    "result"           => $result,
                    'requested_fields' => $fields["eshop"]["requested_buyer_data"],
                    'required_fields'  => $fields["eshop"]["required_buyer_data"]
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
