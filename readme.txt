=== Ticketack ===
Tags: ticketack
Requires at least: 4.6
Tested up to: 5.4.2
Stable tag: 2.7.0
Requires PHP: 5.6
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Ticketack integration plugin.

== Description ==

Official Ticketack integration plugin.

Main features:

*   Display upcoming movies and screenings
*   Many display layouts (list, grid, gallery...)
*   Full add to cart and checkout process

Please note that you must have been provided some configuration informations
from the Ticketack team to be able to use this plugin.

== Installation ==

This section describes how to install the plugin and get it working.

1. Activate the plugin through the 'Plugins' screen in WordPress
2. Use the Settings->Ticketack screen to configure the plugin

== Frequently Asked Questions ==

== Screenshots ==

== Changelog ==

= 2.7.0 =
* feat: Activate video controls on event template
* feat: Add places filter on next_screening shortcode

= 2.6.11 =
* fix: Fix confirm bug

= 2.6.10 =
* fix: Fix pass bug

= 2.6.9 =
* feat: Better handle articles stocks
* fix: Fix remove item from cart

= 2.6.8 =
* fix: Fix bugs on Safari

= 2.6.7 =
* fix: Fix cart bug
* fix: Fix border radius option

= 2.6.6 =
* ui: Rework templates (please check your template overrides)
* ui: Clean styles

= 2.6.5 =
* fix: Fix translation bug

= 2.6.4 =
* fix: Fix pages options bug
* fix: Fix scss compilation process

= 2.6.3 =
* feat: Add color picker for color config
* feat: Enhance translation
* fix: Fix scss compilation process

= 2.6.2 =
* fix: Fix deploy

= 2.6.1 =
* fix: Fix accordion
* fix: Fix admin bug in pages option

= 2.6.0 =
* feat: Get rid of RequireJS and Bootstrap (js) to maximize compatibility
* fix: Enhance scss compilation process
* fix: FIx slug translation bug

= 2.5.0 =
* feat: Add the Checkout process shortcode
* feat: Add the shop
* feat: Add overridables UI options
* feat: Add url output and with_link attribute to tkt_next_screening shortcode
* feat: Add cart and checkout options
* feat: Add hide_links attribute on cart shortcode
* fix: Redirections to cart or program when on a translated page
* fix: Movies title which appeared as objects

= 2.4.5 =
* feat: add output option to tkt_next_screening shortcode
* fix: add to cxart on Safari

= 2.4.4 =
* fix: small bug

= 2.4.3 =
* feat: new tkt_next_screening shortcode
* fix: accordion bug in buy pass page
* fix: Edge (un)compatibility

= 2.4.2 =
* Better handle getting screening infos

= 2.4.1 =
* Get the infos for more than 100 screenings
* Fix program shortcode day filter
* Fix post images bug

= 2.4.0 =
* Handle theme provided shortcodes and JS components
* Add ScreeningsList template for booking form
* Handle Vimeo trailers
* Add photo support on buy pass shortcode
* Add required and requested fields support on buy pass shortcode
* Enhance translations
* Add data-target support on filter_rows shortcode
* Fix lang on redirection to ticketack cart
* Fix carousel format
* Fix pricings popovers

= 2.3.1 =
* Small fix

= 2.3.0 =
* Add new filter_rows shortcode
* Enhance translation
* Small fixes

= 2.2.0 =
* Introduce film packages template
* Add filter_fields attribute on program shortcode to prepare filters work
* Small fixes

= 2.1.4 =
* Restore posters on events sliders

= 2.1.2 =
* Fix import from Ticketack

= 2.1.1 =
* Fix some language problems on import from Ticketack

= 2.1.0 =
* Add the "places" filter on program shortcode
* Minor bug fixes

= 2.0 =
* Be careful, there are breaking changes in this version, specially in the
  templates. You should backup before updating and call us if you have any doubt.

= 1.0 =
* First release
