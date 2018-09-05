<?php
/**
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
 * @return string
 */
function program_url()
{
    return get_site_url(
        /*$blog_id*/null,
        TKTApp::get_instance()->get_config('pages.program')
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
    return get_site_url(
        /*$blog_id*/null,
        sprintf(
            "%s/%s_%s",
            TKTApp::get_instance()->get_config('pages.event'),
            $event->_id(),
            sanitize_title($event->title('original'))
        )
    );
}

/**
 * Get an event book url
 *
 * @param Event $event
 *
 * @return string
 */
function event_book_url($event)
{
    return get_site_url(
        /*$blog_id*/null,
        sprintf(
            "%s/%s_%s/book",
            TKTApp::get_instance()->get_config('pages.event'),
            $event->_id(),
            sanitize_title($event->title('original'))
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
