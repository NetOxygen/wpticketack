import BaseModel from './Base';
import Article from './Article';

/**
 * Article variant model
 */
export default class ArticleVariant extends BaseModel {
    static type = 'article_variant';

    /**
     * Check if this variant handles stock
     * @return {Boolean}
     */
    handlesStock() {
        return this.stock_type !== Article.STOCK_TYPE_NONE;
    }

    /**
     * Check if this variant has a stock for a specific salepoint
     * @param {String} salepoint_id - The salepoint id
     * @return {Boolean}
     */
    hasStockForSalepoint(salepoint_id) {
        if (!this.handlesStock())
            return true;

        return (
            salepoint_id in this.stocks_by_salepoint &&
            (this.stocks_by_salepoint[salepoint_id] - this.stock_factor >= 0)
        );
    }

    /**
     * Get this variant stock for a specific salepoint
     * @param {String} salepoint_id - The salepoint id
     * @return {Integer}
     */
    getStockForSalepoint(salepoint_id) {
        if (!this.handlesStock())
            return 0;

        return this.stocks_by_salepoint[salepoint_id] / this.stock_factor;
    }
}
