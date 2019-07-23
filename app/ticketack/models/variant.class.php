<?php
namespace Ticketack\Core\Models;

use Ticketack\Core\Base\CHF;

/**
 * Ticketack Engine helper for article variant (used in Articles).
 *
 * @notes
 *  Instances are *immutable*.
 */

class Variant implements \JsonSerializable
{
    protected $_id              = null;
    protected $name             = null;
    protected $stock            = null;
    protected $stock_factor     = null;
    protected $ean13            = null;
    protected $sku              = null;
    protected $price            = [];
    protected $purchasing_price = [];
    protected $value            = [];
    protected $vat              = 0;

    /**
     * @throw Exception
     */
    public function __construct(array &$properties = [])
    {
        $this->name         = $properties['name'];
        $this->stock        = $properties['stock'];
        $this->stock_factor = $properties['stock_factor'];
        $this->ean13        = isset($properties['ean13']) ? (string)$properties['ean13'] : "";
        $this->sku          = isset($properties['sku']) ? (string)$properties['sku'] : "";
        $this->price        = (object)['CHF' => CHF::parse(CHF::prepare($properties['price']['CHF']))];

        if (isset($properties['_id'])) {
            $this->_id = $properties['_id'];
        }

        if (isset($properties['value']) && isset($properties['value']['CHF'])) {
            $this->value = (object)['CHF' => CHF::parse(CHF::prepare($properties['value']['CHF']))];
        } else {
            $this->value = $this->price;
        }

        if (isset($properties['purchasing_price']) && isset($properties['purchasing_price']['CHF'])) {
            $this->purchasing_price = (object)['CHF' => CHF::parse(CHF::prepare($properties['purchasing_price']['CHF']))];
        } else {
            $this->purchasing_price = (object)['CHF' => CHF::parse('0.00')];
        }

        $vat = floatval($properties['vat']);
        if ($vat < 0 || $vat > 100) {
            throw new \InvalidArgumentException("$vat: invalid vat value");
        }
        $this->vat = $vat;
    }

    /* setters */

    /**
     * Set this pricing _id.
     *
     * @param string $_id
     *
     * @return TKTArticleVariant
     */
    public function set_id($_id)
    {
        $this->_id = $_id;

        return $this;
    }

    /* getters */

    public function _id()
    {
        return $this->_id;
    }

    public function name($lang = null)
    {
        if (is_null($lang)) {
            return $this->name;
        }

        return isset($this->name[$lang]) ? $this->name[$lang] : null;
    }

    public function stock()
    {
        return is_float($this->stock) ? (float)$this->stock : (int)$this->stock;
    }

    public function stock_factor()
    {
        return is_float($this->stock_factor) ? (float)$this->stock_factor : (int)$this->stock_factor;
    }

    public function ean13()
    {
        return !empty($this->ean13) ? (string)$this->ean13 : "";
    }

    public function sku()
    {
        return !empty($this->sku) ? (string)$this->sku : "";
    }

    public function price($currency = 'CHF')
    {
        return isset($this->price->$currency) ? $this->price->$currency : null;
    }

    public function value($currency = 'CHF')
    {
        return isset($this->value->$currency) ? $this->value->$currency : null;
    }

    public function purchasing_price($currency = 'CHF')
    {
        return isset($this->purchasing_price->$currency) ? $this->purchasing_price->$currency : null;
    }

    public function vat()
    {
        return $this->vat;
    }

    public function has_id()
    {
        return is_string($this->_id) && (strlen($this->_id) > 0);
    }

    public function jsonSerialize()
    {
        $ret = [
            'name'             => $this->name(),
            'stock'            => $this->stock(),
            'stock_factor'     => $this->stock_factor(),
            'ean13'            => $this->ean13(),
            'sku'              => $this->sku(),
            'price'            => $this->price,
            'value'            => $this->value,
            'purchasing_price' => $this->purchasing_price,
            'vat'              => $this->vat()
        ];

        if ($this->has_id()) {
            $ret['_id'] = $this->_id();
        }

        return $ret;
    }
}
