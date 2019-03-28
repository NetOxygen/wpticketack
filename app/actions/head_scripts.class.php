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
            // moment locale must be injected globally because it\'s needed
            // before the config initialization
            window.moment_locale = "'.substr(get_locale(), 0, 2).'";
            var require = {
                urlArgs: "v='.TKT_ASSETS_VERSION.'",
                config: {
                    "assets": {
                        version: "1",
                        base_url: "'.get_site_url().'/"
                    },
                    "config": {
                        "engine_uri": "'.$app->get_config('ticketack.engine_uri').'/",
                        "eshop_uri": "'.$app->get_config('ticketack.eshop_uri').'/",
                        "api_key": "'.$app->get_config('ticketack.api_key').'",
                        "program_url": "'.tkt_program_url().'",
                        "cart_url": "'.tkt_cart_url().'",
                        "cart_reset_url": "'.tkt_cart_reset_url().'",
                    },
                    "i18n": '.json_encode(LocalesHelper::dump_js_locales(), JSON_PRETTY_PRINT).'
                },
                paths: {
                    "app": "'.tkt_assets_url('build/js/app').'"
                }
            };
        </script>
        <script src="'.tkt_assets_url('build/js/require.min.js').'"></script>
        <script>
            if (typeof jQuery === "function") {
                define("jquery", function () { return jQuery; });
                /* Wordpress version of jQuery doesn\'t expose the $ global object */
                window.$ = jQuery;
            }
            require(["app"]);
        </script>
';
    }
}
