/**
 * Convert number inputs to components with a plus and
 * a minus button.
 *
 * Usage:
 *
 * <div
 *    <!-- Required -->
 *    data-component="Ui/PlusMinus"
 *
 *    <!-- Optional -->
 * >
 */
define(
    ['postal', 'jquery', 'lodash', 'bootstrap', 'template'],
    function dependencies(postal, $, _, Template) {

    function PlusMinus($container, state) {
        this.$container = $container;
    }

    PlusMinus.prototype = {
        attach: function() {
            setTimeout((e) => {
                this.init();
            }, 4000);
        },

        init: function() {
            this.$inputs = $('.plus-minus-input', this.$container);
            _.map(this.$inputs, (i) => {
                this.build_ui(i);
            });
        },

        build_ui: function(input) {
            const $parent = $(input).parent();
            const $wrapper = $('<div/>')
                .addClass('input-group');
            const $minus_btn = $('<span/>')
                .addClass('.input-group-btn')
                .text('-');
            const $plus_btn = $('<span/>')
                .addClass('.input-group-btn')
                .text('-');
            $wrapper
                .append($minus_btn)
                .append(input)
                .append($plus_btn)
                .appendTo($parent);
        },
        /*this.$dates_form.html(Template.render('tkt-booking-form-dates-tpl', {
                screenings: this.data.screenings,
                }));*/

        detach: function() {

        }
    };

    return PlusMinus;
});
