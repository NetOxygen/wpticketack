<?php
namespace Ticketack\WP\Actions;

use Ticketack\WP\TKTApp;
use Ticketack\WP\helpers\SyncPeopleHelper;

/**
 * Sync people action
 */
class SyncPeopleAction extends TKTAction
{
    /**
     * Get this action tag(s)
     *
     * @return mixed: A single tag (which will call the <code>run</code> method)
     *                or an associative array with the tag as key and the method to call as value.
     */
    public function get_tag()
    {
        return [
            "admin_head-edit.php"    => "add_link",
            "admin_post_sync_people" => "run"
        ];
    }

    /**
     * Add the link in Posts admin listing page
     */
    public function add_link()
    {
        $default_lang = TKTApp::get_instance()->get_config('i18n.default_lang', 'fr');
        $action_link  = "/wp-admin/admin-post.php?action=sync_people&lang=$default_lang";
        $script       = <<<JS
<script type="text/javascript">
  jQuery(document).ready(function ($) {
    var sync_link = $('<a href="{$action_link}" class="page-title-action">Importer depuis Eventival</a>');
    $("body.post-type-tkt-person #wpbody-content > .wrap > a.page-title-action").after(sync_link);
  });
</script>
JS;
        echo $script;
    }

    /**
     * Run the synchronization
     */
    public function run()
    {
        SyncPeopleHelper::sync();

        wp_redirect("/wp-admin/edit.php?post_type=tkt-people");
        exit;
    }
}