<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * OwnIt login template
 * This template will be parsed by underscore.js
 *
 * @templateVersion 2.88.0
 *
 * Input: {
 *   "tickets": Ticket[]
 *   "invalid_ticket": boolean
 * }
 */
?>

<div class="tkt-tickets-wrapper">
    <% if (tickets.length > 0) { %>
        <h3 class="tkt-section-title"><?= tkt_t('Regarder en utilisant un de vos billets') ?></h3>
        <% tickets.map(ticket => { %>
        <div class="tkt-ticket-wrapper" data-ticket-id="<%= ticket._id %>">
            <div class="row">
                <div class="col col-auto ticket-infos">
                    <a class="btn btn-outline btn-sm text-left" target="_blank" href="<%= ticket.getTicketViewUrl() %>">
                        <i class="tkt-icon-tag"></i>
                        <b><%= ticket.getTypeName() %></b>
                        - <%= ticket.getDisplayName() %>
                    </a>
                </div>
                <div class="col text-right watch-btns">
                    <button data-ticket-id="<%= ticket._id %>" data-code="<%= ticket.vdr_auth_serial + '-' + ticket.vdr_auth_key.toUpperCase() %>" class="button watch-btn active" >
                        <i class="tkt-icon-play-circle-o"></i>
                        <?php echo esc_html(tkt_t('Regarder en utilisant ce billet')) ?>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col text-right">
                    <small class="watch-form-error d-none text-danger pl-2">
                    </small>
                </div>
            </div>
        </div>
        <% }) %>
        <div class="no-more-seats alert alert-danger">
            <?php echo esc_html(tkt_t("Le nombre maximum de visionnements a été atteint. Ce film n'est plus disponible.")) ?>
        </div>
        <div class="ticket-can-not-book alert alert-danger">
            <?php echo esc_html(tkt_t("Ce billet ne vous permet pas de visionner ce contenu.")) ?>
        </div>
    <% } %>
</div>

<div class="tkt-wrapper" data-component="Ticket/TicketConnect"></div>

<script type="text/template" id="tkt-ticket-connect-tpl">
<div class="tkt-wrapper">
    <div class="tkt-ticket-connect">
        <div class="connect-panel">
            <div class="ticket_connect">
                <% if (invalid_ticket) { %>
                    <div class="alert alert-danger">
                        <?php echo esc_html(tkt_t("Ce billet ne vous permet pas de visionner ce contenu.")) ?>
                    </div>
                <% } %>
                <div>
                    <?php echo wp_kses_post(tkt_ticketidize(tkt_t("Vous avez un TicketID ?"))) ?>
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
                        <button class="btn btn-primary button connect-btn mt-5 mb-3">
                          <i class="tkt-icon-sign-in-alt"></i> <?php echo esc_html(tkt_t('Connexion')) ?>
                        </button>
                    </div>
                </div>
                <hr />
                <div>
                    <?php echo wp_kses_post(tkt_ticketidize(tkt_t("Votre TicketID se trouve sur votre abonnement"))) ?>
                </div>
                <br />
            </div>
        </div>
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
</div>
</script>
