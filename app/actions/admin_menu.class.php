<?php
/**
 * Admin Menu action
 */
class AdminMenuAction extends TKTAction
{
    /**
     * Get this action tag(s)
     *
     * @return mixed: A single tag (which will call the <code>run</code> method)
     *                or an associative array with the tag as key and the method to call as value.
     */
    public function get_tag()
    {
        return "admin_menu";
    }

    /**
     * Run this action
     */
    public function run()
    {
        // This page will be under "Settings"
        add_options_page(
            'Ticketack Admin',
            'Ticketack',
            'manage_options',
            'ticketack-admin',
            array( $this, 'create_admin_page' )
        );
    }

    /**
     * Options page callback
     */
    public function create_admin_page()
    {
        if (isset($_POST['base'])) {
            update_option('base', $_POST['base']);
            update_option('pages', $_POST['pages']);
            update_option('kronos', $_POST['kronos']);
        }
?>
        <div class="wrap">
            <h1>Ticketack</h1>
            <form method="post">
            <?php
                // This prints out all hidden setting fields
                settings_fields('ticketack_base');
                do_settings_sections('ticketack-admin');
                submit_button();
            ?>
            </form>
        </div>
<?php
    }
}
