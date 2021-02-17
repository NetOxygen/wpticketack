<?php

use Ticketack\WP\TKTApp;

/**
 * Module settings Registration tab
 */
$tab = 'registration';
?>
<form method="post">
    <input type="hidden" name="nonce" value="<?= wp_create_nonce('tkt_admin_options') ?>" />
<?php
    settings_fields('ticketack-'.$tab);
    do_settings_sections('ticketack-'.$tab);
    submit_button();
?>
</form>
