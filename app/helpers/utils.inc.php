<?php /**
 * Utils functions
 */

/**
 * Formats a DateTime in a full date and time format
 *
 * @param $dt
 *   The DateTime object to format.
 *
 * @return
 *   A string.
 */
function datetime_to_s($dt)
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
function date_to_s($dt)
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
function date_to_min_s($dt)
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
function date_and_time_to_min_s($dt)
{
    $fmt = "%e %B %H:%M";
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
function _iso8601_to_datetime($str)
{
    $i = strtotime($str);
    $d = new DateTime();
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
function _datetime_to_iso8601($d)
{
    return $d->format(DateTime::ATOM);
}

/**
 * Get a plugin asset url
 *
 * @param string $path: The file path, relative to plugin root dir
 *
 * @return string
 */
function assets_url($path)
{
    return plugin_dir_url( TKT_BASE ) . 'wpticketack/front/' . $path;
}

/**
 * Get the Program page url
 *
 * @param string $query
 *
 * @return string
 */
function program_url($query = "")
{
    $path = TKTApp::get_instance()->get_config('pages.program');
    if (!empty($query)) {
        $path .= '?'.$query;
    }

    return get_site_url(
        /*$blog_id*/null,
        /*$path*/$path
    );
}

/**
 * Get the Cart page url
 *
 * @return string
 */
function cart_url()
{
    return get_site_url(
        /*$blog_id*/null,
        TKTApp::get_instance()->get_config('pages.cart')
    );
}

/**
 * Get the eshop buy pass page url
 *
 * @return string
 */
function buy_pass_url()
{
    return sprintf(
        "%s/pass/new",
        TKTApp::get_instance()->get_config('base.eshop_uri')
    );
}

/**
 * Get the Cart page url
 *
 * @return string
 */
function cart_reset_url()
{
    return sprintf(
        "%s/cart/reset",
        TKTApp::get_instance()->get_config('base.eshop_uri')
    );
}

/**
 * Get an event details url
 *
 * @param Event $event
 *
 * @return string
 */
function event_details_url($event)
{
	if (WPML_INSTALLED) {
		$slug = get_event_slug($event, LANG);
		$page = get_page_by_path($slug, OBJECT, 'tkt-event');
		return apply_filters('wpml_permalink', get_permalink($page->ID));
	}

    return get_site_url(
        /*$blog_id*/null,
        sprintf(
            '%s/%s',
            'events',
  	    get_event_slug($event, LANG)
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
function event_book_url($event, $screening = null)
{
	if (WPML_INSTALLED) {
		$slug = get_event_slug($event, LANG);
		$page = get_page_by_path($slug, OBJECT, 'tkt-event');

		return sprintf(
            "%s/?book=1%s",
			apply_filters('wpml_permalink', get_permalink($page->ID)),
            (!is_null($screening) ? '&s_id='.$screening->_id() : '')
		);
	}

    return get_site_url(
        /*$blog_id*/null,
        sprintf(
            "%s/%s/?book=1%s",
            'events',
	    get_event_slug($event, LANG),
            (!is_null($screening) ? '&s_id='.$screening->_id() : '')
        )
    );
}

/**
 * Get a screening details url
 *
 * @param Event $screening
 *
 * @return string
 */
function screening_details_url($screening)
{
    if (LANG == 'fr') {
	    return get_site_url(
		/*$blog_id*/null,
		sprintf(
		    "%s/%s_%s",
		    TKTApp::get_instance()->get_config('pages.screening'),
		    $screening->_id(),
		    sanitize_title($screening->title('original'))
		)
	    );
     } else {
	    return get_site_url(
		/*$blog_id*/null,
		sprintf(
		    "%s/%s/%s_%s",
                    LANG,
		    TKTApp::get_instance()->get_config('pages.screening'),
		    $screening->_id(),
		    sanitize_title($screening->title('original'))
		)
	    );
    }
}

/**
 * Get a screening book url
 *
 * @param Event $screening
 *
 * @return string
 */
function screening_book_url($screening)
{
    if (!$screening) {
        return "";
    }

    if (LANG == 'fr') {
	    return get_site_url(
		/*$blog_id*/null,
		sprintf(
		    "%s/%s_%s?book=1",
		    TKTApp::get_instance()->get_config('pages.screening'),
		    $screening->_id(),
		    sanitize_title($screening->title('original'))
		)
	    );
     } else {
	    return get_site_url(
		/*$blog_id*/null,
		sprintf(
		    "%s/%s/%s_%s?book=1",
                    LANG,
		    TKTApp::get_instance()->get_config('pages.screening'),
		    $screening->_id(),
		    sanitize_title($screening->title('original'))
		)
	    );
    }
}

/**
 * Extract a Youtube video ID from an URL
 * See https://gist.github.com/ghalusa/6c7f3a00fd2383e5ef33
 *
 * @param string: Youtube video url
 *
 * @return string: Video ID
 */
function yt_video_id($yt_url)
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
 * $my_obj = id(new MyObj())->chainable_method();
 */
function id($obj)
{
    return $obj;
}

if (!function_exists('h')) {
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
    function h($string)
    {
        return htmlspecialchars($string, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
}

if (!function_exists('html')) {
    /**
     * Sanitize a string for display but allows some html tags.
     *
     * Less safe than h() which strips everything.
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
    function html($string, $tags_to_keep = '<p><br><b><i><em><a>')
    {
        return strip_tags($string, $tags_to_keep);
    }
}

function get_ages()
{
    return [_("Pas de réponse"), '-18', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
}

function get_sexes()
{
    return ['n/c' => _("Pas de réponse"), 'f' => _("Féminin"), 'm' => _("Masculin"), 'o' => _("Autre")];
}

function pass_required_fields($type)
{
    $required_fields = TKTApp::get_instance()->get_config('ticketack.requested_pass_owner_data');
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
function is_uuidv4($str)
{
    $regexp = '/^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-4[A-Fa-f0-9]{3}-[ABab89][A-Fa-f0-9]{3}-[A-Fa-f0-9]{12}$/';
    return (preg_match($regexp, $str) ? true : false);
}

if (!function_exists('img_proxy_url')) {
    function img_proxy_url($remote_url, $width = '-', $height = '-')
    {
        $proxy_img_key  = TKTApp::get_instance()->get_config('images.proxy.proxy_img_key');
        $proxy_img_host = TKTApp::get_instance()->get_config('images.proxy.proxy_img_host');

        if (empty($proxy_img_key) || empty($proxy_img_host)) {
            return $remote_url;
        }

        if (!filter_var($remote_url, FILTER_VALIDATE_URL)) {
            return false;
        }

        $exploded_url = parse_url($remote_url);
        $path         = sprintf(
            "image/%sx%s/%s/%s%s",
            $width,
            $height,
            $exploded_url['scheme'],
            $exploded_url['host'],
            $exploded_url['path']
        );
        $key = base64url_encode(md5('/' . $path . ' ' . $proxy_img_key, true));

        $parts = [];

        $parts['scheme'] = 'https';
        $parts['host']   = $proxy_img_host;
        $parts['path']   = $path;
        $parts['query']  = http_build_query(['key' => $key]);

        return http_build_url($parts);
    }
}

if (!function_exists('base64url_encode')) {
    /**
     * base64url variants,
     * stolen from http://us3.php.net/manual/en/function.base64-encode.php#103849
     */
    function base64url_encode($data)
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }
}

if (!function_exists('base64url_decode')) {
    function base64url_decode($data)
    {
        return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
    }
}

/**
 * Wrap Wordpress __ function
 */
function t($str) {
    return __($str, 'wpticketack');
}


function get_event_slug($event, $lang)
{
    $title = $event->title($lang);
    $slug  = sanitize_title($title).($lang === SyncHelper::DEFAULT_LANG ? '' : '-'.$lang);

    return $slug;
}

// Keep in sync with : app/controllers/screening.class.php in eshop
function people_activities($activity = null, $lang = null)
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
