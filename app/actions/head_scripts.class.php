<?php
/**
 * Head Scripts action
 */
class HeadScriptsAction extends TKTAction
{
    /**
     * Get this action tag(s)
     *
     * @return mixed: A single tag (which will call the <code>run</code> method)
     *                or an associative array with the tag as key and the method to call as value.
     */
    public function get_tag()
    {
        return "wp_head";
    }

    /**
     * Run this action
     */
    public function run()
    {
        $app = TKTApp::get_instance();
        echo '
        <script>
            var require = {
                urlArgs: "v=1",
                config: {
                    "assets": {
                        version: "1",
                        base_url: "'.get_site_url().'/"
                    },
                    "config": {
                        "engine_uri": "'.$app->get_config('base.engine_uri').'/",
                        "eshop_uri": "'.$app->get_config('base.eshop_uri').'/",
                        "api_key": "'.$app->get_config('base.api_key').'",
                        "program_url": "'.program_url().'",
                        "cart_url": "'.cart_url().'",
                        "cart_reset_url": "'.cart_reset_url().'",
                    }
                }
            };
        </script>
        <script
          data-main="/wp-content/plugins/wpticketack/front/build/js/app"
          src="/wp-content/plugins/wpticketack/front/node_modules/requirejs/require.js?v=1"></script>
';
    }
}
