<?php
namespace Ticketack\Core\Models;

/**
 * Ticketack Engine Ref
 */
class Ref implements \JsonSerializable
{
    protected $id          = null;
    protected $source      = null;
    protected $name        = null;
    protected $description = null;

    public function __construct(array &$properties = [])
    {
        foreach ($properties as $name => $value) {
            $this->$name = $value;
        }
    }

    public function id()
    {
        return $this->id;
    }

    public function source()
    {
        return $this->source;
    }

    public function name()
    {
        return $this->name;
    }

    public function description()
    {
        return $this->description;
    }

    public function has_id()
    {
        return !is_null($this->id);
    }

    public function has_source()
    {
        return !is_null($this->source);
    }

    public function has_name()
    {
        return !is_null($this->name);
    }

    public function has_description()
    {
        return !is_null($this->description);
    }

    #[\Override]
    public function jsonSerialize(): mixed
    {
        $ret = [];

        if ($this->has_id()) {
            $ret['id'] = $this->id();
        }
        if ($this->has_source()) {
            $ret['source'] = $this->source();
        }
        if ($this->has_name()) {
            $ret['name'] = $this->name();
        }
        if ($this->has_description()) {
            $ret['description'] = $this->description();
        }

        return $ret;
    }
}
