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
    const SCREENINGS_LAYOUT = 'screenings';
    const EVENTS_LAYOUT     = 'events';

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
        $layout = isset($atts['layout']) ? $atts['layout'] : static::SCREENINGS_LAYOUT;

        try {
            $screenings = Screening::all()
                ->in_the_future()
                ->order_by_start_at()
                ->get('_id,title,start_at,stop_at,films,opaque');

            switch ($layout) {
                case static::SCREENINGS_LAYOUT:
                    return TKTTemplate::render(
                        'program/screenings',
                        (object)[ 'screenings' => $screenings ]
                    );

                case static::EVENTS_LAYOUT:
                    $events = Event::from_screenings($screenings);
                    // TODO: We could improve this by filtering the screenings
                    // from the engine
                    if (isset($atts['filter'])) {
                        $type   = $atts['filter'];
                        $events = array_filter($events, function ($e) use ($type) {
                            return $e->opaque('type') == $type;
                        });
                    }

                    return TKTTemplate::render(
                        'program/events',
                        (object)[ 'events' => $events ]
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
