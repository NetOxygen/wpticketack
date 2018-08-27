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
                $post    = static::event_to_post($e);
                $post_id = wp_insert_post($post);
                if (count($e->posters) > 0) {
                    static::save_event_image($e, $post_id);
                }
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

    protected static function save_event_image($event, $post_id)
    {
        if (count($event->posters) == 0) {
            return false;
        }

        $poster     = $event->posters[0];
        $url        = $poster['url'];
        $basename   = basename($url);
        $upload_dir = wp_upload_dir();
        $dest_path  = $upload_dir['path'].'/'.$basename;
        $dest_url   = $upload_dir['url'].'/'.$basename;
        $mime_type  = 'image/'.pathinfo($dest_path)['extension'];

        file_put_contents($dest_path, file_get_contents($url));

        $attachment = [
           'guid'           => $dest_url,
           'post_mime_type' => $mime_type,
           'post_title'     => $event->localized_title_or_original('fr'),
           'post_content'   => 'Image principale',
           'post_status'    => 'inherit'
        ];

        $image_id = wp_insert_attachment($attachment, $dest_path, $post_id);

        // Make sure that this file is included, as wp_generate_attachment_metadata() depends on it.
        require_once( ABSPATH . 'wp-admin/includes/image.php' );
        // Generate the metadata for the attachment, and update the database record.
        $attach_data = wp_generate_attachment_metadata($image_id, $dest_path);

        wp_update_attachment_metadata($image_id, $attach_data);

        add_post_meta($post_id, '_thumbnail_id', $image_id);
    }

    function get_id_from_guid($guid)
    {
        global $wpdb;
        return $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid=%s", $guid));
    }
}
