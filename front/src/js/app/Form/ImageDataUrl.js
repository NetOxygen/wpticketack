/**
 * Transform an image uploaded with a file input to a data url
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Form/ImageDataUrl"
 *    <!-- Optional -->
 *    data-max-width="200"
 * >
 */
define([
        'exif', 'filetodataurl'
    ], function dependencies(
        EXIF, filetodataurl) {

    function ImageDataUrl($container, state) {
        this.$container = $container;
        this.max_width  = this.$container.data('max-width') || 200;
    }

    ImageDataUrl.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            this.$container.fileinput_to_dataurl({
                max_width: this.max_width,
                data_url_input: 'photo_data_url',
                /*callback: function() {
                    $('.img-responsive').attr('src', $('#photo_data_url').val());
                }*/
            });
            $('#photo_data_url').addClass('opaque_field');
        },

        detach: function() {

        }
    };

    return ImageDataUrl;
});
