/**
 * Generate a bootstrap 4 carousel
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Media/Carousel"
 *
 *    <!-- Optional -->
 *    data-interval="5000"      <!-- default: 3000 -->
 * >
 *   <div class="carousel-inner">
 *     <div class="carousel-item>...</div>
 *     <div class="carousel-item>...</div>
 *     <div class="carousel-item>...</div>
 *     <div class="carousel-item>...</div>
 *     <a class="carousel-control-prev">...</a>
 *     <a class="carousel-control-next">...</a>
 *   </div>
 * </div>
 *
 * Be careful, the container MUST NOT HAVE <carousel> and <slide> classes.
 */
define(
    ['postal', 'jquery', 'bootstrap'],
    function dependencies(postal, $) {

    function Carousel($container, state) {
        this.$container = $container;
        this.interval   = this.$container.data('interval') || 3000;
    }

    Carousel.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            this.$container.addClass('tkt-carousel');

            $(document).ready(this.init_carousel.bind(this));

            // Subscribe on actions sent by other components.
            // For now, the YoutubeVideo component sends "pause"
            // and "cycle" options.
            postal.subscribe({
                channel: "carousel-" + this.$container.attr('id'),
                topic: "action",
                callback: (data, envelope) => {
                    this.$container.carousel(data.action);
                }
            });
        },

        init_carousel: function() {
            // add required classes on the carousel
            this.$container
                .addClass('carousel')
                .addClass('slide');

            // create the carousel
            this.$container.carousel({
                interval: this.interval,

                // If we let the default "hover" value for this option, the carousel
                // will stop on mouseenter but will resume on mouseleave, with
                // default options (interval, ...). After the resume, the carousel
                // will not fire slid[e] events anymore :(
                // see https://github.com/twbs/bootstrap/issues/3462
                pause: false
            });

            // Since we disabled the <pause> behaivio, we have to handle
            // it by ourselves.
            this.$container.on('mouseenter', function() {
                $(this).carousel('pause');
            });

            // when we click on prev or next arrows while the carousel is paused,
            // it resumes it with default options. We bypass this behavior by
            // stopping by handling the slide by ourselves and by
            // stopping the event progation.
            $('.carousel-control-prev').on('click', (e) => {
                e.preventDefault();
                this.$container.carousel({
                    interval: 2000,
                    pause: false
                });
                this.$container.carousel('prev');

                return false;
            });
            $('.carousel-control-next').on('click', (e) => {
                e.preventDefault();
                this.$container.carousel({
                    interval: 2000,
                    pause: false
                });
                this.$container.carousel('next');

                return false;
            });

            this.fix_carousel_height();
            $(window).on('resize', (e) => {
                this.fix_carousel_height();
            });
            this.$container.on('slid.bs.carousel', this.emit_slide.bind(this));
        },

        emit_slide: function(e) {
            postal.publish({
                channel: "carousel-" + this.$container.attr('id'),
                topic: "slide",
                data: { e }
            });
        },

        fix_carousel_height: function() {
            // Set 16/9 format
            this.$container.height(this.$container.width() * 9 / 16);
        },

        detach: function() {

        }
    };

    return Carousel;
});
