<?php
/**
 * Ticketack Engine Movie, found as a 'film' in a Screening.
 */
class Movie extends TKTModel implements JsonSerializable
{
    public static $resource = 'movies';

    protected $_id        = null;
    protected $title      = null;
    protected $section    = null;
    protected $created_at = null;
    protected $updated_at = null;
    protected $opaque     = null;

    public function __construct(array &$properties = [])
    {
        if (array_key_exists('created_at', $properties)) {
            $this->created_at = tkt_iso8601_to_datetime($properties['created_at']);
            unset($properties['created_at']);
        }
        if (array_key_exists('updated_at', $properties)) {
            $this->updated_at = tkt_iso8601_to_datetime($properties['updated_at']);
            unset($properties['updated_at']);
        }
        parent::__construct($properties);
    }

    public function _id()
    {
        return $this->_id;
    }

    public function title($lang = null)
    {
        if (is_null($lang)) {
            return $this->title;
        }

        return isset($this->title[$lang]) ? $this->title[$lang] : null;
    }

    public function original_title()
    {
        return $this->title('original');
    }

    public function localized_title_or_original($lang)
    {
        $localized = $this->title($lang);
        $original  = $this->original_title();
        return ($localized ?: $original);
    }

    public function original_title_if_different_from_localized($lang)
    {
        $localized = $this->title($lang);
        $original  = $this->original_title();
        return ($original != $localized) ? $original : null;
    }

    public function section()
    {
        return $this->section;
    }

    public function created_at()
    {
        return $this->created_at;
    }

    public function updated_at()
    {
        return $this->updated_at;
    }

    /**
     * Access opaque fields
     *
     * @param string $field: Field name, optional
     * @param mixed $default: Default value if $field is
     *                        provided but not found
     *
     * @return mixed: All the opaque fields if $field is not provided,
     *                opaque $field value otherwise.
     */
    public function opaque($field = null, $default = null)
    {
        if (!is_null($field)) {
            return isset($this->opaque[$field]) ? $this->opaque[$field] : $default;
        }

        return $this->opaque;
    }

    public function posters()
    {
        $posters = [];
        if (is_array($this->opaque) && isset($this->opaque['posters'])) {
            $posters = array_filter($this->opaque['posters'], function ($poster) {
                if (is_array($poster) && array_key_exists('url', $poster)) {
                    return preg_match(Screening::POSTER_REGEXP, $poster['url']);
                }
                return false;
            });
        }
        return $posters;
    }

    public function trailers()
    {
        $trailers = [];
        if (is_array($this->opaque) && isset($this->opaque['trailers'])) {
            $trailers = array_filter($this->opaque['trailers'], function ($trailer) {
                if (is_array($trailer) && array_key_exists('url', $trailer)) {
                    return preg_match(Screening::TRAILER_REGEXP, $trailer['url']);
                }
                return false;
            });
        }
        return $trailers;
    }

    public function has_section()
    {
        return is_array($this->section);
    }

    public function has_created_at()
    {
        return $this->created_at() instanceof Datetime;
    }

    public function has_updated_at()
    {
        return $this->updated_at() instanceof Datetime;
    }

    public function has_opaque()
    {
        return is_array($this->opaque);
    }

    public function jsonSerialize()
    {
        $ret = [
            '_id'     => $this->_id(),
            'title'   => $this->title,
        ];

        if ($this->has_section()) {
            $ret['section'] = $this->section();
        }
        if ($this->has_created_at()) {
            $ret['created_at'] = _datetime_to_iso8601($this->created_at());
        }
        if ($this->has_updated_at()) {
            $ret['updated_at'] = _datetime_to_iso8601($this->updated_at());
        }
        if ($this->has_opaque()) {
            $ret['opaque'] = $this->opaque();
        }

        return $ret;
    }
}
