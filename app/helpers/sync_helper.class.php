<?php
/**
 * Helper class to handle Ticketack/Wordpress events/posts synchronization
 */
class SyncHelper
{
    public static function sync_events()
    {
        $events = static::load_next_events();

        if (!empty($events)) {
            array_map(function ($e) {
                wp_insert_post(static::event_to_post($e));
            }, $events);
        }
    }

    protected static function load_next_events()
    {
        $screenings = Screening::all()
            ->in_the_future()
            ->order_by_start_at()
            ->get('_id,title,start_at,stop_at,films,opaque');

        $events = Event::from_screenings($screenings);

        return $events;
    }

    protected static function event_to_post($event)
    {
        $post = [
            "post_title"   => $event->title('fr'),
            "post_content" => TKTTemplate::render("event/newsletter_event", (object)["event" => $event]),
            "post_status"  => "publish",
            // WP automatically prepends 'http://' to the guid !
            "guid"         => 'http://'.$event->_id()
        ];

        // Check for any existing post
        $existing_post = get_post(static::get_id_from_guid('http://'.$event->_id()));
        if (!is_null($existing_post)) {
            $post['ID'] = $existing_post->ID;
        }

        return $post;
    }

    function get_id_from_guid($guid)
    {
        global $wpdb;
        return $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid=%s", $guid));
    }
}
