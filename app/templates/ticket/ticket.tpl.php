<?php
/**
 * Ticket view
 * This template will be parsed by underscore.js
 *
 * JS Input: {
 *   "ticket": Ticket instance, if the ticket is connected,
 *   "program_url": String
 * }
 */
?>
<script type="text/template" id="tkt-ticket-tpl">
    <% if (ticket) { %>

    <%
        const pastBookings = ticket.bookings?.filter(b => b.screening?.isFinished());
        const futureBookings = ticket.bookings?.filter(b => !b.screening?.isFinished());
    %>
    <div class="tkt-ticket-view">
        <p class="alert alert-info small"><span class="glyphicon glyphicon-info-sign"></span><?= tkt_t("Nous n'émettons pas de billet individuel pour les réservations, votre ticket actuel vous sert de titre d'entrée aux séances réservées.") ?></span></p>

        <!-- Title -->
        <div class="mb-3">
            <h3>
                <strong>
                    <%= ticket.getTypeName() %> -
                    <%= ticket.getDisplayName() %>
                </strong>
            </h3>
        </div>

        <!-- Réservations -->
        <section class="tkt-section tkt-light-section">
            <% if (!pastBookings.length && !futureBookings.length) { %>
                <h3><?= _('Réservations') ?></h3>
                <div class="mb-2">
                    <?= _("Il n'y a actuellement aucune réservation sur ce billet.") ?>
                </div>
            <% } else { %>
                <% if (futureBookings) { %>
                    <h3><?= _('Réservations') ?></h3>
                    <table class="table table-striped table-hover no-more-tables">
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
                            <% futureBookings.map(function(b) { %>
                            <tr>
                                <td><%= b.screening_start_at.format("DD.MM.YYYY HH[h]mm") %> -
                                    <%= b.screening_stop_at.format("HH[h]mm") %></td>
                                <td><%= b.screening.getTitle() %></td>
                                <td><%= b.screening.cinema_hall.name %></td>
                                <td class="text-center">
                                    <% if (b.scanned_at.length) { %>
                                        <i class="tkt-icon-checkmark"></i>
                                    <% } %>
                                </td>
                                <td>
                                    <% if (!b.screening?.hasStarted()) { %>
                                        <a href="#" class="btn btn-danger btn-bloc cancel-booking-btn" data-booking-id="<%= b._id %>">
                                            <?= tkt_t("Annuler") ?>
                                        </a>
                                    <% } %>
                                </td>
                            </tr>
                            <% }) %>
                        <tbody>
                    </table>
                    <div class="cancelable_booking_err text-danger text-center"></div>
                <% } %>

                <% if (pastBookings.length) { %>
                    <h3><?= _('Réservations passées') ?></h3>
                    <table class="table table-striped table-hover no-more-tables">
                        <thead>
                            <tr>
                                <th><?= _('Date') ?></th>
                                <th><?= _('Réservation') ?></th>
                                <th><?= _('Lieu') ?></th>
                                <th><i class="tkt-icon-smartphone"></i></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <% pastBookings.map(function(b) { %>
                            <tr>
                                <td><%= b.screening_start_at.format("DD.MM.YYYY HH[h]mm") %> -
                                    <%= b.screening_stop_at.format("HH[h]mm") %></td>
                                <td><%= b.screening.getTitle() %></td>
                                <td><%= b.screening.cinema_hall.name %></td>
                                <td class="text-center">
                                    <% if (b.scanned_at.length) { %>
                                        <i class="tkt-icon-checkmark"></i>
                                    <% } %>
                                </td>
                                <td>
                                    <select data-component="Ui/Rating" data-ticket-id="<%= b.ticket_id %>" data-booking-id="<%= b._id %>">
                                        <% [1, 2, 3, 4, 5].map(function (score) { %>
                                           <option value="<%= score %>" <%= b.vote?.score == score ? 'selected' : '' %>></option>
                                        <% }) %>
                                    </select>
                                </td>
                            </tr>
                            <% }) %>
                        <tbody>
                    </table>
                    <div class="cancelable_booking_err text-danger text-center"></div>
                <% } %>
            <% } %>
            <a class="btn button w-100" href="<%= program_url %>">
                <?= tkt_t("Réserver des séances") ?>
            </a>
        </section>

        <!-- Owner -->
        <% if (ticket?.hasContactInfo()) { %>
        <section class="tkt-section tkt-dark-section mt-3">
            <h3 class="panel-title"><?= _('Titulaire') ?></h3>
            <div class="text-center">
                <% if (ticket.contact?.rfc2397_portrait?.length) { %>
                    <img class="img-responsive img-thumbnail" src="<%= ticket.contact?.rfc2397_portrait %>" />
                    <br />
                <% } %>

                <% if (ticket.contact?.firstname || ticket.contact?.lastname) { %>
                <h5>
                    <%= [ticket.contact.firstname, ticket.contact.lastname].filter(v => !!v).join(' ') %>
                </h5>
                <% } %>

                <div>
                    <% if (ticket.contact?.birthdate) { %>
                        <%= new Date(ticket.contact.birthdate).toLocaleDateString() %>
                        <br />
                    <% } %>

                    <% if (ticket.contact?.address?.street) { %>
                        <%= ticket.contact.address.street %>
                        <br />
                    <% } %>

                    <% if (ticket.contact?.address?.zip || ticket.contact?.address?.city) { %>
                        <%= [ticket.contact.address.zip, ticket.contact.address.city].filter(v => !!v).join(' ') %>
                        <br />
                    <% } %>

                    <% if (ticket.contact?.address?.country) { %>
                        <%= ticket.contact.address.country %>
                        <br />
                    <% } %>

                    <% if (ticket.contact?.email) { %>
                        <%= ticket.contact.email %>
                    <% } %>
                </div>
            </div>
        </section>
        <% } %>

        <div class="row">
            <% if (ticket.getWalletBalance() > 0) { %>
            <div class="col">
                <section class="tkt-section tkt-light-section mt-3">
                    <div class="panel-heading wallet_info">
                        <h3 class="panel-title">Portefeuille électronique</h3>
                    </div>
                    <div class="panel-body wallet_info text-center">
                        <div class="well text-center">
                            <span><%= ticket.getWalletCurrency() + " " + ticket.getWalletBalance() %></hspan>
                        </div>
                    </div>
                </section>
            </div>
            <% } %>


            <div class="col">
                <section class="tkt-section tkt-light-section mt-3">
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

                            <% if (ticket.hasExpired()) { %>
                                <div class="text-center alert alert-danger">
                                    <b>A expiré le <%= ticket.getExpirationDate().format('LL') %> </b>
                                </div>
                            <% } else {%>
                                <div class="text-center alert alert-success">
                                    <b><?= sprintf(tkt_t("Valable jusqu'au %s"), "<%= ticket.getExpirationDate().format('LL') %>") ?></b>
                                    <p>
                                        <%= ticket.placesAvailable() %>
                                    </p>
                                </div>
                            <% } %>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <% if (ticket.isForgettable) { %>
        <div class="row mt-3">
            <div class="col">
                <button class="btn button forget-ticket-btn w-100">
                    <i class="tkt-icon-log-out"></i> <?= tkt_t('Oublier ce ticket') ?>
                </button>
            </div>
        </div>
        <% } %>
    </div>
    <% } %>
</script>
