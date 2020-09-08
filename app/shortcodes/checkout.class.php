<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\Templates\TKTTemplate;

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
        $result = tkt_get_url_param('result');

        return TKTTemplate::render(
            'checkout/checkout',
            (object)[
                "result" => $result
            ]
        );
    }
}
