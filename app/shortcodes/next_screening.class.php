<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Screening;
use Ticketack\Core\Models\Event;
use Ticketack\Core\Base\TKTApiException;

/**
 * Next screening shortcode
 *
 * Usage:
 *
 * [tkt_next_screening output="[title|date|time|datetime|venue|poster]"]
 */
class NextScreeningShortcode extends TKTShortcode
{
    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_next_screening";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        static $screening = null;

        $output         = isset($atts['output']) ? $atts['output'] : null;
        $allowed_fields = ['title','date','time','datetime','venue','poster'];

        if (!empty($output) && !in_array($output, $allowed_fields)) {
            return sprintf(
                '%s is not allowed. Please use one of %s.',
                $output,
                implode('|', $allowed_fields)
            );
        }

        if (is_null($screening)) {
            $screening = current(Screening::all()
                ->in_the_future()
                ->filter_pricings_for_sellers(['eshop'])
                ->order_by_start_at()
                ->get('_id,title,start_at,stop_at,cinema_hall.name,cinema_hall._id,films,opaque'));
        }

        return TKTTemplate::render(
            'next_screening/next_screening',
            (object)[
                'screening' => $screening,
                'output'    => $output
            ]
        );
    }
}
