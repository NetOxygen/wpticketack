<?php

use Ticketack\WP\TKTApp;

/**
 * Module settings Advanced tab
 */
$tab = 'advanced';
?>
<form method="post">
    <input type="hidden" name="nonce" value="<?= wp_create_nonce('tkt_admin_options') ?>" />
<?php
    settings_fields('ticketack-'.$tab);
    do_settings_sections('ticketack-'.$tab);
    submit_button();
?>
<script type="text/javascript" src="<?= plugin_dir_url(TKT_APP).'app/templates/_admin/js/jscolor.js' ?>" ></script>
</form>
