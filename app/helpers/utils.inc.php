<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Helpers\SyncHelper;
use ScssPhp\ScssPhp\Compiler;

/**
 * Utils functions
 */

/**
 * Extract url param
 *•
 * @param string $key: The param name
 * @param mixed $default: The default value if the url param is not found
 *
 * @return mixed: The URL param if found, $default otherwise
 */
function tkt_get_url_param($key, $default = null)
{
    return array_key_exists($key, $_GET) ? sanitize_text_field($_GET[$key]) : $default;
}

/**
 * Formats a DateTime in a full date and time format
 *
 * @param $dt
 *   The DateTime object to format.
 *
 * @return
 *   A string.
 */
function tkt_datetime_to_s($dt)
{
    $fmt = "%e %B %Y %H:%M";
    return strftime($fmt, $dt->getTimestamp());
}

/**
 * Formats a DateTime in a full date format
 *
 * @param $dt
 *   The DateTime object to format.
 *
 * @return
 *   A string.
 */
function tkt_date_to_s($dt)
{
    $fmt = "%e %B %Y";
    return strftime($fmt, $dt->getTimestamp());
}

/**
 * Formats a DateTime in a minimal date format
 *
 * @param $dt
 *   The DateTime object to format.
 *
 * @return
 *   A string.
 */
function tkt_date_to_min_s($dt)
{
    $fmt = "%e %B";
    return strftime($fmt, $dt->getTimestamp());
}

/**
 * Formats a DateTime in a minimal date and time format
 *
 * @param $dt
 *   The DateTime object to format.
 *
 * @return
 *   A string.
 */
function tkt_date_and_time_to_min_s($dt)
{
    $fmt = "%e %B %H:%M";
    return strftime($fmt, $dt->getTimestamp());
}

/**
 * Formats a DateTime in a hour format
 *
 * @param $dt
 *   The DateTime object to format.
 *
 * @return
 *   A string.
 */
function tkt_date_and_time_to_time_s($dt)
{
    $fmt = "%H:%M";
    return strftime($fmt, $dt->getTimestamp());
}

/**
 * convert an ISO-8601 formated string to a PHP DateTime object.
 *
 * see http://stackoverflow.com/questions/14849446/php-parse-date-in-iso-format
 *
 * @bugs
 *   Milliseconds will be lost.
 *
 * @return
 *   A DateTime object or false on error.
 */
function tkt_iso8601_to_datetime($str)
{
    $i = strtotime($str);
    $d = new \DateTime();
    return $d->setTimestamp($i);
}

/**
 * convert a PHP DateTime object to an ISO-8601 string
 *
 * @see
 *   http://php.net/manual/en/class.datetime.php#datetime.constants.iso8601
 *
 * @return
 *   A string.
 */
function tkt_datetime_to_iso8601($d)
{
    return $d->format(\DateTime::ATOM);
}

/**
 * Get a plugin asset url
 *
 * @param string $path: The file path, relative to plugin root dir
 *
 * @return string
 */
function tkt_assets_url($path)
{
    return plugin_dir_url( TKT_APP ) . 'front/' . $path . '?v=' . TKT_ASSETS_VERSION;

}
/**
 * Get a link to a page by its slug, in the current language
 *
 * @param string $slug in the default language
 * @param string $query
 *
 * @return string
 */
function tkt_page_url($slug, $query = "")
{
    $url = get_site_url(/*$blog_id*/null, $slug);

    if (TKT_WPML_INSTALLED) {
        // get the page in default language
        $page = get_page_by_path($slug, OBJECT, 'page');
        if (tkt_current_lang() != tkt_default_lang()) {
            // get the slug in current language
            $translated_slug = tkt_translated_slug_by_id($page->ID, 'page', tkt_current_lang(), $slug);
            // get the page in current language
            $page = get_page_by_path($slug, OBJECT, 'page');
        }

        $url = apply_filters('wpml_permalink', get_permalink($page->ID));
    }

    return sprintf('%s%s', $url, (!empty($query) ? '?'.$query : ''));
}

/**
 * Get the Program page url
 *
 * @param string $query
 *
 * @return string
 */
function tkt_program_url($query = "")
{
    $slug = TKTApp::get_instance()->get_config('pages.program');
    return tkt_page_url($slug, $query);
}

/**
 * Get the Shop page url
 *
 * @param string $query
 *
 * @return string
 */
function tkt_shop_url($query = "")
{
    $slug = TKTApp::get_instance()->get_config('pages.shop');
    return tkt_page_url($slug, $query);
}

/**
 * Get the Cart page url
 *
 * @return string
 */
function tkt_cart_url()
{
    $slug = TKTApp::get_instance()->get_config('pages.cart');
    return tkt_page_url($slug, $query);
}

/**
 * Get the Checkout page url
 *
 * @return string
 */
function tkt_checkout_url()
{
    $slug = TKTApp::get_instance()->get_config('pages.checkout');
    if (!empty($slug)) {
        return tkt_page_url($slug, $query);
    }

    return sprintf(
        "%s/cart/validate",
        TKTApp::get_instance()->get_config('ticketack.eshop_uri')
    );
}

/**
 * Get the Thank you page url
 *
 * @return string
 */
function tkt_thank_you_url()
{
    $slug = TKTApp::get_instance()->get_config('pages.thank_you');
    if (!empty($slug)) {
        return tkt_page_url($slug, $query);
    }

    return null;
}

/**
 * Get the eshop buy pass page url
 *
 * @return string
 */
function tkt_buy_pass_url()
{
    return sprintf(
        "%s/pass/new",
        TKTApp::get_instance()->get_config('ticketack.eshop_uri')
    );
}

/**
 * Get the Cart page url
 *
 * @return string
 */
function tkt_cart_reset_url()
{
    return sprintf(
        "%s/cart/reset",
        TKTApp::get_instance()->get_config('ticketack.eshop_uri')
    );
}

/**
 * Get an event details url
 *
 * @param Event $event
 *
 * @return string
 */
function tkt_event_details_url($event)
{
    if (TKT_WPML_INSTALLED) {
        $slug = tkt_get_event_slug($event, TKT_LANG);
        $page = get_page_by_path($slug, OBJECT, 'tkt-event');
        return apply_filters('wpml_permalink', get_permalink($page->ID));
    }

    return get_site_url(
        /*$blog_id*/null,
        sprintf(
            '%s/%s',
            'events',
          tkt_get_event_slug($event, TKT_LANG)
        )
    );
}

/**
 * Get an event book url
 *
 * @param Event $event
 * @param Screening $screening: pre-selected screening
 *
 * @return string
 */
function tkt_event_book_url($event, $screening = null)
{
    if (TKT_WPML_INSTALLED) {
        $slug = tkt_get_event_slug($event, TKT_LANG);
        $page = get_page_by_path($slug, OBJECT, 'tkt-event');

        return sprintf(
            "%s?book=1%s",
            apply_filters('wpml_permalink', get_permalink($page->ID)),
            (!is_null($screening) ? '&s_id='.$screening->_id() : '')
        );
    }

    return get_site_url(
        /*$blog_id*/null,
        sprintf(
            "%s/%s/?book=1%s",
            'events',
        tkt_get_event_slug($event, TKT_LANG),
            (!is_null($screening) ? '&s_id='.$screening->_id() : '')
        )
    );
}

/**
 * Get an article details url
 *
 * @param Article $article
 *
 * @return string
 */
function tkt_article_details_url($article)
{
    if (TKT_WPML_INSTALLED) {
        $slug = tkt_get_article_slug($article, TKT_LANG);
        $page = get_page_by_path($slug, OBJECT, 'tkt-article');
        return apply_filters('wpml_permalink', get_permalink($page->ID));
    }

    return get_site_url(
        /*$blog_id*/null,
        sprintf(
            '%s/%s',
            'events',
          tkt_get_article_slug($article, TKT_LANG)
        )
    );
}

/**
 * Extract a Youtube video ID from an URL
 * See https://gist.github.com/ghalusa/6c7f3a00fd2383e5ef33
 *
 * @param string: Youtube video url
 *
 * @return string: Video ID
 */
function tkt_yt_video_id($yt_url)
{
    // Here is a sample of the URLs this regex matches: (there can be more content after the given URL that will be ignored)
    // http://youtu.be/dQw4w9WgXcQ
    // http://www.youtube.com/embed/dQw4w9WgXcQ
    // http://www.youtube.com/watch?v=dQw4w9WgXcQ
    // http://www.youtube.com/?v=dQw4w9WgXcQ
    // http://www.youtube.com/v/dQw4w9WgXcQ
    // http://www.youtube.com/e/dQw4w9WgXcQ
    // http://www.youtube.com/user/username#p/u/11/dQw4w9WgXcQ
    // http://www.youtube.com/sandalsResorts#p/c/54B8C800269D7C1B/0/dQw4w9WgXcQ
    // http://www.youtube.com/watch?feature=player_embedded&v=dQw4w9WgXcQ
    // http://www.youtube.com/?feature=player_embedded&v=dQw4w9WgXcQ
    // It also works on the youtube-nocookie.com URL with the same above options.
    // It will also pull the ID from the URL in an embed code (both iframe and object tags)
    preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $yt_url, $match);

    return $match[1];
}

/**
 * Helper function to allow to make calls
 * on an object using the __construct() result like
 * $my_obj = tkt_id(new MyObj())->chainable_method();
 */
function tkt_id($obj)
{
    return $obj;
}

if (!function_exists('tkt_h')) {
    /**
     * Sanitize a string for display.
     *
     * Escape HTML tags for a safer display. This function assume UTF-8
     * encoding.
     *
     * @param $string
     *   The unsafe string.
     *
     * @return
     *   a string that can be safely presented to echo or print for output.
     */
    function tkt_h($string)
    {
        return htmlspecialchars($string, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
}

if (!function_exists('tkt_html')) {
    /**
     * Sanitize a string for display but allows some html tags.
     *
     * Less safe than tkt_h() which strips everything.
     *
     * Note: This function does not modify any attributes on the tags that are
     * allowed, including the style and onmouseover attributes that a mischievous
     * user may abuse when posting text that will be shown to other users.
     *
     * @param $string
     *   The unsafe string.
     *
     * @param $tags_to_keep
     *   Tags to keep in strip tags
     *
     * @return
     *   a string that can be mostly safely presented to echo or print for output.
     */
    function tkt_html($string, $tags_to_keep = '<p><br><b><i><em><a>')
    {
        return strip_tags($string, $tags_to_keep);
    }
}

function tkt_get_ages()
{
    return [_("Pas de réponse"), '-18', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
}

function tkt_get_sexes()
{
    return ['n/c' => _("Pas de réponse"), 'f' => _("Féminin"), 'm' => _("Masculin"), 'o' => _("Autre")];
}

function tkt_pass_required_fields($type)
{
    static $required_fields = null;

    if ($required_fields === null) {
        $required_fields_data = TKTApp::get_instance()->get_config('pass.requested_pass_owner_data');
        if (empty($required_fields_data)) {
            return [];
        }

        $lines           = array_map('trim', explode(PHP_EOL, $required_fields_data));
        $required_fields = [];
        foreach ($lines as $l) {
            $parts = explode(':', $l);
            if (count($parts) != 2) {
                continue;
            }
            $required_fields[trim($parts[0])] = array_map('trim', explode(',', $parts[1]));
        }
    }

    if (in_array($type, array_keys($required_fields))) {
        return $required_fields[$type];
    }

    return $required_fields['default'];
}

/**
 * @param $str
 *   the string to match.
 *
 * @return
 *   true if the given string is a UUIDv4, false otherwise.
 */
function tkt_is_uuidv4($str)
{
    $regexp = '/^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-4[A-Fa-f0-9]{3}-[ABab89][A-Fa-f0-9]{3}-[A-Fa-f0-9]{12}$/';
    return (preg_match($regexp, $str) ? true : false);
}

if (!function_exists('tkt_invalid_url_path_encode_url')) {
    // https://stackoverflow.com/questions/9831077/how-to-url-encode-only-non-ascii-symbols-of-url-in-php-but-leave-reserved-symbo
    function tkt_invalid_url_path_encode_url($url)
    {
        $path = parse_url($url, PHP_URL_PATH);
        if ($path !== false && strpos($path, '%') !== false) return $url; // avoid double encoding
        else {
            $encoded_path = array_map('rawurlencode', explode('/', $path));
            return str_replace($path, implode('/', $encoded_path), $url);
        }
    }
}

if (!function_exists('tkt_img_proxy_url')) {
    function tkt_img_proxy_url($remote_url, $max_width = null, $max_height = null)
    {
        $proxy_img_host = TKTApp::get_instance()->get_config('images_proxy.host');

        if (empty($proxy_img_host)) {
            return $remote_url;
        }

        if (!filter_var($remote_url, FILTER_VALIDATE_URL)) {
            // sometimes we get non RFC 1738 urls, let's be nice and try to fix it
            $remote_url =tkt_invalid_url_path_encode_url($remote_url);
            if (!filter_var($remote_url, FILTER_VALIDATE_URL)) {
                return false;
            }
        }

        // if user agent supports webp, always prefer webp
        $webp = strpos($_SERVER['HTTP_ACCEPT'], 'image/webp') !== false ? 'webp' : null;

        return sprintf(
            "https://%s/?%s",
            $proxy_img_host,
            http_build_query(['url' => $remote_url, 'w' => $max_width, 'h' => $max_height, 'output' => $webp, 'q' => 70, 'fit' => 'outside'])
        );
    }
}

if (!function_exists('tkt_base64url_encode')) {
    /**
     * base64url variants,
     * stolen from http://us3.php.net/manual/en/function.base64-encode.php#103849
     */
    function tkt_base64url_encode($data)
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }
}

if (!function_exists('tkt_base64url_decode')) {
    function tkt_base64url_decode($data)
    {
        return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
    }
}

/**
 * Wrap Wordpress __ function
 */
function tkt_t($str) {
    return __($str, 'wpticketack');
}


function tkt_get_event_slug($event, $lang)
{
    $title = $event->title($lang);
    if (empty($title)) {
        $title = $event->title(tkt_default_lang());
    }
    $slug  = sanitize_title($title).($lang === tkt_default_lang() ? '' : '-'.$lang);

    return $slug;
}

function tkt_get_article_slug($article, $lang)
{
    $title = $article->name($lang);
    $slug  = sanitize_title($title).($lang === tkt_default_lang() ? '' : '-'.$lang);

    return $slug;
}

// Keep in sync with : app/controllers/screening.class.php in eshop
function tkt_people_activities($activity = null, $lang = null)
{
    $activities = [
        "actor"             => ["fr" => "Acteur", "en" => "Actor"],
        "actors"            => ["fr" => "Acteurs", "en" => "Actors"],
        "cast"              => ["fr" => "Acteurs", "en" => "Actors"],
        "camera"            => ["fr" => "Caméra", "en" => "Camera"],
        "co-producer"       => ["fr" => "Co-producteur", "en" => "Co-producer"],
        "co-producers"      => ["fr" => "Co-producteurs", "en" => "Co-producers"],
        "creator"           => ["fr" => "Créateur", "en" => "Creator"],
        "creators"          => ["fr" => "Créateurs", "en" => "Creators"],
        "director"          => ["fr" => "Réalisateur", "en" => "Director"],
        "directors"         => ["fr" => "Réalisateurs", "en" => "Directors"],
        "editor"            => ["fr" => "Montage", "en" => "Editor"],
        "editing"           => ["fr" => "Montage", "en" => "Editor"],
        "music"             => ["fr" => "Musique", "en" => "Music"],
        "producer"          => ["fr" => "Producteur", "en" => "Producer"],
        "producers"         => ["fr" => "Producteurs", "en" => "Producers"],
        "photography"       => ["fr" => "Photographie", "en" => "Photography"],
        "screenplay"        => ["fr" => "Scénario", "en" => "Screenplay"],
        "writer"            => ["fr" => "Scénario", "en" => "Writer"],
        "writers"           => ["fr" => "Scénario", "en" => "Writers"],
        "sound"             => ["fr" => "Son", "en" => "Sound"],
        "production design" => ["fr" => "Design de production", "en" => "Production design"]
    ];

    $ret = $activities;

    if (!is_null($activity)) {
        $activity = strtolower($activity);
        $ret      = isset($ret[$activity]) ? $ret[$activity] : null;
    }

    if (!is_null($lang) && !is_null($ret)) {
        $lang = strtolower($lang);
        $ret  = isset($ret[$lang]) ? $ret[$lang] : null;
    }

    return $ret;
}

/**
 * Generate html data attributes based on defined attributes
 *
 * @param TKTEvent $event
 * @param array $attributes
 */
function tkt_event_data_attributes($event, $attributes)
{
    $values = [];
    if (in_array('type', $attributes)) {
        $values[] = 'data-type="'.$event->opaque('type').'"';
    }

    if (in_array('date', $attributes)) {
        $dates = [];
        foreach ($event->screenings() as $s) {
            $dates[] = $s->start_at()->format('Y-m-d');
        }
            $values[] = 'data-date="'.implode(',', $dates).'"';
    }

    if (in_array('tags', $attributes)) {
        $tags = [];
        foreach ($event->opaque('tags', []) as $tag) {
            $tags[] = $tag[TKT_LANG];
        }
        $values[] = 'data-tags="'.implode(',', $tags).'"';
    }

    if (in_array('section', $attributes)) {
        $sections = [];
        foreach ($event->screenings() as $s) {
            $sections[] = $s->opaque('section', [])[tkt_default_lang()];
        }
        $values[] = 'data-section="'.implode(',', $sections).'"';
    }

    return implode(' ', $values);
}


/**
 * Generate html data attributes based on defined attributes
 *
 * @param TKTEvent $screening
 * @param array $attributes
 */
function tkt_screening_data_attributes($screening, $attributes)
{
    $values = [];
    if (in_array('type', $attributes)) {
        $values[] = 'data-type="'.$screening->opaque('type').'"';
    }

    if (in_array('date', $attributes)) {
        $values[] = 'data-date="'.$screening->start_at()->format('Y-m-d').'"';
    }

    if (in_array('hall', $attributes)) {
        $values[] = 'data-hall="'.$screening->place()->name().'"';
    }

    if (in_array('section', $attributes)) {
        $values[] = 'data-section="'.$screening->opaque('section', [])[tkt_default_lang()].'"';
    }

    if (in_array('tags', $attributes)) {
        $tags = [];
        foreach ($screening->opaque('tags', []) as $tag) {
            $tags[] = $tag[TKT_LANG];
        }
        $values[] = 'data-tags="'.implode(',', $tags).'"';
    }

    return implode(' ', $values);
}

/**
 * Generate html data attributes based on defined attributes
 *
 * @param TKTPerson $person
 * @param array $attributes
 */
function tkt_person_data_attributes($person, $attributes)
{
    $meta   = get_post_meta($person->ID);
    $values = [];
    $tags   = [];

    if (in_array('name', $attributes)) {
        $values[] = 'data-name="'.$person->post_content.'"';
        $tags[]   = $person->post_content;
    }

    if (in_array('country', $attributes)) {
        $values[] = 'data-country="'.$meta['country'][0].'"';
        $tags[]   = $meta['country'][0];
    }

    if (in_array('company', $attributes)) {
        $values[] = 'data-company="'.$meta['company'][0].'"';
        $tags[]   = $meta['company'][0];
    }

    if (in_array('profession', $attributes)) {
        $values[] = 'data-profession="'.$meta['profession'][0].'"';
        $tags[]   = $meta['profession'][0];
    }

    if (in_array('tags', $attributes)) {
        $values[] = 'data-tags="'.implode(' ', array_unique($tags)).'"';
    }

    return implode(' ', $values);
}

/**
 * Get the configured default lang
 *
 * @return string
 */
function tkt_default_lang()
{
    return TKTApp::get_instance()->get_config('i18n.default_lang', 'fr');
}

/**
 * Get the configured default lang
 *
 * @return string
 */
function tkt_current_lang()
{
    if (!TKT_WPML_INSTALLED) {
        return tkt_default_lang();
    }

    return ICL_LANGUAGE_CODE;
}

/**
 * Get the translated slug of a post
 *
 * @param int $id: The post id
 * @param string $type: The post type (post, page, tkt-event, ...)
 * @param string $lang: The desired language
 * @param string $default: default value
 *
 * @return string: The slug in the desired language
 */
function tkt_translated_slug_by_id($id, $type, $lang, $default)
{
    if (!TKT_WPML_INSTALLED) {
        return $default;
    }

    // get the post ID in $lang
    $post_id = icl_object_id($id, $type, FALSE, $lang);
    // get the post object
    $post_obj = get_post($post_id);

    return $post_obj->post_name;
}

/**
 * Return a list of overridable scss variables.
 */
function get_overridable_scss_variables()
{
    return [
        'text_color' => '#000',
        'error_color' => '#ce6060',
        'link_color' => '#007BFF',
        'active_color' => '#1C99E2',
        'btn_bg_color' => '#121212',
        'btn_text_color' => '#FFFFFF',
        'input_bg_color' => '#FFFFFF',
        'input_text_color' => '#000000',
        'section_padding' => '20px',
        'light_section_bg_color' => '#F0F0F0',
        'light_section_text_color' => '#000',
        'dark_section_bg_color' => '#212121',
        'dark_section_text_color' => '#FFF',
        'badge_bg_color' => '#FFF',
        'badge_text_color' => '#000',
        'badge_active_bg_color' => '#1C99E2',
        'badge_active_text_color' => '#FFF',
        'badge_title_bg_color' => '#000',
        'badge_title_text_color' => '#FFF',
        'badge_value_bg_color' => '#333',
        'badge_value_text_color' => '#FFF',
        'border_radius' => '4px',
    ];
}

/**
 * Compile scss override file with the variables
 * provided by `get_overridable_scss_variables()`.
 */
function tkt_compile_scss_override()
{
    $scss = new Compiler();
    $scss->setImportPaths(plugin_dir_path(TKT_APP).'front/build/');
    $scss->setFormatter('ScssPhp\ScssPhp\Formatter\Crunched');

    $variables = get_overridable_scss_variables();
    foreach ($variables as $name => $value) {
        $variables[$name] = TKTApp::get_instance()->get_config('advanced.'.$name, $value);
    }
    $scss->setVariables($variables);

    $output_path = TKT_OVERRIDE_DIR.'/tkt_override.css';
    file_put_contents($output_path, $scss->compile('@import "override.scss";'));
}
