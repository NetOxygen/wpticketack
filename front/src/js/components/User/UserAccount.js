import { Component, Template, Config, i18n } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { User, Cart, Ticket } from '../Models';
import postal from 'postal';
import serialize from 'form-serialize';

/**
 * User account page
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="User/UserAccount"
 * >
 */
export default class UserAccount extends Component {
    /**
     * @constructor
     */
    constructor($container, state, loader) {
        super($container, state, loader);

        this.loginUrl        = Config.get('login_url');
        this.userAccountUrl  = Config.get('user_account_url');
        this.registrationUrl = Config.get('registration_url');
        this.lostpasswordUrl = Config.get('lostpassword_url');

        this.$menuContainer    = $('#tkt-user-account-menu', this.$container);
        this.$contentContainer = $('#tkt-user-account-content', this.$container);
        this.$verifyMessage    = $('#tkt-user-account-verify-message', this.$container);
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        TKTApi.getProfile((err, status, rsp) => {
            const user    = !err ? new User(rsp.user) : null;
            const orders  = !err ? rsp.orders.map(order => new Cart(order)) : [];
            const tickets = !err ? rsp.tickets.map(ticket => new Ticket(ticket.ticket_data)) : [];

            Ticket.loadTicketsInfos(tickets, (err, tickets) => {
                if (err) {
                    this.state.unset('user');
                } else {
                    this.state.set('user.account', user);
                    this.state.set('user.orders', orders);
                    this.state.set('user.tickets', tickets);
                }
                this.render();
            });

        });

        postal.subscribe({
            channel: "login",
            topic: "update",
            callback: (data, envelope) => {
                this.render();
            }
        });
    }

    emit_login_update() {
        postal.publish({
            channel: "login",
            topic: "update",
            data: {}
        });
    }

    logout() {
        TKTApi.logoutUser((err, status, rsp) => {
            if (!err) {
                this.state.unset('user');
                this.emit_login_update();
            }
        });
    }

    forgetTicket(e) {
        const ticketId = $(e.target).data('ticket-id');
        if (ticketId)
            this.state.pull('tickets', '_id', ticketId);
        this.render();
    }

    updateProfile() {
        this.reset_messages();

        this.$profileForm = $('#tkt-user-account-profile-form', this.$container);
        let userdata = serialize(this.$profileForm[0], { hash: true });

        if (!('user' in userdata))
            userdata = { 'user': userdata };


        if (!('name' in userdata.user) || !userdata.user.name) {
            userdata.user.name = userdata.user.contact.email;
        }

        if (userdata.user.password != userdata.user.password2) {
            this.show_error(i18n.t('Les mots de passe ne correspondent pas.'));
            return false;
        }

        delete(userdata.user.contact.email2);

        TKTApi.updateProfile(userdata.user, (err, status, rsp) => {
            if (err) {
                this.show_error(i18n.t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.'));
                return false;
            }

            if (rsp.invalid)
                this.show_error(Invalid.interpret(rsp.invalid).join('<br/>'));
            else
                return this.show_success(i18n.t('Votre profil a bien été mis à jour.'));
        });

        return false;
    }

    render() {
        const user          = this.state.get('user.account');
        const orders        = this.state.get('user.orders', []).map(order => new Cart(order));
        const tickets       = this.state.get('user.tickets', []).map(ticket => new Ticket('ticket_data' in ticket ? ticket.ticket_data : ticket));
        const other_tickets = this.state.get('tickets', []).map(ticket => new Ticket('ticket_data' in ticket ? ticket.ticket_data : ticket));

        if (!user)
            return window.location.href = this.loginUrl;

        if (!user.verified) {
            this.$menuContainer.hide();
            this.$contentContainer.hide();
            this.$verifyMessage.show();
        } else {
            this.$menuContainer.html(Template.render('tkt-user-account-menu-tpl', {}));
            this.$contentContainer.html(Template.render('tkt-user-account-content-tpl', { user, orders, tickets, other_tickets }));
            this.loader.attach();

        }

        // bind pass logout button
        $('.logout-btn', this.$container).click(this.logout.bind(this));

        // bind update profile submit button
        $('#tkt-user-account-profile-form', this.$container).on('submit', this.updateProfile.bind(this));

        // bind forget ticket button
        $('.ticket-forget-link', this.$container).click(this.forgetTicket.bind(this));

        this.loader.attach();
    }

    reset_messages() {
        $('.alert-success', this.$container).hide();
        $('.alert-danger', this.$container).html("").hide();
    }

    show_success(msg) {
        $('.alert-success', this.$container).html(msg).show();
    }

    show_error(msg) {
        $('.alert-danger', this.$container).html(msg).show();
    }
}
