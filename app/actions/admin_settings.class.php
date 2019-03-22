<?php
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
            'Accès à Ticketack', // Title
            array( $this, 'api_section_info' ), // Callback
            'ticketack-api' // Page
        );

        add_settings_field(
            'engine_uri', // ID
            'URL de l\'engine', // Title
            array( $this, 'engine_uri_callback' ), // Callback
            'ticketack-api', // Page
            'ticketack_api' // Section
        );

        add_settings_field(
            'eshop_uri', // ID
            'URL du eshop', // Title
            array( $this, 'eshop_uri_callback' ), // Callback
            'ticketack-api', // Page
            'ticketack_api' // Section
        );

        add_settings_field(
            'api_key', // ID
            'Clé d\'API', // Title
            array( $this, 'api_key_callback' ), // Callback
            'ticketack-api', // Page
            'ticketack_api' // Section
        );

        add_settings_section(
            'ticketack_pages', // ID
            'Pages', // Title
            array( $this, 'pages_section_info' ), // Callback
            'ticketack-pages' // Page
        );

        add_settings_field(
            'program', // ID
            'Programme', // Title
            array( $this, 'program_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'cart', // ID
            'Panier', // Title
            array( $this, 'cart_callback' ), // Callback
            'ticketack-pages', // Page
            'ticketack_pages' // Section
        );

        add_settings_section(
            'ticketack_images_dimensions', // ID
            'Dimensions des images', // Title
            array( $this, 'images_dimensions_section_info' ), // Callback
            'ticketack-images' // Page
        );

        add_settings_field(
            'big_width', // ID
            'Largeur des grandes images', // Title
            array( $this, 'big_width_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_dimensions' // Section
        );

        add_settings_field(
            'big_height', // ID
            'Hauteur des grandes images', // Title
            array( $this, 'big_height_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_dimensions' // Section
        );

        add_settings_field(
            'medium_width', // ID
            'Largeur des images moyennes', // Title
            array( $this, 'medium_width_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_dimensions' // Section
        );

        add_settings_field(
            'medium_height', // ID
            'Hauteur des images moyennes', // Title
            array( $this, 'medium_height_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_dimensions' // Section
        );

        add_settings_section(
            'ticketack_images_proxy', // ID
            'Serveur proxy d\'images', // Title
            array( $this, 'images_proxy_section_info' ), // Callback
            'ticketack-images' // Page
        );

        add_settings_field(
            'host', // ID
            'Serveur proxy', // Title
            array( $this, 'proxy_img_host_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_proxy' // Section
        );

        add_settings_field(
            'key', // ID
            'Clé du serveur proxy', // Title
            array( $this, 'proxy_img_key_callback' ), // Callback
            'ticketack-images', // Page
            'ticketack_images_proxy' // Section
        );

        add_settings_section(
            'ticketack_pass', // ID
            'Abonnements', // Title
            array( $this, 'pass_section_info' ), // Callback
            'ticketack-pass' // Page
        );

        add_settings_field(
            'requested_pass_owner_data', // ID
            'Champs à saisir pour chaque type d\'abonnement', // Title
            array( $this, 'requested_pass_owner_data_callback' ), // Callback
            'ticketack-pass', // Page
            'ticketack_pass' // Section
        );

        add_settings_section(
            'ticketack_i18n', // ID
            'Langues', // Title
            array( $this, 'i18n_section_info' ), // Callback
            'ticketack-i18n' // Page
        );

        add_settings_field(
            'default_lang', // ID
            'Langue par défaut', // Title
            array( $this, 'default_lang_callback' ), // Callback
            'ticketack-i18n', // Page
            'ticketack_i18n' // Section
        );

        add_settings_section(
            'ticketack_advanced', // ID
            'Options avancées', // Title
            array( $this, 'advanced_section_info' ), // Callback
            'ticketack-advanced' // Page
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
        print "Saisissez les slugs des pages contenant les différents shortcodes";
    }
    public function program_callback() { return $this->input('program', 'tkt_pages', 'program'); }
    public function cart_callback() { return $this->input('cart', 'tkt_pages', 'cart'); }

    /** 
     * Print the Section text
     */
    public function api_section_info()
    {
        print "Saisissez les informations d'accès à la billetterie";
    }
    public function engine_uri_callback() { return $this->input('engine_uri', 'tkt_api', 'https://xxx-engine.ticketack.com'); }
    public function eshop_uri_callback() { return $this->input('eshop_uri', 'tkt_api', 'https://xxx-eshop.ticketack.com'); }
    public function api_key_callback() { return $this->input('api_key', 'tkt_api', '12345678-1234-1234-1234-123456789012'); }

    /** 
     * Print the Section text
     */
    public function images_dimensions_section_info()
    {
        print "Dimensions des grandes et moyennes images (en px).";
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
        print "Configuration du serveur proxy d'images.";
    }
    public function proxy_img_host_callback() { return $this->input('host', 'tkt_images_proxy', 'proxy.img.ch'); }
    public function proxy_img_key_callback() { return $this->input('key', 'tkt_images_proxy', 'AccessKey'); }

    /**
     * Print the Section text
     */
    public function pass_section_info()
    {
        print "Configuration de la vente d'abonnements.";
    }
    public function requested_pass_owner_data_callback() { return $this->textarea('requested_pass_owner_data', 'tkt_pass'); }

    /**
     * Print the Section text
     */
    public function i18n_section_info()
    {
        print "Configuration des langues.";
    }
    public function default_lang_callback() { return $this->input('default_lang', 'tkt_i18n', 'fr'); }

    /** 
     * Print the Section text
     */
    public function advanced_section_info()
    {
        print "Ne modifiez les valeurs ci-dessous que si vous savez ce que vous faites.";
    }

    /**
     * Get an option input
     *
     * @param string $name: The option name
     * @param string $group: The option group
     * @param string $placeholder: The option placeholder
     */
    public function input($name, $group, $placeholder = null)
    {
        $this->options = get_option($group);
        $value = isset($this->options[$name]) ? esc_attr($this->options[$name]) : null;
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
}
