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
        /* keep in sync with Image::PASS_PHOTO_WIDTH from eshop */
        this.max_width = this.$container.data('width') || '300';
        this.$data_url_input = null;
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {

        $('.choose-btn', this.$parent).click(e => {
            //empties the input field
            var $input_file = $('#photo', this.$parent);
            $input_file.wrap('<form>').closest('form').get(0).reset();
            $input_file.unwrap();

            //remove image preview
            $('.preview .image-preview', this.$parent.parent()).attr('src', null);
            this.$container.trigger('click');
        });

        if ($('#photo_data_url', this.$parent).length === 0) {
            this.$data_url_input = $('<input type="text" name="photo_data_url" id="photo_data_url" style="opacity: 0; height: 0;" />');
            this.$container.before(this.$data_url_input);
        } else {
            this.$data_url_input = $('#photo_data_url', this.$parent).eq(0);
        }

        this.$data_url_input.addClass('opaque_field field');

        const preview_img = $('img.image-preview', this.$parent.parent());

        this.$container.fileinput_to_dataurl({
            max_width: this.max_width,
            data_url_input: this.$data_url_input,
            reset_on_submit: false,
            preview_img
        });
    }
}
