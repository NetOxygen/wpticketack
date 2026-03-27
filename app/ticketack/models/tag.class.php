<?php
namespace Ticketack\Core\Models;

use Ticketack\Core\Base\TKTModel;

/**
 * Ticketack Engine Tag
 */
class Tag extends TKTModel implements \JsonSerializable
{
    public static $resource = 'tags';

    protected $_id  = null;
    protected $name = null;

    public function __construct(array &$properties = [])
    {
        parent::__construct($properties);
    }

    public function _id()
    {
        return $this->_id;
    }

    public function name()
    {
        return $this->name;
    }

    public function has_id()
    {
        return is_string($this->_id) && (strlen($this->_id) > 0);
    }

    #[\Override]
    public function jsonSerialize(): mixed
    {
        $ret = [
            'name' => $this->name(),
        ];

        if ($this->has_id()) {
            $ret['_id'] = $this->_id();
        }

        return $ret;
    }
}
