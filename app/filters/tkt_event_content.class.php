<?php
namespace Ticketack\WP\Filters;

use Ticketack\WP\Templates\TKTTemplate;

/**
 * TktEventContent filter
 */
class TktEventContentFilter extends TKTFilter
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
        if ( $post->post_type == 'tkt-event' && is_single() && in_the_loop() && is_main_query() ) {
            return trim(preg_replace('#\R+#', '', TKTTemplate::render("event/tkt_event", (object)[
                "tkt_event" => get_post()
            ])));
        }

        return $args;
    }
}
