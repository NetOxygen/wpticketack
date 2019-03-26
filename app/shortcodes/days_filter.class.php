<?php
/**
 * Events/Screenings filter shortcode
 *
 * Usage:
 *
 * [tkt_days_filter filter-*="*"]
 */
class DaysFilterShortcode extends TKTShortcode
{
    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_days_filter";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        $min = isset($atts['min_start_at']) ?
            _iso8601_to_datetime($atts['min_start_at']) :
            _iso8601_to_datetime(date('now'));
        $max = isset($atts['max_start_at']) ?
            _iso8601_to_datetime($atts['max_start_at']) :
            _iso8601_to_datetime(date('now'));

        $active = get_url_param('d');

        $days    = [];
        $current = clone($min);
        while ($current < $max) {
            array_push($days, clone($current));
            $current->modify('+1 day');
        }

        return TKTTemplate::render(
            'program/days_filter',
            (object)[
                "days"   => $days,
                "active" => $active
            ]
        );
    }
}
