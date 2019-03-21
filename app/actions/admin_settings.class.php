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
            array( $this, 'pages_section_api' ), // Callback
            'ticketack-admin' // Page
        );

        add_settings_field(
            'engine_uri', // ID
            'URL de l\'engine', // Title
            array( $this, 'engine_uri_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_api' // Section
        );

        add_settings_field(
            'eshop_uri', // ID
            'URL du eshop', // Title
            array( $this, 'eshop_uri_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_api' // Section
        );

        add_settings_field(
            'api_key', // ID
            'Clé d\'API', // Title
            array( $this, 'api_key_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_api' // Section
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

        add_settings_section(
            'ticketack_advanced', // ID
            'Options avancées', // Title
            array( $this, 'pages_section_advanced' ), // Callback
            'ticketack-admin' // Page
        );

        add_settings_field(
            'load_jquery', // ID
            'Charger jQuery', // Title
            array( $this, 'load_jquery_callback' ), // Callback
            'ticketack-admin', // Page
            'ticketack_advanced' // Section
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
    public function program_callback() { return $this->input('program', 'pages'); }
    public function cart_callback() { return $this->input('cart', 'pages'); }
    public function kronos_password_callback() { return $this->input('kronos_password', 'kronos'); }

    /** 
     * Print the Section text
     */
    public function pages_section_api()
    {
        print "Saisissez les informations d'accès à la billetterie";
    }
    public function engine_uri_callback() { return $this->input('engine_uri', 'api'); }
    public function eshop_uri_callback() { return $this->input('eshop_uri', 'api'); }
    public function api_key_callback() { return $this->input('api_key', 'api'); }

    /** 
     * Print the Section text
     */
    public function pages_section_advanced()
    {
        print "Ne modifiez les valeurs ci-dessous que si vous savez ce que vous faites.";
    }
    public function load_jquery_callback() { return $this->jquery_input('load_jquery', 'advanced'); }

    /**
     * Get an option input
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

    /**
     * Get a boolean option input
     *
     * @param string $name: The option name
     * @param string $group: The option group
     */
    public function jquery_input($name, $group)
    {
        $this->options = get_option($group);
        $value = isset($this->options[$name]) ? $this->options[$name] : 0;

        printf(
            '<select id="%s" name="%s[%s]">
                <option value="never" %s>Jamais (ce site fournit déjà une version >= 3)</option>
                <option value="if_needed" %s>Seulement si besoin (je ne connais pas la version fournie par ce site)</option>
                <option value="force" %s>Toujours (ce site ne fournit PAS de version >= 3)</option>
            </select>',
            $name,
            $group,
            $name,
            $value == 'never' ? 'selected' : '',
            $value == 'if_needed' ? 'selected' : '',
            $value == 'force' ? 'selected' : ''
        );
    }
}
