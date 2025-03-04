<?php

use Ticketack\WP\TKTApp;

/**
 * Business Specific Translator
 */
class BSTranslator
{
    // Keep in sync with Kronos
    public const CINEMA                            = 'cinema';
    public const CINEMA_FESTIVAL                   = 'cinemafestival';
    public const MUSIC                             = 'music';
    public const MUSIC_FESTIVAL                    = 'musicfestival';
    public const THEATER                           = 'theater';
    public const ENTERTAINEMENT                    = 'entertainement';
    public const EVENT                             = 'event';

    // Business Specific Translations
    public static function t($string, $domain = null)
    {
        $app = TKTApp::get_instance();
        if (!isset($domain)) {
            $domain = self::default();
        }

        $informal = $app->get_config('customer.informal', false);

        switch($string) {
            case "Événements":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Séances");
                        break;
                    case static::MUSIC_FESTIVAL:
                    case static::MUSIC:
                        return tkt_t("Concerts");
                        break;
                    case static::THEATER:
                        return tkt_t("Représentations");
                        break;
                    default:
                       return tkt_t("Événements");
                }
                break;
            case "Prochains événements":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Prochaines séances");
                        break;
                    case static::MUSIC_FESTIVAL:
                    case static::MUSIC:
                        return tkt_t("Prochains concerts");
                        break;
                    case static::THEATER:
                        return tkt_t("Prochaines représentations");
                        break;
                    default:
                       return tkt_t("Prochains événements");
                }
                break;
            case "Réservation pour un événement":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Réservation pour une séance");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Réservation pour une soirée");
                        break;
                    case static::MUSIC:
                        return tkt_t("Réservation pour un concert");
                        break;
                    case static::THEATER:
                        return tkt_t("Réservation pour une représentation");
                        break;
                    default:
                       return tkt_t("Réservation pour un événement");
                }
                break;
            case "Ticket pour un événement":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Ticket pour une séance");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Ticket pour une soirée");
                        break;
                    case static::MUSIC:
                        return tkt_t("Ticket pour un concert");
                        break;
                    case static::THEATER:
                        return tkt_t("Ticket pour une réprésentation");
                        break;
                    default:
                       return tkt_t("Ticket pour un événement");
                }
                break;
            case "Multi-événements":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Multi-séances");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Multi-soirées");
                        break;
                    case static::MUSIC:
                        return tkt_t("Multi-concerts");
                        break;
                    case static::THEATER:
                        return tkt_t("Multi-représentations");
                        break;
                    default:
                       return tkt_t("Multi-événements");
                }
                break;
            case "Remboursement d'un ticket pour l'événement":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Remboursement d'un ticket pour la séance");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Remboursement d'un ticket pour la soirée");
                        break;
                    case static::MUSIC:
                        return tkt_t("Remboursement d'un ticket pour le concert");
                        break;
                    case static::THEATER:
                        return tkt_t("Remboursement d'un ticket pour la représentation");
                        break;
                    default:
                       return tkt_t("Remboursement d'un ticket pour l'événement");
                }
            case "Vous n'êtes pas autorisé à consulter le journal de l'événement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Vous n'êtes pas autorisé à consulter le journal de la séance.");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Vous n'êtes pas autorisé à consulter le journal de la soirée.");
                        break;
                    case static::MUSIC:
                        return tkt_t("Vous n'êtes pas autorisé à consulter le journal du concert.");
                        break;
                    case static::THEATER:
                        return tkt_t("Vous n'êtes pas autorisé à consulter le journal de la représentation.");
                        break;
                    default:
                       return tkt_t("Vous n'êtes pas autorisé à consulter le journal de l'événement.");
                }
            case "L'événement est terminé.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("La séance est terminée.");
                        break;
                    case static::MUSIC_FESTIVAL:
                    case static::MUSIC:
                        return tkt_t("Le concert est terminé.");
                        break;
                    case static::THEATER:
                        return tkt_t("La représentation est terminée.");
                        break;
                    default:
                       return tkt_t("L'événement est terminé.");
                }
                break;
            case "Il n'y a pas de billetterie pour cet événement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Il n'y a pas de billetterie pour cette séance.");
                        break;
                    case static::MUSIC_FESTIVAL:
                    case static::MUSIC:
                        return tkt_t("Il n'y a pas de billetterie pour ce concert.");
                        break;
                    case static::THEATER:
                        return tkt_t("Il n'y a pas de billetterie pour cette représentation.");
                        break;
                    default:
                       return tkt_t("Il n'y a pas de billetterie pour cet événement.");
                }
                break;
            case "Il n'y a pas de vente en ligne pour cet événement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Il n'y a pas de vente en ligne pour cette séance.");
                        break;
                    case static::MUSIC_FESTIVAL:
                    case static::MUSIC:
                        return tkt_t("Il n'y a pas de vente en ligne pour ce concert.");
                        break;
                    case static::THEATER:
                        return tkt_t("Il n'y a pas de vente en ligne pour cette représentation.");
                        break;
                    default:
                       return tkt_t("Il n'y a pas de vente en ligne pour cet événement.");
                }
                break;
            case "Cet événement n'est pas réservable sur votre abonnement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette séance n'est pas disponible avec ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cette séance n'est pas disponible avec votre abonnement.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette soirée n'est pas disponible avec votre abonnement.");
                                break;
                            default:
                                return tkt_t("Cette soirée n'est pas disponible avec votre abonnement.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ce concert n'est pas réservable sur ton abonnement.");
                                break;
                            default:
                                return tkt_t("Ce concert n'est pas réservable sur votre abonnement.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette représentation n'est pas disponible avec ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cette représentation n'est pas disponible avec votre abonnement.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cet événement n'est pas réservable sur ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cet événement n'est pas réservable sur votre abonnement.");
                        }
                }
                break;
            case "Cet événement n'est plus réservable sur votre abonnement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette séance n'est plus disponible avec ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cette séance n'est plus disponible avec votre abonnement.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette soirée n'est plus disponible avec votre abonnement.");
                                break;
                            default:
                                return tkt_t("Cette soirée n'est plus disponible avec votre abonnement.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ce concert n'est plus réservable sur ton abonnement.");
                                break;
                            default:
                                return tkt_t("Ce concert n'est plus réservable sur votre abonnement.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette représentation n'est plus disponible avec ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cette représentation n'est plus disponible avec votre abonnement.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cet événement n'est plus réservable sur ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cet événement n'est plus réservable sur votre abonnement.");
                        }
                }
                break;
            case "Cet événement n'est pas encore réservable sur votre abonnement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette séance n'est pas encore disponible avec ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cette séance n'est pas encore disponible avec votre abonnement.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette soirée n'est pas encore disponible avec votre abonnement.");
                                break;
                            default:
                                return tkt_t("Cette soirée n'est pas encore disponible avec votre abonnement.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ce concert n'est pas encore réservable sur ton abonnement.");
                                break;
                            default:
                                return tkt_t("Ce concert n'est pas encore réservable sur votre abonnement.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cette représentation n'est pas encore disponible avec ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cette représentation n'est pas encore disponible avec votre abonnement.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Cet événement n'est pas encore réservable sur ton abonnement.");
                                break;
                            default:
                                return tkt_t("Cet événement n'est pas encore réservable sur votre abonnement.");
                        }
                }
                break;
            case "L'accès à cet événement est libre et gratuit. Il n'est pas nécessaire d'obtenir un billet ou de faire une réservation.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("L'accès à cette séance est libre et gratuit. Il n'est pas nécessaire d'obtenir un billet ou de faire une réservation.");
                        break;
                    case static::MUSIC_FESTIVAL:
                    case static::MUSIC:
                        return tkt_t("L'accès à ce concert est libre et gratuit. Il n'est pas nécessaire d'obtenir un billet ou de faire une réservation.");
                        break;
                    case static::THEATER:
                        return tkt_t("L'accès à cette représentation est libre et gratuit. Il n'est pas nécessaire d'obtenir un billet ou de faire une réservation.");
                        break;
                    default:
                       return tkt_t("L'accès à cet événement est libre et gratuit. Il n'est pas nécessaire d'obtenir un billet ou de faire une réservation.");
                }
                break;
            case "Merci pour votre commande, vos billets vont vous parvenir par e-mail dans quelques minutes. Numéro de votre commande : %d":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("Merci pour ta commande, tes billets te parviendront par e-mail dans quelques minutes. Numéro de votre commande : %d");
                        break;
                    default:
                        return tkt_t("Merci pour votre commande, vos billets vont vous parvenir par e-mail dans quelques minutes. Numéro de votre commande : %d");
                }
                break;
            case "Merci pour votre commande !":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("Merci pour ta commande !");
                        break;
                    default:
                        return tkt_t("Merci pour votre commande !");
                }
                break;
            case "Merci pour votre commande n°%d !":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("Merci pour ta commande n°%d !");
                        break;
                    default:
                        return tkt_t("Merci pour votre commande !");
                }
                break;
            case "%s, merci pour votre commande !":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("%s, merci pour ta commande !");
                        break;
                    default:
                        return tkt_t("%s, merci pour votre commande !");
                }
                break;
            case "Nous vous remercions d'avoir utilisé notre billetterie pour modifier vos réservations.":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("Merci d'avoir utilisé notre billetterie pour modifier tes réservations !");
                        break;
                    default:
                        return tkt_t("Nous vous remercions d'avoir utilisé notre billetterie pour modifier vos réservations.");
                }
                break;
            case "%s, vos réservations ont bien été modifiées.":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("%s, tes réservations ont bien été modifiées.");
                        break;
                    default:
                        return tkt_t("%s, vos réservations ont bien été modifiées.");
                }
                break;
            case "Vos réservations":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("Tes réservations");
                        break;
                    default:
                        return tkt_t("Vos réservations");
                }
                break;
            case "Ce résumé, qui peut être %stéléchargé ici%s, ne permet pas l'accès aux événements réservés.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                        return tkt_t("Ce résumé, qui peut être %stéléchargé ici%s, ne permet pas l'accès aux projections et événements réservés.");
                        break;
                    case static::CINEMA:
                        return tkt_t("Ce résumé, qui peut être %stéléchargé ici%s, ne permet pas l'accès aux projections réservées.");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Ce résumé, qui peut être %stéléchargé ici%s, ne permet pas l'accès aux soirées réservées.");
                        break;
                    case static::MUSIC:
                        return tkt_t("Ce résumé, qui peut être %stéléchargé ici%s, ne permet pas l'accès aux concerts réservés.");
                        break;
                    case static::THEATER:
                        return tkt_t("Ce résumé, qui peut être %stéléchargé ici%s, ne permet pas l'accès aux représentations réservées.");
                        break;
                    default:
                        return tkt_t("Ce résumé, qui peut être %stéléchargé ici%s, ne permet pas l'accès aux événements réservés.");
                }
                break;
            case "L'accès nécessite la présentation du code QR présent sur le billet. En cas de perte, une copie peut être obtenue en suivant %sce lien%s.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("L'accès nécessite la présentation du code QR présent sur l'accréditation ou le pass. En cas de perte, une copie peut être obtenue en suivant %sce lien%s.");
                        break;
                    default:
                        return tkt_t("L'accès nécessite la présentation du code QR présent sur l'abonnement. En cas de perte, une copie peut être obtenue en suivant %sce lien%s.");
                }
                break;
            case "Vos prochaines réservations":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("Tes prochaines réservations");
                        break;
                    default:
                        return tkt_t("Vos prochaines réservations");
                }
                break;
            case "Il n'est plus possible d'acheter des tickets en ligne pour cet événement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Il n'est plus possible d'acheter des tickets en ligne pour cette séance.");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Il n'est plus possible d'acheter des tickets en ligne pour cette soirée.");
                        break;
                    case static::MUSIC:
                        return tkt_t("Il n'est plus possible d'acheter des tickets en ligne pour ce concert.");
                        break;
                    case static::THEATER:
                        return tkt_t("Il n'est plus possible d'acheter des tickets en ligne pour cette représentation.");
                        break;
                    default:
                        return tkt_t("Il n'est plus possible d'acheter des tickets en ligne pour cet événement.");
                }
                break;
            case "Il n'est pas encore possible d'acheter des tickets en ligne pour cet événement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Il n'est pas encore possible d'acheter des tickets en ligne pour cette séance.");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Il n'est pas encore possible d'acheter des tickets en ligne pour cette soirée.");
                        break;
                    case static::MUSIC:
                        return tkt_t("Il n'est pas encore possible d'acheter des tickets en ligne pour ce concert.");
                        break;
                    case static::THEATER:
                        return tkt_t("Il n'est pas encore possible d'acheter des tickets en ligne pour cette représentation.");
                        break;
                    default:
                        return tkt_t("Il n'est pas encore possible d'acheter des tickets en ligne pour cet événement.");
                }
                break;
            case "Il n'est plus possible de réserver cet événement en ligne.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Il n'est plus possible de réserver cette séance en ligne.");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Il n'est plus possible de réserver cette soirée en ligne.");
                        break;
                    case static::MUSIC:
                        return tkt_t("Il n'est plus possible de réserver ce concert en ligne.");
                        break;
                    case static::THEATER:
                        return tkt_t("Il n'est plus possible de réserver cette représentation en ligne.");
                        break;
                    default:
                        return tkt_t("Il n'est plus possible de réserver cet événement en ligne.");
                }
                break;
            case "Il n'est pas encore possible de réserver cet événement en ligne.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        return tkt_t("Il n'est pas encore possible de réserver cette séance en ligne.");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Il n'est pas encore possible de réserver cette soirée en ligne.");
                        break;
                    case static::MUSIC:
                        return tkt_t("Il n'est pas encore possible de réserver ce concert en ligne.");
                        break;
                    case static::THEATER:
                        return tkt_t("Il n'est pas encore possible de réserver cette représentation en ligne.");
                        break;
                    default:
                        return tkt_t("Il n'est pas encore possible de réserver cet événement en ligne.");
                }
                break;
            case "Vous ne pouvez pas réserver cet événement, car une autre réservation existe sur la même période.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver cette séance, car une autre réservation existe sur la même période.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver cette séance, car une autre réservation existe sur la même période.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver cette soirée, car une autre réservation existe sur la même période.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver cette soirée, car une autre réservation existe sur la même période.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver ce concert, car une autre réservation existe sur la même période.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver ce concert, car une autre réservation existe sur la même période.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver cette représentation, car une autre réservation existe sur la même période.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver cette représentation, car une autre réservation existe sur la même période.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver cet événement, car une autre réservation existe sur la même période.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver cet événement, car une autre réservation existe sur la même période.");
                        }
                }
                break;
            case "Vous ne pouvez pas réserver cet événement, car sa date est différente d'une autre de vos réservations.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver cette séance, car sa date est différente d'une autre de tes réservations.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver cette séance, car sa date est différente d'une autre de vos réservations.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver cette soirée, car sa date est différente d'une autre de tes réservations.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver cette soirée, car sa date est différente d'une autre de vos réservations.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver ce concert, car sa date est différente d'une autre de tes réservations.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver ce concert, car sa date est différente d'une autre de vos réservations.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver cette représentation, car sa date est différente d'une autre de tes réservations.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver cette représentations, car sa date est différente d'une autre de vos réservations.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver cet événement, car sa date est différente d'une autre de tes réservations.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver cet événement, car sa date est différente d'une autre de vos réservations.");
                        }
                }
                break;
            case "Vous ne pouvez pas réserver une place de plus pour cet événement sur ce billet.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver une place de plus pour cette séance sur ce pass ou cette accréditation.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver une place de plus pour cette séance sur ce pass ou cette accréditation.");
                        }
                        break;
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver une place de plus pour cette séance sur cet abonnement.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver une place de plus pour cette séance sur cet abonnement.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver une place de plus pour cette soirée sur ce pass.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver une place de plus pour cette soirée sur ce pass.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver une place de plus pour ce concert sur cet abonnement.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver une place de plus pour ce concert sur cet abonnement.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver une place de plus pour cette représentation sur cet abonnement.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver une place de plus pour cette représentation sur cet abonnement.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu ne peux pas réserver une place de plus pour cet événement sur ce billet.");
                                break;
                            default:
                                return tkt_t("Vous ne pouvez pas réserver une place de plus pour cet événement sur ce billet.");
                        }
                }
                break;
            case "Vous avez épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu as épuisé le nombre maximum de réservations sur ce pass ou cette accréditation pour la période à laquelle a lieu cette séance.");
                                break;
                            default:
                                return tkt_t("Vous avez épuisé le nombre maximum de réservations sur ce pass ou cette accréditation pour la période à laquelle a lieu cette séance.");
                        }
                        break;
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu as épuisé le nombre maximum de réservations sur cet abonnement pour la période à laquelle a lieu cette séance.");
                                break;
                            default:
                                return tkt_t("Vous avez épuisé le nombre maximum de réservations sur cet abonnement pour la période à laquelle a lieu cette séance.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu as épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.");
                                break;
                            default:
                                return tkt_t("Vous avez épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu as épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.");
                                break;
                            default:
                                return tkt_t("Vous avez épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu as épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.");
                                break;
                            default:
                                return tkt_t("Vous avez épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Tu as épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.");
                                break;
                            default:
                                return tkt_t("Vous avez épuisé le nombre maximum de réservations sur ce billet pour la période à laquelle a lieu cet événement.");
                        }
                }
                break;
            case "Votre billet ne permet la réservation que de certains événements spécifiques et celui-ci n'en fait pas partie.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton pass ou ton accréditation ne permettent la réservation que de certaines séances spécifiques et celle-ci n'en fait pas partie.");
                                break;
                            default:
                                return tkt_t("Votre pass ou votre accréditation ne permettent la réservation que de certaines séances spécifiques et celle-ci n'en fait pas partie.");
                        }
                        break;
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton abonnement ne permet la réservation que de certaines séances spécifiques et celle-ci n'en fait pas partie.");
                                break;
                            default:
                                return tkt_t("Votre abonnement ne permet la réservation que de certaines séances spécifiques et celle-ci n'en fait pas partie.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton billet ne permet la réservation que de certaines soirées spécifiques et celle-ci n'en fait pas partie.");
                                break;
                            default:
                                return tkt_t("Votre billet ne permet la réservation que de certaines soirées spécifiques et celle-ci n'en fait pas partie.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton billet ne permet la réservation que de certains concerts spécifiques et celui-ci n'en fait pas partie.");
                                break;
                            default:
                                return tkt_t("Votre billet ne permet la réservation que de certains concerts spécifiques et celui-ci n'en fait pas partie.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton billet ne permet la réservation que de certaines représentations spécifiques et celle-ci n'en fait pas partie.");
                                break;
                            default:
                                return tkt_t("Votre billet ne permet la réservation que de certaines représentations spécifiques et celle-ci n'en fait pas partie.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton billet ne permet la réservation que de certains événements spécifiques et celui-ci n'en fait pas partie.");
                                break;
                            default:
                                return tkt_t("Votre billet ne permet la réservation que de certains événements spécifiques et celui-ci n'en fait pas partie.");
                        }
                }
                break;
            case "Les dates de l'événement ne correspondent pas aux dates de validité de votre billet.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Les dates de la séance ne correspondent pas aux dates de validité de votre pass ou de votre accréditation.");
                                break;
                            default:
                                return tkt_t("Les dates de la séance ne correspondent pas aux dates de validité de votre pass ou de votre accréditation.");
                        }
                        break;
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Les dates de la séance ne correspondent pas aux dates de validité de ton abonnement.");
                                break;
                            default:
                                return tkt_t("Les dates de la séance ne correspondent pas aux dates de validité de votre abonnement.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Les dates de la soirée ne correspondent pas aux dates de validité de ton billet.");
                                break;
                            default:
                                return tkt_t("Les dates de la soirée ne correspondent pas aux dates de validité de votre billet.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Les dates du concert ne correspondent pas aux dates de validité de ton billet.");
                                break;
                            default:
                                return tkt_t("Les dates du concert ne correspondent pas aux dates de validité de votre billet.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Les dates de la représentation ne correspondent pas aux dates de validité de ton billet.");
                                break;
                            default:
                                return tkt_t("Les dates de la représentation ne correspondent pas aux dates de validité de votre billet.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Les dates de l'événement ne correspondent pas aux dates de validité de ton billet.");
                                break;
                            default:
                                return tkt_t("Les dates de l'événement ne correspondent pas aux dates de validité de votre billet.");
                        }
                }
                break;
            case "Votre billet n'est pas valable pour cet événement.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton abonnement ou ton accréditation n'est pas valable pour cette séance.");
                                break;
                            default:
                                return tkt_t("Votre abonnement ou votre accréditation n'est pas valable pour cette séance.");
                        }
                        break;
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton abonnement n'est pas valable pour cette séance.");
                                break;
                            default:
                                return tkt_t("Votre abonnement n'est pas valable pour cette séance.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton billet n'est pas valable pour cette soirée.");
                                break;
                            default:
                                return tkt_t("Votre billet n'est pas valable pour cette soirée.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton billet n'est pas valable pour ce concert.");
                                break;
                            default:
                                return tkt_t("Votre billet n'est pas valable pour ce concert.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton billet n'est pas valable pour cette représentation.");
                                break;
                            default:
                                return tkt_t("Votre billet n'est pas valable pour cette représentation.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Ton billet n'est pas valable pour cet événement.");
                                break;
                            default:
                                return tkt_t("Votre billet n'est pas valable pour cet événement.");
                        }
                }
                break;
            case "Échec de la réservation : cet événement est déjà réservé sur ce billet.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                        return tkt_t("Échec de la réservation : cette séance est déjà réservée sur cet abonnement ou cette accréditation.");
                        break;
                    case static::CINEMA:
                        return tkt_t("Échec de la réservation : cette séance est déjà réservée sur cet abonnement.");
                        break;
                    case static::MUSIC_FESTIVAL:
                        return tkt_t("Échec de la réservation : cette soirée est déjà réservée sur ce billet.");
                        break;
                    case static::MUSIC:
                        return tkt_t("Échec de la réservation : ce concert est déjà réservé sur ce billet.");
                        break;
                    case static::THEATER:
                        return tkt_t("Échec de la réservation : cette représentation est déjà réservée sur cet abonnement.");
                        break;
                    default:
                        return tkt_t("Échec de la réservation : cet événement est déjà réservé sur ce billet.");
                }
                break;
            case "Échec de la réservation : ce billet n'est pas valable pour cet événement ou le nombre maximal de réservation est atteint. Vérifiez la date et le nombre de réservations déjà effectuées.":
                switch ($domain) {
                    case static::CINEMA_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Échec de la réservation : ce pass ou cette accréditation n'est pas valable pour cette séance ou le nombre maximal de réservation est atteint. Vérifie la date et le nombre de réservations déjà effectuées.");
                                break;
                            default:
                                return tkt_t("Échec de la réservation : ce pass ou cette accréditation n'est pas valable pour cette séance ou le nombre maximal de réservation est atteint. Vérifiez la date et le nombre de réservations déjà effectuées.");
                        }
                        break;
                    case static::CINEMA:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour cette séance ou le nombre maximal de réservation est atteint. Vérifie la date et le nombre de réservations déjà effectuées.");
                                break;
                            default:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour cette séance ou le nombre maximal de réservation est atteint. Vérifiez la date et le nombre de réservations déjà effectuées.");
                        }
                        break;
                    case static::MUSIC_FESTIVAL:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour cette soirée ou le nombre maximal de réservation est atteint. Vérifie la date et le nombre de réservations déjà effectuées.");
                                break;
                            default:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour cette soirée ou le nombre maximal de réservation est atteint. Vérifiez la date et le nombre de réservations déjà effectuées.");
                        }
                        break;
                    case static::MUSIC:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour ce concert ou le nombre maximal de réservation est atteint. Vérifie la date et le nombre de réservations déjà effectuées.");
                                break;
                            default:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour ce concert ou le nombre maximal de réservation est atteint. Vérifiez la date et le nombre de réservations déjà effectuées.");
                        }
                        break;
                    case static::THEATER:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour cette représentation ou le nombre maximal de réservation est atteint. Vérifie la date et le nombre de réservations déjà effectuées.");
                                break;
                            default:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour cette représentation ou le nombre maximal de réservation est atteint. Vérifiez la date et le nombre de réservations déjà effectuées.");
                        }
                        break;
                    default:
                        switch ($informal) {
                            case 'true':
                            case true:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour cet événement ou le nombre maximal de réservation est atteint. Vérifie la date et le nombre de réservations déjà effectuées.");
                                break;
                            default:
                                return tkt_t("Échec de la réservation : cet abonnement n'est pas valable pour cet événement ou le nombre maximal de réservation est atteint. Vérifiez la date et le nombre de réservations déjà effectuées.");
                        }
                }
                break;
            case "Il y a eu un problème lors de la finalisation de votre commande. Merci de bien vouloir repasser votre commande.":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("Il y a eu un problème lors de la finalisation de ta commande. Merci de bien vouloir repasser ta commande.");
                        break;
                    default:
                        return tkt_t("Il y a eu un problème lors de la finalisation de votre commande. Merci de bien vouloir repasser votre commande.");
                }
                break;
            case "Il y a eu un problème lors de la finalisation de votre commande. Nous sommes prévenus et un collaborateur va prendre contact avec vous.":
                switch ($informal) {
                    case 'true':
                    case true:
                        return tkt_t("Il y a eu un problème lors de la finalisation de ta commande. Nous sommes prévenus et un collaborateur va prendre contact avec toi.");
                        break;
                    default:
                        return tkt_t("Il y a eu un problème lors de la finalisation de votre commande. Nous sommes prévenus et un collaborateur va prendre contact avec vous.");
                }
                break;
            default:
                return tkt_t($string);
        }
    }

    public static function default() {
        return TKTApp::get_instance()->get_config('customer.type', static::EVENT);
    }
}
