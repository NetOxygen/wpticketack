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
            $this->variants = array_map(function ($obj) {
                return new Variant($obj);
            }, $properties['variants']);
            unset($properties['variants']);
        }
        parent::__construct($properties);
    }

    public function _id()
    {
        return $this->_id;
    }

    public function name($lang)
    {
        if (isset($this->name[$lang])) {
            return $this->name[$lang];
        }

        $default_lang = TKTApp::get_instance()->get_config('i18n.default_lang', 'fr');
        if (isset($this->name[$default_lang])) {
            return $this->name[$default_lang];
        }

        return null;
    }

    public function additional_name($lang)
    {
        if (isset($this->additional_name[$lang])) {
            return $this->additional_name[$lang];
        }

        $default_lang = TKTApp::get_instance()->get_config('i18n.default_lang', 'fr');
        if (isset($this->additional_name[$default_lang])) {
            return $this->additional_name[$default_lang];
        }

        return null;
    }

    public function description($lang)
    {
        if (isset($this->description[$lang])) {
            return $this->description[$lang];
        }

        $default_lang = TKTApp::get_instance()->get_config('i18n.default_lang', 'fr');
        if (isset($this->description[$default_lang])) {
            return $this->description[$default_lang];
        }

        return null;
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
        return $this->variants()[0]->price('CHF');
    }

    public function value()
    {
        return $this->variants()[0]->value('CHF');
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

    public function has_id()
    {
        return is_string($this->_id) && (strlen($this->_id) > 0);
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
            'name'            => $this->name,
            'additional_name' => !empty($this->additional_name) ? $this->additional_name : [],
            'category'        => $this->category(),
            'pos'             => $this->pos(),
            'stock'           => $this->stock(),
            'supplier'        => $this->supplier(),
            'posters'         => $this->posters(),
            'variants'        => !empty($this->variants) ? $this->variants : []
        ];

        if ($this->has_id()) {
            $ret['_id'] = $this->_id();
        }

        if ($this->has_description()) {
            $ret['description'] = $this->description;
        }

        return $ret;
    }
}
