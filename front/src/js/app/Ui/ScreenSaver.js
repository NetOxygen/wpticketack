/**
 * Convert number inputs to components with a plus and
 * a minus button.
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    id="*"
 *    data-component="Ui/ScreenSaver"
 *    data-redirect-on-lock="<?= home_url() ?>"
 *
 *    <!-- Optional -->
 *    data-countdown="300"
 * >
 */
define(
    ['postal', 'jquery', 'hammer'],
    function dependencies(postal, $, Template, hammer) {

    function ScreenSaver($container, state) {
        this.$container = $container;
        this.hammer = new Hammer(document.getElementsByTagName('body')[0], {});
        this.$container.addClass('tkt-screen-saver');

        this.default_countdown = this.$container.data('countdown') || 300;
        this.redirect_url      = this.$container.data('redirect-on-lock') || 300;
    }

    ScreenSaver.prototype = {
        attach: function() {
            this.initState();
            this.init();
        },

        initState: function() {
            this.state = {
                // locked == true means the screensaver is visible
                'locked': false,
                'countdown': this.default_countdown
            };
        },

        setState: function(newState) {
            for (let i in newState) {
                this.state[i] = newState[i];
            }
        },

        init: function() {
            if (window.location.hash == '#show-screen-saver') {
                this.lock();
            }

            this.interval = setInterval((e) => {
                this.check_countdown();
            }, 1000);
            this.hammer.get('swipe').set({direction: Hammer.DIRECTION_ALL});
            this.hammer.on('swipe tap', this.touched.bind(this));
            this.$container.on('click', this.touched.bind(this));
            this.$debug = $('<span/>').appendTo(this.$container);
        },

        check_countdown: function() {
            if (this.state.locked)
                return;

            this.setState({
                'countdown': this.state.countdown - 1
            });
            this.$debug.text(this.state.countdown);
            if (this.state.countdown <= 0) {
                this.lock();
            }
        },

        touched: function() {
            if (this.state.locked) {
                this.unlock();
            } else {
                this.setState({
                    'countdown': this.default_countdown
                });
            }
        },

        lock: function() {
            this.setState({ 'locked': true });
            if (window.location.hash == '#show-screen-saver') {
                this.$container.show();
            } else {
                window.location.href = this.redirect_url + '#show-screen-saver';
            }
        },

        unlock: function() {
            this.$container.hide();
            this.setState({
                'locked': false,
                'countdown': this.default_countdown
            });
        },

        detach: function() {

        }
    };

    return ScreenSaver;
});
