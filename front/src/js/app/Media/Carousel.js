/**
 * Generate a bootstrap 4 carousel
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Media/Carousel"
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
 */
define(
    ['postal', 'jquery', 'bootstrap'],
    function dependencies(postal, $) {

    function Carousel($container, state) {
        this.$container = $container;
    }

    Carousel.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            $(document).ready((e) => {
                this.$container.addClass('carousel');
                this.$container.carousel({
                    //interval: 0
                });

                /*this.$container.on('slide.bs.carousel', (e) => {
                    postal.publish({
                        channel: "carousel-" + this.$container.attr('id'),
                        topic: "slide",
                        data: { e }
                    });
                    });*/
            });

            postal.subscribe({
                channel: "carousel-" + this.$container.attr('id'),
                topic: "action",
                callback: (data, envelope) => {
                    console.log('received ' + data.action + ' instruction');
                    this.$container.carousel(data.action);
                }
            });
        },

        detach: function() {

        }
    };

    return Carousel;
});
