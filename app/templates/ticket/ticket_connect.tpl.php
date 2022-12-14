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
    <!-- Titre -->
        <% console.log(ticket) %>
        <div class="tkt-ticket-connect">
            <div class="row">
                <div class="col-md-8 p-0">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>
                                Connecté avec :
                                <strong><%= ticket.name %></strong>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 p-0">
                    <div class="panel panel-default">
                        <div class="panel-heading text-center">
                            <button class="btn button disconnect-btn w-100">
                                <?= tkt_t('Me déconnecter') ?>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <!-- Réservations -->
            <div class="row">
                <div class="col-md-8">
                    <div class="panel panel-default1">
                        <div class="panel-heading1">
                            <h3><?= _('Réservations') ?></h3>
                            <% if (ticket.bookings.length < 1) { %>
                            <div class="panel-body1">
                                <?= _("Il n'y a actuellement aucune réservation sur ce billet.") ?>
                            </div>
                            <% } else { %>
                            <div class="panel-body1">
                                <table class="table-striped table-condensed table-hover no-more-tables">
                                    <thead>
                                        <tr>
                                            <th><?= _('Date') ?></th>
                                            <th><?= _('Réservation') ?></th>
                                            <th><?= _('Lieu') ?></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <% ticket.bookings.map(function(t) { %>
                                        <tr>
                                            <td><%= t.screening_start_at.format("DD.MM.YYYY HH[h]mm") %> -
                                                <%= t.screening_stop_at.format("HH[h]mm") %></td>
                                            <td><%= t.screening.title.<?= TKT_LANG ?> %></td>
                                            <td><%= t.screening.cinema_hall.name %></td>
                                        </tr>
                                        <% }) %>
                                    <tbody>
                                </table>
                            </div>
                            <% } %>
                            <a class="btn button w-100" href="<%= program_url %>">
                                <-- <?= tkt_t("Réserver des séances") ?> </a>
                        </div>
                    </div>
                    <br />

                    <!-- Historique du billet -->
                    <% if (ticket.bookings.length > 0) { %>
                    <div class="panel panel-default1">
                        <div class="panel-heading1">
                            <h3><?= _('Historique du billet') ?></h3>
                            <div class="panel-body1">
                                <table class="table-striped table-condensed table-hover no-more-tables">
                                    <thead>
                                        <tr>
                                            <th width="30%"><?= _('Date') ?></th>
                                            <th><?= _('Description') ?></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <% ticket.bookings.map(function(t) { %>
                                        <tr>
                                            <td><%= t.screening_start_at.format("DD.MM.YYYY HH[h]mm") %> -
                                                <%= t.screening_stop_at.format("HH[h]mm") %></td>
                                            <td><%= t.screening.title.<?= TKT_LANG ?> %></td>
                                        </tr>
                                        <% }) %>
                                    <tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <% } %>
                    <br />

                    <% if (ticket.bookings.length > 0) { %>
                    <div class="panel panel-default1">
                        <div class="panel-heading1">
                            <h3><?= _('Entrées comptables liées à ce billet') ?></h3>
                            <div class="panel-body1">
                                <table class="table-striped table-condensed table-hover no-more-tables">
                                    <thead>
                                        <tr>
                                            <th><?= _('Date') ?></th>
                                            <th><?= _('Description') ?></th>
                                            <th><?= _('Paiement') ?></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>21.04.2021 11:41</td>
                                            <td>Carte collaborateur Collaborateur de Delia Avot </td>
                                            <td>Espèces</td>
                                            <td><span class="btn-group btn-justify pull-right">
                                                    <a href="#" class="btn btn-sm btn-default btn-block disabled">
                                                        <span class="glyphicon glyphicon-eye-open"></span>
                                                        Ce billet
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                    <tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <% } %>
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

                    <% if (ticket.wallet.length > 0) { %>
                    <div id="wallet-panel" class="panel panel-default">
                        <div class="panel-heading wallet_info">
                            <h3 class="panel-title">Portefeuille électronique</h3>
                        </div>
                        <div class="panel-body wallet_info text-center">
                            <span><%= ticket.wallet.currency + " " + ticket.wallet?.balance?.toFixed(2) %></hspan>
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
                                        <?= _('Activé le') ?> <%= ticket.activated_at.format("DD.MM.YYYY HH[h]mm") %>
                                    </h5>
                                    <p>
                                        <?= _('Tarif') ?>: <%= ticket.activated_pricing.name.<?= TKT_LANG ?> %>
                                        (<?= _('CHF') ?><%=ticket.activated_pricing.price.CHF.toFixed(2) %>)
                                        <br />
                                    </p>
                                </div>
                                <!-- TODO  pass is valid ?(if) %> -->
                                <div class="text-center alert alert-danger">
                                    <b>A expiré le 23 December 2022 10:55 </b>
                                </div>
                                <div class="text-center alert alert-success pl-0 pr-0">
                                    <h5>
                                        <%= ticket.activated_at.format("DD.MM.YYYY HH[h]mm") %>
                                    </h5>
                                    <p>
                                        <?= _('Tarif') ?>: <%= ticket.activated_pricing.name.<?= TKT_LANG ?> %>
                                        (<?= _('CHF') ?><%=ticket.activated_pricing.price.CHF %>)
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div id="ticketid-panel" class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title"><?= _('Réservations en ligne') ?></h3>
                        </div>
                        <div class="panel-body">
                            <div class="panel-body">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <span class="tkt-ticketid_ticket">Ticket</span>
                                        <span class="tkt-ticketid_id">ID</span>
                                    </span>
                                    <!-- TODO TicketID & pass -->
                                    <span class="input-group-addon"><b>892897</b></span>
                                    <span class="input-group-addon">-</span>
                                    <span class="input-group-addon"><b>7v98z3</b></span>
                                </div>
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
                            placeholder="abcde" maxlength="6" />
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <div class="error pass-error d-none text-center text-danger"></div>
                        <button class="btn btn-primary button login-btn connect-btn mt-5 mb-3">
                            <i class="fa fa-sign-in-alt"></i> <?= tkt_t('Connexion') ?>
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