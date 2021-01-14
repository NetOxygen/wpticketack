<?php
/*
 * Plugin Name: Ticketack
 * Plugin URI: https://ticketack.com
 * Description: Ticketack integration
 * Text Domain: wpticketack
 * Domain Path: /app/locales
 * Version: 2.16.0
 * Author: Net Oxygen Sàrl
 * Author URI: https://netoxygen.ch
 * License: GPLv3
 */

use Ticketack\WP\TKTApp;

date_default_timezone_set(get_option('timezone_string'));
setlocale(LC_TIME, get_locale().'.UTF-8');

define('TKT_ASSETS_VERSION', '2.16.0.2021011401');

define("TKT_BASE", (dirname(__FILE__)));
define("TKT_CONFIG", (TKT_BASE.'/config'));
define("TKT_APP", (TKT_BASE.'/app'));
define("TKT_CLI", (TKT_BASE.'/cli'));
define("TKT_ACTIONS", TKT_APP.'/actions');
define("TKT_FILTERS", TKT_APP.'/filters');
define("TKT_SHORTCODES", TKT_APP.'/shortcodes');
define("TKT_TEMPLATES", TKT_APP.'/templates');
define("TKT_HELPERS", TKT_APP.'/helpers');
define("TKT_LIB", TKT_APP.'/ticketack');
define("TKT_OVERRIDE_DIR", get_stylesheet_directory());

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
$app->register_filter('Ticketack\WP\Filters\TktContentFilter', 'tkt_content.class.php');
$app->register_filter('Ticketack\WP\Filters\ThumbnailFilter', 'thumbnail.class.php');
$app->register_action('Ticketack\WP\Actions\HeadScriptsAction', 'head_scripts.class.php');
$app->register_action('Ticketack\WP\Actions\AdminNoticesAction', 'admin_notices.class.php');
$app->register_action('Ticketack\WP\Actions\AdminMenuAction', 'admin_menu.class.php');
$app->register_action('Ticketack\WP\Actions\AdminSettingsAction', 'admin_settings.class.php');
$app->register_action('Ticketack\WP\Actions\AssetsAction', 'assets.class.php');
$app->register_action('Ticketack\WP\Actions\SyncPostsAction', 'sync_posts.class.php');
$app->register_action('Ticketack\WP\Actions\SyncArticlesAction', 'sync_articles.class.php');
$app->register_action('Ticketack\WP\Actions\SyncPeopleAction', 'sync_people.class.php');
$app->register_action('Ticketack\WP\Actions\TranslationAction', 'translation.class.php');
$app->register_action('Ticketack\WP\Actions\CustomTypesAction', 'custom_types.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\ProgramShortcode', 'program.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\EventShortcode', 'event.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\NextScreeningShortcode', 'next_screening.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\ArticleShortcode', 'article.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\ShopShortcode', 'shop.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\CartShortcode', 'cart.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\CartIconShortcode', 'cart_icon.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\CheckoutShortcode', 'checkout.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\FilterShortcode', 'filter.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\FilterRowsShortcode', 'filter_rows.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\DaysFilterShortcode', 'days_filter.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\UserConnectShortcode', 'user_connect.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\BuyPassShortcode', 'buy_pass.class.php');
$app->register_shortcode('Ticketack\WP\Shortcodes\PeopleShortcode', 'people.class.php');

// Register shortcodes defined in THEME_ROOT/ticketack/shortcodes
$app->register_theme_shortcodes();

$app->start();
