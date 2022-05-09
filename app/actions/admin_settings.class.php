<?php
namespace Ticketack\WP\Actions;

use Ticketack\Core\Models\User;
use Ticketack\Core\Models\Salepoint;

/**
 * Admin Settings action
 */
class AdminSettingsAction extends TKTAction
{
    /**
     * Get this action tag(s)
     *
     * @return mixed: A single tag (which will call the <code>run</code> method)
     *                or an associative array with the tag as key and the method to call as value.
     */
    public function get_tag()
    {
        return "admin_init";
    }

    /**
     * Run this action
     */
    public function run()
    {
        add_settings_section(
            'ticketack_api', // ID
            tkt_t('Accès à Ticketack'), // Title
            array( $this, 'api_section_info' ), // Callback
            'ticketack-api' // Page
        );

        add_settings_field(
            'engine_uri', // ID
            tkt_t('URL de l\'engine'), // Title
            array( $this, 'engine_uri_callback' ), // Callback
            'ticketack-api', // Page
            'ticketack_api' // Section
        );

        add_settings_field(
            'eshop_uri', // ID
            tkt_t('URL du eshop'), // Title
            array( $this, 'eshop_uri_callback' ), // Callback
            'ticketack-api', // Page
            'ticketack_api' // Section
        );

        add_settings_field(
            'api_key', // ID
            tkt_t('Clé d\'API'), // Title
            array( $this, 'api_key_callback' ), // Callback
            'ticketack-api', // Page
            'ticketack_api' // Section
        );

        add_settings_field(
            'salepoint_id', // ID
            tkt_t('Point de vente de ce site web'), // Title
            array( $this, 'salepoint_id_callback' ), // Callback
            'ticketack-api', // Page
            'ticketack_api' // Section
        );

        add_settings_field(
            'cashregister_id', // ID
            tkt_t('Caisse de ce site web'), // Title
            array( $this, 'cashregister_id_callback' ), // Callback
            'ticketack-api', // Page
            'ticketack_api' // Section
        );

        add_settings_section(
            'ticketack_pages', // ID
            tkt_t('Pages'), // Title
            array( $this, 'pages_section_info' ), // Callback
            'ticketack-pages' // Page
        );

        add_settings_field(
            'program', // ID
            tkt_t('Programme'), // Title
            array( $this, 'program_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'shop', // ID
            tkt_t('Articles'), // Title
            array( $this, 'shop_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'pass', // ID
            tkt_t('Abonnements'), // Title
            array( $this, 'pass_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'ticket_view', // ID
            tkt_t('Vue du ticket'), // Title
            array( $this, 'ticket_view_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'cart', // ID
            tkt_t('Panier'), // Title
            array( $this, 'cart_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'checkout', // ID
            tkt_t('Checkout'), // Title
            array( $this, 'checkout_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'registration', // ID
            tkt_t('Registration'), // Title
            array( $this, 'registration_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'login', // ID
            tkt_t('Connexion'), // Title
            array( $this, 'login_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'account', // ID
            tkt_t('Mon compte'), // Title
            array( $this, 'account_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'thank_you', // ID
            tkt_t('Remerciements'), // Title
            array( $this, 'thank_you_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_section(
            'ticketack_cart', // ID
            tkt_t('Panier'), // Title
            array( $this, 'cart_section_info' ), // Callback
            'ticketack-cart' // Page
        );

        add_settings_field(
            'cart_redirect', // ID
            tkt_t('Redirection à la mise au panier'), // Title
            array( $this, 'cart_redirect_callback' ), // Callback
            'ticketack-cart', // Page
            'ticketack_cart' // Section
        );

        add_settings_section(
            'ticketack_checkout', // ID
            tkt_t('Checkout'), // Title
            array( $this, 'checkout_section_info' ), // Callback
            'ticketack-checkout' // Page
        );

        add_settings_field(
            'cgv', // ID
            tkt_t('URL des CGV'), // Title
            array( $this, 'cgv_callback' ), // Callback
            'ticketack-checkout', // Page
            'ticketack_checkout' // Section
        );

        add_settings_field(
            'privacy', // ID
            tkt_t('URL des conditions de protection des données'), // Title
            array( $this, 'privacy_callback' ), // Callback
            'ticketack-checkout', // Page
            'ticketack_checkout' // Section
        );

        add_settings_field(
            'sanitary', // ID
            tkt_t('URL des mesures sanitaires'), // Title
            array( $this, 'sanitary_callback' ), // Callback
            'ticketack-checkout', // Page
            'ticketack_checkout' // Section
        );

        add_settings_field(
            'requested_fields', // ID
            tkt_t('Informations optionnelles à saisir'), // Title
            array( $this, 'requested_fields_callback' ), // Callback
            'ticketack-checkout', // Page
            'ticketack_checkout' // Section
        );

        add_settings_field(
            'required_fields', // ID
            tkt_t('Informations obligatoires à saisir'), // Title
            array( $this, 'required_fields_callback' ), // Callback
            'ticketack-checkout', // Page
            'ticketack_checkout' // Section
        );

        add_settings_field(
            'allow_later', // ID
            tkt_t('Autoriser les réservations'), // Title
            array( $this, 'allow_later_callback' ), // Callback
            'ticketack-checkout', // Page
            'ticketack_checkout' // Section
        );

        add_settings_field(
            'allow_postfinance', // ID
            tkt_t('Autoriser les achats'), // Title
            array( $this, 'allow_postfinance_callback' ), // Callback
            'ticketack-checkout', // Page
            'ticketack_checkout' // Section
        );

        add_settings_section(
            'ticketack_registration', // ID
            tkt_t('Registration'), // Title
            array( $this, 'registration_section_info' ), // Callback
            'ticketack-registration' // Page
        );

        add_settings_field(
            'allow_registration', // ID
            tkt_t('Autoriser l\'enregistrement des utilisateurs'), // Title
            array( $this, 'allow_registration_callback' ), // Callback
            'ticketack-registration', // Page
            'ticketack_registration' // Section
        );

        add_settings_field(
            'requested_fields', // ID
            tkt_t('Informations optionnelles à saisir'), // Title
            array( $this, 'registration_requested_fields_callback' ), // Callback
            'ticketack-registration', // Page
            'ticketack_registration' // Section
        );

        add_settings_field(
            'required_fields', // ID
            tkt_t('Informations obligatoires à saisir'), // Title
            array( $this, 'registration_required_fields_callback' ), // Callback
            'ticketack-registration', // Page
            'ticketack_registration' // Section
        );

        add_settings_section(
            'ticketack_images_dimensions', // ID
            tkt_t('Dimensions des images'), // Title
            array( $this, 'images_dimensions_section_info' ), // Callback
            'ticketack-images' // Page
        );

        add_settings_field(
            'big_width', // ID
            tkt_t('Largeur des grandes images'), // Title
            array( $this, 'big_width_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_dimensions' // Section
        );

        add_settings_field(
            'big_height', // ID
            tkt_t('Hauteur des grandes images'), // Title
            array( $this, 'big_height_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_dimensions' // Section
        );

        add_settings_field(
            'medium_width', // ID
            tkt_t('Largeur des images moyennes'), // Title
            array( $this, 'medium_width_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_dimensions' // Section
        );

        add_settings_field(
            'medium_height', // ID
            tkt_t('Hauteur des images moyennes'), // Title
            array( $this, 'medium_height_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_dimensions' // Section
        );

        add_settings_section(
            'ticketack_images_proxy', // ID
            tkt_t('Serveur proxy d\'images'), // Title
            array( $this, 'images_proxy_section_info' ), // Callback
            'ticketack-images' // Page
        );

        add_settings_field(
            'host', // ID
            tkt_t('Serveur proxy'), // Title
            array( $this, 'proxy_img_host_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_proxy' // Section
        );

        add_settings_section(
            'ticketack_pass', // ID
            tkt_t('Abonnements'), // Title
            array( $this, 'pass_section_info' ), // Callback
            'ticketack-pass' // Page
        );

        add_settings_field(
            'requested_pass_owner_data', // ID
            tkt_t('Champs à saisir pour chaque type d\'abonnement'), // Title
            array( $this, 'requested_pass_owner_data_callback' ), // Callback
            'ticketack-pass', // Page
            'ticketack_pass' // Section
        );

        add_settings_section(
            'ticketack_i18n', // ID
            tkt_t('Langues'), // Title
            array( $this, 'i18n_section_info' ), // Callback
            'ticketack-i18n' // Page
        );

        add_settings_field(
            'default_lang', // ID
            tkt_t('Langue par défaut'), // Title
            array( $this, 'default_lang_callback' ), // Callback
            'ticketack-i18n', // Page
            'ticketack_i18n' // Section
        );

        add_settings_section(
            'ticketack_import', // ID
            tkt_t('Import'), // Title
            array( $this, 'import_section_info' ), // Callback
            'ticketack-import' // Page
        );

        add_settings_field(
            'tags_filter', // ID
            tkt_t('Filtrer les events sur les tags suivants'), // Title
            array( $this, 'tags_filter_callback' ), // Callback
            'ticketack-import', // Page
            'ticketack_import' // Section
        );

        add_settings_field(
            'places_filter', // ID
            tkt_t('Filtrer les events sur les salles suivantes (id)'), // Title
            array( $this, 'places_filter_callback' ), // Callback
            'ticketack-import', // Page
            'ticketack_import' // Section
        );

        add_settings_field(
            'save_attachments', // ID
            tkt_t('Télécharger les images à la une'), // Title
            array( $this, 'save_attachments_callback' ), // Callback
            'ticketack-import', // Page
            'ticketack_import' // Section
        );

        add_settings_section(
            'ticketack_advanced', // ID
            tkt_t('Librairies JS'), // Title
            array( $this, 'advanced_section_info' ), // Callback
            'ticketack-advanced' // Page
        );

        add_settings_field(
            'load_underscore_at_the_end', // ID
            tkt_t('Charger underscore.js après le module'), // Title
            array( $this, 'load_underscore_at_the_end_callback' ), // Callback
            'ticketack-advanced', // Page
            'ticketack_advanced' // Section
        );

        add_settings_section(
            'ticketack_advanced_css', // ID
            tkt_t('Customisation CSS'), // Title
            array( $this, 'advanced_css_section_info' ), // Callback
            'ticketack-advanced' // Page
        );

        $variables = get_overridable_scss_variables();
        foreach ($variables as $key => $value) {
            if ($key == 'border_radius' || $key == 'section_padding') {
                continue;
            }
            add_settings_field(
                $key, // ID
                tkt_t(str_replace('_', ' ', ucfirst(strtolower($key)))), // Title
                [$this, 'color_callback'], // Callback
                'ticketack-advanced', // Page
                'ticketack_advanced_css', // Section
                [
                    'name'        => $key,
                    'group'       => 'tkt_advanced',
                    'placeholder' => $value,
                    'value'     => $value
                ]
            );
        }

        add_settings_field(
            'section_padding', // ID
            tkt_t('Sections padding'), // Title
            array( $this, 'section_padding_callback' ), // Callback
            'ticketack-advanced', // Page
            'ticketack_advanced_css' // Section
        );

        add_settings_field(
            'border_radius', // ID
            tkt_t('Border radius'), // Title
            array( $this, 'border_radius_callback' ), // Callback
            'ticketack-advanced', // Page
            'ticketack_advanced_css' // Section
        );
    }

    /**
     * Sanitize each setting field as needed
     *
     * @param array $input Contains all settings fields as array keys
     */
    public function sanitize( $input )
    {
        $new_input = array();
        if( isset( $input['id_number'] ) )
            $new_input['id_number'] = absint( $input['id_number'] );

        if( isset( $input['title'] ) )
            $new_input['title'] = sanitize_text_field( $input['title'] );

        return $new_input;
    }

    /** 
     * Print the Section text
     */
    public function pages_section_info()
    {
        print tkt_t("Saisissez les slugs des pages contenant les différents shortcodes");
    }
    public function program_callback() { return $this->page_choice('program', 'tkt_pages', 'program'); }
    public function shop_callback() { return $this->page_choice('shop', 'tkt_pages', 'shop'); }
    public function pass_callback() { return $this->page_choice('pass', 'tkt_pages', 'pass'); }
    public function ticket_view_callback() { return $this->page_choice('ticket_view', 'tkt_pages', 'ticket_view'); }
    public function cart_callback() { return $this->page_choice('cart', 'tkt_pages', 'cart'); }
    public function checkout_callback() { return $this->page_choice('checkout', 'tkt_pages', 'checkout'); }
    public function registration_callback() { return $this->page_choice('registration', 'tkt_pages', 'registration'); }
    public function login_callback() { return $this->page_choice('login', 'tkt_pages', 'login'); }
    public function account_callback() { return $this->page_choice('account', 'tkt_pages', 'account'); }
    public function thank_you_callback() { return $this->page_choice('thank_you', 'tkt_pages', 'thank_you'); }

    /** 
     * Print the Section text
     */
    public function cart_section_info()
    {
        print tkt_t("Configurez le comportement du panier");
    }
    public function cart_redirect_callback() {
        return $this->choice('cart_redirect', 'tkt_cart', [
            'Aucune'           => 'none',
            'Vers le panier'   => 'cart',
            'Vers le checkout' => 'checkout'
        ]);
    }

    /** 
     * Print the Section text
     */
    public function checkout_section_info()
    {
        print tkt_t("Saisissez les informations concernant la page de paiement");
    }
    public function cgv_callback() { return $this->input('cgv', 'tkt_checkout', 'https://my-site.tld/cgv'); }
    public function privacy_callback() { return $this->input('privacy', 'tkt_checkout', 'https://my-site.tld/privacy'); }
    public function sanitary_callback() { return $this->input('sanitary', 'tkt_checkout', 'https://my-site.tld/health'); }
    public function requested_fields_callback() { return $this->input('requested_fields', 'tkt_checkout', 'firstname,lastname,email,address,zip,city,phone,cellphone', 'firstname,lastname,email,address,zip,city,phone,cellphone'); }
    public function required_fields_callback() { return $this->input('required_fields', 'tkt_checkout', 'email', 'email'); }
    public function allow_later_callback() { return $this->boolean('allow_later', 'tkt_checkout', '1'); }
    public function allow_postfinance_callback() { return $this->boolean('allow_postfinance', 'tkt_checkout', '1'); }

    /** 
     * Print the Section text
     */
    public function registration_section_info()
    {
        print tkt_t("Configuration de l'enregistrement des utilisateurs");
    }
    public function registration_requested_fields_callback() { return $this->input('requested_fields', 'tkt_registration', 'firstname,lastname,email,address,zip,city,phone,cellphone', 'firstname,lastname,email,address,zip,city,phone,cellphone'); }
    public function registration_required_fields_callback() { return $this->input('required_fields', 'tkt_registration', 'firstname,lastname,email', 'firstname,lastname,email'); }
    public function allow_registration_callback() { return $this->boolean('allow_registration', 'tkt_registration', '1'); }


    /** 
     * Print the Section text
     */
    public function api_section_info()
    {
        print tkt_t("Saisissez les informations d'accès à la billetterie");
    }
    public function engine_uri_callback() { return $this->input('engine_uri', 'tkt_api', 'https://xxx-engine.ticketack.com'); }
    public function eshop_uri_callback() { return $this->input('eshop_uri', 'tkt_api', 'https://xxx-eshop.ticketack.com'); }
    public function api_key_callback() { return $this->input('api_key', 'tkt_api', '12345678-1234-1234-1234-123456789012'); }
    public function salepoint_id_callback() {
        $user = User::get_current();
        $options = ['---' => null];
        if (!is_null($user)) {
            foreach ($user->salepoints() as $_id) {
                $salepoint = Salepoint::find($_id);
                $options[$salepoint->name(TKT_LANG)] = $_id;
            }
        }
        return $this->choice('salepoint_id', 'tkt_api', $options);
    }
    public function cashregister_id_callback() {
        $user = User::get_current();
        $options = ['---' => null];
        if (!is_null($user)) {
            foreach ($user->salepoints() as $_id) {
                $salepoint = Salepoint::find($_id);
                foreach ($salepoint->cashregisters() as $cashregister) {
                    $options[$salepoint->name(TKT_LANG).'/'.$cashregister->name(TKT_LANG)] = $cashregister->_id();
                }
            }
        }
        return $this->choice('cashregister_id', 'tkt_api', $options);
    }

    /** 
     * Print the Section text
     */
    public function images_dimensions_section_info()
    {
        print tkt_t("Dimensions des grandes et moyennes images (en px).");
    }
    public function big_width_callback() { return $this->input('big_width', 'tkt_images_dimensions', 924); }
    public function big_height_callback() { return $this->input('big_height', 'tkt_images_dimensions', 520); }
    public function medium_width_callback() { return $this->input('medium_width', 'tkt_images_dimensions', 600); }
    public function medium_height_callback() { return $this->input('medium_height', 'tkt_images_dimensions', 80); }

    /** 
     * Print the Section text
     */
    public function images_proxy_section_info()
    {
        print tkt_t("Configuration du serveur proxy d'images.");
    }
    public function proxy_img_host_callback() { return $this->input('host', 'tkt_images_proxy', 'images.weserv.nl', 'images.weserv.nl'); }

    /**
     * Print the Section text
     */
    public function pass_section_info()
    {
        print tkt_t("Configuration de la vente d'abonnements.");
    }
    public function requested_pass_owner_data_callback() { return $this->textarea('requested_pass_owner_data', 'tkt_pass'); }

    /**
     * Print the Section text
     */
    public function i18n_section_info()
    {
        print tkt_t("Configuration des langues.");
    }
    public function default_lang_callback() {
        return $this->choice('default_lang', 'tkt_i18n', [
            // TODO: get langs from WPML
            'Français' => 'fr',
            'Anglais'  => 'en',
            'Allemand' => 'de',
            'Italien'  => 'it'
        ], 'fr');
    }

    /**
     * Print the Section text
     */
    public function import_section_info()
    {
        print tkt_t("Configuration de l'import");
    }
    public function tags_filter_callback() { return $this->input('tags_filter', 'tkt_import', ''); }
    
    public function places_filter_callback()
    {
        return $this->input('places_filter', 'tkt_import', '');
    }
    public function save_attachments_callback() { return $this->boolean('save_attachments', 'tkt_import', false, /*inversed*/true); }

    /** 
     * Print the Section text
     */
    public function advanced_section_info()
    {
        print tkt_t("Ne modifiez les valeurs ci-dessous que si vous avez des conflits javascript avec d'autres plugins.");
    }
    public function load_underscore_at_the_end_callback() { return $this->boolean('load_underscore_at_the_end', 'tkt_advanced', '0', /*inversed*/true); }
    public function advanced_css_section_info()
    {
        print tkt_t("Ne modifiez les valeurs ci-dessous que si vous savez ce que vous faites.");
    }
    public function color_callback($args) {
        return $this->color_input($args['name'], $args['group'], $args['placeholder'], $args['value'], $args);
    }
    public function section_padding_callback() { return $this->input('section_padding', 'tkt_advanced', '20px', '20px'); }

    public function border_radius_callback() { return $this->input('border_radius', 'tkt_advanced', '4px', '4px'); }

    /**
     * Get an option color input
     *
     * @param string $name: The option name
     * @param string $group: The option group
     * @param string $placeholder: The option placeholder
     * @param string $default: The option default value
     */
    public function color_input($name, $group, $placeholder = null, $default = null)
    {
        $this->options = get_option($group);
        $value = isset($this->options[$name]) ? esc_attr($this->options[$name]) : $default;
        if (strpos($value, '#') !== 0) {
            $value = '#'.$value;
        }
        printf(
            '<input data-jscolor="{hash:true}" type="text" id="%s" name="%s[%s]" value="%s" placeholder="%s"/><div>',
            $name,
            $group,
            $name,
            $value,
            $placeholder != null ? $placeholder : ''
        );
    }

    /**
     * Get an option input
     *
     * @param string $name: The option name
     * @param string $group: The option group
     * @param string $placeholder: The option placeholder
     * @param string $default: The option default value
     */
    public function input($name, $group, $placeholder = null, $default = null)
    {
        $this->options = get_option($group);
        $value = isset($this->options[$name]) ? esc_attr($this->options[$name]) : $default;
        printf(
            '<input type="text" id="%s" name="%s[%s]" value="%s" placeholder="%s"/>',
            $name,
            $group,
            $name,
            $value,
            $placeholder != null ? $placeholder : ''
        );
    }

    /**
     * Get an option boolean input
     *
     * @param string $name: The option name
     * @param string $group: The option group
     * @param string $default: The option default value
     */
    public function boolean($name, $group, $default = null, $inversed = false)
    {
        $this->options = get_option($group);
        $value = isset($this->options[$name]) ? intval(esc_attr($this->options[$name])) : $default;
        if ($inversed) {
            printf(
                '<select id="%s" name="%s[%s]">
                    <option value="0" '.($value === 0 ? "selected" : "").'>Non</option>
                    <option value="1" '.($value === 1 ? "selected" : "").'>Oui</option>
                 </select>',
                $name,
                $group,
                $name
            );
        } else {
            printf(
                '<select id="%s" name="%s[%s]">
                    <option value="1" '.($value === 1 ? "selected" : "").'>Oui</option>
                    <option value="0" '.($value === 0 ? "selected" : "").'>Non</option>
                 </select>',
                $name,
                $group,
                $name
            );
        }
    }

    /**
     * Get an option choice input
     *
     * @param string $name: The option name
     * @param string $group: The option group
     * @param array $choices: The option choices
     * @param string $default: The option default value
     */
    public function choice($name, $group, $choices, $default = null)
    {
        $this->options = get_option($group);
        $value         = isset($this->options[$name]) ?
            esc_attr($this->options[$name]) :
            $default;
        printf('<select id="%s" name="%s[%s]">', $name, $group, $name);
        foreach ($choices as $label => $v) {
            echo '
                <option value="'.$v.'" '.($value === $v ? "selected" : "").' >'.$label.'</option>';
        }
        echo '</select>';
    }

    /**
     * Get an option page choice input
     *
     * @param string $name: The option name
     * @param string $group: The option group
     * @param string $default: The option default value
     */
    public function page_choice($name, $group, $default = null)
    {
        $pages         = $this->get_pages();
        $this->options = get_option($group);
        $value         = isset($this->options[$name]) ?
            esc_attr($this->options[$name]) :
            $default;
        printf('<select id="%s" name="%s[%s]">', $name, $group, $name);
        echo '<option value="">---</option>';
        if (!empty($pages)) {
            foreach ($pages as $label => $v) {
                echo '
                    <option value="'.$v.'" '.($value === $v ? "selected" : "").' >'.$label.'</option>';
            }
        }
        echo '</select>';
    }

    /**
     * Get an option textarea
     *
     * @param string $name: The option name
     * @param string $group: The option group
     */
    public function textarea($name, $group)
    {
        $this->options = get_option($group);
        $value = isset($this->options[$name]) ? esc_attr($this->options[$name]) : null;
        printf(
            '<textarea rows="4" cols="50" id="%s" name="%s[%s]">%s</textarea>',
            $name,
            $group,
            $name,
            $value
        );
    }

    public function get_pages()
    {
        static $all_pages = null;
        if (isset($all_pages) && $all_pages != null) {
            return $all_pages;
        }

        $pages = get_pages('sort_column=menu_order');
        if ($pages != null) {
            foreach ($pages as $page) {
                $ancestor_ids = get_ancestors($page->ID, 'page');

                $slug = implode('/', array_map(function ($id) {
                    $tr_ancestor_id = TKT_WPML_INSTALLED ? icl_object_id($id, 'page', FALSE, tkt_default_lang()) : $id;
                    return get_post($tr_ancestor_id)->post_name;
                }, $ancestor_ids));

                $slug .= '/'.tkt_translated_slug_by_id($page->ID, 'page', tkt_default_lang(), $page->post_name);
                $label = str_repeat('-', count($ancestor_ids)).$page->post_title;
                $all_pages[$label] = $slug;
            }
        }

        return $all_pages;
    }
}
