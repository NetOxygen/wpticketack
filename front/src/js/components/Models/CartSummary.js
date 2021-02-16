import BaseModel from './Base';
import _ from 'lodash';
import moment from 'moment';

/**
 * CartSummary model
 */
export default class CartSummary extends BaseModel {
    static type = 'cart_Summary';

    static SCREENING_TYPE = 'screening';
    static ARTICLE_TYPE   = 'article';
    static WALLET_TYPE    = 'wallet';
    static SHIPPING_TYPE  = 'shipping';
}

