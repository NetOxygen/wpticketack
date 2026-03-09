<?php
namespace Ticketack\Core\Models;

use Ticketack\Core\Base\TKTModel;
use Ticketack\Core\Base\No2_HTTP;

/**
 * Ticketack Engine Screening.
 */

class Screening extends TKTModel implements \JsonSerializable
{
    // - some eventival URLs ends with '?'
    const POSTER_REGEXP = '/\.(jpe?g|png|gif|webp|avif)(\?)?$/i';

    // - Support Youtube and Vimeo videos
    //   see https://regexr.com/5sm04
    const TRAILER_REGEXP = '/(^(https:\/\/)((player\.|www\.)?vimeo\.com|youtu\.be|(www\.)?youtube\.com)\/([\w]+[\/]?)?([\?]?.*)?)|https:\/\/.+[.]mp4$/i';

    /**
     * @override
     */
    public static $resource = 'screenings';

    protected $_id         = null;
    protected $title       = null;
    protected $sections    = [];
    protected $description = null;
    protected $movies      = [];
    protected $note        = null;
    protected $start_at    = null;
    protected $stop_at     = null;
    protected $buckets     = [];
    protected $pricings    = [];
    protected $place       = null;
    protected $refs        = [];
    protected $opaque      = null;

    /**
     * @return true if given id is a valid screening id, false otherwise.
     */
    public static function is_valid_id($id)
    {
        return tkt_is_uuidv4($id);
    }

    /**
     * Get a screening id from one of his refs
     *
     * @param mixed $id_or_ref
     *
     * @return The screening id as uuidv4 if found, null otherwise
     */
    public static function id_from_ref($id_or_ref)
    {
        if (static::is_valid_id($id_or_ref)) {
            return $id_or_ref;
        }

        $screening = static::find($id_or_ref);

        return (null !== $screening) ? $screening->_id : null;
    }

    /**
     * scope filtering screenings on edition.
     */
    public static function scope_in_edition($req, $edition)
    {
        return $req->query('edition', $edition);
    }

    /**
     * scope filtering screenings on places.
     */
    public static function scope_in_places($req, array $places_ids)
    {
        return $req->query('places_ids', implode(',', $places_ids));
    }

    /**
     * cosmetic helper for scope_start_at_gt.
     */
    public static function scope_in_the_future($req)
    {
        return $req->start_at_gte(date_create("now"));
    }

    /**
     * scope filtering screenings on start_at values.
     */
    public static function scope_start_at_gte($req, $when)
    {
        return $req->query('start_at_gte', tkt_datetime_to_iso8601($when));
    }

    /**
     * scope filtering screenings on stop_at values.
     */
    public static function scope_stop_at_gte($req, $when)
    {
        return $req->query('stop_at_gte', tkt_datetime_to_iso8601($when));
    }

    /**
     * scope filtering screenings on stop_at values.
     */
    public static function scope_stop_at_lte($req, $when)
    {
        return $req->query('stop_at_lte', tkt_datetime_to_iso8601($when));
    }

    /**
     * scope filtering screenings movies sections
     */
    public static function scope_in_movie_sections($req, $sections)
    {
        if (!is_array($sections)) {
            $sections = [$sections];
        }

        return $req->query('films_sections_ids', implode(',', $sections));
    }

    /**
     * scope filtering screenings sections
     */
    public static function scope_in_screening_sections($req, $sections)
    {
        if (!is_array($sections)) {
            $sections = [$sections];
        }

        return $req->query('sections_ids', implode(',', $sections));
    }

    /**
     * scope filtering screenings on start_at values.
     */
    public static function scope_start_at_lte($req, $when)
    {
        return $req->query('start_at_lte', tkt_datetime_to_iso8601($when));
    }

    /**
     * scope filtering screenings on fims _ids
     */
    public static function scope_with_films($req, $films_ids)
    {
        return $req->query('films_ids', implode(',', $films_ids));
    }

    /**
     * scope sorting screenings by start_at values.
     */
    public static function scope_order_by_start_at($req)
    {
        return $req->add_post_process(function ($status, $screenings) {
            if (No2_HTTP::is_success($status)) {
                usort($screenings, fn($a, $b) => $a->start_at->getTimestamp() - $b->start_at->getTimestamp());
            }
            return $screenings;
        });
    }

    /**
     * scope filtering screenings that cannot be sold by a user having given
     * $roles.
     */
    public static function scope_for_sellers($req, $roles)
    {
        return $req->add_post_process(function ($status, $screenings) use ($roles) {
            if (No2_HTTP::is_success($status)) {
                $screenings = array_filter($screenings, fn($screening) => count($screening->pricings_for_sellers($roles)) > 0);
            }
            return $screenings;
        });
    }


    /**
     * scope filtering pricings that cannot be sold by a user having given
     * $roles.
     */
    public static function scope_filter_pricings_for_sellers($req, $roles)
    {
        return $req->add_post_process(function ($status, $screenings) use ($roles) {
            if (No2_HTTP::is_success($status)) {
                $screenings = array_map(function ($screening) use ($roles) {
                    $screening->pricings = $screening->pricings_for_sellers($roles);
                    return $screening;
                }, $screenings);
            }
            return $screenings;
        });
    }

    /**
     * Scope filtering out pricings that are not yet or no longer available,
     * based on their rules.not_before and rules.not_after.
     * Also filters out screenings that have no available pricings left.
     *
     * @param DateTime|null $at  Reference datetime. Defaults to now.
     */
    public static function scope_available_at($req, ?DateTime $at = null)
    {
        $at ??= new \DateTime();
        return $req->add_post_process(function ($status, $screenings) use ($at) {
            if (No2_HTTP::is_success($status)) {
                $screenings = array_map(function ($screening) use ($at) {
                    $screening->pricings = array_filter(
                        $screening->pricings,
                        fn($pricing) => $pricing->is_available_at($at)
                    );
                    return $screening;
                }, $screenings);
                $screenings = array_values(array_filter(
                    $screenings,
                    fn($screening) => count($screening->pricings) > 0
                ));
            }
            return $screenings;
        });
    }

    /**
     * Scope filtering pricings that can be sold given an array of user roles.
     */
    public static function scope_sellable_by($req, $roles)
    {
        return $req->filter_pricings_for_sellers($roles)
                   ->for_sellers($roles);
    }

    public function pricings_for_sellers($roles)
    {
        $filtered =  array_filter($this->pricings, fn($pricing) => $pricing->can_be_sold_by($roles));

        usort($filtered, fn($a, $b) => Tickettype::opaque_eshop_sort_weight_cmp($a, $b));

        return array_values($filtered);
    }

    /**
     * @override
     * XXX: if you change something here, double check jsonSerialize() and
     * update the unit test
     */
    public function __construct(array &$properties = [])
    {
        if (array_key_exists('start_at', $properties) && !empty($properties['start_at'])) {
            $this->start_at = tkt_iso8601_to_datetime($properties['start_at']);
            unset($properties['start_at']);
        }
        if (array_key_exists('stop_at', $properties) && !empty($properties['stop_at'])) {
            $this->stop_at = tkt_iso8601_to_datetime($properties['stop_at']);
            unset($properties['stop_at']);
        }
        if (array_key_exists('films', $properties)) {
            $this->movies = array_map(function ($obj) {
                return new Movie($obj);
            }, $properties['films']);
            unset($properties['films']);
        }
        if (array_key_exists('cinema_hall', $properties)) {
            $this->place = new Place($properties['cinema_hall']);
            unset($properties['cinema_hall']);
        }
        if (array_key_exists('sections', $properties)) {
            $this->sections = array_map(function ($obj) {
                return new Section($obj);
            }, $properties['sections']);
            unset($properties['sections']);
        }
        if (array_key_exists('buckets', $properties)) {
            $this->buckets = array_map(function ($obj) {
                return new Bucket($this, $obj);
            }, $properties['buckets']);
            unset($properties['buckets']);
        }
        if (array_key_exists('pricings', $properties)) {
            $this->pricings = [];
            foreach ($properties['pricings'] as $key => $obj) {
                $pricing = (new Pricing($obj))->set_key($key);
                $this->pricings[$key] = $pricing;
            }
            unset($properties['pricings']);
        }
        if (array_key_exists('description', $properties)) {
            $this->description = (array)$properties['description'];
            unset($properties['description']);
        }
        if (array_key_exists('opaque', $properties)) {
            $this->opaque = (array)$properties['opaque'];
            unset($properties['opaque']);
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
        if (!$this->has_opaque_key('posters')) {
            return [];
        }

        $posters = array_values(array_filter(
            $this->opaque['posters'],
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

    /**
     * Helper to access the opaque.trailers attribute
     *
     * @return array: An array of objects with a "url" key.
     */
    public function trailers()
    {
        if (!$this->has_opaque_key('trailers')) {
            return [];
        }

        $trailers = array_values(array_filter(
            $this->opaque['trailers'],
            function ($trailer) {
                if (is_array($trailer) && array_key_exists('url', $trailer)) {
                    return preg_match(static::TRAILER_REGEXP, $trailer['url']);
                }
                return false;
            }
        ));

        return array_map(function ($trailer) {
            return (object)$trailer;
        }, $trailers);
    }

    /**
     * Helper to access the first trailer in opaque.trailers
     *
     * @return object: The first trailer as an object with a "url" key,
     *         null if the opaque.trailers is not set or empty
     */
    public function first_trailer()
    {
        $trailers = $this->trailers();
        return !empty($trailers) ? $trailers[0] : null;
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
        return tkt_original($this->title);
    }

    public function localized_title_or_original($lang)
    {
        return tkt_localized_or_original($this->title, $lang);
    }

    public function localized_title_or_default_or_original($lang)
    {
        return tkt_localized_or_default_or_original($this->title, $lang);
    }

    public function original_title_if_different_from_localized($lang)
    {
        return tkt_original_if_different_from_localized($this->title, $lang);
    }

    public function sections()
    {
        return $this->sections;
    }

    public function description($lang = null)
    {
        if (is_null($lang)) {
            return $this->description;
        }

        return isset($this->description[$lang]) ? $this->description[$lang] : null;
    }

    public function movies()
    {
        return $this->movies;
    }

    public function note()
    {
        return $this->note;
    }

    public function start_at()
    {
        return $this->start_at;
    }

    public function stop_at()
    {
        return $this->stop_at;
    }

    public function buckets()
    {
        return $this->buckets;
    }

    public function bucket($bucket_id)
    {
        foreach ($this->buckets() as $bucket) {
            if ($bucket->_id() === $bucket_id)
                return $bucket;
        }
        return null;
    }

    /*
     * @return an array of bucket matching the given context.
     *
     * @param $ignore
     *   a bitmask of ignored match failure, eg. (MATCH_UNAUTHORIZED | MATCH_TOO_EARLY)
     */
    protected function matching_buckets($now, $tickettype, $user, $ignore)
    {
        $ignore_mask = ~$ignore;
        $matching = [];

        foreach ($this->buckets() as $bucket) {
            $match = $bucket->match($now, $tickettype, $user);
            if (($match & $ignore_mask) === Bucket::MATCH_SUCCESS) {
                $matching[] = $bucket;
            }
        }

        return $matching;
    }

    /*
     * @return an array of bookable (i.e. matching or stealable) bucket in the
     * given context
     *
     * @see Bucket::matching_buckets()
     */
    public function bookable_buckets($now, $tickettype, $user, $ignore)
    {
        // associative array of bucket_id => Bucket, so we don't have duplicates.
        $bookable = [];

        foreach ($this->matching_buckets($now, $tickettype, $user, $ignore) as $bucket) {
            $bookable[$bucket->_id()] = $bucket;
            foreach ($bucket->may_steal_from() as $victim) {
                if (!is_null($victim)) {
                    $bookable[$victim->_id()] = $victim;
                }
            }
        }

        return array_values($bookable);
    }

    public function pricings()
    {
        return $this->pricings;
    }

    public function pricing($pricing_key)
    {
        return array_key_exists($pricing_key, $this->pricings) ?
            $this->pricings[$pricing_key] :
            null;
    }

    /**
     * Get the first pricing with the provided name
     *
     * @param string $lang
     * @return Pricing if found, null otherwise
     */
    public function pricing_by_name(string $name, $lang = null)
    {
        if (is_null($lang)) {
            $lang = current_lang();
        }

        $matching_pricings = array_filter(
            $this->pricings,
            fn($pricing) => $pricing->name($lang) === $name
        );

        if (empty($matching_pricings)) {
            return null;
        }

        return current($matching_pricings);
    }

    public function place()
    {
        return $this->place;
    }

    public function refs()
    {
        return $this->refs;
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

    public function has_sections()
    {
        return is_array($this->sections);
    }

    public function has_description()
    {
        return is_array($this->description);
    }

    public function has_note()
    {
        return is_string($this->note) && (strlen($this->note) > 0);
    }

    public function has_opaque()
    {
        return is_array($this->opaque);
    }

    public function has_opaque_key($key)
    {
        return $this->has_opaque() && array_key_exists($key, $this->opaque);
    }

    /**
     * Handle properties JSONification, like DateTime to ISO8601.
     */
    public function jsonSerialize() : mixed
    {
        $ret = [
            '_id'         => $this->_id(),
            'title'       => $this->title,
            'films'       => array_map(function ($movie) {
                                 return $movie->jsonSerialize();
                             }, $this->movies()),
            'start_at'    => tkt_datetime_to_iso8601($this->start_at),
            'stop_at'     => tkt_datetime_to_iso8601($this->stop_at),
            'buckets'     => array_map(function ($bucket) {
                                 return $bucket->jsonSerialize();
                             }, $this->buckets()),
            'pricings'    => array_map(function ($pricing) {
                                 return $pricing->jsonSerialize();
                             }, $this->pricings()),
            'cinema_hall' => !empty($this->place()) ? $this->place()->jsonSerialize() : null,
            'refs'        => $this->refs(),
        ];

        if ($this->has_sections()) {
            $ret['sections'] = $this->sections();
        }
        if ($this->has_description()) {
            $ret['description'] = $this->description;
        }
        if ($this->has_note()) {
            $ret['note'] = $this->note();
        }
        if ($this->has_opaque()) {
            $ret['opaque'] = $this->opaque();
        }

        return $ret;
    }

    /*
     * TODO: this method is left for retro-compatibility: bookings statistic
     * are aggregated from all the buckets. Callers of this method should
     * either display or use every bucket individually or filter the relevant
     * one(s), but using all of them (like this method does) is probably the
     * wrong way most of the time.
     */
    public static function __seats_retro_compat($screening_obj)
    {
        return (object)[
            'total' => array_reduce($screening_obj->buckets, fn($memo, $bucket) => $memo + $bucket->total_capacity, 0),
            'available' => array_reduce($screening_obj->buckets, fn($memo, $bucket) => $memo + $bucket->available, 0),
            'unconfirmed' => array_reduce($screening_obj->buckets, fn($memo, $bucket) => $memo + $bucket->unconfirmed, 0),
            'confirmed' => array_reduce($screening_obj->buckets, fn($memo, $bucket) => $memo + $bucket->confirmed, 0),
            'used' => array_reduce($screening_obj->buckets, fn($memo, $bucket) => $memo + $bucket->scanned, 0),
        ];
    }

    /**
     * Check if this screening is bookable on map
     *
     * @return boolean
     */
    public function is_bookable_on_map()
    {
        return $this->has_opaque_key('map_only_bookings') && $this->opaque['map_only_bookings'];
    }

    /**
     * Find free seats on map, starting from the back
     *
     * @param integer $nb: Number of seats to find. Default -1 means to return all
     * @param string $category: Filter seats on this category
     *
     * @return null if this screening is not bookable on map, array otherwise.
     */
    public function find_free_seats($nb = -1, $category = null)
    {
        if (!$this->is_bookable_on_map()) {
            return null;
        }

        $place      = clone($this->place());
        $seats      = $place->map()['seats'];
        $free_seats = [];
        foreach ($place->map()['seats'] as $seat) {
            if (count($seats) == $nb) {
                break;
            }
            if ($seat['status'] == 'free' && (is_null($category) || $category == $seat['category'])) {
                array_push($free_seats, $seat);
            }
        }

        usort($free_seats, function ($a, $b) {
            if ($a['position']['y'] != $b['position']['y'])
                return $a['position']['y'] < $b['position']['y'] ? 1 : -1;
            if ($a['position']['x'] != $b['position']['x'])
                return $a['position']['x'] > $b['position']['x'] ? 1 : -1;

            return 0;
        });

        return $free_seats;
    }

    public function refund_tickets($nb_to_refund, $pricing_to_refund)
    {
        $res = (object)[
            'err'      => null,
            'msg'      => null,
            'refunded' => (object)[]
        ];
        $res->refunded->{$pricing_to_refund} = 0;

        if ($nb_to_refund > 0) {
            $refundable_tickets = array_values(array_filter($this->tickets(), fn($ticket) => $ticket->is_refundable() &&
            $ticket->get_activated_pricing_name() === $pricing_to_refund));
            if (count($refundable_tickets) < $nb_to_refund) {
                $res->err = tkt_t('Impossible de rembourser autant de tickets');
                return $res;
            }

            for ($i = 0; $i < $nb_to_refund; $i++) {
                $ticket_to_refund = $refundable_tickets[$i];
                if (!$ticket_to_refund->delete() || !Accounting::refund_ticket($ticket_to_refund->ticket_data->_id)) {
                    $res->err = tkt_t('Impossible de rembourser un ticket');
                    return $res;
                }

                $res->refunded->{$pricing_to_refund} += 1;
            }

            if ($res->refunded->{$pricing_to_refund} == $nb_to_refund) {
                $res->msg = sprintf(
                    ($nb_to_refund > 1 ?
                        tkt_t('%d tickets au tarif "%s" ont été remboursés') :
                        tkt_t('%d ticket au tarif "%s" a été remboursé')
                    ),
                    $nb_to_refund,
                    $pricing_to_refund
                );
            }
        }

        return $res;
    }

    /**
     * Get this screening tickets
     *
     * @param string $lang
     *
     * @return stdClass
     */
    public function tickets()
    {
        $api = current_user()->get_api_path();
        $uri = sprintf(
            '/%s/tickets?having_booked_screening_id=%s&nocache=true',
            $api,
            $this->_id
        );

        $http_status;
        $res = Ticketack_API::http_get($uri, $http_status);

        if ($http_status != No2_HTTP::OK) {
            return null;
        }

        $tickets_data = json_decode((string) $res);

        if (count($tickets_data) > 0) {
            return array_map(fn($data) => new Ticket($data), $tickets_data);
        }

        return null;
    }

    /**
     * Get this screenings stat
     *
     * @param string $lang
     * @param array $tickettypes to filter on
     *
     * @return stdClass
     */
    public function stats($lang = null, $tickettypes = [])
    {
        if (is_null($lang)) {
            $lang = current_lang();
        }

        $api = current_user()->get_api_path();
        $uri = sprintf(
            '/%s/third/screenings/stats?_id=%s&lang=%s&types=%s',
            $api,
            $this->_id(),
            $lang,
            implode(',', $tickettypes)
        );

        $http_status;
        $res = Ticketack_API::http_get($uri, $http_status);

        if ($http_status != No2_HTTP::OK) {
            return null;
        }

        $screenings = json_decode((string) $res);

        if (count($screenings) == 1) {
            return current($screenings)->stats;
        }

        return null;
    }

    /**
     * Create bookings for this screening
     *
     * @param boolean $overbooking
     * @return array
     */
    public function book(array $bookings_params, $overbooking = false)
    {
        $request = new BookingRequest($this);

        if ($this->is_bookable_on_map()) {
            $asked_seats = array_map(fn($params) => array_key_exists('seat', $params) ? $params['seat'] : null, $bookings_params);
            $free_seats = array_filter($this->find_free_seats(), fn($seat) => !in_array($seat['label'], $asked_seats));
        }

        foreach ($bookings_params as $params) {
            $booking = new Booking();

            if (!array_key_exists('type', $params)) {
                $params['type'] = Tickettype::ONE_TIME_PASS_ID;
            }
            $booking->pledge_tickettype($params['type']);

            if (array_key_exists('seat', $params)) {
                $booking->seat_is($params['seat']);
            } elseif ($this->is_bookable_on_map() && !empty($free_seats)) {
                $booking->seat_is(array_shift($free_seats)['label']);
            }

            $request[] = $booking;
        }

        try {
            $bookings = ($overbooking ? $request->overbook() : $request->book());
        } catch (Exception $e) {
            No2_Logger::warn('Booking request: '.json_encode($request));
            No2_Logger::warn(strval($e));
            $bookings = null;
        }

        return $bookings;
    }

    /**
     * Get screenings stats
     *
     * @param string $lang
     *
     * @return array
     */
    public static function screenings_stats(Datetime $start_date, Datetime $end_date, $lang = null)
    {
        if (is_null($lang)) {
            $lang = current_lang();
        }

        $api = current_user()->get_api_path();
        $uri = sprintf(
            '/%s/third/screenings/stats?start_at=%s&stop_at=%s&lang=%s',
            $api,
            $start_date->format('Y-m-d'),
            $end_date->format('Y-m-d'),
            $lang
        );

        $http_status;
        $res = Ticketack_API::http_get($uri, $http_status);

        if ($http_status != No2_HTTP::OK) {
            return null;
        }

        return json_decode((string) $res);
    }

    public function cart_item_name()
    {
        return sprintf(
            '%s / %s - %s',
            $this->start_at()->format(tkt_t('d.m.Y H:i')),
            $this->place()->name(),
            $this->localized_title_or_original(current_lang())
        );
    }
}
