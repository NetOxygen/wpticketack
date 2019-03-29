<?php
/*
 * Plugin Name: Ticketack
 * Plugin URI: https://ticketack.com
 * Description: Ticketack integration
 * Text Domain: wpticketack
 * Domain Path: /app/locales
 * Version: 1.1.0
 * Author: Net Oxygen Sàrl
 * Author URI: https://netoxygen.ch
 * License: GPLv3
 */

use Ticketack\WP\TKTApp;

define('TKT_ASSETS_VERSION', '1.1.0.2019032901');

define("TKT_BASE", (dirname(__FILE__)));
define("TKT_CONFIG", (TKT_BASE.'/config'));
define("TKT_APP", (TKT_BASE.'/app'));
define("TKT_ACTIONS", TKT_APP.'/actions');
define("TKT_FILTERS", TKT_APP.'/filters');
define("TKT_SHORTCODES", TKT_APP.'/shortcodes');
define("TKT_TEMPLATES", TKT_APP.'/templates');
define("TKT_HELPERS", TKT_APP.'/helpers');
define("TKT_LIB", TKT_APP.'/ticketack');
define("TKT_OVERRIDE_DIR", get_template_directory());

define("TKT_LANG", substr(get_locale(), 0, 2));
if ( function_exists('icl_object_id') ) {
    define('TKT_WPML_INSTALLED', true);
} else {
    define('TKT_WPML_INSTALLED', false);
}

// Load Composer autoload
require_once(TKT_BASE.'/vendor/autoload.php');

// Require app autoload
require_once(TKT_APP.'/autoload.php');

$app = TKTApp::get_instance();

$app->register_filter('Ticketack\WP\Filters\MailpoetFilter', 'mailpoet.class.php');
$app->register_filter('Ticketack\WP\Filters\BodyClassFilter', 'body_class.class.php');
$app->register_filter('Ticketack\WP\Filters\TktEventContentFilter', 'tkt_event_content.class.php');
$app->register_filter('Ticketack\WP\Filters\ThumbnailFilter', 'thumbnail.class.php');
$app->register_action('Ticketack\WP\Actions\HeadScriptsAction', 'head_scripts.class.php');
$app->register_action('Ticketack\WP\Actions\AdminNoticesAction', 'admin_notices.class.php');
$app->register_action('Ticketack\WP\Actions\AdminMenuAction', 'admin_menu.class.php');
$app->register_action('Ticketack\WP\Actions\AdminSettingsAction', 'admin_settings.class.php');
$app->register_action('Ticketack\WP\Actions\AssetsAction', 'assets.class.php');
$app->register_action('Ticketack\WP\Actions\SyncPostsAction', 'sync_posts.class.php');
$app->register_action('Ticketack\WP\Actions\SyncArticlesAction', 'sync_articles.class.php');
$app->register_action('Ticketack\WP\Actions\TranslationAction', 'translation.class.php');
$app->register_action('Ticketack\WP\Actions\CustomTypesAction', 'custom_types.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\ProgramShortcode', 'program.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\EventShortcode', 'event.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\ArticleShortcode', 'article.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\CartShortcode', 'cart.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\CartIconShortcode', 'cart_icon.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\FilterShortcode', 'filter.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\DaysFilterShortcode', 'days_filter.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\UserConnectShortcode', 'user_connect.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\BuyPassShortcode', 'buy_pass.class.php');

$app->start();
