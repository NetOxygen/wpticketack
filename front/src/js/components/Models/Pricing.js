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
        const now = moment();
        const currentRoles = Array.isArray(roles) ? roles : (roles ? [roles] : []);
        const currentTickettypes = Array.isArray(tickettypes) ? tickettypes : (tickettypes ? [tickettypes] : []);

        if (('only_for_roles' in this.rules) && this.rules.only_for_roles.length > 0) {
            const allowedForRole = currentRoles.some((r) => this.rules.only_for_roles.includes(r));
            if (!allowedForRole)
                return false;
        }

        if (('only_for_tickettypes' in this.rules) && this.rules.only_for_tickettypes.length > 0) {
            const allowedForTickettype = currentTickettypes.some((t) => this.rules.only_for_tickettypes.includes(t));
            if (!allowedForTickettype)
                return false;
        }

        if (('exclude_tickettypes' in this.rules) && this.rules.exclude_tickettypes.length > 0) {
            const hasExcludedTickettype = currentTickettypes.some((t) => this.rules.exclude_tickettypes.includes(t));
            if (hasExcludedTickettype)
                return false;
        }

        if ('not_before' in this.rules && moment.isMoment(this.rules.not_before) && this.rules.not_before.isValid()) {
            if (now.isBefore(this.rules.not_before))
                return false;
        }

        if ('not_after' in this.rules && moment.isMoment(this.rules.not_after) && this.rules.not_after.isValid()) {
            if (now.isAfter(this.rules.not_after))
                return false;
        }

        return true;
    }
}
