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
    public function event_callback() { return $this->input('event', 'pages'); }
    public function screening_callback() { return $this->input('screening', 'pages'); }
    public function kronos_password_callback() { return $this->input('kronos_password', 'kronos'); }

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
}
