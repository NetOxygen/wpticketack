<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * User account pass content
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "user": { ... },
 *   "tickets": [ ... ],
 *   "orders": [ ... ],
 * }
 */
?>

<div id="tkt-account-content-profile" class="tkt-wrapper">
    <div class="row">
        <div class="col-sm-12">
            <% if (!tickets || tickets.length == 0) { %>
            <h3 class="text-info text-center mt-3">
                <?= tkt_t('Vous n\'avez pas encore de billets.') ?>
            </h3>
            <% } else { %>
            <div id="tickets-accordion">
                <% tickets.sort(function (a, b) { return a.activated_at > b.activated_at ? -1 : 1}).map(function (ticket, i) { %>
                <div class="card">
                    <div class="card-header" id="heading-<%= i %>">
                        <h5 class="mb-0">
                            <div class="row">
                                <div class="col">
                                    <% if (ticket.bookings && ticket.bookings.length > 0 && ticket.bookings[0].screening && ticket.bookings[0].screening.getFirstPosterUrl()) { %>
                                    <img src="<%= ticket.bookings[0].screening.getFirstPosterUrl() %>" />
                                    <% } %>
                                    <button class="btn btn-link text-left" data-toggle="collapse" data-target="#collapse<%= i %>" >
                                        <i class="fa fa-tag"></i>
                                        <b><%= ticket.getTypeName() %></b>
                                        <div>
                                            <small>
                                                <%= ticket.getFormattedActivatedAt() %>
                                            </small>
                                        </div>
                                    </button>
                                </div>
                                <div class="col text-right">
                                    <span class="badge badge-<%= ticket.getStatusColorClassname() %>">
                                        <%= ticket.getFormattedStatus() %>
                                    </span>
                                    <% if (ticket.getPdfUrl()) { %>
                                    <div class="ticket-number mt-2">
                                        <a class="btn btn-link btn-sm ticket-download-link" target="_blank" href="<%= ticket.getPdfUrl() %>">
                                            <i class="fa fa-download"></i>
                                            <?= tkt_t('Télécharger') ?>
                                        </a>
                                    </div>
                                    <% } %>
                                </div>
                            </div>
                        </h5>
                    </div>

                    <div id="collapse<%= i %>" class="collapse" aria-labelledby="heading<%= i %>" data-parent="#tickets-accordion">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-9">
                                <% if (ticket.bookings && ticket.bookings.length > 0) { %>
                                    <h5><?= tkt_t('Réservations') ?></h5>
                                    <% ticket.bookings.map(function (booking) { %>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <% if (booking.screening && booking.screening.getFirstPosterUrl()) { %>
                                            <img src="<%= booking.screening.getFirstPosterUrl() %>" />
                                            <% } %>
                                        </div>
                                        <div class="col-sm-8">
                                            <% if (booking.screening) { %>
                                            <h4><%= booking.screening.getTitle('<?= TKT_LANG ?>') %></h4>
                                            <div><%= booking.screening.getFormattedStartAt() %></div>
                                            <div><%= booking.screening.cinema_hall.cinema + ' - ' + booking.screening.cinema_hall.name %></div>
                                            <div><%= booking.seat %></div>
                                            <% } %>
                                        </div>
                                    </div>
                                    <% }) %>
                                <% } else { %>
                                    <div class="alert alert-info">
                                        <i class="fa fa-info"></i>
                                        <?= tkt_t('Aucune réservation sur ce billet.') ?>
                                    </div>
                                <% } %>
                                </div>
                                <div class="col-sm-3 text-right">
                                    <img class="img" src="<%= ticket.getQRCodeUrl() %>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <% }) %>
            </div>
            <% } %>
        </div>
    </div>
</div>
