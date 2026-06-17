<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\TKTApp;

/**
 * Cart table template
 * This template will be parsed by underscore.js
 *
 * @templateVersion 2.102.0
 *
 * PHP Input: {
 *   "theme"             : 'dark|light',
 *   "hidden_links"      : 'finalize,cancel,continue',
 *   "enable_promo_code" : bool
 *   "hide_items"        : bool
 *   "hide_summary"      : bool
 * }
 *
 *  Js Input: {
 *    "cart"              : Cart instance,
 *    "wallet_tickets"    : [Ticket],
 *    "selected_wallet_ticket": Ticket,
 *    "max_wallet_amount" : Number,
 *    "show_wallet_block" : bool,
 *    "show_wallet_connect": bool,
 *    "program_url"       : String,
 *    "cart_reset_url"    : String,
 *    "checkout_url"      : String,
 *    "hide_links"        : ['finalize', 'cancel', 'continue', 'wallet']
 *  }
 */
$theme        = $data->theme;
$hide_items   = $data->hide_items;
$hide_summary = $data->hide_summary;
?>
<%
const pass     = cart.getPass();
const tickets  = cart.getTickets();
const articles = cart.getArticles();

const discounts  = cart.getDiscounts();
const fees       = cart.getFees();
const nbArticles = pass.length + tickets.length + articles.length;
%>

<div class="tkt-wrapper">
        <% if (cart.items.length == 0) { %>
        <section class="tkt-section tkt-<?php echo esc_attr($theme) ?>-section tkt-cart-section">
            <div class="row">
                <div class="col">
                    <h3 class="empty-cart-title">
                        <?php echo esc_html(tkt_t('Votre panier est vide')) ?>
                    </h3>
                </div>
            </div>
        </section>
        <% } else { %>
    <div class="row">
        <?php if (!$hide_items) : ?>
        <div class="col-12 col-lg-<?= $hide_summary ? '12' : '8'  ?>">
            <section class="tkt-section tkt-<?php echo esc_attr($theme) ?>-section tkt-cart-section h-100">
                <div class="row">
                    <div class="col">
                        <h3 class="tkt-section-title mb-3"><?php echo esc_html(tkt_t("Votre commande")) ?></h3>
                        <!-- Table screening -->
                            <% if (tickets.length) { %>
                            <table class="tkt-cart-table">
                                <thead>
                                    <tr>
                                        <th scope="col"><?php echo esc_html(tkt_t('Tickets')) ?></th>
                                        <th scope="col" width="100px"><?php echo esc_html(tkt_t('Prix')) ?></th>
                                        <th scope="col" width="20px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <% _.each(tickets, function(item) { %>
                                    <tr>
                                        <td class="title-cell"><%= item.getFormattedTitle() %></td>
                                        <td class="price-cell text-right"><%= item.getFormattedPrice() %></td>
                                        <td class="action-cell text-right">
                                            <span class="tkt-remove-cart-item" data-item="<%= item.id %>">
                                                <i class="tkt-icon-trash"></i>
                                            </span>
                                        </td>
                                    </tr>
                                    <% }); %>
                                </tbody>
                            </table>
                            <% }; %>
                            <!-- Table articles -->
                            <% if (articles.length) { %>
                            <table class="tkt-cart-table">
                                <thead>
                                    <tr>
                                        <th scope="col"><?php echo esc_html(tkt_t('Articles')) ?></th>
                                        <th scope="col" width="100px"></th>
                                        <th scope="col" width="20px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <% _.each(articles, function(item) { %>
                                    <tr>
                                        <td class="title-cell"><%= item.getFormattedTitle() %></td>
                                        <td class="price-cell text-right"><%= item.getFormattedPrice() %></td>
                                        <td class="action-cell text-right">
                                            <span class="tkt-remove-cart-item" data-item="<%= item.id %>">
                                                <i class="tkt-icon-trash"></i>
                                            </span>
                                        </td>
                                    </tr>
                                    <% }); %>
                                </tbody>
                            </table>
                            <% }; %>
                            <!-- Table pass -->
                            <% if (pass.length) { %>
                            <table class="tkt-cart-table">
                                <thead>
                                    <tr>
                                        <th scope="col"><?php echo esc_html(tkt_t('Abonnements')) ?></th>
                                        <th scope="col" width="100px"></th>
                                        <th scope="col" width="20px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <% _.each(pass, function(item) { %>
                                    <tr>
                                        <td class="title-cell"><%= item.getFormattedTitle() %></td>
                                        <td class="price-cell text-right"><%= item.getFormattedPrice() %></td>
                                        <td class="action-cell text-right">
                                            <span class="tkt-remove-cart-item" data-item="<%= item.id %>">
                                                <i class="tkt-icon-trash"></i>
                                            </span>
                                        </td>
                                    </tr>
                                    <% }); %>
                                </tbody>
                            </table>
                            <% }; %>
                        </div>
                    </div>
                </section>
            </div>
        <?php endif; ?>

        <?php if (!$hide_summary) : ?>
             <div class="col-12 col-lg-<?= $hide_items ? '12' : '4'  ?>">
                <section class="tkt-section tkt-<?php echo esc_attr($theme) ?>-section tkt-cart-section h-100">
                <div class="row">
                        <div class="col">
                            <h3 class="tkt-section-title mb-3"><?php echo esc_html(tkt_t("Récapitulatif")) ?></h3>
                            <!-- Table article -->
                            <table class="tkt-cart-table">
                                <thead>
                                    <tr>
                                        <th scope="col"><?php echo esc_html(tkt_t("Commande")) ?></th>
                                        <th scope="col" width="100px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="title-cell">
                                            <%= nbArticles %> <%= nbArticles === 1 ? "<?php echo esc_html(tkt_t("produit")) ?>" : "<?php echo esc_html(tkt_t("produits")) ?>" %>
                                        </td>
                                        <td class="price-cell text-right"><%= cart.getOrderTotal() %></td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- Table promo & discount code -->
                            <% if (discounts.length) { %>
                            <table class="tkt-cart-table">
                                <thead>
                                    <tr>
                                        <th scope="col"><?php echo esc_html(tkt_t('Rabais')) ?></th>
                                        <th scope="col" width="100px"></th>
                                        <th scope="col" width="20px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <% _.each(discounts, function(item) { %>
                                    <tr>
                                        <td class="title-cell"><%= item.getFormattedTitle() %></td>
                                        <td class="price-cell text-right"><%= item.getFormattedPrice() %></td>
                                        <td class="action-cell text-right">
                                            <span class="tkt-remove-cart-item" data-item="<%= item.id %>">
                                                <i class="tkt-icon-trash"></i>
                                            </span>
                                        </td>
                                    </tr>
                                    <% }); %>
                                </tbody>
                            </table>
                            <% }; %>
                            <!-- Table fees -->
                            <table class="tkt-cart-table">
                                <% if (fees.length) { %>
                                <thead>
                                    <tr>
                                        <th scope="col"><?php echo esc_html(tkt_t('Frais')) ?></th>
                                        <th scope="col" width="100px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <% _.each(fees, function(item) { %>
                                    <tr>
                                        <% if(item.type == "shipping" || item.type == "paymentfee") { %>
                                        <td class="title-cell"><%= item.getFormattedTitle() %></td>
                                        <td class="price-cell text-right"><%= item.getFormattedPrice() %></td>
                                        <% } %>
                                    </tr>
                                    <% }); %>
                                </tbody>
                                <% }; %>
                                <tfoot>
                                    <tr>
                                        <td colspan="2">
                                            <span class="total-title-cell">
                                                <?php echo esc_html(tkt_t('Total :')) ?>
                                            </span>
                                            <span class="total-price-cell">
                                                <%= cart.getFormattedTotal() %>
                                            </span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <% if (show_wallet_block) { %>
                    <hr/>
                    <div class="row justify-content-md-end">
                        <div class="col col-12 use-wallet-wrapper">
                            <% var wallet_tickets_available = _.filter(wallet_tickets, function(t) { return getMaxWalletAmount(t) > 0; }); %>
                            <% if (wallet_tickets_available.length > 1) { %>
                            <div class="form-group">
                                <label for="wallet-ticket-select"><?php echo esc_html(tkt_t('Choisir un billet')) ?></label>
                                <select id="wallet-ticket-select" class="wallet-ticket-select tkt-input form-control">
                                    <% _.each(wallet_tickets, function(t) { %>
                                    <% if (getMaxWalletAmount(t) > 0) { %>
                                    <option value="<%= t._id %>" <%= selected_wallet_ticket && selected_wallet_ticket._id === t._id ? 'selected' : '' %>>
                                        <%= getWalletTicketLabel(t) %>
                                    </option>
                                    <% } %>
                                    <% }); %>
                                </select>
                            </div>
                            <% } %>
                            <h6>
                                <?php echo esc_html(tkt_t('Vous disposez de')) ?>
                                <%= getFormattedAvailableWalletBalance(selected_wallet_ticket) %>
                                <?php echo esc_html(tkt_t('sur votre portefeuille électronique')) ?>
                            </h6>
                            <span><?php echo esc_html(tkt_t('Saisissez ci-dessous le montant que vous souhaitez utiliser')) ?></span>
                            <div class="input-group mb-2">
                                <input type="number" min="0" max="<%= max_wallet_amount %>" step="0.01" class="wallet-input form-control" placeholder="15.50" value="<%= max_wallet_amount %>"/>
                                <div class="input-group-append">
                                    <a href="javascript:;" class="wallet-button button active">
                                        <?php echo esc_html(tkt_t('Utiliser mon portefeuille')) ?>
                                    </a>
                                </div>
                            </div>
                            <div class="alert alert-danger wallet-error d-none"></div>
                            <div class="alert alert-success wallet-success d-none"></div>
                        </div>
                    </div>
                    <% } %>

                    <% if (show_wallet_connect) { %>
                    <hr/>
                    <div class="row justify-content-md-end">
                        <div class="col col-12 use-wallet-connect-wrapper">
                            <% if (login_url) { %>
                            <h6>
                                <?php echo esc_html(tkt_t('Vous disposez d\'un portefeuille électronique ?')) ?>
                                <br/>
                                <a href="<%= login_url %>" class="wallet-connect-link"><?php echo wp_kses_post(tkt_ticketidize(tkt_t('Connectez-vous avec votre TicketID'))) ?></a>
                            </h6>
                            <% } else { %>
                            <h6>
                                <?php echo esc_html(tkt_t('Vous disposez d\'un portefeuille ?')) ?>
                                <br/>
                                <?php echo wp_kses_post(tkt_ticketidize(tkt_t('Connectez-vous avec votre TicketID'))) ?>
                            </h6>
                            <div class="ticket_connect">
                                <div class="row input-pass">
                                    <div class="col">
                                        <input type="number" class="tkt-input form-control text-center pass-number-input" placeholder="123456" maxlength="6" />
                                    </div>
                                    <div class="col-auto d-flex align-items-center">
                                        <p class="minus mb-0">-</p>
                                    </div>
                                    <div class="col">
                                        <input type="password" class="tkt-input form-control text-center pass-key-input" placeholder="abcdef" maxlength="6" />
                                    </div>
                                </div>
                                <div class="text-center mt-3">
                                    <div class="alert alert-danger wallet-connect-error d-none"></div>
                                    <button type="button" class="button active wallet-connect-btn">
                                        <?php echo esc_html(tkt_t('Connexion')) ?>
                                    </button>
                                </div>
                            </div>
                            <% } %>
                        </div>
                    </div>
                    <% } %>

                    <?php if ($data->enable_promo_code) : ?>
                        <hr/>
                        <div class="row justify-content-md-end">
                            <div class="col col-12 use-promo-code-wrapper">
                                <div class="input-group">
                                    <input type="text" class="promo-code-input form-control" placeholder="<?php echo esc_html(tkt_t('Code promo')) ?>" />
                                    <div class="input-group-append">
                                        <a href="javascript:;" class="promo-code-button button active">
                                            <?php echo esc_html(tkt_t('Utiliser')) ?>
                                        </a>
                                    </div>
                                </div>
                                <div class="alert alert-danger promo-code-error d-none"></div>
                                <div class="alert alert-success promo-code-success d-none"></div>
                            </div>
                        </div>
                    <?php endif; ?>

                    <hr/>
                    <div class="row justify-content-md-end">
                        <% if (!hide_links.includes('finalize')) { %>
                        <div class="col col-12 finish-cart-wrapper">
                            <a href="<%= checkout_url %>" class="button active">
                                <?php echo esc_html(tkt_t('Finaliser ma commande')) ?>
                            </a>
                        </div>
                        <% } %>
                    </div>

                    <% if (!hide_links.includes('cancel')) { %>
                    <div class="row">
                        <div class="col cancel-order-wrapper">
                            <div class="cancel-order" >
                                <a href="" class="tkt-reset-cart-btn"><?php echo esc_html(tkt_t('Annuler ma commande')) ?></a>
                            </div>
                        </div>
                    </div>
                    <% } %>

                    <% if (!hide_links.includes('continue')) { %>
                    <div class="row">
                        <div class="col continue-shopping-wrapper">
                            <div class="continue-shopping" >
                                <a href="<%= program_url %>"><?php echo esc_html(tkt_t('Continuer mes réservations')) ?></a>
                            </div>
                        </div>
                    </div>
                    <% } %>
                </section>
            </div>
            <?php endif; ?>
        </div><!-- end row -->
    <% } %>
</div>
