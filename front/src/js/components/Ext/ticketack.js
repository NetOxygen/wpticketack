/**
 * Ticketack integration class
 *
 * This class can manage all the Ticketack public API calls:
 *     - Compute URLs to view user cart, user pass (bookings), show screening
 *       page and buy pass page on the Ticketack eshop
 *     - Load the user cart
 *     - Add a screening to the user cart
 *     - Remove a screening from the user cart
 *     - Check a screening bookability
 *     - Login with a ticket
 *     - Book a screening with a ticket
 *     - Cancel a booking on a ticket
 *     - List the available passes
 *     - Update e-mail information in ticket
 *     - Register, login and logout user
 *     - Get current user profile
 *
 * @version 5.4.0 - 2021-05-02
 *
 * @copyright NetOxygen 2015-2021
 *
 * @param {String} eshopUrl: The Ticketack instance base URL
 * @param {String} apiKey: The API key
 * @param {String} lang: The language
 */
var Ticketack = function(eshopUrl, apiKey, lang) {

    this.session_id            = localStorage.getItem('tkt_session_id') != undefined ? localStorage.getItem('tkt_session_id') : "";
    this.eshopUrl              = eshopUrl;
    this.apiKey                = apiKey;
    this.userApiKey            = localStorage.getItem('tkt_api_key') != undefined ? localStorage.getItem('tkt_api_key') : null;
    this.lang                  = lang ? lang : '';

    this.cartViewUrl           = this.eshopUrl + "cart/view/";
    this.checkoutUrl           = this.eshopUrl + "cart/validate/";
    this.ticketViewUrl         = this.eshopUrl + "ticket/view/";
    this.passesViewUrl         = this.eshopUrl + "pass/new/";
    this.screeningViewUrl      = this.eshopUrl + "screening/buy/";
    this.screeningMapUrl       = this.eshopUrl + "screening/map/";

    this.cartJsonUrl           = this.eshopUrl + "cart/view_json";
    this.cartRemoveUrl         = this.eshopUrl + "cart/remove";
    this.cartResetUrl          = this.eshopUrl + "cart/reset";
    this.cartAddUrl            = this.eshopUrl + "screening/buy/";
    this.cartAddArticlesUrl    = this.eshopUrl + "articles/add_to_cart";
    this.cartUsePromoCodeUrl   = this.eshopUrl + "carts/use_promo_code";
    this.cartUseWalletUrl      = this.eshopUrl + "carts/add_wallet_operation";
    this.cartSetPendingUrl     = this.eshopUrl + "carts/pending/id/";
    this.cartSetOpenUrl        = this.eshopUrl + "carts/open/id/";
    this.cartGetNewUrl         = this.eshopUrl + "carts/new/";
    this.cartUserDataUrl       = this.eshopUrl + "carts/user_data/";
    this.payUrl                = this.eshopUrl + "carts/pay/id/";
    this.confirmUrl            = this.eshopUrl + "carts/confirm/id/";
    this.screeningUrl          = this.eshopUrl + "screening/info_json/";
    this.articlesUrl           = this.eshopUrl + "articles/list";
    this.bookUrl               = this.eshopUrl + "screening/book_on_ticket/";
    this.unbookUrl             = this.eshopUrl + "ticket/cancel_booking_json/";
    this.checkUrl              = this.eshopUrl + "screening/bookability/";
    this.registrationUrl       = this.eshopUrl + "users/register/";
    this.profileUrl            = this.eshopUrl + "users/profile/";
    this.loginUrl              = this.eshopUrl + "users/login/";
    this.logoutUrl             = this.eshopUrl + "users/logout/";
    this.loginTicketUrl        = this.eshopUrl + "ticket/view_json/";
    this.logoutTicketUrl       = this.eshopUrl + "ticket/disable_book_mode_json/";
    this.updateTicketEmailUrl  = this.eshopUrl + "tickets/contact_email/";
    this.passesUrl             = this.eshopUrl + "pass/tickettypes_json/";
};

/**
 *
 * Set the current session ID
 *
 * @param {String} session_id
 */
Ticketack.prototype.set_session_id = function(session_id) {
    localStorage.setItem('tkt_session_id', session_id);
    this.session_id = session_id;
}

/**
 *
 * Set the current user API key
 *
 * @param {String} apikey
 */
Ticketack.prototype.set_user_api_key = function(apikey) {
    localStorage.setItem('tkt_api_key', apikey);
    this.userApiKey = apikey;
}

/**
 *
 * Remove the current user API key
 */
Ticketack.prototype.unset_user_api_key = function(apikey) {
    localStorage.removeItem('tkt_api_key');
    this.userApiKey = null;
}

/**
 * User cart url getter
 */
Ticketack.prototype.getCartViewUrl   = function() {
    var url = this.parametrize_url(this.cartViewUrl, {});
    return url;
}

/**
 * Checkout page url getter
 */
Ticketack.prototype.getCheckoutUrl   = function() {
    var url = this.parametrize_url(this.checkoutUrl, {});
    return url;
}

/**
 * User ticket url getter
 */
Ticketack.prototype.getTicketViewUrl = function() {
    var url = this.parametrize_url(this.ticketViewUrl, {});
    return url;
}

/**
 * Buy pass url getter (optional tickettype_id and pricing_id to select specific pass)
 */
Ticketack.prototype.getPassesViewUrl = function(tickettype_id, pricing_id) {
    var params = {};
    if (tickettype_id) {
        params.tickettype = tickettype_id;
        if (pricing_id) {
            params.pricing = pricing_id;
        }
    }
    var url = this.parametrize_url(this.passesViewUrl, params);
    return url;
}

/**
 * Buy screening url getter
 */
Ticketack.prototype.getScreeningViewUrl = function(screening_ref) {
    var url = this.parametrize_url(this.screeningViewUrl + screening_ref, {});
    return url;
}

Ticketack.prototype.getScreeningMapUrl = function(screening_id) {
    var url = this.parametrize_url(this.screeningMapUrl + screening_id, {});
    return url;
}

/**
 * Fetch cart data from Eshop
 *
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.loadCart = function(callback) {
    var that = this;
    var url = this.parametrize_url(this.cartJsonUrl, {}, true);

    return this.get(url, {}, function (err, status, rsp) {
        if (err)
            return callback && callback(err, status, rsp);

        return callback && callback(null, status, rsp);
    });
};

/**
 * Fetch the informations about a screening
 *
 * @param {Array} screening_refs: Array with screening_refs
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.getScreeningsInfo = function(screening_refs, callback) {
    var url = this.parametrize_url(this.screeningUrl, { "ids": screening_refs.join(",") }, true);
    return this.get(url, {}, callback);
}


/**
 * Add a screening to cart
 *
 * @param {UUID|Number} screening_id: The screening ID
 * @param {Object} pricing: An object containing pricing properties. Ex: {"reduced": 1, "fullprice": 2}
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.addToCart = function(screening_id, pricing, callback) {
    var data = {
        "id":        screening_id,
        "pricing":   pricing || {}
    };
    return this.post(this.cartAddUrl + screening_id, data, callback);
};

/**
 * Add a pass to cart
 *
 * @param {String} pass: The pass type
 * @param {String} pricing: The pricing key
 * @param {Object} userdata: The user data
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.addPassToCart = function(pass, pricing, userdata, callback) {
    const headers = {};
    headers['X-API-Key']    = this.apiKey;
    headers['Content-type'] = undefined;

    userdata.pass = pass + ':' + pricing;
    let data = {
        "user": userdata,
        "format": "json"
    };

    return this.post(this.passesViewUrl, data, callback);
};

/**
 * Add articles to cart
 *
 * @param {Array} articles: An array of articles with the following properties:
 *                          - _id: the article _id
 *                          - variants: an arraay of {
 *                              "_id": the variant _id,
 *                              "quantity": the quantity,
 *                              "price": the variant price
 *                          }
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.addArticlesToCart = function(articles, callback) {
    var data = { "articles":  articles };
    return this.post_json(this.parametrize_url(this.cartAddArticlesUrl, {}), data, callback);
};

/**
 * Use a promo code
 *
 * @param {String} code: The promo code to use
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.usePromoCode = function(code, callback) {
    var data = { "code":  code };
    return this.post_json(this.parametrize_url(this.cartUsePromoCodeUrl, {}), data, callback);
};

/**
 * Use a ticket wallet
 *
 * @param {UUID} ticket_id: The ticket _id
 * @param {Number} amount: The amount to use
 * @param {Number} vat: The VAT to apply. Optional, default 0.
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.useWallet = function(ticket_id, amount, vat, callback) {
    var data = { ticket_id, amount, vat };
    return this.post_json(this.parametrize_url(this.cartUseWalletUrl, {}), data, callback);
};

/**
 * Fetch the informations about one or more articles
 *
 * @param {Array} articles_ids: Array with articles ids
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.getArticlesInfo = function(articles_ids, callback) {
    var url = this.parametrize_url(this.articlesUrl, { "article_ids": articles_ids.join(",") }, true);
    return this.get(url, {}, callback);
}

/**
 * Set the cart in PENDING mode
 *
 * @param {integer} cart_id: The cart id
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.setPending = function(cart_id, callback) {
    return this.put_json(this.parametrize_url(this.cartSetPendingUrl + cart_id, {}), {}, callback);
};

/**
 * Set the cart in OPEN mode
 *
 * @param {integer} cart_id: The cart id
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.setOpen = function(cart_id, callback) {
    return this.put_json(this.parametrize_url(this.cartSetOpenUrl + cart_id, {}), {}, callback);
};

/**
 * Get a new cart
 *
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.getNew = function(callback) {
    return this.get_json(this.parametrize_url(this.cartGetNewUrl, {}), {}, callback);
};

/**
 * Set a cart user data
 *
 * @param {Object} user_data: An object containing the user data
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.setUserData = function(cart_id, user_data, callback) {
    var data = {
        "user_data": user_data
    };
    return this.put_json(this.cartUserDataUrl + cart_id, data, callback);
};

/**
 * Pay the cart
 *
 * @param {integer} cart_id: The cart id
 * @param {string} payment_method: The payment method name
 * @param {Object} user_data: An object containing the user data
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.pay = function(cart_id, payment_method, user_data, callback) {
    var data = {
        "payment_method": payment_method,
        "user": user_data
    };
    return this.post_json(this.parametrize_url(this.payUrl + cart_id, {}), data, callback);
};

/**
 * Confirm a cart
 *
 * @param {integer} cart_id: The cart id
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.confirm = function(cart_id, callback) {
    return this.post_json(this.parametrize_url(this.confirmUrl + cart_id, {}), {}, callback);
};

/**
 * Remove screening from cart
 *
 * @param {Number} index: The screening index in cart
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.removeFromCart = function(index, callback) {
    var data = { "index": index };
    return this.post(this.parametrize_url(this.cartRemoveUrl, {}), data, callback);
}

/**
 * Reset a cart
 *
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.resetCart = function(callback) {
    return this.get(this.parametrize_url(this.cartResetUrl, {}), {}, callback);
}

/**
 * Screening bookability check
 *
 * Check if the user can book the screening
 *
 * @param {UUID|Number} screening_ref: The screening ID
 * @param {Function} callback: The callback function
 */
Ticketack.prototype.checkBookability = function(screening_ref, callback) {
    var url = this.parametrize_url(this.checkUrl + screening_ref, {}, true);
    return this.get(url, {}, callback);
};

/**
 * User registration
 *
 * Registers a user
 *
 * @param user_data: The user data
 * @param callback
 */
Ticketack.prototype.register = function(user_data, callback) {
    var data = ('user' in user_data) ? user_data : { 'user': user_data };
    return this.post_json(this.registrationUrl, data, callback);
};

/**
 * Get current user profile
 *
 * @param callback
 */
Ticketack.prototype.getProfile = function(callback) {
    var url = this.parametrize_url(this.profileUrl, {}, true);
    return this.get(url, {}, (err, status, rsp) => {
        if (err)
            this.unset_user_api_key();

        return callback && callback(err, status, rsp);
    });
};

/**
 * User authentication
 *
 * Authenticates the user
 *
 * @param username: The user username
 * @param password: The user password
 * @param callback
 */
Ticketack.prototype.loginUser = function(username, password, callback) {
    var data = { username, password };

    return this.post_json(this.loginUrl, data, callback);
};

/**
 * User logout
 *
 * @param callback
 */
Ticketack.prototype.logoutUser = function(callback) {
    return this.post_json(this.logoutUrl, {}, (err, status, rsp) => {
        this.unset_user_api_key();
        return callback && callback(err, status, rsp);
    });
};

/**
 * Ticket authentication
 *
 * Authenticates the user ticket
 *
 * @param number: The ticket number
 * @param key: The ticket key
 * @param callback
 */
Ticketack.prototype.loginTicket = function(number, key, callback) {
    var data    = {
        "ticket_number": number,
        "ticket_key":    key
    };

    return this.post(this.loginTicketUrl, data, callback);
};

/**
 * Ticket logout
 *
 * Logs out the user ticket
 *
 * @param callback
 */
Ticketack.prototype.logoutTicket = function(callback) {
    var url = this.parametrize_url(this.logoutTicketUrl, {}, true);
    return this.get(url, {}, callback);
};

/**
 * Ticket view
 *
 * retrieve the current(connected) ticket informations
 *
 * @param callback
 */
Ticketack.prototype.viewTicket = function(callback) {
    return this.post(this.loginTicketUrl, {}, callback);
};

/**
 * Update user's e-mail address
 *
 * retrieve the current(connected) ticket informations
 *
 * @param callback
 */
Ticketack.prototype.updateTicketEmail = function(email, callback) {
    var url = this.parametrize_url(this.updateTicketEmailUrl, {}, true);
    return this.patch_json(url, { "email": email }, callback);
}

/**
 *
 * Book screening
 *
 * @param screening_id: The screening ID
 * @param callback
 */
Ticketack.prototype.book = function(screening_id, callback) {
    return this.post(this.bookUrl + screening_id, {}, callback);
};

/**
 *
 * Cancel a booking
 *
 * @param {UUID|Number} booking_id: The booking ID
 * @param {Function} callback
 */
Ticketack.prototype.unbook = function(booking_id, callback) {
    return this.post(this.unbookUrl + booking_id, {}, callback);
};

/**
 *
 * List the available passes
 *
 * @param {Function} callback
 */
Ticketack.prototype.getPasses = function(callback) {
    var url = this.parametrize_url(this.passesUrl, {}, true);
    return this.get(url, {}, callback);
};

/**
 * Make an HTTP GET request
 *
 * @param {String} url
 * @param {Object} data
 * @param {Function} callback
 */
Ticketack.prototype.get = function(url, data, callback) {
    return this.request('GET', url, data, {}, callback);
};

/**
 * Make an HTTP POST request
 *
 * @param {String} url
 * @param {Object} data
 * @param {Function} callback
 */
Ticketack.prototype.post = function(url, data, callback) {
    data        = data || {};
    data.format = "json"
    data.lang   = this.lang;
    if (this.session_id)
        data.PHPSESSID = this.session_id;
    return this.request('POST', url, data, {}, callback);
};

/**
 * Make a JSON POST request
 *
 * @param {String} url
 * @param {Object} data
 * @param {Function} callback
 */
Ticketack.prototype.post_json = function(url, data, callback) {
    data        = data || {};
    data.format = "json"
    data.lang   = this.lang;
    if (this.session_id)
        data.PHPSESSID = this.session_id;
    return this.request('POST', url, data, {'Content-type': 'application/json'}, callback);
};

/**
 * Make an HTTP PUT request
 *
 * @param {String} url
 * @param {Object} data
 * @param {Function} callback
 */
Ticketack.prototype.put = function(url, data, callback) {
    return this.request('PUT', url, data, {}, callback);
};

/**
 * Make a JSON PUT request
 *
 * @param {String} url
 * @param {Object} data
 * @param {Function} callback
 */
Ticketack.prototype.put = function(url, data, callback) {
    return this.request('PUT', url, data, {'Content-type': 'application/json'}, callback);
};

/**
 * Make an HTTP PATCH request
 *
 * @param {String} url
 * @param {Object} data
 * @param {Function} callback
 */
Ticketack.prototype.patch = function(url, data, callback) {
    return this.request('PATCH', url, data, {}, callback);
};

/**
 * Make a JSON PATCH request
 *
 * @param {String} url
 * @param {Object} data
 * @param {Function} callback
 */
Ticketack.prototype.patch_json = function(url, data, callback) {
    return this.request('PATCH', url, data, {'Content-type': 'application/json'}, callback);
};

Ticketack.prototype.parametrize_url = function(url, params, json = false) {
    var query = [];

    query.push("lang=" + this.lang);

    if (json)
        query.push("format=json");

    if (this.session_id)
        query.push("PHPSESSID=" + this.session_id);

    for (var i in params) {
        query.push(i + '=' + params[i]);
    }

    return url + '?' + query.join('&');
}

/**
 *
 * Make an HTTP request
 *
 * @param {Function} callback
 */
Ticketack.prototype.request = function(method, url, data, headers, callback) {
    headers = headers || {};
    headers['X-API-Key'] = this.apiKey;
    if (this.userApiKey != null)
        headers['X-API-Key'] = this.userApiKey;

    if (headers['Content-type'] && headers['Content-type'] == 'application/json')
        data = JSON.stringify(data);

    return $.ajax(url, {
        type: method,
        data: data,
        headers: headers,
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done((data, textStatus, jqXHR) => {
        if (!('responseJSON' in jqXHR))
            jqXHR.responseJSON = jqXHR.responseText ? JSON.parse(jqXHR.responseText) : {};

        const rsp = jqXHR.responseJSON;
        if (rsp && 'session_id' in rsp) {
            this.set_session_id(rsp.session_id);
        }
        if (rsp && 'user' in rsp && 'apikey' in rsp.user) {
            this.set_user_api_key(rsp.user.apikey);
        }

        return callback(null, jqXHR.status, jqXHR.responseJSON);
    }).fail((jqXHR) => {
        var rsp = jqXHR.responseText.length ? JSON.parse(jqXHR.responseText) : null;
        return callback(new Error(), jqXHR.status, rsp);
    });
};
/*
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], function ($) {
            return (root.Ticketack = factory($));
        });
    } else {
        // Browser globals
        root.Ticketack = factory(root.jQuery);
    }
}(typeof self !== 'undefined' ? self : this, function ($) {
    return Ticketack;
}));
*/
export default Ticketack;
