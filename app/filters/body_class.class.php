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
            'tkt_screening'
        ];

        if (isset($post->post_content)) {
            foreach ($shortcodes as $shortcode) {
                if(has_shortcode($post->post_content, $shortcode ) ) {
                    $classes[] = 'body_'.$shortcode;
                }
            }
        }

        return $classes;
    }
}
