<div class="tkt-ticket-connect">
    <nav class="navbar navbar-default ticket-navbar" role="navigation">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    Connecté avec : 
                    <strong><%= ticket.name %></strong>
                </div>
                <div class="col-md-3">
                    <button class="btn button disconnect-btn">
                        <?= tkt_t('Me déconnecter') ?>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</div>
