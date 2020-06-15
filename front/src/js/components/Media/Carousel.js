import { Component } from '../Core';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import postal from 'postal';

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
 *    data-format="1.7777778"   <!-- 16/9 -->
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
export default class Carousel extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.interval   = this.$container.data('interval') || 3000;
        this.format     = parseFloat(this.$container.data('format')) || (16/9);
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
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
    }

    init_carousel() {
        this.convert_bootstrap_markup_to_glide();

        this.glide = new Glide('.glide', { autoplay: true }).mount({ Controls, Breakpoints });

        this.fix_carousel_height();
        $(window).on('resize', (e) => {
            this.fix_carousel_height();
        });

        this.glide.on('move.after', this.emit_slide.bind(this));
    }

    convert_bootstrap_markup_to_glide() {
        if (!$('.carousel-inner', this.$container).length)
            return;

        console.warn('Using deprecated bootstrap markup for carousel. Please upgrade your template file.');

        // add required classes on the carousel
        this.$container.addClass('glide');

        // remove boootstrap controls
        $('.carousel-control-prev, .carousel-control-next', this.$container).remove();

        // convert div slides to ul/li
        const track = $('.carousel-inner', this.$container)
            .removeClass('carousel-inner')
            .addClass('glide__track')
            .attr('data-glide-el', 'track');
        const ul = $('<ul class="glide__slides"/>').appendTo($(track));
        $('.carousel-item', this.$container).each((i, item) => {
            const glide_slide_li = $(`<li class="glide__slide">${$(item).html()}</li>`).appendTo(ul);
            $(item).remove();
        });

        $('<div class="glide__arrows" data-glide-el="controls"> <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><</button> <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button></div>').appendTo(this.$container);
    }

    emit_slide(e) {
        postal.publish({
            channel: "carousel-" + this.$container.attr('id'),
            topic: "slide",
            data: { e }
        });
    }

    fix_carousel_height() {
        // Set 16/9 format
        this.$container.height(this.$container.width() * 1 / this.format);
    }
}
