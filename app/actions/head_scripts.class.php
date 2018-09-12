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
        return "wp_footer";
    }

    /**
     * Get this action priority
     *
     * @return int: Action priority
     */
    public function get_priority()
    {
        return 1000000;
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
                urlArgs: "v='.$app->get_config('assets.version').'",
                config: {
                    "assets": {
                        version: "1",
                        base_url: "'.get_site_url().'/"
                    },
                    "config": {
                        "engine_uri": "'.$app->get_config('ticketack.engine_uri').'/",
                        "eshop_uri": "'.$app->get_config('ticketack.eshop_uri').'/",
                        "api_key": "'.$app->get_config('ticketack.api_key').'",
                        "program_url": "'.program_url().'",
                        "cart_url": "'.cart_url().'",
                        "cart_reset_url": "'.cart_reset_url().'",
                    }
                },
                paths: {
                    "app": "/wp-content/plugins/wpticketack/front/build/js/app"
                }
            };
        </script>
        <script src="/wp-content/plugins/wpticketack/front/build/js/require.min.js"></script>
        <script>
            if (typeof jQuery === "function") {
                define("jquery", function () { return jQuery; });
            }
            require(["app"]);
        </script>
';
    }
}
