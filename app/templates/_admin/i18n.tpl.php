<?php
/**
 * Module settings Images tab
 */
$tab = 'i18n';
?>
<form method="post">
<?php
    settings_fields('ticketack-'.$tab);
    do_settings_sections('ticketack-'.$tab);
    submit_button();
?>
</form>
