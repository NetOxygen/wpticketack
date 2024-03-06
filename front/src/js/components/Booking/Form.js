import { Component, Config, i18n, Template } from '../Core';
import { TKTLib, Api as TKTApi } from '../Ticketack';
import { Cart, Screening, Ticket } from '../Models';
import _ from 'lodash';
import postal from 'postal';
import moment from 'moment';

/**
 * Show a booking form
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Booking/Form"
 *    data-redirect="none|cart|checkout"
 *    data-cart-url="https://..."
 *    data-checkout-url="https://..."
 *    data-ids="12345678-1234-1234-1234-123456789012,..."
 *    data-show="pricings,ticket_id"
 * >
 */
export default class BookingForm extends Component {
    /**
     * @constructor
     * @param {DOMElement} $container - The DOM node to attach this component to
     * @param {State} $container - The global state
     */
    constructor($container, state, loader) {
        super($container, state, loader);

        this.initialized = false;

        this.ids                = (this.$container.data('ids') || '').toString().split(',');
        this.redirect           = this.$container.data('redirect');
        this.cart_url           = this.$container.data('cart-url');
        this.checkout_url       = this.$container.data('checkout-url');
        this.show_on_load       = parseInt(this.getUrlParam('book')) == 1;
        this.selected_screening = this.getUrlParam('s_id');
        this.show               = (this.$container.data('show') || '').toString().split(',');
    }

    attach() {
        super.attach();

        this.init_store();

        postal.subscribe({
            channel: "connection",
            topic: "update",
            callback: (data, envelope) => {
                this.build_tickets_form();
                this.check_bookability();
            }
        });

        this.init();
    }

    init() {
        Screening.getInfos(this.ids, (err, screenings) => {
            this.data.screenings = _.sortBy(screenings, (s) => s.start_at);
            this.build_form();
            this.initialized = true;
        });

        this.listen_to_message();
    }

    async refreshTicket(ticket_id, callback) {
        let ticket;
        let state_key;

        if (this.state.hasInArray('user.tickets', '_id', ticket_id))
            state_key = 'user.tickets';
        else if (this.state.hasInArray('tickets', '_id', ticket_id))
            state_key = 'tickets';
        else
            return callback(new Error('Ticket not found'));

        try {
            const rsp = await TKTLib.TicketService.get(ticket_id, /*noCache*/true);
            ticket = new Ticket(rsp);
            this.state.push(state_key, ticket, /*uniqueBy*/'_id');
        } catch (err) {
            this.state.pull(state_key, '_id', ticket_id);
        }

        return callback && callback(/*err*/null, ticket);
    }

    init_store() {
        this.data = {
            screenings: [], // current screenings
            screening: {},  // selected screening
            pricings: [],   // selected screening pricings
            pass_infos: {}, // connection infos
            ticket: {},     // active ticket
            bookability: {} //selected screening bookability with  active ticket
        };
    }

    listen_to_message() {
        window.addEventListener('message', e => {
            if (e.data.action === 'tkt::map:close') {
                switch (this.redirect) {
                    case 'checkout':
                        window.location.href = this.checkout_url;
                        break;
                    case 'cart':
                    default:
                        window.location.href = this.cart_url;
                        break;
                }
            }
        });
    }

    reset_store_on_screening_change() {
        this.data.screening   = {};
        this.data.pricings    = {};
        this.data.pass_infos  = {};
        this.data.bookability = {};
    }

    deinit() {
        this.$container.html("");
        this.initialized = false;
    }

    emit_cart_update(cart) {
        postal.publish({
            channel: "cart",
            topic: "update",
            data: {
                cart: cart
            }
        });
    }

    emit_connection_update(ticket) {
        postal.publish({
            channel: "connection",
            topic: "update",
            data: {
                ticket: ticket
            }
        });
    }

    process_add_to_cart() {
        $('.pricings-error').html("").addClass('d-none');
        $('.success-panel').addClass('d-none');

        // Check chosen pricings
        const chosen_pricings = _.find(this.data.pricings, (nb) => nb > 0);
        if (!chosen_pricings) {
            return $('.pricings-error')
                .html(i18n.t('Veuillez choisir au moins un billet'))
                .removeClass('d-none');
        }

        // Add to cart
        TKTApi.addToCart(
            this.data.screening._id,
            this.data.pricings,
            (err, status, rsp) => {
                if (err) {
                    return $('.pricings-error')
                        .html((rsp || {}).errorMsg)
                        .removeClass('d-none');
                }

            switch (this.redirect) {
                case 'cart':
                    window.location.href = this.cart_url;
                    break;
                case 'checkout':
                    window.location.href = this.checkout_url;
                    break;
                default:
                    // Hide forms and show success message
                    $('.dates-form, .tickets-form', this.$container).addClass('d-none');
                    $('.success-panel', this.$container).removeClass('d-none');

                    // Reload and emit cart update
                    TKTApi.loadCart((err, status, rsp) => {
                        if (err)
                            return;

                        this.emit_cart_update(new Cart(rsp));
                    });
            }
        });
    }

    async book_on(ticket_id) {
        const screening_id = this.data.screening._id;
        if (!screening_id)
            return new Error("No screening");

        let ticket = this.state.hasInArray('tickets', '_id', ticket_id) ?
            this.state.getInArray('tickets', '_id', ticket_id) :
            this.state.getInArray('user.tickets', '_id', ticket_id);

        if (!ticket)
            return new Error("Ticket not found");

        const { ScreeningService, TicketService } = TKTLib;
        const $container = $('.ticket-wrapper[data-ticket-id="' + ticket_id + '"]');
        let bookings = [];
        try {
            bookings = await ScreeningService.book(screening_id, {}, [{
                pledge: { 'ticket:type:_id': ticket.type._id }
            }]);
            const result = await TicketService.confirmBooking(ticket_id, bookings[0]._id);
            $('.book-form-error', $container).addClass('d-none');
            $('.book-form-success', $container).removeClass('d-none');
        } catch(err) {
            $('.book-form-error', $container)
                .html(i18n.t("Impossible de réserver."))
                .removeClass('d-none');

            // release created bookings, if any
            bookings.map(async booking => await ScreeningService.releaseBooking(booking._id));
        }

        this.refreshTicket(ticket_id, (err, ticket) => this.check_bookability());
        setTimeout(() => {
            this.build_tickets_form();
        }, 1000);
    }

    async connect_pass() {
        $('.pass-error', this.$container).html("").addClass('d-none');

        if (!this.data.pass_infos.number || !this.data.pass_infos.key)
            return $('.pass-error')
                .html(i18n.t('Veuillez remplir les deux champs'))
                .removeClass('d-none');

        const { number, key } = this.data.pass_infos;
        try {
            const rsp = await TKTLib.TicketService.getTicketByTicketId({number, key});

            this.data.ticket = new Ticket(rsp);
            this.state.push('tickets', this.data.ticket, /*uniqueBy*/'_id');
            this.emit_connection_update(this.data.ticket);

            // Redirect to ticket activation if needed
            if (this.data.ticket.status == "new")
                window.location.href =  TKTApi.getTicketViewUrl();
        } catch (err) {
            return $('.pass-error')
                .html(i18n.t('Les informations que vous avez saisies sont invalides'))
                .removeClass('d-none');
        }
    }

    check_bookability(callback) {
        if (!this.data.screening || !this.data.screening._id)
            return new Error("No screening");

        TKTApi.checkBookability(this.data.screening._id, (err, status, rsp) => {
            if (err)
                return false;
            this.data.bookability = rsp;

            const tickets = this.state.get('tickets', []);
            if (tickets.length > 0) {
                $('.show-bookings-btn', this.$container).removeClass('d-none');
            } else {
                $('.connect-panel', this.$container).removeClass('d-none');
            }
             callback && callback();
        });
    }

    build_form() {
        this.$container.html("");
        this.$dates_form    = $('<div class="dates-form"></div>').appendTo(this.$container);
        this.$tickets_form  = $('<div class="tickets-form"></div>').appendTo(this.$container);
        this.$success_panel = $('<div class="success-panel d-none"></div>').appendTo(this.$container);

        this.build_dates_form();
        this.build_success_panel();

        this.loader.attach();
    }

    build_dates_form() {
        // render template
        this.$dates_form.html(Template.render('tkt-booking-form-dates-tpl', {
            screenings: this.data.screenings,
        }));

        // bind dates choices
        $('.dates-wrapper .date').click((e) => {
            let $date = $(e.target);
            if (!$date.data('screening_id'))
                $date = $date.closest('[data-screening_id]');
            this.select_screening($date.data('screening_id'));
            this.loader.attach();
        });

        if ($('.days-wrapper')) {
            $('.days-wrapper .day').click((e) => {
                this.select_day($(e.target).data('day'));
                this.loader.attach();
            });
        }

        if ($('.days-wrapper #calendar')) {
            $('#calendar').change((e) => {
                this.select_day($('#calendar').val());
                this.loader.attach();
            });
        }

        // Select first non full date
        let s_to_select = this.selected_screening;
        if (!s_to_select) {
            let i = this.data.screenings.length - 1;
            while (i >= 0) {
                if (this.data.screenings[i].seats.available > 0)
                    s_to_select = this.data.screenings[i]._id;
                i--;
            }
        }

        if (s_to_select) {
            let d_to_select = $(
                '.days-wrapper .day[data-screening_id*="' + s_to_select + '"]'
            ).data('day');
            this.select_day(d_to_select);
            this.select_screening(s_to_select);
        }
    }

    build_tickets_form() {
        if (!this.data.screening)
            return;

        // render template

        const connected_tickets = this.state
            .get('tickets', [])
            .map(ticket => new Ticket(ticket))
            .filter(t => t.isActivated());
        const account_tickets = this.state
            .get('user.tickets', [])
            .map(ticket => new Ticket(ticket))
            .filter(t => t.isActivated());

        let pricings = [];
        if ('getMatchingPricings' in this.data.screening)
            pricings = this.data.screening.getMatchingPricings('eshop',
                connected_tickets.concat(account_tickets).map(t => t.type._id)
            );
        const screening = new TKTLib.Screening({ ...this.data.screening, pricings });

        this.$tickets_form.html(Template.render('tkt-booking-form-pricings-tpl', {
            screening: screening,
            show_pricings: this.show.includes('pricings'),
            show_ticket_id: this.show.includes('ticket_id'),
            account_tickets,
            connected_tickets
        }));

        // bind pricings minus buttons if any
        $('.tkt-minus-btn', this.$container).click((e) => {
            const $t     = $(e.target);
            const $input = $t.parent().next('.pricing-input').eq(0);
            const val    = parseInt($input.val());
            if (val > 0) {
                $input.val(val - 1).trigger('change');
                this.data.pricings[$input.data('pricing')] = val - 1;
                const $qty = $t.parent().find('.pricing-qty').eq(0);
                $qty.text(val - 1);
            }
            if (val > 1)
                $t.removeClass('tkt-grey-badge').addClass('tkt-dark-badge');
            else
                $t.removeClass('tkt-dark-badge').addClass('tkt-grey-badge');
        });
        // bind pricings plus buttons if any
        $('.tkt-plus-btn', this.$container).click((e) => {
            const $t     = $(e.target);
            const $input = $t.parent().next('.pricing-input').eq(0);
            const val    = parseInt($input.val());
            $input.val(val + 1).trigger('change');
            this.data.pricings[$input.data('pricing')] = val + 1;
            const $qty = $t.parent().find('.pricing-qty').eq(0);
            $qty.text(val + 1);
            $('.tkt-minus-btn', $t.parent())
                .removeClass('tkt-grey-badge')
                .addClass('tkt-dark-badge');
        });

        // bind pass panel toggler
        $('a.show-connect-panel-form', this.$container).click((e) => {
            e.preventDefault();
            $('.connect-panel-form').removeClass('d-none');
        });

        // bind pass fields
        $('.pass-number-input,.pass-key-input', this.$container).change((e) => {
          this.data.pass_infos = {
            number: $('.pass-number-input', this.$container).val(),
            key: $('.pass-key-input', this.$container).val()
          };
        });

        // bind pass connect button
        $('.connect-btn', this.$container).click((e) => {
            this.connect_pass();
        });

        // bind book button
        $('.book-btn', this.$container).click((e) => {
            const ticket_id = $(e.target).data('ticket-id');
            $(e.target).html('<i class="tkt-icon-spinner tkt-spin"></i>');
            if (ticket_id)
                this.book_on(ticket_id);
        });

        $('.book-btn-more', this.$container).click((e) => {
            const ticket_id = $(e.target).data('ticket-id');
            $(e.target).html('<i class="tkt-icon-spinner tkt-spin"></i>');
            if (ticket_id)
                this.book_on(ticket_id);
        });

        // bind add-to-cart button
        $('.add-to-cart-btn', this.$container).click((e) => {
          this.process_add_to_cart();
        });
    }

    build_success_panel() {
        // render template
        this.$success_panel.html(Template.render('tkt-booking-form-success-tpl', {
            program_url: Config.get('program_url'),
            cart_url: Config.get('cart_url')
        }));
    }

    activate_day (day) {
        $('.days-wrapper .day').removeClass('active');
        $('.days-wrapper .day[data-day*="' + day + '"]').addClass('active');

        $('.dates-wrapper .date').hide();
        $('.dates-wrapper .date[data-day="' + day + '"]').show();
   }

    select_day (day) {
        this.activate_day(day);

        const $day_input = $('.days-wrapper .day[data-day*="' + day + '"]');
        const data_screening_id = $day_input.data('screening_id');
        if (data_screening_id) {
            const first_screening = data_screening_id.split(',')[0];
            this.select_screening(first_screening);
        } else {
            //by calendar
            if (day) {
                const date = moment(day).format("dddd D MMMM");
                this.activate_day(date);

                const screening_id = $('.dates-wrapper span[data-day="' + date + '"]').attr('data-screening_id');
                this.select_screening(screening_id);
                this.activate_screening(screening_id);
            }
        }
    }

    activate_screening (screening_id) {
        $('.dates-wrapper .date').removeClass('active');
        $('.dates-wrapper .date[data-screening_id="' + screening_id + '"]').addClass('active');
    }

    select_screening (screening_id) {
        this.activate_screening(screening_id);

        // reset data
        this.reset_store_on_screening_change();

        this.data.screening = _.find(this.data.screenings, (s) => s._id === screening_id );
        this.build_tickets_form();

        this.check_bookability();
    }

    getUrlParam(name) {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}
