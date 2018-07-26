<?php
/**
 * Booking form: pricings partial
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "screening": Screening instance
 * }
 */
?>
<div class="pricings-form">
    <div class="row">
        <div class="col">
            <span class="tickets-title assertive">
                Entrez le nombre de place(s) que vous souhaitez ajouter à votre panier :
            </span>
        </div>
    </div>
    <% _.mapObject(screening.pricings, (p, key) => { %>
    <div class="row pricing-row">
        <div class="col col-lg-5">
            <span class="pricing-name">
                <%= p.name.fr %> : 
            </span>
            <span class="pricing-price">
                <%= p.price.CHF %>.-
            </span>
        </div>
        <div class="col">
            <input type="number" data-pricing="<%= key %>"min="0" value="0" class="input pricing-input"/>
        </div>
    </div>
    <% }) %>
    <div class="row">
        <div class="col">
            <div class="error pricings-error d-none"></div>
            <button class="button add-to-cart-btn active" >
                Ajouter à mon panier
            </button>
        </div>
    </div>
</div>
<div class="pass-form">
    <div class="pass-panel">
        <div class="connect-form">
            <div class="row">
                <div class="col">
                    <span class="abo-title">
                        Vous avez un abonnement ?
                        <a href="" class="show-pass-panel">Connectez-vous</a> pour réserver.
                    </span>
                </div>
            </div>
            <div class="pass-panel-form d-none">
                <div class="row">
                    <div class="col">
                        <span class="pass-number">Numéro</span>
                    </div>
                    <div class="col">
                        <input type="text" class="input pass-number-input"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span class="pass-key">Clé</span>
                    </div>
                    <div class="col">
                        <input type="password" class="input pass-key-input"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                      <div class="error pass-error d-none"></div>
                        <button class="button connect-btn active" >
                            Me connecter
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="book-form">
            <div class="row">
                <div class="col">
                    <h3 class="success book-form-success d-none">
                        Vous ne pouvez pas réserver de place pour cette séance avec votre abonnement.
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="error book-form-error d-none">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="error pass-book-error d-none"></div>
                    <button class="button book-btn active d-none" >
                        Réserver une place sur mon abonnement
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="#" class="button show-bookings-btn active d-none" >
                        Afficher mes réservations
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
