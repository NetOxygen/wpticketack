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
        <div class="row">
            <div class="col">
                <div class="ticket-infos">
                    <span><%= [ticket.contact.firstname, ticket.contact.lastname].join(' ') %></span>
                </div>
                <a class="btn button" href="<%= program_url %>">
                    <?= tkt_t("Retour au programme") ?>
                </a>
                <a class="btn button" href="<%= ticket_view_url %>">
                    <?= tkt_t("Voir mes réservations") ?>
                </a>
                <button class="btn button disconnect-btn">
                    <?= tkt_t('Me déconnecter') ?>
                </button>
            </div>
        </div>
        <% } else { %>
            <div class="connect-panel">
                <div class="ticket_connect">
                  <div>
                    <?= str_replace('TicketID', '<span class="tkt-ticketid_ticket">Ticket</span><span class="tkt-ticketid_id">ID</span>', tkt_t("Vous avez un TicketID ?")) ?>
                  </div>
                  <div class="col">
                      <div class="row mt-5 input-pass">
                          <input id="pass-id" type="number" class="tkt-input input-invert form-control text-center pass-number-input" placeholder="123456" maxlength="6"/>
                          <p class="minus">-</p>
                          <input id="pass-code" type="password" class="input input-invert text-center pass-key-input" placeholder="abcde" maxlength="6"/>
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
                  <hr>
                  <div>
                    <?= str_replace('TicketID', '<span class="tkt-ticketid_ticket">Ticket</span><span class="tkt-ticketid_id">ID</span>', tkt_t("Votre TicketID se trouve sur votre abonnement")) ?>
                  </div>
                  <br>
                    <?php if ($data->show_id_code_message) : ?>
                    <div>
                        <?= tkt_t("Si vous n'avez pas de TicketID sur votre abonnement, saisissez l'ID dans le premier champ et le Code dans le second.") ?>
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
