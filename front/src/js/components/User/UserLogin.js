import { Component, Template } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { User } from '../Models';
import postal from 'postal';

/**
 * Show a user login widget
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="User/UserLogin"
 * >
 */
export default class UserLogin extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);
        this.data = {
            user_infos: {}
        };
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        TKTApi.getProfile((err, status, rsp) => {
            const user = !err ? new User(rsp.user) : null;

            if (err)
                this.state.unset('user.account');
            else
                this.state.set('user.account', user);

            this.render(user);
        });

        postal.subscribe({
            channel: "login",
            topic: "update",
            callback: (data, envelope) => {
                this.render(data.user);
            }
        });
    }

    emit_login_update(user) {
        postal.publish({
            channel: "login",
            topic: "update",
            data: {
                user: user
            }
        });
    }

    login() {
        $('.user-login-error', this.$container).html("").addClass('d-none');

        if (!this.data.user_infos.username || !this.data.user_infos.password)
            return $('.user-error')
                .html('Veuillez remplir les deux champs')
                .removeClass('d-none');

        TKTApi.loginUser(
            this.data.user_infos.username,
            this.data.user_infos.password,
            (err, status, rsp) => {
                if (err)
                    return $('.user-error')
                        .html('Les informations que vous avez saisies sont invalides')
                        .removeClass('d-none');

                this.data.user = new User(rsp.user);
                this.state.set('user.account', this.data.user);

                this.emit_login_update(this.data.user);

            }
        );
    }

    logout() {
        TKTApi.logoutUser((err, status, rsp) => {
            if (!err) {
                this.state.unset('user.account');
                this.emit_login_update(null);
            }
        });
    }

    render(user) {
        const user_account_url = TKTApi.getTicketViewUrl();
        this.$container.html(Template.render('tkt-user-login-tpl', { user, user_account_url }));

        // bind pass fields
        $('.username-input,.password-input', this.$container).change((e) => {
          this.data.user_infos = {
            username: $('.username-input', this.$container).val(),
            password: $('.password-input', this.$container).val()
          };
        });

        // bind pass login button
        $('.login-btn', this.$container).click(this.login.bind(this));

        // bind pass logout button
        $('.logout-btn', this.$container).click(this.logout.bind(this));
    }
}
