import BaseModel from './Base';
import moment from 'moment';

/**
 * Pricing model
 */
export default class Pricing extends BaseModel {
    static type = 'pricing';

    /**
     * @constructor
     * @param {Object} pricing like returned from the engine
     */
    constructor(pricing) {
        super(pricing);

        if (this.rules) {
              if ('not_before' in this.rules)
                this.rules.not_before = moment(this.rules.not_before);
              if ('not_after' in this.rules)
                this.rules.not_after = moment(this.rules.not_after);
        } else {
            this.rules = {};
        }
    }

    rulesMatch(roles, tickettypes) {
        if (('only_for_roles' in this.rules) && this.rules.only_for_roles.length > 0) {
            if (!roles.filter(r => this.only_for_roles.includes(r)).length === 0)
                return false;
        }

        if (('only_for_tickettypes' in this.rules) && this.rules.only_for_tickettypes.length > 0) {
            if (!tickettypes)
                return false;
            if (!this.rules.only_for_tickettypes.filter(t => tickettypes.includes(t)))
                return false;
        }

        if (('exclude_tickettypes' in this.rules) && this.rules.exclude_tickettypes.length > 0) {
            if (this.rules.exclude_tickettypes.filter(t => tickettypes.includes(t)))
                return false;
        }

        // TODO: implement not_before and not_after rules

        return true;
    }
}
