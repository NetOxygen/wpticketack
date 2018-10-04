<?php
/**
 * Program shortcode
 *
 * Usage:
 *
 * [tkt_program [layout="screenings|events"]]
 *
 * Default layout is "screenings"
 */
class ProgramShortcode extends TKTShortcode
{
    const LIST_TEMPLATE      = 'list';
    const GRID_TEMPLATE      = 'grid';
    const GALLERY_TEMPLATE   = 'gallery';
    const SCREENINGS_LAYOUT  = 'screenings';
    const EVENTS_LAYOUT      = 'events';
    const DEFAULT_ITEM_WIDTH = 12;
    const CHRONO_ORDER 		 = 'chrono';
    const ALPHA_ORDER  		 = 'alpha';

    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_program";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        $template    = isset($atts['template']) ? $atts['template'] : static::LIST_TEMPLATE;
        $layout      = isset($atts['layout']) ? $atts['layout'] : static::SCREENINGS_LAYOUT;
        $section_ids = isset($atts['section_ids']) ? $atts['section_ids'] : null;
        $item_width  = isset($atts['item_width']) ? intval($atts['item_width']) : static::DEFAULT_ITEM_WIDTH;
        $order       = isset($atts['order']) ? $atts['order'] : ($layout == static::SCREENINGS_LAYOUT ? static::CHRONO_ORDER : static::ALPHA_ORDER);

        $day = get_query_var('d');

        try {
            $query = Screening::all()
                ->in_the_future()
                ->order_by_start_at();

            if (!empty($day)) {
                $min   = _iso8601_to_datetime($day.'T00:00:00Z');
                $max   = _iso8601_to_datetime($day.'T23:59:59Z');
                $query = $query
                    ->start_at_gte($min)
                    ->start_at_lte($max);
            }

            if (!empty($section_ids)) {
                $query = $query->in_movie_sections(explode(',', $section_ids));
            }

            if (static::CHRONO_ORDER == $order) {
                $query = $query->order_by_start_at();
            }

            $screenings = $query->get('_id,title,start_at,stop_at,cinema_hall.name,films,opaque');

            switch ($layout) {
                case static::SCREENINGS_LAYOUT:
                    return TKTTemplate::render(
                        'program/'.$template.'/screenings',
                        (object)[
                            'screenings' => $screenings,
                            'item_width' => $item_width
                        ]
                    );

                case static::EVENTS_LAYOUT:
                    $events = Event::from_screenings($screenings);
                    if ($order === static::ALPHA_ORDER) {
                        usort($events, function ($a, $b) {
                            return strcmp(
                                $a->localized_title_or_original(LANG),
                                $b->localized_title_or_original(LANG)
                            );
                        });
                    }
                    // TODO: We could improve this by filtering the screenings
                    // from the engine
                    if (isset($atts['filter'])) {
                        $type   = $atts['filter'];
                        $events = array_filter($events, function ($e) use ($type) {
                            return $e->opaque('type') == $type;
                        });
                    }

                    return TKTTemplate::render(
                        'program/'.$template.'/events',
                        (object)[
                            'events' => $events,
                            'item_width' => $item_width
                        ]
                    );
            }
        } catch (TKTApiException $e) {
            return sprintf(
                "Impossible de charger le programme: %s",
                $e->getMessage()
            );
        }
    }
}
