/**
 * Play a Youtube video inside an iframe.
 * It loads and uses the Youtube Iframe API
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Media/YoutubeVideo"
 *    data-video-id="[VIDEO ID]"
 *
 *    <!-- Optional -->
 *    data-video-image="[IMAGE URL]"
 *    data-bs4-carousel-id="[CAROUSEL ID]"
 *    data-autoplay="1|0"                   <!-- default: 0 -->
 *    data-controls="1|0"                   <!-- default: 0 -->
 *    data-showinfo="1|0"                   <!-- default: 0 -->
 * >
 *
 * If the video is embedded in a Bootstrap 4 carousel, set the
 * data-bs4-carousel-id to pause the carousel while the video is played
 * and to stop the video if the user slides while paying it.
 */
define(
    ['postal', 'jquery', 'bootstrap'],
    function dependencies(postal, $) {

    function YoutubeVideo($container, state) {
        this.$container = $container;
        this.player     = null;

        this.video_id    = this.$container.data('video-id');
        this.video_image = this.$container.data('video-image');
        this.carousel_id = this.$container.data('bs4-carousel-id');

        this.autoplay    = this.$container.data('autoplay') || "0";
        this.controls    = this.$container.data('controls') || "0";
        this.showinfo    = this.$container.data('showinfo') || "0";
    }

    YoutubeVideo.prototype = {
        attach: function() {
            this.init();
        },

        init: function() {
            this.$container.addClass('yt-video-container');
            this.$video_container = $('<div></div>')
                .attr('id', 'yt-video-' + this.video_id + '-' + new Date().getTime())
                .appendTo(this.$container);

            if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
                // Set Youtube callback
                window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this),
                // Load API script
                $.getScript('//www.youtube.com/iframe_api');
            } else {
                this.loadPlayer();
            }

            if (this.carousel_id) {
                // Subscribe on the caousel slide events to stop the video when needed.
                postal.subscribe({
                    channel: "carousel-" + this.carousel_id,
                    topic: "slide",
                    callback: (data, envelope) => {
                        console.log('Video received slide instruction');
                        this.player.stopVideo();
                    }
                });
            }
        },

        onYouTubeIframeAPIReady: function() {
            this.loadPlayer();
        },

        onStateChange: function(e) {
            // Inform the BS4 carousel of video state changes, so as to
            // pause or resume the slide when needed.
            if (this.carousel_id) {
                switch (e.data) {
                    case YT.PlayerState.BUFFERING:
                    case YT.PlayerState.PLAYING:
                        postal.publish({
                            channel: "carousel-" + this.carousel_id,
                            topic: "action",
                            data: { action: 'pause' }
                        });
                        break;
                    case YT.PlayerState.ENDED:
                        postal.publish({
                            channel: "carousel-" + this.carousel_id,
                            topic: "action",
                            data: { action: 'cycle' }
                        });
                        break;
                }
            }
        },

        loadPlayer: function() {
            this.player = new YT.Player(this.$video_container.attr('id'), {
                videoId: this.video_id,
                width: this.$container.width(),

                // see https://stackoverflow.com/a/47724503
                host: 'https://www.youtube.com',

                events: {
                    onStateChange: this.onStateChange.bind(this)
                },
                // For a list of all parameters, see:
                // https://developers.google.com/youtube/player_parameters
                playerVars: {
                    autoplay: this.autoplay,
                    controls: this.controls,
                    showinfo: this.showinfo,
                    modestbranding: 1,
                    rel: 0,
                }
            });

            if (this.video_image) {
                const $frame = $('iframe', this.$container);
                $frame.hide();

                this.$video_image = $('<img />')
                    .attr('src', this.video_image)
                    .addClass('yt-video-image')
                    .appendTo(this.$container);

                this.$play_btn = $('<div></div>')
                    .addClass('yt-video-play-image')
                    .appendTo(this.$container);

                this.$play_btn.click((e) => {
                    this.player.playVideo();
                    this.$video_image.addClass('hidden');
                    this.$play_btn.addClass('hidden');
                    $frame.show();
                });
            }
        },

        detach: function() {

        }
    };

    return YoutubeVideo;
});
