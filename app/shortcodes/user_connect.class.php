<?php
/**
 * User connection shortcode
 *
 * Usage:
 *
 * [tkt_user_connect]
 */
class UserConnectShortcode extends TKTShortcode
{
    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_user_connect";
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
            'user/user_connect',
            (object)[]
        );
    }
}
