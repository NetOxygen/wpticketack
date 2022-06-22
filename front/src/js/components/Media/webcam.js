import { Component } from '../Core';
/**
 * Take picture component
 *
 * Used on the Wordpress site to allow the user to take pictures from the webcam.
 */
export default class Webcam extends Component {
    /**
     * @constructor
     */
    constructor($container, state) {
        super($container, state);

        this.video          = null;
        this.canvas         = null;
        this.showWebcam     = false;
        /* keep in sync with Image::PASS_PHOTO_WIDTH from eshop */
        this.width = this.$container.data('width') || '300';
    }

    attach() {
        super.attach();
        this.init();
    }

    init() {
        this.defaultView();

        $('.start_video', this.$container).click((e) => {
            this.showWebcam =  true;
            $('.start_video', this.$container).hide();
            $('.stop_video',  this.$container).show();
            $('.contentarea', this.$container).show();
            this.toggleWebcam();
        });

        $('.stop_video', this.$container).click((e) => {
            $('.start_video',   this.$container).show();
            $('.stop_video',    this.$container).hide();
            $('.contentarea',   this.$container).hide();
        });

        $('.takePicture', this.$container).click((e) => {
            this.takePicture();
            this.defaultView();
        });

        $('#photo', this.$container).click((e) => {
            this.defaultView();
        });
    }

    defaultView() {
        $('.stop_video',  this.$container).hide();
        $('.contentarea', this.$container).hide();
        $('.start_video', this.$container).show();
    }

    toggleWebcam() {
        if (this.showWebcam)
            this.initCamera();
    };

    initCamera() {
        this.video  = $('#video')[0];
        this.canvas = $('#canvas')[0];

        this.startup(this.video, this.canvas, /*streaming*/false);
    };

    takePicture() {
        var dataUrl = this.takepictureimg(this.canvas);

        window.dispatchEvent(new CustomEvent('webcam-captured', {
            bubbles: true,
            detail: { dataUrl: dataUrl }
        }));
        if($('#photo_data_url', this.$container)) {
            $('#photo_data_url', this.$container).val(dataUrl);
        }
        if($('.image-preview', this.$container))
            $('.image-preview', this.$container).attr('src', dataUrl);

        this.toggleWebcam();
    };

    /**
     * Take picture
     *
     **/

    startup(video, canvas, streaming) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.error("An error occurred: " + err);
            });

        video.addEventListener('canplay', ev => {
            if (streaming)
                return;

            this.height = video.videoHeight / (video.videoWidth/this.width);
            if (isNaN(this.height)) {
                this.height = this.width / (4/3);
            }
            video.setAttribute('width', this.width);
            video.setAttribute('height', this.height);
            video.setAttribute('autoplay', '');
            video.setAttribute('playsinline', '');
            canvas.setAttribute('width',this.width);
            canvas.setAttribute('height', this.height);
            streaming = true;
        }, false);

        this.clearphoto(canvas);
    };

    clearphoto(canvas) {
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var data = canvas.toDataURL('image/png');
        return data;
    };


    takepictureimg(canvas) {
        var context = canvas.getContext('2d');
        if (this.width && this.height) {
            canvas.width = this.width;
            canvas.height = this.height;
            context.drawImage(video, 0, 0, this.width, this.height);

            var data = canvas.toDataURL('image/jpeg');
        } else {
            this.clearphoto(canvas);
        }
        return data;
    };
}
