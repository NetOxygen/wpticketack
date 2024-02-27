<?php

namespace Ticketack\Core\Models;

/**
 * Ticketack Engine helper for article stock (used in Articles).
 *
 * @notes
 *  Instances are *immutable*.
 */

class ArticleStock implements \JsonSerializable
{
    protected $salepoint_ids = [];
    protected $availability  = 0;

    public function __construct(array &$properties = [])
    {
        $this->salepoint_ids = isset($properties['salepoint_ids']) ? $properties['salepoint_ids'] : [];
        $this->availability  = isset($properties['availability']) ? $properties['availability'] : 0;
    }

    /*public function stock_by_salepoint()
    {
        $by_salepoint = [];

        foreach ($this->salepoint_ids as $salepoint) {
            $by_salepoint[$salepoint] = $this->availability();
        }

        return $by_salepoint;
    }*/

    /* setters */

    /* getters */

    public function salepoint_ids()
    {
        return $this->salepoint_ids;
    }

    public function availability()
    {
        return (float)$this->availability;
    }

    // XXX; once PHP 7.4 support is not needed anymore, remove the following
    // line and add : mixed at the end of the signature so that PHP8.1 doesn't
    // spew a deprecation warning.
    #[ReturnTypeWillChange]
    public function jsonSerialize()
    {
        $ret = [
            'salepoint_ids' => $this->salepoint_ids(),
            'availability'  => $this->availability(),
        ];

        return $ret;
    }

    public function check_stock($salepoint_id)
    {
        if (in_array($salepoint_id, $this->salepoint_ids) && $this->availability > 0) {
            return true;
        }

        return false;
    }
}
