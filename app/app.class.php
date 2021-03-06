<?php
namespace Ticketack\WP;

use Ticketack\Core\Base\TKTApi;

/**
 * Ticketack App
 */

class TKTApp
{
    /**
     * @var array
     *
     * Ticketack actions
     */
    protected $actions;

    /**
     * @var array
     *
     * Ticketack filters
     */
    protected $filters;

    /**
     * @var array
     *
     * Ticketack shortcodes
     */
    protected $shortcodes;

    /**
     * @var array
     *
     * Ticketack configuration
     */
    protected $config;

    /**
     * @var TKTApp
     *
     * Singleton instance
     */
    protected static $instance = null;

    /**
     * Create a singleton TKTApp instance
     *
     * @return TKTApp
     */
    public static function get_instance()
    {
        if (is_null(static::$instance)) {
            static::$instance = new static();
        }

        return static::$instance;
    }

    protected function __construct()
    {
        $this->actions    = [];
        $this->filters    = [];
        $this->shortcodes = [];

        $this->config = (object)[
            'pages'             => (array)get_option('tkt_pages'),
            'ticketack'         => (array)get_option('tkt_api'),
            'images_dimensions' => (array)get_option('tkt_images_dimensions'),
            'images_proxy'      => (array)get_option('tkt_images_proxy'),
            'pass'              => (array)get_option('tkt_pass'),
            'i18n'              => (array)get_option('tkt_i18n'),
            'advanced'          => (array)get_option('tkt_advanced')
        ];
    }

    /**
     * Register an action
     *
     * @param string $classname: The action class name
     * @param string $filename: The action filename
     */
    public function register_action($classname, $filename)
    {
        $this->actions[$classname] = $filename;
    }

    /**
     * Register a filter
     *
     * @param string $classname: The filter class name
     * @param string $filename: The filter filename
     */
    public function register_filter($classname, $filename)
    {
        $this->filters[$classname] = $filename;
    }

    /**
     * Register a shortcode
     *
     * @param string $classname: The shortcode class name
     * @param string $filename: The shortcode filename
     */
    public function register_shortcode($classname, $filename)
    {
        $this->shortcodes[$classname] = $filename;
    }

    /**
     * Start the application
     */
    public function start()
    {
        // Setup Ticketack API
        TKTApi::setup(
            $this->get_config('ticketack.engine_uri'),
            $this->get_config('ticketack.api_key')
        );

        // Instantiate actions
        foreach ($this->actions as $classname => $filename) {
            require_once(TKT_ACTIONS.'/'.$filename);
            $action = new $classname($this);
        }

        // Instantiate filters
        foreach ($this->filters as $classname => $filename) {
            require_once(TKT_FILTERS.'/'.$filename);
            $filter = new $classname($this);
        }

        // Instantiate shortcodes
        foreach ($this->shortcodes as $classname => $filename) {
            require_once(TKT_SHORTCODES.'/'.$filename);
            $shortcode = new $classname($this);
        }
    }

    public function get_config($path = null, $default = null)
    {
        if (is_null($path)) {
            return $this->config;
        }

        if (!is_array($path)) {
            $path = explode('.', $path);
        }

        $value = (array)$this->config;

        foreach ($path as $p) {
            if (!isset($value[$p])) {
                return $default;
            }

            $value = $value[$p];
        }

        return $value;
    }

    public function is_configured()
    {
        return
            !empty($this->get_config('ticketack.engine_uri')) &&
            !empty($this->get_config('ticketack.eshop_uri')) &&
            !empty($this->get_config('ticketack.api_key'));
    }
}


