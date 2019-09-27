<?php

namespace Ticketack\WP\Helpers;

use Ticketack\WP\TKTApp;
use Ticketack\Core\Models\Screening;
use Ticketack\Core\Models\Event;

/**
 * Helper class to handle Ticketack/Wordpress events/posts synchronization
 */
class SyncHelper
{
    const POST_TYPE    = 'tkt-event';

    const IMPORT_ONLY_NEW = false;

    public static function sync_events()
    {
        $default_lang = TKTApp::get_instance()->get_config('i18n.default_lang', 'fr');

        ini_set('memory_limit', '512M');
        ini_set('max_execution_time', 0);

        if ($default_lang === 'fr') {
            switch_to_locale('fr_FR');
        }

        $events = static::load_next_events();

        if (!empty($events)) {
            array_map(function ($e) use ($i, $default_lang) {
                $def_post_id = static::create_post($e, $default_lang);

                if (is_null($def_post_id) || !TKT_WPML_INSTALLED) {
                    return;
                }

                $languages = icl_get_languages('skip_missing=N&orderby=KEY&order=DIR&link_empty_to=str');
                foreach (array_keys($languages) as $lang) {
                    if ($lang == $default_lang) {
                        continue;
                    }
                    $tr_post_id = static::create_post($e, $lang);
                    if (!is_null($tr_post_id)) {
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
            ->get('_id,title,start_at,stop_at,description,cinema_hall,films,opaque');

        $events = Event::from_screenings($screenings);

        return $events;
    }

    protected static function create_post($event, $lang)
    {
        $title = $event->title($lang);
        $slug  = tkt_get_event_slug($event, $lang);
        // WP automatically prepends 'http://' to the guid !
        $guid  = 'http://'.$slug;

        $post_content = trim(preg_replace('#\R+#', '', $event->opaque('description')[$lang]));

        $post = [
            "post_title"    => $title,
            "post_content"  => $post_content,
            "post_type"     => static::POST_TYPE,
            'post_name'     => $slug,
            "post_status"   => "publish",
            "guid"          => $guid
        ];

        // Check for any existing post
        $existing_post = get_post(static::get_id_from_guid($guid));
        if (!is_null($existing_post)) {
            if (static::IMPORT_ONLY_NEW) {
                return null;
            }

            $post['ID'] = $existing_post->ID;
        }

        // Save post image
        $post_id = wp_insert_post($post);

        static::save_post_metas($event, $post_id, $lang);

        return $post_id;
    }

    protected static function save_post_metas($event, $post_id, $lang)
    {
        update_post_meta($post_id, 'screenings', wp_slash(json_encode($event->screenings())));
        update_post_meta($post_id, 'opaque', wp_slash(json_encode($event->opaque())));
        update_post_meta($post_id, 'trailers', wp_slash(json_encode($event->trailers())));
        update_post_meta($post_id, 'posters', wp_slash(json_encode($event->posters())));
        update_post_meta($post_id, 'title',  wp_slash(json_encode($event->title())));
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

    protected static function download_attachment($url, $dest_path)
    {
        if (($content = file_get_contents($url)) === false) {
            return false;
        }

        if (file_put_contents($dest_path, $content) === false) {
            return false;
        }

        return true;
    }

    protected static function create_attachment($id, $guid, $type, $title, $dest_path, $post_id)
    {
        $attachment = [
            'guid'           => $guid,
            'post_mime_type' => $type,
            'post_title'     => $title,
            'post_content'   => '',
            'post_status'    => 'inherit'
        ];
        if (!empty($id) && intval($id) > 0) {
            $attachment['ID'] = intval($id);
        }

        $image_id = wp_insert_attachment($attachment, $dest_path, $post_id);

        // Make sure that this file is included, as wp_generate_attachment_metadata() depends on it.
        require_once( ABSPATH . 'wp-admin/includes/image.php' );
        // Generate the metadata for the attachment, and update the database record.
        $attach_data = wp_generate_attachment_metadata($image_id, $dest_path);

        wp_update_attachment_metadata($image_id, $attach_data);

        return $image_id;
    }

    protected function link_attachment_to_post($post_id, $image_id)
    {
        // We delete first to ensure only one occurence of same meta
        // This should be replaced by only one call to update_post_meta()
        delete_post_meta($post_id, '_thumbnail_id');
        add_post_meta($post_id, '_thumbnail_id', $image_id);
    }
}
