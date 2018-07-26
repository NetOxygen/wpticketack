<?php
/**
 * Helper methods to query the ticketack API.
 */
class ScreeningsAPi extends TKTApi
{
    public static function all()
    {
        $api = TKTApi::get_instance();

        $response = $api->get(sprintf(
            '%s?fields=%s&start_at_gte=%s',
            '/api/screenings',
            '_id,title,start_at,stop_at,films,opaque',
            // Date must be urlencoded to prevent '+' sign from being removed
            urlencode((new DateTime())->format('c'))
        ));

        if ($response->getStatusCode() === TKTApi::HTTP_STATUS_OK) {
            return json_decode($response->getBody());
        }

        throw new TKTApiException(sprintf(
            "ScreeningsAPi::all() -> Got %s status from engine: %s",
            $response->getStatusCode(),
            $response->getBody()->getContents()
        ));
    }
}
