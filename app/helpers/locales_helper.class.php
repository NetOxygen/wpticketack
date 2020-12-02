<?php

namespace Ticketack\WP\Helpers;

/**
 * Some i18n helper functions
 */
class LocalesHelper
{
    public static function dump_js_locales()
    {
        return [
            // Note: we need to write it this way so as xgettext can find our translations... ;(
            'Veuillez choisir au moins un billet'                                          => tkt_t('Veuillez choisir au moins un billet'),
            'Veuillez remplir les deux champs'                                             => tkt_t('Veuillez remplir les deux champs'),
            'Les informations que vous avez saisies sont invalides'                        => tkt_t('Les informations que vous avez saisies sont invalides'),
            'Une erreur est survenue. Veuillez ré-essayer ultérieurement.'                 => tkt_t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.'),
            'Vous ne pouvez pas réserver de place pour cette séance avec votre pass.'      => tkt_t('Vous ne pouvez pas réserver de place pour cette séance avec votre pass.'),
            'Vous ne pouvez pas réserver plus de place pour cette séance avec votre pass.' => tkt_t('Vous ne pouvez pas réserver plus de place pour cette séance avec votre pass.'),
            'Veuillez choisir un tarif'                                                    => tkt_t('Veuillez choisir un tarif'),
            'Votre panier a été mis à jour'                                                => tkt_t('Votre panier a été mis à jour'),
            'Code promo invalide'                                                          => tkt_t('Code promo invalide'),
            'Impossible d\'utiliser ce code promo'                                         => tkt_t('Impossible d\'utiliser ce code promo'),
            'Le code promo a bien été pris en compte'                                      => tkt_t('Le code promo a bien été pris en compte'),
            'Vous disposez de'                                                             => tkt_t('Vous disposez de'),
            'sur votre porte monnaie électronique'                                         => tkt_t('sur votre porte monnaie électronique'),
            'Montant trop élevé'                                                           => tkt_t('Montant trop élevé'),
        ];
    }

    /**
     * This function is used to let gettext know about some dynamic strings
     * that should be translated (Kronos data, ...)
     */
    private static function dummy_function_for_dyunamic_contents()
    {
        $dummy = [
            tkt_t('actor'),
            tkt_t('actors'),
            tkt_t('cast'),
            tkt_t('camera'),
            tkt_t('co-producer'),
            tkt_t('co-producers'),
            tkt_t('creator'),
            tkt_t('creators'),
            tkt_t('director'),
            tkt_t('directors'),
            tkt_t('editor'),
            tkt_t('editing'),
            tkt_t('music'),
            tkt_t('producer'),
            tkt_t('producers'),
            tkt_t('photography'),
            tkt_t('screenplay'),
            tkt_t('writer'),
            tkt_t('writers'),
            tkt_t('sound'),
            tkt_t('production design')
        ];
    }
}
