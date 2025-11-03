<?php

namespace Ticketack\WP\Helpers;

use Ticketack\WP\TKTApp;
use Ticketack\Core\Models\Settings;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Make some health checks
 */
class HealthHelper
{
    /**
     * Run some health checks
     *
     * @return HealthCheckResult[]
     */
    public static function check(): array
    {
        return [
            static::_checkConfigFile(),
            static::_checkVersion(),
            static::_checkTemplateOverrides(),
        ];
    }

    /**
     * Check if the cached config file exists and
     * is up to date
     *
     * @return HealthCheckResult
     */
    protected static function _checkConfigFile()
    {
        $cached_config_path = TKT_APP.'/config.inc.php';
        if (!file_exists($cached_config_path)) {
            return new HealthCheckResult('cached_config', false, 'missing');
        }

        $version  = TKTApp::get_instance()->get_config('_version');
        $settings = Settings::find(
            'default',
            /*fields*/'_version',
            /*$allow_cached_results*/false
        );
        if ($version !== $settings->_version()) {
            return new HealthCheckResult('cached_config', false, 'outdated');
        }

        return new HealthCheckResult('cached_config', true);
    }

    /**
     * Check if the module is up to date
     *
     * @return HealthCheckResult
     */
    protected static function _checkVersion()
    {
        if (!function_exists('plugins_api')) {
            require_once( ABSPATH . 'wp-admin/includes/plugin-install.php' );
        }

        // get current version
        $pluginData     = get_plugin_data(TKT_PLUGIN_FILE);
        $currentVersion = $pluginData['Version'];

        // get last available version
        $args  = ['slug' => 'ticketack', 'fields' => [ 'version' => true ]];
        $infos = plugins_api('plugin_information', $args);
        if (is_wp_error($infos)) {
            return new HealthCheckResult('version', false, $infos->get_error_message());
        }

        if (empty($infos->version)) {
            return new HealthCheckResult('version', false, 'Could not get last version');
        }

        $lastVersion = $infos->version;
        if ($lastVersion !== $currentVersion) {
            return new HealthCheckResult('version', false, sprintf('%s / %s', $currentVersion, $lastVersion));
        }

        return new HealthCheckResult('version', true, $currentVersion);
    }

    /**
     * Check if the template overrides are outdated
     *
     * @return HealthCheckResult
     */
    protected static function _checkTemplateOverrides()
    {
        $overrides = TKTTemplate::get_overrides_versions();
        if (empty($overrides)) {
            return (new HealthCheckResult('templates.outdated', true))->ignore();
        }
        $outdated  = array_filter($overrides, fn ($v) => $v->current !== $v->override);

        if (empty($outdated)) {
            return new HealthCheckResult('templates.outdated', true);
        }

        $details = implode(' - ', array_keys($outdated));
        return new HealthCheckResult('templates.outdated', false, $details);
    }
}

class HealthCheckResult implements \JsonSerializable
{
    /**
     * @var string
     */
    protected $test;

    /**
     * @var bool
     */
    protected $result = false;

    /**
     * @var bool
     */
    protected $ignored = false;

    /**
     * @var string
     */
    protected $details = '';


    public function __construct(string $test, bool $result, string $details = '')
    {
        $this->test    = $test;
        $this->result  = $result;
        $this->details = $details;
    }

    public function ignore()
    {
        $this->ignored = true;
        return $this;
    }

    /**
     * Handle properties JSONification
     */
    public function jsonSerialize() : array
    {
        return [
            'test'    => $this->test,
            'result'  => $this->result,
            'ignored' => $this->ignored,
            'details' => $this->details,
        ];
    }
}
