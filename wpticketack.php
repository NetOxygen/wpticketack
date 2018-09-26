<?php
/*
 * Plugin Name: Ticketack
 * Plugin URI: https://ticketack.com
 * Description: Ticketack integration
 * Text Domain: wpticketack
 * Domain Path: /app/locales
 * Version: 1.0.0
 * Author: Net Oxygen Sàrl
 * Author URI: https://netoxygen.ch
 * License: MIT
 */

date_default_timezone_set('Europe/Zurich');
setlocale(LC_TIME, 'fr_CH.UTF-8');

define("TKT_BASE", (dirname(__FILE__)));
define("TKT_CONFIG", (TKT_BASE.'/config'));
define("TKT_APP", (TKT_BASE.'/app'));
define("TKT_ACTIONS", TKT_APP.'/actions');
define("TKT_FILTERS", TKT_APP.'/filters');
define("TKT_SHORTCODES", TKT_APP.'/shortcodes');
define("TKT_TEMPLATES", TKT_APP.'/templates');
define("TKT_HELPERS", TKT_APP.'/helpers');
define("TKT_LIB", TKT_APP.'/ticketack');
define("OVERRIDE_DIR", get_template_directory());

define("LANG", substr(get_locale(), 0, 2));

// Load Composer autoload
require_once(TKT_BASE.'/vendor/autoload.php');

// Require app autoload
require_once(TKT_APP.'/autoload.php');

$app = TKTApp::get_instance();

$app->register_filter('RewriteFilter', 'rewrite.class.php');
$app->register_filter('QueryVarsFilter', 'query_vars.class.php');
$app->register_filter('FlushRewriteFilter', 'flush_rewrite.class.php');
$app->register_filter('MailpoetFilter', 'mailpoet.class.php');
$app->register_filter('BodyClassFilter', 'body_class.class.php');
$app->register_action('HeadScriptsAction', 'head_scripts.class.php');
$app->register_action('AdminMenuAction', 'admin_menu.class.php');
$app->register_action('AdminSettingsAction', 'admin_settings.class.php');
$app->register_action('AssetsAction', 'assets.class.php');
$app->register_action('SyncPostsAction', 'sync_posts.class.php');
$app->register_action('TranslationAction', 'translation.class.php');
$app->register_shortcode('ProgramShortcode', 'program.class.php');
$app->register_shortcode('EventShortcode', 'event.class.php');
$app->register_shortcode('ScreeningShortcode', 'screening.class.php');
$app->register_shortcode('CartShortcode', 'cart.class.php');
$app->register_shortcode('CartIconShortcode', 'cart_icon.class.php');
$app->register_shortcode('FilterShortcode', 'filter.class.php');
$app->register_shortcode('DaysFilterShortcode', 'days_filter.class.php');
$app->register_shortcode('UserConnectShortcode', 'user_connect.class.php');
$app->register_shortcode('BuyPassShortcode', 'buy_pass.class.php');

$app->start();
