<?php
/**
 * Rewrite filter
 */
class RewriteFilter extends TKTFilter
{
    /**
     * Get this filter tag
     *
     * @return string: The tag to use
     */
    public function get_tag()
    {
        //return "init";
        return "rewrite_rules_array";
    }

    /**
     * Run this filter
     */
    public function run($args = null)
    {
        $existing_rules = $args;

        $app = TKTApp::get_instance();

        $event_slug     = $app->get_config('pages.event');
        $screening_slug = $app->get_config('pages.screening');

        $new_rules = [
            // Be careful, must stay in sync with FlushRewriteFilter::run()
            $event_slug.'/(\d*)-(.*)/book' => 'index.php?pagename='.$event_slug.'&id=$matches[1]&book=1',
            $event_slug.'/(\d*)-(.*)$'      => 'index.php?pagename='.$event_slug.'&id=$matches[1]',
            $screening_slug.'/(\d*)-(.*)$'  => 'index.php?pagename='.$screening_slug.'&id=$matches[1]'
        ];

        foreach ($new_rules as $pattern => $target) {
            add_rewrite_rule($pattern, $target, 'top');
        }

        return array_merge($new_rules, $existing_rules);
    }
}
