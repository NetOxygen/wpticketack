<?php
/**
 * CHF (Swiss Franc) Model.
 *
 * @see Money
 */

class CHF implements Money, JsonSerializable
{
    // computed by max_francs_value(), don't access directly.
    static private $max_francs_value = null;

    public static function max_francs_value()
    {
        if (is_null(static::$max_francs_value)) {
            static::$max_francs_value = preg_replace('/\d\d$/', '', strval(PHP_INT_MAX));
        }
        return static::$max_francs_value;
    }

    /**
     * Parse a textual representation of swiss franc and convert it into a new
     * CHF object.
     *
     * @param $s
     *   A CHF instance or a money textual representation.
     *   Example:
     *     "9001"
     *     "CHF 42'145.15"
     *     "CHF 2.10"
     *     "CHF 42.-"
     *     "Fr. 42.-"
     *     "0.65"
     *     "84.-"
     *
     * @return
     *   A CHF instance on success, null otherwise.
     */
    public static function parse($money)
    {
        $regexp = '/^\s*(?:CHF\s+|Fr\.\s+)?(\d{1,3}(?:\'\d\d\d)*|\d+)(?:\.(\d\d|-))?\s*$/';
        if ($money instanceof static) {
            return $money;
        }

        $result  = null;
        $matches = [];
        if (preg_match($regexp, strval($money), $matches)) {
            $francs = str_replace("'", "", $matches[1]);
            $cents  = (count($matches) < 3 || $matches[2] === '-' ? 0 : $matches[2]);
            $result = new static($francs, $cents);
        }
        return $result;
    }

    protected $francs;
    protected $cents;
    protected $currency;

    /**
     * CHF constructor
     *
     * This constructor is protected, use CHF::parse() instead.
     *
     * @param $francs (int)
     *   The amount of francs
     *
     * @param $cents (int)
     *   The amount of cents
     */
    protected function __construct($francs, $cents)
    {
        $this->currency = 'CHF';
        $this->francs   = intval($francs);
        $this->cents    = intval($cents);

        if ($this->francs() < 0) {
            throw new InvalidArgumentException('francs cannot be lesser than zero');
        } elseif ($this->cents() < 0) {
            throw new InvalidArgumentException('cents cannot be lesser than zero');
        } elseif ($this->cents() >= 100) {
            throw new InvalidArgumentException('cents cannot be greater than 99');
        }
    }

    /**
     * public getter for francs
     *
     * @return an int.
     */
    public function francs()
    {
        return $this->francs;
    }

    /**
     * public getter for cents
     *
     * @return an int.
     */
    public function cents()
    {
        return $this->cents;
    }

    /**
     * public getter for currency
     *
     * @return a string.
     */
    public function currency()
    {
        return $this->currency;
    }

    /**
     * compare a given object to this.
     *
     * @return
     *   true if the given argument is equals to this, false otherwise.
     */
    public function equals($opaque)
    {
        $other = static::parse($opaque);
        return ($other instanceof static &&
            $this->francs() === $other->francs() &&
            $this->cents()  === $other->cents()
        );
    }

    /**
     * Add another CHF to this.
     *
     * @param $other
     *   The value to add to this. see static::parse() for acceptable values.
     *
     * @throw
     *   InvalidArgumentException when $other could not be parsed.
     *
     * @return
     *   a new CHF instance that is the sum of $this and $other.
     */
    public function add($other)
    {
        $to_add = static::parse($other);
        if (is_null($to_add)) {
            throw new InvalidArgumentException($other);
        }

        $francs = $this->francs() + $to_add->francs();
        $cents  = $this->cents()  + $to_add->cents();
        if ($cents >= 100) { // at most 99 + 99 = 198
            $francs += 1;
            $cents  -= 100;
        }
        return new static($francs, $cents);
    }

    /**
     * Convert a CHF instance into a string.
     *
     * @return
     *   A string that can be parsed by static::parse.
     */
    public function __toString()
    {
        return sprintf("%s %d.%02d", $this->currency(), $this->francs(), $this->cents());
    }

    public function jsonSerialize()
    {
        return sprintf("%d.%02d", $this->francs(), $this->cents());
    }
}
