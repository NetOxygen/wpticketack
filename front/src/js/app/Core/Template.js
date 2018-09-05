// Template manager
define(['lodash'], function dependencies(_) {

    function Template() {}

    Template.prototype.render = function(template_id, data) {
        const $tpl = $('#' + template_id);
        if (!$tpl.length)
            return null;

        return _.template($tpl.html())(data);
    };

    return new Template();
});
