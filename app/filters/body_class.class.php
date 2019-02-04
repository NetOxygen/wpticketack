<?php
/**
 * BodyClass filter
 */
class BodyClassFilter extends TKTFilter
{
    /**
     * Get this filter tag
     *
     * @return string: The tag to use
     */
    public function get_tag()
    {
        return "body_class";
    }

    /**
     * Run this filter
     */
    public function run($args = null)
    {
        $classes = $args;
        global $post;

        $shortcodes = [
            'tkt_program',
            'tkt_cart',
            'tkt_event',
            'tkt_screening',
            'tkt_buy_pass'
        ];

        if (isset($post->post_content)) {
            foreach ($shortcodes as $shortcode) {
                if(has_shortcode($post->post_content, $shortcode ) ) {
                    $classes[] = 'body_tkt';
                    $classes[] = 'body_'.$shortcode;
                }
            }
        }

        if ($post->post_type == 'tkt-event') {
            $classes[] = 'body_tkt_event';
        }

        return $classes;
    }
}
