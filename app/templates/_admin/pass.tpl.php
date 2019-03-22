<?php
/**
 * Module settings Images tab
 */
$tab = 'pass';
?>
<form method="post">
<?php
    settings_fields('ticketack-'.$tab);
    do_settings_sections('ticketack-'.$tab);
    submit_button();
?>
</form>
