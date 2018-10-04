<?php
/**
 * Helper class to handle Ticketack/Wordpress events/posts synchronization
 */
class SyncHelper
{
    const POST_TYPE    = 'tkt-event';
    const DEFAULT_LANG = 'fr';

    public static function sync_events()
    {
        ini_set('memory_limit', '512M');
        ini_set('max_execution_time', 0);

		// First switch to fr
		switch_to_locale('fr_FR');

        $events = static::load_next_events();

        if (!empty($events)) {
            array_map(function ($e) use ($i) {
                $def_post_id = static::create_post($e, static::DEFAULT_LANG);

                if (WPML_INSTALLED) {
					$languages = icl_get_languages('skip_missing=N&orderby=KEY&order=DIR&link_empty_to=str');
					foreach (array_keys($languages) as $lang) {
						if ($lang == static::DEFAULT_LANG) {
							continue;
						}
						$tr_post_id = static::create_post($e, $lang);
						static::link_translations($def_post_id, $tr_post_id, $lang);
					}
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
            "post_content"  => trim(preg_replace('#\R+#', '', TKTTemplate::render("event/post", (object)["event" => $event, "lang" => $lang]))),
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
        if (count($event->posters()) > 0) {
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
        if (count($event->posters()) == 0) {
            return false;
        }

        $poster     = $event->posters()[0];
        $url        = $poster->url;
        $basename   = basename($url);
        $upload_dir = wp_upload_dir();
        $dest_path  = $upload_dir['path'].'/'.$basename;
        $dest_url   = $upload_dir['url'].'/'.$basename;
        $filetype   = wp_check_filetype($basename, null );

        file_put_contents($dest_path, file_get_contents($url));

        $attachment = [
           'guid'           => $dest_url,
           'post_mime_type' => $filetype['type'],
           'post_title'     => $event->localized_title_or_original($lang),
           'post_content'   => '',
           'post_status'    => 'inherit'
        ];
		$existing_attachment = get_post_meta($post_id, '_thumbnail_id', /*$single*/true);
		if (!empty($existing_attachment) && intval($existing_attachment) > 0) {
			$attachment['ID'] = intval($existing_attachment);
		}

        $image_id = wp_insert_attachment($attachment, $dest_path, $post_id);

        // Make sure that this file is included, as wp_generate_attachment_metadata() depends on it.
        require_once( ABSPATH . 'wp-admin/includes/image.php' );
        // Generate the metadata for the attachment, and update the database record.
        $attach_data = wp_generate_attachment_metadata($image_id, $dest_path);

        wp_update_attachment_metadata($image_id, $attach_data);

        add_post_meta($post_id, '_thumbnail_id', $image_id);
    }
}
