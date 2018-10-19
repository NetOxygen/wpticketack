/**
 * Show a booking form
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Booking/Form"
 *    data-ids="12345678-1234-1234-1234-123456789012,..."
 * >
 */
define( [
        'config', 'postal', 'lodash',
        'template', 'jquery', 'api',
        'moment', 'Cart', 'Screening', 'Ticket'
    ], function dependencies(
        config, postal, _,
        Template, $, TKTApi,
        moment, CartModel, Screening, Ticket) {

    function Form($container, state) {
        this.$container  = $container;
        this.initialized = false;

        this.ids                = this.$container.data('ids').split(',');
        this.show_on_load       = parseInt(this.getUrlParam('book')) == 1;
        this.selected_screening = this.getUrlParam('s_id');
    }

    Form.prototype = {
        attach: function() {
            this.init_store();

            $('.show-booking-form').click((e) => {
                e.preventDefault();

                if (this.initialized)
                    return this.deinit();

                this.init();
            });

            postal.subscribe({
                channel: "connection",
                topic: "update",
                callback: (data, envelope) => {
                    this.check_bookability();
                }
            });

            if (this.show_on_load)
                this.init();
        },

        init: function() {
            TKTApi.getScreeningsInfo(this.ids, (err, status, rsp) => {
                this.data.screenings = rsp.map((s) => {
                    let screening = new Screening(s);
                    screening.eligible_types = s.eligible_types;

                    return screening;
                });
                this.data.screenings = _.sortBy(this.data.screenings, (s) => s.start_at);
                this.build_form();
                this.initialized = true;
            });
        },

        init_store: function() {
            this.data = {
                screenings: [], // current screenings
                screening: {},  // selected screening
                pricings: [],   // selected screening pricings
                pass_infos: {}, // connection infos
                ticket: {},     // active ticket
                bookability: {} //selected screening bookability with  active ticket
            };
        },

        reset_store_on_screening_change: function() {
            this.data.screening   = {};
            this.data.pricings    = {};
            this.data.pass_infos  = {};
            this.data.bookability = {};
        },

        deinit: function() {
            this.$container.html("");
            this.initialized = false;
        },

        emit_cart_update: function(cart) {
            postal.publish({
                channel: "cart",
                topic: "update",
                data: {
                    cart: cart
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

        process_add_to_cart: function() {
            $('.pricings-error').html("").addClass('d-none');

            // Check chosen pricings
            const chosen_pricings = _.find(this.data.pricings, (nb) => nb > 0);
            if (!chosen_pricings) {
                return $('.pricings-error')
                    .html('Veuillez choisir au moins un billet')
                    .removeClass('d-none');
            }

            // Add to cart
            TKTApi.addToCart(
                this.data.screening._id,
                this.data.pricings,
                (err, status, rsp) => {
                    if (err) {
                        return $('.pricings-error')
                            .html(rsp.errorMsg)
                            .removeClass('d-none');
                    }

                // Hide forms and show success message
                $('.dates-form, .tickets-form').addClass('d-none');
                $('.success-panel').removeClass('d-none');

                // Reload and emit cart update
                TKTApi.loadCart((err, status, rsp) => {
                    if (err)
                        return;

                    this.emit_cart_update(new CartModel(rsp));
                });
            });
        },

        book: function() {
            if (!this.data.screening._id)
                return new Error("No screening");

            TKTApi.book(this.data.screening._id, (err, status, rsp) => {
                if (err) {
                    $('.book-form-success', this.$container).addClass('d-none');
                    $('.book-form-error', this.$container)
                        .html("Une erreur est survenue. Veuillez ré-essayer ultérieurement.")
                        .removeClass('d-none');
                } else if (rsp.flash && rsp.flash.error) {
                    $('.book-form-success', this.$container).addClass('d-none');
                    $('.book-form-error', this.$container)
                        .html(rsp.flash.error)
                        .removeClass('d-none');
                } else {
                    $('.book-form-error', this.$container).addClass('d-none');
                    $('.book-form-success', this.$container)
                        .html(rsp.flash.success)
                        .removeClass('d-none');
                }

                this.check_bookability();
            });
        },

        connect_pass: function() {
            $('.pass-error', this.$container).html("").addClass('d-none');

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

                    // Redirect to ticket activation if needed
                    if (this.data.ticket.status == "new")
                        window.location.href =  TKTApi.getTicketViewUrl();
                }
            );
        },

        check_bookability: function(callback) {
            if (!this.data.screening._id)
                return new Error("No screening");

            TKTApi.checkBookability(this.data.screening._id, (err, status, rsp) => {
                if (err)
                    return false;

                this.data.bookability = rsp;

                if (this.data.bookability.ticket_logged_in) {
                    $('.connect-panel', this.$container).addClass('d-none');
                    $('.book-panel', this.$container).removeClass('d-none');
                    $('.show-bookings-btn', this.$container).removeClass('d-none');

                    if (this.data.bookability.ticket_can_book_screening) {
                        $('.book-btn', this.$container).removeClass('d-none');
                        $('.book-form-error', this.$container).addClass('d-none');
                    } else {
                        $('.book-btn', this.$container).addClass('d-none');
                        const msg = this.data.bookability.screening_already_booked ?
                            "Vous ne pouvez pas réserver plus de place pour cette séance avec votre abonnement." :
                            "Vous ne pouvez pas réserver de place pour cette séance avec votre abonnement.";
                        $('.book-form-error', this.$container)
                            .html(msg)
                            .removeClass('d-none');
                    }
                } else {
                    $('.connect-panel', this.$container).removeClass('d-none');
                    $('.book-panel', this.$container).addClass('d-none');
                }
            });
        },

        build_form: function() {
            this.$container.html("");
            this.$dates_form    = $('<div class="dates-form"></div>').appendTo(this.$container);
            this.$tickets_form  = $('<div class="tickets-form"></div>').appendTo(this.$container);
            this.$success_panel = $('<div class="success-panel d-none"></div>').appendTo(this.$container);

            this.build_dates_form();
            this.build_success_panel();
        },

        build_dates_form: function() {
            // render template
            this.$dates_form.html(Template.render('tkt-booking-form-dates-tpl', {
                screenings: this.data.screenings,
            }));

            // bind dates choices
            $('.date-wrapper span.date').click((e) => {
                const $date = $(e.target);
                this.select_screening($date.data('screening_id'));
            });

            // Select first date
            this.select_screening(this.selected_screening ?
                this.selected_screening :
                this.data.screenings[0]._id
            );
        },

        build_tickets_form: function() {
            // render template
            const ticket_view_url = TKTApi.getTicketViewUrl();
            this.$tickets_form.html(Template.render('tkt-booking-form-pricings-tpl', {
                screening: this.data.screening,
                ticket_view_url
            }));

            // bind pricing fields
            $('.pricing-input', this.$container).change((e) => {
              const $input = $(e.target);
              this.data.pricings[$input.data('pricing')] = parseInt($input.val());
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
            $('.connect-btn', this.$container).click(this.connect_pass.bind(this));

            // bind book button
            $('.book-btn').click(this.book.bind(this));

            // bind add-to-cart button
            $('.add-to-cart-btn').click((e) => {
              this.process_add_to_cart();
            });
        },

        build_success_panel: function() {
            // render template
            this.$success_panel.html(Template.render('tkt-booking-form-success-tpl', {
                program_url: config.get('program_url'),
                cart_url: config.get('cart_url')
            }));
        },

        select_screening: function (screening_id) {
            $('.date-wrapper .date').removeClass('active');
            $('.date-wrapper .date[data-screening_id="' + screening_id + '"]').addClass('active');

            // reset data
            this.reset_store_on_screening_change();

            this.data.screening = _.find(this.data.screenings, (s) => s._id === screening_id );
            this.build_tickets_form();

            this.check_bookability();
        },

        getUrlParam(name) {
            const url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },

        detach: function() {

        }
    };

    return Form;
});
