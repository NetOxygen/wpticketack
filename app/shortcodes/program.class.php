<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Screening;
use Ticketack\Core\Models\Event;
use Ticketack\Core\Base\TKTApiException;

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
    const CHRONO_ORDER       = 'chrono';
    const ALPHA_ORDER        = 'alpha';
    const SCREENINGS_FILTER  = 'screenings';
    const EVENTS_FILTER      = 'events';
    const DATE_TODAY         = 'today';

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
        $template      = isset($atts['template']) ? $atts['template'] : static::LIST_TEMPLATE;
        $layout        = isset($atts['layout']) ? $atts['layout'] : static::SCREENINGS_LAYOUT;
        $tags          = isset($atts['tags']) ? explode(',', $atts['tags']) : null;
        $section_ids   = isset($atts['section_ids']) ? explode(',', $atts['section_ids']) : null;
        $xsection_ids  = isset($atts['xsection_ids']) ? explode(',', $atts['xsection_ids']) : null;
        $item_width    = isset($atts['item_width']) ? intval($atts['item_width']) : static::DEFAULT_ITEM_WIDTH;
        $order         = isset($atts['order']) ? $atts['order'] : ($layout == static::SCREENINGS_LAYOUT ? static::CHRONO_ORDER : static::ALPHA_ORDER);
        $top_filter    = isset($atts['top_filter']) ? $atts['top_filter'] : null;
        $day           = tkt_get_url_param('d', (isset($atts['day']) ? $atts['day'] : null));
        $places        = isset($atts['places']) ? explode(',', $atts['places']) : [];
        $filter_fields = isset($atts['filter_fields']) ? explode(',', $atts['filter_fields']) : [];

        try {
            $query = Screening::all()
                // TODO: We should not filter on future screenings only for festivals !!!
                ->in_the_future()
                ->filter_pricings_for_sellers(['eshop'])
                ->order_by_start_at();

            if (!empty($day)) {
                if ($day === static::DATE_TODAY) {
                    $day = date("Y-m-d");
                }
                $min   = tkt_iso8601_to_datetime($day.'T00:00:00Z');
                $max   = tkt_iso8601_to_datetime($day.'T23:59:59Z');
                $query = $query
                    ->start_at_gte($min)
                    ->start_at_lte($max);
            }

            if (!empty($section_ids)) {
                $query = $query->in_movie_sections($section_ids);
            }

            if (static::CHRONO_ORDER == $order) {
                $query = $query->order_by_start_at();
            }

            $fields = [
                '_id',
                'title',
                'start_at',
                'stop_at',
                'cinema_hall.name',
                'cinema_hall._id',
                'films._id',
                'films.title',
                'films.section',
                'films.opaque.sections',
                'films.opaque.tags',
                'films.opaque.categories',
                'films.opaque.duration',
                'films.opaque.posters',
                'films.opaque.people',
                'films.opaque.countries',
                'films.opaque.languages',
                'films.opaque.film_types',
                'films.opaque.year',
                'films.opaque.premiere_type',
                'opaque'
            ];
            $screenings = $query->get(implode(',', $fields));

            if (!empty($places)) {
                $screenings = array_filter($screenings, function ($s) use ($places) {
                    return in_array($s->place()->_id(), $places);
                });
            }

            switch ($layout) {
                case static::SCREENINGS_LAYOUT:
                    if (!empty($tags)) {
                        $screenings = array_filter($screenings, function ($s) use ($tags) {
                            $screening_tags = $s->opaque('tags', []);
                            foreach ($screening_tags as $tag) {
                                if (in_array($tag[TKT_LANG], $tags)) {
                                    return true;
                                }
                            }
                            return false;
                        });
                    }

                    if (!empty($xsection_ids)) {
                        $screenings = array_filter($screenings, function ($s) use ($xsection_ids) {
                            $movies = $s->movies();
                            foreach ($movies as $m) {
                                $sections = $m->opaque('sections');
                                foreach ($sections as $sec) {
                                    if (in_array($sec['id'], $xsection_ids)) {
                                        return false;
                                    }
                                }
                            }
                            return true;
                        });
                    }

                    // TODO: We could improve this by filtering the screenings
                    // from the engine
                    $filter = "";
                    if (isset($atts['filter'])) {
                        $filter     = $atts['filter'];
                        $screenings = array_filter($screenings, function ($s) use ($filter) {
                            $movies = $s->movies();
                            foreach ($movies as $m) {
                                if ($m->opaque('type') == $filter) {
                                    return true;
                                }
                            }
                            return false;
                        });
                    }

                    $service_filters = [];
                    if (isset($atts['service_filters'])) {
                        $service_filters = explode(',', $atts['service_filters']);
                        $screenings = array_filter($screenings, function ($s) use ($service_filters) {
                            $movies = $s->movies();
                            foreach ($movies as $m) {
                                if ($m->opaque('type') == 'service' &&
                                    in_array($m->opaque('service_type'), $service_filters)) {
                                    return true;
                                }
                            }
                            return false;
                        });
                    }

                    return TKTTemplate::render(
                        'program/'.$template.'/screenings',
                        (object)[
                            'screenings'        => array_values($screenings),
                            'item_width'        => $item_width,
                            'filter'            => $filter,
                            'filter_fields'     => $filter_fields,
                            'service_filters'   => $service_filters,
                            'top_filter'        => $top_filter,
                            'top_filter_values' => ($top_filter == static::EVENTS_FILTER ? Event::from_screenings($screenings) : [])
                        ]
                    );

                case static::EVENTS_LAYOUT:
                    $events = Event::from_screenings($screenings);
                    if (!empty($tags)) {
                        $events = array_filter($events, function ($e) use ($tags) {
                            $event_tags = $e->opaque('tags', []);
                            foreach ($event_tags as $tag) {
                                if (in_array($tag[TKT_LANG], $tags)) {
                                    return true;
                                }
                            }
                            return false;
                        });
                    }

                    if (!empty($section_ids)) {
                        $events = array_filter($events, function ($e) use ($section_ids) {
                            $sections = $e->opaque('sections');
                            foreach ($sections as $sec) {
                                if (in_array($sec['id'], $section_ids)) {
                                    return true;
                                }
                            }
                            return false;
                        });
                    }
                    if (!empty($xsection_ids)) {
                        $events = array_filter($events, function ($e) use ($xsection_ids) {
                            $sections = $e->opaque('sections');
                            foreach ($sections as $sec) {
                                if (in_array($sec['id'], $xsection_ids)) {
                                    return false;
                                }
                            }
                            return true;
                        });
                    }
                    // remove_accents is in wp-includes/formatting.php
                    if ($order === static::ALPHA_ORDER) {
                        usort($events, function ($a, $b) {
                            return strcmp(
                                strtolower(remove_accents($a->localized_title_or_original(TKT_LANG))),
                                strtolower(remove_accents($b->localized_title_or_original(TKT_LANG)))
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
                            'events'            => array_values($events),
                            'item_width'        => $item_width,
                            'filter_fields'     => $filter_fields,
                            'top_filter'        => $top_filter,
                            'top_filter_values' => ($top_filter == static::SCREENINGS_FILTER ? $screenings : [])
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
