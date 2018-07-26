<?php
/**
 * Admin Settings action
 */
class AdminSettingsAction extends TKTAction
{
    /**
     * Get this action tag
     *
     * @return string: The tag to use
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
        register_setting(
            'base', // Option group
            'uri', // Option name
            array( $this, 'sanitize' ) // Sanitize
        );

        add_settings_section(
            'ticketack_base', // ID
            'Configuration de base', // Title
            array( $this, 'base_section_info' ), // Callback
            'ticketack-admin' // Page
        );

        add_settings_field(
            'engine_uri', // ID
            'Ticketack Engine URI', // Title
            array( $this, 'engine_uri_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_base' // Section
        );

        add_settings_field(
            'eshop_uri', // ID
            'Ticketack Eshop URI', // Title
            array( $this, 'eshop_uri_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_base' // Section
        );

        add_settings_field(
            'api_key', // ID
            'API Key', // Title
            array( $this, 'api_key_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_base' // Section
        );

        add_settings_section(
            'ticketack_pages', // ID
            'Pages', // Title
            array( $this, 'pages_section_info' ), // Callback
            'ticketack-admin' // Page
        );

        add_settings_field(
            'program', // ID
            'Programme', // Title
            array( $this, 'program_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'cart', // ID
            'Panier', // Title
            array( $this, 'cart_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'event', // ID
            'Événement', // Title
            array( $this, 'event_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_pages' // Section
        );

        add_settings_field(
            'password', // ID
            'Séance', // Title
            array( $this, 'screening_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_pages' // Section
        );

        add_settings_section(
            'ticketack_kronos', // ID
            'Kronos', // Title
            array( $this, 'kronos_section_info' ), // Callback
            'ticketack-admin' // Page
        );

        add_settings_field(
            'kronos_username', // ID
            'Username', // Title
            array( $this, 'kronos_username_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_kronos' // Section
        );

        add_settings_field(
            'kronos_password', // ID
            'Password', // Title
            array( $this, 'kronos_password_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_kronos' // Section
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
    public function base_section_info()
    {
        print "Saisissez les informations d'accès à l'API Ticketack";
    }

    /** 
     * Print the Section text
     */
    public function pages_section_info()
    {
        print "Saisissez les slugs des pages contenant les différents shortcodes";
    }

    /** 
     * Print the Section text
     */
    public function kronos_section_info()
    {
        print "Saisissez les informations d'accès à Kronos";
    }

    public function engine_uri_callback() { return $this->input('engine_uri', 'base'); }
    public function eshop_uri_callback() { return $this->input('eshop_uri', 'base'); }
    public function api_key_callback() { return $this->input('api_key', 'base'); }
    public function program_callback() { return $this->input('program', 'pages'); }
    public function cart_callback() { return $this->input('cart', 'pages'); }
    public function event_callback() { return $this->input('event', 'pages'); }
    public function screening_callback() { return $this->input('screening', 'pages'); }
    public function kronos_username_callback() { return $this->input('kronos_username', 'kronos'); }
    public function kronos_password_callback() { return $this->input('kronos_password', 'kronos'); }

    /**
     * Get on option input
     *
     * @param string $name: The option name
     * @param string $group: The option group
     */
    public function input($name, $group)
    {
        $this->options = get_option($group);
        printf(
            '<input type="text" id="%s" name="%s[%s]" value="%s" />',
            $name,
            $group,
            $name,
            isset( $this->options[$name] ) ? esc_attr($this->options[$name]) : ''
        );
    }
}
