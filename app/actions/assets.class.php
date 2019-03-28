<?php
/**
 * Assets action
 */
class AssetsAction extends TKTAction
{
    /**
     * Get this action tag(s)
     *
     * @return mixed: A single tag (which will call the <code>run</code> method)
     *                or an associative array with the tag as key and the method to call as value.
     */
    public function get_tag()
    {
        return "wp_enqueue_scripts";
    }

    /**
     * Run this action
     */
    public function run()
    {
        wp_enqueue_style('tkt-main-css', tkt_assets_url('build/styles/main.css'));
        wp_enqueue_script('jquery');
    }
}
