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
