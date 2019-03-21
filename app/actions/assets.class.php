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
        wp_enqueue_style('tkt-main-css', assets_url('build/styles/main.css'));

        $app         = TKTApp::get_instance();
        $load_jquery = $app->get_config('advanced.load_jquery');

        if ($load_jquery == 'if_needed') {
            wp_enqueue_script('jquery', assets_url('build/js/jquery.min.js'));
        } else if ($load_jquery == 'force') {
            wp_deregister_script('jquery');
            wp_register_script('jquery', assets_url('build/js/jquery.min.js'));
            wp_enqueue_script('jquery');
        }
    }
}
