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
        this.load_preview();
    }

    load_preview() {
        const readURL = input => {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = e => {
                    if($('.image-preview', this.$parent))
                        $('.image-preview', this.$parent).remove();

                    $(input).parent().append('<img class="image-preview" src="' + e.target.result +'"></img>');
                }
                reader.readAsDataURL(input.files[0]);
            }
        };

        this.$container.change(() => {
          readURL(this.$container[0]);
        });
    }
}