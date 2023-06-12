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
 *   "other_tickets": [ ... ],
 *   "orders": [ ... ],
 * }
 */
?>
<%
const ticketsGroups = [
    {
        // passes linked to the connected user account
        title: "<?= tkt_t('Mes abonnements') ?>",
        tickets: tickets.filter(ticket => !ticket.isOneTimePass() && ticket.isActivated())
    },
    {
        // other passes, added with their TicketID
        title: <?= json_encode(tkt_ticketidize(tkt_t('Autres abonnements (ajoutés avec leur TicketID)'))) ?>,
        tickets: other_tickets.filter(ticket => !ticket.isOneTimePass() && ticket.isActivated()).map(ticket => {
            // those tickets can be forgotten because they were added with their ticketID
            ticket.isForgettable = true;
            return ticket;
        })
    },
    {
        // future one-time-passes
        title: "<?= tkt_t('Mes billets pour une séance unique') ?>",
        tickets: tickets.filter(ticket => ticket.isOneTimePass() && !ticket.getScreening()?.isFinished() && ticket.isActivated())
    },
    {
        // past one-time-passes
        title: "<?= tkt_t('') ?>",
        tickets: tickets.filter(ticket => ticket.isOneTimePass() && ticket.getScreening()?.isFinished() && ticket.isActivated())
    }
];
%>
<div id="tkt-account-content-profile" class="tkt-wrapper">
    <div class="row">
        <div class="col-sm-12">
            <% if (!tickets || tickets.length == 0) { %>
            <h3 class="text-info text-center mt-3">
                <?= tkt_t('Vous n\'avez pas encore de billets.') ?>
            </h3>
            <% } else { %>
            <div id="tickets-accordion">
                <% ticketsGroups.filter(group => group.tickets.length > 0).map(group => { %>
                <h4 class="tickets-group-title"><%= group.title %></h4>
                <% group.tickets.sort(function (a, b) { return a.activated_at > b.activated_at ? -1 : 1}).map((ticket, i) => { %>
                <div class="card">
                    <div class="card-header <%= ticket.isOneTimePass() && ticket.getScreening()?.isFinished() ? 'past' : ''%>" id="heading-<%= i %>">
                        <h5 class="mb-0">
                            <div class="row">
                                <div class="col col-auto">
                                    <% if (ticket.getScreening() && ticket.getScreening().getFirstPosterUrl()) { %>
                                        <img src="<%= ticket.bookings[0].screening.getFirstPosterUrl() %>" />
                                    <% } %>

                                    <button class="btn btn-link text-left" data-toggle="collapse" data-target="#collapse<%= i %>" >
                                        <i class="fa fa-tag"></i>
                                        <b><%=
                                            ticket.isOneTimePass() ?
                                                ticket.getScreeningName() :
                                                (ticket.getTypeName() + ' - ' + ticket.getDisplayName())
                                        %></b>
                                        <div>
                                            <small><%=
                                                ticket.isOneTimePass() ?
                                                    (ticket.getScreeningStartAt() + ' - ' + ticket.getScreeningPlace()) :
                                                    ticket.getFormattedActivatedAt()
                                            %></small>
                                        </div>
                                    </button>
                                </div>
                                <div class="col text-right">
                                    <span class="badge badge-default">
                                        <% if (!ticket.isOneTimePass()) { %>
                                            <i class="fa fa-tags"></i>
                                            <%= ticket.bookings?.length || 0 %>
                                        <% } else { %>
                                            <i class="fa fa-tag"></i>
                                        <% } %>
                                    </span>
                                    <% if (ticket.getPdfUrl()) { %>
                                    <div class="ticket-number mt-2">
                                        <% if (ticket.isForgettable) { %>
                                        <button class="btn btn-link btn-sm ticket-forget-link" data-ticket-id="<%= ticket._id %>">
                                            <i class="fa fa-trash"></i>
                                            <?= tkt_t('Oublier ce ticket') ?>
                                        </button>
                                        <% } %>
                                        <% if (!ticket.isOneTimePass()) { %>
                                        <a class="btn btn-link btn-sm ticket-view-link" target="_blank" href="<%= ticket.getTicketViewUrl() %>">
                                            <i class="fa fa-eye"></i>
                                            <?= tkt_t('Voir mes réservations') ?>
                                        </a>
                                        <% } %>
                                        <% if (!ticket.isOneTimePass() || !ticket.getScreening()?.isFinished()) { %>
                                        <a class="btn btn-link btn-sm ticket-download-link" target="_blank" href="<%= ticket.getPdfUrl() %>">
                                            <i class="fa fa-download"></i>
                                            <?= tkt_t('Télécharger') ?>
                                        </a>
                                        <% } %>
                                    </div>
                                    <% } %>
                                </div>
                            </div>
                        </h5>
                    </div>
                </div>
                <% }) %>
                <% }) %>
            </div>
            <% } %>
        </div>
    </div>
</div>
