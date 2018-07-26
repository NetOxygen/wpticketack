<?php
/**
 * This base class handle primitive Ticketack Engine object manipulation.
 *
 * It tries to mimic No2_Model's interface methods but using the Ticketack
 * Engine as database.
 *
 * @note
 *   Support is limited to read-only for now.
 */

abstract class TKTModel
{
    /**
     * The resource associated to this class. Has to be overrided by subclasses.
     */
    public static $resource = null;

    /**
     * add a default scope for id.
     *
     * @param $req
     *   The request
     *
     * @param $id
     *   The requested id, should be checked for empty values from the caller
     *   since otherwise it can change the path and the meaning of the request.
     *
     * @return
     *   The scoped request.
     */
    public static function scope_id($req, $id)
    {
        return $req->path(sprintf('/%s/%s', static::$resource, $id));
    }

    /**
     * Ctor used to create a new instance from the JSON object sent by the
     * Engine.
     */
    public static function load($properties = [])
    {
        $instance = new static($properties);
        return $instance;
    }

    /**
     * NOTE: protected for now, since we only load from the Engine and never
     * create new instances.
     */
    protected function __construct(array &$properties = [])
    {
        foreach ($properties as $name => $value) {
            $this->$name = $value;
        }
    }

    /**
     * return a collection of all this model.
     *
     * By calling this method it means that you expect many results. As such a
     * select() will always return an array (empty when there is no results)
     * unless you've modified the expectation (for exemple by calling first()
     * on the selector).
     *
     * @return
     *   a TKTRequest object.
     */
    public static function all()
    {
        $req = new TKTRequest(get_called_class(), TKTRequest::EXPECT_MANY);
        return $req;
    }

    /**
     * return a defined number of entries.
     *
     * @return
     *   a TKTRequest object.
     */
    public static function first($n = 1)
    {
        return static::all()->first($n);
    }

    /**
     * This method is a shortcut to fetch a resource given an id.
     *
     * @param $id
     *   the id value to find.
     *
     * @return
     *   An instance of static a matching row is found, null otherwise.
     */
    public static function find($id)
    {
        return (strlen($id) === 0 ? null : static::first()->id($id)->get());
    }
}
