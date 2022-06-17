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
    }

    attach() {
        this.init();
    }

    init() {
        this.$container.fileinput_to_dataurl({
            max_width: this.max_width,
            data_url_input: 'photo_data_url',
            reset_on_submit: false
        });
        $('#photo_data_url').addClass('opaque_field');
    }
}
