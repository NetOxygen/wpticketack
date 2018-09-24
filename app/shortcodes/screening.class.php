<?php
/**
 * Screening shortcode
 *
 * Usage:
 *
 * [tkt_screening]
 *
 * The screening id is retrieved from the query var id
 */
class ScreeningShortcode extends TKTShortcode
{
    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_screening";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        $screening_id = get_query_var('id');
        if (empty($screening_id)) {
            return null;
        }

        try {
            $screening = Screening::find($screening_id);

            if (empty($screening)) {
                return null;
            }

            return TKTTemplate::render(
                'screening/screening',
                (object)[ 'screening' => $screening ]
            );
        } catch (TKTApiException $e) {
            return sprintf(
                "Impossible de charger l'événement: %s",
                $e->getMessage()
            );
        }
    }
}
