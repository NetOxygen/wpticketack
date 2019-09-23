<?php
namespace Ticketack\WP\Actions;

/**
 * Admin Menu action
 */
class CustomTypesAction extends TKTAction
{
    /**
     * Get this action tag(s)
     *
     * @return mixed: A single tag (which will call the <code>run</code> method)
     *                or an associative array with the tag as key and the method to call as value.
     */
    public function get_tag()
    {
        return "init";
    }

    /**
     * Run this action
     */
    public function run()
    {
        $labels_event = array(
            'name'               => _x('Ticketack Events', 'Ticketack events', 'wpticketack' ),
            'singular_name'      => _x('Ticketack Event', 'Ticketack event', 'wpticketack' ),
            'menu_name'          => _x('Ticketack Events', 'admin menu', 'wpticketack' ),
            'name_admin_bar'     => _x('Ticketack Event', 'add new on admin bar', 'wpticketack' ),
            'add_new'            => _x('Add New', 'event', 'wpticketack' ),
            'add_new_item'       => tkt_t('Add New Ticketack Event'),
            'new_item'           => tkt_t('New Ticketack Event'),
            'edit_item'          => tkt_t('Edit Ticketack Event'),
            'view_item'          => tkt_t('View Ticketack Event'),
            'all_items'          => tkt_t('All Ticketack Events'),
            'search_items'       => tkt_t('Search Ticketack Events'),
            'parent_item_colon'  => tkt_t('Parent Ticketack Events:'),
            'not_found'          => tkt_t('No events found.'),
            'not_found_in_trash' => tkt_t('No events found in Trash.')
        );

        $args_event = array(
            'labels'             => $labels_event,
            'description'        => tkt_t('Événements importés depuis Ticketack'),
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array('slug' => 'events'),
            'capability_type'    => 'page',
            'has_archive'        => true,
            'hierarchical'       => true,
            'menu_position'      => null,
            'supports'           => array('title', 'editor', 'author', 'thumbnail', 'page-attributes', 'custom-fields' )
        );

        $labels_article = array(
            'name'               => _x('Ticketack Articles', 'Ticketack articles', 'wpticketack' ),
            'singular_name'      => _x('Ticketack Article', 'Ticketack article', 'wpticketack' ),
            'menu_name'          => _x('Ticketack Articles', 'admin menu', 'wpticketack' ),
            'name_admin_bar'     => _x('Ticketack Article', 'add new on admin bar', 'wpticketack' ),
            'add_new'            => _x('Add New', 'article', 'wpticketack' ),
            'add_new_item'       => tkt_t('Add New Ticketack Article'),
            'new_item'           => tkt_t('New Ticketack Article'),
            'edit_item'          => tkt_t('Edit Ticketack Article'),
            'view_item'          => tkt_t('View Ticketack Article'),
            'all_items'          => tkt_t('All Ticketack Articles'),
            'search_items'       => tkt_t('Search Ticketack Articles'),
            'parent_item_colon'  => tkt_t('Parent Ticketack Article:'),
            'not_found'          => tkt_t('No article found.'),
            'not_found_in_trash' => tkt_t('No article found in Trash.')
        );

        $args_article = array(
            'labels'             => $labels_article,
            'description'        => tkt_t('Articles importés depuis Ticketack'),
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array('slug' => 'articles'),
            'capability_type'    => 'page',
            'has_archive'        => true,
            'hierarchical'       => true,
            'menu_position'      => null,
            'supports'           => array('title', 'editor', 'author', 'thumbnail', 'page-attributes', 'custom-fields' )
        );

        $labels_person = array(
            'name'               => _x('Ticketack People', 'Ticketack people', 'wpticketack' ),
            'singular_name'      => _x('Ticketack Person', 'Ticketack person', 'wpticketack' ),
            'menu_name'          => _x('Ticketack People', 'admin menu', 'wpticketack' ),
            'name_admin_bar'     => _x('Ticketack Person', 'add new on admin bar', 'wpticketack' ),
            'add_new'            => _x('Add New', 'person', 'wpticketack' ),
            'add_new_item'       => tkt_t('Add New Ticketack Person'),
            'new_item'           => tkt_t('New Ticketack Person'),
            'edit_item'          => tkt_t('Edit Ticketack Person'),
            'view_item'          => tkt_t('View Ticketack Person'),
            'all_items'          => tkt_t('All Ticketack People'),
            'search_items'       => tkt_t('Search Ticketack People'),
            'parent_item_colon'  => tkt_t('Parent Ticketack Person:'),
            'not_found'          => tkt_t('No person found.'),
            'not_found_in_trash' => tkt_t('No person found in Trash.')
        );

        $args_person = array(
            'labels'             => $labels_person,
            'description'        => tkt_t('Personnes importées depuis Ticketack'),
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array('slug' => 'people'),
            'capability_type'    => 'page',
            'has_archive'        => true,
            'hierarchical'       => true,
            'menu_position'      => null,
            'supports'           => array('title', 'editor', 'author', 'thumbnail', 'page-attributes', 'custom-fields' )
        );

        register_post_type('tkt-event', $args_event);
        register_post_type('tkt-article', $args_article);
        register_post_type('tkt-person', $args_person);
    }
}
