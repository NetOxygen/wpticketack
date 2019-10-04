<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Helpers\SyncPeopleHelper;

class TKT_PEOPLE_COMMANDS extends WP_CLI_Command {
    function import()
    {
        $default_lang = TKTApp::get_instance()->get_config('i18n.default_lang', 'fr');

        if ($default_lang === 'fr') {
            switch_to_locale('fr_FR');
        }

        $people = SyncPeopleHelper::fetch_people();

        $people_ids = array_map(function ($node) { return (string)$node[0]; }, $people->xpath('person/id'));

        foreach ($people_ids as $index => $person_id) {
            WP_CLI::line('Fetching details for person ' . ($index + 1) . ' => #' . $person_id);
            $details = SyncPeopleHelper::fetch_person_details($person_id);
            WP_CLI::line('Details fetched...');

            if (SyncPeopleHelper::must_be_imported($details)) {
                if (SyncPeopleHelper::import($details, $default_lang)) {
                    WP_CLI::success('person #' . $person_id . ' successfully imported!');
                }
            }
        }

        WP_CLI::success('Import is done!');
    }
}
WP_CLI::add_command('ticketack:people', 'TKT_PEOPLE_COMMANDS');
