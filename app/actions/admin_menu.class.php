<?php
namespace Ticketack\WP\Actions;

use Ticketack\WP\Templates\TKTTemplate;

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
        add_menu_page("Kronos", "Kronos", 'manage_options', 'kronos', array($this, 'create_kronos_page'));
    }

    /**
     * Options page callback
     */
    public function create_admin_page()
    {
        $sections = [
            'tkt_pages', 'tkt_api', 'tkt_images_dimensions',
            'tkt_images_proxy', 'tkt_pass', 'tkt_advanced', 'tkt_i18n'
        ];
        foreach ($sections as $section) {
            if (isset($_POST[$section])) {
                if (!isset($_POST['nonce']) ||
                    !wp_verify_nonce($_POST['nonce'], 'tkt_admin_options')) {
                    die('WordPress nonce error, please reload the form and try again');
                }
                if ($section == 'tkt_pass') {
                    update_option($section, array_map('sanitize_textarea_field', $_POST[$section]));
                } else {
                    update_option($section, array_map('sanitize_text_field', $_POST[$section]));
                }
            }
        }

        $active_tab = isset($_GET['tab']) ? sanitize_text_field($_GET['tab']) : 'api';
        $tabs = [
            'api'      => tkt_t('API'),
            'pages'    => tkt_t('Pages'),
            'images'   => tkt_t('Images'),
            'pass'     => tkt_t('Abonnements'),
            'i18n'     => tkt_t('Langues'),
            'doc'      => tkt_t('Documentation')
        ];
?>
        <div class="wrap">
            <h1>Ticketack</h1>

            <h2 class="nav-tab-wrapper">
                <?php foreach ($tabs as $key => $label) : ?>
                <a
                    href="?page=ticketack-admin&tab=<?= $key ?>"
                    class="nav-tab <?= $active_tab == $key ? 'nav-tab-active' : '' ?>"
                >
                    <?= $label ?>
                </a>
                <?php endforeach; ?>
            </h2>

            <?= TKTTemplate::render_admin($active_tab); ?>
        </div>
<?php
    }

    /**
     * Options page callback
     */
    public function create_kronos_page()
    {
?>
    <iframe id="kronos_iframe" frameborder="0" width="100%" height="100%" src="https://kronos.ticketack.com?v=<?= TKT_ASSETS_VERSION ?>" style="margin-left: -20px;"></iframe>
        <script type="text/javascript">
            function resize() {
                jQuery("#kronos_iframe").height(jQuery("#wpwrap").height());
            }

            jQuery(document).ready(function ($) {
                resize();
            });

            jQuery(window).resize(resize);

        </script>
<?php
    }
}
