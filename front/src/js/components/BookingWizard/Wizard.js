import { Component, i18n, Template } from '../Core';
import { Api as TKTApi } from '../Ticketack';
import { Screening } from '../Models';
import _ from 'lodash';
import postal from 'postal';
import moment from 'moment';
import async from 'async';

/**
 * Show a booking wizard
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="BookingWizard/Wizard"
 *    data-redirect="none|cart|checkout"
 *    data-cart-url="https://..."
 *    data-checkout-url="https://..."
 *    data-ids="12345678-1234-1234-1234-123456789012,..."
 * >
 */
export default class BookingWizard extends Component {
    /**
     * @constructor
     * @param {DOMElement} $container - The DOM node to attach this component to
     * @param {State} $container - The global state
     */
    constructor($container, state, loader) {
        super($container, state, loader);

        this.ids                = this.$container.data('ids').split(',');
        this.redirect           = this.$container.data('redirect');
        this.cart_url           = this.$container.data('cart-url');
        this.checkout_url       = this.$container.data('checkout-url');

        this.$topNavigationWrapper    = $('.booking-wizard-top-navigation-wrapper', this.$container);
        this.$menuWrapper             = $('.booking-wizard-menu-wrapper', this.$container);
        this.$contentWrapper          = $('.booking-wizard-content-wrapper', this.$container);
        this.$bottomNavigationWrapper = $('.booking-wizard-bottom-navigation-wrapper', this.$container);
    }

    attach() {
        super.attach();

        this.init();
    }

    init() {
        Screening.getInfos(this.ids, (err, screenings) => {
            this.state.screenings = _.sortBy(screenings, (s) => s.start_at);
            this.go_to(1);
        }, /*forceRefresh*/true);

        this.state = {
            // screenings
            screenings: [],
            // wizard progression
            step: 1,
            maxStep: 1,
            // wizard data
            nbTickets: 0,
            nbRuns: 0,
            day: null,
            time: null,
            selectedScreenings: [],
            selectedSizes: {},
            selectedPricings: [],
            userInfos: [],
        };
    }

    go_to(step) {
        if (step < this.state.step)
            this.reset_state_on_go_back(step);

        this.state.step    = step;
        this.state.maxStep = Math.max(this.state.step, this.state.maxStep);

        this.render();
    }

    next() {
        this.go_to(this.state.step + 1);
    }

    reset_state_on_go_back(step) {
        switch(step) {
            case 1:
                this.state.day = null;
            case 2:
                this.state.selectedScreenings = [];
                this.state.time = null;
            case 3:
                this.state.selectedSizes = {};
            case 4:
                this.state.userInfos = [];
            case 5:
                this.state.selectedPricings = [];
        }
    }

    render() {
        this.$topNavigationWrapper.html(Template.render('tkt-booking-wizard-navigation-tpl', { state: this.state }));
        this.$menuWrapper.html(Template.render('tkt-booking-wizard-menu-tpl', { state: this.state }));
        this.$contentWrapper.html(Template.render('tkt-booking-wizard-content-tpl', { state: this.state }));
        this.$bottomNavigationWrapper.html(Template.render('tkt-booking-wizard-navigation-tpl', { state: this.state }));

        this.loader.attach();

        this.addEventListeners();
    }

    addEventListeners() {
        // menu
        $('.booking-wizard-menu-item.accessible', this.$menuWrapper).on('click', (e) => {
            let $item = $(e.target).closest('.booking-wizard-menu-item');
            this.go_to($item.data('target'));
        });


        // step 1
        $('.nb-runs-choice', this.$contentWrapper).on('click', (e) => {
            this.state.nbRuns = $(e.target).data('nb-runs');
            this.next();
        });

        // step 2
        $('.booking-wizard-calendar', this.$contentWrapper).on('change', (e) => {
            this.state.day = moment($(e.target).val());
            this.next();
        });

        // step 3
        $('.booking-wizard-time-choice', this.$contentWrapper).on('click', (e) => {
            this.state.time         = $(e.target).data('time');
            const screeningIds = ($(e.target).data('screening-ids') || '').split(',');
            this.state.selectedScreenings = screeningIds.length > 0 ? this.state.screenings.filter((s) => {
                return screeningIds.includes(s._id);
            }) : [];
            this.state.selectedTimes = this.state.selectedScreenings.map(s => moment(s.start_at).format('LT')).join(' - ');
            this.next();
        });

        // step 4
        $('.booking-wizard-sizes-choice', this.$contentWrapper).on('change', (e) => {
            this.state.selectedSizes = {};
            $('.booking-wizard-sizes-choice', this.$contentWrapper).map((i, input) => {
                this.state.selectedSizes[$(input).data('size')] = $(input).val();
                if ($(input).val() == 0)
                    delete(this.state.selectedSizes[$(input).data('size')]);
            });
            this.state.nbTickets = Object
                .keys(this.state.selectedSizes)
                .reduce((memo, size) => memo + parseInt(this.state.selectedSizes[size]), 0);
            this.render();
        });
        $('.booking-wizard-sizes-next-button', this.$contentWrapper).on('click', (e) => {
            this.next();
        });

        // step 5


        $('.booking-wizard-user-info', this.$contentWrapper).on('keyup', (e) => {
            this.state.userInfos = [];
            $('.booking-wizard-user-info', this.$contentWrapper).each((i, input) => {
                const field       = $(input).data('field');
                const size        = $(input).data('size');
                const ticketIndex = $(input).data('ticket-index');
                const index       = $(input).data('index');

                if (!(ticketIndex in this.state.userInfos))
                    this.state.userInfos[ticketIndex] = {};
                this.state.userInfos[ticketIndex][field] = $(input).val();
            });

            let nbFilledUsers = 0;
            this.state.userInfos.map(userInfo => {
                $('.booking-wizard-next-button', this.$container).attr('disabled', 'disabled');

                if (userInfo.firstname.length) {
                    nbFilledUsers += 1;
                }
                if (nbFilledUsers == this.state.userInfos.length) {
                    $('.booking-wizard-next-button', this.$container).removeAttr('disabled');
                }
            })
        });

        $('.booking-wizard-next-button', this.$contentWrapper).on('click', (e) => {
            this.next();
        });

        // step 6
        this.hide_error();
        $('.booking-wizard-pricings-choice', this.$contentWrapper).on('change', (e) => {
            this.state.selectedPricings = [];
            const screeningPricings = this.state.selectedScreenings[0].pricings;
            $('.booking-wizard-pricings-choice', this.$contentWrapper).each((i, input) => {
                const key = $(input).val();
                if (!key || !(key in screeningPricings))
                    return;

                this.state.selectedPricings.push({
                    size: $(input).data('size'),
                    index: $(input).data('index'),
                    pricing: screeningPricings[key]
                });
            });
            this.render();
        });
        $('.booking-wizard-book-button', this.$contentWrapper).on('click', (e) => {
            this.book();
        });
    }

    book() {
        const screeningsToAdd = [];
        this.state.selectedScreenings.map(screening => {
            let ticketIndex = 0;
            const bookings  = [];
            Object.keys(this.state.selectedSizes).map(size => {
                let nbFoundSeats    = 0;
                const nbSeatsToFind = parseInt(this.state.selectedSizes[size], 10);
                screening.cinema_hall.map.seats.map(seat => {
                    if (nbFoundSeats == nbSeatsToFind)
                        return;

                    if (seat.status === 'free' && seat.placing.row === size) {
                        const pricing  = this.state.selectedPricings[ticketIndex].pricing;
                        const userData = this.state.userInfos[ticketIndex];
                        bookings.push({
                            seat: seat.label,
                            pricing: pricing.key,
                            user_data: userData
                        });
                        nbFoundSeats++;
                        ticketIndex++;
                    }
                });
            });

            if (bookings.length > 0) {
                screeningsToAdd.push({
                    screening_id: screening._id,
                    bookings: bookings
                });
            }
        });

        if (screeningsToAdd.length > 0) {
            const tasks = screeningsToAdd.map(data => done => {
                TKTApi.addScreeningToCart(data.screening_id, data.bookings, /*overbook*/false, (err, status, rsp) => {
                    if (status != 200)
                        this.show_error(rsp.flash.error);
                    if (err)
                        return done(err);
                    return done(/*err*/null, rsp);
                });
            });

            async.series(tasks, (err, results) => {
                if (err)
                    return;

                switch (this.redirect) {
                    case 'cart':
                        window.location.href = this.cart_url;
                        break;
                    case 'checkout':
                        window.location.href = this.checkout_url;
                        break;
                    default:
                        // Reload and emit cart update
                        TKTApi.loadCart((err, status, rsp) => {
                            if (err)
                                return;

                            this.emit_cart_update(new Cart(rsp));
                        });
                }
            });
        }
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

    show_error(msg) {
        $('.booking-wizard-error').html(msg).show();
    }

    hide_error() {
        $('.booking-wizard-error').html('').hide();
    }
}
