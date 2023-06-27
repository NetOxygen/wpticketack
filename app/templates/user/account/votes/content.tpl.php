<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * User account votes content
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
const votable = [];
tickets.concat(other_tickets).map(t => {
    t.bookings.map(b => {
        if (b.screening?.isFinished() && !b.screening.disable_votes && !b.vote)
            votable.push(b);
    });
});
tickets.concat(other_tickets).map(t => {
    t.bookings.map(b => {
        if (b.vote)
            votable.push(b);
    });
});
%>
<div id="tkt-account-content-profile" class="tkt-wrapper">
    <div class="row">
        <div class="col-sm-12">
            <% if (!votable.length) { %>
            <h3 class="text-info text-center mt-3">
                <?= tkt_t('Aucun vote disponible pour le moment.') ?>
            </h3>
            <% } else { %>
            <div id="tickets-accordion">
                <% votable.map((b, i) => { %>
                <div class="card">
                    <div class="card-header" id="heading-<%= i %>">
                        <h5 class="mb-0">
                            <div class="row">
                                <div class="col">
                                    <% if (b.screening.getFirstPosterUrl()) { %>
                                        <img src="<%= b.screening.getFirstPosterUrl() %>" />
                                    <% } %>

                                    <button class="btn btn-link text-left" data-toggle="collapse" data-target="#collapse<%= i %>" >
                                        <i class="fa fa-tag"></i>
                                        <b><%= b.screening?.getTitle() %></b>
                                        <div>
                                            <small><%= b.screening?.getStartAt() %></small>
                                        </div>
                                    </button>
                                </div>
                                <div class="col col-auto mt-2 mr-2">
                                    <select data-component="Ui/Rating" data-ticket-id="<%= b.ticket_id %>" data-booking-id="<%= b._id %>">
                                        <option value=""></option>
                                        <% [1, 2, 3, 4, 5].map(function (score) { %>
                                           <option value="<%= score %>" <%= b.vote?.score == score ? 'selected' : '' %>></option>
                                        <% }) %>
                                    </select>
                                </div>
                            </div>
                        </h5>
                    </div>
                </div>
                <% }) %>
            </div>
            <% } %>
        </div>
    </div>
</div>
