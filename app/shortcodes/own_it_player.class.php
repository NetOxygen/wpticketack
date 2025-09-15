<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Screening;
use Ticketack\Core\Models\Event;
use Ticketack\Core\Base\TKTApiException;

/**
 * OwnIt player shortcode
 *
 * Usage:
 *
 * [tkt_own_it_player
 *      provider="provider"
 *      id="screening_id"
 *      own_it_id_prefix="own_it_id_int|own_it_id_dev|own_it_id_prod"
 *      allowed_ticket_types="comma separated list of allowed ticket types" (optional)
 * ]]
 *
 */
class OwnItPlayerShortcode extends TKTShortcode
{
    const OWN_IT_SOURCE = 'dac-player';

    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_own_it_player";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        $integrations = TKTApp::get_instance()->get_config('integrations', []);
        if (!isset($integrations['own_it'])) {
            return null;
        }
        $integration          = (object)$integrations['own_it'];
        $allowed_ticket_types = implode(',', $integration->codes_creation['tickettypes']);

        $id = isset($atts['id']) ? $atts['id'] : null;
        if (empty($id)) {
            return null;
        }

        try {
            $screening = Screening::find($id);
            if (empty($screening)) {
                return null;
            }

            $refs = array_filter($screening->refs(), function ($ref) {
                return isset( $ref['source']) && static::OWN_IT_SOURCE === $ref['source'];
            });
            if (count($refs) == 0) {
                return null;
            }

            $product_id = (int)end(explode('/', end($refs)['id']));
            if ($product_id == 0) {
                return null;
            }

            return TKTTemplate::render(
                'own_it/player',
                (object)[
                    'screening'            => $screening,
                    'allowed_ticket_types' => $allowed_ticket_types,
                    'product_id'           => $product_id
                ]
            );
        } catch (TKTApiException $e) {
            return sprintf(
                "Impossible de charger le lecteur: %s",
                $e->getMessage()
            );
        }
    }
}
