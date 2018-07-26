<?php
/**
 * Cart shortcode
 *
 * Usage:
 *
 * [tkt_cart]
 *
 * Default layout is "screenings"
 */
class CartShortcode extends TKTShortcode
{
    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_cart";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        return TKTTemplate::render(
            'cart/cart',
            (object)[]
        );
    }
}
