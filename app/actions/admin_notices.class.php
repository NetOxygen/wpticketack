<?php
/**
 * Admin Notices action
 */
class AdminNoticesAction extends TKTAction
{
    /**
     * Get this action tag(s)
     *
     * @return mixed: A single tag (which will call the <code>run</code> method)
     *                or an associative array with the tag as key and the method to call as value.
     */
    public function get_tag()
    {
        return "admin_notices";
    }

    /**
     * Run this action
     */
    public function run()
    {
        global $pagenow;

        if ($pagenow != 'options-general.php' && !TKTApp::get_instance()->is_configured()) {
            echo sprintf(
                '<div class="notice notice-warning is-dismissible">
                    <p>
                        %s
                        <a href="%s">%s</a>
                    </p>
                </div>',
                tkt_t('Ticketack n\'est pas configuré.'),
                admin_url('options-general.php?page=ticketack-admin'),
                tkt_t('Accéder aux réglages')
            );
        }
    }
}
