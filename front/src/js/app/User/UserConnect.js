/**
 * Show a user connection widget
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="User/UserConnect"
 * >
 */
define(
    ['postal', 'jquery', 'api', 'template', 'Ticket'],
    function dependencies(postal, $, TKTApi, Template, Ticket) {

    function UserConnect($container, state) {
        this.$container = $container;
        this.data       = {
            pass_infos: {}
        };
    }

    UserConnect.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            TKTApi.viewTicket((err, status, rsp) => {
                this.render(!err ? new Ticket(rsp) : null);
            });

            postal.subscribe({
                channel: "connection",
                topic: "update",
                callback: (data, envelope) => {
                    this.render(data.ticket);
                }
            });
        },

        emit_connection_update: function(ticket) {
            postal.publish({
                channel: "connection",
                topic: "update",
                data: {
                    ticket: ticket
                }
            });
        },

        connect_pass: function() {
            $('.user-connect-error', this.$container).html("").addClass('d-none');

            if (!this.data.pass_infos.number || !this.data.pass_infos.key)
                return $('.pass-error')
                    .html('Veuillez remplir les deux champs')
                    .removeClass('d-none');

            TKTApi.loginTicket(
                this.data.pass_infos.number,
                this.data.pass_infos.key,
                (err, status, rsp) => {
                    if (err)
                        return $('.pass-error')
                            .html('Les informations que vous avez saisies sont invalides')
                            .removeClass('d-none');

                    this.data.ticket = new Ticket(rsp);
                    this.emit_connection_update(this.data.ticket);
                }
            );
        },

        disconnect_pass: function() {
            TKTApi.logoutTicket((err, status, rsp) => {
                if (!err)
                    this.emit_connection_update(null);
            });
        },

        render: function (ticket) {
            this.$container.html(Template.render('tkt-user-connect-tpl', { ticket }));

            // bind pass fields
            $('.pass-number-input,.pass-key-input', this.$container).change((e) => {
              this.data.pass_infos = {
                number: $('.pass-number-input', this.$container).val(),
                key: $('.pass-key-input', this.$container).val()
              };
            });

            // bind pass connect button
            $('.connect-btn', this.$container).click(this.connect_pass.bind(this));

            // bind pass disconnect button
            $('.disconnect-btn', this.$container).click(this.disconnect_pass.bind(this));
        },

        detach: function() {

        }
    };

    return UserConnect;
});
