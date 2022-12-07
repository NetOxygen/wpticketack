import { EXIF } from 'exif-js';

const FileInputToDataUrl = ($) => {
    var settings = {};
    var $parent;

    $.fn.fileinput_to_dataurl = function(options) {
        if (typeof EXIF !== 'function') {
            //exif-js is required in order to fix orientation on iOS
            throw new Error('EXIF (exif-js) is not defined.');
        }

        settings = $.extend({
            max_width: 100,
            data_url_input: null,
            reset_on_submit: true,
            callback: null,
            preview_img: null
        }, options);

        var $file_input = this;
        var $form = $file_input.closest('form');

        $parent = $(this).parent();

        if ($('#'+settings.data_url_input, $parent).length === 0) {
            $file_input.before('<input type="text" name="'+settings.data_url_input+'" id="'+settings.data_url_input+'" style="opacity: 0; height: 0;" />');
        }

        $form.on('submit', function(e) {
            //e.preventDefault();
            if (settings.reset_on_submit)
                $file_input.val('');
            //this.submit();
        });

        process($file_input);
    };

    function process($file_input) {
        if (window.File && window.FileReader && window.FormData) {
            $file_input.on('change', function(e) {
                var file = e.target.files[0];

                if (file && /^image\//i.test(file.type)) {
                    read_photo(file);
                }
            });
        }
    };

    function read_photo(photo)
    {
        var reader = new FileReader();

        reader.onloadend = function () {
            process_photo(reader.result, photo);
        }

        reader.readAsDataURL(photo);
    };

    function process_photo(data_url, photo)
    {
        var max_width = settings.max_width;
        var image = new Image();

        image.src = data_url;

        image.onload = function () {
            var width = image.width;
            var height = image.height;
            var should_resize = width > max_width;

            if (!should_resize) {
                $('#'+settings.data_url_input, $parent).val(data_url);
                if (settings.preview_img)
                    settings.preview_img.attr('src', data_url);

                if (typeof settings.callback === 'function') {
                    (settings.callback)();
                }

                return;
            }

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var new_width, new_height;

            if (width > height) {
                new_height = height * (max_width / width);
                new_width = max_width;
            } else {
                var max_height = image.height * max_width / image.width;
                new_width = width * (max_height / height);
                new_height = max_height;
            }

            // Try to fix orientation in iOS
            EXIF.getData(photo, function() {
                var orientation = EXIF.getTag(this, 'Orientation');
                if (orientation && [6, 8].indexOf(orientation) > -1) {
                    canvas.width = new_height;
                    canvas.height = new_width;

                    switch (orientation) {
                        case 6: context.transform(0, 1, -1, 0, new_height, 0); break;
                        case 8: context.transform(0, -1, 1, 0, 0, new_width); break;
                    }
                } else if (orientation && orientation == 3) {
                    canvas.width = new_width;
                    canvas.height = new_height;
                    context.transform(-1, 0, 0, -1, new_width, new_height);
                } else {
                    canvas.width = new_width;
                    canvas.height = new_height;
                }

                context.drawImage(image, 0, 0, new_width, new_height);
                data_url = canvas.toDataURL("image/jpeg");

                $('#'+settings.data_url_input, $parent).val(data_url);
                if (settings.preview_img)
                    settings.preview_img.attr('src', data_url);

                if (typeof settings.callback === 'function') {
                    (settings.callback)();
                }
            });
        }
    }
}

FileInputToDataUrl(jQuery);

export default FileInputToDataUrl;
