<?php
/**
 * Buy pass form
 *
 * Usage:
 *
 * [tkt_buy_pass]
 */
class BuyPassShortcode extends TKTShortcode
{
    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_buy_pass";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        $tickettypes = Tickettype::all()->get();

        $types = isset($atts['types']) ? explode(',', $atts['types']) : [];
        if (!empty($types)) {
            $tickettypes = array_values(array_filter($tickettypes, function ($t) use ($types) {
                pass_required_fields($t->_id());
                return in_array($t->_id(), $types);
            }));
        }

        return TKTTemplate::render(
            'buy_pass/buy',
            (object)[ 'tickettypes' => $tickettypes ]
        );

        return null;
    }
}
