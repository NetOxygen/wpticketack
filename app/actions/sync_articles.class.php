<?php
namespace Ticketack\WP\Actions;

use Ticketack\WP\helpers\SyncArticlesHelper;

/**
 * Sync articles action
 */
class SyncArticlesAction extends TKTAction
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
            "admin_head-edit.php"      => "add_link",
            "admin_post_sync_articles" => "run"
        ];
    }

    /**
     * Add the link in Posts admin listing page
     */
    public function add_link()
    {
      $action_link = admin_url("admin-post.php?action=sync_articles");
      $script = <<<JS
<script type="text/javascript">
  jQuery(document).ready(function ($) {
    var sync_link = $('<a href="{$action_link}" class="page-title-action">Importer depuis Ticketack</a>');
    $("body.post-type-tkt-article #wpbody-content > .wrap > a.page-title-action").after(sync_link);
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
        SyncArticlesHelper::sync_articles();

        wp_redirect(admin_url("edit.php?post_type=tkt-article"));
        exit;
    }
}
