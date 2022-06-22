import { Component } from '../Core';
import { FileInputToDataUrl } from '../Ext';

/**
 * Convert a file input into image url data
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Form/ImageDataUrl"
 * >
 */
export default class ImageDataUrl extends Component {
    constructor($container, state) {
        super($container, state);
        this.$parent = $container.parent();
        this.max_width = this.$container.data('width') || '300';
    }

    attach() {
        this.init();
    }

    init() {

        $('.choose-btn', this.$parent).click(e => { 
            this.$container.trigger('click'); 
        });
        $('#photo_data_url', this.$parent).addClass('opaque_field');

        const preview_img = $('img.image-preview', this.$parent.parent());

        this.$container.fileinput_to_dataurl({
            max_width: this.max_width,
            data_url_input: 'photo_data_url',
            reset_on_submit: false,
            preview_img
        });
    }
}
