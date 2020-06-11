<?php
namespace Ticketack\WP\Filters;

use Ticketack\WP\Templates\TKTTemplate;

/**
 * TktContent filter
 */
class TktContentFilter extends TKTFilter
{
    /**
     * Get this filter tag
     *
     * @return string: The tag to use
     */
    public function get_tag()
    {
        return "the_content";
    }

    /**
     * Run this filter
     */
    public function run($args = null)
    {
        $post = get_post();
        // Check if we're inside the main loop in a single post page.
        if ( is_single() && in_the_loop() && is_main_query() ) {
            if ( $post->post_type == 'tkt-event' ) {
                echo trim(preg_replace('#\R+#', '', TKTTemplate::render("event/tkt_event", (object)[
                    "tkt_event" => get_post()
                ])));
            } elseif ( $post->post_type == 'tkt-article' ) {
                echo trim(preg_replace('#\R+#', '', TKTTemplate::render("article/tkt_article", (object)[
                    "tkt_article" => get_post()
                ])));
            }
        }

        return $args;
    }
}
