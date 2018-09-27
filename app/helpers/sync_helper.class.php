<?php
/**
 * Helper class to handle Ticketack/Wordpress events/posts synchronization
 */
class SyncHelper
{
    const POST_TYPE    = 'page';
    const DEFAULT_LANG = 'fr';
    const OTHER_LANGS  = ['en'];

    public static function sync_events()
    {
        $events = static::load_next_events();

        if (!empty($events)) {
            array_map(function ($e) {
                $def_post_id = static::create_post($e, static::DEFAULT_LANG);

                foreach (static::OTHER_LANGS as $lang) {
                    $tr_post_id = static::create_post($e, $lang);
                    static::link_translations($def_post_id, $tr_post_id, $lang);
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

    protected static function create_post($event, $lang)
    {
        $title = $event->title($lang);
        $slug  = get_event_slug($event, $lang);
        // WP automatically prepends 'http://' to the guid !
        $guid  = 'http://'.$slug;

        $post = [
            "post_title"    => $title,
            "post_content"  => TKTTemplate::render("event/post", (object)["event" => $event, "lang" => $lang]),
            "post_type"     => static::POST_TYPE,
            'post_name'     => $slug,
            "post_status"   => "publish",
            "guid"          => $guid
        ];

        // Check for any existing post
        $existing_post = get_post(static::get_id_from_guid($guid));
        if (!is_null($existing_post)) {
            $post['ID'] = $existing_post->ID;
        }

        // Save post image
        $post_id = wp_insert_post($post);
        if (count($e->posters) > 0) {
            static::save_event_image($event, $post_id, $lang);
        }

        return $post_id;
    }

    // See https://wpml.org/wpml-hook/wpml_set_element_language_details/
    protected static function link_translations($original_post_id, $translated_post_id, $lang)
    {
        // https://wpml.org/wpml-hook/wpml_element_type/
        $wpml_element_type = apply_filters('wpml_element_type', static::POST_TYPE);

        // get the language info of the original post
        // https://wpml.org/wpml-hook/wpml_element_language_details/
        $get_language_args = [
            'element_id'   => $original_post_id,
            'element_type' => static::POST_TYPE
        ];
        $original_post_language_info = apply_filters(
            'wpml_element_language_details',
            null,
            $get_language_args
        );

        $set_language_args = [
            'element_id'           => $translated_post_id,
            'element_type'         => $wpml_element_type,
            'trid'                 => $original_post_language_info->trid,
            'language_code'        => $lang,
            'source_language_code' => $original_post_language_info->language_code
        ];

        do_action('wpml_set_element_language_details', $set_language_args );
    }

    protected static function get_id_from_guid($guid)
    {
        global $wpdb;
        return $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid=%s", $guid));
    }

    protected static function save_event_image($event, $post_id, $lang = 'fr')
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
           'post_title'     => $event->localized_title_or_original($lang),
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
}
