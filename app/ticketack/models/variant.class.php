<?php
/**
 * Ticketack Engine helper for article variant (used in Articles).
 *
 * @notes
 *  Instances are *immutable*.
 */

class Variant implements JsonSerializable
{
    protected $key = null;
    protected $name = null;
    protected $stock = null;
    protected $stock_factor = null;
    protected $ean13 = null;
    protected $sku = null;
    protected $price = [];
    protected $purchasing_price = [];
    protected $value = [];
    protected $VAT = 0;

    /**
     * @throw Exception
     */
    public function __construct(array &$properties = [])
    {
        $this->name = $properties['name'];
        $this->stock = $properties['stock'];
        $this->stock_factor = $properties['stock_factor'];
        $this->ean13 = $properties['ean13'];
        $this->sku = $properties['ean13'];

        $this->price = ['CHF' => CHF::parse($properties['price']['CHF'])];
        if (array_key_exists('value', $properties) && isset($properties['value']['CHF'])) {
            $this->value = ['CHF' => CHF::parse($properties['value']['CHF'])];
        } else {
            $this->value = $this->price;
        }
        $this->purchasing_price = ['CHF' => CHF::parse($properties['purchasing_price']['CHF'])];

        $VAT = floatval($properties['VAT']);
        if ($VAT < 0 || $VAT > 100) {
            throw new InvalidArgumentException("$VAT: invalid VAT value");
        }
        $this->VAT = $VAT;
    }

    /* setters */

    /**
     * Set this pricing key.
     *
     * @param string $key
     *
     * @return Variant
     */
    public function set_key($key)
    {
        $this->key = $key;

        return $this;
    }

    /* getters */

    public function key()
    {
        return $this->key;
    }

    public function name($lang)
    {
        return isset($this->name[$lang]) ? $this->name[$lang] : null;
    }

    public function stock()
    {
        return $this->stock;
    }

    public function stock_factor()
    {
        return $this->stock_factor;
    }

    public function ean13()
    {
        return $this->ean13;
    }

    public function sku()
    {
        return $this->sku;
    }

    public function price($currency)
    {
        return isset($this->price[$currency]) ? $this->price[$currency] : null;
    }

    public function value($currency)
    {
        return isset($this->value[$currency]) ? $this->value[$currency] : null;
    }

    public function purchasing_price($currency)
    {
        return isset($this->purchasing_price[$currency]) ? $this->purchasing_price[$currency] : null;
    }

    public function VAT()
    {
        return $this->VAT;
    }

    public function jsonSerialize()
    {
        $ret = [
            'name'             => $this->name,
            'stock'            => $this->stock,
            'stock_factor'     => $this->stock_factor,
            'ean13'            => $this->ean13,
            'sku'              => $this->sku,
            'price'            => $this->price,
            'value'            => $this->value,
            'purchasing_price' => $this->purchasing_price,
            'VAT'              => $this->VAT(),
        ];

        return $ret;
    }
}
