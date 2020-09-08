<?php

use Ticketack\WP\TKTApp;

/**
 * Booking form: dates selector partial
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "screenings": Array of Screening instances
 * }
 */
?>
<% screenings = _.filter(screenings, function (s) { return s.stop_at > new Date(); }); %>
<% if (screenings.length > 1) { %>
<%
    var m = {};
    _.forEach(screenings, function(s) {
        var day = s.start_at.format("dddd Do MMMM");
        if (!m[day])
            m[day] = [];
        m[day].push(s);
    });
%>
<div class="tkt-wrapper">
    <div class="row">
        <div class="col">
            <span>
                <?= tkt_t('Veuillez choisir la date désirée :') ?>
            </span>
            <div class="days-wrapper">
                <% _.forEach(Object.keys(m), function(day) { %>
                <span
                    class="tkt-badge tkt-light-badge day"
                    data-day="<%= day %>"
                    data-screening_id="<%= _.map(m[day], function (s) { return s._id; }).join(',') %>">
                    <%= day %>
                </span>
                <% }) %>
            </div>

            <br/>

            <span>
                <?= tkt_t('Veuillez choisir l\'heure désirée :') ?>
            </span>
            <div class="dates-wrapper">
                <% _.forEach(m, function(screenings, day) { %>
                    <% _.forEach(screenings, function(s) { %>
                    <span
                        class="tkt-badge tkt-light-badge date"
                        data-day="<%= day %>"
                        data-screening_id="<%= s._id  %>"
                    >
                        <%= s.start_at.format("H[h]") + (s.start_at.minutes() > 0 ? s.start_at.format("mm") : "") %>

                        <% if (s.opaque && s.opaque.version) { %>
                        <%= (' - ' + s.opaque.version) %>
                        <% } %>

                        <% if (s.opaque && s.opaque._3d) { %>
                        <%= s.opaque && s.opaque._3d && (' - 3D') %>
                        <% } %>
                    </span>
                    <% }) %>
                <% }) %>
            </div>

            <br/>

        </div>
    </div>
</div>
<% } else { %>
<span data-screening_id="<%= screenings[0]._id %>" class="date d-none"></span>
<% } %>
