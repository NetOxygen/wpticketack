<?php
/**
 * Some i18n helper functions
 */
class LocalesHelper
{
    public static function dump_js_locales()
    {
        return [
            // Note: we need to write it this way so as xgettext can find our translations... ;(
            'Veuillez choisir au moins un billet'                                                => t('Veuillez choisir au moins un billet'),
            'Veuillez remplir les deux champs'                                                   => t('Veuillez remplir les deux champs'),
            'Les informations que vous avez saisies sont invalides'                              => t('Les informations que vous avez saisies sont invalides'),
            'Une erreur est survenue. Veuillez ré-essayer ultérieurement.'                       => t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.'),
            'Vous ne pouvez pas réserver de place pour cette séance avec votre abonnement.'      => t('Vous ne pouvez pas réserver de place pour cette séance avec votre abonnement.'),
            'Vous ne pouvez pas réserver plus de place pour cette séance avec votre abonnement.' => t('Vous ne pouvez pas réserver plus de place pour cette séance avec votre abonnement.')
        ];
    }
}
