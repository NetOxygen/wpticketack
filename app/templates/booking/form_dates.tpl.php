<?php
/**
 * Booking form: dates selector partial
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "screenings": Array of Screening instances
 * }
 */
?>
<% if (screenings.length > 1) { %>
<div class="row">
    <div class="col col-md-auto">
        <span class="dates-title assertive">
            Veuillez choisir la date désirée :
        </span>
    </div>
    <div class="col">
        <div class="dates-wrapper">
        <% _.forEach(screenings, function(s) { %>
            <div class="date-wrapper">
                <span data-screening_id="<%= s._id %>" class="date">
                    <%= s.start_at.format("dddd Do MMMM HH[h]") + (s.start_at.minutes() > 0 ? s.start_at.format("mm") : "") %>
                </span>
            </div>
        <% }) %>
        </div>
    </div>
</div>
<% } else { %>
<span data-screening_id="<%= screenings[0]._id %>" class="date d-none"></span>
<% } %>
