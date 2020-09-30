import BaseModel from './Base';
import Pricing from './Pricing';

/**
 * Tickettype model
 */
export default class Tickettype extends BaseModel {
    static type = 'tickettype';

    /**
     * @constructor
     * @param {Object} tickettype like returned from the engine
     */
    constructor(tickettype) {
        super(tickettype);

        if (this.pricings) {
            Object.keys(this.pricings).map((pricingId) => {
                this.pricings[pricingId]= new Pricing(this.pricings[pricingId]);
                this.pricings[pricingId].key = pricingId;
            });
        }
    }

    getMatchingPricings(roles, tickettype) {
        const allowedPricings = [];
        Object.keys(this.pricings).map(pricingId => {
            const pricing = this.pricings[pricingId];
            if (pricing.rulesMatch(roles, tickettype))
                allowedPricings.push(pricing);
        })

        return allowedPricings;
    }
}
