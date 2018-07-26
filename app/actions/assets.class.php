<?php
/**
 * Assets action
 */
class AssetsAction extends TKTAction
{
    /**
     * Get this action tag
     *
     * @return string: The tag to use
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
      wp_enqueue_style('tkt-main-css', assets_url('build/styles/main.css'));
    }
}
