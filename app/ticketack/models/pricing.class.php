<?php
namespace Ticketack\Core\Models;

use Ticketack\WP\TKTApp;
use Ticketack\Core\Base\Currency\CHF;

/**
 * Ticketack Engine helper for pricings (used in Tickettypes, Tickets and Screenings).
 *
 * @notes
 *  Instances are *immutable*.
 */

class Pricing implements \JsonSerializable
{
    protected $key         = null;
    protected $name        = null;
    protected $description = null;
    protected $price       = [];
    protected $value       = [];
    protected $VAT         = 0;
    protected $sellers     = [];
    protected $category    = null;
    protected $opaque      = null;
    protected $rules       = [];
    protected $refs        = [];
    protected $tags        = [];

    /**
     * @throw Exception
     */
    public function __construct(array &$properties = [])
    {
        $this->name = $properties['name'];
        if (array_key_exists('description', $properties)) {
            $this->description = $properties['description'];
        }

        $this->price = ['CHF' => CHF::parse($properties['price']['CHF'])];
        if (array_key_exists('value', $properties) && isset($properties['value']['CHF'])) {
            $this->value = ['CHF' => CHF::parse($properties['value']['CHF'])];
        } else {
            $this->value = $this->price;
        }

        $VAT = floatval($properties['VAT']);
        if ($VAT < 0 || $VAT > 100) {
            throw new \InvalidArgumentException("$VAT: invalid VAT value");
        }
        $this->VAT = $VAT;

        $this->sellers = $properties['sellers'];

        if (array_key_exists('category', $properties)) {
            $this->category = $properties['category'];
        }

        if (array_key_exists('opaque', $properties)) {
            $this->opaque = $properties['opaque'];
        }

        if (array_key_exists('rules', $properties)) {
            $this->rules = $properties['rules'];
        }

        if (array_key_exists('refs', $properties)) {
            $this->refs = array_map(function ($obj) {
                return new Ref($obj);
            }, $properties['refs']);
        }

        if (array_key_exists('tags', $properties)) {
            $this->tags = [];
            foreach ($properties['tags'] as $obj) {
                array_push($this->tags, new Tag($obj));
            }
            unset($properties['tags']);
        }
    }

    /* setters */

    /**
     * Set this pricing key.
     *
     * @param string $key
     *
     * @return Pricing
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

    public function description($lang)
    {
        return isset($this->description[$lang]) ? $this->description[$lang] : null;
    }

    public function price($currency = null)
    {
        $currency = $currency ?? TKTApp::get_instance()->get_config('currency', 'CHF');
        return $this->price[$currency] ?? null;
    }

    public function value($currency = null)
    {
        $currency = $currency ?? TKTApp::get_instance()->get_config('currency', 'CHF');
        return $this->value[$currency] ?? null;
    }

    public function VAT()
    {
        return $this->VAT;
    }

    public function sellers()
    {
        return $this->sellers;
    }

    public function category()
    {
        return $this->category;
    }

    public function opaque()
    {
        return $this->opaque;
    }

    public function rules()
    {
        return $this->rules;
    }

    public function tags()
    {
        return $this->tags;
    }

    public function refs()
    {
        return (array)$this->refs;
    }

    public function has_key()
    {
        return !empty($this->key);
    }

    public function has_description()
    {
        return is_array($this->description) && !empty($this->description);
    }

    public function has_category()
    {
        return is_string($this->category) && (strlen($this->category) > 0);
    }

    public function has_opaque()
    {
        return is_array($this->opaque);
    }

    public function has_rules()
    {
        return is_array($this->rules);
    }

    public function has_tags()
    {
        return is_array($this->tags) && !empty($this->tags);
    }

    /**
     * Check whether this pricing is available at a given point in time,
     * based on rules.not_before and rules.not_after.
     *
     * A pricing with no rules, or with no temporal rules, is always available.
     *
     * @param DateTime $at  The reference datetime.
     * @return bool
     */
    public function is_available_at(?\DateTime $at = null): bool
    {
        $at ??= new \DateTime();

        if (!$this->has_rules()) {
            return true;
        }

        if (isset($this->rules['not_before'])) {
            $not_before = tkt_iso8601_to_datetime($this->rules['not_before']);
            if ($not_before !== false && $at < $not_before) {
                return false;
            }
        }

        if (isset($this->rules['not_after'])) {
            $not_after = tkt_iso8601_to_datetime($this->rules['not_after']);
            if ($not_after !== false && $at > $not_after) {
                return false;
            }
        }

        return true;
    }

    public function can_be_sold_at($salepoint_id = null)
    {
        if (!$this->has_rules() || !array_key_exists('only_for_salepoints', $this->rules)) {
            return true;
        }

        $allowed_salepoints = (array)$this->rules['only_for_salepoints'];
        if (empty($allowed_salepoints) || is_null($salepoint_id)) {
            return true;
        }

        return in_array($salepoint_id, $allowed_salepoints);
    }

    public function can_be_sold_by($roles)
    {
        return (count(array_intersect($this->sellers, $roles)) > 0);
    }

    #[\Override]
    public function jsonSerialize(): mixed
    {
        $ret = [
            'name'    => $this->name,
            'price'   => $this->price,
            'value'   => $this->value,
            'VAT'     => $this->VAT(),
            'sellers' => $this->sellers(),
        ];

        if ($this->has_description()) {
            $ret['description'] = $this->description;
        }
        if ($this->has_category()) {
            $ret['category'] = $this->category();
        }
        if ($this->has_opaque()) {
            $ret['opaque'] = $this->opaque();
        }
        if ($this->has_rules()) {
            $ret['rules'] = $this->rules();
        }
        // FIXME: engine model has no key, remove once the module properly sorts pricings client side
        if ($this->has_key()) {
            $ret['key'] = $this->key();
        }

        if (isset($this->refs)) {
            $ret['refs'] = $this->refs();
        }

        if ($this->has_tags()) {
            $ret['tags'] = $this->tags();
        }

        return $ret;
    }
}
