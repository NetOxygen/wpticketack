<?php
namespace Ticketack\Core\Models;

use Ticketack\Core\Base\TKTModel;

/**
 * Ticketack Engine TKTSettings.
 */

class Settings extends TKTModel implements \JsonSerializable
{
    /**
     * @override
     */
    public static $resource = 'settings';

    protected $_id        = null;
    protected $created_at = null;
    protected $updated_at = null;
    protected $_version   = null;

    protected $pos         = [];
    protected $eshop       = [];
    protected $mobile      = [];
    protected $payment     = [];
    protected $delivery    = [];
    protected $customer    = [];
    protected $images      = [];
    protected $l10n        = [];
    protected $maccsbox    = [];
    protected $pdf         = [];

    /**
     * Get a fresh version of the settings, merge them with
     * the app config, if any, and save the all on the filesystem.
     *
     * @param string $path: The location on the filesystem where to persist the config
     * @param array $app_config: The app config, if any
     *
     * @return boolean
     */
    public static function refresh(String $path, array $app_config = [])
    {
        $settings      = static::find('default')->toArray();
        $config        = array_merge_recursive($settings, $app_config);
        $config_array  = var_export($config, true);
        $config_string = sprintf(
            "<?php\n// **DO NOT EDIT** config generated by config:generate on %s\n\$ticketack_config = %s;",
            date("Y-m-d H:i:s"),
            $config_array
        );

        $success = file_put_contents($path, $config_string);
        if ($success) {
            opcache_invalidate($path);
        }

        return $success;
    }

    /**
     * @override
     */
    public function __construct(array &$properties = [])
    {
        if (array_key_exists('created_at', $properties)) {
            $this->created_at = iso8601_to_datetime($properties['created_at']);
            unset($properties['created_at']);
        }
        if (array_key_exists('updated_at', $properties)) {
            $this->updated_at = iso8601_to_datetime($properties['updated_at']);
            unset($properties['updated_at']);
        }

        parent::__construct($properties);
    }

    public function _id()
    {
        return $this->_id;
    }

    public function created_at()
    {
        return $this->created_at;
    }

    public function updated_at()
    {
        return $this->updated_at;
    }

    public function _version()
    {
        return $this->_version;
    }

    public function images()
    {
        return (array)$this->images;
    }

    /**
     * Update this model's properties.
     *
     * @param $properties
     *   An array of new properties.
     *
     * @throws
     */
    public function update_properties($properties)
    {
        $reflect  = new ReflectionClass($this);

        foreach ($properties as $name => $val) {
            if (!$reflect->hasProperty($name)) {
                continue;
            }

            $p = $reflect->getProperty($name);
            if (!$p->isStatic()) {
                if ($name === 'created_at' || $name === 'updated_at') {
                    $this->$name = iso8601_to_datetime($val);
                } else {
                    $this->$name = $val;
                }
            }
        }
    }

    /**
     * Handle properties JSONification, like DateTime to ISO8601.
     */
    public function jsonSerialize()
    {
        $ret = [
            '_id'         => $this->_id(),
            'created_at'  => $this->created_at(),
            'updated_at'  => $this->updated_at(),
            '_version'    => $this->_version(),
            'pos'         => (object)$this->pos,
            'eshop'       => (object)$this->eshop,
            'mobile'      => (object)$this->mobile,
            'customer'    => (object)$this->customer,
            'images'      => (array)$this->images,
            'payment'     => (object)$this->payment,
            'delivery'    => (object)$this->delivery,
            'l10n'        => (object)$this->l10n,
            'maccsbox'    => (object)$this->maccsbox,
            'pdf'         => (object)$this->pdf,
        ];

        if (is_object($ret['created_at'])) {
            $ret['created_at']  = datetime_to_iso8601($this->created_at);
        }

        if (is_object($ret['updated_at'])) {
            $ret['updated_at']  = datetime_to_iso8601($this->created_at);
        }

        return $ret;
    }

    /**
     * get an array representation
     */
    public function toArray()
    {
        return json_decode(json_encode($this), /*$assoc*/true);
    }
}
