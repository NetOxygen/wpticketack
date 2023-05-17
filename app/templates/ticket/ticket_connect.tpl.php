<?php

use Ticketack\WP\TKTApp;

/**
 * Ticket connection template
 */
?>
<div class="tkt-wrapper" data-component="Ticket/TicketConnect"></div>

<?php
/**
 * Ticket connection widget content
 * This template will be parsed by underscore.js
 *
 * JS Input: {
 *   "ticket": Ticket instance, if the ticket is connected,
 *   "ticket_view_url": Link to see the ticket bookings (with PHPSESSID)
 *   "program_url": String
 * }
 */
?>
<script type="text/template" id="tkt-ticket-connect-tpl">
    <!-- Message for deprecated shortcode [tkt_usr_connect]. -->
    <?php if ($data->deprecated) : ?>
        <% console.error('WARNING :The shorcode [tkt_user_connect] is deprecated, and will be deleted.') %>
        <% console.error('WARNING :Please use new shortcode [tkt_ticket_connect][/tkt_ticket_connect] to connect with your TicketID'); %>
    <?php endif; ?>

    <div class="tkt-ticket-connect">
        <% if (ticket) { %>
        <!-- Title -->
        <div class="tkt-ticket-connect">
            <div class="row">
                <div class="col-md-8">
                    <p class="alert alert-info small"><span class="glyphicon glyphicon-info-sign"></span><?= tkt_t("Nous n'émettons pas de billet individuel pour les réservations, votre ticket actuel vous sert de titre d'entrée aux séances réservées.") ?></span></p>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>
                                <?= tkt_t('Connecté avec :') ?>
                                <br />
                                <strong><%= ticket.name %></strong>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="alert alert-warning small"><span class="glyphicon glyphicon-warning-sign"></span> <?= tkt_t("N'oubliez pas de vous déconnecter pour éviter qu'une autre personne ne puisse modifier vos réservations.") ?></p>
                    <div class="panel panel-default">
                        <div class="panel-heading p-0">
                            <button class="btn button disconnect-btn w-100">
                                <i class="tkt-icon-log-out"></i> <?= tkt_t('Me déconnecter') ?>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <!-- Réservations -->
            <div class="row">
                <div class="col-md-8">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3><?= _('Réservations') ?></h3>
                            <% if (ticket.bookings.length < 1) { %>
                            <div class="panel-body">
                                <?= _("Il n'y a actuellement aucune réservation sur ce billet.") ?>
                            </div>
                            <% } else { %>
                            <div class="panel-body">
                                <table class="table-striped table-condensed table-hover no-more-tables">
                                    <thead>
                                        <tr>
                                            <th><?= _('Date') ?></th>
                                            <th><?= _('Réservation') ?></th>
                                            <th><?= _('Lieu') ?></th>
                                            <th><i class="tkt-icon-smartphone"></i></th>
                                            <th><?= _('Action') ?></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <% ticket.bookings.map(function(b) { %>
                                        <tr>
                                            <td><%= b.screening_start_at.format("DD.MM.YYYY HH[h]mm") %> -
                                                <%= b.screening_stop_at.format("HH[h]mm") %></td>
                                            <td><%= b.screening.title.<?= TKT_LANG ?> %></td>
                                            <td><%= b.screening.cinema_hall.name %></td>
                                            <td class="text-center">
                                                <% if (b.scanned_at.length) { %>
                                                    <i class="tkt-icon-checkmark"></i>
                                                <% } %>
                                            </td>
                                            <td>
                                                <% if (b.is_cancelable) { %>
                                                    <a href="#" class="btn btn-danger btn-bloc cancelable-btn" data-id="<%= b._id %>">
                                                        <?= tkt_t("Annuler") ?>
                                                    </a>
                                                <% } %>
                                            </td>
                                        </tr>
                                        <% }) %>
                                    <tbody>
                                </table>
                                <div class="cancelable_booking_err text-danger text-center"></div>
                            </div>
                            <% } %>
                            <a class="btn button w-100" href="<%= program_url %>">
                                <?= tkt_t("Réserver des séances") ?> </a>
                        </div>
                    </div>
                </div>
                <!-- User -->
                <div class="col-md-4">
                    <div id="owner-panel" class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title"><?= _('Titulaire') ?></h3>
                        </div>
                        <div class="panel-body">
                            <div class="well text-center">
                                <% if (ticket.contact.rfc2397_portrait.length) { %>
                                <img class="img-responsive img-thumbnail"
                                    src="<%= ticket.contact.rfc2397_portrait %>" />
                                <% } %>
                                <br />
                                <h5>
                                    <%= ticket.contact.firstname +" "+ ticket.contact.lastname%>
                                </h5>
                                <p>
                                    <%= new Date(ticket.contact.birthdate).toLocaleDateString() %>

                                    <br />
                                    <%= ticket.contact.address.street %>
                                    <br />
                                    <%= ticket.contact.address.zip +' '+ ticket.contact.address.city %>
                                    <br />
                                    <%= ticket.contact.address.country %>
                                    <br />
                                    <%= ticket.contact.email %>
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <% if (ticket.getWalletBalance() > 0) { %>
                    <div id="wallet-panel" class="panel panel-default">
                        <div class="panel-heading wallet_info">
                            <h3 class="panel-title">Portefeuille électronique</h3>
                        </div>
                        <div class="panel-body wallet_info text-center">
                            <div class="well text-center">
                                <span><%= ticket.wallet.currency + " " + ticket.getWalletBalance() %></hspan>
                            </div>
                        </div>
                    </div>
                    <br />
                    <% } %>

                    <div id="validity-panel" class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title"><?= _('Validité') ?></h3>
                            <div class="panel-body">
                                <div class="well text-center">
                                    <h5>
                                    <?= sprintf(tkt_t('Activé le %s'), '<%= ticket.activated_at.format("LL") %>') ?>
                                    </h5>
                                    <p><?= tkt_t('Tarif :') ?> <%= ticket.activated_pricing.name.<?= TKT_LANG ?> %>
                                        (<%= ticket.getFormattedPriceAndCurrency() %>)
                                    </p>
                                </div>

                                <% if (new Date() > ticket.getValidityWindows()) { %>
                                    <div class="text-center alert alert-danger">
                                        <b>A expiré le <%= ticket.getValidityWindows().format('LL') %> </b>
                                    </div>
                                <% } else {%>
                                    <div class="text-center alert alert-success">
                                        <b><?= sprintf(tkt_t("Valable jusqu'au %s"), "<%= ticket.getValidityWindows().format('LL') %>") ?></b>
                                        <p>
                                            <%= ticket.placesAvailable() %>
                                        </p>
                                    </div>
                                <% } %>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->
        <% } else { %>
        <div class="connect-panel">
            <div class="ticket_connect">
                <div>
                    <?= tkt_ticketidize(tkt_t("Vous avez un TicketID ?")) ?>
                </div>
                <div class="col">
                    <div class="row mt-5 input-pass">
                        <input id="pass-id" type="number"
                            class="tkt-input input-invert form-control text-center pass-number-input"
                            placeholder="123456" maxlength="6" />
                        <p class="minus">-</p>
                        <input id="pass-code" type="password" class="input input-invert text-center pass-key-input"
                            placeholder="abcdef" maxlength="6" />
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <div class="error pass-error d-none text-center text-danger"></div>
                        <button class="btn btn-primary button login-btn connect-btn mt-5 mb-3">
                            <i class="tkt-icon-log-out"></i> <?= tkt_t('Connexion') ?>
                        </button>
                    </div>
                </div>
                <hr />
                <div>
                    <?= tkt_ticketidize(tkt_t("Votre TicketID se trouve sur votre abonnement")) ?>
                </div>
                <br />
                <?php if ($data->show_id_code_message) : ?>
                <div>
                    <?= tkt_ticketidize(tkt_t("Si vous n'avez pas de TicketID sur votre abonnement, saisissez l'ID dans le premier champ et le Code dans le second.")) ?>
                </div>
                <?php endif; ?>
            </div>
        </div>
        <% } %>
    </div>

    <%
    jQuery(document).ready(function($) {
        $("#pass-id").keyup(function() {
            if (this.value.length == this.maxLength) {
                $('#pass-code').focus();
            }
        });
    });
    %>
</script>
<style type="text/css">
.panel-heading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    padding: 5px 10px;
}

.panel-title {
    margin-top: 0;
    margin-bottom: 0;
    color: inherit;
    font-weight: 500;
    ￼ line-height: 1.1;
    font-size: 22px !important;
}

.panel-body {
    padding: 15px;
    background-color: #fff;

}

.well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
}

.input-group-addon {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    width: 25%;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-right-color: rgb(204, 204, 204);
    border-right-style: solid;
    border-right-width: 1px;
}

}
</style>
