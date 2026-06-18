import { Component, Config, i18n, Template } from '../Core';
import { TKTLib, Api as TKTApi } from '../Ticketack';
import { Ticket, Cart as CartModel, CartItem } from '../Models';
import postal from 'postal';

/**
 * Cart component
 *
 * Usage:
 *
 * <div
 *    data-component="Cart/Cart"
 *    data-cart-id="UUID"
 *    data-hide-links="finalize,continue"
 * >
 */
export default class Cart extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.cart                = {};
        this.hide_links          = (this.$container.data('hide-links') || '').split(',').filter(Boolean);
        this.cart_id             = this.$container.data('cart-id');
        this.wallet_enabled      = !this.hide_links.includes('wallet');
        this.wallet_tickets      = [];
        this.selected_wallet_ticket = null;
        this.pass_infos          = {};
    }

    attach() {
        super.attach();

        this.init();
    }

    init() {
        postal.subscribe({
            channel: "cart",
            topic: "reload",
            callback: () => {
                this.loadCart();
            }
        });

        postal.subscribe({
            channel: "cart",
            topic: "update",
            callback: (data) => {
                if (!data.internal) {
                    this.cart = data.cart;
                    this.loadItemsInfos();
                }
            }
        });

        postal.subscribe({
            channel: "connection",
            topic: "update",
            callback: () => {
                if (this.wallet_enabled)
                    this.loadCart();
            }
        });

        postal.subscribe({
            channel: "login",
            topic: "update",
            callback: () => {
                if (this.wallet_enabled)
                    this.loadCart();
            }
        });

        if (!this.cart_id) {
            return this.loadCart();
        }

        TKTLib.CartService.getById(this.cart_id).catch(err => {
            console.error(err);
        }).finally(() => {
            this.loadCart();
        });
    }

    getTicketsFromStorage() {
        const edition = Config.get('edition', '');
        const state_tickets = this.state
            .get('tickets', [])
            .map(ticket => new Ticket(ticket))
            .filter(t => t.isActivated())
            .filter(t => !edition?.length || t.edition === edition);
        const account_tickets = this.state
            .get('user.tickets', [])
            .map(ticket => new Ticket('ticket_data' in ticket ? ticket.ticket_data : ticket))
            .filter(t => t.isActivated())
            .filter(t => !edition?.length || t.edition === edition);

        return { state_tickets, account_tickets };
    }

    refreshAccountTickets() {
        return new Promise(resolve => {
            TKTApi.getProfile(false, (err, status, rsp) => {
                if (!err && rsp?.tickets) {
                    const tickets = rsp.tickets.map(t => new Ticket(t.ticket_data));
                    this.state.set('user.tickets', tickets);
                }
                resolve();
            });
        });
    }

    async loadWalletTickets() {
        if (!this.wallet_enabled) {
            this.wallet_tickets = [];
            this.selected_wallet_ticket = null;
            return;
        }

        await this.refreshAccountTickets();

        const { state_tickets, account_tickets } = this.getTicketsFromStorage();
        const candidates = [...state_tickets, ...account_tickets];
        const seen = new Set();
        const unique = [];

        candidates.forEach(ticket => {
            if (!seen.has(ticket._id)) {
                seen.add(ticket._id);
                unique.push(ticket);
            }
        });

        const with_wallet = [];
        await Promise.all(unique.map(async ticket => {
            try {
                await ticket.loadWallet();
                if (ticket.getWalletBalance() > 0)
                    with_wallet.push(ticket);
            } catch (error) {
                // pass has no wallet
            }
        }));

        this.wallet_tickets = with_wallet;
        this.selected_wallet_ticket = this.selectWalletTicket();
    }

    getPendingWalletDebitInCart(ticket_id) {
        if (!this.cart?.items)
            return 0;

        return this.cart.items
            .filter(i =>
                i.type === CartItem.WALLET_TYPE
                && (!ticket_id || i.ticket_id === ticket_id)
                && parseFloat(i.amount) < 0
            )
            .reduce((sum, i) => sum + Math.abs(parseFloat(i.amount)), 0);
    }

    getAvailableWalletBalance(ticket) {
        if (!ticket)
            return 0;

        return Math.max(0, ticket.getWalletBalance() - this.getPendingWalletDebitInCart(ticket._id));
    }

    getMaxWalletAmount(ticket) {
        if (!ticket)
            return 0;

        return Math.min(this.getAvailableWalletBalance(ticket), this.cart.getTotal());
    }

    selectWalletTicket() {
        if (this.selected_wallet_ticket && this.getMaxWalletAmount(this.selected_wallet_ticket) > 0)
            return this.selected_wallet_ticket;

        return this.wallet_tickets.find(t => this.getMaxWalletAmount(t) > 0) || null;
    }

    hasWalletAvailability() {
        return this.wallet_tickets.some(t => this.getMaxWalletAmount(t) > 0);
    }

    loadCart(callback) {
        callback = callback || ((err, cart) => {});

        TKTLib.CartService.get().then(cart => {
            if (cart.isFinished()) {
                TKTLib.CartService.resetCartId();
                this.cart = new CartModel({});
            } else {
                this.cart = new CartModel(cart);
            }

            return this.loadItemsInfos(callback);
        }).catch(err => {
            return callback(err);
        });
    }

    loadItemsInfos(callback) {
        callback = callback || ((err, cart) => {});

        this.cart.loadItemsInfos(async (err) => {
            if (err)
                return callback(err);

            if (this.wallet_enabled)
                await this.loadWalletTickets();

            await this.build_table();
            this.emit_update();

            this.bind_remove_item_icons((err) => {
                if (err)
                    console.error(err);
            });

            return callback(null, this.cart);
        });
    }

    getWalletTicketLabel(ticket) {
        const name = ticket.getOwnerNameOrId?.() || ticket.shortname || ticket._id;
        const available = this.getAvailableWalletBalance(ticket);
        const currency = ticket.getWalletCurrency?.() || 'CHF';

        return `${name} (${currency} ${available.toFixed(2)})`;
    }

    getFormattedAvailableWalletBalance(ticket) {
        const available = this.getAvailableWalletBalance(ticket);
        const currency = ticket.getWalletCurrency?.() || 'CHF';

        return `${currency} ${available.toFixed(2)}`;
    }

    async build_table() {
        this.selected_wallet_ticket = this.selectWalletTicket();
        const selected = this.selected_wallet_ticket;
        const max_wallet_amount = this.getMaxWalletAmount(selected);
        const show_wallet_block = this.wallet_enabled
            && this.cart.getTotal() > 0
            && this.hasWalletAvailability();
        const show_wallet_connect = this.wallet_enabled
            && this.cart.getTotal() > 0
            && this.wallet_tickets.length === 0;

        this.$container.html(Template.render('tkt-cart-table-tpl', {
            cart: this.cart,
            ticket: selected,
            wallet_tickets: this.wallet_tickets,
            selected_wallet_ticket: selected,
            max_wallet_amount,
            show_wallet_block,
            show_wallet_connect,
            program_url: Config.get('program_url')?.length > 0 ? Config.get('program_url') : (await TKTLib.CartService.getProgramUrl()),
            cart_reset_url: Config.get('cart_reset_url'),
            checkout_url: Config.get('checkout_url')?.length > 0 ? Config.get('checkout_url') : (await TKTLib.CartService.getCheckoutUrl()),
            login_url: Config.get('login_url') || '',
            hide_links: this.hide_links,
            getWalletTicketLabel: (t) => this.getWalletTicketLabel(t),
            getFormattedAvailableWalletBalance: (t) => this.getFormattedAvailableWalletBalance(t),
            getMaxWalletAmount: (t) => this.getMaxWalletAmount(t)
        }));

        $('.promo-code-button', this.$container).on('click', () => {
            const code = $('.promo-code-input', this.$container).val();
            if (code && code.length)
                this.usePromoCode(code);
        });

        $('.wallet-button', this.$container).on('click', () => {
            const amount = $('.wallet-input', this.$container).val();
            if (amount && amount > 0)
                this.useWallet(amount);
        });

        $('.wallet-ticket-select', this.$container).on('change', (e) => {
            const ticket_id = $(e.target).val();
            this.selected_wallet_ticket = this.wallet_tickets.find(t => t._id === ticket_id) || null;
            this.build_table();
        });

        $('.pass-number-input, .pass-key-input', this.$container).on('change input', () => {
            this.pass_infos = {
                number: $('.pass-number-input', this.$container).val(),
                key: $('.pass-key-input', this.$container).val()
            };
        });

        $('.wallet-connect-btn', this.$container).on('click', () => {
            this.connectPass();
        });
    }

    usePromoCode(code) {
        $('.promo-code-error').html("").addClass('d-none');
        $('.promo-code-success').html("").addClass('d-none');

        TKTLib.CartService.usePromoCode(code).then(() => {
            this.loadCart();
        }).catch(() => {
            return $('.promo-code-error')
                .html(i18n.t('Impossible d\'utiliser ce code promo'))
                .removeClass('d-none');
        });
    }

    useWallet(amount) {
        $('.wallet-error').html("").addClass('d-none');
        $('.wallet-success').html("").addClass('d-none');

        const ticket = this.selected_wallet_ticket;
        if (!ticket)
            return;

        amount = parseFloat(amount);
        if (amount > 0)
            amount *= -1;

        const max_amount = -this.getMaxWalletAmount(ticket);
        if (amount < max_amount)
            return $('.wallet-error')
                .html(i18n.t('Montant trop élevé'))
                .removeClass('d-none');

        if ((this.cart.getTotal() + amount) < 0)
            return $('.wallet-error')
                .html(i18n.t('Montant trop élevé'))
                .removeClass('d-none');

        TKTLib.CartService.useWallet(ticket._id, amount, /*vat*/0).then(() => {
            $('.wallet-success')
                .html(i18n.t('Portefeuille appliqué avec succès'))
                .removeClass('d-none');
            this.loadCart();
        }).catch(err => {
            let msg = 'Impossible d\'utiliser votre portefeuille';
            switch (err.status) {
                case 404:
                    msg = 'Ticket invalide';
                    break;
                case 410:
                    msg = 'Montant trop élevé';
                    break;
            }

            return $('.wallet-error')
                .html(i18n.t(msg))
                .removeClass('d-none');
        });
    }

    async connectPass() {
        $('.wallet-connect-error', this.$container).html("").addClass('d-none');

        const { number, key } = this.pass_infos;
        if (!number || !key)
            return $('.wallet-connect-error')
                .html(i18n.t('Veuillez remplir les deux champs'))
                .removeClass('d-none');

        try {
            const rsp = await TKTLib.TicketService.getTicketByTicketId({ number, key });
            const ticket = new Ticket(rsp);
            this.state.push('tickets', ticket, '_id');

            postal.publish({
                channel: "connection",
                topic: "update",
                data: { ticket }
            });

            if (ticket.status === 'new')
                window.location.href = TKTApi.getTicketViewUrl(ticket._id);
            else
                this.loadCart();
        } catch (err) {
            return $('.wallet-connect-error')
                .html(i18n.t('Les informations que vous avez saisies sont invalides'))
                .removeClass('d-none');
        }
    }

    bind_remove_item_icons(callback) {
        callback = callback || (() => {});

        this.$container.off('click.tktCart', '.tkt-remove-cart-item');
        this.$container.on('click.tktCart', '.tkt-remove-cart-item', (e) => {
            let $x = $(e.target);

            if (!$x.hasClass('tkt-remove-cart-item'))
                $x = $x.closest('.tkt-remove-cart-item');
            const item_id = parseInt($x.data('item'));

            this.remove_item(item_id, (err) => {
                if (err)
                    return callback(err);

                return this.loadCart(callback);
            });
        });

        this.$container.off('click.tktCart', '.tkt-reset-cart-btn');
        this.$container.on('click.tktCart', '.tkt-reset-cart-btn', (e) => {
            e.preventDefault();
            this.reset_cart((err) => {
                if (err)
                    console.error(err);

                this.loadCart(callback);
            });
        });
    }

    remove_item(item_id, callback) {
        TKTLib.CartService.removeItemFromCart(item_id).then(cart => {
            callback && callback(null, cart);
        }).catch(err => {
            return callback(err);
        });
    }

    reset_cart(callback) {
        callback = callback || ((err) => {});

        TKTLib.CartService.emptyCart().then(() => {
            return callback && callback(null);
        }).catch(err => {
            return callback(err);
        });
    }

    emit_update() {
        postal.publish({
            channel: "cart",
            topic: "update",
            data: {
                cart: this.cart,
                internal: true
            }
        });
    }
}
