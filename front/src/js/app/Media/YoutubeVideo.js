/**
 * Play a Youtube video inside an iframe.
 * It loads and uses the Youtube Iframe API
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Media/YoutubeVideo"
 *    data-video-id="[VIDEO_ID]"
 *
 *    <!-- Optional -->
 *    data-carousel-id="[CAROUSEL ID]"
 * >
 */
define(
    ['postal', 'jquery', 'bootstrap'],
    function dependencies(postal, $) {

    function YoutubeVideo($container, state) {
        this.$container = $container;
        this.player     = null;

        this.video_id    = this.$container.data('video-id');
        this.video_image = this.$container.data('video-image');
        this.carousel_id = this.$container.data('carousel-id');
    }

    YoutubeVideo.prototype = {
        attach: function() {
            this.init();

            this.$video_container = $('<div></div>')
                .attr('id', 'yt-video-' + this.video_id + '-' + new Date().getTime())
                .appendTo(this.$container);
        },

        init: function() {
            this.$container.addClass('yt-video-container');

            if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
                // Set Youtube callback
                window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this),
                // Load API script
                $.getScript('//www.youtube.com/iframe_api');
            } else {
                this.loadPlayer();
            }

            if (this.carousel_id) {
                postal.subscribe({
                    channel: "carousel-" + this.carousel_id,
                    topic: "slide",
                    callback: (data, envelope) => {
                        console.log('received slide instruction');
                    }
                });
            }
        },

        onYouTubeIframeAPIReady: function() {
            this.loadPlayer();
        },

        onStateChange: function(e) {
            if (this.$carousel) {
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
                        this.$carousel.carousel('cycle');
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
                //height: this.$container.height(),
                events: {
                    onStateChange: this.onStateChange.bind(this)
                },
                // For a list of all parameters, see:
                // https://developers.google.com/youtube/player_parameters
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0
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
