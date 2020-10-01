import _ from 'lodash';
import { Api as TKTApi } from '../Ticketack';

/**
 * Template manager
 */
class Template {
    /**
     * Render a template by its id
     * @param {String} template_id - The template id
     * @param {Object} data - The data to transmit to the template
     * @return {String}
     */
    render(template_id, data) {
        const $tpl = $('#' + template_id);
        if (!$tpl.length)
            return null;

        data.TKTApi = TKTApi;

        return _.template($tpl.html())(data);
    };
}

const templateSingleton = new Template();
export default templateSingleton;
