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
            'add_new_item'       => tkt_t('Ajouter un event Ticketack'),
            'new_item'           => tkt_t('Nouvel event Ticketack'),
            'edit_item'          => tkt_t('Modifier cet event Ticketack'),
            'view_item'          => tkt_t('Afficher cet event Ticketack'),
            'all_items'          => tkt_t('Tous les events Ticketack'),
            'search_items'       => tkt_t('Rechercher les events Ticketack'),
            'parent_item_colon'  => tkt_t('Parent:'),
            'not_found'          => tkt_t('Aucun event Ticketack trouvé.'),
            'not_found_in_trash' => tkt_t('Aucun event Ticketack trouvé dans la corbeille.')
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
            'add_new_item'       => tkt_t('Ajouter un article Ticketack'),
            'new_item'           => tkt_t('Nouvel article Ticketack'),
            'edit_item'          => tkt_t('Modifier cet article Ticketack'),
            'view_item'          => tkt_t('Afficher cet article Ticketack'),
            'all_items'          => tkt_t('Tous les articles Ticketack'),
            'search_items'       => tkt_t('Rechercher les articles Ticketack'),
            'parent_item_colon'  => tkt_t('Parent:'),
            'not_found'          => tkt_t('Aucun article Ticketack trouvé.'),
            'not_found_in_trash' => tkt_t('Aucun article Ticketack trouvé dans la corbeille.')
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
