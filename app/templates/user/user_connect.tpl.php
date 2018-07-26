<?php
/**
 * User connection template
 */
?>
<div data-component="User/UserConnect"></div>

<?php
/**
 * User connection widget content
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "ticket": Ticket instance, if the user is connected
 * }
 */
?>
<script type="text/template" id="tkt-user-connect-tpl">
    <div class="tkt-user-connect">
        <% if (ticket) { %>
        <div class="row">
            <div class="col">
                <button class="button button-small button-invert disconnect-btn">
                    Me déconnecter
                </button>
            </div>
        </div>
        <% } else { %>
        <div class="connect-panel">
            <span class="dark">Vous avez un abonnement ?</span>
            <span class="dark">Connectez-vous !</span>

            <div class="row">
                <div class="col">
                    <input type="text" class="input input-invert text-center pass-number-input" placeholder="Numéro"/>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <input type="password" class="input input-invert text-center pass-key-input" placeholder="Clé"/>
                </div>
            </div>

            <div class="row">
                <div class="col text-right">
                    <div class="error pass-error d-none"></div>
                    <button class="button button-small button-invert connect-btn">
                        Me connecter
                    </button>
                </div>
            </div>

            <span class="dark">
                <a href="">Acheter</a> un abonnement
            </span>
        </div>
        <% } %>
    </div>
</script>
