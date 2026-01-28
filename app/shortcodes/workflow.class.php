<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Workflow runner shortcode
 *
 * Usage:
 *
 * [tkt_workflow
 *      id="workflow_id"
 *      instance="instance_slug"
 * ]
 *
 */
class WorkflowShortcode extends TKTShortcode
{
    const WORKFLOWS_HOST = 'https://kronos.ticketack.com';

    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_workflow";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        $id       = $atts['id'] ?? null;
        $instance = $atts['instance'] ?? null;
        if (empty($id) || empty($instance)) {
            return null;
        }

        $url = sprintf(
            '%s/public/%s/workflow/%s?v=%s&lang=%s',
            static::WORKFLOWS_HOST,
            $instance,
            $id,
            TKT_ASSETS_VERSION,
            TKT_LANG
        );

        return TKTTemplate::render(
            'workflow/runner',
            (object)[ 'url' => $url ]
        );
    }
}
