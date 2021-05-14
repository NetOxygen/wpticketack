import { Component, i18n, Invalid, Config } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import serialize from 'form-serialize';

/**
 * Show a user registration widget
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="User/UserRegister"
 * >
 */
export default class UserRegister extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.loginUrl = Config.get('login_url');

        this.$form            = $('form', this.$container);
        this.$fieldsWrapper   = $('#registration-fields', this.$container);
        this.$messagesWrapper = $('#registration-messages', this.$container);
        this.$submitWrapper   = $('#registration-submit', this.$container);
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        this.$form.submit((e) => {
            e.preventDefault();
            this.register();
            return false;
        });
    }

    register() {
        this.reset_messages();

        let userdata = serialize(this.$form[0], { hash: true });
        if (!('user' in userdata))
            userdata = { 'user': userdata };

        if (!('name' in userdata.user) || !userdata.user.name) {
            userdata.user.name = userdata.user.contact.email;
        }
        if (userdata.user.contact.email != userdata.user.contact.email2)
            return this.show_error(i18n.t('Les adresses e-mail ne correspondent pas.'));

        if (userdata.user.password != userdata.user.password2)
            return this.show_error(i18n.t('Les mots de passe ne correspondent pas.'));

        delete(userdata.user.contact.email2);

        TKTApi.register(userdata, (err, status, rsp) => {
            /* TODO: Handle no_photo field */
            if (!rsp || !('success' in rsp))
                return this.show_error(i18n.t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.'));

            if (rsp.success)
                return this.show_success();

            if (rsp.invalid)
                this.show_error(Invalid.interpret(rsp.invalid).join('<br/>'));
        });
    }

    reset_messages() {
        $('.alert-success', this.$container).hide();
        $('.alert-danger', this.$container).html("").hide();
    }

    show_success() {
        this.$fieldsWrapper.hide();
        this.$submitWrapper.hide();
        $('.alert-success', this.$container).show();
    }

    show_error(msg) {
        $('.alert-danger', this.$container).html(msg).show();
    }
}
