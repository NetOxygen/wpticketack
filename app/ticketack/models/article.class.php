<?php
/**
 * Ticketack Engine Article.
 */

class Article extends TKTModel implements JsonSerializable
{
    // - tiff is not supported by major browsers except Safari
    // - webp is only supported by Chrome and Opera
    // - some eventival URLs ends with '?'
    const POSTER_REGEXP = '/\.(jpe?g|png|gif)(\?)?$/i';

    // - Support only Youtube videos for now
    //   see https://www.regextester.com/94360
    const TRAILER_REGEXP = '/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/i';

    /**
     * @override
     */
    public static $resource = 'articles';

    protected $_id                   = null;
    protected $name                  = null;
    protected $additional_name       = null;
    protected $description           = null;
    protected $category              = null;
    protected $pos                   = null;
    protected $stock                 = null;
    protected $supplier              = null;
    protected $posters               = array();
    protected $variants              = array();

    /**
     * @return true if given id is a valid article id, false otherwise.
     */
    public static function is_valid_id($id)
    {
        return is_uuidv4($id);
    }

    /**
     * scope filtering articles by categories
     */
    public static function scope_in_category($req, $category_ids)
    {
        if (!is_array($category_ids)) {
            $category_ids = [$category_ids];
        }

        return $req->query('category_ids', implode(',', $category_ids));
    }

    /**
     * @override
     * XXX: if you change something here, double check jsonSerialize() and
     * update the unit test
     */
    public function __construct(array &$properties = [])
    {
        if (array_key_exists('variants', $properties)) {
            $this->variants = [];
            foreach ($properties['variants'] as $key => $obj) {
                $variant = (new Variant($obj))->set_key($key);
                $this->variants[$key] = $variant;
            }
            unset($properties['variants']);
        }
        parent::__construct($properties);
    }

    /**
     * Helper to access the opaque.posters attribute
     *
     * @return array: An array of objects with a "url" key.
     */
    public function posters()
    {
        if (!$this->posters) {
            return [];
        }

        $posters = array_values(array_filter(
            $this->posters,
            function ($poster) {
                if (is_array($poster) && array_key_exists('url', $poster)) {
                    return preg_match(static::POSTER_REGEXP, $poster['url']);
                }
                return false;
            }
        ));

        return array_map(function ($poster) {
            return (object)$poster;
        }, $posters);
    }

    /**
     * Helper to access the first poster in opaque.posters
     *
     * @return object: The first poster as an object with a "url" key,
     *         null if the opaque .posters is not set or empty
     */
    public function first_poster()
    {
        $posters = $this->posters();
        return !empty($posters) ? $posters[0] : null;
    }

    public function _id()
    {
        return $this->_id;
    }

    public function name($lang)
    {
        return isset($this->name[$lang]) ? $this->name[$lang] : ($this->name['de'] ? $this->name['de'] : null); // FIXME: replace de by default language
    }

    public function additional_name($lang)
    {
        return isset($this->additional_name[$lang]) ? $this->additional_name[$lang] : ($this->additional_name['de'] ? $this->additional_name['de'] : null); // FIXME: replace de by default language
    }

    public function description($lang)
    {
        return isset($this->description[$lang]) ? $this->description[$lang] : ($this->description['de'] ? $this->description['de'] : null); // FIXME: replace de by default language
    }

    public function category()
    {
        return $this->category;
    }

    public function pos()
    {
        return $this->pos;
    }

    public function stock()
    {
        return $this->stock;
    }

    public function supplier()
    {
        return $this->supplier;
    }

    public function variants()
    {
        return $this->variants;
    }

    public function price()
    {
        return $this->variants()[0]->price('CHF'); // FIXME: handle variants
    }

    public function has_description()
    {
        return is_array($this->description);
    }

    /**
     * Handle properties JSONification, like DateTime to ISO8601.
     */
    public function jsonSerialize()
    {
        $ret = [
            '_id'                    => $this->_id(),
            'name'                   => $this->name,
            'additional_name'        => $this->additional_name,
            'category'               => $this->category,
            'pos'                    => $this->pos,
            'stock'                  => $this->stock,
            'supplier'               => $this->supplier,
            'posters'                => $this->posters,
            'variants'               => $this->variants,
        ];

        if ($this->has_description()) {
            $ret['description'] = $this->description;
        }

        return $ret;
    }
}
