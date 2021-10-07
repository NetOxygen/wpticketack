=== Ticketack ===
Tags: ticketack
Requires at least: 4.6
Tested up to: 5.6
Stable tag: 2.29.0
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

= 2.29.0 =

* feat: more fine grained ages
* fix: Updates Tippy when the day or time is changed
* fix: Remove the function date_default_timezone_set
* fix: update sccss import
* fix: Updating Moment with Timezone
* fix: time management by site origin

= 2.28.0 =

* feat: Icon and Tippy implementation tpl
* feat: Setting up the icons
* feat: Implementation of Tippy
* fix: notice if default fiels is empty
* modified templates : booking/form_pricings.tpl.php buy_pass/pass_list.tpl.php

= 2.27.0 =

* feat: Adds the description of the films
* feat: Displays the new detail list in event/_single
* fix: Disable popover function
* fix: update css
* fix: Displays subscriptions associated with the film
* fix: Deletes the single date film package
* fix: Displays the single date in the booking form
* fix: Fix Youtube conflict on windows messages

= 2.26.9 =

* fix: Fix css override loading in child theme

= 2.26.8 =

* fix: Fix a bug in the buy_pass shortcode

= 2.26.7 =

* fix: Set the url of addScreeningToCart
* fix: Change focus on the name step in booking wizard

= 2.26.6 =

* fix: Fix user connect

= 2.26.5 =

* fix: Fix ticket connect

= 2.26.4 =

* fix: Fix booking form

= 2.26.3 =

* fix: better messages
* fix: parametrize urls

= 2.26.2 =

* fix: Fix Pantaflix URL

= 2.26.1 =

* fix: Fix booking form

= 2.26.0 =

* feat: Introduce Pantaflix player

= 2.25.4 =

* fix: Force the refresh for get screenins on booking wizard (experimental)
* Fix: TabIndex in booking_wizard on booking wizard (experimental)
* Fix: Displays the carts for size on booking wizard (experimental)
* fix: Typo
* feat: Add sanitary measures

= 2.25.3 =

* fix: Change width of the select time on booking wizard (experimental)

= 2.25.2 =

* fix: Fix some bugs on booking wizard, again (experimental)

= 2.25.1 =

* fix: Fix some bugs on booking wizard (experimental)

= 2.25.0 =

* fix: Do not allow ticket connection (outside the map) when showing the map
* fix: Better handle pass panels in buy_pass shortcode

= 2.24.0 =

* feat: Handle one-time-pass user data on checkout
* feat: Use the new TicketID connection on events

= 2.23.0 =

* feat: Introduce booking wizard (experimental)

= 2.22.0 =

* feat: Introduce tkt_ticket_connect (Ticket connection using a TicketID) shortcode and deprecate tkt_user_connect
* feat: Make it possible to choose an integrated buy pass page
* fix: Fix booking_form shortcode ids attribute

= 2.21.0 =

* feat: Add a calendar to select the screening to book

= 2.20.1 =

* fix: Fix Safari bug on map

= 2.20.0 =

* feat: Introduce user account
* feat: Add tkt_user_login shortcode
* feat: Handle age, sex and country checkout fields
* fix: Regex for Youtube videos

= 2.19.0 =

* feat: Use Datatrans instead of Postfinance for online payments

= 2.18.1 =

* fix: Import screenings refs
* fix: Fix a bug when we have a pass in the cart

= 2.17.0 =

* feat: Add tkt_booking_form shortcode
* refactor: Use tkt_booking_form shortcode in events pages

= 2.17.0 =

* feat: Add add_to_cart_mode attribute on shop shortcode
* feat: Add tkt_cart_items and tkt_cart_summary shortcodes
* feat: Add tkt_user_register shortcode
* i18n: Add translations

= 2.16.0 =

* feat: Add "tags" attribute ion the shop shortcode

= 2.15.4 =

* i18n: Add some missing translations

= 2.15.3 =

* fix: Add option to configure underscore.js to prevent some js conflicts

= 2.15.2 =

* fix: Add more people activities translations

= 2.15.1 =

* fix: Fix people activities translations
* fix: Fix filter_rows shortcode

= 2.15.0 =

* feat: Handle wallets
* feat: Add articles pagination

= 2.14.0 =

* feat: Handle promo codes

= 2.13.0 =

* feat: Add sort choice on articles listing
* feat: Add hide_sorters attribute on shop shortcode
* feat: Add sort attribute on shop shortcode
* feat: Add nb attribute on shop shortcode
* feat: Add exclude attribute on shop shortcode
* feat: Add only_in_stock attribute on shop shortcode

= 2.12.1 =

* fix: Enhance articles listing

= 2.12.0 =

* feat: Show out of stock articles in listings
* feat: Add articles to cart from listings

= 2.11.2 =

* fix: Enhance session management

= 2.11.1 =

* fix: Prevent js error by adding a missing default value

= 2.11.0 =

* feat: Add ability to display map on booking form
* fix: PHP syntax error

= 2.10.1 =

* fix: Fix some js bugs on screenings form

= 2.10.0 =

* feat: Filter screenings pricings

= 2.9.1 =

* fix: Prevent js error in buy pass shortcode

= 2.9.0 =

* feat: Filter pass pricings

= 2.8.1 =

* fix: Article slug when no WPML installed
* fix: Add country list
* feat: Add ability to send admin notices
* fix: Don't throw exception when on backoffice

= 2.8.0 =
* feat: Add birthdate form field
* feat: Handle child themes for overrides
* feat: Add configuration to download attachments on import
* feat: Add screening_section_ids attribute on program shortcode
* fix: Fix config call in ScreeningsList component
* fix: Fix lang configuration

= 2.7.3 =
* fix: Fix photo field in pass form

= 2.7.2 =
* fix: Fix pass config

= 2.7.1 =
* feat: Enhance link from cart to checkout page

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
