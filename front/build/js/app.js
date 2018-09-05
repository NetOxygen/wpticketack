!function (e, a) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = a() : 'function' == typeof define && define.amd ? define('moment', [], a) : e.moment = a();
}(this, function () {
    'use strict';
    var e, n;
    function l() {
        return e.apply(null, arguments);
    }
    function _(e) {
        return e instanceof Array || '[object Array]' === Object.prototype.toString.call(e);
    }
    function i(e) {
        return null != e && '[object Object]' === Object.prototype.toString.call(e);
    }
    function o(e) {
        return void 0 === e;
    }
    function m(e) {
        return 'number' == typeof e || '[object Number]' === Object.prototype.toString.call(e);
    }
    function u(e) {
        return e instanceof Date || '[object Date]' === Object.prototype.toString.call(e);
    }
    function M(e, a) {
        var t, s = [];
        for (t = 0; t < e.length; ++t)
            s.push(a(e[t], t));
        return s;
    }
    function h(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
    }
    function L(e, a) {
        for (var t in a)
            h(a, t) && (e[t] = a[t]);
        return h(a, 'toString') && (e.toString = a.toString), h(a, 'valueOf') && (e.valueOf = a.valueOf), e;
    }
    function c(e, a, t, s) {
        return va(e, a, t, s, !0).utc();
    }
    function Y(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf;
    }
    function y(e) {
        if (null == e._isValid) {
            var a = Y(e), t = n.call(a.parsedDateParts, function (e) {
                    return null != e;
                }), s = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);
            if (e._strict && (s = s && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e))
                return s;
            e._isValid = s;
        }
        return e._isValid;
    }
    function f(e) {
        var a = c(NaN);
        return null != e ? L(Y(a), e) : Y(a).userInvalidated = !0, a;
    }
    n = Array.prototype.some ? Array.prototype.some : function (e) {
        for (var a = Object(this), t = a.length >>> 0, s = 0; s < t; s++)
            if (s in a && e.call(this, a[s], s, a))
                return !0;
        return !1;
    };
    var d = l.momentProperties = [];
    function k(e, a) {
        var t, s, n;
        if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), o(a._i) || (e._i = a._i), o(a._f) || (e._f = a._f), o(a._l) || (e._l = a._l), o(a._strict) || (e._strict = a._strict), o(a._tzm) || (e._tzm = a._tzm), o(a._isUTC) || (e._isUTC = a._isUTC), o(a._offset) || (e._offset = a._offset), o(a._pf) || (e._pf = Y(a)), o(a._locale) || (e._locale = a._locale), 0 < d.length)
            for (t = 0; t < d.length; t++)
                o(n = a[s = d[t]]) || (e[s] = n);
        return e;
    }
    var a = !1;
    function p(e) {
        k(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === a && (a = !0, l.updateOffset(this), a = !1);
    }
    function D(e) {
        return e instanceof p || null != e && null != e._isAMomentObject;
    }
    function T(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function g(e) {
        var a = +e, t = 0;
        return 0 !== a && isFinite(a) && (t = T(a)), t;
    }
    function r(e, a, t) {
        var s, n = Math.min(e.length, a.length), d = Math.abs(e.length - a.length), r = 0;
        for (s = 0; s < n; s++)
            (t && e[s] !== a[s] || !t && g(e[s]) !== g(a[s])) && r++;
        return r + d;
    }
    function w(e) {
        !1 === l.suppressDeprecationWarnings && 'undefined' != typeof console && console.warn && console.warn('Deprecation warning: ' + e);
    }
    function t(n, d) {
        var r = !0;
        return L(function () {
            if (null != l.deprecationHandler && l.deprecationHandler(null, n), r) {
                for (var e, a = [], t = 0; t < arguments.length; t++) {
                    if (e = '', 'object' == typeof arguments[t]) {
                        for (var s in e += '\n[' + t + '] ', arguments[0])
                            e += s + ': ' + arguments[0][s] + ', ';
                        e = e.slice(0, -2);
                    } else
                        e = arguments[t];
                    a.push(e);
                }
                w(n + '\nArguments: ' + Array.prototype.slice.call(a).join('') + '\n' + new Error().stack), r = !1;
            }
            return d.apply(this, arguments);
        }, d);
    }
    var s, v = {};
    function S(e, a) {
        null != l.deprecationHandler && l.deprecationHandler(e, a), v[e] || (w(a), v[e] = !0);
    }
    function H(e) {
        return e instanceof Function || '[object Function]' === Object.prototype.toString.call(e);
    }
    function b(e, a) {
        var t, s = L({}, e);
        for (t in a)
            h(a, t) && (i(e[t]) && i(a[t]) ? (s[t] = {}, L(s[t], e[t]), L(s[t], a[t])) : null != a[t] ? s[t] = a[t] : delete s[t]);
        for (t in e)
            h(e, t) && !h(a, t) && i(e[t]) && (s[t] = L({}, s[t]));
        return s;
    }
    function j(e) {
        null != e && this.set(e);
    }
    l.suppressDeprecationWarnings = !1, l.deprecationHandler = null, s = Object.keys ? Object.keys : function (e) {
        var a, t = [];
        for (a in e)
            h(e, a) && t.push(a);
        return t;
    };
    var x = {};
    function P(e, a) {
        var t = e.toLowerCase();
        x[t] = x[t + 's'] = x[a] = e;
    }
    function O(e) {
        return 'string' == typeof e ? x[e] || x[e.toLowerCase()] : void 0;
    }
    function W(e) {
        var a, t, s = {};
        for (t in e)
            h(e, t) && (a = O(t)) && (s[a] = e[t]);
        return s;
    }
    var E = {};
    function A(e, a) {
        E[e] = a;
    }
    function F(e, a, t) {
        var s = '' + Math.abs(e), n = a - s.length;
        return (0 <= e ? t ? '+' : '' : '-') + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
    }
    var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, J = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, N = {}, R = {};
    function I(e, a, t, s) {
        var n = s;
        'string' == typeof s && (n = function () {
            return this[s]();
        }), e && (R[e] = n), a && (R[a[0]] = function () {
            return F(n.apply(this, arguments), a[1], a[2]);
        }), t && (R[t] = function () {
            return this.localeData().ordinal(n.apply(this, arguments), e);
        });
    }
    function C(e, a) {
        return e.isValid() ? (a = G(a, e.localeData()), N[a] = N[a] || function (s) {
            var e, n, a, d = s.match(z);
            for (e = 0, n = d.length; e < n; e++)
                R[d[e]] ? d[e] = R[d[e]] : d[e] = (a = d[e]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, '') : a.replace(/\\/g, '');
            return function (e) {
                var a, t = '';
                for (a = 0; a < n; a++)
                    t += H(d[a]) ? d[a].call(e, s) : d[a];
                return t;
            };
        }(a), N[a](e)) : e.localeData().invalidDate();
    }
    function G(e, a) {
        var t = 5;
        function s(e) {
            return a.longDateFormat(e) || e;
        }
        for (J.lastIndex = 0; 0 <= t && J.test(e);)
            e = e.replace(J, s), J.lastIndex = 0, t -= 1;
        return e;
    }
    var U = /\d/, V = /\d\d/, K = /\d{3}/, $ = /\d{4}/, Z = /[+-]?\d{6}/, B = /\d\d?/, q = /\d\d\d\d?/, Q = /\d\d\d\d\d\d?/, X = /\d{1,3}/, ee = /\d{1,4}/, ae = /[+-]?\d{1,6}/, te = /\d+/, se = /[+-]?\d+/, ne = /Z|[+-]\d\d:?\d\d/gi, de = /Z|[+-]\d\d(?::?\d\d)?/gi, re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _e = {};
    function ie(e, t, s) {
        _e[e] = H(t) ? t : function (e, a) {
            return e && s ? s : t;
        };
    }
    function oe(e, a) {
        return h(_e, e) ? _e[e](a._strict, a._locale) : new RegExp(me(e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, a, t, s, n) {
            return a || t || s || n;
        })));
    }
    function me(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var ue = {};
    function le(e, t) {
        var a, s = t;
        for ('string' == typeof e && (e = [e]), m(t) && (s = function (e, a) {
                a[t] = g(e);
            }), a = 0; a < e.length; a++)
            ue[e[a]] = s;
    }
    function Me(e, n) {
        le(e, function (e, a, t, s) {
            t._w = t._w || {}, n(e, t._w, t, s);
        });
    }
    var he = 0, Le = 1, ce = 2, Ye = 3, ye = 4, fe = 5, ke = 6, pe = 7, De = 8;
    function Te(e) {
        return ge(e) ? 366 : 365;
    }
    function ge(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    }
    I('Y', 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? '' + e : '+' + e;
    }), I(0, [
        'YY',
        2
    ], 0, function () {
        return this.year() % 100;
    }), I(0, [
        'YYYY',
        4
    ], 0, 'year'), I(0, [
        'YYYYY',
        5
    ], 0, 'year'), I(0, [
        'YYYYYY',
        6,
        !0
    ], 0, 'year'), P('year', 'y'), A('year', 1), ie('Y', se), ie('YY', B, V), ie('YYYY', ee, $), ie('YYYYY', ae, Z), ie('YYYYYY', ae, Z), le([
        'YYYYY',
        'YYYYYY'
    ], he), le('YYYY', function (e, a) {
        a[he] = 2 === e.length ? l.parseTwoDigitYear(e) : g(e);
    }), le('YY', function (e, a) {
        a[he] = l.parseTwoDigitYear(e);
    }), le('Y', function (e, a) {
        a[he] = parseInt(e, 10);
    }), l.parseTwoDigitYear = function (e) {
        return g(e) + (68 < g(e) ? 1900 : 2000);
    };
    var we, ve = Se('FullYear', !0);
    function Se(a, t) {
        return function (e) {
            return null != e ? (be(this, a, e), l.updateOffset(this, t), this) : He(this, a);
        };
    }
    function He(e, a) {
        return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + a]() : NaN;
    }
    function be(e, a, t) {
        e.isValid() && !isNaN(t) && ('FullYear' === a && ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d['set' + (e._isUTC ? 'UTC' : '') + a](t, e.month(), je(t, e.month())) : e._d['set' + (e._isUTC ? 'UTC' : '') + a](t));
    }
    function je(e, a) {
        if (isNaN(e) || isNaN(a))
            return NaN;
        var t, s = (a % (t = 12) + t) % t;
        return e += (a - s) / 12, 1 === s ? ge(e) ? 29 : 28 : 31 - s % 7 % 2;
    }
    we = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
        var a;
        for (a = 0; a < this.length; ++a)
            if (this[a] === e)
                return a;
        return -1;
    }, I('M', [
        'MM',
        2
    ], 'Mo', function () {
        return this.month() + 1;
    }), I('MMM', 0, 0, function (e) {
        return this.localeData().monthsShort(this, e);
    }), I('MMMM', 0, 0, function (e) {
        return this.localeData().months(this, e);
    }), P('month', 'M'), A('month', 8), ie('M', B), ie('MM', B, V), ie('MMM', function (e, a) {
        return a.monthsShortRegex(e);
    }), ie('MMMM', function (e, a) {
        return a.monthsRegex(e);
    }), le([
        'M',
        'MM'
    ], function (e, a) {
        a[Le] = g(e) - 1;
    }), le([
        'MMM',
        'MMMM'
    ], function (e, a, t, s) {
        var n = t._locale.monthsParse(e, s, t._strict);
        null != n ? a[Le] = n : Y(t).invalidMonth = e;
    });
    var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Pe = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    var Oe = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function We(e, a) {
        var t;
        if (!e.isValid())
            return e;
        if ('string' == typeof a)
            if (/^\d+$/.test(a))
                a = g(a);
            else if (!m(a = e.localeData().monthsParse(a)))
                return e;
        return t = Math.min(e.date(), je(e.year(), a)), e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](a, t), e;
    }
    function Ee(e) {
        return null != e ? (We(this, e), l.updateOffset(this, !0), this) : He(this, 'Month');
    }
    var Ae = re;
    var Fe = re;
    function ze() {
        function e(e, a) {
            return a.length - e.length;
        }
        var a, t, s = [], n = [], d = [];
        for (a = 0; a < 12; a++)
            t = c([
                2000,
                a
            ]), s.push(this.monthsShort(t, '')), n.push(this.months(t, '')), d.push(this.months(t, '')), d.push(this.monthsShort(t, ''));
        for (s.sort(e), n.sort(e), d.sort(e), a = 0; a < 12; a++)
            s[a] = me(s[a]), n[a] = me(n[a]);
        for (a = 0; a < 24; a++)
            d[a] = me(d[a]);
        this._monthsRegex = new RegExp('^(' + d.join('|') + ')', 'i'), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp('^(' + n.join('|') + ')', 'i'), this._monthsShortStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i');
    }
    function Je(e) {
        var a = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && 0 <= e && isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e), a;
    }
    function Ne(e, a, t) {
        var s = 7 + a - t;
        return -((7 + Je(e, 0, s).getUTCDay() - a) % 7) + s - 1;
    }
    function Re(e, a, t, s, n) {
        var d, r, _ = 1 + 7 * (a - 1) + (7 + t - s) % 7 + Ne(e, s, n);
        return _ <= 0 ? r = Te(d = e - 1) + _ : _ > Te(e) ? (d = e + 1, r = _ - Te(e)) : (d = e, r = _), {
            year: d,
            dayOfYear: r
        };
    }
    function Ie(e, a, t) {
        var s, n, d = Ne(e.year(), a, t), r = Math.floor((e.dayOfYear() - d - 1) / 7) + 1;
        return r < 1 ? s = r + Ce(n = e.year() - 1, a, t) : r > Ce(e.year(), a, t) ? (s = r - Ce(e.year(), a, t), n = e.year() + 1) : (n = e.year(), s = r), {
            week: s,
            year: n
        };
    }
    function Ce(e, a, t) {
        var s = Ne(e, a, t), n = Ne(e + 1, a, t);
        return (Te(e) - s + n) / 7;
    }
    I('w', [
        'ww',
        2
    ], 'wo', 'week'), I('W', [
        'WW',
        2
    ], 'Wo', 'isoWeek'), P('week', 'w'), P('isoWeek', 'W'), A('week', 5), A('isoWeek', 5), ie('w', B), ie('ww', B, V), ie('W', B), ie('WW', B, V), Me([
        'w',
        'ww',
        'W',
        'WW'
    ], function (e, a, t, s) {
        a[s.substr(0, 1)] = g(e);
    });
    I('d', 0, 'do', 'day'), I('dd', 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e);
    }), I('ddd', 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e);
    }), I('dddd', 0, 0, function (e) {
        return this.localeData().weekdays(this, e);
    }), I('e', 0, 0, 'weekday'), I('E', 0, 0, 'isoWeekday'), P('day', 'd'), P('weekday', 'e'), P('isoWeekday', 'E'), A('day', 11), A('weekday', 11), A('isoWeekday', 11), ie('d', B), ie('e', B), ie('E', B), ie('dd', function (e, a) {
        return a.weekdaysMinRegex(e);
    }), ie('ddd', function (e, a) {
        return a.weekdaysShortRegex(e);
    }), ie('dddd', function (e, a) {
        return a.weekdaysRegex(e);
    }), Me([
        'dd',
        'ddd',
        'dddd'
    ], function (e, a, t, s) {
        var n = t._locale.weekdaysParse(e, s, t._strict);
        null != n ? a.d = n : Y(t).invalidWeekday = e;
    }), Me([
        'd',
        'e',
        'E'
    ], function (e, a, t, s) {
        a[s] = g(e);
    });
    var Ge = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    var Ue = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    var Ve = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    var Ke = re;
    var $e = re;
    var Ze = re;
    function Be() {
        function e(e, a) {
            return a.length - e.length;
        }
        var a, t, s, n, d, r = [], _ = [], i = [], o = [];
        for (a = 0; a < 7; a++)
            t = c([
                2000,
                1
            ]).day(a), s = this.weekdaysMin(t, ''), n = this.weekdaysShort(t, ''), d = this.weekdays(t, ''), r.push(s), _.push(n), i.push(d), o.push(s), o.push(n), o.push(d);
        for (r.sort(e), _.sort(e), i.sort(e), o.sort(e), a = 0; a < 7; a++)
            _[a] = me(_[a]), i[a] = me(i[a]), o[a] = me(o[a]);
        this._weekdaysRegex = new RegExp('^(' + o.join('|') + ')', 'i'), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i'), this._weekdaysShortStrictRegex = new RegExp('^(' + _.join('|') + ')', 'i'), this._weekdaysMinStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i');
    }
    function qe() {
        return this.hours() % 12 || 12;
    }
    function Qe(e, a) {
        I(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), a);
        });
    }
    function Xe(e, a) {
        return a._meridiemParse;
    }
    I('H', [
        'HH',
        2
    ], 0, 'hour'), I('h', [
        'hh',
        2
    ], 0, qe), I('k', [
        'kk',
        2
    ], 0, function () {
        return this.hours() || 24;
    }), I('hmm', 0, 0, function () {
        return '' + qe.apply(this) + F(this.minutes(), 2);
    }), I('hmmss', 0, 0, function () {
        return '' + qe.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2);
    }), I('Hmm', 0, 0, function () {
        return '' + this.hours() + F(this.minutes(), 2);
    }), I('Hmmss', 0, 0, function () {
        return '' + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2);
    }), Qe('a', !0), Qe('A', !1), P('hour', 'h'), A('hour', 13), ie('a', Xe), ie('A', Xe), ie('H', B), ie('h', B), ie('k', B), ie('HH', B, V), ie('hh', B, V), ie('kk', B, V), ie('hmm', q), ie('hmmss', Q), ie('Hmm', q), ie('Hmmss', Q), le([
        'H',
        'HH'
    ], Ye), le([
        'k',
        'kk'
    ], function (e, a, t) {
        var s = g(e);
        a[Ye] = 24 === s ? 0 : s;
    }), le([
        'a',
        'A'
    ], function (e, a, t) {
        t._isPm = t._locale.isPM(e), t._meridiem = e;
    }), le([
        'h',
        'hh'
    ], function (e, a, t) {
        a[Ye] = g(e), Y(t).bigHour = !0;
    }), le('hmm', function (e, a, t) {
        var s = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s)), Y(t).bigHour = !0;
    }), le('hmmss', function (e, a, t) {
        var s = e.length - 4, n = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n)), Y(t).bigHour = !0;
    }), le('Hmm', function (e, a, t) {
        var s = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s));
    }), le('Hmmss', function (e, a, t) {
        var s = e.length - 4, n = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n));
    });
    var ea, aa = Se('Hours', !0), ta = {
            calendar: {
                sameDay: '[Today at] LT',
                nextDay: '[Tomorrow at] LT',
                nextWeek: 'dddd [at] LT',
                lastDay: '[Yesterday at] LT',
                lastWeek: '[Last] dddd [at] LT',
                sameElse: 'L'
            },
            longDateFormat: {
                LTS: 'h:mm:ss A',
                LT: 'h:mm A',
                L: 'MM/DD/YYYY',
                LL: 'MMMM D, YYYY',
                LLL: 'MMMM D, YYYY h:mm A',
                LLLL: 'dddd, MMMM D, YYYY h:mm A'
            },
            invalidDate: 'Invalid date',
            ordinal: '%d',
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: 'in %s',
                past: '%s ago',
                s: 'a few seconds',
                ss: '%d seconds',
                m: 'a minute',
                mm: '%d minutes',
                h: 'an hour',
                hh: '%d hours',
                d: 'a day',
                dd: '%d days',
                M: 'a month',
                MM: '%d months',
                y: 'a year',
                yy: '%d years'
            },
            months: Pe,
            monthsShort: Oe,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: Ge,
            weekdaysMin: Ve,
            weekdaysShort: Ue,
            meridiemParse: /[ap]\.?m?\.?/i
        }, sa = {}, na = {};
    function da(e) {
        return e ? e.toLowerCase().replace('_', '-') : e;
    }
    function ra(e) {
        var a = null;
        if (!sa[e] && 'undefined' != typeof module && module && module.exports)
            try {
                a = ea._abbr, require('./locale/' + e), _a(a);
            } catch (e) {
            }
        return sa[e];
    }
    function _a(e, a) {
        var t;
        return e && ((t = o(a) ? oa(e) : ia(e, a)) ? ea = t : 'undefined' != typeof console && console.warn && console.warn('Locale ' + e + ' not found. Did you forget to load it?')), ea._abbr;
    }
    function ia(e, a) {
        if (null !== a) {
            var t, s = ta;
            if (a.abbr = e, null != sa[e])
                S('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'), s = sa[e]._config;
            else if (null != a.parentLocale)
                if (null != sa[a.parentLocale])
                    s = sa[a.parentLocale]._config;
                else {
                    if (null == (t = ra(a.parentLocale)))
                        return na[a.parentLocale] || (na[a.parentLocale] = []), na[a.parentLocale].push({
                            name: e,
                            config: a
                        }), null;
                    s = t._config;
                }
            return sa[e] = new j(b(s, a)), na[e] && na[e].forEach(function (e) {
                ia(e.name, e.config);
            }), _a(e), sa[e];
        }
        return delete sa[e], null;
    }
    function oa(e) {
        var a;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            return ea;
        if (!_(e)) {
            if (a = ra(e))
                return a;
            e = [e];
        }
        return function (e) {
            for (var a, t, s, n, d = 0; d < e.length;) {
                for (a = (n = da(e[d]).split('-')).length, t = (t = da(e[d + 1])) ? t.split('-') : null; 0 < a;) {
                    if (s = ra(n.slice(0, a).join('-')))
                        return s;
                    if (t && t.length >= a && r(n, t, !0) >= a - 1)
                        break;
                    a--;
                }
                d++;
            }
            return ea;
        }(e);
    }
    function ma(e) {
        var a, t = e._a;
        return t && -2 === Y(e).overflow && (a = t[Le] < 0 || 11 < t[Le] ? Le : t[ce] < 1 || t[ce] > je(t[he], t[Le]) ? ce : t[Ye] < 0 || 24 < t[Ye] || 24 === t[Ye] && (0 !== t[ye] || 0 !== t[fe] || 0 !== t[ke]) ? Ye : t[ye] < 0 || 59 < t[ye] ? ye : t[fe] < 0 || 59 < t[fe] ? fe : t[ke] < 0 || 999 < t[ke] ? ke : -1, Y(e)._overflowDayOfYear && (a < he || ce < a) && (a = ce), Y(e)._overflowWeeks && -1 === a && (a = pe), Y(e)._overflowWeekday && -1 === a && (a = De), Y(e).overflow = a), e;
    }
    function ua(e, a, t) {
        return null != e ? e : null != a ? a : t;
    }
    function la(e) {
        var a, t, s, n, d, r = [];
        if (!e._d) {
            var _, i;
            for (_ = e, i = new Date(l.now()), s = _._useUTC ? [
                    i.getUTCFullYear(),
                    i.getUTCMonth(),
                    i.getUTCDate()
                ] : [
                    i.getFullYear(),
                    i.getMonth(),
                    i.getDate()
                ], e._w && null == e._a[ce] && null == e._a[Le] && function (e) {
                    var a, t, s, n, d, r, _, i;
                    if (null != (a = e._w).GG || null != a.W || null != a.E)
                        d = 1, r = 4, t = ua(a.GG, e._a[he], Ie(Sa(), 1, 4).year), s = ua(a.W, 1), ((n = ua(a.E, 1)) < 1 || 7 < n) && (i = !0);
                    else {
                        d = e._locale._week.dow, r = e._locale._week.doy;
                        var o = Ie(Sa(), d, r);
                        t = ua(a.gg, e._a[he], o.year), s = ua(a.w, o.week), null != a.d ? ((n = a.d) < 0 || 6 < n) && (i = !0) : null != a.e ? (n = a.e + d, (a.e < 0 || 6 < a.e) && (i = !0)) : n = d;
                    }
                    s < 1 || s > Ce(t, d, r) ? Y(e)._overflowWeeks = !0 : null != i ? Y(e)._overflowWeekday = !0 : (_ = Re(t, s, n, d, r), e._a[he] = _.year, e._dayOfYear = _.dayOfYear);
                }(e), null != e._dayOfYear && (d = ua(e._a[he], s[he]), (e._dayOfYear > Te(d) || 0 === e._dayOfYear) && (Y(e)._overflowDayOfYear = !0), t = Je(d, 0, e._dayOfYear), e._a[Le] = t.getUTCMonth(), e._a[ce] = t.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a)
                e._a[a] = r[a] = s[a];
            for (; a < 7; a++)
                e._a[a] = r[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
            24 === e._a[Ye] && 0 === e._a[ye] && 0 === e._a[fe] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Je : function (e, a, t, s, n, d, r) {
                var _ = new Date(e, a, t, s, n, d, r);
                return e < 100 && 0 <= e && isFinite(_.getFullYear()) && _.setFullYear(e), _;
            }).apply(null, r), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== n && (Y(e).weekdayMismatch = !0);
        }
    }
    var Ma = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ha = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, La = /Z|[+-]\d\d(?::?\d\d)?/, ca = [
            [
                'YYYYYY-MM-DD',
                /[+-]\d{6}-\d\d-\d\d/
            ],
            [
                'YYYY-MM-DD',
                /\d{4}-\d\d-\d\d/
            ],
            [
                'GGGG-[W]WW-E',
                /\d{4}-W\d\d-\d/
            ],
            [
                'GGGG-[W]WW',
                /\d{4}-W\d\d/,
                !1
            ],
            [
                'YYYY-DDD',
                /\d{4}-\d{3}/
            ],
            [
                'YYYY-MM',
                /\d{4}-\d\d/,
                !1
            ],
            [
                'YYYYYYMMDD',
                /[+-]\d{10}/
            ],
            [
                'YYYYMMDD',
                /\d{8}/
            ],
            [
                'GGGG[W]WWE',
                /\d{4}W\d{3}/
            ],
            [
                'GGGG[W]WW',
                /\d{4}W\d{2}/,
                !1
            ],
            [
                'YYYYDDD',
                /\d{7}/
            ]
        ], Ya = [
            [
                'HH:mm:ss.SSSS',
                /\d\d:\d\d:\d\d\.\d+/
            ],
            [
                'HH:mm:ss,SSSS',
                /\d\d:\d\d:\d\d,\d+/
            ],
            [
                'HH:mm:ss',
                /\d\d:\d\d:\d\d/
            ],
            [
                'HH:mm',
                /\d\d:\d\d/
            ],
            [
                'HHmmss.SSSS',
                /\d\d\d\d\d\d\.\d+/
            ],
            [
                'HHmmss,SSSS',
                /\d\d\d\d\d\d,\d+/
            ],
            [
                'HHmmss',
                /\d\d\d\d\d\d/
            ],
            [
                'HHmm',
                /\d\d\d\d/
            ],
            [
                'HH',
                /\d\d/
            ]
        ], ya = /^\/?Date\((\-?\d+)/i;
    function fa(e) {
        var a, t, s, n, d, r, _ = e._i, i = Ma.exec(_) || ha.exec(_);
        if (i) {
            for (Y(e).iso = !0, a = 0, t = ca.length; a < t; a++)
                if (ca[a][1].exec(i[1])) {
                    n = ca[a][0], s = !1 !== ca[a][2];
                    break;
                }
            if (null == n)
                return void (e._isValid = !1);
            if (i[3]) {
                for (a = 0, t = Ya.length; a < t; a++)
                    if (Ya[a][1].exec(i[3])) {
                        d = (i[2] || ' ') + Ya[a][0];
                        break;
                    }
                if (null == d)
                    return void (e._isValid = !1);
            }
            if (!s && null != d)
                return void (e._isValid = !1);
            if (i[4]) {
                if (!La.exec(i[4]))
                    return void (e._isValid = !1);
                r = 'Z';
            }
            e._f = n + (d || '') + (r || ''), ga(e);
        } else
            e._isValid = !1;
    }
    var ka = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function pa(e, a, t, s, n, d) {
        var r = [
            function (e) {
                var a = parseInt(e, 10);
                {
                    if (a <= 49)
                        return 2000 + a;
                    if (a <= 999)
                        return 1900 + a;
                }
                return a;
            }(e),
            Oe.indexOf(a),
            parseInt(t, 10),
            parseInt(s, 10),
            parseInt(n, 10)
        ];
        return d && r.push(parseInt(d, 10)), r;
    }
    var Da = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function Ta(e) {
        var a, t, s, n = ka.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''));
        if (n) {
            var d = pa(n[4], n[3], n[2], n[5], n[6], n[7]);
            if (a = n[1], t = d, s = e, a && Ue.indexOf(a) !== new Date(t[0], t[1], t[2]).getDay() && (Y(s).weekdayMismatch = !0, !(s._isValid = !1)))
                return;
            e._a = d, e._tzm = function (e, a, t) {
                if (e)
                    return Da[e];
                if (a)
                    return 0;
                var s = parseInt(t, 10), n = s % 100;
                return (s - n) / 100 * 60 + n;
            }(n[8], n[9], n[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Y(e).rfc2822 = !0;
        } else
            e._isValid = !1;
    }
    function ga(e) {
        if (e._f !== l.ISO_8601)
            if (e._f !== l.RFC_2822) {
                e._a = [], Y(e).empty = !0;
                var a, t, s, n, d, r, _, i, o = '' + e._i, m = o.length, u = 0;
                for (s = G(e._f, e._locale).match(z) || [], a = 0; a < s.length; a++)
                    n = s[a], (t = (o.match(oe(n, e)) || [])[0]) && (0 < (d = o.substr(0, o.indexOf(t))).length && Y(e).unusedInput.push(d), o = o.slice(o.indexOf(t) + t.length), u += t.length), R[n] ? (t ? Y(e).empty = !1 : Y(e).unusedTokens.push(n), r = n, i = e, null != (_ = t) && h(ue, r) && ue[r](_, i._a, i, r)) : e._strict && !t && Y(e).unusedTokens.push(n);
                Y(e).charsLeftOver = m - u, 0 < o.length && Y(e).unusedInput.push(o), e._a[Ye] <= 12 && !0 === Y(e).bigHour && 0 < e._a[Ye] && (Y(e).bigHour = void 0), Y(e).parsedDateParts = e._a.slice(0), Y(e).meridiem = e._meridiem, e._a[Ye] = function (e, a, t) {
                    var s;
                    if (null == t)
                        return a;
                    return null != e.meridiemHour ? e.meridiemHour(a, t) : (null != e.isPM && ((s = e.isPM(t)) && a < 12 && (a += 12), s || 12 !== a || (a = 0)), a);
                }(e._locale, e._a[Ye], e._meridiem), la(e), ma(e);
            } else
                Ta(e);
        else
            fa(e);
    }
    function wa(e) {
        var a, t, s, n, d = e._i, r = e._f;
        return e._locale = e._locale || oa(e._l), null === d || void 0 === r && '' === d ? f({ nullInput: !0 }) : ('string' == typeof d && (e._i = d = e._locale.preparse(d)), D(d) ? new p(ma(d)) : (u(d) ? e._d = d : _(r) ? function (e) {
            var a, t, s, n, d;
            if (0 === e._f.length)
                return Y(e).invalidFormat = !0, e._d = new Date(NaN);
            for (n = 0; n < e._f.length; n++)
                d = 0, a = k({}, e), null != e._useUTC && (a._useUTC = e._useUTC), a._f = e._f[n], ga(a), y(a) && (d += Y(a).charsLeftOver, d += 10 * Y(a).unusedTokens.length, Y(a).score = d, (null == s || d < s) && (s = d, t = a));
            L(e, t || a);
        }(e) : r ? ga(e) : o(t = (a = e)._i) ? a._d = new Date(l.now()) : u(t) ? a._d = new Date(t.valueOf()) : 'string' == typeof t ? (s = a, null === (n = ya.exec(s._i)) ? (fa(s), !1 === s._isValid && (delete s._isValid, Ta(s), !1 === s._isValid && (delete s._isValid, l.createFromInputFallback(s)))) : s._d = new Date(+n[1])) : _(t) ? (a._a = M(t.slice(0), function (e) {
            return parseInt(e, 10);
        }), la(a)) : i(t) ? function (e) {
            if (!e._d) {
                var a = W(e._i);
                e._a = M([
                    a.year,
                    a.month,
                    a.day || a.date,
                    a.hour,
                    a.minute,
                    a.second,
                    a.millisecond
                ], function (e) {
                    return e && parseInt(e, 10);
                }), la(e);
            }
        }(a) : m(t) ? a._d = new Date(t) : l.createFromInputFallback(a), y(e) || (e._d = null), e));
    }
    function va(e, a, t, s, n) {
        var d, r = {};
        return !0 !== t && !1 !== t || (s = t, t = void 0), (i(e) && function (e) {
            if (Object.getOwnPropertyNames)
                return 0 === Object.getOwnPropertyNames(e).length;
            var a;
            for (a in e)
                if (e.hasOwnProperty(a))
                    return !1;
            return !0;
        }(e) || _(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = n, r._l = t, r._i = e, r._f = a, r._strict = s, (d = new p(ma(wa(r))))._nextDay && (d.add(1, 'd'), d._nextDay = void 0), d;
    }
    function Sa(e, a, t, s) {
        return va(e, a, t, s, !1);
    }
    l.createFromInputFallback = t('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (e) {
        e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
    }), l.ISO_8601 = function () {
    }, l.RFC_2822 = function () {
    };
    var Ha = t('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
            var e = Sa.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : f();
        }), ba = t('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
            var e = Sa.apply(null, arguments);
            return this.isValid() && e.isValid() ? this < e ? this : e : f();
        });
    function ja(e, a) {
        var t, s;
        if (1 === a.length && _(a[0]) && (a = a[0]), !a.length)
            return Sa();
        for (t = a[0], s = 1; s < a.length; ++s)
            a[s].isValid() && !a[s][e](t) || (t = a[s]);
        return t;
    }
    var xa = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond'
    ];
    function Pa(e) {
        var a = W(e), t = a.year || 0, s = a.quarter || 0, n = a.month || 0, d = a.week || 0, r = a.day || 0, _ = a.hour || 0, i = a.minute || 0, o = a.second || 0, m = a.millisecond || 0;
        this._isValid = function (e) {
            for (var a in e)
                if (-1 === we.call(xa, a) || null != e[a] && isNaN(e[a]))
                    return !1;
            for (var t = !1, s = 0; s < xa.length; ++s)
                if (e[xa[s]]) {
                    if (t)
                        return !1;
                    parseFloat(e[xa[s]]) !== g(e[xa[s]]) && (t = !0);
                }
            return !0;
        }(a), this._milliseconds = +m + 1000 * o + 60000 * i + 1000 * _ * 60 * 60, this._days = +r + 7 * d, this._months = +n + 3 * s + 12 * t, this._data = {}, this._locale = oa(), this._bubble();
    }
    function Oa(e) {
        return e instanceof Pa;
    }
    function Wa(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function Ea(e, t) {
        I(e, 0, 0, function () {
            var e = this.utcOffset(), a = '+';
            return e < 0 && (e = -e, a = '-'), a + F(~~(e / 60), 2) + t + F(~~e % 60, 2);
        });
    }
    Ea('Z', ':'), Ea('ZZ', ''), ie('Z', de), ie('ZZ', de), le([
        'Z',
        'ZZ'
    ], function (e, a, t) {
        t._useUTC = !0, t._tzm = Fa(de, e);
    });
    var Aa = /([\+\-]|\d\d)/gi;
    function Fa(e, a) {
        var t = (a || '').match(e);
        if (null === t)
            return null;
        var s = ((t[t.length - 1] || []) + '').match(Aa) || [
                '-',
                0,
                0
            ], n = 60 * s[1] + g(s[2]);
        return 0 === n ? 0 : '+' === s[0] ? n : -n;
    }
    function za(e, a) {
        var t, s;
        return a._isUTC ? (t = a.clone(), s = (D(e) || u(e) ? e.valueOf() : Sa(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + s), l.updateOffset(t, !1), t) : Sa(e).local();
    }
    function Ja(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
    }
    function Na() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset);
    }
    l.updateOffset = function () {
    };
    var Ra = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Ia = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Ca(e, a) {
        var t, s, n, d = e, r = null;
        return Oa(e) ? d = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : m(e) ? (d = {}, a ? d[a] = e : d.milliseconds = e) : (r = Ra.exec(e)) ? (t = '-' === r[1] ? -1 : 1, d = {
            y: 0,
            d: g(r[ce]) * t,
            h: g(r[Ye]) * t,
            m: g(r[ye]) * t,
            s: g(r[fe]) * t,
            ms: g(Wa(1000 * r[ke])) * t
        }) : (r = Ia.exec(e)) ? (t = '-' === r[1] ? -1 : (r[1], 1), d = {
            y: Ga(r[2], t),
            M: Ga(r[3], t),
            w: Ga(r[4], t),
            d: Ga(r[5], t),
            h: Ga(r[6], t),
            m: Ga(r[7], t),
            s: Ga(r[8], t)
        }) : null == d ? d = {} : 'object' == typeof d && ('from' in d || 'to' in d) && (n = function (e, a) {
            var t;
            if (!e.isValid() || !a.isValid())
                return {
                    milliseconds: 0,
                    months: 0
                };
            a = za(a, e), e.isBefore(a) ? t = Ua(e, a) : ((t = Ua(a, e)).milliseconds = -t.milliseconds, t.months = -t.months);
            return t;
        }(Sa(d.from), Sa(d.to)), (d = {}).ms = n.milliseconds, d.M = n.months), s = new Pa(d), Oa(e) && h(e, '_locale') && (s._locale = e._locale), s;
    }
    function Ga(e, a) {
        var t = e && parseFloat(e.replace(',', '.'));
        return (isNaN(t) ? 0 : t) * a;
    }
    function Ua(e, a) {
        var t = {
            milliseconds: 0,
            months: 0
        };
        return t.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(t.months, 'M').isAfter(a) && --t.months, t.milliseconds = +a - +e.clone().add(t.months, 'M'), t;
    }
    function Va(s, n) {
        return function (e, a) {
            var t;
            return null === a || isNaN(+a) || (S(n, 'moment().' + n + '(period, number) is deprecated. Please use moment().' + n + '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'), t = e, e = a, a = t), Ka(this, Ca(e = 'string' == typeof e ? +e : e, a), s), this;
        };
    }
    function Ka(e, a, t, s) {
        var n = a._milliseconds, d = Wa(a._days), r = Wa(a._months);
        e.isValid() && (s = null == s || s, r && We(e, He(e, 'Month') + r * t), d && be(e, 'Date', He(e, 'Date') + d * t), n && e._d.setTime(e._d.valueOf() + n * t), s && l.updateOffset(e, d || r));
    }
    Ca.fn = Pa.prototype, Ca.invalid = function () {
        return Ca(NaN);
    };
    var $a = Va(1, 'add'), Za = Va(-1, 'subtract');
    function Ba(e, a) {
        var t = 12 * (a.year() - e.year()) + (a.month() - e.month()), s = e.clone().add(t, 'months');
        return -(t + (a - s < 0 ? (a - s) / (s - e.clone().add(t - 1, 'months')) : (a - s) / (e.clone().add(t + 1, 'months') - s))) || 0;
    }
    function qa(e) {
        var a;
        return void 0 === e ? this._locale._abbr : (null != (a = oa(e)) && (this._locale = a), this);
    }
    l.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ', l.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    var Qa = t('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (e) {
        return void 0 === e ? this.localeData() : this.locale(e);
    });
    function Xa() {
        return this._locale;
    }
    function et(e, a) {
        I(0, [
            e,
            e.length
        ], 0, a);
    }
    function at(e, a, t, s, n) {
        var d;
        return null == e ? Ie(this, s, n).year : ((d = Ce(e, s, n)) < a && (a = d), function (e, a, t, s, n) {
            var d = Re(e, a, t, s, n), r = Je(d.year, 0, d.dayOfYear);
            return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this;
        }.call(this, e, a, t, s, n));
    }
    I(0, [
        'gg',
        2
    ], 0, function () {
        return this.weekYear() % 100;
    }), I(0, [
        'GG',
        2
    ], 0, function () {
        return this.isoWeekYear() % 100;
    }), et('gggg', 'weekYear'), et('ggggg', 'weekYear'), et('GGGG', 'isoWeekYear'), et('GGGGG', 'isoWeekYear'), P('weekYear', 'gg'), P('isoWeekYear', 'GG'), A('weekYear', 1), A('isoWeekYear', 1), ie('G', se), ie('g', se), ie('GG', B, V), ie('gg', B, V), ie('GGGG', ee, $), ie('gggg', ee, $), ie('GGGGG', ae, Z), ie('ggggg', ae, Z), Me([
        'gggg',
        'ggggg',
        'GGGG',
        'GGGGG'
    ], function (e, a, t, s) {
        a[s.substr(0, 2)] = g(e);
    }), Me([
        'gg',
        'GG'
    ], function (e, a, t, s) {
        a[s] = l.parseTwoDigitYear(e);
    }), I('Q', 0, 'Qo', 'quarter'), P('quarter', 'Q'), A('quarter', 7), ie('Q', U), le('Q', function (e, a) {
        a[Le] = 3 * (g(e) - 1);
    }), I('D', [
        'DD',
        2
    ], 'Do', 'date'), P('date', 'D'), A('date', 9), ie('D', B), ie('DD', B, V), ie('Do', function (e, a) {
        return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient;
    }), le([
        'D',
        'DD'
    ], ce), le('Do', function (e, a) {
        a[ce] = g(e.match(B)[0]);
    });
    var tt = Se('Date', !0);
    I('DDD', [
        'DDDD',
        3
    ], 'DDDo', 'dayOfYear'), P('dayOfYear', 'DDD'), A('dayOfYear', 4), ie('DDD', X), ie('DDDD', K), le([
        'DDD',
        'DDDD'
    ], function (e, a, t) {
        t._dayOfYear = g(e);
    }), I('m', [
        'mm',
        2
    ], 0, 'minute'), P('minute', 'm'), A('minute', 14), ie('m', B), ie('mm', B, V), le([
        'm',
        'mm'
    ], ye);
    var st = Se('Minutes', !1);
    I('s', [
        'ss',
        2
    ], 0, 'second'), P('second', 's'), A('second', 15), ie('s', B), ie('ss', B, V), le([
        's',
        'ss'
    ], fe);
    var nt, dt = Se('Seconds', !1);
    for (I('S', 0, 0, function () {
            return ~~(this.millisecond() / 100);
        }), I(0, [
            'SS',
            2
        ], 0, function () {
            return ~~(this.millisecond() / 10);
        }), I(0, [
            'SSS',
            3
        ], 0, 'millisecond'), I(0, [
            'SSSS',
            4
        ], 0, function () {
            return 10 * this.millisecond();
        }), I(0, [
            'SSSSS',
            5
        ], 0, function () {
            return 100 * this.millisecond();
        }), I(0, [
            'SSSSSS',
            6
        ], 0, function () {
            return 1000 * this.millisecond();
        }), I(0, [
            'SSSSSSS',
            7
        ], 0, function () {
            return 10000 * this.millisecond();
        }), I(0, [
            'SSSSSSSS',
            8
        ], 0, function () {
            return 100000 * this.millisecond();
        }), I(0, [
            'SSSSSSSSS',
            9
        ], 0, function () {
            return 1000000 * this.millisecond();
        }), P('millisecond', 'ms'), A('millisecond', 16), ie('S', X, U), ie('SS', X, V), ie('SSS', X, K), nt = 'SSSS'; nt.length <= 9; nt += 'S')
        ie(nt, te);
    function rt(e, a) {
        a[ke] = g(1000 * ('0.' + e));
    }
    for (nt = 'S'; nt.length <= 9; nt += 'S')
        le(nt, rt);
    var _t = Se('Milliseconds', !1);
    I('z', 0, 0, 'zoneAbbr'), I('zz', 0, 0, 'zoneName');
    var it = p.prototype;
    function ot(e) {
        return e;
    }
    it.add = $a, it.calendar = function (e, a) {
        var t = e || Sa(), s = za(t, this).startOf('day'), n = l.calendarFormat(this, s) || 'sameElse', d = a && (H(a[n]) ? a[n].call(this, t) : a[n]);
        return this.format(d || this.localeData().calendar(n, this, Sa(t)));
    }, it.clone = function () {
        return new p(this);
    }, it.diff = function (e, a, t) {
        var s, n, d;
        if (!this.isValid())
            return NaN;
        if (!(s = za(e, this)).isValid())
            return NaN;
        switch (n = 60000 * (s.utcOffset() - this.utcOffset()), a = O(a)) {
        case 'year':
            d = Ba(this, s) / 12;
            break;
        case 'month':
            d = Ba(this, s);
            break;
        case 'quarter':
            d = Ba(this, s) / 3;
            break;
        case 'second':
            d = (this - s) / 1000;
            break;
        case 'minute':
            d = (this - s) / 60000;
            break;
        case 'hour':
            d = (this - s) / 3600000;
            break;
        case 'day':
            d = (this - s - n) / 86400000;
            break;
        case 'week':
            d = (this - s - n) / 604800000;
            break;
        default:
            d = this - s;
        }
        return t ? d : T(d);
    }, it.endOf = function (e) {
        return void 0 === (e = O(e)) || 'millisecond' === e ? this : ('date' === e && (e = 'day'), this.startOf(e).add(1, 'isoWeek' === e ? 'week' : e).subtract(1, 'ms'));
    }, it.format = function (e) {
        e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
        var a = C(this, e);
        return this.localeData().postformat(a);
    }, it.from = function (e, a) {
        return this.isValid() && (D(e) && e.isValid() || Sa(e).isValid()) ? Ca({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate();
    }, it.fromNow = function (e) {
        return this.from(Sa(), e);
    }, it.to = function (e, a) {
        return this.isValid() && (D(e) && e.isValid() || Sa(e).isValid()) ? Ca({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate();
    }, it.toNow = function (e) {
        return this.to(Sa(), e);
    }, it.get = function (e) {
        return H(this[e = O(e)]) ? this[e]() : this;
    }, it.invalidAt = function () {
        return Y(this).overflow;
    }, it.isAfter = function (e, a) {
        var t = D(e) ? e : Sa(e);
        return !(!this.isValid() || !t.isValid()) && ('millisecond' === (a = O(o(a) ? 'millisecond' : a)) ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf());
    }, it.isBefore = function (e, a) {
        var t = D(e) ? e : Sa(e);
        return !(!this.isValid() || !t.isValid()) && ('millisecond' === (a = O(o(a) ? 'millisecond' : a)) ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf());
    }, it.isBetween = function (e, a, t, s) {
        return ('(' === (s = s || '()')[0] ? this.isAfter(e, t) : !this.isBefore(e, t)) && (')' === s[1] ? this.isBefore(a, t) : !this.isAfter(a, t));
    }, it.isSame = function (e, a) {
        var t, s = D(e) ? e : Sa(e);
        return !(!this.isValid() || !s.isValid()) && ('millisecond' === (a = O(a || 'millisecond')) ? this.valueOf() === s.valueOf() : (t = s.valueOf(), this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf()));
    }, it.isSameOrAfter = function (e, a) {
        return this.isSame(e, a) || this.isAfter(e, a);
    }, it.isSameOrBefore = function (e, a) {
        return this.isSame(e, a) || this.isBefore(e, a);
    }, it.isValid = function () {
        return y(this);
    }, it.lang = Qa, it.locale = qa, it.localeData = Xa, it.max = ba, it.min = Ha, it.parsingFlags = function () {
        return L({}, Y(this));
    }, it.set = function (e, a) {
        if ('object' == typeof e)
            for (var t = function (e) {
                        var a = [];
                        for (var t in e)
                            a.push({
                                unit: t,
                                priority: E[t]
                            });
                        return a.sort(function (e, a) {
                            return e.priority - a.priority;
                        }), a;
                    }(e = W(e)), s = 0; s < t.length; s++)
                this[t[s].unit](e[t[s].unit]);
        else if (H(this[e = O(e)]))
            return this[e](a);
        return this;
    }, it.startOf = function (e) {
        switch (e = O(e)) {
        case 'year':
            this.month(0);
        case 'quarter':
        case 'month':
            this.date(1);
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
        case 'hour':
            this.minutes(0);
        case 'minute':
            this.seconds(0);
        case 'second':
            this.milliseconds(0);
        }
        return 'week' === e && this.weekday(0), 'isoWeek' === e && this.isoWeekday(1), 'quarter' === e && this.month(3 * Math.floor(this.month() / 3)), this;
    }, it.subtract = Za, it.toArray = function () {
        var e = this;
        return [
            e.year(),
            e.month(),
            e.date(),
            e.hour(),
            e.minute(),
            e.second(),
            e.millisecond()
        ];
    }, it.toObject = function () {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        };
    }, it.toDate = function () {
        return new Date(this.valueOf());
    }, it.toISOString = function (e) {
        if (!this.isValid())
            return null;
        var a = !0 !== e, t = a ? this.clone().utc() : this;
        return t.year() < 0 || 9999 < t.year() ? C(t, a ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ') : H(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1000).toISOString().replace('Z', C(t, 'Z')) : C(t, a ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }, it.inspect = function () {
        if (!this.isValid())
            return 'moment.invalid(/* ' + this._i + ' */)';
        var e = 'moment', a = '';
        this.isLocal() || (e = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone', a = 'Z');
        var t = '[' + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY', n = a + '[")]';
        return this.format(t + s + '-MM-DD[T]HH:mm:ss.SSS' + n);
    }, it.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
    }, it.toString = function () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }, it.unix = function () {
        return Math.floor(this.valueOf() / 1000);
    }, it.valueOf = function () {
        return this._d.valueOf() - 60000 * (this._offset || 0);
    }, it.creationData = function () {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }, it.year = ve, it.isLeapYear = function () {
        return ge(this.year());
    }, it.weekYear = function (e) {
        return at.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }, it.isoWeekYear = function (e) {
        return at.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }, it.quarter = it.quarters = function (e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
    }, it.month = Ee, it.daysInMonth = function () {
        return je(this.year(), this.month());
    }, it.week = it.weeks = function (e) {
        var a = this.localeData().week(this);
        return null == e ? a : this.add(7 * (e - a), 'd');
    }, it.isoWeek = it.isoWeeks = function (e) {
        var a = Ie(this, 1, 4).week;
        return null == e ? a : this.add(7 * (e - a), 'd');
    }, it.weeksInYear = function () {
        var e = this.localeData()._week;
        return Ce(this.year(), e.dow, e.doy);
    }, it.isoWeeksInYear = function () {
        return Ce(this.year(), 1, 4);
    }, it.date = tt, it.day = it.days = function (e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var a, t, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (a = e, t = this.localeData(), e = 'string' != typeof a ? a : isNaN(a) ? 'number' == typeof (a = t.weekdaysParse(a)) ? a : null : parseInt(a, 10), this.add(e - s, 'd')) : s;
    }, it.weekday = function (e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? a : this.add(e - a, 'd');
    }, it.isoWeekday = function (e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            var a = (t = e, s = this.localeData(), 'string' == typeof t ? s.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
            return this.day(this.day() % 7 ? a : a - 7);
        }
        return this.day() || 7;
        var t, s;
    }, it.dayOfYear = function (e) {
        var a = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 86400000) + 1;
        return null == e ? a : this.add(e - a, 'd');
    }, it.hour = it.hours = aa, it.minute = it.minutes = st, it.second = it.seconds = dt, it.millisecond = it.milliseconds = _t, it.utcOffset = function (e, a, t) {
        var s, n = this._offset || 0;
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            if ('string' == typeof e) {
                if (null === (e = Fa(de, e)))
                    return this;
            } else
                Math.abs(e) < 16 && !t && (e *= 60);
            return !this._isUTC && a && (s = Ja(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, 'm'), n !== e && (!a || this._changeInProgress ? Ka(this, Ca(e - n, 'm'), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
        }
        return this._isUTC ? n : Ja(this);
    }, it.utc = function (e) {
        return this.utcOffset(0, e);
    }, it.local = function (e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ja(this), 'm')), this;
    }, it.parseZone = function () {
        if (null != this._tzm)
            this.utcOffset(this._tzm, !1, !0);
        else if ('string' == typeof this._i) {
            var e = Fa(ne, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }
        return this;
    }, it.hasAlignedHourOffset = function (e) {
        return !!this.isValid() && (e = e ? Sa(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
    }, it.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }, it.isLocal = function () {
        return !!this.isValid() && !this._isUTC;
    }, it.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC;
    }, it.isUtc = Na, it.isUTC = Na, it.zoneAbbr = function () {
        return this._isUTC ? 'UTC' : '';
    }, it.zoneName = function () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }, it.dates = t('dates accessor is deprecated. Use date instead.', tt), it.months = t('months accessor is deprecated. Use month instead', Ee), it.years = t('years accessor is deprecated. Use year instead', ve), it.zone = t('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', function (e, a) {
        return null != e ? ('string' != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset();
    }), it.isDSTShifted = t('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', function () {
        if (!o(this._isDSTShifted))
            return this._isDSTShifted;
        var e = {};
        if (k(e, this), (e = wa(e))._a) {
            var a = e._isUTC ? c(e._a) : Sa(e._a);
            this._isDSTShifted = this.isValid() && 0 < r(e._a, a.toArray());
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted;
    });
    var mt = j.prototype;
    function ut(e, a, t, s) {
        var n = oa(), d = c().set(s, a);
        return n[t](d, e);
    }
    function lt(e, a, t) {
        if (m(e) && (a = e, e = void 0), e = e || '', null != a)
            return ut(e, a, t, 'month');
        var s, n = [];
        for (s = 0; s < 12; s++)
            n[s] = ut(e, s, t, 'month');
        return n;
    }
    function Mt(e, a, t, s) {
        'boolean' == typeof e ? m(a) && (t = a, a = void 0) : (a = e, e = !1, m(t = a) && (t = a, a = void 0)), a = a || '';
        var n, d = oa(), r = e ? d._week.dow : 0;
        if (null != t)
            return ut(a, (t + r) % 7, s, 'day');
        var _ = [];
        for (n = 0; n < 7; n++)
            _[n] = ut(a, (n + r) % 7, s, 'day');
        return _;
    }
    mt.calendar = function (e, a, t) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return H(s) ? s.call(a, t) : s;
    }, mt.longDateFormat = function (e) {
        var a = this._longDateFormat[e], t = this._longDateFormat[e.toUpperCase()];
        return a || !t ? a : (this._longDateFormat[e] = t.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1);
        }), this._longDateFormat[e]);
    }, mt.invalidDate = function () {
        return this._invalidDate;
    }, mt.ordinal = function (e) {
        return this._ordinal.replace('%d', e);
    }, mt.preparse = ot, mt.postformat = ot, mt.relativeTime = function (e, a, t, s) {
        var n = this._relativeTime[t];
        return H(n) ? n(e, a, t, s) : n.replace(/%d/i, e);
    }, mt.pastFuture = function (e, a) {
        var t = this._relativeTime[0 < e ? 'future' : 'past'];
        return H(t) ? t(a) : t.replace(/%s/i, a);
    }, mt.set = function (e) {
        var a, t;
        for (t in e)
            H(a = e[t]) ? this[t] = a : this['_' + t] = a;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }, mt.months = function (e, a) {
        return e ? _(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xe).test(a) ? 'format' : 'standalone'][e.month()] : _(this._months) ? this._months : this._months.standalone;
    }, mt.monthsShort = function (e, a) {
        return e ? _(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xe.test(a) ? 'format' : 'standalone'][e.month()] : _(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }, mt.monthsParse = function (e, a, t) {
        var s, n, d;
        if (this._monthsParseExact)
            return function (e, a, t) {
                var s, n, d, r = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
                        d = c([
                            2000,
                            s
                        ]), this._shortMonthsParse[s] = this.monthsShort(d, '').toLocaleLowerCase(), this._longMonthsParse[s] = this.months(d, '').toLocaleLowerCase();
                return t ? 'MMM' === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : 'MMM' === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null;
            }.call(this, e, a, t);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
            if (n = c([
                    2000,
                    s
                ]), t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp('^' + this.months(n, '').replace('.', '') + '$', 'i'), this._shortMonthsParse[s] = new RegExp('^' + this.monthsShort(n, '').replace('.', '') + '$', 'i')), t || this._monthsParse[s] || (d = '^' + this.months(n, '') + '|^' + this.monthsShort(n, ''), this._monthsParse[s] = new RegExp(d.replace('.', ''), 'i')), t && 'MMMM' === a && this._longMonthsParse[s].test(e))
                return s;
            if (t && 'MMM' === a && this._shortMonthsParse[s].test(e))
                return s;
            if (!t && this._monthsParse[s].test(e))
                return s;
        }
    }, mt.monthsRegex = function (e) {
        return this._monthsParseExact ? (h(this, '_monthsRegex') || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (h(this, '_monthsRegex') || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
    }, mt.monthsShortRegex = function (e) {
        return this._monthsParseExact ? (h(this, '_monthsRegex') || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, '_monthsShortRegex') || (this._monthsShortRegex = Ae), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }, mt.week = function (e) {
        return Ie(e, this._week.dow, this._week.doy).week;
    }, mt.firstDayOfYear = function () {
        return this._week.doy;
    }, mt.firstDayOfWeek = function () {
        return this._week.dow;
    }, mt.weekdays = function (e, a) {
        return e ? _(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(a) ? 'format' : 'standalone'][e.day()] : _(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }, mt.weekdaysMin = function (e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }, mt.weekdaysShort = function (e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }, mt.weekdaysParse = function (e, a, t) {
        var s, n, d;
        if (this._weekdaysParseExact)
            return function (e, a, t) {
                var s, n, d, r = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
                        d = c([
                            2000,
                            1
                        ]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(d, '').toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(d, '').toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(d, '').toLocaleLowerCase();
                return t ? 'dddd' === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : null : 'ddd' === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : 'dddd' === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : 'ddd' === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null;
            }.call(this, e, a, t);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (n = c([
                    2000,
                    1
                ]).day(s), t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp('^' + this.weekdays(n, '').replace('.', '\\.?') + '$', 'i'), this._shortWeekdaysParse[s] = new RegExp('^' + this.weekdaysShort(n, '').replace('.', '\\.?') + '$', 'i'), this._minWeekdaysParse[s] = new RegExp('^' + this.weekdaysMin(n, '').replace('.', '\\.?') + '$', 'i')), this._weekdaysParse[s] || (d = '^' + this.weekdays(n, '') + '|^' + this.weekdaysShort(n, '') + '|^' + this.weekdaysMin(n, ''), this._weekdaysParse[s] = new RegExp(d.replace('.', ''), 'i')), t && 'dddd' === a && this._fullWeekdaysParse[s].test(e))
                return s;
            if (t && 'ddd' === a && this._shortWeekdaysParse[s].test(e))
                return s;
            if (t && 'dd' === a && this._minWeekdaysParse[s].test(e))
                return s;
            if (!t && this._weekdaysParse[s].test(e))
                return s;
        }
    }, mt.weekdaysRegex = function (e) {
        return this._weekdaysParseExact ? (h(this, '_weekdaysRegex') || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, '_weekdaysRegex') || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }, mt.weekdaysShortRegex = function (e) {
        return this._weekdaysParseExact ? (h(this, '_weekdaysRegex') || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = $e), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }, mt.weekdaysMinRegex = function (e) {
        return this._weekdaysParseExact ? (h(this, '_weekdaysRegex') || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }, mt.isPM = function (e) {
        return 'p' === (e + '').toLowerCase().charAt(0);
    }, mt.meridiem = function (e, a, t) {
        return 11 < e ? t ? 'pm' : 'PM' : t ? 'am' : 'AM';
    }, _a('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 === g(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        }
    }), l.lang = t('moment.lang is deprecated. Use moment.locale instead.', _a), l.langData = t('moment.langData is deprecated. Use moment.localeData instead.', oa);
    var ht = Math.abs;
    function Lt(e, a, t, s) {
        var n = Ca(a, t);
        return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble();
    }
    function ct(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function Yt(e) {
        return 4800 * e / 146097;
    }
    function yt(e) {
        return 146097 * e / 4800;
    }
    function ft(e) {
        return function () {
            return this.as(e);
        };
    }
    var kt = ft('ms'), pt = ft('s'), Dt = ft('m'), Tt = ft('h'), gt = ft('d'), wt = ft('w'), vt = ft('M'), St = ft('y');
    function Ht(e) {
        return function () {
            return this.isValid() ? this._data[e] : NaN;
        };
    }
    var bt = Ht('milliseconds'), jt = Ht('seconds'), xt = Ht('minutes'), Pt = Ht('hours'), Ot = Ht('days'), Wt = Ht('months'), Et = Ht('years');
    var At = Math.round, Ft = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        };
    var zt = Math.abs;
    function Jt(e) {
        return (0 < e) - (e < 0) || +e;
    }
    function Nt() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, a, t = zt(this._milliseconds) / 1000, s = zt(this._days), n = zt(this._months);
        a = T((e = T(t / 60)) / 60), t %= 60, e %= 60;
        var d = T(n / 12), r = n %= 12, _ = s, i = a, o = e, m = t ? t.toFixed(3).replace(/\.?0+$/, '') : '', u = this.asSeconds();
        if (!u)
            return 'P0D';
        var l = u < 0 ? '-' : '', M = Jt(this._months) !== Jt(u) ? '-' : '', h = Jt(this._days) !== Jt(u) ? '-' : '', L = Jt(this._milliseconds) !== Jt(u) ? '-' : '';
        return l + 'P' + (d ? M + d + 'Y' : '') + (r ? M + r + 'M' : '') + (_ ? h + _ + 'D' : '') + (i || o || m ? 'T' : '') + (i ? L + i + 'H' : '') + (o ? L + o + 'M' : '') + (m ? L + m + 'S' : '');
    }
    var Rt = Pa.prototype;
    Rt.isValid = function () {
        return this._isValid;
    }, Rt.abs = function () {
        var e = this._data;
        return this._milliseconds = ht(this._milliseconds), this._days = ht(this._days), this._months = ht(this._months), e.milliseconds = ht(e.milliseconds), e.seconds = ht(e.seconds), e.minutes = ht(e.minutes), e.hours = ht(e.hours), e.months = ht(e.months), e.years = ht(e.years), this;
    }, Rt.add = function (e, a) {
        return Lt(this, e, a, 1);
    }, Rt.subtract = function (e, a) {
        return Lt(this, e, a, -1);
    }, Rt.as = function (e) {
        if (!this.isValid())
            return NaN;
        var a, t, s = this._milliseconds;
        if ('month' === (e = O(e)) || 'year' === e)
            return a = this._days + s / 86400000, t = this._months + Yt(a), 'month' === e ? t : t / 12;
        switch (a = this._days + Math.round(yt(this._months)), e) {
        case 'week':
            return a / 7 + s / 604800000;
        case 'day':
            return a + s / 86400000;
        case 'hour':
            return 24 * a + s / 3600000;
        case 'minute':
            return 1440 * a + s / 60000;
        case 'second':
            return 86400 * a + s / 1000;
        case 'millisecond':
            return Math.floor(86400000 * a) + s;
        default:
            throw new Error('Unknown unit ' + e);
        }
    }, Rt.asMilliseconds = kt, Rt.asSeconds = pt, Rt.asMinutes = Dt, Rt.asHours = Tt, Rt.asDays = gt, Rt.asWeeks = wt, Rt.asMonths = vt, Rt.asYears = St, Rt.valueOf = function () {
        return this.isValid() ? this._milliseconds + 86400000 * this._days + this._months % 12 * 2592000000 + 31536000000 * g(this._months / 12) : NaN;
    }, Rt._bubble = function () {
        var e, a, t, s, n, d = this._milliseconds, r = this._days, _ = this._months, i = this._data;
        return 0 <= d && 0 <= r && 0 <= _ || d <= 0 && r <= 0 && _ <= 0 || (d += 86400000 * ct(yt(_) + r), _ = r = 0), i.milliseconds = d % 1000, e = T(d / 1000), i.seconds = e % 60, a = T(e / 60), i.minutes = a % 60, t = T(a / 60), i.hours = t % 24, _ += n = T(Yt(r += T(t / 24))), r -= ct(yt(n)), s = T(_ / 12), _ %= 12, i.days = r, i.months = _, i.years = s, this;
    }, Rt.clone = function () {
        return Ca(this);
    }, Rt.get = function (e) {
        return e = O(e), this.isValid() ? this[e + 's']() : NaN;
    }, Rt.milliseconds = bt, Rt.seconds = jt, Rt.minutes = xt, Rt.hours = Pt, Rt.days = Ot, Rt.weeks = function () {
        return T(this.days() / 7);
    }, Rt.months = Wt, Rt.years = Et, Rt.humanize = function (e) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var a, t, s, n, d, r, _, i, o, m, u, l = this.localeData(), M = (t = !e, s = l, n = Ca(a = this).abs(), d = At(n.as('s')), r = At(n.as('m')), _ = At(n.as('h')), i = At(n.as('d')), o = At(n.as('M')), m = At(n.as('y')), (u = d <= Ft.ss && [
                's',
                d
            ] || d < Ft.s && [
                'ss',
                d
            ] || r <= 1 && ['m'] || r < Ft.m && [
                'mm',
                r
            ] || _ <= 1 && ['h'] || _ < Ft.h && [
                'hh',
                _
            ] || i <= 1 && ['d'] || i < Ft.d && [
                'dd',
                i
            ] || o <= 1 && ['M'] || o < Ft.M && [
                'MM',
                o
            ] || m <= 1 && ['y'] || [
                'yy',
                m
            ])[2] = t, u[3] = 0 < +a, u[4] = s, function (e, a, t, s, n) {
                return n.relativeTime(a || 1, !!t, e, s);
            }.apply(null, u));
        return e && (M = l.pastFuture(+this, M)), l.postformat(M);
    }, Rt.toISOString = Nt, Rt.toString = Nt, Rt.toJSON = Nt, Rt.locale = qa, Rt.localeData = Xa, Rt.toIsoString = t('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', Nt), Rt.lang = Qa, I('X', 0, 0, 'unix'), I('x', 0, 0, 'valueOf'), ie('x', se), ie('X', /[+-]?\d+(\.\d{1,3})?/), le('X', function (e, a, t) {
        t._d = new Date(1000 * parseFloat(e, 10));
    }), le('x', function (e, a, t) {
        t._d = new Date(g(e));
    }), l.version = '2.22.2', e = Sa, l.fn = it, l.min = function () {
        return ja('isBefore', [].slice.call(arguments, 0));
    }, l.max = function () {
        return ja('isAfter', [].slice.call(arguments, 0));
    }, l.now = function () {
        return Date.now ? Date.now() : +new Date();
    }, l.utc = c, l.unix = function (e) {
        return Sa(1000 * e);
    }, l.months = function (e, a) {
        return lt(e, a, 'months');
    }, l.isDate = u, l.locale = _a, l.invalid = f, l.duration = Ca, l.isMoment = D, l.weekdays = function (e, a, t) {
        return Mt(e, a, t, 'weekdays');
    }, l.parseZone = function () {
        return Sa.apply(null, arguments).parseZone();
    }, l.localeData = oa, l.isDuration = Oa, l.monthsShort = function (e, a) {
        return lt(e, a, 'monthsShort');
    }, l.weekdaysMin = function (e, a, t) {
        return Mt(e, a, t, 'weekdaysMin');
    }, l.defineLocale = ia, l.updateLocale = function (e, a) {
        if (null != a) {
            var t, s, n = ta;
            null != (s = ra(e)) && (n = s._config), (t = new j(a = b(n, a))).parentLocale = sa[e], sa[e] = t, _a(e);
        } else
            null != sa[e] && (null != sa[e].parentLocale ? sa[e] = sa[e].parentLocale : null != sa[e] && delete sa[e]);
        return sa[e];
    }, l.locales = function () {
        return s(sa);
    }, l.weekdaysShort = function (e, a, t) {
        return Mt(e, a, t, 'weekdaysShort');
    }, l.normalizeUnits = O, l.relativeTimeRounding = function (e) {
        return void 0 === e ? At : 'function' == typeof e && (At = e, !0);
    }, l.relativeTimeThreshold = function (e, a) {
        return void 0 !== Ft[e] && (void 0 === a ? Ft[e] : (Ft[e] = a, 's' === e && (Ft.ss = a - 1), !0));
    }, l.calendarFormat = function (e, a) {
        var t = e.diff(a, 'days', !0);
        return t < -6 ? 'sameElse' : t < -1 ? 'lastWeek' : t < 0 ? 'lastDay' : t < 1 ? 'sameDay' : t < 2 ? 'nextDay' : t < 7 ? 'nextWeek' : 'sameElse';
    }, l.prototype = it, l.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'YYYY-[W]WW',
        MONTH: 'YYYY-MM'
    }, l.defineLocale('af', {
        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
            return /^nm$/i.test(e);
        },
        meridiem: function (e, a, t) {
            return e < 12 ? t ? 'vm' : 'VM' : t ? 'nm' : 'NM';
        },
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Vandag om] LT',
            nextDay: '[Môre om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[Gister om] LT',
            lastWeek: '[Laas] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'oor %s',
            past: '%s gelede',
            s: '\'n paar sekondes',
            ss: '%d sekondes',
            m: '\'n minuut',
            mm: '%d minute',
            h: '\'n uur',
            hh: '%d ure',
            d: '\'n dag',
            dd: '%d dae',
            M: '\'n maand',
            MM: '%d maande',
            y: '\'n jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
            return e + (1 === e || 8 === e || 20 <= e ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('ar-dz', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 0,
            doy: 4
        }
    }), l.defineLocale('ar-kw', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 0,
            doy: 12
        }
    });
    var It = {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            0: '0'
        }, Ct = function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5;
        }, Gt = {
            s: [
                'أقل من ثانية',
                'ثانية واحدة',
                [
                    'ثانيتان',
                    'ثانيتين'
                ],
                '%d ثوان',
                '%d ثانية',
                '%d ثانية'
            ],
            m: [
                'أقل من دقيقة',
                'دقيقة واحدة',
                [
                    'دقيقتان',
                    'دقيقتين'
                ],
                '%d دقائق',
                '%d دقيقة',
                '%d دقيقة'
            ],
            h: [
                'أقل من ساعة',
                'ساعة واحدة',
                [
                    'ساعتان',
                    'ساعتين'
                ],
                '%d ساعات',
                '%d ساعة',
                '%d ساعة'
            ],
            d: [
                'أقل من يوم',
                'يوم واحد',
                [
                    'يومان',
                    'يومين'
                ],
                '%d أيام',
                '%d يومًا',
                '%d يوم'
            ],
            M: [
                'أقل من شهر',
                'شهر واحد',
                [
                    'شهران',
                    'شهرين'
                ],
                '%d أشهر',
                '%d شهرا',
                '%d شهر'
            ],
            y: [
                'أقل من عام',
                'عام واحد',
                [
                    'عامان',
                    'عامين'
                ],
                '%d أعوام',
                '%d عامًا',
                '%d عام'
            ]
        }, Ut = function (r) {
            return function (e, a, t, s) {
                var n = Ct(e), d = Gt[r][Ct(e)];
                return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e);
            };
        }, Vt = [
            'يناير',
            'فبراير',
            'مارس',
            'أبريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر'
        ];
    l.defineLocale('ar-ly', {
        months: Vt,
        monthsShort: Vt,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/\u200FM/\u200FYYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function (e) {
            return 'م' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'ص' : 'م';
        },
        calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: Ut('s'),
            ss: Ut('s'),
            m: Ut('m'),
            mm: Ut('m'),
            h: Ut('h'),
            hh: Ut('h'),
            d: Ut('d'),
            dd: Ut('d'),
            M: Ut('M'),
            MM: Ut('M'),
            y: Ut('y'),
            yy: Ut('y')
        },
        preparse: function (e) {
            return e.replace(/\u060c/g, ',');
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return It[e];
            }).replace(/,/g, '\u060C');
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), l.defineLocale('ar-ma', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var Kt = {
            1: '١',
            2: '٢',
            3: '٣',
            4: '٤',
            5: '٥',
            6: '٦',
            7: '٧',
            8: '٨',
            9: '٩',
            0: '٠'
        }, $t = {
            '١': '1',
            '٢': '2',
            '٣': '3',
            '٤': '4',
            '٥': '5',
            '٦': '6',
            '٧': '7',
            '٨': '8',
            '٩': '9',
            '٠': '0'
        };
    l.defineLocale('ar-sa', {
        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function (e) {
            return 'م' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'ص' : 'م';
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        preparse: function (e) {
            return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) {
                return $t[e];
            }).replace(/\u060c/g, ',');
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Kt[e];
            }).replace(/,/g, '\u060C');
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Zt = {
            1: '١',
            2: '٢',
            3: '٣',
            4: '٤',
            5: '٥',
            6: '٦',
            7: '٧',
            8: '٨',
            9: '٩',
            0: '٠'
        }, Bt = {
            '١': '1',
            '٢': '2',
            '٣': '3',
            '٤': '4',
            '٥': '5',
            '٦': '6',
            '٧': '7',
            '٨': '8',
            '٩': '9',
            '٠': '0'
        }, qt = function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5;
        }, Qt = {
            s: [
                'أقل من ثانية',
                'ثانية واحدة',
                [
                    'ثانيتان',
                    'ثانيتين'
                ],
                '%d ثوان',
                '%d ثانية',
                '%d ثانية'
            ],
            m: [
                'أقل من دقيقة',
                'دقيقة واحدة',
                [
                    'دقيقتان',
                    'دقيقتين'
                ],
                '%d دقائق',
                '%d دقيقة',
                '%d دقيقة'
            ],
            h: [
                'أقل من ساعة',
                'ساعة واحدة',
                [
                    'ساعتان',
                    'ساعتين'
                ],
                '%d ساعات',
                '%d ساعة',
                '%d ساعة'
            ],
            d: [
                'أقل من يوم',
                'يوم واحد',
                [
                    'يومان',
                    'يومين'
                ],
                '%d أيام',
                '%d يومًا',
                '%d يوم'
            ],
            M: [
                'أقل من شهر',
                'شهر واحد',
                [
                    'شهران',
                    'شهرين'
                ],
                '%d أشهر',
                '%d شهرا',
                '%d شهر'
            ],
            y: [
                'أقل من عام',
                'عام واحد',
                [
                    'عامان',
                    'عامين'
                ],
                '%d أعوام',
                '%d عامًا',
                '%d عام'
            ]
        }, Xt = function (r) {
            return function (e, a, t, s) {
                var n = qt(e), d = Qt[r][qt(e)];
                return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e);
            };
        }, es = [
            'يناير',
            'فبراير',
            'مارس',
            'أبريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر'
        ];
    l.defineLocale('ar', {
        months: es,
        monthsShort: es,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/\u200FM/\u200FYYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function (e) {
            return 'م' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'ص' : 'م';
        },
        calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: Xt('s'),
            ss: Xt('s'),
            m: Xt('m'),
            mm: Xt('m'),
            h: Xt('h'),
            hh: Xt('h'),
            d: Xt('d'),
            dd: Xt('d'),
            M: Xt('M'),
            MM: Xt('M'),
            y: Xt('y'),
            yy: Xt('y')
        },
        preparse: function (e) {
            return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) {
                return Bt[e];
            }).replace(/\u060c/g, ',');
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Zt[e];
            }).replace(/,/g, '\u060C');
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var as = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
    };
    function ts(e, a, t) {
        var s, n;
        return 'm' === t ? a ? 'хвіліна' : 'хвіліну' : 'h' === t ? a ? 'гадзіна' : 'гадзіну' : e + ' ' + (s = +e, n = {
            ss: a ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: a ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            hh: a ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            dd: 'дзень_дні_дзён',
            MM: 'месяц_месяцы_месяцаў',
            yy: 'год_гады_гадоў'
        }[t].split('_'), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
    }
    l.defineLocale('az', {
        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[sabah saat] LT',
            nextWeek: '[gələn həftə] dddd [saat] LT',
            lastDay: '[dünən] LT',
            lastWeek: '[keçən həftə] dddd [saat] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s sonra',
            past: '%s əvvəl',
            s: 'birneçə saniyə',
            ss: '%d saniyə',
            m: 'bir dəqiqə',
            mm: '%d dəqiqə',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir il',
            yy: '%d il'
        },
        meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
        isPM: function (e) {
            return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e);
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'gecə' : e < 12 ? 'səhər' : e < 17 ? 'gündüz' : 'axşam';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
        ordinal: function (e) {
            if (0 === e)
                return e + '-ıncı';
            var a = e % 10;
            return e + (as[a] || as[e % 100 - a] || as[100 <= e ? 100 : null]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('be', {
        months: {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays: {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
        },
        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., HH:mm',
            LLLL: 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar: {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function () {
                return '[У] dddd [ў] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return '[У мінулую] dddd [ў] LT';
                case 1:
                case 2:
                case 4:
                    return '[У мінулы] dddd [ў] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'праз %s',
            past: '%s таму',
            s: 'некалькі секунд',
            m: ts,
            mm: ts,
            h: ts,
            hh: ts,
            d: 'дзень',
            dd: ts,
            M: 'месяц',
            MM: ts,
            y: 'год',
            yy: ts
        },
        meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
        isPM: function (e) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e);
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'ночы' : e < 12 ? 'раніцы' : e < 17 ? 'дня' : 'вечара';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + '-ы' : e + '-і';
            case 'D':
                return e + '-га';
            default:
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('bg', {
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[Днес в] LT',
            nextDay: '[Утре в] LT',
            nextWeek: 'dddd [в] LT',
            lastDay: '[Вчера в] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'след %s',
            past: 'преди %s',
            s: 'няколко секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дни',
            M: 'месец',
            MM: '%d месеца',
            y: 'година',
            yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
        ordinal: function (e) {
            var a = e % 10, t = e % 100;
            return 0 === e ? e + '-ев' : 0 === t ? e + '-ен' : 10 < t && t < 20 ? e + '-ти' : 1 === a ? e + '-ви' : 2 === a ? e + '-ри' : 7 === a || 8 === a ? e + '-ми' : e + '-ти';
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('bm', {
        months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'MMMM [tile] D [san] YYYY',
            LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
            LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
        },
        calendar: {
            sameDay: '[Bi lɛrɛ] LT',
            nextDay: '[Sini lɛrɛ] LT',
            nextWeek: 'dddd [don lɛrɛ] LT',
            lastDay: '[Kunu lɛrɛ] LT',
            lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s kɔnɔ',
            past: 'a bɛ %s bɔ',
            s: 'sanga dama dama',
            ss: 'sekondi %d',
            m: 'miniti kelen',
            mm: 'miniti %d',
            h: 'lɛrɛ kelen',
            hh: 'lɛrɛ %d',
            d: 'tile kelen',
            dd: 'tile %d',
            M: 'kalo kelen',
            MM: 'kalo %d',
            y: 'san kelen',
            yy: 'san %d'
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ss = {
            1: '১',
            2: '২',
            3: '৩',
            4: '৪',
            5: '৫',
            6: '৬',
            7: '৭',
            8: '৮',
            9: '৯',
            0: '০'
        }, ns = {
            '১': '1',
            '২': '2',
            '৩': '3',
            '৪': '4',
            '৫': '5',
            '৬': '6',
            '৭': '7',
            '৮': '8',
            '৯': '9',
            '০': '0'
        };
    l.defineLocale('bn', {
        months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
        longDateFormat: {
            LT: 'A h:mm সময়',
            LTS: 'A h:mm:ss সময়',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm সময়',
            LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar: {
            sameDay: '[আজ] LT',
            nextDay: '[আগামীকাল] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[গতকাল] LT',
            lastWeek: '[গত] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s পরে',
            past: '%s আগে',
            s: 'কয়েক সেকেন্ড',
            ss: '%d সেকেন্ড',
            m: 'এক মিনিট',
            mm: '%d মিনিট',
            h: 'এক ঘন্টা',
            hh: '%d ঘন্টা',
            d: 'এক দিন',
            dd: '%d দিন',
            M: 'এক মাস',
            MM: '%d মাস',
            y: 'এক বছর',
            yy: '%d বছর'
        },
        preparse: function (e) {
            return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function (e) {
                return ns[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return ss[e];
            });
        },
        meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'রাত' === a && 4 <= e || 'দুপুর' === a && e < 5 || 'বিকাল' === a ? e + 12 : e;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'রাত' : e < 10 ? 'সকাল' : e < 17 ? 'দুপুর' : e < 20 ? 'বিকাল' : 'রাত';
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var ds = {
            1: '༡',
            2: '༢',
            3: '༣',
            4: '༤',
            5: '༥',
            6: '༦',
            7: '༧',
            8: '༨',
            9: '༩',
            0: '༠'
        }, rs = {
            '༡': '1',
            '༢': '2',
            '༣': '3',
            '༤': '4',
            '༥': '5',
            '༦': '6',
            '༧': '7',
            '༨': '8',
            '༩': '9',
            '༠': '0'
        };
    function _s(e, a, t) {
        return e + ' ' + function (e, a) {
            if (2 === a)
                return function (e) {
                    var a = {
                        m: 'v',
                        b: 'v',
                        d: 'z'
                    };
                    if (void 0 === a[e.charAt(0)])
                        return e;
                    return a[e.charAt(0)] + e.substring(1);
                }(e);
            return e;
        }({
            mm: 'munutenn',
            MM: 'miz',
            dd: 'devezh'
        }[t], e);
    }
    function is(e, a, t) {
        var s = e + ' ';
        switch (t) {
        case 'ss':
            return s += 1 === e ? 'sekunda' : 2 === e || 3 === e || 4 === e ? 'sekunde' : 'sekundi';
        case 'm':
            return a ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            return s += 1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta';
        case 'h':
            return a ? 'jedan sat' : 'jednog sata';
        case 'hh':
            return s += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati';
        case 'dd':
            return s += 1 === e ? 'dan' : 'dana';
        case 'MM':
            return s += 1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci';
        case 'yy':
            return s += 1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina';
        }
    }
    l.defineLocale('bo', {
        months: 'ཟླ\u0F0Bབ\u0F0Bདང\u0F0Bཔོ_ཟླ\u0F0Bབ\u0F0Bགཉིས\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bགསུམ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཞི\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bལྔ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདྲུག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབདུན\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབརྒྱད\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདགུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཅིག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཉིས\u0F0Bཔ'.split('_'),
        monthsShort: 'ཟླ\u0F0Bབ\u0F0Bདང\u0F0Bཔོ_ཟླ\u0F0Bབ\u0F0Bགཉིས\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bགསུམ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཞི\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bལྔ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདྲུག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབདུན\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབརྒྱད\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདགུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཅིག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཉིས\u0F0Bཔ'.split('_'),
        weekdays: 'གཟའ\u0F0Bཉི\u0F0Bམ\u0F0B_གཟའ\u0F0Bཟླ\u0F0Bབ\u0F0B_གཟའ\u0F0Bམིག\u0F0Bདམར\u0F0B_གཟའ\u0F0Bལྷག\u0F0Bཔ\u0F0B_གཟའ\u0F0Bཕུར\u0F0Bབུ_གཟའ\u0F0Bཔ\u0F0Bསངས\u0F0B_གཟའ\u0F0Bསྤེན\u0F0Bཔ\u0F0B'.split('_'),
        weekdaysShort: 'ཉི\u0F0Bམ\u0F0B_ཟླ\u0F0Bབ\u0F0B_མིག\u0F0Bདམར\u0F0B_ལྷག\u0F0Bཔ\u0F0B_ཕུར\u0F0Bབུ_པ\u0F0Bསངས\u0F0B_སྤེན\u0F0Bཔ\u0F0B'.split('_'),
        weekdaysMin: 'ཉི\u0F0Bམ\u0F0B_ཟླ\u0F0Bབ\u0F0B_མིག\u0F0Bདམར\u0F0B_ལྷག\u0F0Bཔ\u0F0B_ཕུར\u0F0Bབུ_པ\u0F0Bསངས\u0F0B_སྤེན\u0F0Bཔ\u0F0B'.split('_'),
        longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
            sameDay: '[དི\u0F0Bརིང] LT',
            nextDay: '[སང\u0F0Bཉིན] LT',
            nextWeek: '[བདུན\u0F0Bཕྲག\u0F0Bརྗེས\u0F0Bམ], LT',
            lastDay: '[ཁ\u0F0Bསང] LT',
            lastWeek: '[བདུན\u0F0Bཕྲག\u0F0Bམཐའ\u0F0Bམ] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s ལ\u0F0B',
            past: '%s སྔན\u0F0Bལ',
            s: 'ལམ\u0F0Bསང',
            ss: '%d སྐར\u0F0Bཆ\u0F0D',
            m: 'སྐར\u0F0Bམ\u0F0Bགཅིག',
            mm: '%d སྐར\u0F0Bམ',
            h: 'ཆུ\u0F0Bཚོད\u0F0Bགཅིག',
            hh: '%d ཆུ\u0F0Bཚོད',
            d: 'ཉིན\u0F0Bགཅིག',
            dd: '%d ཉིན\u0F0B',
            M: 'ཟླ\u0F0Bབ\u0F0Bགཅིག',
            MM: '%d ཟླ\u0F0Bབ',
            y: 'ལོ\u0F0Bགཅིག',
            yy: '%d ལོ'
        },
        preparse: function (e) {
            return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function (e) {
                return rs[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return ds[e];
            });
        },
        meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'མཚན\u0F0Bམོ' === a && 4 <= e || 'ཉིན\u0F0Bགུང' === a && e < 5 || 'དགོང\u0F0Bདག' === a ? e + 12 : e;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'མཚན\u0F0Bམོ' : e < 10 ? 'ཞོགས\u0F0Bཀས' : e < 17 ? 'ཉིན\u0F0Bགུང' : e < 20 ? 'དགོང\u0F0Bདག' : 'མཚན\u0F0Bམོ';
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale('br', {
        months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'h[e]mm A',
            LTS: 'h[e]mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [a viz] MMMM YYYY',
            LLL: 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
        },
        calendar: {
            sameDay: '[Hiziv da] LT',
            nextDay: '[Warc\'hoazh da] LT',
            nextWeek: 'dddd [da] LT',
            lastDay: '[Dec\'h da] LT',
            lastWeek: 'dddd [paset da] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'a-benn %s',
            past: '%s \'zo',
            s: 'un nebeud segondennoù',
            ss: '%d eilenn',
            m: 'ur vunutenn',
            mm: _s,
            h: 'un eur',
            hh: '%d eur',
            d: 'un devezh',
            dd: _s,
            M: 'ur miz',
            MM: _s,
            y: 'ur bloaz',
            yy: function (e) {
                switch (function e(a) {
                        return 9 < a ? e(a % 10) : a;
                    }(e)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return e + ' bloaz';
                default:
                    return e + ' vloaz';
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
        ordinal: function (e) {
            return e + (1 === e ? 'añ' : 'vet');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('bs', {
        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: is,
            m: is,
            mm: is,
            h: is,
            hh: is,
            d: 'dan',
            dd: is,
            M: 'mjesec',
            MM: is,
            y: 'godinu',
            yy: is
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('ca', {
        months: {
            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
            format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM [de] YYYY',
            ll: 'D MMM YYYY',
            LLL: 'D MMMM [de] YYYY [a les] H:mm',
            lll: 'D MMM YYYY, H:mm',
            LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
            llll: 'ddd D MMM YYYY, H:mm'
        },
        calendar: {
            sameDay: function () {
                return '[avui a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            nextDay: function () {
                return '[demà a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            nextWeek: function () {
                return 'dddd [a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            lastDay: function () {
                return '[ahir a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            lastWeek: function () {
                return '[el] dddd [passat a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'd\'aquí %s',
            past: 'fa %s',
            s: 'uns segons',
            ss: '%d segons',
            m: 'un minut',
            mm: '%d minuts',
            h: 'una hora',
            hh: '%d hores',
            d: 'un dia',
            dd: '%d dies',
            M: 'un mes',
            MM: '%d mesos',
            y: 'un any',
            yy: '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
        ordinal: function (e, a) {
            var t = 1 === e ? 'r' : 2 === e ? 'n' : 3 === e ? 'r' : 4 === e ? 't' : 'è';
            return 'w' !== a && 'W' !== a || (t = 'a'), e + t;
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var os = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'), ms = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    function us(e) {
        return 1 < e && e < 5 && 1 != ~~(e / 10);
    }
    function ls(e, a, t, s) {
        var n = e + ' ';
        switch (t) {
        case 's':
            return a || s ? 'pár sekund' : 'pár sekundami';
        case 'ss':
            return a || s ? n + (us(e) ? 'sekundy' : 'sekund') : n + 'sekundami';
            break;
        case 'm':
            return a ? 'minuta' : s ? 'minutu' : 'minutou';
        case 'mm':
            return a || s ? n + (us(e) ? 'minuty' : 'minut') : n + 'minutami';
            break;
        case 'h':
            return a ? 'hodina' : s ? 'hodinu' : 'hodinou';
        case 'hh':
            return a || s ? n + (us(e) ? 'hodiny' : 'hodin') : n + 'hodinami';
            break;
        case 'd':
            return a || s ? 'den' : 'dnem';
        case 'dd':
            return a || s ? n + (us(e) ? 'dny' : 'dní') : n + 'dny';
            break;
        case 'M':
            return a || s ? 'měsíc' : 'měsícem';
        case 'MM':
            return a || s ? n + (us(e) ? 'měsíce' : 'měsíců') : n + 'měsíci';
            break;
        case 'y':
            return a || s ? 'rok' : 'rokem';
        case 'yy':
            return a || s ? n + (us(e) ? 'roky' : 'let') : n + 'lety';
            break;
        }
    }
    function Ms(e, a, t, s) {
        var n = {
            m: [
                'eine Minute',
                'einer Minute'
            ],
            h: [
                'eine Stunde',
                'einer Stunde'
            ],
            d: [
                'ein Tag',
                'einem Tag'
            ],
            dd: [
                e + ' Tage',
                e + ' Tagen'
            ],
            M: [
                'ein Monat',
                'einem Monat'
            ],
            MM: [
                e + ' Monate',
                e + ' Monaten'
            ],
            y: [
                'ein Jahr',
                'einem Jahr'
            ],
            yy: [
                e + ' Jahre',
                e + ' Jahren'
            ]
        };
        return a ? n[t][0] : n[t][1];
    }
    function hs(e, a, t, s) {
        var n = {
            m: [
                'eine Minute',
                'einer Minute'
            ],
            h: [
                'eine Stunde',
                'einer Stunde'
            ],
            d: [
                'ein Tag',
                'einem Tag'
            ],
            dd: [
                e + ' Tage',
                e + ' Tagen'
            ],
            M: [
                'ein Monat',
                'einem Monat'
            ],
            MM: [
                e + ' Monate',
                e + ' Monaten'
            ],
            y: [
                'ein Jahr',
                'einem Jahr'
            ],
            yy: [
                e + ' Jahre',
                e + ' Jahren'
            ]
        };
        return a ? n[t][0] : n[t][1];
    }
    function Ls(e, a, t, s) {
        var n = {
            m: [
                'eine Minute',
                'einer Minute'
            ],
            h: [
                'eine Stunde',
                'einer Stunde'
            ],
            d: [
                'ein Tag',
                'einem Tag'
            ],
            dd: [
                e + ' Tage',
                e + ' Tagen'
            ],
            M: [
                'ein Monat',
                'einem Monat'
            ],
            MM: [
                e + ' Monate',
                e + ' Monaten'
            ],
            y: [
                'ein Jahr',
                'einem Jahr'
            ],
            yy: [
                e + ' Jahre',
                e + ' Jahren'
            ]
        };
        return a ? n[t][0] : n[t][1];
    }
    l.defineLocale('cs', {
        months: os,
        monthsShort: ms,
        monthsParse: function (e, a) {
            var t, s = [];
            for (t = 0; t < 12; t++)
                s[t] = new RegExp('^' + e[t] + '$|^' + a[t] + '$', 'i');
            return s;
        }(os, ms),
        shortMonthsParse: function (e) {
            var a, t = [];
            for (a = 0; a < 12; a++)
                t[a] = new RegExp('^' + e[a] + '$', 'i');
            return t;
        }(ms),
        longMonthsParse: function (e) {
            var a, t = [];
            for (a = 0; a < 12; a++)
                t[a] = new RegExp('^' + e[a] + '$', 'i');
            return t;
        }(os),
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
        },
        calendar: {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'před %s',
            s: ls,
            ss: ls,
            m: ls,
            mm: ls,
            h: ls,
            hh: ls,
            d: ls,
            dd: ls,
            M: ls,
            MM: ls,
            y: ls,
            yy: ls
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('cv', {
        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar: {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L'
        },
        relativeTime: {
            future: function (e) {
                return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? 'рен' : /\u04ab\u0443\u043b$/i.exec(e) ? 'тан' : 'ран');
            },
            past: '%s каялла',
            s: 'пӗр-ик ҫеккунт',
            ss: '%d ҫеккунт',
            m: 'пӗр минут',
            mm: '%d минут',
            h: 'пӗр сехет',
            hh: '%d сехет',
            d: 'пӗр кун',
            dd: '%d кун',
            M: 'пӗр уйӑх',
            MM: '%d уйӑх',
            y: 'пӗр ҫул',
            yy: '%d ҫул'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
        ordinal: '%d-мӗш',
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            ss: '%d eiliad',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
            var a = '';
            return 20 < e ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? 'fed' : 'ain' : 0 < e && (a = [
                '',
                'af',
                'il',
                'ydd',
                'ydd',
                'ed',
                'ed',
                'ed',
                'fed',
                'fed',
                'fed',
                'eg',
                'fed',
                'eg',
                'eg',
                'fed',
                'eg',
                'eg',
                'fed',
                'eg',
                'fed'
            ][e]), e + a;
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('da', {
        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'på dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[i] dddd[s kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'få sekunder',
            ss: '%d sekunder',
            m: 'et minut',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dage',
            M: 'en måned',
            MM: '%d måneder',
            y: 'et år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('de-at', {
        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: Ms,
            mm: '%d Minuten',
            h: Ms,
            hh: '%d Stunden',
            d: Ms,
            dd: Ms,
            M: Ms,
            MM: Ms,
            y: Ms,
            yy: Ms
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('de-ch', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: hs,
            mm: '%d Minuten',
            h: hs,
            hh: '%d Stunden',
            d: hs,
            dd: hs,
            M: hs,
            MM: hs,
            y: hs,
            yy: hs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('de', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: Ls,
            mm: '%d Minuten',
            h: Ls,
            hh: '%d Stunden',
            d: Ls,
            dd: Ls,
            M: Ls,
            MM: Ls,
            y: Ls,
            yy: Ls
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
    var cs = [
            'ޖެނުއަރީ',
            'ފެބްރުއަރީ',
            'މާރިޗު',
            'އޭޕްރީލު',
            'މޭ',
            'ޖޫން',
            'ޖުލައި',
            'އޯގަސްޓު',
            'ސެޕްޓެމްބަރު',
            'އޮކްޓޯބަރު',
            'ނޮވެމްބަރު',
            'ޑިސެމްބަރު'
        ], Ys = [
            'އާދިއްތަ',
            'ހޯމަ',
            'އަންގާރަ',
            'ބުދަ',
            'ބުރާސްފަތި',
            'ހުކުރު',
            'ހޮނިހިރު'
        ];
    l.defineLocale('dv', {
        months: cs,
        monthsShort: cs,
        weekdays: Ys,
        weekdaysShort: Ys,
        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/M/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u0789\u0786|\u0789\u078a/,
        isPM: function (e) {
            return 'މފ' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'މކ' : 'މފ';
        },
        calendar: {
            sameDay: '[މިއަދު] LT',
            nextDay: '[މާދަމާ] LT',
            nextWeek: 'dddd LT',
            lastDay: '[އިއްޔެ] LT',
            lastWeek: '[ފާއިތުވި] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'ތެރޭގައި %s',
            past: 'ކުރިން %s',
            s: 'ސިކުންތުކޮޅެއް',
            ss: 'd% ސިކުންތު',
            m: 'މިނިޓެއް',
            mm: 'މިނިޓު %d',
            h: 'ގަޑިއިރެއް',
            hh: 'ގަޑިއިރު %d',
            d: 'ދުވަހެއް',
            dd: 'ދުވަސް %d',
            M: 'މަހެއް',
            MM: 'މަސް %d',
            y: 'އަހަރެއް',
            yy: 'އަހަރު %d'
        },
        preparse: function (e) {
            return e.replace(/\u060c/g, ',');
        },
        postformat: function (e) {
            return e.replace(/,/g, '\u060C');
        },
        week: {
            dow: 7,
            doy: 12
        }
    }), l.defineLocale('el', {
        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months: function (e, a) {
            return e ? 'string' == typeof a && /D/.test(a.substring(0, a.indexOf('MMMM'))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
        },
        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem: function (e, a, t) {
            return 11 < e ? t ? 'μμ' : 'ΜΜ' : t ? 'πμ' : 'ΠΜ';
        },
        isPM: function (e) {
            return 'μ' === (e + '').toLowerCase()[0];
        },
        meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl: {
            sameDay: '[Σήμερα {}] LT',
            nextDay: '[Αύριο {}] LT',
            nextWeek: 'dddd [{}] LT',
            lastDay: '[Χθες {}] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 6:
                    return '[το προηγούμενο] dddd [{}] LT';
                default:
                    return '[την προηγούμενη] dddd [{}] LT';
                }
            },
            sameElse: 'L'
        },
        calendar: function (e, a) {
            var t = this._calendarEl[e], s = a && a.hours();
            return H(t) && (t = t.apply(a)), t.replace('{}', s % 12 == 1 ? 'στη' : 'στις');
        },
        relativeTime: {
            future: 'σε %s',
            past: '%s πριν',
            s: 'λίγα δευτερόλεπτα',
            ss: '%d δευτερόλεπτα',
            m: 'ένα λεπτό',
            mm: '%d λεπτά',
            h: 'μία ώρα',
            hh: '%d ώρες',
            d: 'μία μέρα',
            dd: '%d μέρες',
            M: 'ένας μήνας',
            MM: '%d μήνες',
            y: 'ένας χρόνος',
            yy: '%d χρόνια'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
        ordinal: '%dη',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('en-au', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('en-ca', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'YYYY-MM-DD',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        }
    }), l.defineLocale('en-gb', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('en-ie', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('en-il', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        }
    }), l.defineLocale('en-nz', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('eo', {
        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D[-a de] MMMM, YYYY',
            LLL: 'D[-a de] MMMM, YYYY HH:mm',
            LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
            return 'p' === e.charAt(0).toLowerCase();
        },
        meridiem: function (e, a, t) {
            return 11 < e ? t ? 'p.t.m.' : 'P.T.M.' : t ? 'a.t.m.' : 'A.T.M.';
        },
        calendar: {
            sameDay: '[Hodiaŭ je] LT',
            nextDay: '[Morgaŭ je] LT',
            nextWeek: 'dddd [je] LT',
            lastDay: '[Hieraŭ je] LT',
            lastWeek: '[pasinta] dddd [je] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'post %s',
            past: 'antaŭ %s',
            s: 'sekundoj',
            ss: '%d sekundoj',
            m: 'minuto',
            mm: '%d minutoj',
            h: 'horo',
            hh: '%d horoj',
            d: 'tago',
            dd: '%d tagoj',
            M: 'monato',
            MM: '%d monatoj',
            y: 'jaro',
            yy: '%d jaroj'
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: '%da',
        week: {
            dow: 1,
            doy: 7
        }
    });
    var ys = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), fs = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'), ks = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i
        ], ps = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    l.defineLocale('es-do', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function (e, a) {
            return e ? /-MMM-/.test(a) ? fs[e.month()] : ys[e.month()] : ys;
        },
        monthsRegex: ps,
        monthsShortRegex: ps,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: ks,
        longMonthsParse: ks,
        shortMonthsParse: ks,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
            sameDay: function () {
                return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function () {
                return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function () {
                return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function () {
                return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function () {
                return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº',
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ds = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), Ts = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    l.defineLocale('es-us', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function (e, a) {
            return e ? /-MMM-/.test(a) ? Ts[e.month()] : Ds[e.month()] : Ds;
        },
        monthsParseExact: !0,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM [de] D [de] YYYY',
            LLL: 'MMMM [de] D [de] YYYY h:mm A',
            LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
        },
        calendar: {
            sameDay: function () {
                return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function () {
                return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function () {
                return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function () {
                return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function () {
                return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº',
        week: {
            dow: 0,
            doy: 6
        }
    });
    var gs = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), ws = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'), vs = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i
        ], Ss = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    function Hs(e, a, t, s) {
        var n = {
            s: [
                'mõne sekundi',
                'mõni sekund',
                'paar sekundit'
            ],
            ss: [
                e + 'sekundi',
                e + 'sekundit'
            ],
            m: [
                'ühe minuti',
                'üks minut'
            ],
            mm: [
                e + ' minuti',
                e + ' minutit'
            ],
            h: [
                'ühe tunni',
                'tund aega',
                'üks tund'
            ],
            hh: [
                e + ' tunni',
                e + ' tundi'
            ],
            d: [
                'ühe päeva',
                'üks päev'
            ],
            M: [
                'kuu aja',
                'kuu aega',
                'üks kuu'
            ],
            MM: [
                e + ' kuu',
                e + ' kuud'
            ],
            y: [
                'ühe aasta',
                'aasta',
                'üks aasta'
            ],
            yy: [
                e + ' aasta',
                e + ' aastat'
            ]
        };
        return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1];
    }
    l.defineLocale('es', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function (e, a) {
            return e ? /-MMM-/.test(a) ? ws[e.month()] : gs[e.month()] : gs;
        },
        monthsRegex: Ss,
        monthsShortRegex: Ss,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: vs,
        longMonthsParse: vs,
        shortMonthsParse: vs,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: function () {
                return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function () {
                return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function () {
                return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function () {
                return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function () {
                return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('et', {
        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[Täna,] LT',
            nextDay: '[Homme,] LT',
            nextWeek: '[Järgmine] dddd LT',
            lastDay: '[Eile,] LT',
            lastWeek: '[Eelmine] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s pärast',
            past: '%s tagasi',
            s: Hs,
            ss: Hs,
            m: Hs,
            mm: Hs,
            h: Hs,
            hh: Hs,
            d: Hs,
            dd: '%d päeva',
            M: Hs,
            MM: Hs,
            y: Hs,
            yy: Hs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('eu', {
        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY[ko] MMMM[ren] D[a]',
            LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l: 'YYYY-M-D',
            ll: 'YYYY[ko] MMM D[a]',
            lll: 'YYYY[ko] MMM D[a] HH:mm',
            llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar: {
            sameDay: '[gaur] LT[etan]',
            nextDay: '[bihar] LT[etan]',
            nextWeek: 'dddd LT[etan]',
            lastDay: '[atzo] LT[etan]',
            lastWeek: '[aurreko] dddd LT[etan]',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s barru',
            past: 'duela %s',
            s: 'segundo batzuk',
            ss: '%d segundo',
            m: 'minutu bat',
            mm: '%d minutu',
            h: 'ordu bat',
            hh: '%d ordu',
            d: 'egun bat',
            dd: '%d egun',
            M: 'hilabete bat',
            MM: '%d hilabete',
            y: 'urte bat',
            yy: '%d urte'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    });
    var bs = {
            1: '۱',
            2: '۲',
            3: '۳',
            4: '۴',
            5: '۵',
            6: '۶',
            7: '۷',
            8: '۸',
            9: '۹',
            0: '۰'
        }, js = {
            '۱': '1',
            '۲': '2',
            '۳': '3',
            '۴': '4',
            '۵': '5',
            '۶': '6',
            '۷': '7',
            '۸': '8',
            '۹': '9',
            '۰': '0'
        };
    l.defineLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
        isPM: function (e) {
            return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e);
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'قبل از ظهر' : 'بعد از ظهر';
        },
        calendar: {
            sameDay: '[امروز ساعت] LT',
            nextDay: '[فردا ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز ساعت] LT',
            lastWeek: 'dddd [پیش] [ساعت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'در %s',
            past: '%s پیش',
            s: 'چند ثانیه',
            ss: 'ثانیه d%',
            m: 'یک دقیقه',
            mm: '%d دقیقه',
            h: 'یک ساعت',
            hh: '%d ساعت',
            d: 'یک روز',
            dd: '%d روز',
            M: 'یک ماه',
            MM: '%d ماه',
            y: 'یک سال',
            yy: '%d سال'
        },
        preparse: function (e) {
            return e.replace(/[\u06f0-\u06f9]/g, function (e) {
                return js[e];
            }).replace(/\u060c/g, ',');
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return bs[e];
            }).replace(/,/g, '\u060C');
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
        ordinal: '%dم',
        week: {
            dow: 6,
            doy: 12
        }
    });
    var xs = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), Ps = [
            'nolla',
            'yhden',
            'kahden',
            'kolmen',
            'neljän',
            'viiden',
            'kuuden',
            xs[7],
            xs[8],
            xs[9]
        ];
    function Os(e, a, t, s) {
        var n, d, r = '';
        switch (t) {
        case 's':
            return s ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'ss':
            return s ? 'sekunnin' : 'sekuntia';
        case 'm':
            return s ? 'minuutin' : 'minuutti';
        case 'mm':
            r = s ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return s ? 'tunnin' : 'tunti';
        case 'hh':
            r = s ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return s ? 'päivän' : 'päivä';
        case 'dd':
            r = s ? 'päivän' : 'päivää';
            break;
        case 'M':
            return s ? 'kuukauden' : 'kuukausi';
        case 'MM':
            r = s ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return s ? 'vuoden' : 'vuosi';
        case 'yy':
            r = s ? 'vuoden' : 'vuotta';
            break;
        }
        return d = s, r = ((n = e) < 10 ? d ? Ps[n] : xs[n] : n) + ' ' + r;
    }
    l.defineLocale('fi', {
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'Do MMMM[ta] YYYY',
            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l: 'D.M.YYYY',
            ll: 'Do MMM YYYY',
            lll: 'Do MMM YYYY, [klo] HH.mm',
            llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar: {
            sameDay: '[tänään] [klo] LT',
            nextDay: '[huomenna] [klo] LT',
            nextWeek: 'dddd [klo] LT',
            lastDay: '[eilen] [klo] LT',
            lastWeek: '[viime] dddd[na] [klo] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s päästä',
            past: '%s sitten',
            s: Os,
            ss: Os,
            m: Os,
            mm: Os,
            h: Os,
            hh: Os,
            d: Os,
            dd: Os,
            M: Os,
            MM: Os,
            y: Os,
            yy: Os
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('fo', {
        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Í dag kl.] LT',
            nextDay: '[Í morgin kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[Í gjár kl.] LT',
            lastWeek: '[síðstu] dddd [kl] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'um %s',
            past: '%s síðani',
            s: 'fá sekund',
            ss: '%d sekundir',
            m: 'ein minutt',
            mm: '%d minuttir',
            h: 'ein tími',
            hh: '%d tímar',
            d: 'ein dagur',
            dd: '%d dagar',
            M: 'ein mánaði',
            MM: '%d mánaðir',
            y: 'eitt ár',
            yy: '%d ár'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('fr-ca', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Aujourd\u2019hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, a) {
            switch (a) {
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
                return e + (1 === e ? 're' : 'e');
            }
        }
    }), l.defineLocale('fr-ch', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Aujourd\u2019hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, a) {
            switch (a) {
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
                return e + (1 === e ? 're' : 'e');
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('fr', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Aujourd\u2019hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'D':
                return e + (1 === e ? 'er' : '');
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
                return e + (1 === e ? 're' : 'e');
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ws = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'), Es = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
    l.defineLocale('fy', {
        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort: function (e, a) {
            return e ? /-MMM-/.test(a) ? Es[e.month()] : Ws[e.month()] : Ws;
        },
        monthsParseExact: !0,
        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'oer %s',
            past: '%s lyn',
            s: 'in pear sekonden',
            ss: '%d sekonden',
            m: 'ien minút',
            mm: '%d minuten',
            h: 'ien oere',
            hh: '%d oeren',
            d: 'ien dei',
            dd: '%d dagen',
            M: 'ien moanne',
            MM: '%d moannen',
            y: 'ien jier',
            yy: '%d jierren'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
            return e + (1 === e || 8 === e || 20 <= e ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    function As(e, a, t, s) {
        var n = {
            s: [
                'thodde secondanim',
                'thodde second'
            ],
            ss: [
                e + ' secondanim',
                e + ' second'
            ],
            m: [
                'eka mintan',
                'ek minute'
            ],
            mm: [
                e + ' mintanim',
                e + ' mintam'
            ],
            h: [
                'eka horan',
                'ek hor'
            ],
            hh: [
                e + ' horanim',
                e + ' horam'
            ],
            d: [
                'eka disan',
                'ek dis'
            ],
            dd: [
                e + ' disanim',
                e + ' dis'
            ],
            M: [
                'eka mhoinean',
                'ek mhoino'
            ],
            MM: [
                e + ' mhoineanim',
                e + ' mhoine'
            ],
            y: [
                'eka vorsan',
                'ek voros'
            ],
            yy: [
                e + ' vorsanim',
                e + ' vorsam'
            ]
        };
        return a ? n[t][0] : n[t][1];
    }
    l.defineLocale('gd', {
        months: [
            'Am Faoilleach',
            'An Gearran',
            'Am Màrt',
            'An Giblean',
            'An Cèitean',
            'An t-Ògmhios',
            'An t-Iuchar',
            'An Lùnastal',
            'An t-Sultain',
            'An Dàmhair',
            'An t-Samhain',
            'An Dùbhlachd'
        ],
        monthsShort: [
            'Faoi',
            'Gear',
            'Màrt',
            'Gibl',
            'Cèit',
            'Ògmh',
            'Iuch',
            'Lùn',
            'Sult',
            'Dàmh',
            'Samh',
            'Dùbh'
        ],
        monthsParseExact: !0,
        weekdays: [
            'Didòmhnaich',
            'Diluain',
            'Dimàirt',
            'Diciadain',
            'Diardaoin',
            'Dihaoine',
            'Disathairne'
        ],
        weekdaysShort: [
            'Did',
            'Dil',
            'Dim',
            'Dic',
            'Dia',
            'Dih',
            'Dis'
        ],
        weekdaysMin: [
            'Dò',
            'Lu',
            'Mà',
            'Ci',
            'Ar',
            'Ha',
            'Sa'
        ],
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[An-diugh aig] LT',
            nextDay: '[A-màireach aig] LT',
            nextWeek: 'dddd [aig] LT',
            lastDay: '[An-dè aig] LT',
            lastWeek: 'dddd [seo chaidh] [aig] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'ann an %s',
            past: 'bho chionn %s',
            s: 'beagan diogan',
            ss: '%d diogan',
            m: 'mionaid',
            mm: '%d mionaidean',
            h: 'uair',
            hh: '%d uairean',
            d: 'latha',
            dd: '%d latha',
            M: 'mìos',
            MM: '%d mìosan',
            y: 'bliadhna',
            yy: '%d bliadhna'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
            return e + (1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('gl', {
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: function () {
                return '[hoxe ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
            },
            nextDay: function () {
                return '[mañá ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
            },
            nextWeek: function () {
                return 'dddd [' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
            },
            lastDay: function () {
                return '[onte ' + (1 !== this.hours() ? 'á' : 'a') + '] LT';
            },
            lastWeek: function () {
                return '[o] dddd [pasado ' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: function (e) {
                return 0 === e.indexOf('un') ? 'n' + e : 'en ' + e;
            },
            past: 'hai %s',
            s: 'uns segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'unha hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('gom-latn', {
        months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
        monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
        weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'A h:mm [vazta]',
            LTS: 'A h:mm:ss [vazta]',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY A h:mm [vazta]',
            LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
            llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
        },
        calendar: {
            sameDay: '[Aiz] LT',
            nextDay: '[Faleam] LT',
            nextWeek: '[Ieta to] dddd[,] LT',
            lastDay: '[Kal] LT',
            lastWeek: '[Fatlo] dddd[,] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s',
            past: '%s adim',
            s: As,
            ss: As,
            m: As,
            mm: As,
            h: As,
            hh: As,
            d: As,
            dd: As,
            M: As,
            MM: As,
            y: As,
            yy: As
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'D':
                return e + 'er';
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 4
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'rati' === a ? e < 4 ? e : e + 12 : 'sokalli' === a ? e : 'donparam' === a ? 12 < e ? e : e + 12 : 'sanje' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'rati' : e < 12 ? 'sokalli' : e < 16 ? 'donparam' : e < 20 ? 'sanje' : 'rati';
        }
    });
    var Fs = {
            1: '૧',
            2: '૨',
            3: '૩',
            4: '૪',
            5: '૫',
            6: '૬',
            7: '૭',
            8: '૮',
            9: '૯',
            0: '૦'
        }, zs = {
            '૧': '1',
            '૨': '2',
            '૩': '3',
            '૪': '4',
            '૫': '5',
            '૬': '6',
            '૭': '7',
            '૮': '8',
            '૯': '9',
            '૦': '0'
        };
    l.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm વાગ્યે',
            LTS: 'A h:mm:ss વાગ્યે',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
        },
        calendar: {
            sameDay: '[આજ] LT',
            nextDay: '[કાલે] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ગઇકાલે] LT',
            lastWeek: '[પાછલા] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s મા',
            past: '%s પેહલા',
            s: 'અમુક પળો',
            ss: '%d સેકંડ',
            m: 'એક મિનિટ',
            mm: '%d મિનિટ',
            h: 'એક કલાક',
            hh: '%d કલાક',
            d: 'એક દિવસ',
            dd: '%d દિવસ',
            M: 'એક મહિનો',
            MM: '%d મહિનો',
            y: 'એક વર્ષ',
            yy: '%d વર્ષ'
        },
        preparse: function (e) {
            return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function (e) {
                return zs[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Fs[e];
            });
        },
        meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'રાત' === a ? e < 4 ? e : e + 12 : 'સવાર' === a ? e : 'બપોર' === a ? 10 <= e ? e : e + 12 : 'સાંજ' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'રાત' : e < 10 ? 'સવાર' : e < 17 ? 'બપોર' : e < 20 ? 'સાંજ' : 'રાત';
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale('he', {
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו\u05F3_פבר\u05F3_מרץ_אפר\u05F3_מאי_יוני_יולי_אוג\u05F3_ספט\u05F3_אוק\u05F3_נוב\u05F3_דצמ\u05F3'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א\u05F3_ב\u05F3_ג\u05F3_ד\u05F3_ה\u05F3_ו\u05F3_ש\u05F3'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [ב]MMMM YYYY',
            LLL: 'D [ב]MMMM YYYY HH:mm',
            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
            l: 'D/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[היום ב\u05BE]LT',
            nextDay: '[מחר ב\u05BE]LT',
            nextWeek: 'dddd [בשעה] LT',
            lastDay: '[אתמול ב\u05BE]LT',
            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'בעוד %s',
            past: 'לפני %s',
            s: 'מספר שניות',
            ss: '%d שניות',
            m: 'דקה',
            mm: '%d דקות',
            h: 'שעה',
            hh: function (e) {
                return 2 === e ? 'שעתיים' : e + ' שעות';
            },
            d: 'יום',
            dd: function (e) {
                return 2 === e ? 'יומיים' : e + ' ימים';
            },
            M: 'חודש',
            MM: function (e) {
                return 2 === e ? 'חודשיים' : e + ' חודשים';
            },
            y: 'שנה',
            yy: function (e) {
                return 2 === e ? 'שנתיים' : e % 10 == 0 && 10 !== e ? e + ' שנה' : e + ' שנים';
            }
        },
        meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
        isPM: function (e) {
            return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e);
        },
        meridiem: function (e, a, t) {
            return e < 5 ? 'לפנות בוקר' : e < 10 ? 'בבוקר' : e < 12 ? t ? 'לפנה"צ' : 'לפני הצהריים' : e < 18 ? t ? 'אחה"צ' : 'אחרי הצהריים' : 'בערב';
        }
    });
    var Js = {
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९',
            0: '०'
        }, Ns = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0'
        };
    function Rs(e, a, t) {
        var s = e + ' ';
        switch (t) {
        case 'ss':
            return s += 1 === e ? 'sekunda' : 2 === e || 3 === e || 4 === e ? 'sekunde' : 'sekundi';
        case 'm':
            return a ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            return s += 1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta';
        case 'h':
            return a ? 'jedan sat' : 'jednog sata';
        case 'hh':
            return s += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati';
        case 'dd':
            return s += 1 === e ? 'dan' : 'dana';
        case 'MM':
            return s += 1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci';
        case 'yy':
            return s += 1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina';
        }
    }
    l.defineLocale('hi', {
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
            LT: 'A h:mm बजे',
            LTS: 'A h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar: {
            sameDay: '[आज] LT',
            nextDay: '[कल] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[कल] LT',
            lastWeek: '[पिछले] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s में',
            past: '%s पहले',
            s: 'कुछ ही क्षण',
            ss: '%d सेकंड',
            m: 'एक मिनट',
            mm: '%d मिनट',
            h: 'एक घंटा',
            hh: '%d घंटे',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महीने',
            MM: '%d महीने',
            y: 'एक वर्ष',
            yy: '%d वर्ष'
        },
        preparse: function (e) {
            return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
                return Ns[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Js[e];
            });
        },
        meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'रात' === a ? e < 4 ? e : e + 12 : 'सुबह' === a ? e : 'दोपहर' === a ? 10 <= e ? e : e + 12 : 'शाम' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'रात' : e < 10 ? 'सुबह' : e < 17 ? 'दोपहर' : e < 20 ? 'शाम' : 'रात';
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale('hr', {
        months: {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: Rs,
            m: Rs,
            mm: Rs,
            h: Rs,
            hh: Rs,
            d: 'dan',
            dd: Rs,
            M: 'mjesec',
            MM: Rs,
            y: 'godinu',
            yy: Rs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Is = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function Cs(e, a, t, s) {
        var n = e;
        switch (t) {
        case 's':
            return s || a ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return n + (s || a) ? ' másodperc' : ' másodperce';
        case 'm':
            return 'egy' + (s || a ? ' perc' : ' perce');
        case 'mm':
            return n + (s || a ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (s || a ? ' óra' : ' órája');
        case 'hh':
            return n + (s || a ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (s || a ? ' nap' : ' napja');
        case 'dd':
            return n + (s || a ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (s || a ? ' hónap' : ' hónapja');
        case 'MM':
            return n + (s || a ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (s || a ? ' év' : ' éve');
        case 'yy':
            return n + (s || a ? ' év' : ' éve');
        }
        return '';
    }
    function Gs(e) {
        return (e ? '' : '[múlt] ') + '[' + Is[this.day()] + '] LT[-kor]';
    }
    function Us(e) {
        return e % 100 == 11 || e % 10 != 1;
    }
    function Vs(e, a, t, s) {
        var n = e + ' ';
        switch (t) {
        case 's':
            return a || s ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
        case 'ss':
            return Us(e) ? n + (a || s ? 'sekúndur' : 'sekúndum') : n + 'sekúnda';
        case 'm':
            return a ? 'mínúta' : 'mínútu';
        case 'mm':
            return Us(e) ? n + (a || s ? 'mínútur' : 'mínútum') : a ? n + 'mínúta' : n + 'mínútu';
        case 'hh':
            return Us(e) ? n + (a || s ? 'klukkustundir' : 'klukkustundum') : n + 'klukkustund';
        case 'd':
            return a ? 'dagur' : s ? 'dag' : 'degi';
        case 'dd':
            return Us(e) ? a ? n + 'dagar' : n + (s ? 'daga' : 'dögum') : a ? n + 'dagur' : n + (s ? 'dag' : 'degi');
        case 'M':
            return a ? 'mánuður' : s ? 'mánuð' : 'mánuði';
        case 'MM':
            return Us(e) ? a ? n + 'mánuðir' : n + (s ? 'mánuði' : 'mánuðum') : a ? n + 'mánuður' : n + (s ? 'mánuð' : 'mánuði');
        case 'y':
            return a || s ? 'ár' : 'ári';
        case 'yy':
            return Us(e) ? n + (a || s ? 'ár' : 'árum') : n + (a || s ? 'ár' : 'ári');
        }
    }
    l.defineLocale('hu', {
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
            return 'u' === e.charAt(1).toLowerCase();
        },
        meridiem: function (e, a, t) {
            return e < 12 ? !0 === t ? 'de' : 'DE' : !0 === t ? 'du' : 'DU';
        },
        calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: function () {
                return Gs.call(this, !0);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: function () {
                return Gs.call(this, !1);
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: Cs,
            ss: Cs,
            m: Cs,
            mm: Cs,
            h: Cs,
            hh: Cs,
            d: Cs,
            dd: Cs,
            M: Cs,
            MM: Cs,
            y: Cs,
            yy: Cs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('hy-am', {
        months: {
            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
        },
        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY թ.',
            LLL: 'D MMMM YYYY թ., HH:mm',
            LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar: {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function () {
                return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function () {
                return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s հետո',
            past: '%s առաջ',
            s: 'մի քանի վայրկյան',
            ss: '%d վայրկյան',
            m: 'րոպե',
            mm: '%d րոպե',
            h: 'ժամ',
            hh: '%d ժամ',
            d: 'օր',
            dd: '%d օր',
            M: 'ամիս',
            MM: '%d ամիս',
            y: 'տարի',
            yy: '%d տարի'
        },
        meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
        isPM: function (e) {
            return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e);
        },
        meridiem: function (e) {
            return e < 4 ? 'գիշերվա' : e < 12 ? 'առավոտվա' : e < 17 ? 'ցերեկվա' : 'երեկոյան';
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
                return 1 === e ? e + '-ին' : e + '-րդ';
            default:
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('id', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'pagi' === a ? e : 'siang' === a ? 11 <= e ? e : e + 12 : 'sore' === a || 'malam' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 11 ? 'pagi' : e < 15 ? 'siang' : e < 19 ? 'sore' : 'malam';
        },
        calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Besok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kemarin pukul] LT',
            lastWeek: 'dddd [lalu pukul] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dalam %s',
            past: '%s yang lalu',
            s: 'beberapa detik',
            ss: '%d detik',
            m: 'semenit',
            mm: '%d menit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('is', {
        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar: {
            sameDay: '[í dag kl.] LT',
            nextDay: '[á morgun kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[í gær kl.] LT',
            lastWeek: '[síðasta] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'eftir %s',
            past: 'fyrir %s síðan',
            s: Vs,
            ss: Vs,
            m: Vs,
            mm: Vs,
            h: 'klukkustund',
            hh: Vs,
            d: Vs,
            dd: Vs,
            M: Vs,
            MM: Vs,
            y: Vs,
            yy: Vs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('it', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: function (e) {
                return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: 'un\'ora',
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('ja', {
        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日 dddd HH:mm',
            l: 'YYYY/MM/DD',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日(ddd) HH:mm'
        },
        meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
        isPM: function (e) {
            return '午後' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? '午前' : '午後';
        },
        calendar: {
            sameDay: '[今日] LT',
            nextDay: '[明日] LT',
            nextWeek: function (e) {
                return e.week() < this.week() ? '[来週]dddd LT' : 'dddd LT';
            },
            lastDay: '[昨日] LT',
            lastWeek: function (e) {
                return this.week() < e.week() ? '[先週]dddd LT' : 'dddd LT';
            },
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
        ordinal: function (e, a) {
            switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
                return e + '日';
            default:
                return e;
            }
        },
        relativeTime: {
            future: '%s後',
            past: '%s前',
            s: '数秒',
            ss: '%d秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: '1日',
            dd: '%d日',
            M: '1ヶ月',
            MM: '%dヶ月',
            y: '1年',
            yy: '%d年'
        }
    }), l.defineLocale('jv', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'enjing' === a ? e : 'siyang' === a ? 11 <= e ? e : e + 12 : 'sonten' === a || 'ndalu' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 11 ? 'enjing' : e < 15 ? 'siyang' : e < 19 ? 'sonten' : 'ndalu';
        },
        calendar: {
            sameDay: '[Dinten puniko pukul] LT',
            nextDay: '[Mbenjang pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kala wingi pukul] LT',
            lastWeek: 'dddd [kepengker pukul] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'wonten ing %s',
            past: '%s ingkang kepengker',
            s: 'sawetawis detik',
            ss: '%d detik',
            m: 'setunggal menit',
            mm: '%d menit',
            h: 'setunggal jam',
            hh: '%d jam',
            d: 'sedinten',
            dd: '%d dinten',
            M: 'sewulan',
            MM: '%d wulan',
            y: 'setaun',
            yy: '%d taun'
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('ka', {
        months: {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays: {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
            isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
        },
        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
            sameDay: '[დღეს] LT[-ზე]',
            nextDay: '[ხვალ] LT[-ზე]',
            lastDay: '[გუშინ] LT[-ზე]',
            nextWeek: '[შემდეგ] dddd LT[-ზე]',
            lastWeek: '[წინა] dddd LT-ზე',
            sameElse: 'L'
        },
        relativeTime: {
            future: function (e) {
                return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, 'ში') : e + 'ში';
            },
            past: function (e) {
                return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, 'ის წინ') : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, 'წლის წინ') : void 0;
            },
            s: 'რამდენიმე წამი',
            ss: '%d წამი',
            m: 'წუთი',
            mm: '%d წუთი',
            h: 'საათი',
            hh: '%d საათი',
            d: 'დღე',
            dd: '%d დღე',
            M: 'თვე',
            MM: '%d თვე',
            y: 'წელი',
            yy: '%d წელი'
        },
        dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
        ordinal: function (e) {
            return 0 === e ? e : 1 === e ? e + '-ლი' : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? 'მე-' + e : e + '-ე';
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Ks = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші'
    };
    l.defineLocale('kk', {
        months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Бүгін сағат] LT',
            nextDay: '[Ертең сағат] LT',
            nextWeek: 'dddd [сағат] LT',
            lastDay: '[Кеше сағат] LT',
            lastWeek: '[Өткен аптаның] dddd [сағат] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s ішінде',
            past: '%s бұрын',
            s: 'бірнеше секунд',
            ss: '%d секунд',
            m: 'бір минут',
            mm: '%d минут',
            h: 'бір сағат',
            hh: '%d сағат',
            d: 'бір күн',
            dd: '%d күн',
            M: 'бір ай',
            MM: '%d ай',
            y: 'бір жыл',
            yy: '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
        ordinal: function (e) {
            return e + (Ks[e] || Ks[e % 10] || Ks[100 <= e ? 100 : null]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var $s = {
            1: '១',
            2: '២',
            3: '៣',
            4: '៤',
            5: '៥',
            6: '៦',
            7: '៧',
            8: '៨',
            9: '៩',
            0: '០'
        }, Zs = {
            '១': '1',
            '២': '2',
            '៣': '3',
            '៤': '4',
            '៥': '5',
            '៦': '6',
            '៧': '7',
            '៨': '8',
            '៩': '9',
            '០': '0'
        };
    l.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
        isPM: function (e) {
            return 'ល្ងាច' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'ព្រឹក' : 'ល្ងាច';
        },
        calendar: {
            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            ss: '%d វិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ'
        },
        dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
        ordinal: 'ទី%d',
        preparse: function (e) {
            return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function (e) {
                return Zs[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return $s[e];
            });
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Bs = {
            1: '೧',
            2: '೨',
            3: '೩',
            4: '೪',
            5: '೫',
            6: '೬',
            7: '೭',
            8: '೮',
            9: '೯',
            0: '೦'
        }, qs = {
            '೧': '1',
            '೨': '2',
            '೩': '3',
            '೪': '4',
            '೫': '5',
            '೬': '6',
            '೭': '7',
            '೮': '8',
            '೯': '9',
            '೦': '0'
        };
    l.defineLocale('kn', {
        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
            sameDay: '[ಇಂದು] LT',
            nextDay: '[ನಾಳೆ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ನಿನ್ನೆ] LT',
            lastWeek: '[ಕೊನೆಯ] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s ನಂತರ',
            past: '%s ಹಿಂದೆ',
            s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
            ss: '%d ಸೆಕೆಂಡುಗಳು',
            m: 'ಒಂದು ನಿಮಿಷ',
            mm: '%d ನಿಮಿಷ',
            h: 'ಒಂದು ಗಂಟೆ',
            hh: '%d ಗಂಟೆ',
            d: 'ಒಂದು ದಿನ',
            dd: '%d ದಿನ',
            M: 'ಒಂದು ತಿಂಗಳು',
            MM: '%d ತಿಂಗಳು',
            y: 'ಒಂದು ವರ್ಷ',
            yy: '%d ವರ್ಷ'
        },
        preparse: function (e) {
            return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function (e) {
                return qs[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Bs[e];
            });
        },
        meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'ರಾತ್ರಿ' === a ? e < 4 ? e : e + 12 : 'ಬೆಳಿಗ್ಗೆ' === a ? e : 'ಮಧ್ಯಾಹ್ನ' === a ? 10 <= e ? e : e + 12 : 'ಸಂಜೆ' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'ರಾತ್ರಿ' : e < 10 ? 'ಬೆಳಿಗ್ಗೆ' : e < 17 ? 'ಮಧ್ಯಾಹ್ನ' : e < 20 ? 'ಸಂಜೆ' : 'ರಾತ್ರಿ';
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
        ordinal: function (e) {
            return e + 'ನೇ';
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale('ko', {
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY년 MMMM D일 A h:mm',
            LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
            l: 'YYYY.MM.DD.',
            ll: 'YYYY년 MMMM D일',
            lll: 'YYYY년 MMMM D일 A h:mm',
            llll: 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar: {
            sameDay: '오늘 LT',
            nextDay: '내일 LT',
            nextWeek: 'dddd LT',
            lastDay: '어제 LT',
            lastWeek: '지난주 dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s 후',
            past: '%s 전',
            s: '몇 초',
            ss: '%d초',
            m: '1분',
            mm: '%d분',
            h: '한 시간',
            hh: '%d시간',
            d: '하루',
            dd: '%d일',
            M: '한 달',
            MM: '%d달',
            y: '일 년',
            yy: '%d년'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
                return e + '일';
            case 'M':
                return e + '월';
            case 'w':
            case 'W':
                return e + '주';
            default:
                return e;
            }
        },
        meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
        isPM: function (e) {
            return '오후' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? '오전' : '오후';
        }
    });
    var Qs = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү'
    };
    function Xs(e, a, t, s) {
        var n = {
            m: [
                'eng Minutt',
                'enger Minutt'
            ],
            h: [
                'eng Stonn',
                'enger Stonn'
            ],
            d: [
                'een Dag',
                'engem Dag'
            ],
            M: [
                'ee Mount',
                'engem Mount'
            ],
            y: [
                'ee Joer',
                'engem Joer'
            ]
        };
        return a ? n[t][0] : n[t][1];
    }
    function en(e) {
        if (e = parseInt(e, 10), isNaN(e))
            return !1;
        if (e < 0)
            return !0;
        if (e < 10)
            return 4 <= e && e <= 7;
        if (e < 100) {
            var a = e % 10;
            return en(0 === a ? e / 10 : a);
        }
        if (e < 10000) {
            for (; 10 <= e;)
                e /= 10;
            return en(e);
        }
        return en(e /= 1000);
    }
    l.defineLocale('ky', {
        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Бүгүн саат] LT',
            nextDay: '[Эртең саат] LT',
            nextWeek: 'dddd [саат] LT',
            lastDay: '[Кече саат] LT',
            lastWeek: '[Өткен аптанын] dddd [күнү] [саат] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s ичинде',
            past: '%s мурун',
            s: 'бирнече секунд',
            ss: '%d секунд',
            m: 'бир мүнөт',
            mm: '%d мүнөт',
            h: 'бир саат',
            hh: '%d саат',
            d: 'бир күн',
            dd: '%d күн',
            M: 'бир ай',
            MM: '%d ай',
            y: 'бир жыл',
            yy: '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
        ordinal: function (e) {
            return e + (Qs[e] || Qs[e % 10] || Qs[100 <= e ? 100 : null]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 2:
                case 4:
                    return '[Leschten] dddd [um] LT';
                default:
                    return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime: {
            future: function (e) {
                return en(e.substr(0, e.indexOf(' '))) ? 'a ' + e : 'an ' + e;
            },
            past: function (e) {
                return en(e.substr(0, e.indexOf(' '))) ? 'viru ' + e : 'virun ' + e;
            },
            s: 'e puer Sekonnen',
            ss: '%d Sekonnen',
            m: Xs,
            mm: '%d Minutten',
            h: Xs,
            hh: '%d Stonnen',
            d: Xs,
            dd: '%d Deeg',
            M: Xs,
            MM: '%d Méint',
            y: Xs,
            yy: '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('lo', {
        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
        isPM: function (e) {
            return 'ຕອນແລງ' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'ຕອນເຊົ້າ' : 'ຕອນແລງ';
        },
        calendar: {
            sameDay: '[ມື້ນີ້ເວລາ] LT',
            nextDay: '[ມື້ອື່ນເວລາ] LT',
            nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
            lastDay: '[ມື້ວານນີ້ເວລາ] LT',
            lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'ອີກ %s',
            past: '%sຜ່ານມາ',
            s: 'ບໍ່ເທົ່າໃດວິນາທີ',
            ss: '%d ວິນາທີ',
            m: '1 ນາທີ',
            mm: '%d ນາທີ',
            h: '1 ຊົ່ວໂມງ',
            hh: '%d ຊົ່ວໂມງ',
            d: '1 ມື້',
            dd: '%d ມື້',
            M: '1 ເດືອນ',
            MM: '%d ເດືອນ',
            y: '1 ປີ',
            yy: '%d ປີ'
        },
        dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
        ordinal: function (e) {
            return 'ທີ່' + e;
        }
    });
    var an = {
        ss: 'sekundė_sekundžių_sekundes',
        m: 'minutė_minutės_minutę',
        mm: 'minutės_minučių_minutes',
        h: 'valanda_valandos_valandą',
        hh: 'valandos_valandų_valandas',
        d: 'diena_dienos_dieną',
        dd: 'dienos_dienų_dienas',
        M: 'mėnuo_mėnesio_mėnesį',
        MM: 'mėnesiai_mėnesių_mėnesius',
        y: 'metai_metų_metus',
        yy: 'metai_metų_metus'
    };
    function tn(e, a, t, s) {
        return a ? nn(t)[0] : s ? nn(t)[1] : nn(t)[2];
    }
    function sn(e) {
        return e % 10 == 0 || 10 < e && e < 20;
    }
    function nn(e) {
        return an[e].split('_');
    }
    function dn(e, a, t, s) {
        var n = e + ' ';
        return 1 === e ? n + tn(0, a, t[0], s) : a ? n + (sn(e) ? nn(t)[1] : nn(t)[0]) : s ? n + nn(t)[1] : n + (sn(e) ? nn(t)[1] : nn(t)[2]);
    }
    l.defineLocale('lt', {
        months: {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY [m.] MMMM D [d.]',
            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l: 'YYYY-MM-DD',
            ll: 'YYYY [m.] MMMM D [d.]',
            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar: {
            sameDay: '[Šiandien] LT',
            nextDay: '[Rytoj] LT',
            nextWeek: 'dddd LT',
            lastDay: '[Vakar] LT',
            lastWeek: '[Praėjusį] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'po %s',
            past: 'prieš %s',
            s: function (e, a, t, s) {
                return a ? 'kelios sekundės' : s ? 'kelių sekundžių' : 'kelias sekundes';
            },
            ss: dn,
            m: tn,
            mm: dn,
            h: tn,
            hh: dn,
            d: tn,
            dd: dn,
            M: tn,
            MM: dn,
            y: tn,
            yy: dn
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
            return e + '-oji';
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var rn = {
        ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        h: 'stundas_stundām_stunda_stundas'.split('_'),
        hh: 'stundas_stundām_stunda_stundas'.split('_'),
        d: 'dienas_dienām_diena_dienas'.split('_'),
        dd: 'dienas_dienām_diena_dienas'.split('_'),
        M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        y: 'gada_gadiem_gads_gadi'.split('_'),
        yy: 'gada_gadiem_gads_gadi'.split('_')
    };
    function _n(e, a, t) {
        return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1];
    }
    function on(e, a, t) {
        return e + ' ' + _n(rn[t], e, a);
    }
    function mn(e, a, t) {
        return _n(rn[t], e, a);
    }
    l.defineLocale('lv', {
        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY.',
            LL: 'YYYY. [gada] D. MMMM',
            LLL: 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar: {
            sameDay: '[Šodien pulksten] LT',
            nextDay: '[Rīt pulksten] LT',
            nextWeek: 'dddd [pulksten] LT',
            lastDay: '[Vakar pulksten] LT',
            lastWeek: '[Pagājušā] dddd [pulksten] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'pēc %s',
            past: 'pirms %s',
            s: function (e, a) {
                return a ? 'dažas sekundes' : 'dažām sekundēm';
            },
            ss: on,
            m: mn,
            mm: on,
            h: mn,
            hh: on,
            d: mn,
            dd: on,
            M: mn,
            MM: on,
            y: mn,
            yy: on
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
    var un = {
        words: {
            ss: [
                'sekund',
                'sekunda',
                'sekundi'
            ],
            m: [
                'jedan minut',
                'jednog minuta'
            ],
            mm: [
                'minut',
                'minuta',
                'minuta'
            ],
            h: [
                'jedan sat',
                'jednog sata'
            ],
            hh: [
                'sat',
                'sata',
                'sati'
            ],
            dd: [
                'dan',
                'dana',
                'dana'
            ],
            MM: [
                'mjesec',
                'mjeseca',
                'mjeseci'
            ],
            yy: [
                'godina',
                'godine',
                'godina'
            ]
        },
        correctGrammaticalCase: function (e, a) {
            return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
        },
        translate: function (e, a, t) {
            var s = un.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + ' ' + un.correctGrammaticalCase(e, s);
        }
    };
    function ln(e, a, t, s) {
        switch (t) {
        case 's':
            return a ? 'хэдхэн секунд' : 'хэдхэн секундын';
        case 'ss':
            return e + (a ? ' секунд' : ' секундын');
        case 'm':
        case 'mm':
            return e + (a ? ' минут' : ' минутын');
        case 'h':
        case 'hh':
            return e + (a ? ' цаг' : ' цагийн');
        case 'd':
        case 'dd':
            return e + (a ? ' өдөр' : ' өдрийн');
        case 'M':
        case 'MM':
            return e + (a ? ' сар' : ' сарын');
        case 'y':
        case 'yy':
            return e + (a ? ' жил' : ' жилийн');
        default:
            return e;
        }
    }
    l.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay: '[juče u] LT',
            lastWeek: function () {
                return [
                    '[prošle] [nedjelje] [u] LT',
                    '[prošlog] [ponedjeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srijede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ][this.day()];
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'nekoliko sekundi',
            ss: un.translate,
            m: un.translate,
            mm: un.translate,
            h: un.translate,
            hh: un.translate,
            d: 'dan',
            dd: un.translate,
            M: 'mjesec',
            MM: un.translate,
            y: 'godinu',
            yy: un.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [i] HH:mm',
            LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
        },
        calendar: {
            sameDay: '[i teie mahana, i] LT',
            nextDay: '[apopo i] LT',
            nextWeek: 'dddd [i] LT',
            lastDay: '[inanahi i] LT',
            lastWeek: 'dddd [whakamutunga i] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i roto i %s',
            past: '%s i mua',
            s: 'te hēkona ruarua',
            ss: '%d hēkona',
            m: 'he meneti',
            mm: '%d meneti',
            h: 'te haora',
            hh: '%d haora',
            d: 'he ra',
            dd: '%d ra',
            M: 'he marama',
            MM: '%d marama',
            y: 'he tau',
            yy: '%d tau'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('mk', {
        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[Денес во] LT',
            nextDay: '[Утре во] LT',
            nextWeek: '[Во] dddd [во] LT',
            lastDay: '[Вчера во] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[Изминатата] dddd [во] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[Изминатиот] dddd [во] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'после %s',
            past: 'пред %s',
            s: 'неколку секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дена',
            M: 'месец',
            MM: '%d месеци',
            y: 'година',
            yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
        ordinal: function (e) {
            var a = e % 10, t = e % 100;
            return 0 === e ? e + '-ев' : 0 === t ? e + '-ен' : 10 < t && t < 20 ? e + '-ти' : 1 === a ? e + '-ви' : 2 === a ? e + '-ри' : 7 === a || 8 === a ? e + '-ми' : e + '-ти';
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('ml', {
        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm -നു',
            LTS: 'A h:mm:ss -നു',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm -നു',
            LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar: {
            sameDay: '[ഇന്ന്] LT',
            nextDay: '[നാളെ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ഇന്നലെ] LT',
            lastWeek: '[കഴിഞ്ഞ] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s കഴിഞ്ഞ്',
            past: '%s മുൻപ്',
            s: 'അൽപ നിമിഷങ്ങൾ',
            ss: '%d സെക്കൻഡ്',
            m: 'ഒരു മിനിറ്റ്',
            mm: '%d മിനിറ്റ്',
            h: 'ഒരു മണിക്കൂർ',
            hh: '%d മണിക്കൂർ',
            d: 'ഒരു ദിവസം',
            dd: '%d ദിവസം',
            M: 'ഒരു മാസം',
            MM: '%d മാസം',
            y: 'ഒരു വർഷം',
            yy: '%d വർഷം'
        },
        meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'രാത്രി' === a && 4 <= e || 'ഉച്ച കഴിഞ്ഞ്' === a || 'വൈകുന്നേരം' === a ? e + 12 : e;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'രാത്രി' : e < 12 ? 'രാവിലെ' : e < 17 ? 'ഉച്ച കഴിഞ്ഞ്' : e < 20 ? 'വൈകുന്നേരം' : 'രാത്രി';
        }
    }), l.defineLocale('mn', {
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY оны MMMMын D',
            LLL: 'YYYY оны MMMMын D HH:mm',
            LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
        isPM: function (e) {
            return 'ҮХ' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'ҮӨ' : 'ҮХ';
        },
        calendar: {
            sameDay: '[Өнөөдөр] LT',
            nextDay: '[Маргааш] LT',
            nextWeek: '[Ирэх] dddd LT',
            lastDay: '[Өчигдөр] LT',
            lastWeek: '[Өнгөрсөн] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s дараа',
            past: '%s өмнө',
            s: ln,
            ss: ln,
            m: ln,
            mm: ln,
            h: ln,
            hh: ln,
            d: ln,
            dd: ln,
            M: ln,
            MM: ln,
            y: ln,
            yy: ln
        },
        dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
        ordinal: function (e, a) {
            switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
                return e + ' өдөр';
            default:
                return e;
            }
        }
    });
    var Mn = {
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९',
            0: '०'
        }, hn = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0'
        };
    function Ln(e, a, t, s) {
        var n = '';
        if (a)
            switch (t) {
            case 's':
                n = 'काही सेकंद';
                break;
            case 'ss':
                n = '%d सेकंद';
                break;
            case 'm':
                n = 'एक मिनिट';
                break;
            case 'mm':
                n = '%d मिनिटे';
                break;
            case 'h':
                n = 'एक तास';
                break;
            case 'hh':
                n = '%d तास';
                break;
            case 'd':
                n = 'एक दिवस';
                break;
            case 'dd':
                n = '%d दिवस';
                break;
            case 'M':
                n = 'एक महिना';
                break;
            case 'MM':
                n = '%d महिने';
                break;
            case 'y':
                n = 'एक वर्ष';
                break;
            case 'yy':
                n = '%d वर्षे';
                break;
            }
        else
            switch (t) {
            case 's':
                n = 'काही सेकंदां';
                break;
            case 'ss':
                n = '%d सेकंदां';
                break;
            case 'm':
                n = 'एका मिनिटा';
                break;
            case 'mm':
                n = '%d मिनिटां';
                break;
            case 'h':
                n = 'एका तासा';
                break;
            case 'hh':
                n = '%d तासां';
                break;
            case 'd':
                n = 'एका दिवसा';
                break;
            case 'dd':
                n = '%d दिवसां';
                break;
            case 'M':
                n = 'एका महिन्या';
                break;
            case 'MM':
                n = '%d महिन्यां';
                break;
            case 'y':
                n = 'एका वर्षा';
                break;
            case 'yy':
                n = '%d वर्षां';
                break;
            }
        return n.replace(/%d/i, e);
    }
    l.defineLocale('mr', {
        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
            LT: 'A h:mm वाजता',
            LTS: 'A h:mm:ss वाजता',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm वाजता',
            LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar: {
            sameDay: '[आज] LT',
            nextDay: '[उद्या] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: Ln,
            ss: Ln,
            m: Ln,
            mm: Ln,
            h: Ln,
            hh: Ln,
            d: Ln,
            dd: Ln,
            M: Ln,
            MM: Ln,
            y: Ln,
            yy: Ln
        },
        preparse: function (e) {
            return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
                return hn[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Mn[e];
            });
        },
        meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'रात्री' === a ? e < 4 ? e : e + 12 : 'सकाळी' === a ? e : 'दुपारी' === a ? 10 <= e ? e : e + 12 : 'सायंकाळी' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'रात्री' : e < 10 ? 'सकाळी' : e < 17 ? 'दुपारी' : e < 20 ? 'सायंकाळी' : 'रात्री';
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale('ms-my', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'pagi' === a ? e : 'tengahari' === a ? 11 <= e ? e : e + 12 : 'petang' === a || 'malam' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
        },
        calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('ms', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'pagi' === a ? e : 'tengahari' === a ? 11 <= e ? e : e + 12 : 'petang' === a || 'malam' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
        },
        calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('mt', {
        months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Illum fil-]LT',
            nextDay: '[Għada fil-]LT',
            nextWeek: 'dddd [fil-]LT',
            lastDay: '[Il-bieraħ fil-]LT',
            lastWeek: 'dddd [li għadda] [fil-]LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'f\u2019 %s',
            past: '%s ilu',
            s: 'ftit sekondi',
            ss: '%d sekondi',
            m: 'minuta',
            mm: '%d minuti',
            h: 'siegħa',
            hh: '%d siegħat',
            d: 'ġurnata',
            dd: '%d ġranet',
            M: 'xahar',
            MM: '%d xhur',
            y: 'sena',
            yy: '%d sni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº',
        week: {
            dow: 1,
            doy: 4
        }
    });
    var cn = {
            1: '၁',
            2: '၂',
            3: '၃',
            4: '၄',
            5: '၅',
            6: '၆',
            7: '၇',
            8: '၈',
            9: '၉',
            0: '၀'
        }, Yn = {
            '၁': '1',
            '၂': '2',
            '၃': '3',
            '၄': '4',
            '၅': '5',
            '၆': '6',
            '၇': '7',
            '၈': '8',
            '၉': '9',
            '၀': '0'
        };
    l.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            ss: '%d စက္ကန့်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်'
        },
        preparse: function (e) {
            return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function (e) {
                return Yn[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return cn[e];
            });
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('nb', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'noen sekunder',
            ss: '%d sekunder',
            m: 'ett minutt',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dager',
            M: 'en måned',
            MM: '%d måneder',
            y: 'ett år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
    var yn = {
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९',
            0: '०'
        }, fn = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0'
        };
    l.defineLocale('ne', {
        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'Aको h:mm बजे',
            LTS: 'Aको h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, Aको h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function (e) {
            return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
                return fn[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return yn[e];
            });
        },
        meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'राति' === a ? e < 4 ? e : e + 12 : 'बिहान' === a ? e : 'दिउँसो' === a ? 10 <= e ? e : e + 12 : 'साँझ' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 3 ? 'राति' : e < 12 ? 'बिहान' : e < 16 ? 'दिउँसो' : e < 20 ? 'साँझ' : 'राति';
        },
        calendar: {
            sameDay: '[आज] LT',
            nextDay: '[भोलि] LT',
            nextWeek: '[आउँदो] dddd[,] LT',
            lastDay: '[हिजो] LT',
            lastWeek: '[गएको] dddd[,] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sमा',
            past: '%s अगाडि',
            s: 'केही क्षण',
            ss: '%d सेकेण्ड',
            m: 'एक मिनेट',
            mm: '%d मिनेट',
            h: 'एक घण्टा',
            hh: '%d घण्टा',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महिना',
            MM: '%d महिना',
            y: 'एक बर्ष',
            yy: '%d बर्ष'
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var kn = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), pn = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'), Dn = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i
        ], Tn = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    l.defineLocale('nl-be', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function (e, a) {
            return e ? /-MMM-/.test(a) ? pn[e.month()] : kn[e.month()] : kn;
        },
        monthsRegex: Tn,
        monthsShortRegex: Tn,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: Dn,
        longMonthsParse: Dn,
        shortMonthsParse: Dn,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
            return e + (1 === e || 8 === e || 20 <= e ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var gn = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), wn = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'), vn = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i
        ], Sn = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    l.defineLocale('nl', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function (e, a) {
            return e ? /-MMM-/.test(a) ? wn[e.month()] : gn[e.month()] : gn;
        },
        monthsRegex: Sn,
        monthsShortRegex: Sn,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: vn,
        longMonthsParse: vn,
        shortMonthsParse: vn,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
            return e + (1 === e || 8 === e || 20 <= e ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('nn', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: '%s sidan',
            s: 'nokre sekund',
            ss: '%d sekund',
            m: 'eit minutt',
            mm: '%d minutt',
            h: 'ein time',
            hh: '%d timar',
            d: 'ein dag',
            dd: '%d dagar',
            M: 'ein månad',
            MM: '%d månader',
            y: 'eit år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Hn = {
            1: '੧',
            2: '੨',
            3: '੩',
            4: '੪',
            5: '੫',
            6: '੬',
            7: '੭',
            8: '੮',
            9: '੯',
            0: '੦'
        }, bn = {
            '੧': '1',
            '੨': '2',
            '੩': '3',
            '੪': '4',
            '੫': '5',
            '੬': '6',
            '੭': '7',
            '੮': '8',
            '੯': '9',
            '੦': '0'
        };
    l.defineLocale('pa-in', {
        months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm ਵਜੇ',
            LTS: 'A h:mm:ss ਵਜੇ',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
            LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
        },
        calendar: {
            sameDay: '[ਅਜ] LT',
            nextDay: '[ਕਲ] LT',
            nextWeek: '[ਅਗਲਾ] dddd, LT',
            lastDay: '[ਕਲ] LT',
            lastWeek: '[ਪਿਛਲੇ] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s ਵਿੱਚ',
            past: '%s ਪਿਛਲੇ',
            s: 'ਕੁਝ ਸਕਿੰਟ',
            ss: '%d ਸਕਿੰਟ',
            m: 'ਇਕ ਮਿੰਟ',
            mm: '%d ਮਿੰਟ',
            h: 'ਇੱਕ ਘੰਟਾ',
            hh: '%d ਘੰਟੇ',
            d: 'ਇੱਕ ਦਿਨ',
            dd: '%d ਦਿਨ',
            M: 'ਇੱਕ ਮਹੀਨਾ',
            MM: '%d ਮਹੀਨੇ',
            y: 'ਇੱਕ ਸਾਲ',
            yy: '%d ਸਾਲ'
        },
        preparse: function (e) {
            return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function (e) {
                return bn[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Hn[e];
            });
        },
        meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'ਰਾਤ' === a ? e < 4 ? e : e + 12 : 'ਸਵੇਰ' === a ? e : 'ਦੁਪਹਿਰ' === a ? 10 <= e ? e : e + 12 : 'ਸ਼ਾਮ' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'ਰਾਤ' : e < 10 ? 'ਸਵੇਰ' : e < 17 ? 'ਦੁਪਹਿਰ' : e < 20 ? 'ਸ਼ਾਮ' : 'ਰਾਤ';
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var jn = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'), xn = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function Pn(e) {
        return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1;
    }
    function On(e, a, t) {
        var s = e + ' ';
        switch (t) {
        case 'ss':
            return s + (Pn(e) ? 'sekundy' : 'sekund');
        case 'm':
            return a ? 'minuta' : 'minutę';
        case 'mm':
            return s + (Pn(e) ? 'minuty' : 'minut');
        case 'h':
            return a ? 'godzina' : 'godzinę';
        case 'hh':
            return s + (Pn(e) ? 'godziny' : 'godzin');
        case 'MM':
            return s + (Pn(e) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return s + (Pn(e) ? 'lata' : 'lat');
        }
    }
    function Wn(e, a, t) {
        var s = ' ';
        return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (s = ' de '), e + s + {
            ss: 'secunde',
            mm: 'minute',
            hh: 'ore',
            dd: 'zile',
            MM: 'luni',
            yy: 'ani'
        }[t];
    }
    function En(e, a, t) {
        var s, n;
        return 'm' === t ? a ? 'минута' : 'минуту' : e + ' ' + (s = +e, n = {
            ss: a ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: a ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            hh: 'час_часа_часов',
            dd: 'день_дня_дней',
            MM: 'месяц_месяца_месяцев',
            yy: 'год_года_лет'
        }[t].split('_'), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
    }
    l.defineLocale('pl', {
        months: function (e, a) {
            return e ? '' === a ? '(' + xn[e.month()] + '|' + jn[e.month()] + ')' : /D MMMM/.test(a) ? xn[e.month()] : jn[e.month()] : jn;
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[W niedzielę o] LT';
                case 2:
                    return '[We wtorek o] LT';
                case 3:
                    return '[W środę o] LT';
                case 6:
                    return '[W sobotę o] LT';
                default:
                    return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            ss: On,
            m: On,
            mm: On,
            h: On,
            hh: On,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: On,
            y: 'rok',
            yy: On
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('pt-br', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'poucos segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº'
    }), l.defineLocale('pt', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: '%dº',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('ro', {
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'peste %s',
            past: '%s în urmă',
            s: 'câteva secunde',
            ss: Wn,
            m: 'un minut',
            mm: Wn,
            h: 'o oră',
            hh: Wn,
            d: 'o zi',
            dd: Wn,
            M: 'o lună',
            MM: Wn,
            y: 'un an',
            yy: Wn
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var An = [
        /^\u044f\u043d\u0432/i,
        /^\u0444\u0435\u0432/i,
        /^\u043c\u0430\u0440/i,
        /^\u0430\u043f\u0440/i,
        /^\u043c\u0430[\u0439\u044f]/i,
        /^\u0438\u044e\u043d/i,
        /^\u0438\u044e\u043b/i,
        /^\u0430\u0432\u0433/i,
        /^\u0441\u0435\u043d/i,
        /^\u043e\u043a\u0442/i,
        /^\u043d\u043e\u044f/i,
        /^\u0434\u0435\u043a/i
    ];
    l.defineLocale('ru', {
        months: {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort: {
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays: {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: An,
        longMonthsParse: An,
        shortMonthsParse: An,
        monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
        monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
        monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
        monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., H:mm',
            LLLL: 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar: {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function (e) {
                if (e.week() === this.week())
                    return 2 === this.day() ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
                switch (this.day()) {
                case 0:
                    return '[В следующее] dddd, [в] LT';
                case 1:
                case 2:
                case 4:
                    return '[В следующий] dddd, [в] LT';
                case 3:
                case 5:
                case 6:
                    return '[В следующую] dddd, [в] LT';
                }
            },
            lastWeek: function (e) {
                if (e.week() === this.week())
                    return 2 === this.day() ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
                switch (this.day()) {
                case 0:
                    return '[В прошлое] dddd, [в] LT';
                case 1:
                case 2:
                case 4:
                    return '[В прошлый] dddd, [в] LT';
                case 3:
                case 5:
                case 6:
                    return '[В прошлую] dddd, [в] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            ss: En,
            m: En,
            mm: En,
            h: 'час',
            hh: En,
            d: 'день',
            dd: En,
            M: 'месяц',
            MM: En,
            y: 'год',
            yy: En
        },
        meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
        isPM: function (e) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e);
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'M':
            case 'd':
            case 'DDD':
                return e + '-й';
            case 'D':
                return e + '-го';
            case 'w':
            case 'W':
                return e + '-я';
            default:
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Fn = [
            'جنوري',
            'فيبروري',
            'مارچ',
            'اپريل',
            'مئي',
            'جون',
            'جولاءِ',
            'آگسٽ',
            'سيپٽمبر',
            'آڪٽوبر',
            'نومبر',
            'ڊسمبر'
        ], zn = [
            'آچر',
            'سومر',
            'اڱارو',
            'اربع',
            'خميس',
            'جمع',
            'ڇنڇر'
        ];
    l.defineLocale('sd', {
        months: Fn,
        monthsShort: Fn,
        weekdays: zn,
        weekdaysShort: zn,
        weekdaysMin: zn,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd\u060C D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
        isPM: function (e) {
            return 'شام' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'صبح' : 'شام';
        },
        calendar: {
            sameDay: '[اڄ] LT',
            nextDay: '[سڀاڻي] LT',
            nextWeek: 'dddd [اڳين هفتي تي] LT',
            lastDay: '[ڪالهه] LT',
            lastWeek: '[گزريل هفتي] dddd [تي] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s پوء',
            past: '%s اڳ',
            s: 'چند سيڪنڊ',
            ss: '%d سيڪنڊ',
            m: 'هڪ منٽ',
            mm: '%d منٽ',
            h: 'هڪ ڪلاڪ',
            hh: '%d ڪلاڪ',
            d: 'هڪ ڏينهن',
            dd: '%d ڏينهن',
            M: 'هڪ مهينو',
            MM: '%d مهينا',
            y: 'هڪ سال',
            yy: '%d سال'
        },
        preparse: function (e) {
            return e.replace(/\u060c/g, ',');
        },
        postformat: function (e) {
            return e.replace(/,/g, '\u060C');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('se', {
        months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'MMMM D. [b.] YYYY',
            LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar: {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s geažes',
            past: 'maŋit %s',
            s: 'moadde sekunddat',
            ss: '%d sekunddat',
            m: 'okta minuhta',
            mm: '%d minuhtat',
            h: 'okta diimmu',
            hh: '%d diimmut',
            d: 'okta beaivi',
            dd: '%d beaivvit',
            M: 'okta mánnu',
            MM: '%d mánut',
            y: 'okta jahki',
            yy: '%d jagit'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('si', {
        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'a h:mm',
            LTS: 'a h:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY MMMM D',
            LLL: 'YYYY MMMM D, a h:mm',
            LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar: {
            sameDay: '[අද] LT[ට]',
            nextDay: '[හෙට] LT[ට]',
            nextWeek: 'dddd LT[ට]',
            lastDay: '[ඊයේ] LT[ට]',
            lastWeek: '[පසුගිය] dddd LT[ට]',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sකින්',
            past: '%sකට පෙර',
            s: 'තත්පර කිහිපය',
            ss: 'තත්පර %d',
            m: 'මිනිත්තුව',
            mm: 'මිනිත්තු %d',
            h: 'පැය',
            hh: 'පැය %d',
            d: 'දිනය',
            dd: 'දින %d',
            M: 'මාසය',
            MM: 'මාස %d',
            y: 'වසර',
            yy: 'වසර %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
        ordinal: function (e) {
            return e + ' වැනි';
        },
        meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
        isPM: function (e) {
            return 'ප.ව.' === e || 'පස් වරු' === e;
        },
        meridiem: function (e, a, t) {
            return 11 < e ? t ? 'ප.ව.' : 'පස් වරු' : t ? 'පෙ.ව.' : 'පෙර වරු';
        }
    });
    var Jn = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'), Nn = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function Rn(e) {
        return 1 < e && e < 5;
    }
    function In(e, a, t, s) {
        var n = e + ' ';
        switch (t) {
        case 's':
            return a || s ? 'pár sekúnd' : 'pár sekundami';
        case 'ss':
            return a || s ? n + (Rn(e) ? 'sekundy' : 'sekúnd') : n + 'sekundami';
            break;
        case 'm':
            return a ? 'minúta' : s ? 'minútu' : 'minútou';
        case 'mm':
            return a || s ? n + (Rn(e) ? 'minúty' : 'minút') : n + 'minútami';
            break;
        case 'h':
            return a ? 'hodina' : s ? 'hodinu' : 'hodinou';
        case 'hh':
            return a || s ? n + (Rn(e) ? 'hodiny' : 'hodín') : n + 'hodinami';
            break;
        case 'd':
            return a || s ? 'deň' : 'dňom';
        case 'dd':
            return a || s ? n + (Rn(e) ? 'dni' : 'dní') : n + 'dňami';
            break;
        case 'M':
            return a || s ? 'mesiac' : 'mesiacom';
        case 'MM':
            return a || s ? n + (Rn(e) ? 'mesiace' : 'mesiacov') : n + 'mesiacmi';
            break;
        case 'y':
            return a || s ? 'rok' : 'rokom';
        case 'yy':
            return a || s ? n + (Rn(e) ? 'roky' : 'rokov') : n + 'rokmi';
            break;
        }
    }
    function Cn(e, a, t, s) {
        var n = e + ' ';
        switch (t) {
        case 's':
            return a || s ? 'nekaj sekund' : 'nekaj sekundami';
        case 'ss':
            return n += 1 === e ? a ? 'sekundo' : 'sekundi' : 2 === e ? a || s ? 'sekundi' : 'sekundah' : e < 5 ? a || s ? 'sekunde' : 'sekundah' : 'sekund';
        case 'm':
            return a ? 'ena minuta' : 'eno minuto';
        case 'mm':
            return n += 1 === e ? a ? 'minuta' : 'minuto' : 2 === e ? a || s ? 'minuti' : 'minutama' : e < 5 ? a || s ? 'minute' : 'minutami' : a || s ? 'minut' : 'minutami';
        case 'h':
            return a ? 'ena ura' : 'eno uro';
        case 'hh':
            return n += 1 === e ? a ? 'ura' : 'uro' : 2 === e ? a || s ? 'uri' : 'urama' : e < 5 ? a || s ? 'ure' : 'urami' : a || s ? 'ur' : 'urami';
        case 'd':
            return a || s ? 'en dan' : 'enim dnem';
        case 'dd':
            return n += 1 === e ? a || s ? 'dan' : 'dnem' : 2 === e ? a || s ? 'dni' : 'dnevoma' : a || s ? 'dni' : 'dnevi';
        case 'M':
            return a || s ? 'en mesec' : 'enim mesecem';
        case 'MM':
            return n += 1 === e ? a || s ? 'mesec' : 'mesecem' : 2 === e ? a || s ? 'meseca' : 'mesecema' : e < 5 ? a || s ? 'mesece' : 'meseci' : a || s ? 'mesecev' : 'meseci';
        case 'y':
            return a || s ? 'eno leto' : 'enim letom';
        case 'yy':
            return n += 1 === e ? a || s ? 'leto' : 'letom' : 2 === e ? a || s ? 'leti' : 'letoma' : e < 5 ? a || s ? 'leta' : 'leti' : a || s ? 'let' : 'leti';
        }
    }
    l.defineLocale('sk', {
        months: Jn,
        monthsShort: Nn,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v nedeľu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo štvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                    return '[minulý] dddd [o] LT';
                case 3:
                    return '[minulú stredu o] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [o] LT';
                case 6:
                    return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'pred %s',
            s: In,
            ss: In,
            m: In,
            mm: In,
            h: In,
            hh: In,
            d: In,
            dd: In,
            M: In,
            MM: In,
            y: In,
            yy: In
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
                }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: Cn,
            ss: Cn,
            m: Cn,
            mm: Cn,
            h: Cn,
            hh: Cn,
            d: Cn,
            dd: Cn,
            M: Cn,
            MM: Cn,
            y: Cn,
            yy: Cn
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('sq', {
        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function (e) {
            return 'M' === e.charAt(0);
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'PD' : 'MD';
        },
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Sot në] LT',
            nextDay: '[Nesër në] LT',
            nextWeek: 'dddd [në] LT',
            lastDay: '[Dje në] LT',
            lastWeek: 'dddd [e kaluar në] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'në %s',
            past: '%s më parë',
            s: 'disa sekonda',
            ss: '%d sekonda',
            m: 'një minutë',
            mm: '%d minuta',
            h: 'një orë',
            hh: '%d orë',
            d: 'një ditë',
            dd: '%d ditë',
            M: 'një muaj',
            MM: '%d muaj',
            y: 'një vit',
            yy: '%d vite'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Gn = {
        words: {
            ss: [
                'секунда',
                'секунде',
                'секунди'
            ],
            m: [
                'један минут',
                'једне минуте'
            ],
            mm: [
                'минут',
                'минуте',
                'минута'
            ],
            h: [
                'један сат',
                'једног сата'
            ],
            hh: [
                'сат',
                'сата',
                'сати'
            ],
            dd: [
                'дан',
                'дана',
                'дана'
            ],
            MM: [
                'месец',
                'месеца',
                'месеци'
            ],
            yy: [
                'година',
                'године',
                'година'
            ]
        },
        correctGrammaticalCase: function (e, a) {
            return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
        },
        translate: function (e, a, t) {
            var s = Gn.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + ' ' + Gn.correctGrammaticalCase(e, s);
        }
    };
    l.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[данас у] LT',
            nextDay: '[сутра у] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[у] [недељу] [у] LT';
                case 3:
                    return '[у] [среду] [у] LT';
                case 6:
                    return '[у] [суботу] [у] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[у] dddd [у] LT';
                }
            },
            lastDay: '[јуче у] LT',
            lastWeek: function () {
                return [
                    '[прошле] [недеље] [у] LT',
                    '[прошлог] [понедељка] [у] LT',
                    '[прошлог] [уторка] [у] LT',
                    '[прошле] [среде] [у] LT',
                    '[прошлог] [четвртка] [у] LT',
                    '[прошлог] [петка] [у] LT',
                    '[прошле] [суботе] [у] LT'
                ][this.day()];
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'за %s',
            past: 'пре %s',
            s: 'неколико секунди',
            ss: Gn.translate,
            m: Gn.translate,
            mm: Gn.translate,
            h: Gn.translate,
            hh: Gn.translate,
            d: 'дан',
            dd: Gn.translate,
            M: 'месец',
            MM: Gn.translate,
            y: 'годину',
            yy: Gn.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Un = {
        words: {
            ss: [
                'sekunda',
                'sekunde',
                'sekundi'
            ],
            m: [
                'jedan minut',
                'jedne minute'
            ],
            mm: [
                'minut',
                'minute',
                'minuta'
            ],
            h: [
                'jedan sat',
                'jednog sata'
            ],
            hh: [
                'sat',
                'sata',
                'sati'
            ],
            dd: [
                'dan',
                'dana',
                'dana'
            ],
            MM: [
                'mesec',
                'meseca',
                'meseci'
            ],
            yy: [
                'godina',
                'godine',
                'godina'
            ]
        },
        correctGrammaticalCase: function (e, a) {
            return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
        },
        translate: function (e, a, t) {
            var s = Un.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + ' ' + Un.correctGrammaticalCase(e, s);
        }
    };
    l.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedelju] [u] LT';
                case 3:
                    return '[u] [sredu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay: '[juče u] LT',
            lastWeek: function () {
                return [
                    '[prošle] [nedelje] [u] LT',
                    '[prošlog] [ponedeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ][this.day()];
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'pre %s',
            s: 'nekoliko sekundi',
            ss: Un.translate,
            m: Un.translate,
            mm: Un.translate,
            h: Un.translate,
            hh: Un.translate,
            d: 'dan',
            dd: Un.translate,
            M: 'mesec',
            MM: Un.translate,
            y: 'godinu',
            yy: Un.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('ss', {
        months: 'Bhimbidvwane_Indlovana_Indlov\'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni'.split('_'),
        monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
            sameDay: '[Namuhla nga] LT',
            nextDay: '[Kusasa nga] LT',
            nextWeek: 'dddd [nga] LT',
            lastDay: '[Itolo nga] LT',
            lastWeek: 'dddd [leliphelile] [nga] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'nga %s',
            past: 'wenteka nga %s',
            s: 'emizuzwana lomcane',
            ss: '%d mzuzwana',
            m: 'umzuzu',
            mm: '%d emizuzu',
            h: 'lihora',
            hh: '%d emahora',
            d: 'lilanga',
            dd: '%d emalanga',
            M: 'inyanga',
            MM: '%d tinyanga',
            y: 'umnyaka',
            yy: '%d iminyaka'
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function (e, a, t) {
            return e < 11 ? 'ekuseni' : e < 15 ? 'emini' : e < 19 ? 'entsambama' : 'ebusuku';
        },
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'ekuseni' === a ? e : 'emini' === a ? 11 <= e ? e : e + 12 : 'entsambama' === a || 'ebusuku' === a ? 0 === e ? 0 : e + 12 : void 0;
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: '%d',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('sv', {
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: 'för %s sedan',
            s: 'några sekunder',
            ss: '%d sekunder',
            m: 'en minut',
            mm: '%d minuter',
            h: 'en timme',
            hh: '%d timmar',
            d: 'en dag',
            dd: '%d dagar',
            M: 'en månad',
            MM: '%d månader',
            y: 'ett år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'e' : 1 === a ? 'a' : 2 === a ? 'a' : 'e');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('sw', {
        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[leo saa] LT',
            nextDay: '[kesho saa] LT',
            nextWeek: '[wiki ijayo] dddd [saat] LT',
            lastDay: '[jana] LT',
            lastWeek: '[wiki iliyopita] dddd [saat] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s baadaye',
            past: 'tokea %s',
            s: 'hivi punde',
            ss: 'sekunde %d',
            m: 'dakika moja',
            mm: 'dakika %d',
            h: 'saa limoja',
            hh: 'masaa %d',
            d: 'siku moja',
            dd: 'masiku %d',
            M: 'mwezi mmoja',
            MM: 'miezi %d',
            y: 'mwaka mmoja',
            yy: 'miaka %d'
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Vn = {
            1: '௧',
            2: '௨',
            3: '௩',
            4: '௪',
            5: '௫',
            6: '௬',
            7: '௭',
            8: '௮',
            9: '௯',
            0: '௦'
        }, Kn = {
            '௧': '1',
            '௨': '2',
            '௩': '3',
            '௪': '4',
            '௫': '5',
            '௬': '6',
            '௭': '7',
            '௮': '8',
            '௯': '9',
            '௦': '0'
        };
    l.defineLocale('ta', {
        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, HH:mm',
            LLLL: 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar: {
            sameDay: '[இன்று] LT',
            nextDay: '[நாளை] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[நேற்று] LT',
            lastWeek: '[கடந்த வாரம்] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s இல்',
            past: '%s முன்',
            s: 'ஒரு சில விநாடிகள்',
            ss: '%d விநாடிகள்',
            m: 'ஒரு நிமிடம்',
            mm: '%d நிமிடங்கள்',
            h: 'ஒரு மணி நேரம்',
            hh: '%d மணி நேரம்',
            d: 'ஒரு நாள்',
            dd: '%d நாட்கள்',
            M: 'ஒரு மாதம்',
            MM: '%d மாதங்கள்',
            y: 'ஒரு வருடம்',
            yy: '%d ஆண்டுகள்'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
        ordinal: function (e) {
            return e + 'வது';
        },
        preparse: function (e) {
            return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function (e) {
                return Kn[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Vn[e];
            });
        },
        meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
        meridiem: function (e, a, t) {
            return e < 2 ? ' யாமம்' : e < 6 ? ' வைகறை' : e < 10 ? ' காலை' : e < 14 ? ' நண்பகல்' : e < 18 ? ' எற்பாடு' : e < 22 ? ' மாலை' : ' யாமம்';
        },
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'யாமம்' === a ? e < 2 ? e : e + 12 : 'வைகறை' === a || 'காலை' === a ? e : 'நண்பகல்' === a && 10 <= e ? e : e + 12;
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale('te', {
        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
            sameDay: '[నేడు] LT',
            nextDay: '[రేపు] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[నిన్న] LT',
            lastWeek: '[గత] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s లో',
            past: '%s క్రితం',
            s: 'కొన్ని క్షణాలు',
            ss: '%d సెకన్లు',
            m: 'ఒక నిమిషం',
            mm: '%d నిమిషాలు',
            h: 'ఒక గంట',
            hh: '%d గంటలు',
            d: 'ఒక రోజు',
            dd: '%d రోజులు',
            M: 'ఒక నెల',
            MM: '%d నెలలు',
            y: 'ఒక సంవత్సరం',
            yy: '%d సంవత్సరాలు'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
        ordinal: '%dవ',
        meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'రాత్రి' === a ? e < 4 ? e : e + 12 : 'ఉదయం' === a ? e : 'మధ్యాహ్నం' === a ? 10 <= e ? e : e + 12 : 'సాయంత్రం' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'రాత్రి' : e < 10 ? 'ఉదయం' : e < 17 ? 'మధ్యాహ్నం' : e < 20 ? 'సాయంత్రం' : 'రాత్రి';
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale('tet', {
        months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Ohin iha] LT',
            nextDay: '[Aban iha] LT',
            nextWeek: 'dddd [iha] LT',
            lastDay: '[Horiseik iha] LT',
            lastWeek: 'dddd [semana kotuk] [iha] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'iha %s',
            past: '%s liuba',
            s: 'minutu balun',
            ss: 'minutu %d',
            m: 'minutu ida',
            mm: 'minutu %d',
            h: 'oras ida',
            hh: 'oras %d',
            d: 'loron ida',
            dd: 'loron %d',
            M: 'fulan ida',
            MM: 'fulan %d',
            y: 'tinan ida',
            yy: 'tinan %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var $n = {
        0: '-ум',
        1: '-ум',
        2: '-юм',
        3: '-юм',
        4: '-ум',
        5: '-ум',
        6: '-ум',
        7: '-ум',
        8: '-ум',
        9: '-ум',
        10: '-ум',
        12: '-ум',
        13: '-ум',
        20: '-ум',
        30: '-юм',
        40: '-ум',
        50: '-ум',
        60: '-ум',
        70: '-ум',
        80: '-ум',
        90: '-ум',
        100: '-ум'
    };
    l.defineLocale('tg', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Имрӯз соати] LT',
            nextDay: '[Пагоҳ соати] LT',
            lastDay: '[Дирӯз соати] LT',
            nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
            lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'баъди %s',
            past: '%s пеш',
            s: 'якчанд сония',
            m: 'як дақиқа',
            mm: '%d дақиқа',
            h: 'як соат',
            hh: '%d соат',
            d: 'як рӯз',
            dd: '%d рӯз',
            M: 'як моҳ',
            MM: '%d моҳ',
            y: 'як сол',
            yy: '%d сол'
        },
        meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'шаб' === a ? e < 4 ? e : e + 12 : 'субҳ' === a ? e : 'рӯз' === a ? 11 <= e ? e : e + 12 : 'бегоҳ' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'шаб' : e < 11 ? 'субҳ' : e < 16 ? 'рӯз' : e < 19 ? 'бегоҳ' : 'шаб';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
        ordinal: function (e) {
            return e + ($n[e] || $n[e % 10] || $n[100 <= e ? 100 : null]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('th', {
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY เวลา H:mm',
            LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
        isPM: function (e) {
            return 'หลังเที่ยง' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'ก่อนเที่ยง' : 'หลังเที่ยง';
        },
        calendar: {
            sameDay: '[วันนี้ เวลา] LT',
            nextDay: '[พรุ่งนี้ เวลา] LT',
            nextWeek: 'dddd[หน้า เวลา] LT',
            lastDay: '[เมื่อวานนี้ เวลา] LT',
            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'อีก %s',
            past: '%sที่แล้ว',
            s: 'ไม่กี่วินาที',
            ss: '%d วินาที',
            m: '1 นาที',
            mm: '%d นาที',
            h: '1 ชั่วโมง',
            hh: '%d ชั่วโมง',
            d: '1 วัน',
            dd: '%d วัน',
            M: '1 เดือน',
            MM: '%d เดือน',
            y: '1 ปี',
            yy: '%d ปี'
        }
    }), l.defineLocale('tl-ph', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'MM/D/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY HH:mm',
            LLLL: 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar: {
            sameDay: 'LT [ngayong araw]',
            nextDay: '[Bukas ng] LT',
            nextWeek: 'LT [sa susunod na] dddd',
            lastDay: 'LT [kahapon]',
            lastWeek: 'LT [noong nakaraang] dddd',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'sa loob ng %s',
            past: '%s ang nakalipas',
            s: 'ilang segundo',
            ss: '%d segundo',
            m: 'isang minuto',
            mm: '%d minuto',
            h: 'isang oras',
            hh: '%d oras',
            d: 'isang araw',
            dd: '%d araw',
            M: 'isang buwan',
            MM: '%d buwan',
            y: 'isang taon',
            yy: '%d taon'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
            return e;
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Zn = 'pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
    function Bn(e, a, t, s) {
        var n = function (e) {
            var a = Math.floor(e % 1000 / 100), t = Math.floor(e % 100 / 10), s = e % 10, n = '';
            0 < a && (n += Zn[a] + 'vatlh');
            0 < t && (n += ('' !== n ? ' ' : '') + Zn[t] + 'maH');
            0 < s && (n += ('' !== n ? ' ' : '') + Zn[s]);
            return '' === n ? 'pagh' : n;
        }(e);
        switch (t) {
        case 'ss':
            return n + ' lup';
        case 'mm':
            return n + ' tup';
        case 'hh':
            return n + ' rep';
        case 'dd':
            return n + ' jaj';
        case 'MM':
            return n + ' jar';
        case 'yy':
            return n + ' DIS';
        }
    }
    l.defineLocale('tlh', {
        months: 'tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019'.split('_'),
        monthsShort: 'jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019'.split('_'),
        monthsParseExact: !0,
        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[DaHjaj] LT',
            nextDay: '[wa\u2019leS] LT',
            nextWeek: 'LLL',
            lastDay: '[wa\u2019Hu\u2019] LT',
            lastWeek: 'LLL',
            sameElse: 'L'
        },
        relativeTime: {
            future: function (e) {
                var a = e;
                return a = -1 !== e.indexOf('jaj') ? a.slice(0, -3) + 'leS' : -1 !== e.indexOf('jar') ? a.slice(0, -3) + 'waQ' : -1 !== e.indexOf('DIS') ? a.slice(0, -3) + 'nem' : a + ' pIq';
            },
            past: function (e) {
                var a = e;
                return a = -1 !== e.indexOf('jaj') ? a.slice(0, -3) + 'Hu\u2019' : -1 !== e.indexOf('jar') ? a.slice(0, -3) + 'wen' : -1 !== e.indexOf('DIS') ? a.slice(0, -3) + 'ben' : a + ' ret';
            },
            s: 'puS lup',
            ss: Bn,
            m: 'wa\u2019 tup',
            mm: Bn,
            h: 'wa\u2019 rep',
            hh: Bn,
            d: 'wa\u2019 jaj',
            dd: Bn,
            M: 'wa\u2019 jar',
            MM: Bn,
            y: 'wa\u2019 DIS',
            yy: Bn
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
    var qn = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };
    function Qn(e, a, t, s) {
        var n = {
            s: [
                'viensas secunds',
                '\'iensas secunds'
            ],
            ss: [
                e + ' secunds',
                e + ' secunds'
            ],
            m: [
                '\'n míut',
                '\'iens míut'
            ],
            mm: [
                e + ' míuts',
                e + ' míuts'
            ],
            h: [
                '\'n þora',
                '\'iensa þora'
            ],
            hh: [
                e + ' þoras',
                e + ' þoras'
            ],
            d: [
                '\'n ziua',
                '\'iensa ziua'
            ],
            dd: [
                e + ' ziuas',
                e + ' ziuas'
            ],
            M: [
                '\'n mes',
                '\'iens mes'
            ],
            MM: [
                e + ' mesen',
                e + ' mesen'
            ],
            y: [
                '\'n ar',
                '\'iens ar'
            ],
            yy: [
                e + ' ars',
                e + ' ars'
            ]
        };
        return s ? n[t][0] : a ? n[t][0] : n[t][1];
    }
    function Xn(e, a, t) {
        var s, n;
        return 'm' === t ? a ? 'хвилина' : 'хвилину' : 'h' === t ? a ? 'година' : 'годину' : e + ' ' + (s = +e, n = {
            ss: a ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
            mm: a ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
            hh: a ? 'година_години_годин' : 'годину_години_годин',
            dd: 'день_дні_днів',
            MM: 'місяць_місяці_місяців',
            yy: 'рік_роки_років'
        }[t].split('_'), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
    }
    function ed(e) {
        return function () {
            return e + 'о' + (11 === this.hours() ? 'б' : '') + '] LT';
        };
    }
    l.defineLocale('tr', {
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[yarın saat] LT',
            nextWeek: '[gelecek] dddd [saat] LT',
            lastDay: '[dün] LT',
            lastWeek: '[geçen] dddd [saat] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s sonra',
            past: '%s önce',
            s: 'birkaç saniye',
            ss: '%d saniye',
            m: 'bir dakika',
            mm: '%d dakika',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir yıl',
            yy: '%d yıl'
        },
        ordinal: function (e, a) {
            switch (a) {
            case 'd':
            case 'D':
            case 'Do':
            case 'DD':
                return e;
            default:
                if (0 === e)
                    return e + '\'ıncı';
                var t = e % 10;
                return e + (qn[t] || qn[e % 100 - t] || qn[100 <= e ? 100 : null]);
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('tzl', {
        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM [dallas] YYYY',
            LLL: 'D. MMMM [dallas] YYYY HH.mm',
            LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function (e) {
            return 'd\'o' === e.toLowerCase();
        },
        meridiem: function (e, a, t) {
            return 11 < e ? t ? 'd\'o' : 'D\'O' : t ? 'd\'a' : 'D\'A';
        },
        calendar: {
            sameDay: '[oxhi à] LT',
            nextDay: '[demà à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[ieiri à] LT',
            lastWeek: '[sür el] dddd [lasteu à] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'osprei %s',
            past: 'ja%s',
            s: Qn,
            ss: Qn,
            m: Qn,
            mm: Qn,
            h: Qn,
            hh: Qn,
            d: Qn,
            dd: Qn,
            M: Qn,
            MM: Qn,
            y: Qn,
            yy: Qn
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('tzm-latn', {
        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dadkh s yan %s',
            past: 'yan %s',
            s: 'imik',
            ss: '%d imik',
            m: 'minuḍ',
            mm: '%d minuḍ',
            h: 'saɛa',
            hh: '%d tassaɛin',
            d: 'ass',
            dd: '%d ossan',
            M: 'ayowr',
            MM: '%d iyyirn',
            y: 'asgas',
            yy: '%d isgasn'
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), l.defineLocale('tzm', {
        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
            nextWeek: 'dddd [ⴴ] LT',
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
            lastWeek: 'dddd [ⴴ] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
            past: 'ⵢⴰⵏ %s',
            s: 'ⵉⵎⵉⴽ',
            ss: '%d ⵉⵎⵉⴽ',
            m: 'ⵎⵉⵏⵓⴺ',
            mm: '%d ⵎⵉⵏⵓⴺ',
            h: 'ⵙⴰⵄⴰ',
            hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
            d: 'ⴰⵙⵙ',
            dd: '%d oⵙⵙⴰⵏ',
            M: 'ⴰⵢoⵓⵔ',
            MM: '%d ⵉⵢⵢⵉⵔⵏ',
            y: 'ⴰⵙⴳⴰⵙ',
            yy: '%d ⵉⵙⴳⴰⵙⵏ'
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), l.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
            LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى\u060C HH:mm',
            LLLL: 'dddd\u060C YYYY-يىلىM-ئاينىڭD-كۈنى\u060C HH:mm'
        },
        meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), 'يېرىم كېچە' === a || 'سەھەر' === a || 'چۈشتىن بۇرۇن' === a ? e : 'چۈشتىن كېيىن' === a || 'كەچ' === a ? e + 12 : 11 <= e ? e : e + 12;
        },
        meridiem: function (e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? 'يېرىم كېچە' : s < 900 ? 'سەھەر' : s < 1130 ? 'چۈشتىن بۇرۇن' : s < 1230 ? 'چۈش' : s < 1800 ? 'چۈشتىن كېيىن' : 'كەچ';
        },
        calendar: {
            sameDay: '[بۈگۈن سائەت] LT',
            nextDay: '[ئەتە سائەت] LT',
            nextWeek: '[كېلەركى] dddd [سائەت] LT',
            lastDay: '[تۆنۈگۈن] LT',
            lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s كېيىن',
            past: '%s بۇرۇن',
            s: 'نەچچە سېكونت',
            ss: '%d سېكونت',
            m: 'بىر مىنۇت',
            mm: '%d مىنۇت',
            h: 'بىر سائەت',
            hh: '%d سائەت',
            d: 'بىر كۈن',
            dd: '%d كۈن',
            M: 'بىر ئاي',
            MM: '%d ئاي',
            y: 'بىر يىل',
            yy: '%d يىل'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
                return e + '-كۈنى';
            case 'w':
            case 'W':
                return e + '-ھەپتە';
            default:
                return e;
            }
        },
        preparse: function (e) {
            return e.replace(/\u060c/g, ',');
        },
        postformat: function (e) {
            return e.replace(/,/g, '\u060C');
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('uk', {
        months: {
            format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
            standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
        },
        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays: function (e, a) {
            var t = {
                nominative: 'неділя_понеділок_вівторок_середа_четвер_п\u2019ятниця_субота'.split('_'),
                accusative: 'неділю_понеділок_вівторок_середу_четвер_п\u2019ятницю_суботу'.split('_'),
                genitive: 'неділі_понеділка_вівторка_середи_четверга_п\u2019ятниці_суботи'.split('_')
            };
            return e ? t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a) ? 'accusative' : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a) ? 'genitive' : 'nominative'][e.day()] : t.nominative;
        },
        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY р.',
            LLL: 'D MMMM YYYY р., HH:mm',
            LLLL: 'dddd, D MMMM YYYY р., HH:mm'
        },
        calendar: {
            sameDay: ed('[Сьогодні '),
            nextDay: ed('[Завтра '),
            lastDay: ed('[Вчора '),
            nextWeek: ed('[У] dddd ['),
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return ed('[Минулої] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                    return ed('[Минулого] dddd [').call(this);
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'за %s',
            past: '%s тому',
            s: 'декілька секунд',
            ss: Xn,
            m: Xn,
            mm: Xn,
            h: 'годину',
            hh: Xn,
            d: 'день',
            dd: Xn,
            M: 'місяць',
            MM: Xn,
            y: 'рік',
            yy: Xn
        },
        meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
        isPM: function (e) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e);
        },
        meridiem: function (e, a, t) {
            return e < 4 ? 'ночі' : e < 12 ? 'ранку' : e < 17 ? 'дня' : 'вечора';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return e + '-й';
            case 'D':
                return e + '-го';
            default:
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var ad = [
            'جنوری',
            'فروری',
            'مارچ',
            'اپریل',
            'مئی',
            'جون',
            'جولائی',
            'اگست',
            'ستمبر',
            'اکتوبر',
            'نومبر',
            'دسمبر'
        ], td = [
            'اتوار',
            'پیر',
            'منگل',
            'بدھ',
            'جمعرات',
            'جمعہ',
            'ہفتہ'
        ];
    return l.defineLocale('ur', {
        months: ad,
        monthsShort: ad,
        weekdays: td,
        weekdaysShort: td,
        weekdaysMin: td,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd\u060C D MMMM YYYY HH:mm'
        },
        meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
        isPM: function (e) {
            return 'شام' === e;
        },
        meridiem: function (e, a, t) {
            return e < 12 ? 'صبح' : 'شام';
        },
        calendar: {
            sameDay: '[آج بوقت] LT',
            nextDay: '[کل بوقت] LT',
            nextWeek: 'dddd [بوقت] LT',
            lastDay: '[گذشتہ روز بوقت] LT',
            lastWeek: '[گذشتہ] dddd [بوقت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s بعد',
            past: '%s قبل',
            s: 'چند سیکنڈ',
            ss: '%d سیکنڈ',
            m: 'ایک منٹ',
            mm: '%d منٹ',
            h: 'ایک گھنٹہ',
            hh: '%d گھنٹے',
            d: 'ایک دن',
            dd: '%d دن',
            M: 'ایک ماہ',
            MM: '%d ماہ',
            y: 'ایک سال',
            yy: '%d سال'
        },
        preparse: function (e) {
            return e.replace(/\u060c/g, ',');
        },
        postformat: function (e) {
            return e.replace(/,/g, '\u060C');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('uz-latn', {
        months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'D MMMM YYYY, dddd HH:mm'
        },
        calendar: {
            sameDay: '[Bugun soat] LT [da]',
            nextDay: '[Ertaga] LT [da]',
            nextWeek: 'dddd [kuni soat] LT [da]',
            lastDay: '[Kecha soat] LT [da]',
            lastWeek: '[O\'tgan] dddd [kuni soat] LT [da]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'Yaqin %s ichida',
            past: 'Bir necha %s oldin',
            s: 'soniya',
            ss: '%d soniya',
            m: 'bir daqiqa',
            mm: '%d daqiqa',
            h: 'bir soat',
            hh: '%d soat',
            d: 'bir kun',
            dd: '%d kun',
            M: 'bir oy',
            MM: '%d oy',
            y: 'bir yil',
            yy: '%d yil'
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('uz', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'D MMMM YYYY, dddd HH:mm'
        },
        calendar: {
            sameDay: '[Бугун соат] LT [да]',
            nextDay: '[Эртага] LT [да]',
            nextWeek: 'dddd [куни соат] LT [да]',
            lastDay: '[Кеча соат] LT [да]',
            lastWeek: '[Утган] dddd [куни соат] LT [да]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'Якин %s ичида',
            past: 'Бир неча %s олдин',
            s: 'фурсат',
            ss: '%d фурсат',
            m: 'бир дакика',
            mm: '%d дакика',
            h: 'бир соат',
            hh: '%d соат',
            d: 'бир кун',
            dd: '%d кун',
            M: 'бир ой',
            MM: '%d ой',
            y: 'бир йил',
            yy: '%d йил'
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale('vi', {
        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact: !0,
        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (e) {
            return /^ch$/i.test(e);
        },
        meridiem: function (e, a, t) {
            return e < 12 ? t ? 'sa' : 'SA' : t ? 'ch' : 'CH';
        },
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM [năm] YYYY',
            LLL: 'D MMMM [năm] YYYY HH:mm',
            LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
            l: 'DD/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Hôm nay lúc] LT',
            nextDay: '[Ngày mai lúc] LT',
            nextWeek: 'dddd [tuần tới lúc] LT',
            lastDay: '[Hôm qua lúc] LT',
            lastWeek: 'dddd [tuần rồi lúc] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s tới',
            past: '%s trước',
            s: 'vài giây',
            ss: '%d giây',
            m: 'một phút',
            mm: '%d phút',
            h: 'một giờ',
            hh: '%d giờ',
            d: 'một ngày',
            dd: '%d ngày',
            M: 'một tháng',
            MM: '%d tháng',
            y: 'một năm',
            yy: '%d năm'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
            return e;
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('x-pseudo', {
        months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact: !0,
        weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[T~ódá~ý át] LT',
            nextDay: '[T~ómó~rró~w át] LT',
            nextWeek: 'dddd [át] LT',
            lastDay: '[Ý~ést~érdá~ý át] LT',
            lastWeek: '[L~ást] dddd [át] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'í~ñ %s',
            past: '%s á~gó',
            s: 'á ~féw ~sécó~ñds',
            ss: '%d s~écóñ~ds',
            m: 'á ~míñ~úté',
            mm: '%d m~íñú~tés',
            h: 'á~ñ hó~úr',
            hh: '%d h~óúrs',
            d: 'á ~dáý',
            dd: '%d d~áýs',
            M: 'á ~móñ~th',
            MM: '%d m~óñt~hs',
            y: 'á ~ýéár',
            yy: '%d ý~éárs'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('yo', {
        months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
            sameDay: '[Ònì ni] LT',
            nextDay: '[Ọ̀la ni] LT',
            nextWeek: 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
            lastDay: '[Àna ni] LT',
            lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'ní %s',
            past: '%s kọjá',
            s: 'ìsẹjú aayá die',
            ss: 'aayá %d',
            m: 'ìsẹjú kan',
            mm: 'ìsẹjú %d',
            h: 'wákati kan',
            hh: 'wákati %d',
            d: 'ọjọ́ kan',
            dd: 'ọjọ́ %d',
            M: 'osù kan',
            MM: 'osù %d',
            y: 'ọdún kan',
            yy: 'ọdún %d'
        },
        dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
        ordinal: 'ọjọ́ %d',
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), '凌晨' === a || '早上' === a || '上午' === a ? e : '下午' === a || '晚上' === a ? e + 12 : 11 <= e ? e : e + 12;
        },
        meridiem: function (e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? '凌晨' : s < 900 ? '早上' : s < 1130 ? '上午' : s < 1230 ? '中午' : s < 1800 ? '下午' : '晚上';
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
                return e + '日';
            case 'M':
                return e + '月';
            case 'w':
            case 'W':
                return e + '周';
            default:
                return e;
            }
        },
        relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年'
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale('zh-hk', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日dddd HH:mm',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), '凌晨' === a || '早上' === a || '上午' === a ? e : '中午' === a ? 11 <= e ? e : e + 12 : '下午' === a || '晚上' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? '凌晨' : s < 900 ? '早上' : s < 1130 ? '上午' : s < 1230 ? '中午' : s < 1800 ? '下午' : '晚上';
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
                return e + '日';
            case 'M':
                return e + '月';
            case 'w':
            case 'W':
                return e + '週';
            default:
                return e;
            }
        },
        relativeTime: {
            future: '%s內',
            past: '%s前',
            s: '幾秒',
            ss: '%d 秒',
            m: '1 分鐘',
            mm: '%d 分鐘',
            h: '1 小時',
            hh: '%d 小時',
            d: '1 天',
            dd: '%d 天',
            M: '1 個月',
            MM: '%d 個月',
            y: '1 年',
            yy: '%d 年'
        }
    }), l.defineLocale('zh-tw', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日dddd HH:mm',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function (e, a) {
            return 12 === e && (e = 0), '凌晨' === a || '早上' === a || '上午' === a ? e : '中午' === a ? 11 <= e ? e : e + 12 : '下午' === a || '晚上' === a ? e + 12 : void 0;
        },
        meridiem: function (e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? '凌晨' : s < 900 ? '早上' : s < 1130 ? '上午' : s < 1230 ? '中午' : s < 1800 ? '下午' : '晚上';
        },
        calendar: {
            sameDay: '[今天] LT',
            nextDay: '[明天] LT',
            nextWeek: '[下]dddd LT',
            lastDay: '[昨天] LT',
            lastWeek: '[上]dddd LT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
        ordinal: function (e, a) {
            switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
                return e + '日';
            case 'M':
                return e + '月';
            case 'w':
            case 'W':
                return e + '週';
            default:
                return e;
            }
        },
        relativeTime: {
            future: '%s內',
            past: '%s前',
            s: '幾秒',
            ss: '%d 秒',
            m: '1 分鐘',
            mm: '%d 分鐘',
            h: '1 小時',
            hh: '%d 小時',
            d: '1 天',
            dd: '%d 天',
            M: '1 個月',
            MM: '%d 個月',
            y: '1 年',
            yy: '%d 年'
        }
    }), l.locale('en'), l;
});
;
(function () {
    function n(n, t, r) {
        switch (r.length) {
        case 0:
            return n.call(t);
        case 1:
            return n.call(t, r[0]);
        case 2:
            return n.call(t, r[0], r[1]);
        case 3:
            return n.call(t, r[0], r[1], r[2]);
        }
        return n.apply(t, r);
    }
    function t(n, t, r, e) {
        for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
            var o = n[u];
            t(e, o, r(o), n);
        }
        return e;
    }
    function r(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e && false !== t(n[r], r, n););
        return n;
    }
    function e(n, t) {
        for (var r = null == n ? 0 : n.length; r-- && false !== t(n[r], r, n););
        return n;
    }
    function u(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
            if (!t(n[r], r, n))
                return false;
        return true;
    }
    function i(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            t(o, r, n) && (i[u++] = o);
        }
        return i;
    }
    function o(n, t) {
        return !(null == n || !n.length) && -1 < v(n, t, 0);
    }
    function f(n, t, r) {
        for (var e = -1, u = null == n ? 0 : n.length; ++e < u;)
            if (r(t, n[e]))
                return true;
        return false;
    }
    function c(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;)
            u[r] = t(n[r], r, n);
        return u;
    }
    function a(n, t) {
        for (var r = -1, e = t.length, u = n.length; ++r < e;)
            n[u + r] = t[r];
        return n;
    }
    function l(n, t, r, e) {
        var u = -1, i = null == n ? 0 : n.length;
        for (e && i && (r = n[++u]); ++u < i;)
            r = t(r, n[u], u, n);
        return r;
    }
    function s(n, t, r, e) {
        var u = null == n ? 0 : n.length;
        for (e && u && (r = n[--u]); u--;)
            r = t(r, n[u], u, n);
        return r;
    }
    function h(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
            if (t(n[r], r, n))
                return true;
        return false;
    }
    function p(n, t, r) {
        var e;
        return r(n, function (n, r, u) {
            if (t(n, r, u))
                return e = r, false;
        }), e;
    }
    function _(n, t, r, e) {
        var u = n.length;
        for (r += e ? 1 : -1; e ? r-- : ++r < u;)
            if (t(n[r], r, n))
                return r;
        return -1;
    }
    function v(n, t, r) {
        if (t === t)
            n: {
                --r;
                for (var e = n.length; ++r < e;)
                    if (n[r] === t) {
                        n = r;
                        break n;
                    }
                n = -1;
            }
        else
            n = _(n, d, r);
        return n;
    }
    function g(n, t, r, e) {
        --r;
        for (var u = n.length; ++r < u;)
            if (e(n[r], t))
                return r;
        return -1;
    }
    function d(n) {
        return n !== n;
    }
    function y(n, t) {
        var r = null == n ? 0 : n.length;
        return r ? m(n, t) / r : F;
    }
    function b(n) {
        return function (t) {
            return null == t ? T : t[n];
        };
    }
    function x(n) {
        return function (t) {
            return null == n ? T : n[t];
        };
    }
    function j(n, t, r, e, u) {
        return u(n, function (n, u, i) {
            r = e ? (e = false, n) : t(r, n, u, i);
        }), r;
    }
    function w(n, t) {
        var r = n.length;
        for (n.sort(t); r--;)
            n[r] = n[r].c;
        return n;
    }
    function m(n, t) {
        for (var r, e = -1, u = n.length; ++e < u;) {
            var i = t(n[e]);
            i !== T && (r = r === T ? i : r + i);
        }
        return r;
    }
    function A(n, t) {
        for (var r = -1, e = Array(n); ++r < n;)
            e[r] = t(r);
        return e;
    }
    function E(n, t) {
        return c(t, function (t) {
            return [
                t,
                n[t]
            ];
        });
    }
    function k(n) {
        return function (t) {
            return n(t);
        };
    }
    function S(n, t) {
        return c(t, function (t) {
            return n[t];
        });
    }
    function O(n, t) {
        return n.has(t);
    }
    function I(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < v(t, n[r], 0););
        return r;
    }
    function R(n, t) {
        for (var r = n.length; r-- && -1 < v(t, n[r], 0););
        return r;
    }
    function z(n) {
        return '\\' + Un[n];
    }
    function W(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n, e) {
            r[++t] = [
                e,
                n
            ];
        }), r;
    }
    function B(n, t) {
        return function (r) {
            return n(t(r));
        };
    }
    function L(n, t) {
        for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            o !== t && '__lodash_placeholder__' !== o || (n[r] = '__lodash_placeholder__', i[u++] = r);
        }
        return i;
    }
    function U(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n) {
            r[++t] = n;
        }), r;
    }
    function C(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n) {
            r[++t] = [
                n,
                n
            ];
        }), r;
    }
    function D(n) {
        if (Rn.test(n)) {
            for (var t = On.lastIndex = 0; On.test(n);)
                ++t;
            n = t;
        } else
            n = Qn(n);
        return n;
    }
    function M(n) {
        return Rn.test(n) ? n.match(On) || [] : n.split('');
    }
    var T, $ = 1 / 0, F = NaN, N = [
            [
                'ary',
                128
            ],
            [
                'bind',
                1
            ],
            [
                'bindKey',
                2
            ],
            [
                'curry',
                8
            ],
            [
                'curryRight',
                16
            ],
            [
                'flip',
                512
            ],
            [
                'partial',
                32
            ],
            [
                'partialRight',
                64
            ],
            [
                'rearg',
                256
            ]
        ], P = /\b__p\+='';/g, Z = /\b(__p\+=)''\+/g, q = /(__e\(.*?\)|\b__t\))\+'';/g, V = /&(?:amp|lt|gt|quot|#39);/g, K = /[&<>"']/g, G = RegExp(V.source), H = RegExp(K.source), J = /<%-([\s\S]+?)%>/g, Y = /<%([\s\S]+?)%>/g, Q = /<%=([\s\S]+?)%>/g, X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nn = /^\w*$/, tn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rn = /[\\^$.*+?()[\]{}|]/g, en = RegExp(rn.source), un = /^\s+|\s+$/g, on = /^\s+/, fn = /\s+$/, cn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, an = /\{\n\/\* \[wrapped with (.+)\] \*/, ln = /,? & /, sn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, hn = /\\(\\)?/g, pn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _n = /\w*$/, vn = /^[-+]0x[0-9a-f]+$/i, gn = /^0b[01]+$/i, dn = /^\[object .+?Constructor\]$/, yn = /^0o[0-7]+$/i, bn = /^(?:0|[1-9]\d*)$/, xn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, jn = /($^)/, wn = /['\n\r\u2028\u2029\\]/g, mn = '[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*', An = '(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])' + mn, En = '(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])', kn = RegExp('[\'\u2019]', 'g'), Sn = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g'), On = RegExp('\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|' + En + mn, 'g'), In = RegExp([
            '[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:[\'\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:[\'\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:[\'\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:[\'\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+',
            An
        ].join('|'), 'g'), Rn = RegExp('[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'), zn = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Wn = 'Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout'.split(' '), Bn = {};
    Bn['[object Float32Array]'] = Bn['[object Float64Array]'] = Bn['[object Int8Array]'] = Bn['[object Int16Array]'] = Bn['[object Int32Array]'] = Bn['[object Uint8Array]'] = Bn['[object Uint8ClampedArray]'] = Bn['[object Uint16Array]'] = Bn['[object Uint32Array]'] = true, Bn['[object Arguments]'] = Bn['[object Array]'] = Bn['[object ArrayBuffer]'] = Bn['[object Boolean]'] = Bn['[object DataView]'] = Bn['[object Date]'] = Bn['[object Error]'] = Bn['[object Function]'] = Bn['[object Map]'] = Bn['[object Number]'] = Bn['[object Object]'] = Bn['[object RegExp]'] = Bn['[object Set]'] = Bn['[object String]'] = Bn['[object WeakMap]'] = false;
    var Ln = {};
    Ln['[object Arguments]'] = Ln['[object Array]'] = Ln['[object ArrayBuffer]'] = Ln['[object DataView]'] = Ln['[object Boolean]'] = Ln['[object Date]'] = Ln['[object Float32Array]'] = Ln['[object Float64Array]'] = Ln['[object Int8Array]'] = Ln['[object Int16Array]'] = Ln['[object Int32Array]'] = Ln['[object Map]'] = Ln['[object Number]'] = Ln['[object Object]'] = Ln['[object RegExp]'] = Ln['[object Set]'] = Ln['[object String]'] = Ln['[object Symbol]'] = Ln['[object Uint8Array]'] = Ln['[object Uint8ClampedArray]'] = Ln['[object Uint16Array]'] = Ln['[object Uint32Array]'] = true, Ln['[object Error]'] = Ln['[object Function]'] = Ln['[object WeakMap]'] = false;
    var Un = {
            '\\': '\\',
            '\'': '\'',
            '\n': 'n',
            '\r': 'r',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        }, Cn = parseFloat, Dn = parseInt, Mn = typeof global == 'object' && global && global.Object === Object && global, Tn = typeof self == 'object' && self && self.Object === Object && self, $n = Mn || Tn || Function('return this')(), Fn = typeof exports == 'object' && exports && !exports.nodeType && exports, Nn = Fn && typeof module == 'object' && module && !module.nodeType && module, Pn = Nn && Nn.exports === Fn, Zn = Pn && Mn.process, qn = function () {
            try {
                var n = Nn && Nn.f && Nn.f('util').types;
                return n ? n : Zn && Zn.binding && Zn.binding('util');
            } catch (n) {
            }
        }(), Vn = qn && qn.isArrayBuffer, Kn = qn && qn.isDate, Gn = qn && qn.isMap, Hn = qn && qn.isRegExp, Jn = qn && qn.isSet, Yn = qn && qn.isTypedArray, Qn = b('length'), Xn = x({
            'À': 'A',
            'Á': 'A',
            'Â': 'A',
            'Ã': 'A',
            'Ä': 'A',
            'Å': 'A',
            'à': 'a',
            'á': 'a',
            'â': 'a',
            'ã': 'a',
            'ä': 'a',
            'å': 'a',
            'Ç': 'C',
            'ç': 'c',
            'Ð': 'D',
            'ð': 'd',
            'È': 'E',
            'É': 'E',
            'Ê': 'E',
            'Ë': 'E',
            'è': 'e',
            'é': 'e',
            'ê': 'e',
            'ë': 'e',
            'Ì': 'I',
            'Í': 'I',
            'Î': 'I',
            'Ï': 'I',
            'ì': 'i',
            'í': 'i',
            'î': 'i',
            'ï': 'i',
            'Ñ': 'N',
            'ñ': 'n',
            'Ò': 'O',
            'Ó': 'O',
            'Ô': 'O',
            'Õ': 'O',
            'Ö': 'O',
            'Ø': 'O',
            'ò': 'o',
            'ó': 'o',
            'ô': 'o',
            'õ': 'o',
            'ö': 'o',
            'ø': 'o',
            'Ù': 'U',
            'Ú': 'U',
            'Û': 'U',
            'Ü': 'U',
            'ù': 'u',
            'ú': 'u',
            'û': 'u',
            'ü': 'u',
            'Ý': 'Y',
            'ý': 'y',
            'ÿ': 'y',
            'Æ': 'Ae',
            'æ': 'ae',
            'Þ': 'Th',
            'þ': 'th',
            'ß': 'ss',
            'Ā': 'A',
            'Ă': 'A',
            'Ą': 'A',
            'ā': 'a',
            'ă': 'a',
            'ą': 'a',
            'Ć': 'C',
            'Ĉ': 'C',
            'Ċ': 'C',
            'Č': 'C',
            'ć': 'c',
            'ĉ': 'c',
            'ċ': 'c',
            'č': 'c',
            'Ď': 'D',
            'Đ': 'D',
            'ď': 'd',
            'đ': 'd',
            'Ē': 'E',
            'Ĕ': 'E',
            'Ė': 'E',
            'Ę': 'E',
            'Ě': 'E',
            'ē': 'e',
            'ĕ': 'e',
            'ė': 'e',
            'ę': 'e',
            'ě': 'e',
            'Ĝ': 'G',
            'Ğ': 'G',
            'Ġ': 'G',
            'Ģ': 'G',
            'ĝ': 'g',
            'ğ': 'g',
            'ġ': 'g',
            'ģ': 'g',
            'Ĥ': 'H',
            'Ħ': 'H',
            'ĥ': 'h',
            'ħ': 'h',
            'Ĩ': 'I',
            'Ī': 'I',
            'Ĭ': 'I',
            'Į': 'I',
            'İ': 'I',
            'ĩ': 'i',
            'ī': 'i',
            'ĭ': 'i',
            'į': 'i',
            'ı': 'i',
            'Ĵ': 'J',
            'ĵ': 'j',
            'Ķ': 'K',
            'ķ': 'k',
            'ĸ': 'k',
            'Ĺ': 'L',
            'Ļ': 'L',
            'Ľ': 'L',
            'Ŀ': 'L',
            'Ł': 'L',
            'ĺ': 'l',
            'ļ': 'l',
            'ľ': 'l',
            'ŀ': 'l',
            'ł': 'l',
            'Ń': 'N',
            'Ņ': 'N',
            'Ň': 'N',
            'Ŋ': 'N',
            'ń': 'n',
            'ņ': 'n',
            'ň': 'n',
            'ŋ': 'n',
            'Ō': 'O',
            'Ŏ': 'O',
            'Ő': 'O',
            'ō': 'o',
            'ŏ': 'o',
            'ő': 'o',
            'Ŕ': 'R',
            'Ŗ': 'R',
            'Ř': 'R',
            'ŕ': 'r',
            'ŗ': 'r',
            'ř': 'r',
            'Ś': 'S',
            'Ŝ': 'S',
            'Ş': 'S',
            'Š': 'S',
            'ś': 's',
            'ŝ': 's',
            'ş': 's',
            'š': 's',
            'Ţ': 'T',
            'Ť': 'T',
            'Ŧ': 'T',
            'ţ': 't',
            'ť': 't',
            'ŧ': 't',
            'Ũ': 'U',
            'Ū': 'U',
            'Ŭ': 'U',
            'Ů': 'U',
            'Ű': 'U',
            'Ų': 'U',
            'ũ': 'u',
            'ū': 'u',
            'ŭ': 'u',
            'ů': 'u',
            'ű': 'u',
            'ų': 'u',
            'Ŵ': 'W',
            'ŵ': 'w',
            'Ŷ': 'Y',
            'ŷ': 'y',
            'Ÿ': 'Y',
            'Ź': 'Z',
            'Ż': 'Z',
            'Ž': 'Z',
            'ź': 'z',
            'ż': 'z',
            'ž': 'z',
            'Ĳ': 'IJ',
            'ĳ': 'ij',
            'Œ': 'Oe',
            'œ': 'oe',
            'ŉ': '\'n',
            'ſ': 's'
        }), nt = x({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;'
        }), tt = x({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': '\''
        }), rt = function x(mn) {
            function An(n) {
                if (du(n) && !of(n) && !(n instanceof Un)) {
                    if (n instanceof On)
                        return n;
                    if (ii.call(n, '__wrapped__'))
                        return $e(n);
                }
                return new On(n);
            }
            function En() {
            }
            function On(n, t) {
                this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = T;
            }
            function Un(n) {
                this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
            }
            function Mn(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1]);
                }
            }
            function Tn(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1]);
                }
            }
            function Fn(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1]);
                }
            }
            function Nn(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.__data__ = new Fn(); ++t < r;)
                    this.add(n[t]);
            }
            function Zn(n) {
                this.size = (this.__data__ = new Tn(n)).size;
            }
            function qn(n, t) {
                var r, e = of(n), u = !e && uf(n), i = !e && !u && cf(n), o = !e && !u && !i && pf(n), u = (e = e || u || i || o) ? A(n.length, Xu) : [], f = u.length;
                for (r in n)
                    !t && !ii.call(n, r) || e && ('length' == r || i && ('offset' == r || 'parent' == r) || o && ('buffer' == r || 'byteLength' == r || 'byteOffset' == r) || Se(r, f)) || u.push(r);
                return u;
            }
            function Qn(n) {
                var t = n.length;
                return t ? n[ir(0, t - 1)] : T;
            }
            function et(n, t) {
                return Ce(Ur(n), pt(t, 0, n.length));
            }
            function ut(n) {
                return Ce(Ur(n));
            }
            function it(n, t, r) {
                (r === T || au(n[t], r)) && (r !== T || t in n) || st(n, t, r);
            }
            function ot(n, t, r) {
                var e = n[t];
                ii.call(n, t) && au(e, r) && (r !== T || t in n) || st(n, t, r);
            }
            function ft(n, t) {
                for (var r = n.length; r--;)
                    if (au(n[r][0], t))
                        return r;
                return -1;
            }
            function ct(n, t, r, e) {
                return eo(n, function (n, u, i) {
                    t(e, n, r(n), i);
                }), e;
            }
            function at(n, t) {
                return n && Cr(t, zu(t), n);
            }
            function lt(n, t) {
                return n && Cr(t, Wu(t), n);
            }
            function st(n, t, r) {
                '__proto__' == t && mi ? mi(n, t, {
                    configurable: true,
                    enumerable: true,
                    value: r,
                    writable: true
                }) : n[t] = r;
            }
            function ht(n, t) {
                for (var r = -1, e = t.length, u = Vu(e), i = null == n; ++r < e;)
                    u[r] = i ? T : Iu(n, t[r]);
                return u;
            }
            function pt(n, t, r) {
                return n === n && (r !== T && (n = n <= r ? n : r), t !== T && (n = n >= t ? n : t)), n;
            }
            function _t(n, t, e, u, i, o) {
                var f, c = 1 & t, a = 2 & t, l = 4 & t;
                if (e && (f = i ? e(n, u, i, o) : e(n)), f !== T)
                    return f;
                if (!gu(n))
                    return n;
                if (u = of(n)) {
                    if (f = me(n), !c)
                        return Ur(n, f);
                } else {
                    var s = _o(n), h = '[object Function]' == s || '[object GeneratorFunction]' == s;
                    if (cf(n))
                        return Ir(n, c);
                    if ('[object Object]' == s || '[object Arguments]' == s || h && !i) {
                        if (f = a || h ? {} : Ae(n), !c)
                            return a ? Mr(n, lt(f, n)) : Dr(n, at(f, n));
                    } else {
                        if (!Ln[s])
                            return i ? n : {};
                        f = Ee(n, s, c);
                    }
                }
                if (o || (o = new Zn()), i = o.get(n))
                    return i;
                if (o.set(n, f), hf(n))
                    return n.forEach(function (r) {
                        f.add(_t(r, t, e, r, n, o));
                    }), f;
                if (lf(n))
                    return n.forEach(function (r, u) {
                        f.set(u, _t(r, t, e, u, n, o));
                    }), f;
                var a = l ? a ? ve : _e : a ? Wu : zu, p = u ? T : a(n);
                return r(p || n, function (r, u) {
                    p && (u = r, r = n[u]), ot(f, u, _t(r, t, e, u, n, o));
                }), f;
            }
            function vt(n) {
                var t = zu(n);
                return function (r) {
                    return gt(r, n, t);
                };
            }
            function gt(n, t, r) {
                var e = r.length;
                if (null == n)
                    return !e;
                for (n = Yu(n); e--;) {
                    var u = r[e], i = t[u], o = n[u];
                    if (o === T && !(u in n) || !i(o))
                        return false;
                }
                return true;
            }
            function dt(n, t, r) {
                if (typeof n != 'function')
                    throw new ni('Expected a function');
                return yo(function () {
                    n.apply(T, r);
                }, t);
            }
            function yt(n, t, r, e) {
                var u = -1, i = o, a = true, l = n.length, s = [], h = t.length;
                if (!l)
                    return s;
                r && (t = c(t, k(r))), e ? (i = f, a = false) : 200 <= t.length && (i = O, a = false, t = new Nn(t));
                n:
                    for (; ++u < l;) {
                        var p = n[u], _ = null == r ? p : r(p), p = e || 0 !== p ? p : 0;
                        if (a && _ === _) {
                            for (var v = h; v--;)
                                if (t[v] === _)
                                    continue n;
                            s.push(p);
                        } else
                            i(t, _, e) || s.push(p);
                    }
                return s;
            }
            function bt(n, t) {
                var r = true;
                return eo(n, function (n, e, u) {
                    return r = !!t(n, e, u);
                }), r;
            }
            function xt(n, t, r) {
                for (var e = -1, u = n.length; ++e < u;) {
                    var i = n[e], o = t(i);
                    if (null != o && (f === T ? o === o && !ju(o) : r(o, f)))
                        var f = o, c = i;
                }
                return c;
            }
            function jt(n, t) {
                var r = [];
                return eo(n, function (n, e, u) {
                    t(n, e, u) && r.push(n);
                }), r;
            }
            function wt(n, t, r, e, u) {
                var i = -1, o = n.length;
                for (r || (r = ke), u || (u = []); ++i < o;) {
                    var f = n[i];
                    0 < t && r(f) ? 1 < t ? wt(f, t - 1, r, e, u) : a(u, f) : e || (u[u.length] = f);
                }
                return u;
            }
            function mt(n, t) {
                return n && io(n, t, zu);
            }
            function At(n, t) {
                return n && oo(n, t, zu);
            }
            function Et(n, t) {
                return i(t, function (t) {
                    return pu(n[t]);
                });
            }
            function kt(n, t) {
                t = Sr(t, n);
                for (var r = 0, e = t.length; null != n && r < e;)
                    n = n[De(t[r++])];
                return r && r == e ? n : T;
            }
            function St(n, t, r) {
                return t = t(n), of(n) ? t : a(t, r(n));
            }
            function Ot(n) {
                if (null == n)
                    n = n === T ? '[object Undefined]' : '[object Null]';
                else if (wi && wi in Yu(n)) {
                    var t = ii.call(n, wi), r = n[wi];
                    try {
                        n[wi] = T;
                        var e = true;
                    } catch (n) {
                    }
                    var u = ci.call(n);
                    e && (t ? n[wi] = r : delete n[wi]), n = u;
                } else
                    n = ci.call(n);
                return n;
            }
            function It(n, t) {
                return n > t;
            }
            function Rt(n, t) {
                return null != n && ii.call(n, t);
            }
            function zt(n, t) {
                return null != n && t in Yu(n);
            }
            function Wt(n, t, r) {
                for (var e = r ? f : o, u = n[0].length, i = n.length, a = i, l = Vu(i), s = 1 / 0, h = []; a--;) {
                    var p = n[a];
                    a && t && (p = c(p, k(t))), s = Ui(p.length, s), l[a] = !r && (t || 120 <= u && 120 <= p.length) ? new Nn(a && p) : T;
                }
                var p = n[0], _ = -1, v = l[0];
                n:
                    for (; ++_ < u && h.length < s;) {
                        var g = p[_], d = t ? t(g) : g, g = r || 0 !== g ? g : 0;
                        if (v ? !O(v, d) : !e(h, d, r)) {
                            for (a = i; --a;) {
                                var y = l[a];
                                if (y ? !O(y, d) : !e(n[a], d, r))
                                    continue n;
                            }
                            v && v.push(d), h.push(g);
                        }
                    }
                return h;
            }
            function Bt(n, t, r) {
                var e = {};
                return mt(n, function (n, u, i) {
                    t(e, r(n), u, i);
                }), e;
            }
            function Lt(t, r, e) {
                return r = Sr(r, t), t = 2 > r.length ? t : kt(t, hr(r, 0, -1)), r = null == t ? t : t[De(qe(r))], null == r ? T : n(r, t, e);
            }
            function Ut(n) {
                return du(n) && '[object Arguments]' == Ot(n);
            }
            function Ct(n) {
                return du(n) && '[object ArrayBuffer]' == Ot(n);
            }
            function Dt(n) {
                return du(n) && '[object Date]' == Ot(n);
            }
            function Mt(n, t, r, e, u) {
                if (n === t)
                    t = true;
                else if (null == n || null == t || !du(n) && !du(t))
                    t = n !== n && t !== t;
                else
                    n: {
                        var i = of(n), o = of(t), f = i ? '[object Array]' : _o(n), c = o ? '[object Array]' : _o(t), f = '[object Arguments]' == f ? '[object Object]' : f, c = '[object Arguments]' == c ? '[object Object]' : c, a = '[object Object]' == f, o = '[object Object]' == c;
                        if ((c = f == c) && cf(n)) {
                            if (!cf(t)) {
                                t = false;
                                break n;
                            }
                            i = true, a = false;
                        }
                        if (c && !a)
                            u || (u = new Zn()), t = i || pf(n) ? se(n, t, r, e, Mt, u) : he(n, t, f, r, e, Mt, u);
                        else {
                            if (!(1 & r) && (i = a && ii.call(n, '__wrapped__'), f = o && ii.call(t, '__wrapped__'), i || f)) {
                                n = i ? n.value() : n, t = f ? t.value() : t, u || (u = new Zn()), t = Mt(n, t, r, e, u);
                                break n;
                            }
                            if (c)
                                t:
                                    if (u || (u = new Zn()), i = 1 & r, f = _e(n), o = f.length, c = _e(t).length, o == c || i) {
                                        for (a = o; a--;) {
                                            var l = f[a];
                                            if (!(i ? l in t : ii.call(t, l))) {
                                                t = false;
                                                break t;
                                            }
                                        }
                                        if ((c = u.get(n)) && u.get(t))
                                            t = c == t;
                                        else {
                                            c = true, u.set(n, t), u.set(t, n);
                                            for (var s = i; ++a < o;) {
                                                var l = f[a], h = n[l], p = t[l];
                                                if (e)
                                                    var _ = i ? e(p, h, l, t, n, u) : e(h, p, l, n, t, u);
                                                if (_ === T ? h !== p && !Mt(h, p, r, e, u) : !_) {
                                                    c = false;
                                                    break;
                                                }
                                                s || (s = 'constructor' == l);
                                            }
                                            c && !s && (r = n.constructor, e = t.constructor, r != e && 'constructor' in n && 'constructor' in t && !(typeof r == 'function' && r instanceof r && typeof e == 'function' && e instanceof e) && (c = false)), u.delete(n), u.delete(t), t = c;
                                        }
                                    } else
                                        t = false;
                            else
                                t = false;
                        }
                    }
                return t;
            }
            function Tt(n) {
                return du(n) && '[object Map]' == _o(n);
            }
            function $t(n, t, r, e) {
                var u = r.length, i = u, o = !e;
                if (null == n)
                    return !i;
                for (n = Yu(n); u--;) {
                    var f = r[u];
                    if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n))
                        return false;
                }
                for (; ++u < i;) {
                    var f = r[u], c = f[0], a = n[c], l = f[1];
                    if (o && f[2]) {
                        if (a === T && !(c in n))
                            return false;
                    } else {
                        if (f = new Zn(), e)
                            var s = e(a, l, c, n, t, f);
                        if (s === T ? !Mt(l, a, 3, e, f) : !s)
                            return false;
                    }
                }
                return true;
            }
            function Ft(n) {
                return !(!gu(n) || fi && fi in n) && (pu(n) ? si : dn).test(Me(n));
            }
            function Nt(n) {
                return du(n) && '[object RegExp]' == Ot(n);
            }
            function Pt(n) {
                return du(n) && '[object Set]' == _o(n);
            }
            function Zt(n) {
                return du(n) && vu(n.length) && !!Bn[Ot(n)];
            }
            function qt(n) {
                return typeof n == 'function' ? n : null == n ? Tu : typeof n == 'object' ? of(n) ? Jt(n[0], n[1]) : Ht(n) : Pu(n);
            }
            function Vt(n) {
                if (!ze(n))
                    return Bi(n);
                var t, r = [];
                for (t in Yu(n))
                    ii.call(n, t) && 'constructor' != t && r.push(t);
                return r;
            }
            function Kt(n, t) {
                return n < t;
            }
            function Gt(n, t) {
                var r = -1, e = lu(n) ? Vu(n.length) : [];
                return eo(n, function (n, u, i) {
                    e[++r] = t(n, u, i);
                }), e;
            }
            function Ht(n) {
                var t = xe(n);
                return 1 == t.length && t[0][2] ? We(t[0][0], t[0][1]) : function (r) {
                    return r === n || $t(r, n, t);
                };
            }
            function Jt(n, t) {
                return Ie(n) && t === t && !gu(t) ? We(De(n), t) : function (r) {
                    var e = Iu(r, n);
                    return e === T && e === t ? Ru(r, n) : Mt(t, e, 3);
                };
            }
            function Yt(n, t, r, e, u) {
                n !== t && io(t, function (i, o) {
                    if (gu(i)) {
                        u || (u = new Zn());
                        var f = u, c = '__proto__' == o ? T : n[o], a = '__proto__' == o ? T : t[o], l = f.get(a);
                        if (l)
                            it(n, o, l);
                        else {
                            var l = e ? e(c, a, o + '', n, t, f) : T, s = l === T;
                            if (s) {
                                var h = of(a), p = !h && cf(a), _ = !h && !p && pf(a), l = a;
                                h || p || _ ? of(c) ? l = c : su(c) ? l = Ur(c) : p ? (s = false, l = Ir(a, true)) : _ ? (s = false, l = zr(a, true)) : l = [] : bu(a) || uf(a) ? (l = c, uf(c) ? l = Su(c) : (!gu(c) || r && pu(c)) && (l = Ae(a))) : s = false;
                            }
                            s && (f.set(a, l), Yt(l, a, r, e, f), f.delete(a)), it(n, o, l);
                        }
                    } else
                        f = e ? e('__proto__' == o ? T : n[o], i, o + '', n, t, u) : T, f === T && (f = i), it(n, o, f);
                }, Wu);
            }
            function Qt(n, t) {
                var r = n.length;
                if (r)
                    return t += 0 > t ? r : 0, Se(t, r) ? n[t] : T;
            }
            function Xt(n, t, r) {
                var e = -1;
                return t = c(t.length ? t : [Tu], k(ye())), n = Gt(n, function (n) {
                    return {
                        a: c(t, function (t) {
                            return t(n);
                        }),
                        b: ++e,
                        c: n
                    };
                }), w(n, function (n, t) {
                    var e;
                    n: {
                        e = -1;
                        for (var u = n.a, i = t.a, o = u.length, f = r.length; ++e < o;) {
                            var c = Wr(u[e], i[e]);
                            if (c) {
                                e = e >= f ? c : c * ('desc' == r[e] ? -1 : 1);
                                break n;
                            }
                        }
                        e = n.b - t.b;
                    }
                    return e;
                });
            }
            function nr(n, t) {
                return tr(n, t, function (t, r) {
                    return Ru(n, r);
                });
            }
            function tr(n, t, r) {
                for (var e = -1, u = t.length, i = {}; ++e < u;) {
                    var o = t[e], f = kt(n, o);
                    r(f, o) && lr(i, Sr(o, n), f);
                }
                return i;
            }
            function rr(n) {
                return function (t) {
                    return kt(t, n);
                };
            }
            function er(n, t, r, e) {
                var u = e ? g : v, i = -1, o = t.length, f = n;
                for (n === t && (t = Ur(t)), r && (f = c(n, k(r))); ++i < o;)
                    for (var a = 0, l = t[i], l = r ? r(l) : l; -1 < (a = u(f, l, a, e));)
                        f !== n && bi.call(f, a, 1), bi.call(n, a, 1);
                return n;
            }
            function ur(n, t) {
                for (var r = n ? t.length : 0, e = r - 1; r--;) {
                    var u = t[r];
                    if (r == e || u !== i) {
                        var i = u;
                        Se(u) ? bi.call(n, u, 1) : xr(n, u);
                    }
                }
            }
            function ir(n, t) {
                return n + Oi(Mi() * (t - n + 1));
            }
            function or(n, t) {
                var r = '';
                if (!n || 1 > t || 9007199254740991 < t)
                    return r;
                do
                    t % 2 && (r += n), (t = Oi(t / 2)) && (n += n);
                while (t);
                return r;
            }
            function fr(n, t) {
                return bo(Be(n, t, Tu), n + '');
            }
            function cr(n) {
                return Qn(Lu(n));
            }
            function ar(n, t) {
                var r = Lu(n);
                return Ce(r, pt(t, 0, r.length));
            }
            function lr(n, t, r, e) {
                if (!gu(n))
                    return n;
                t = Sr(t, n);
                for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
                    var c = De(t[u]), a = r;
                    if (u != o) {
                        var l = f[c], a = e ? e(l, c, f) : T;
                        a === T && (a = gu(l) ? l : Se(t[u + 1]) ? [] : {});
                    }
                    ot(f, c, a), f = f[c];
                }
                return n;
            }
            function sr(n) {
                return Ce(Lu(n));
            }
            function hr(n, t, r) {
                var e = -1, u = n.length;
                for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Vu(u); ++e < u;)
                    r[e] = n[e + t];
                return r;
            }
            function pr(n, t) {
                var r;
                return eo(n, function (n, e, u) {
                    return r = t(n, e, u), !r;
                }), !!r;
            }
            function _r(n, t, r) {
                var e = 0, u = null == n ? e : n.length;
                if (typeof t == 'number' && t === t && 2147483647 >= u) {
                    for (; e < u;) {
                        var i = e + u >>> 1, o = n[i];
                        null !== o && !ju(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i;
                    }
                    return u;
                }
                return vr(n, t, Tu, r);
            }
            function vr(n, t, r, e) {
                t = r(t);
                for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = ju(t), a = t === T; u < i;) {
                    var l = Oi((u + i) / 2), s = r(n[l]), h = s !== T, p = null === s, _ = s === s, v = ju(s);
                    (o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= t : s < t) ? u = l + 1 : i = l;
                }
                return Ui(i, 4294967294);
            }
            function gr(n, t) {
                for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
                    var o = n[r], f = t ? t(o) : o;
                    if (!r || !au(f, c)) {
                        var c = f;
                        i[u++] = 0 === o ? 0 : o;
                    }
                }
                return i;
            }
            function dr(n) {
                return typeof n == 'number' ? n : ju(n) ? F : +n;
            }
            function yr(n) {
                if (typeof n == 'string')
                    return n;
                if (of(n))
                    return c(n, yr) + '';
                if (ju(n))
                    return to ? to.call(n) : '';
                var t = n + '';
                return '0' == t && 1 / n == -$ ? '-0' : t;
            }
            function br(n, t, r) {
                var e = -1, u = o, i = n.length, c = true, a = [], l = a;
                if (r)
                    c = false, u = f;
                else if (200 <= i) {
                    if (u = t ? null : lo(n))
                        return U(u);
                    c = false, u = O, l = new Nn();
                } else
                    l = t ? [] : a;
                n:
                    for (; ++e < i;) {
                        var s = n[e], h = t ? t(s) : s, s = r || 0 !== s ? s : 0;
                        if (c && h === h) {
                            for (var p = l.length; p--;)
                                if (l[p] === h)
                                    continue n;
                            t && l.push(h), a.push(s);
                        } else
                            u(l, h, r) || (l !== a && l.push(h), a.push(s));
                    }
                return a;
            }
            function xr(n, t) {
                return t = Sr(t, n), n = 2 > t.length ? n : kt(n, hr(t, 0, -1)), null == n || delete n[De(qe(t))];
            }
            function jr(n, t, r, e) {
                for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n););
                return r ? hr(n, e ? 0 : i, e ? i + 1 : u) : hr(n, e ? i + 1 : 0, e ? u : i);
            }
            function wr(n, t) {
                var r = n;
                return r instanceof Un && (r = r.value()), l(t, function (n, t) {
                    return t.func.apply(t.thisArg, a([n], t.args));
                }, r);
            }
            function mr(n, t, r) {
                var e = n.length;
                if (2 > e)
                    return e ? br(n[0]) : [];
                for (var u = -1, i = Vu(e); ++u < e;)
                    for (var o = n[u], f = -1; ++f < e;)
                        f != u && (i[u] = yt(i[u] || o, n[f], t, r));
                return br(wt(i, 1), t, r);
            }
            function Ar(n, t, r) {
                for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;)
                    r(o, n[e], e < i ? t[e] : T);
                return o;
            }
            function Er(n) {
                return su(n) ? n : [];
            }
            function kr(n) {
                return typeof n == 'function' ? n : Tu;
            }
            function Sr(n, t) {
                return of(n) ? n : Ie(n, t) ? [n] : xo(Ou(n));
            }
            function Or(n, t, r) {
                var e = n.length;
                return r = r === T ? e : r, !t && r >= e ? n : hr(n, t, r);
            }
            function Ir(n, t) {
                if (t)
                    return n.slice();
                var r = n.length, r = vi ? vi(r) : new n.constructor(r);
                return n.copy(r), r;
            }
            function Rr(n) {
                var t = new n.constructor(n.byteLength);
                return new _i(t).set(new _i(n)), t;
            }
            function zr(n, t) {
                return new n.constructor(t ? Rr(n.buffer) : n.buffer, n.byteOffset, n.length);
            }
            function Wr(n, t) {
                if (n !== t) {
                    var r = n !== T, e = null === n, u = n === n, i = ju(n), o = t !== T, f = null === t, c = t === t, a = ju(t);
                    if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u)
                        return 1;
                    if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c)
                        return -1;
                }
                return 0;
            }
            function Br(n, t, r, e) {
                var u = -1, i = n.length, o = r.length, f = -1, c = t.length, a = Li(i - o, 0), l = Vu(c + a);
                for (e = !e; ++f < c;)
                    l[f] = t[f];
                for (; ++u < o;)
                    (e || u < i) && (l[r[u]] = n[u]);
                for (; a--;)
                    l[f++] = n[u++];
                return l;
            }
            function Lr(n, t, r, e) {
                var u = -1, i = n.length, o = -1, f = r.length, c = -1, a = t.length, l = Li(i - f, 0), s = Vu(l + a);
                for (e = !e; ++u < l;)
                    s[u] = n[u];
                for (l = u; ++c < a;)
                    s[l + c] = t[c];
                for (; ++o < f;)
                    (e || u < i) && (s[l + r[o]] = n[u++]);
                return s;
            }
            function Ur(n, t) {
                var r = -1, e = n.length;
                for (t || (t = Vu(e)); ++r < e;)
                    t[r] = n[r];
                return t;
            }
            function Cr(n, t, r, e) {
                var u = !r;
                r || (r = {});
                for (var i = -1, o = t.length; ++i < o;) {
                    var f = t[i], c = e ? e(r[f], n[f], f, r, n) : T;
                    c === T && (c = n[f]), u ? st(r, f, c) : ot(r, f, c);
                }
                return r;
            }
            function Dr(n, t) {
                return Cr(n, ho(n), t);
            }
            function Mr(n, t) {
                return Cr(n, po(n), t);
            }
            function Tr(n, r) {
                return function (e, u) {
                    var i = of(e) ? t : ct, o = r ? r() : {};
                    return i(e, n, ye(u, 2), o);
                };
            }
            function $r(n) {
                return fr(function (t, r) {
                    var e = -1, u = r.length, i = 1 < u ? r[u - 1] : T, o = 2 < u ? r[2] : T, i = 3 < n.length && typeof i == 'function' ? (u--, i) : T;
                    for (o && Oe(r[0], r[1], o) && (i = 3 > u ? T : i, u = 1), t = Yu(t); ++e < u;)
                        (o = r[e]) && n(t, o, e, i);
                    return t;
                });
            }
            function Fr(n, t) {
                return function (r, e) {
                    if (null == r)
                        return r;
                    if (!lu(r))
                        return n(r, e);
                    for (var u = r.length, i = t ? u : -1, o = Yu(r); (t ? i-- : ++i < u) && false !== e(o[i], i, o););
                    return r;
                };
            }
            function Nr(n) {
                return function (t, r, e) {
                    var u = -1, i = Yu(t);
                    e = e(t);
                    for (var o = e.length; o--;) {
                        var f = e[n ? o : ++u];
                        if (false === r(i[f], f, i))
                            break;
                    }
                    return t;
                };
            }
            function Pr(n, t, r) {
                function e() {
                    return (this && this !== $n && this instanceof e ? i : n).apply(u ? r : this, arguments);
                }
                var u = 1 & t, i = Vr(n);
                return e;
            }
            function Zr(n) {
                return function (t) {
                    t = Ou(t);
                    var r = Rn.test(t) ? M(t) : T, e = r ? r[0] : t.charAt(0);
                    return t = r ? Or(r, 1).join('') : t.slice(1), e[n]() + t;
                };
            }
            function qr(n) {
                return function (t) {
                    return l(Du(Cu(t).replace(kn, '')), n, '');
                };
            }
            function Vr(n) {
                return function () {
                    var t = arguments;
                    switch (t.length) {
                    case 0:
                        return new n();
                    case 1:
                        return new n(t[0]);
                    case 2:
                        return new n(t[0], t[1]);
                    case 3:
                        return new n(t[0], t[1], t[2]);
                    case 4:
                        return new n(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new n(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                    }
                    var r = ro(n.prototype), t = n.apply(r, t);
                    return gu(t) ? t : r;
                };
            }
            function Kr(t, r, e) {
                function u() {
                    for (var o = arguments.length, f = Vu(o), c = o, a = de(u); c--;)
                        f[c] = arguments[c];
                    return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : L(f, a), o -= c.length, o < e ? ue(t, r, Jr, u.placeholder, T, f, c, T, T, e - o) : n(this && this !== $n && this instanceof u ? i : t, this, f);
                }
                var i = Vr(t);
                return u;
            }
            function Gr(n) {
                return function (t, r, e) {
                    var u = Yu(t);
                    if (!lu(t)) {
                        var i = ye(r, 3);
                        t = zu(t), r = function (n) {
                            return i(u[n], n, u);
                        };
                    }
                    return r = n(t, r, e), -1 < r ? u[i ? t[r] : r] : T;
                };
            }
            function Hr(n) {
                return pe(function (t) {
                    var r = t.length, e = r, u = On.prototype.thru;
                    for (n && t.reverse(); e--;) {
                        var i = t[e];
                        if (typeof i != 'function')
                            throw new ni('Expected a function');
                        if (u && !o && 'wrapper' == ge(i))
                            var o = new On([], true);
                    }
                    for (e = o ? e : r; ++e < r;)
                        var i = t[e], u = ge(i), f = 'wrapper' == u ? so(i) : T, o = f && Re(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[ge(f[0])].apply(o, f[3]) : 1 == i.length && Re(i) ? o[u]() : o.thru(i);
                    return function () {
                        var n = arguments, e = n[0];
                        if (o && 1 == n.length && of(e))
                            return o.plant(e).value();
                        for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r;)
                            n = t[u].call(this, n);
                        return n;
                    };
                });
            }
            function Jr(n, t, r, e, u, i, o, f, c, a) {
                function l() {
                    for (var d = arguments.length, y = Vu(d), b = d; b--;)
                        y[b] = arguments[b];
                    if (_) {
                        var x, j = de(l), b = y.length;
                        for (x = 0; b--;)
                            y[b] === j && ++x;
                    }
                    if (e && (y = Br(y, e, u, _)), i && (y = Lr(y, i, o, _)), d -= x, _ && d < a)
                        return j = L(y, j), ue(n, t, Jr, l.placeholder, r, y, j, f, c, a - d);
                    if (j = h ? r : this, b = p ? j[n] : n, d = y.length, f) {
                        x = y.length;
                        for (var w = Ui(f.length, x), m = Ur(y); w--;) {
                            var A = f[w];
                            y[w] = Se(A, x) ? m[A] : T;
                        }
                    } else
                        v && 1 < d && y.reverse();
                    return s && c < d && (y.length = c), this && this !== $n && this instanceof l && (b = g || Vr(b)), b.apply(j, y);
                }
                var s = 128 & t, h = 1 & t, p = 2 & t, _ = 24 & t, v = 512 & t, g = p ? T : Vr(n);
                return l;
            }
            function Yr(n, t) {
                return function (r, e) {
                    return Bt(r, n, t(e));
                };
            }
            function Qr(n, t) {
                return function (r, e) {
                    var u;
                    if (r === T && e === T)
                        return t;
                    if (r !== T && (u = r), e !== T) {
                        if (u === T)
                            return e;
                        typeof r == 'string' || typeof e == 'string' ? (r = yr(r), e = yr(e)) : (r = dr(r), e = dr(e)), u = n(r, e);
                    }
                    return u;
                };
            }
            function Xr(t) {
                return pe(function (r) {
                    return r = c(r, k(ye())), fr(function (e) {
                        var u = this;
                        return t(r, function (t) {
                            return n(t, u, e);
                        });
                    });
                });
            }
            function ne(n, t) {
                t = t === T ? ' ' : yr(t);
                var r = t.length;
                return 2 > r ? r ? or(t, n) : t : (r = or(t, Si(n / D(t))), Rn.test(t) ? Or(M(r), 0, n).join('') : r.slice(0, n));
            }
            function te(t, r, e, u) {
                function i() {
                    for (var r = -1, c = arguments.length, a = -1, l = u.length, s = Vu(l + c), h = this && this !== $n && this instanceof i ? f : t; ++a < l;)
                        s[a] = u[a];
                    for (; c--;)
                        s[a++] = arguments[++r];
                    return n(h, o ? e : this, s);
                }
                var o = 1 & r, f = Vr(t);
                return i;
            }
            function re(n) {
                return function (t, r, e) {
                    e && typeof e != 'number' && Oe(t, r, e) && (r = e = T), t = mu(t), r === T ? (r = t, t = 0) : r = mu(r), e = e === T ? t < r ? 1 : -1 : mu(e);
                    var u = -1;
                    r = Li(Si((r - t) / (e || 1)), 0);
                    for (var i = Vu(r); r--;)
                        i[n ? r : ++u] = t, t += e;
                    return i;
                };
            }
            function ee(n) {
                return function (t, r) {
                    return typeof t == 'string' && typeof r == 'string' || (t = ku(t), r = ku(r)), n(t, r);
                };
            }
            function ue(n, t, r, e, u, i, o, f, c, a) {
                var l = 8 & t, s = l ? o : T;
                o = l ? T : o;
                var h = l ? i : T;
                return i = l ? T : i, t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & t || (t &= -4), u = [
                    n,
                    t,
                    u,
                    h,
                    s,
                    i,
                    o,
                    f,
                    c,
                    a
                ], r = r.apply(T, u), Re(n) && go(r, u), r.placeholder = e, Le(r, n, t);
            }
            function ie(n) {
                var t = Ju[n];
                return function (n, r) {
                    if (n = ku(n), r = null == r ? 0 : Ui(Au(r), 292)) {
                        var e = (Ou(n) + 'e').split('e'), e = t(e[0] + 'e' + (+e[1] + r)), e = (Ou(e) + 'e').split('e');
                        return +(e[0] + 'e' + (+e[1] - r));
                    }
                    return t(n);
                };
            }
            function oe(n) {
                return function (t) {
                    var r = _o(t);
                    return '[object Map]' == r ? W(t) : '[object Set]' == r ? C(t) : E(t, n(t));
                };
            }
            function fe(n, t, r, e, u, i, o, f) {
                var c = 2 & t;
                if (!c && typeof n != 'function')
                    throw new ni('Expected a function');
                var a = e ? e.length : 0;
                if (a || (t &= -97, e = u = T), o = o === T ? o : Li(Au(o), 0), f = f === T ? f : Au(f), a -= u ? u.length : 0, 64 & t) {
                    var l = e, s = u;
                    e = u = T;
                }
                var h = c ? T : so(n);
                return i = [
                    n,
                    t,
                    r,
                    e,
                    u,
                    l,
                    s,
                    i,
                    o,
                    f
                ], h && (r = i[1], n = h[1], t = r | n, e = 128 == n && 8 == r || 128 == n && 256 == r && i[7].length <= h[8] || 384 == n && h[7].length <= h[8] && 8 == r, 131 > t || e) && (1 & n && (i[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], i[3] = e ? Br(e, r, h[4]) : r, i[4] = e ? L(i[3], '__lodash_placeholder__') : h[4]), (r = h[5]) && (e = i[5], i[5] = e ? Lr(e, r, h[6]) : r, i[6] = e ? L(i[5], '__lodash_placeholder__') : h[6]), (r = h[7]) && (i[7] = r), 128 & n && (i[8] = null == i[8] ? h[8] : Ui(i[8], h[8])), null == i[9] && (i[9] = h[9]), i[0] = h[0], i[1] = t), n = i[0], t = i[1], r = i[2], e = i[3], u = i[4], f = i[9] = i[9] === T ? c ? 0 : n.length : Li(i[9] - a, 0), !f && 24 & t && (t &= -25), Le((h ? fo : go)(t && 1 != t ? 8 == t || 16 == t ? Kr(n, t, f) : 32 != t && 33 != t || u.length ? Jr.apply(T, i) : te(n, t, r, e) : Pr(n, t, r), i), n, t);
            }
            function ce(n, t, r, e) {
                return n === T || au(n, ri[r]) && !ii.call(e, r) ? t : n;
            }
            function ae(n, t, r, e, u, i) {
                return gu(n) && gu(t) && (i.set(t, n), Yt(n, t, T, ae, i), i.delete(t)), n;
            }
            function le(n) {
                return bu(n) ? T : n;
            }
            function se(n, t, r, e, u, i) {
                var o = 1 & r, f = n.length, c = t.length;
                if (f != c && !(o && c > f))
                    return false;
                if ((c = i.get(n)) && i.get(t))
                    return c == t;
                var c = -1, a = true, l = 2 & r ? new Nn() : T;
                for (i.set(n, t), i.set(t, n); ++c < f;) {
                    var s = n[c], p = t[c];
                    if (e)
                        var _ = o ? e(p, s, c, t, n, i) : e(s, p, c, n, t, i);
                    if (_ !== T) {
                        if (_)
                            continue;
                        a = false;
                        break;
                    }
                    if (l) {
                        if (!h(t, function (n, t) {
                                if (!O(l, t) && (s === n || u(s, n, r, e, i)))
                                    return l.push(t);
                            })) {
                            a = false;
                            break;
                        }
                    } else if (s !== p && !u(s, p, r, e, i)) {
                        a = false;
                        break;
                    }
                }
                return i.delete(n), i.delete(t), a;
            }
            function he(n, t, r, e, u, i, o) {
                switch (r) {
                case '[object DataView]':
                    if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
                        break;
                    n = n.buffer, t = t.buffer;
                case '[object ArrayBuffer]':
                    if (n.byteLength != t.byteLength || !i(new _i(n), new _i(t)))
                        break;
                    return true;
                case '[object Boolean]':
                case '[object Date]':
                case '[object Number]':
                    return au(+n, +t);
                case '[object Error]':
                    return n.name == t.name && n.message == t.message;
                case '[object RegExp]':
                case '[object String]':
                    return n == t + '';
                case '[object Map]':
                    var f = W;
                case '[object Set]':
                    if (f || (f = U), n.size != t.size && !(1 & e))
                        break;
                    return (r = o.get(n)) ? r == t : (e |= 2, o.set(n, t), t = se(f(n), f(t), e, u, i, o), o.delete(n), t);
                case '[object Symbol]':
                    if (no)
                        return no.call(n) == no.call(t);
                }
                return false;
            }
            function pe(n) {
                return bo(Be(n, T, Pe), n + '');
            }
            function _e(n) {
                return St(n, zu, ho);
            }
            function ve(n) {
                return St(n, Wu, po);
            }
            function ge(n) {
                for (var t = n.name + '', r = Ki[t], e = ii.call(Ki, t) ? r.length : 0; e--;) {
                    var u = r[e], i = u.func;
                    if (null == i || i == n)
                        return u.name;
                }
                return t;
            }
            function de(n) {
                return (ii.call(An, 'placeholder') ? An : n).placeholder;
            }
            function ye() {
                var n = An.iteratee || $u, n = n === $u ? qt : n;
                return arguments.length ? n(arguments[0], arguments[1]) : n;
            }
            function be(n, t) {
                var r = n.__data__, e = typeof t;
                return ('string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
            }
            function xe(n) {
                for (var t = zu(n), r = t.length; r--;) {
                    var e = t[r], u = n[e];
                    t[r] = [
                        e,
                        u,
                        u === u && !gu(u)
                    ];
                }
                return t;
            }
            function je(n, t) {
                var r = null == n ? T : n[t];
                return Ft(r) ? r : T;
            }
            function we(n, t, r) {
                t = Sr(t, n);
                for (var e = -1, u = t.length, i = false; ++e < u;) {
                    var o = De(t[e]);
                    if (!(i = null != n && r(n, o)))
                        break;
                    n = n[o];
                }
                return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && vu(u) && Se(o, u) && (of(n) || uf(n)));
            }
            function me(n) {
                var t = n.length, r = new n.constructor(t);
                return t && 'string' == typeof n[0] && ii.call(n, 'index') && (r.index = n.index, r.input = n.input), r;
            }
            function Ae(n) {
                return typeof n.constructor != 'function' || ze(n) ? {} : ro(gi(n));
            }
            function Ee(n, t, r) {
                var e = n.constructor;
                switch (t) {
                case '[object ArrayBuffer]':
                    return Rr(n);
                case '[object Boolean]':
                case '[object Date]':
                    return new e(+n);
                case '[object DataView]':
                    return t = r ? Rr(n.buffer) : n.buffer, new n.constructor(t, n.byteOffset, n.byteLength);
                case '[object Float32Array]':
                case '[object Float64Array]':
                case '[object Int8Array]':
                case '[object Int16Array]':
                case '[object Int32Array]':
                case '[object Uint8Array]':
                case '[object Uint8ClampedArray]':
                case '[object Uint16Array]':
                case '[object Uint32Array]':
                    return zr(n, r);
                case '[object Map]':
                    return new e();
                case '[object Number]':
                case '[object String]':
                    return new e(n);
                case '[object RegExp]':
                    return t = new n.constructor(n.source, _n.exec(n)), t.lastIndex = n.lastIndex, t;
                case '[object Set]':
                    return new e();
                case '[object Symbol]':
                    return no ? Yu(no.call(n)) : {};
                }
            }
            function ke(n) {
                return of(n) || uf(n) || !!(xi && n && n[xi]);
            }
            function Se(n, t) {
                var r = typeof n;
                return t = null == t ? 9007199254740991 : t, !!t && ('number' == r || 'symbol' != r && bn.test(n)) && -1 < n && 0 == n % 1 && n < t;
            }
            function Oe(n, t, r) {
                if (!gu(r))
                    return false;
                var e = typeof t;
                return !!('number' == e ? lu(r) && Se(t, r.length) : 'string' == e && t in r) && au(r[t], n);
            }
            function Ie(n, t) {
                if (of(n))
                    return false;
                var r = typeof n;
                return !('number' != r && 'symbol' != r && 'boolean' != r && null != n && !ju(n)) || (nn.test(n) || !X.test(n) || null != t && n in Yu(t));
            }
            function Re(n) {
                var t = ge(n), r = An[t];
                return typeof r == 'function' && t in Un.prototype && (n === r || (t = so(r), !!t && n === t[0]));
            }
            function ze(n) {
                var t = n && n.constructor;
                return n === (typeof t == 'function' && t.prototype || ri);
            }
            function We(n, t) {
                return function (r) {
                    return null != r && (r[n] === t && (t !== T || n in Yu(r)));
                };
            }
            function Be(t, r, e) {
                return r = Li(r === T ? t.length - 1 : r, 0), function () {
                    for (var u = arguments, i = -1, o = Li(u.length - r, 0), f = Vu(o); ++i < o;)
                        f[i] = u[r + i];
                    for (i = -1, o = Vu(r + 1); ++i < r;)
                        o[i] = u[i];
                    return o[r] = e(f), n(t, this, o);
                };
            }
            function Le(n, t, r) {
                var e = t + '';
                t = bo;
                var u, i = Te;
                return u = (u = e.match(an)) ? u[1].split(ln) : [], r = i(u, r), (i = r.length) && (u = i - 1, r[u] = (1 < i ? '& ' : '') + r[u], r = r.join(2 < i ? ', ' : ' '), e = e.replace(cn, '{\n/* [wrapped with ' + r + '] */\n')), t(n, e);
            }
            function Ue(n) {
                var t = 0, r = 0;
                return function () {
                    var e = Ci(), u = 16 - (e - r);
                    if (r = e, 0 < u) {
                        if (800 <= ++t)
                            return arguments[0];
                    } else
                        t = 0;
                    return n.apply(T, arguments);
                };
            }
            function Ce(n, t) {
                var r = -1, e = n.length, u = e - 1;
                for (t = t === T ? e : t; ++r < t;) {
                    var e = ir(r, u), i = n[e];
                    n[e] = n[r], n[r] = i;
                }
                return n.length = t, n;
            }
            function De(n) {
                if (typeof n == 'string' || ju(n))
                    return n;
                var t = n + '';
                return '0' == t && 1 / n == -$ ? '-0' : t;
            }
            function Me(n) {
                if (null != n) {
                    try {
                        return ui.call(n);
                    } catch (n) {
                    }
                    return n + '';
                }
                return '';
            }
            function Te(n, t) {
                return r(N, function (r) {
                    var e = '_.' + r[0];
                    t & r[1] && !o(n, e) && n.push(e);
                }), n.sort();
            }
            function $e(n) {
                if (n instanceof Un)
                    return n.clone();
                var t = new On(n.__wrapped__, n.__chain__);
                return t.__actions__ = Ur(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
            }
            function Fe(n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r = null == r ? 0 : Au(r), 0 > r && (r = Li(e + r, 0)), _(n, ye(t, 3), r)) : -1;
            }
            function Ne(n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e)
                    return -1;
                var u = e - 1;
                return r !== T && (u = Au(r), u = 0 > r ? Li(e + u, 0) : Ui(u, e - 1)), _(n, ye(t, 3), u, true);
            }
            function Pe(n) {
                return (null == n ? 0 : n.length) ? wt(n, 1) : [];
            }
            function Ze(n) {
                return n && n.length ? n[0] : T;
            }
            function qe(n) {
                var t = null == n ? 0 : n.length;
                return t ? n[t - 1] : T;
            }
            function Ve(n, t) {
                return n && n.length && t && t.length ? er(n, t) : n;
            }
            function Ke(n) {
                return null == n ? n : Ti.call(n);
            }
            function Ge(n) {
                if (!n || !n.length)
                    return [];
                var t = 0;
                return n = i(n, function (n) {
                    if (su(n))
                        return t = Li(n.length, t), true;
                }), A(t, function (t) {
                    return c(n, b(t));
                });
            }
            function He(t, r) {
                if (!t || !t.length)
                    return [];
                var e = Ge(t);
                return null == r ? e : c(e, function (t) {
                    return n(r, T, t);
                });
            }
            function Je(n) {
                return n = An(n), n.__chain__ = true, n;
            }
            function Ye(n, t) {
                return t(n);
            }
            function Qe() {
                return this;
            }
            function Xe(n, t) {
                return (of(n) ? r : eo)(n, ye(t, 3));
            }
            function nu(n, t) {
                return (of(n) ? e : uo)(n, ye(t, 3));
            }
            function tu(n, t) {
                return (of(n) ? c : Gt)(n, ye(t, 3));
            }
            function ru(n, t, r) {
                return t = r ? T : t, t = n && null == t ? n.length : t, fe(n, 128, T, T, T, T, t);
            }
            function eu(n, t) {
                var r;
                if (typeof t != 'function')
                    throw new ni('Expected a function');
                return n = Au(n), function () {
                    return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = T), r;
                };
            }
            function uu(n, t, r) {
                return t = r ? T : t, n = fe(n, 8, T, T, T, T, T, t), n.placeholder = uu.placeholder, n;
            }
            function iu(n, t, r) {
                return t = r ? T : t, n = fe(n, 16, T, T, T, T, T, t), n.placeholder = iu.placeholder, n;
            }
            function ou(n, t, r) {
                function e(t) {
                    var r = c, e = a;
                    return c = a = T, _ = t, s = n.apply(e, r);
                }
                function u(n) {
                    var r = n - p;
                    return n -= _, p === T || r >= t || 0 > r || g && n >= l;
                }
                function i() {
                    var n = Ko();
                    if (u(n))
                        return o(n);
                    var r, e = yo;
                    r = n - _, n = t - (n - p), r = g ? Ui(n, l - r) : n, h = e(i, r);
                }
                function o(n) {
                    return h = T, d && c ? e(n) : (c = a = T, s);
                }
                function f() {
                    var n = Ko(), r = u(n);
                    if (c = arguments, a = this, p = n, r) {
                        if (h === T)
                            return _ = n = p, h = yo(i, t), v ? e(n) : s;
                        if (g)
                            return h = yo(i, t), e(p);
                    }
                    return h === T && (h = yo(i, t)), s;
                }
                var c, a, l, s, h, p, _ = 0, v = false, g = false, d = true;
                if (typeof n != 'function')
                    throw new ni('Expected a function');
                return t = ku(t) || 0, gu(r) && (v = !!r.leading, l = (g = 'maxWait' in r) ? Li(ku(r.maxWait) || 0, t) : l, d = 'trailing' in r ? !!r.trailing : d), f.cancel = function () {
                    h !== T && ao(h), _ = 0, c = p = a = h = T;
                }, f.flush = function () {
                    return h === T ? s : o(Ko());
                }, f;
            }
            function fu(n, t) {
                function r() {
                    var e = arguments, u = t ? t.apply(this, e) : e[0], i = r.cache;
                    return i.has(u) ? i.get(u) : (e = n.apply(this, e), r.cache = i.set(u, e) || i, e);
                }
                if (typeof n != 'function' || null != t && typeof t != 'function')
                    throw new ni('Expected a function');
                return r.cache = new (fu.Cache || Fn)(), r;
            }
            function cu(n) {
                if (typeof n != 'function')
                    throw new ni('Expected a function');
                return function () {
                    var t = arguments;
                    switch (t.length) {
                    case 0:
                        return !n.call(this);
                    case 1:
                        return !n.call(this, t[0]);
                    case 2:
                        return !n.call(this, t[0], t[1]);
                    case 3:
                        return !n.call(this, t[0], t[1], t[2]);
                    }
                    return !n.apply(this, t);
                };
            }
            function au(n, t) {
                return n === t || n !== n && t !== t;
            }
            function lu(n) {
                return null != n && vu(n.length) && !pu(n);
            }
            function su(n) {
                return du(n) && lu(n);
            }
            function hu(n) {
                if (!du(n))
                    return false;
                var t = Ot(n);
                return '[object Error]' == t || '[object DOMException]' == t || typeof n.message == 'string' && typeof n.name == 'string' && !bu(n);
            }
            function pu(n) {
                return !!gu(n) && (n = Ot(n), '[object Function]' == n || '[object GeneratorFunction]' == n || '[object AsyncFunction]' == n || '[object Proxy]' == n);
            }
            function _u(n) {
                return typeof n == 'number' && n == Au(n);
            }
            function vu(n) {
                return typeof n == 'number' && -1 < n && 0 == n % 1 && 9007199254740991 >= n;
            }
            function gu(n) {
                var t = typeof n;
                return null != n && ('object' == t || 'function' == t);
            }
            function du(n) {
                return null != n && typeof n == 'object';
            }
            function yu(n) {
                return typeof n == 'number' || du(n) && '[object Number]' == Ot(n);
            }
            function bu(n) {
                return !(!du(n) || '[object Object]' != Ot(n)) && (n = gi(n), null === n || (n = ii.call(n, 'constructor') && n.constructor, typeof n == 'function' && n instanceof n && ui.call(n) == ai));
            }
            function xu(n) {
                return typeof n == 'string' || !of(n) && du(n) && '[object String]' == Ot(n);
            }
            function ju(n) {
                return typeof n == 'symbol' || du(n) && '[object Symbol]' == Ot(n);
            }
            function wu(n) {
                if (!n)
                    return [];
                if (lu(n))
                    return xu(n) ? M(n) : Ur(n);
                if (ji && n[ji]) {
                    n = n[ji]();
                    for (var t, r = []; !(t = n.next()).done;)
                        r.push(t.value);
                    return r;
                }
                return t = _o(n), ('[object Map]' == t ? W : '[object Set]' == t ? U : Lu)(n);
            }
            function mu(n) {
                return n ? (n = ku(n), n === $ || n === -$ ? 1.7976931348623157e+308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0;
            }
            function Au(n) {
                n = mu(n);
                var t = n % 1;
                return n === n ? t ? n - t : n : 0;
            }
            function Eu(n) {
                return n ? pt(Au(n), 0, 4294967295) : 0;
            }
            function ku(n) {
                if (typeof n == 'number')
                    return n;
                if (ju(n))
                    return F;
                if (gu(n) && (n = typeof n.valueOf == 'function' ? n.valueOf() : n, n = gu(n) ? n + '' : n), typeof n != 'string')
                    return 0 === n ? n : +n;
                n = n.replace(un, '');
                var t = gn.test(n);
                return t || yn.test(n) ? Dn(n.slice(2), t ? 2 : 8) : vn.test(n) ? F : +n;
            }
            function Su(n) {
                return Cr(n, Wu(n));
            }
            function Ou(n) {
                return null == n ? '' : yr(n);
            }
            function Iu(n, t, r) {
                return n = null == n ? T : kt(n, t), n === T ? r : n;
            }
            function Ru(n, t) {
                return null != n && we(n, t, zt);
            }
            function zu(n) {
                return lu(n) ? qn(n) : Vt(n);
            }
            function Wu(n) {
                if (lu(n))
                    n = qn(n, true);
                else if (gu(n)) {
                    var t, r = ze(n), e = [];
                    for (t in n)
                        ('constructor' != t || !r && ii.call(n, t)) && e.push(t);
                    n = e;
                } else {
                    if (t = [], null != n)
                        for (r in Yu(n))
                            t.push(r);
                    n = t;
                }
                return n;
            }
            function Bu(n, t) {
                if (null == n)
                    return {};
                var r = c(ve(n), function (n) {
                    return [n];
                });
                return t = ye(t), tr(n, r, function (n, r) {
                    return t(n, r[0]);
                });
            }
            function Lu(n) {
                return null == n ? [] : S(n, zu(n));
            }
            function Uu(n) {
                return Tf(Ou(n).toLowerCase());
            }
            function Cu(n) {
                return (n = Ou(n)) && n.replace(xn, Xn).replace(Sn, '');
            }
            function Du(n, t, r) {
                return n = Ou(n), t = r ? T : t, t === T ? zn.test(n) ? n.match(In) || [] : n.match(sn) || [] : n.match(t) || [];
            }
            function Mu(n) {
                return function () {
                    return n;
                };
            }
            function Tu(n) {
                return n;
            }
            function $u(n) {
                return qt(typeof n == 'function' ? n : _t(n, 1));
            }
            function Fu(n, t, e) {
                var u = zu(t), i = Et(t, u);
                null != e || gu(t) && (i.length || !u.length) || (e = t, t = n, n = this, i = Et(t, zu(t)));
                var o = !(gu(e) && 'chain' in e && !e.chain), f = pu(n);
                return r(i, function (r) {
                    var e = t[r];
                    n[r] = e, f && (n.prototype[r] = function () {
                        var t = this.__chain__;
                        if (o || t) {
                            var r = n(this.__wrapped__);
                            return (r.__actions__ = Ur(this.__actions__)).push({
                                func: e,
                                args: arguments,
                                thisArg: n
                            }), r.__chain__ = t, r;
                        }
                        return e.apply(n, a([this.value()], arguments));
                    });
                }), n;
            }
            function Nu() {
            }
            function Pu(n) {
                return Ie(n) ? b(De(n)) : rr(n);
            }
            function Zu() {
                return [];
            }
            function qu() {
                return false;
            }
            mn = null == mn ? $n : rt.defaults($n.Object(), mn, rt.pick($n, Wn));
            var Vu = mn.Array, Ku = mn.Date, Gu = mn.Error, Hu = mn.Function, Ju = mn.Math, Yu = mn.Object, Qu = mn.RegExp, Xu = mn.String, ni = mn.TypeError, ti = Vu.prototype, ri = Yu.prototype, ei = mn['__core-js_shared__'], ui = Hu.prototype.toString, ii = ri.hasOwnProperty, oi = 0, fi = function () {
                    var n = /[^.]+$/.exec(ei && ei.keys && ei.keys.IE_PROTO || '');
                    return n ? 'Symbol(src)_1.' + n : '';
                }(), ci = ri.toString, ai = ui.call(Yu), li = $n._, si = Qu('^' + ui.call(ii).replace(rn, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'), hi = Pn ? mn.Buffer : T, pi = mn.Symbol, _i = mn.Uint8Array, vi = hi ? hi.g : T, gi = B(Yu.getPrototypeOf, Yu), di = Yu.create, yi = ri.propertyIsEnumerable, bi = ti.splice, xi = pi ? pi.isConcatSpreadable : T, ji = pi ? pi.iterator : T, wi = pi ? pi.toStringTag : T, mi = function () {
                    try {
                        var n = je(Yu, 'defineProperty');
                        return n({}, '', {}), n;
                    } catch (n) {
                    }
                }(), Ai = mn.clearTimeout !== $n.clearTimeout && mn.clearTimeout, Ei = Ku && Ku.now !== $n.Date.now && Ku.now, ki = mn.setTimeout !== $n.setTimeout && mn.setTimeout, Si = Ju.ceil, Oi = Ju.floor, Ii = Yu.getOwnPropertySymbols, Ri = hi ? hi.isBuffer : T, zi = mn.isFinite, Wi = ti.join, Bi = B(Yu.keys, Yu), Li = Ju.max, Ui = Ju.min, Ci = Ku.now, Di = mn.parseInt, Mi = Ju.random, Ti = ti.reverse, $i = je(mn, 'DataView'), Fi = je(mn, 'Map'), Ni = je(mn, 'Promise'), Pi = je(mn, 'Set'), Zi = je(mn, 'WeakMap'), qi = je(Yu, 'create'), Vi = Zi && new Zi(), Ki = {}, Gi = Me($i), Hi = Me(Fi), Ji = Me(Ni), Yi = Me(Pi), Qi = Me(Zi), Xi = pi ? pi.prototype : T, no = Xi ? Xi.valueOf : T, to = Xi ? Xi.toString : T, ro = function () {
                    function n() {
                    }
                    return function (t) {
                        return gu(t) ? di ? di(t) : (n.prototype = t, t = new n(), n.prototype = T, t) : {};
                    };
                }();
            An.templateSettings = {
                escape: J,
                evaluate: Y,
                interpolate: Q,
                variable: '',
                imports: { _: An }
            }, An.prototype = En.prototype, An.prototype.constructor = An, On.prototype = ro(En.prototype), On.prototype.constructor = On, Un.prototype = ro(En.prototype), Un.prototype.constructor = Un, Mn.prototype.clear = function () {
                this.__data__ = qi ? qi(null) : {}, this.size = 0;
            }, Mn.prototype.delete = function (n) {
                return n = this.has(n) && delete this.__data__[n], this.size -= n ? 1 : 0, n;
            }, Mn.prototype.get = function (n) {
                var t = this.__data__;
                return qi ? (n = t[n], '__lodash_hash_undefined__' === n ? T : n) : ii.call(t, n) ? t[n] : T;
            }, Mn.prototype.has = function (n) {
                var t = this.__data__;
                return qi ? t[n] !== T : ii.call(t, n);
            }, Mn.prototype.set = function (n, t) {
                var r = this.__data__;
                return this.size += this.has(n) ? 0 : 1, r[n] = qi && t === T ? '__lodash_hash_undefined__' : t, this;
            }, Tn.prototype.clear = function () {
                this.__data__ = [], this.size = 0;
            }, Tn.prototype.delete = function (n) {
                var t = this.__data__;
                return n = ft(t, n), !(0 > n) && (n == t.length - 1 ? t.pop() : bi.call(t, n, 1), --this.size, true);
            }, Tn.prototype.get = function (n) {
                var t = this.__data__;
                return n = ft(t, n), 0 > n ? T : t[n][1];
            }, Tn.prototype.has = function (n) {
                return -1 < ft(this.__data__, n);
            }, Tn.prototype.set = function (n, t) {
                var r = this.__data__, e = ft(r, n);
                return 0 > e ? (++this.size, r.push([
                    n,
                    t
                ])) : r[e][1] = t, this;
            }, Fn.prototype.clear = function () {
                this.size = 0, this.__data__ = {
                    hash: new Mn(),
                    map: new (Fi || Tn)(),
                    string: new Mn()
                };
            }, Fn.prototype.delete = function (n) {
                return n = be(this, n).delete(n), this.size -= n ? 1 : 0, n;
            }, Fn.prototype.get = function (n) {
                return be(this, n).get(n);
            }, Fn.prototype.has = function (n) {
                return be(this, n).has(n);
            }, Fn.prototype.set = function (n, t) {
                var r = be(this, n), e = r.size;
                return r.set(n, t), this.size += r.size == e ? 0 : 1, this;
            }, Nn.prototype.add = Nn.prototype.push = function (n) {
                return this.__data__.set(n, '__lodash_hash_undefined__'), this;
            }, Nn.prototype.has = function (n) {
                return this.__data__.has(n);
            }, Zn.prototype.clear = function () {
                this.__data__ = new Tn(), this.size = 0;
            }, Zn.prototype.delete = function (n) {
                var t = this.__data__;
                return n = t.delete(n), this.size = t.size, n;
            }, Zn.prototype.get = function (n) {
                return this.__data__.get(n);
            }, Zn.prototype.has = function (n) {
                return this.__data__.has(n);
            }, Zn.prototype.set = function (n, t) {
                var r = this.__data__;
                if (r instanceof Tn) {
                    var e = r.__data__;
                    if (!Fi || 199 > e.length)
                        return e.push([
                            n,
                            t
                        ]), this.size = ++r.size, this;
                    r = this.__data__ = new Fn(e);
                }
                return r.set(n, t), this.size = r.size, this;
            };
            var eo = Fr(mt), uo = Fr(At, true), io = Nr(), oo = Nr(true), fo = Vi ? function (n, t) {
                    return Vi.set(n, t), n;
                } : Tu, co = mi ? function (n, t) {
                    return mi(n, 'toString', {
                        configurable: true,
                        enumerable: false,
                        value: Mu(t),
                        writable: true
                    });
                } : Tu, ao = Ai || function (n) {
                    return $n.clearTimeout(n);
                }, lo = Pi && 1 / U(new Pi([
                    ,
                    -0
                ]))[1] == $ ? function (n) {
                    return new Pi(n);
                } : Nu, so = Vi ? function (n) {
                    return Vi.get(n);
                } : Nu, ho = Ii ? function (n) {
                    return null == n ? [] : (n = Yu(n), i(Ii(n), function (t) {
                        return yi.call(n, t);
                    }));
                } : Zu, po = Ii ? function (n) {
                    for (var t = []; n;)
                        a(t, ho(n)), n = gi(n);
                    return t;
                } : Zu, _o = Ot;
            ($i && '[object DataView]' != _o(new $i(new ArrayBuffer(1))) || Fi && '[object Map]' != _o(new Fi()) || Ni && '[object Promise]' != _o(Ni.resolve()) || Pi && '[object Set]' != _o(new Pi()) || Zi && '[object WeakMap]' != _o(new Zi())) && (_o = function (n) {
                var t = Ot(n);
                if (n = (n = '[object Object]' == t ? n.constructor : T) ? Me(n) : '')
                    switch (n) {
                    case Gi:
                        return '[object DataView]';
                    case Hi:
                        return '[object Map]';
                    case Ji:
                        return '[object Promise]';
                    case Yi:
                        return '[object Set]';
                    case Qi:
                        return '[object WeakMap]';
                    }
                return t;
            });
            var vo = ei ? pu : qu, go = Ue(fo), yo = ki || function (n, t) {
                    return $n.setTimeout(n, t);
                }, bo = Ue(co), xo = function (n) {
                    n = fu(n, function (n) {
                        return 500 === t.size && t.clear(), n;
                    });
                    var t = n.cache;
                    return n;
                }(function (n) {
                    var t = [];
                    return 46 === n.charCodeAt(0) && t.push(''), n.replace(tn, function (n, r, e, u) {
                        t.push(e ? u.replace(hn, '$1') : r || n);
                    }), t;
                }), jo = fr(function (n, t) {
                    return su(n) ? yt(n, wt(t, 1, su, true)) : [];
                }), wo = fr(function (n, t) {
                    var r = qe(t);
                    return su(r) && (r = T), su(n) ? yt(n, wt(t, 1, su, true), ye(r, 2)) : [];
                }), mo = fr(function (n, t) {
                    var r = qe(t);
                    return su(r) && (r = T), su(n) ? yt(n, wt(t, 1, su, true), T, r) : [];
                }), Ao = fr(function (n) {
                    var t = c(n, Er);
                    return t.length && t[0] === n[0] ? Wt(t) : [];
                }), Eo = fr(function (n) {
                    var t = qe(n), r = c(n, Er);
                    return t === qe(r) ? t = T : r.pop(), r.length && r[0] === n[0] ? Wt(r, ye(t, 2)) : [];
                }), ko = fr(function (n) {
                    var t = qe(n), r = c(n, Er);
                    return (t = typeof t == 'function' ? t : T) && r.pop(), r.length && r[0] === n[0] ? Wt(r, T, t) : [];
                }), So = fr(Ve), Oo = pe(function (n, t) {
                    var r = null == n ? 0 : n.length, e = ht(n, t);
                    return ur(n, c(t, function (n) {
                        return Se(n, r) ? +n : n;
                    }).sort(Wr)), e;
                }), Io = fr(function (n) {
                    return br(wt(n, 1, su, true));
                }), Ro = fr(function (n) {
                    var t = qe(n);
                    return su(t) && (t = T), br(wt(n, 1, su, true), ye(t, 2));
                }), zo = fr(function (n) {
                    var t = qe(n), t = typeof t == 'function' ? t : T;
                    return br(wt(n, 1, su, true), T, t);
                }), Wo = fr(function (n, t) {
                    return su(n) ? yt(n, t) : [];
                }), Bo = fr(function (n) {
                    return mr(i(n, su));
                }), Lo = fr(function (n) {
                    var t = qe(n);
                    return su(t) && (t = T), mr(i(n, su), ye(t, 2));
                }), Uo = fr(function (n) {
                    var t = qe(n), t = typeof t == 'function' ? t : T;
                    return mr(i(n, su), T, t);
                }), Co = fr(Ge), Do = fr(function (n) {
                    var t = n.length, t = 1 < t ? n[t - 1] : T, t = typeof t == 'function' ? (n.pop(), t) : T;
                    return He(n, t);
                }), Mo = pe(function (n) {
                    function t(t) {
                        return ht(t, n);
                    }
                    var r = n.length, e = r ? n[0] : 0, u = this.__wrapped__;
                    return !(1 < r || this.__actions__.length) && u instanceof Un && Se(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({
                        func: Ye,
                        args: [t],
                        thisArg: T
                    }), new On(u, this.__chain__).thru(function (n) {
                        return r && !n.length && n.push(T), n;
                    })) : this.thru(t);
                }), To = Tr(function (n, t, r) {
                    ii.call(n, r) ? ++n[r] : st(n, r, 1);
                }), $o = Gr(Fe), Fo = Gr(Ne), No = Tr(function (n, t, r) {
                    ii.call(n, r) ? n[r].push(t) : st(n, r, [t]);
                }), Po = fr(function (t, r, e) {
                    var u = -1, i = typeof r == 'function', o = lu(t) ? Vu(t.length) : [];
                    return eo(t, function (t) {
                        o[++u] = i ? n(r, t, e) : Lt(t, r, e);
                    }), o;
                }), Zo = Tr(function (n, t, r) {
                    st(n, r, t);
                }), qo = Tr(function (n, t, r) {
                    n[r ? 0 : 1].push(t);
                }, function () {
                    return [
                        [],
                        []
                    ];
                }), Vo = fr(function (n, t) {
                    if (null == n)
                        return [];
                    var r = t.length;
                    return 1 < r && Oe(n, t[0], t[1]) ? t = [] : 2 < r && Oe(t[0], t[1], t[2]) && (t = [t[0]]), Xt(n, wt(t, 1), []);
                }), Ko = Ei || function () {
                    return $n.Date.now();
                }, Go = fr(function (n, t, r) {
                    var e = 1;
                    if (r.length)
                        var u = L(r, de(Go)), e = 32 | e;
                    return fe(n, e, t, r, u);
                }), Ho = fr(function (n, t, r) {
                    var e = 3;
                    if (r.length)
                        var u = L(r, de(Ho)), e = 32 | e;
                    return fe(t, e, n, r, u);
                }), Jo = fr(function (n, t) {
                    return dt(n, 1, t);
                }), Yo = fr(function (n, t, r) {
                    return dt(n, ku(t) || 0, r);
                });
            fu.Cache = Fn;
            var Qo = fr(function (t, r) {
                    r = 1 == r.length && of(r[0]) ? c(r[0], k(ye())) : c(wt(r, 1), k(ye()));
                    var e = r.length;
                    return fr(function (u) {
                        for (var i = -1, o = Ui(u.length, e); ++i < o;)
                            u[i] = r[i].call(this, u[i]);
                        return n(t, this, u);
                    });
                }), Xo = fr(function (n, t) {
                    return fe(n, 32, T, t, L(t, de(Xo)));
                }), nf = fr(function (n, t) {
                    return fe(n, 64, T, t, L(t, de(nf)));
                }), tf = pe(function (n, t) {
                    return fe(n, 256, T, T, T, t);
                }), rf = ee(It), ef = ee(function (n, t) {
                    return n >= t;
                }), uf = Ut(function () {
                    return arguments;
                }()) ? Ut : function (n) {
                    return du(n) && ii.call(n, 'callee') && !yi.call(n, 'callee');
                }, of = Vu.isArray, ff = Vn ? k(Vn) : Ct, cf = Ri || qu, af = Kn ? k(Kn) : Dt, lf = Gn ? k(Gn) : Tt, sf = Hn ? k(Hn) : Nt, hf = Jn ? k(Jn) : Pt, pf = Yn ? k(Yn) : Zt, _f = ee(Kt), vf = ee(function (n, t) {
                    return n <= t;
                }), gf = $r(function (n, t) {
                    if (ze(t) || lu(t))
                        Cr(t, zu(t), n);
                    else
                        for (var r in t)
                            ii.call(t, r) && ot(n, r, t[r]);
                }), df = $r(function (n, t) {
                    Cr(t, Wu(t), n);
                }), yf = $r(function (n, t, r, e) {
                    Cr(t, Wu(t), n, e);
                }), bf = $r(function (n, t, r, e) {
                    Cr(t, zu(t), n, e);
                }), xf = pe(ht), jf = fr(function (n, t) {
                    n = Yu(n);
                    var r = -1, e = t.length, u = 2 < e ? t[2] : T;
                    for (u && Oe(t[0], t[1], u) && (e = 1); ++r < e;)
                        for (var u = t[r], i = Wu(u), o = -1, f = i.length; ++o < f;) {
                            var c = i[o], a = n[c];
                            (a === T || au(a, ri[c]) && !ii.call(n, c)) && (n[c] = u[c]);
                        }
                    return n;
                }), wf = fr(function (t) {
                    return t.push(T, ae), n(Sf, T, t);
                }), mf = Yr(function (n, t, r) {
                    null != t && typeof t.toString != 'function' && (t = ci.call(t)), n[t] = r;
                }, Mu(Tu)), Af = Yr(function (n, t, r) {
                    null != t && typeof t.toString != 'function' && (t = ci.call(t)), ii.call(n, t) ? n[t].push(r) : n[t] = [r];
                }, ye), Ef = fr(Lt), kf = $r(function (n, t, r) {
                    Yt(n, t, r);
                }), Sf = $r(function (n, t, r, e) {
                    Yt(n, t, r, e);
                }), Of = pe(function (n, t) {
                    var r = {};
                    if (null == n)
                        return r;
                    var e = false;
                    t = c(t, function (t) {
                        return t = Sr(t, n), e || (e = 1 < t.length), t;
                    }), Cr(n, ve(n), r), e && (r = _t(r, 7, le));
                    for (var u = t.length; u--;)
                        xr(r, t[u]);
                    return r;
                }), If = pe(function (n, t) {
                    return null == n ? {} : nr(n, t);
                }), Rf = oe(zu), zf = oe(Wu), Wf = qr(function (n, t, r) {
                    return t = t.toLowerCase(), n + (r ? Uu(t) : t);
                }), Bf = qr(function (n, t, r) {
                    return n + (r ? '-' : '') + t.toLowerCase();
                }), Lf = qr(function (n, t, r) {
                    return n + (r ? ' ' : '') + t.toLowerCase();
                }), Uf = Zr('toLowerCase'), Cf = qr(function (n, t, r) {
                    return n + (r ? '_' : '') + t.toLowerCase();
                }), Df = qr(function (n, t, r) {
                    return n + (r ? ' ' : '') + Tf(t);
                }), Mf = qr(function (n, t, r) {
                    return n + (r ? ' ' : '') + t.toUpperCase();
                }), Tf = Zr('toUpperCase'), $f = fr(function (t, r) {
                    try {
                        return n(t, T, r);
                    } catch (n) {
                        return hu(n) ? n : new Gu(n);
                    }
                }), Ff = pe(function (n, t) {
                    return r(t, function (t) {
                        t = De(t), st(n, t, Go(n[t], n));
                    }), n;
                }), Nf = Hr(), Pf = Hr(true), Zf = fr(function (n, t) {
                    return function (r) {
                        return Lt(r, n, t);
                    };
                }), qf = fr(function (n, t) {
                    return function (r) {
                        return Lt(n, r, t);
                    };
                }), Vf = Xr(c), Kf = Xr(u), Gf = Xr(h), Hf = re(), Jf = re(true), Yf = Qr(function (n, t) {
                    return n + t;
                }, 0), Qf = ie('ceil'), Xf = Qr(function (n, t) {
                    return n / t;
                }, 1), nc = ie('floor'), tc = Qr(function (n, t) {
                    return n * t;
                }, 1), rc = ie('round'), ec = Qr(function (n, t) {
                    return n - t;
                }, 0);
            return An.after = function (n, t) {
                if (typeof t != 'function')
                    throw new ni('Expected a function');
                return n = Au(n), function () {
                    if (1 > --n)
                        return t.apply(this, arguments);
                };
            }, An.ary = ru, An.assign = gf, An.assignIn = df, An.assignInWith = yf, An.assignWith = bf, An.at = xf, An.before = eu, An.bind = Go, An.bindAll = Ff, An.bindKey = Ho, An.castArray = function () {
                if (!arguments.length)
                    return [];
                var n = arguments[0];
                return of(n) ? n : [n];
            }, An.chain = Je, An.chunk = function (n, t, r) {
                if (t = (r ? Oe(n, t, r) : t === T) ? 1 : Li(Au(t), 0), r = null == n ? 0 : n.length, !r || 1 > t)
                    return [];
                for (var e = 0, u = 0, i = Vu(Si(r / t)); e < r;)
                    i[u++] = hr(n, e, e += t);
                return i;
            }, An.compact = function (n) {
                for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
                    var i = n[t];
                    i && (u[e++] = i);
                }
                return u;
            }, An.concat = function () {
                var n = arguments.length;
                if (!n)
                    return [];
                for (var t = Vu(n - 1), r = arguments[0]; n--;)
                    t[n - 1] = arguments[n];
                return a(of(r) ? Ur(r) : [r], wt(t, 1));
            }, An.cond = function (t) {
                var r = null == t ? 0 : t.length, e = ye();
                return t = r ? c(t, function (n) {
                    if ('function' != typeof n[1])
                        throw new ni('Expected a function');
                    return [
                        e(n[0]),
                        n[1]
                    ];
                }) : [], fr(function (e) {
                    for (var u = -1; ++u < r;) {
                        var i = t[u];
                        if (n(i[0], this, e))
                            return n(i[1], this, e);
                    }
                });
            }, An.conforms = function (n) {
                return vt(_t(n, 1));
            }, An.constant = Mu, An.countBy = To, An.create = function (n, t) {
                var r = ro(n);
                return null == t ? r : at(r, t);
            }, An.curry = uu, An.curryRight = iu, An.debounce = ou, An.defaults = jf, An.defaultsDeep = wf, An.defer = Jo, An.delay = Yo, An.difference = jo, An.differenceBy = wo, An.differenceWith = mo, An.drop = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === T ? 1 : Au(t), hr(n, 0 > t ? 0 : t, e)) : [];
            }, An.dropRight = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === T ? 1 : Au(t), t = e - t, hr(n, 0, 0 > t ? 0 : t)) : [];
            }, An.dropRightWhile = function (n, t) {
                return n && n.length ? jr(n, ye(t, 3), true, true) : [];
            }, An.dropWhile = function (n, t) {
                return n && n.length ? jr(n, ye(t, 3), true) : [];
            }, An.fill = function (n, t, r, e) {
                var u = null == n ? 0 : n.length;
                if (!u)
                    return [];
                for (r && typeof r != 'number' && Oe(n, t, r) && (r = 0, e = u), u = n.length, r = Au(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === T || e > u ? u : Au(e), 0 > e && (e += u), e = r > e ? 0 : Eu(e); r < e;)
                    n[r++] = t;
                return n;
            }, An.filter = function (n, t) {
                return (of(n) ? i : jt)(n, ye(t, 3));
            }, An.flatMap = function (n, t) {
                return wt(tu(n, t), 1);
            }, An.flatMapDeep = function (n, t) {
                return wt(tu(n, t), $);
            }, An.flatMapDepth = function (n, t, r) {
                return r = r === T ? 1 : Au(r), wt(tu(n, t), r);
            }, An.flatten = Pe, An.flattenDeep = function (n) {
                return (null == n ? 0 : n.length) ? wt(n, $) : [];
            }, An.flattenDepth = function (n, t) {
                return null != n && n.length ? (t = t === T ? 1 : Au(t), wt(n, t)) : [];
            }, An.flip = function (n) {
                return fe(n, 512);
            }, An.flow = Nf, An.flowRight = Pf, An.fromPairs = function (n) {
                for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
                    var u = n[t];
                    e[u[0]] = u[1];
                }
                return e;
            }, An.functions = function (n) {
                return null == n ? [] : Et(n, zu(n));
            }, An.functionsIn = function (n) {
                return null == n ? [] : Et(n, Wu(n));
            }, An.groupBy = No, An.initial = function (n) {
                return (null == n ? 0 : n.length) ? hr(n, 0, -1) : [];
            }, An.intersection = Ao, An.intersectionBy = Eo, An.intersectionWith = ko, An.invert = mf, An.invertBy = Af, An.invokeMap = Po, An.iteratee = $u, An.keyBy = Zo, An.keys = zu, An.keysIn = Wu, An.map = tu, An.mapKeys = function (n, t) {
                var r = {};
                return t = ye(t, 3), mt(n, function (n, e, u) {
                    st(r, t(n, e, u), n);
                }), r;
            }, An.mapValues = function (n, t) {
                var r = {};
                return t = ye(t, 3), mt(n, function (n, e, u) {
                    st(r, e, t(n, e, u));
                }), r;
            }, An.matches = function (n) {
                return Ht(_t(n, 1));
            }, An.matchesProperty = function (n, t) {
                return Jt(n, _t(t, 1));
            }, An.memoize = fu, An.merge = kf, An.mergeWith = Sf, An.method = Zf, An.methodOf = qf, An.mixin = Fu, An.negate = cu, An.nthArg = function (n) {
                return n = Au(n), fr(function (t) {
                    return Qt(t, n);
                });
            }, An.omit = Of, An.omitBy = function (n, t) {
                return Bu(n, cu(ye(t)));
            }, An.once = function (n) {
                return eu(2, n);
            }, An.orderBy = function (n, t, r, e) {
                return null == n ? [] : (of(t) || (t = null == t ? [] : [t]), r = e ? T : r, of(r) || (r = null == r ? [] : [r]), Xt(n, t, r));
            }, An.over = Vf, An.overArgs = Qo, An.overEvery = Kf, An.overSome = Gf, An.partial = Xo, An.partialRight = nf, An.partition = qo, An.pick = If, An.pickBy = Bu, An.property = Pu, An.propertyOf = function (n) {
                return function (t) {
                    return null == n ? T : kt(n, t);
                };
            }, An.pull = So, An.pullAll = Ve, An.pullAllBy = function (n, t, r) {
                return n && n.length && t && t.length ? er(n, t, ye(r, 2)) : n;
            }, An.pullAllWith = function (n, t, r) {
                return n && n.length && t && t.length ? er(n, t, T, r) : n;
            }, An.pullAt = Oo, An.range = Hf, An.rangeRight = Jf, An.rearg = tf, An.reject = function (n, t) {
                return (of(n) ? i : jt)(n, cu(ye(t, 3)));
            }, An.remove = function (n, t) {
                var r = [];
                if (!n || !n.length)
                    return r;
                var e = -1, u = [], i = n.length;
                for (t = ye(t, 3); ++e < i;) {
                    var o = n[e];
                    t(o, e, n) && (r.push(o), u.push(e));
                }
                return ur(n, u), r;
            }, An.rest = function (n, t) {
                if (typeof n != 'function')
                    throw new ni('Expected a function');
                return t = t === T ? t : Au(t), fr(n, t);
            }, An.reverse = Ke, An.sampleSize = function (n, t, r) {
                return t = (r ? Oe(n, t, r) : t === T) ? 1 : Au(t), (of(n) ? et : ar)(n, t);
            }, An.set = function (n, t, r) {
                return null == n ? n : lr(n, t, r);
            }, An.setWith = function (n, t, r, e) {
                return e = typeof e == 'function' ? e : T, null == n ? n : lr(n, t, r, e);
            }, An.shuffle = function (n) {
                return (of(n) ? ut : sr)(n);
            }, An.slice = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r && typeof r != 'number' && Oe(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Au(t), r = r === T ? e : Au(r)), hr(n, t, r)) : [];
            }, An.sortBy = Vo, An.sortedUniq = function (n) {
                return n && n.length ? gr(n) : [];
            }, An.sortedUniqBy = function (n, t) {
                return n && n.length ? gr(n, ye(t, 2)) : [];
            }, An.split = function (n, t, r) {
                return r && typeof r != 'number' && Oe(n, t, r) && (t = r = T), r = r === T ? 4294967295 : r >>> 0, r ? (n = Ou(n)) && (typeof t == 'string' || null != t && !sf(t)) && (t = yr(t), !t && Rn.test(n)) ? Or(M(n), 0, r) : n.split(t, r) : [];
            }, An.spread = function (t, r) {
                if (typeof t != 'function')
                    throw new ni('Expected a function');
                return r = null == r ? 0 : Li(Au(r), 0), fr(function (e) {
                    var u = e[r];
                    return e = Or(e, 0, r), u && a(e, u), n(t, this, e);
                });
            }, An.tail = function (n) {
                var t = null == n ? 0 : n.length;
                return t ? hr(n, 1, t) : [];
            }, An.take = function (n, t, r) {
                return n && n.length ? (t = r || t === T ? 1 : Au(t), hr(n, 0, 0 > t ? 0 : t)) : [];
            }, An.takeRight = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === T ? 1 : Au(t), t = e - t, hr(n, 0 > t ? 0 : t, e)) : [];
            }, An.takeRightWhile = function (n, t) {
                return n && n.length ? jr(n, ye(t, 3), false, true) : [];
            }, An.takeWhile = function (n, t) {
                return n && n.length ? jr(n, ye(t, 3)) : [];
            }, An.tap = function (n, t) {
                return t(n), n;
            }, An.throttle = function (n, t, r) {
                var e = true, u = true;
                if (typeof n != 'function')
                    throw new ni('Expected a function');
                return gu(r) && (e = 'leading' in r ? !!r.leading : e, u = 'trailing' in r ? !!r.trailing : u), ou(n, t, {
                    leading: e,
                    maxWait: t,
                    trailing: u
                });
            }, An.thru = Ye, An.toArray = wu, An.toPairs = Rf, An.toPairsIn = zf, An.toPath = function (n) {
                return of(n) ? c(n, De) : ju(n) ? [n] : Ur(xo(Ou(n)));
            }, An.toPlainObject = Su, An.transform = function (n, t, e) {
                var u = of(n), i = u || cf(n) || pf(n);
                if (t = ye(t, 4), null == e) {
                    var o = n && n.constructor;
                    e = i ? u ? new o() : [] : gu(n) && pu(o) ? ro(gi(n)) : {};
                }
                return (i ? r : mt)(n, function (n, r, u) {
                    return t(e, n, r, u);
                }), e;
            }, An.unary = function (n) {
                return ru(n, 1);
            }, An.union = Io, An.unionBy = Ro, An.unionWith = zo, An.uniq = function (n) {
                return n && n.length ? br(n) : [];
            }, An.uniqBy = function (n, t) {
                return n && n.length ? br(n, ye(t, 2)) : [];
            }, An.uniqWith = function (n, t) {
                return t = typeof t == 'function' ? t : T, n && n.length ? br(n, T, t) : [];
            }, An.unset = function (n, t) {
                return null == n || xr(n, t);
            }, An.unzip = Ge, An.unzipWith = He, An.update = function (n, t, r) {
                return null == n ? n : lr(n, t, kr(r)(kt(n, t)), void 0);
            }, An.updateWith = function (n, t, r, e) {
                return e = typeof e == 'function' ? e : T, null != n && (n = lr(n, t, kr(r)(kt(n, t)), e)), n;
            }, An.values = Lu, An.valuesIn = function (n) {
                return null == n ? [] : S(n, Wu(n));
            }, An.without = Wo, An.words = Du, An.wrap = function (n, t) {
                return Xo(kr(t), n);
            }, An.xor = Bo, An.xorBy = Lo, An.xorWith = Uo, An.zip = Co, An.zipObject = function (n, t) {
                return Ar(n || [], t || [], ot);
            }, An.zipObjectDeep = function (n, t) {
                return Ar(n || [], t || [], lr);
            }, An.zipWith = Do, An.entries = Rf, An.entriesIn = zf, An.extend = df, An.extendWith = yf, Fu(An, An), An.add = Yf, An.attempt = $f, An.camelCase = Wf, An.capitalize = Uu, An.ceil = Qf, An.clamp = function (n, t, r) {
                return r === T && (r = t, t = T), r !== T && (r = ku(r), r = r === r ? r : 0), t !== T && (t = ku(t), t = t === t ? t : 0), pt(ku(n), t, r);
            }, An.clone = function (n) {
                return _t(n, 4);
            }, An.cloneDeep = function (n) {
                return _t(n, 5);
            }, An.cloneDeepWith = function (n, t) {
                return t = typeof t == 'function' ? t : T, _t(n, 5, t);
            }, An.cloneWith = function (n, t) {
                return t = typeof t == 'function' ? t : T, _t(n, 4, t);
            }, An.conformsTo = function (n, t) {
                return null == t || gt(n, t, zu(t));
            }, An.deburr = Cu, An.defaultTo = function (n, t) {
                return null == n || n !== n ? t : n;
            }, An.divide = Xf, An.endsWith = function (n, t, r) {
                n = Ou(n), t = yr(t);
                var e = n.length, e = r = r === T ? e : pt(Au(r), 0, e);
                return r -= t.length, 0 <= r && n.slice(r, e) == t;
            }, An.eq = au, An.escape = function (n) {
                return (n = Ou(n)) && H.test(n) ? n.replace(K, nt) : n;
            }, An.escapeRegExp = function (n) {
                return (n = Ou(n)) && en.test(n) ? n.replace(rn, '\\$&') : n;
            }, An.every = function (n, t, r) {
                var e = of(n) ? u : bt;
                return r && Oe(n, t, r) && (t = T), e(n, ye(t, 3));
            }, An.find = $o, An.findIndex = Fe, An.findKey = function (n, t) {
                return p(n, ye(t, 3), mt);
            }, An.findLast = Fo, An.findLastIndex = Ne, An.findLastKey = function (n, t) {
                return p(n, ye(t, 3), At);
            }, An.floor = nc, An.forEach = Xe, An.forEachRight = nu, An.forIn = function (n, t) {
                return null == n ? n : io(n, ye(t, 3), Wu);
            }, An.forInRight = function (n, t) {
                return null == n ? n : oo(n, ye(t, 3), Wu);
            }, An.forOwn = function (n, t) {
                return n && mt(n, ye(t, 3));
            }, An.forOwnRight = function (n, t) {
                return n && At(n, ye(t, 3));
            }, An.get = Iu, An.gt = rf, An.gte = ef, An.has = function (n, t) {
                return null != n && we(n, t, Rt);
            }, An.hasIn = Ru, An.head = Ze, An.identity = Tu, An.includes = function (n, t, r, e) {
                return n = lu(n) ? n : Lu(n), r = r && !e ? Au(r) : 0, e = n.length, 0 > r && (r = Li(e + r, 0)), xu(n) ? r <= e && -1 < n.indexOf(t, r) : !!e && -1 < v(n, t, r);
            }, An.indexOf = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r = null == r ? 0 : Au(r), 0 > r && (r = Li(e + r, 0)), v(n, t, r)) : -1;
            }, An.inRange = function (n, t, r) {
                return t = mu(t), r === T ? (r = t, t = 0) : r = mu(r), n = ku(n), n >= Ui(t, r) && n < Li(t, r);
            }, An.invoke = Ef, An.isArguments = uf, An.isArray = of, An.isArrayBuffer = ff, An.isArrayLike = lu, An.isArrayLikeObject = su, An.isBoolean = function (n) {
                return true === n || false === n || du(n) && '[object Boolean]' == Ot(n);
            }, An.isBuffer = cf, An.isDate = af, An.isElement = function (n) {
                return du(n) && 1 === n.nodeType && !bu(n);
            }, An.isEmpty = function (n) {
                if (null == n)
                    return true;
                if (lu(n) && (of(n) || typeof n == 'string' || typeof n.splice == 'function' || cf(n) || pf(n) || uf(n)))
                    return !n.length;
                var t = _o(n);
                if ('[object Map]' == t || '[object Set]' == t)
                    return !n.size;
                if (ze(n))
                    return !Vt(n).length;
                for (var r in n)
                    if (ii.call(n, r))
                        return false;
                return true;
            }, An.isEqual = function (n, t) {
                return Mt(n, t);
            }, An.isEqualWith = function (n, t, r) {
                var e = (r = typeof r == 'function' ? r : T) ? r(n, t) : T;
                return e === T ? Mt(n, t, T, r) : !!e;
            }, An.isError = hu, An.isFinite = function (n) {
                return typeof n == 'number' && zi(n);
            }, An.isFunction = pu, An.isInteger = _u, An.isLength = vu, An.isMap = lf, An.isMatch = function (n, t) {
                return n === t || $t(n, t, xe(t));
            }, An.isMatchWith = function (n, t, r) {
                return r = typeof r == 'function' ? r : T, $t(n, t, xe(t), r);
            }, An.isNaN = function (n) {
                return yu(n) && n != +n;
            }, An.isNative = function (n) {
                if (vo(n))
                    throw new Gu('Unsupported core-js use. Try https://npms.io/search?q=ponyfill.');
                return Ft(n);
            }, An.isNil = function (n) {
                return null == n;
            }, An.isNull = function (n) {
                return null === n;
            }, An.isNumber = yu, An.isObject = gu, An.isObjectLike = du, An.isPlainObject = bu, An.isRegExp = sf, An.isSafeInteger = function (n) {
                return _u(n) && -9007199254740991 <= n && 9007199254740991 >= n;
            }, An.isSet = hf, An.isString = xu, An.isSymbol = ju, An.isTypedArray = pf, An.isUndefined = function (n) {
                return n === T;
            }, An.isWeakMap = function (n) {
                return du(n) && '[object WeakMap]' == _o(n);
            }, An.isWeakSet = function (n) {
                return du(n) && '[object WeakSet]' == Ot(n);
            }, An.join = function (n, t) {
                return null == n ? '' : Wi.call(n, t);
            }, An.kebabCase = Bf, An.last = qe, An.lastIndexOf = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e)
                    return -1;
                var u = e;
                if (r !== T && (u = Au(r), u = 0 > u ? Li(e + u, 0) : Ui(u, e - 1)), t === t) {
                    for (r = u + 1; r-- && n[r] !== t;);
                    n = r;
                } else
                    n = _(n, d, u, true);
                return n;
            }, An.lowerCase = Lf, An.lowerFirst = Uf, An.lt = _f, An.lte = vf, An.max = function (n) {
                return n && n.length ? xt(n, Tu, It) : T;
            }, An.maxBy = function (n, t) {
                return n && n.length ? xt(n, ye(t, 2), It) : T;
            }, An.mean = function (n) {
                return y(n, Tu);
            }, An.meanBy = function (n, t) {
                return y(n, ye(t, 2));
            }, An.min = function (n) {
                return n && n.length ? xt(n, Tu, Kt) : T;
            }, An.minBy = function (n, t) {
                return n && n.length ? xt(n, ye(t, 2), Kt) : T;
            }, An.stubArray = Zu, An.stubFalse = qu, An.stubObject = function () {
                return {};
            }, An.stubString = function () {
                return '';
            }, An.stubTrue = function () {
                return true;
            }, An.multiply = tc, An.nth = function (n, t) {
                return n && n.length ? Qt(n, Au(t)) : T;
            }, An.noConflict = function () {
                return $n._ === this && ($n._ = li), this;
            }, An.noop = Nu, An.now = Ko, An.pad = function (n, t, r) {
                n = Ou(n);
                var e = (t = Au(t)) ? D(n) : 0;
                return !t || e >= t ? n : (t = (t - e) / 2, ne(Oi(t), r) + n + ne(Si(t), r));
            }, An.padEnd = function (n, t, r) {
                n = Ou(n);
                var e = (t = Au(t)) ? D(n) : 0;
                return t && e < t ? n + ne(t - e, r) : n;
            }, An.padStart = function (n, t, r) {
                n = Ou(n);
                var e = (t = Au(t)) ? D(n) : 0;
                return t && e < t ? ne(t - e, r) + n : n;
            }, An.parseInt = function (n, t, r) {
                return r || null == t ? t = 0 : t && (t = +t), Di(Ou(n).replace(on, ''), t || 0);
            }, An.random = function (n, t, r) {
                if (r && typeof r != 'boolean' && Oe(n, t, r) && (t = r = T), r === T && (typeof t == 'boolean' ? (r = t, t = T) : typeof n == 'boolean' && (r = n, n = T)), n === T && t === T ? (n = 0, t = 1) : (n = mu(n), t === T ? (t = n, n = 0) : t = mu(t)), n > t) {
                    var e = n;
                    n = t, t = e;
                }
                return r || n % 1 || t % 1 ? (r = Mi(), Ui(n + r * (t - n + Cn('1e-' + ((r + '').length - 1))), t)) : ir(n, t);
            }, An.reduce = function (n, t, r) {
                var e = of(n) ? l : j, u = 3 > arguments.length;
                return e(n, ye(t, 4), r, u, eo);
            }, An.reduceRight = function (n, t, r) {
                var e = of(n) ? s : j, u = 3 > arguments.length;
                return e(n, ye(t, 4), r, u, uo);
            }, An.repeat = function (n, t, r) {
                return t = (r ? Oe(n, t, r) : t === T) ? 1 : Au(t), or(Ou(n), t);
            }, An.replace = function () {
                var n = arguments, t = Ou(n[0]);
                return 3 > n.length ? t : t.replace(n[1], n[2]);
            }, An.result = function (n, t, r) {
                t = Sr(t, n);
                var e = -1, u = t.length;
                for (u || (u = 1, n = T); ++e < u;) {
                    var i = null == n ? T : n[De(t[e])];
                    i === T && (e = u, i = r), n = pu(i) ? i.call(n) : i;
                }
                return n;
            }, An.round = rc, An.runInContext = x, An.sample = function (n) {
                return (of(n) ? Qn : cr)(n);
            }, An.size = function (n) {
                if (null == n)
                    return 0;
                if (lu(n))
                    return xu(n) ? D(n) : n.length;
                var t = _o(n);
                return '[object Map]' == t || '[object Set]' == t ? n.size : Vt(n).length;
            }, An.snakeCase = Cf, An.some = function (n, t, r) {
                var e = of(n) ? h : pr;
                return r && Oe(n, t, r) && (t = T), e(n, ye(t, 3));
            }, An.sortedIndex = function (n, t) {
                return _r(n, t);
            }, An.sortedIndexBy = function (n, t, r) {
                return vr(n, t, ye(r, 2));
            }, An.sortedIndexOf = function (n, t) {
                var r = null == n ? 0 : n.length;
                if (r) {
                    var e = _r(n, t);
                    if (e < r && au(n[e], t))
                        return e;
                }
                return -1;
            }, An.sortedLastIndex = function (n, t) {
                return _r(n, t, true);
            }, An.sortedLastIndexBy = function (n, t, r) {
                return vr(n, t, ye(r, 2), true);
            }, An.sortedLastIndexOf = function (n, t) {
                if (null == n ? 0 : n.length) {
                    var r = _r(n, t, true) - 1;
                    if (au(n[r], t))
                        return r;
                }
                return -1;
            }, An.startCase = Df, An.startsWith = function (n, t, r) {
                return n = Ou(n), r = null == r ? 0 : pt(Au(r), 0, n.length), t = yr(t), n.slice(r, r + t.length) == t;
            }, An.subtract = ec, An.sum = function (n) {
                return n && n.length ? m(n, Tu) : 0;
            }, An.sumBy = function (n, t) {
                return n && n.length ? m(n, ye(t, 2)) : 0;
            }, An.template = function (n, t, r) {
                var e = An.templateSettings;
                r && Oe(n, t, r) && (t = T), n = Ou(n), t = yf({}, t, e, ce), r = yf({}, t.imports, e.imports, ce);
                var u, i, o = zu(r), f = S(r, o), c = 0;
                r = t.interpolate || jn;
                var a = '__p+=\'';
                r = Qu((t.escape || jn).source + '|' + r.source + '|' + (r === Q ? pn : jn).source + '|' + (t.evaluate || jn).source + '|$', 'g');
                var l = 'sourceURL' in t ? '//# sourceURL=' + t.sourceURL + '\n' : '';
                if (n.replace(r, function (t, r, e, o, f, l) {
                        return e || (e = o), a += n.slice(c, l).replace(wn, z), r && (u = true, a += '\'+__e(' + r + ')+\''), f && (i = true, a += '\';' + f + ';\n__p+=\''), e && (a += '\'+((__t=(' + e + '))==null?\'\':__t)+\''), c = l + t.length, t;
                    }), a += '\';', (t = t.variable) || (a = 'with(obj){' + a + '}'), a = (i ? a.replace(P, '') : a).replace(Z, '$1').replace(q, '$1;'), a = 'function(' + (t || 'obj') + '){' + (t ? '' : 'obj||(obj={});') + 'var __t,__p=\'\'' + (u ? ',__e=_.escape' : '') + (i ? ',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,\'\')}' : ';') + a + 'return __p}', t = $f(function () {
                        return Hu(o, l + 'return ' + a).apply(T, f);
                    }), t.source = a, hu(t))
                    throw t;
                return t;
            }, An.times = function (n, t) {
                if (n = Au(n), 1 > n || 9007199254740991 < n)
                    return [];
                var r = 4294967295, e = Ui(n, 4294967295);
                for (t = ye(t), n -= 4294967295, e = A(e, t); ++r < n;)
                    t(r);
                return e;
            }, An.toFinite = mu, An.toInteger = Au, An.toLength = Eu, An.toLower = function (n) {
                return Ou(n).toLowerCase();
            }, An.toNumber = ku, An.toSafeInteger = function (n) {
                return n ? pt(Au(n), -9007199254740991, 9007199254740991) : 0 === n ? n : 0;
            }, An.toString = Ou, An.toUpper = function (n) {
                return Ou(n).toUpperCase();
            }, An.trim = function (n, t, r) {
                return (n = Ou(n)) && (r || t === T) ? n.replace(un, '') : n && (t = yr(t)) ? (n = M(n), r = M(t), t = I(n, r), r = R(n, r) + 1, Or(n, t, r).join('')) : n;
            }, An.trimEnd = function (n, t, r) {
                return (n = Ou(n)) && (r || t === T) ? n.replace(fn, '') : n && (t = yr(t)) ? (n = M(n), t = R(n, M(t)) + 1, Or(n, 0, t).join('')) : n;
            }, An.trimStart = function (n, t, r) {
                return (n = Ou(n)) && (r || t === T) ? n.replace(on, '') : n && (t = yr(t)) ? (n = M(n), t = I(n, M(t)), Or(n, t).join('')) : n;
            }, An.truncate = function (n, t) {
                var r = 30, e = '...';
                if (gu(t))
                    var u = 'separator' in t ? t.separator : u, r = 'length' in t ? Au(t.length) : r, e = 'omission' in t ? yr(t.omission) : e;
                n = Ou(n);
                var i = n.length;
                if (Rn.test(n))
                    var o = M(n), i = o.length;
                if (r >= i)
                    return n;
                if (i = r - D(e), 1 > i)
                    return e;
                if (r = o ? Or(o, 0, i).join('') : n.slice(0, i), u === T)
                    return r + e;
                if (o && (i += r.length - i), sf(u)) {
                    if (n.slice(i).search(u)) {
                        var f = r;
                        for (u.global || (u = Qu(u.source, Ou(_n.exec(u)) + 'g')), u.lastIndex = 0; o = u.exec(f);)
                            var c = o.index;
                        r = r.slice(0, c === T ? i : c);
                    }
                } else
                    n.indexOf(yr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));
                return r + e;
            }, An.unescape = function (n) {
                return (n = Ou(n)) && G.test(n) ? n.replace(V, tt) : n;
            }, An.uniqueId = function (n) {
                var t = ++oi;
                return Ou(n) + t;
            }, An.upperCase = Mf, An.upperFirst = Tf, An.each = Xe, An.eachRight = nu, An.first = Ze, Fu(An, function () {
                var n = {};
                return mt(An, function (t, r) {
                    ii.call(An.prototype, r) || (n[r] = t);
                }), n;
            }(), { chain: false }), An.VERSION = '4.17.10', r('bind bindKey curry curryRight partial partialRight'.split(' '), function (n) {
                An[n].placeholder = An;
            }), r([
                'drop',
                'take'
            ], function (n, t) {
                Un.prototype[n] = function (r) {
                    r = r === T ? 1 : Li(Au(r), 0);
                    var e = this.__filtered__ && !t ? new Un(this) : this.clone();
                    return e.__filtered__ ? e.__takeCount__ = Ui(r, e.__takeCount__) : e.__views__.push({
                        size: Ui(r, 4294967295),
                        type: n + (0 > e.__dir__ ? 'Right' : '')
                    }), e;
                }, Un.prototype[n + 'Right'] = function (t) {
                    return this.reverse()[n](t).reverse();
                };
            }), r([
                'filter',
                'map',
                'takeWhile'
            ], function (n, t) {
                var r = t + 1, e = 1 == r || 3 == r;
                Un.prototype[n] = function (n) {
                    var t = this.clone();
                    return t.__iteratees__.push({
                        iteratee: ye(n, 3),
                        type: r
                    }), t.__filtered__ = t.__filtered__ || e, t;
                };
            }), r([
                'head',
                'last'
            ], function (n, t) {
                var r = 'take' + (t ? 'Right' : '');
                Un.prototype[n] = function () {
                    return this[r](1).value()[0];
                };
            }), r([
                'initial',
                'tail'
            ], function (n, t) {
                var r = 'drop' + (t ? '' : 'Right');
                Un.prototype[n] = function () {
                    return this.__filtered__ ? new Un(this) : this[r](1);
                };
            }), Un.prototype.compact = function () {
                return this.filter(Tu);
            }, Un.prototype.find = function (n) {
                return this.filter(n).head();
            }, Un.prototype.findLast = function (n) {
                return this.reverse().find(n);
            }, Un.prototype.invokeMap = fr(function (n, t) {
                return typeof n == 'function' ? new Un(this) : this.map(function (r) {
                    return Lt(r, n, t);
                });
            }), Un.prototype.reject = function (n) {
                return this.filter(cu(ye(n)));
            }, Un.prototype.slice = function (n, t) {
                n = Au(n);
                var r = this;
                return r.__filtered__ && (0 < n || 0 > t) ? new Un(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== T && (t = Au(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r);
            }, Un.prototype.takeRightWhile = function (n) {
                return this.reverse().takeWhile(n).reverse();
            }, Un.prototype.toArray = function () {
                return this.take(4294967295);
            }, mt(Un.prototype, function (n, t) {
                var r = /^(?:filter|find|map|reject)|While$/.test(t), e = /^(?:head|last)$/.test(t), u = An[e ? 'take' + ('last' == t ? 'Right' : '') : t], i = e || /^find/.test(t);
                u && (An.prototype[t] = function () {
                    function t(n) {
                        return n = u.apply(An, a([n], f)), e && h ? n[0] : n;
                    }
                    var o = this.__wrapped__, f = e ? [1] : arguments, c = o instanceof Un, l = f[0], s = c || of(o);
                    s && r && typeof l == 'function' && 1 != l.length && (c = s = false);
                    var h = this.__chain__, p = !!this.__actions__.length, l = i && !h, c = c && !p;
                    return !i && s ? (o = c ? o : new Un(this), o = n.apply(o, f), o.__actions__.push({
                        func: Ye,
                        args: [t],
                        thisArg: T
                    }), new On(o, h)) : l && c ? n.apply(this, f) : (o = this.thru(t), l ? e ? o.value()[0] : o.value() : o);
                });
            }), r('pop push shift sort splice unshift'.split(' '), function (n) {
                var t = ti[n], r = /^(?:push|sort|unshift)$/.test(n) ? 'tap' : 'thru', e = /^(?:pop|shift)$/.test(n);
                An.prototype[n] = function () {
                    var n = arguments;
                    if (e && !this.__chain__) {
                        var u = this.value();
                        return t.apply(of(u) ? u : [], n);
                    }
                    return this[r](function (r) {
                        return t.apply(of(r) ? r : [], n);
                    });
                };
            }), mt(Un.prototype, function (n, t) {
                var r = An[t];
                if (r) {
                    var e = r.name + '';
                    (Ki[e] || (Ki[e] = [])).push({
                        name: t,
                        func: r
                    });
                }
            }), Ki[Jr(T, 2).name] = [{
                    name: 'wrapper',
                    func: T
                }], Un.prototype.clone = function () {
                var n = new Un(this.__wrapped__);
                return n.__actions__ = Ur(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Ur(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Ur(this.__views__), n;
            }, Un.prototype.reverse = function () {
                if (this.__filtered__) {
                    var n = new Un(this);
                    n.__dir__ = -1, n.__filtered__ = true;
                } else
                    n = this.clone(), n.__dir__ *= -1;
                return n;
            }, Un.prototype.value = function () {
                var n, t = this.__wrapped__.value(), r = this.__dir__, e = of(t), u = 0 > r, i = e ? t.length : 0;
                n = i;
                for (var o = this.__views__, f = 0, c = -1, a = o.length; ++c < a;) {
                    var l = o[c], s = l.size;
                    switch (l.type) {
                    case 'drop':
                        f += s;
                        break;
                    case 'dropRight':
                        n -= s;
                        break;
                    case 'take':
                        n = Ui(n, f + s);
                        break;
                    case 'takeRight':
                        f = Li(f, n - s);
                    }
                }
                if (n = {
                        start: f,
                        end: n
                    }, o = n.start, f = n.end, n = f - o, o = u ? f : o - 1, f = this.__iteratees__, c = f.length, a = 0, l = Ui(n, this.__takeCount__), !e || !u && i == n && l == n)
                    return wr(t, this.__actions__);
                e = [];
                n:
                    for (; n-- && a < l;) {
                        for (o += r, u = -1, i = t[o]; ++u < c;) {
                            var h = f[u], s = h.type, h = (0, h.iteratee)(i);
                            if (2 == s)
                                i = h;
                            else if (!h) {
                                if (1 == s)
                                    continue n;
                                break n;
                            }
                        }
                        e[a++] = i;
                    }
                return e;
            }, An.prototype.at = Mo, An.prototype.chain = function () {
                return Je(this);
            }, An.prototype.commit = function () {
                return new On(this.value(), this.__chain__);
            }, An.prototype.next = function () {
                this.__values__ === T && (this.__values__ = wu(this.value()));
                var n = this.__index__ >= this.__values__.length;
                return {
                    done: n,
                    value: n ? T : this.__values__[this.__index__++]
                };
            }, An.prototype.plant = function (n) {
                for (var t, r = this; r instanceof En;) {
                    var e = $e(r);
                    e.__index__ = 0, e.__values__ = T, t ? u.__wrapped__ = e : t = e;
                    var u = e, r = r.__wrapped__;
                }
                return u.__wrapped__ = n, t;
            }, An.prototype.reverse = function () {
                var n = this.__wrapped__;
                return n instanceof Un ? (this.__actions__.length && (n = new Un(this)), n = n.reverse(), n.__actions__.push({
                    func: Ye,
                    args: [Ke],
                    thisArg: T
                }), new On(n, this.__chain__)) : this.thru(Ke);
            }, An.prototype.toJSON = An.prototype.valueOf = An.prototype.value = function () {
                return wr(this.__wrapped__, this.__actions__);
            }, An.prototype.first = An.prototype.head, ji && (An.prototype[ji] = Qe), An;
        }();
    typeof define == 'function' && typeof define.amd == 'object' && define.amd ? ($n._ = rt, define('lodash', [], function () {
        return rt;
    })) : Nn ? ((Nn.exports = rt)._ = rt, Fn._ = rt) : $n._ = rt;
}.call(this));
!function (e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)
            throw new Error('jQuery requires a window with a document');
        return t(e);
    } : t(e);
}('undefined' != typeof window ? window : this, function (e, t) {
    'use strict';
    var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
            return 'function' == typeof t && 'number' != typeof t.nodeType;
        }, y = function e(t) {
            return null != t && t === t.window;
        }, v = {
            type: !0,
            src: !0,
            noModule: !0
        };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement('script');
        if (o.text = e, n)
            for (i in v)
                n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? l[c.call(e)] || 'object' : typeof e;
    }
    var b = '3.3.1', w = function (e, t) {
            return new w.fn.init(e, t);
        }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: '3.3.1',
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ('boolean' == typeof a && (l = a, a = arguments[s] || {}, s++), 'object' == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, w.extend({
        expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (e) {
            throw new Error(e);
        },
        noop: function () {
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || '[object Object]' !== c.call(e)) && (!(t = i(e)) || 'function' == typeof (n = f.call(t, 'constructor') && t.constructor) && p.call(n) === d);
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e)
                return !1;
            return !0;
        },
        globalEval: function (e) {
            m(e);
        },
        each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e;
        },
        trim: function (e) {
            return null == e ? '' : (e + '').replace(T, '');
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, 'string' == typeof e ? [e] : e) : s.call(n, e)), n;
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i;
        },
        map: function (e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s);
        },
        guid: 1,
        support: h
    }), 'function' == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
        l['[object ' + t + ']'] = t.toLowerCase();
    });
    function C(e) {
        var t = !!e && 'length' in e && e.length, n = x(e);
        return !g(e) && !y(e) && ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
    }
    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = 'sizzle' + 1 * new Date(), w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) {
                return e === t && (f = !0), 0;
            }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1;
            }, P = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', M = '[\\x20\\t\\r\\n\\f]', R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+', I = '\\[' + M + '*(' + R + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + R + '))|)' + M + '*\\]', W = ':(' + R + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + I + ')*)|.*)\\)|)', $ = new RegExp(M + '+', 'g'), B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), F = new RegExp('^' + M + '*,' + M + '*'), _ = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), z = new RegExp('=' + M + '*([^\\]\'"]*?)' + M + '*\\]', 'g'), X = new RegExp(W), U = new RegExp('^' + R + '$'), V = {
                ID: new RegExp('^#(' + R + ')'),
                CLASS: new RegExp('^\\.(' + R + ')'),
                TAG: new RegExp('^(' + R + '|[*])'),
                ATTR: new RegExp('^' + I),
                PSEUDO: new RegExp('^' + W),
                CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
                bool: new RegExp('^(?:' + P + ')$', 'i'),
                needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), ee = function (e, t, n) {
                var r = '0x' + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? '\0' === e ? '\uFFFD' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e;
            }, re = function () {
                p();
            }, ie = me(function (e) {
                return !0 === e.disabled && ('form' in e || 'label' in e);
            }, {
                dir: 'parentNode',
                next: 'legend'
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t));
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1;
                }
            };
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [], 'string' != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l), r;
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !S[e + ' '] && (!y || !y.test(e))) {
                    if (1 !== T)
                        m = t, v = e;
                    else if ('object' !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute('id')) ? c = c.replace(te, ne) : t.setAttribute('id', c = b), s = (h = a(e)).length;
                        while (s--)
                            h[s] = '#' + c + ' ' + ve(h[s]);
                        v = h.join(','), m = K.test(e) && ge(t.parentNode) || t;
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            c === b && t.removeAttribute('id');
                        }
                }
            }
            return u(e.replace(B, '$1'), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], t[n + ' '] = i;
            }
            return t;
        }
        function se(e) {
            return e[b] = !0, e;
        }
        function ue(e) {
            var t = d.createElement('fieldset');
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function le(e, t) {
            var n = e.split('|'), i = n.length;
            while (i--)
                r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return 'input' === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && t.type === e;
            };
        }
        function de(e) {
            return function (t) {
                return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : 'label' in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function ge(e) {
            return e && 'undefined' != typeof e.getElementsByTagName && e;
        }
        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && 'HTML' !== t.nodeName;
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener('unload', re, !1) : i.attachEvent && i.attachEvent('onunload', re)), n.attributes = ue(function (e) {
                return e.className = 'i', !e.getAttribute('className');
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment('')), !e.getElementsByTagName('*').length;
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute('id') === t;
                };
            }, r.find.ID = function (e, t) {
                if ('undefined' != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                };
            }, r.find.ID = function (e, t) {
                if ('undefined' != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode('id')) && n.value === e)
                                return [o];
                    }
                    return [];
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ('*' === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = '<a id=\'' + b + '\'></a><select id=\'' + b + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && y.push('[*^$]=' + M + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || y.push('\\[' + M + '*(?:value|' + P + ')'), e.querySelectorAll('[id~=' + b + '-]').length || y.push('~='), e.querySelectorAll(':checked').length || y.push(':checked'), e.querySelectorAll('a#' + b + '+*').length || y.push('.#.+[+~]');
            }), ue(function (e) {
                e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
                var t = d.createElement('input');
                t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && y.push('name' + M + '*[*^$|!~]?='), 2 !== e.querySelectorAll(':enabled').length && y.push(':enabled', ':disabled'), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(':disabled').length && y.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), y.push(',.*:');
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, '*'), m.call(e, '[s!=\'\']:x'), v.push('!=', W);
            }), y = y.length && new RegExp(y.join('|')), v = v.length && new RegExp(v.join('|')), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1;
            }, D = t ? function (e, t) {
                if (e === t)
                    return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
            } : function (e, t) {
                if (e === t)
                    return f = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o)
                    return ce(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
            }, d) : d;
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, '=\'$1\']'), n.matchesSelector && g && !S[t + ' '] && (!v || !v.test(t)) && (!y || !y.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r;
                } catch (e) {
                }
            return oe(t, d, null, [e]).length > 0;
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.escape = function (e) {
            return (e + '').replace(te, ne);
        }, oe.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
        }, oe.uniqueSort = function (e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++])
                    t === e[o] && (i = r.push(o));
                while (i--)
                    e.splice(r[i], 1);
            }
            return c = null, e;
        }, i = oe.getText = function (e) {
            var t, n = '', r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ('string' == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e);
                } else if (3 === o || 4 === o)
                    return e.nodeValue;
            } else
                while (t = e[r++])
                    n += i(t);
            return n;
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: !0
                },
                ' ': { dir: 'parentNode' },
                '+': {
                    dir: 'previousSibling',
                    first: !0
                },
                '~': { dir: 'previousSibling' }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && oe.error(e[0]), e;
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return '*' === e ? function () {
                        return !0;
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function (e) {
                    var t = E[e + ' '];
                    return t || (t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) && E(e, function (e) {
                        return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || '');
                    });
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? '!=' === t : !t || (i += '', '=' === t ? i === n : '!=' === t ? i !== n : '^=' === t ? n && 0 === i.indexOf(n) : '*=' === t ? n && i.indexOf(n) > -1 : '$=' === t ? n && i.slice(-n.length) === n : '~=' === t ? (' ' + i.replace($, ' ') + ' ').indexOf(n) > -1 : '|=' === t && (i === n || i.slice(0, n.length + 1) === n + '-'));
                    };
                },
                CHILD: function (e, t, n, r, i) {
                    var o = 'nth' !== e.slice(0, 3), a = 'last' !== e.slice(-4), s = 'of-type' === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode;
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? 'nextSibling' : 'previousSibling', y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = 'only' === e && !h && 'nextSibling';
                                }
                                return !0;
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [
                                            T,
                                            d,
                                            x
                                        ];
                                        break;
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [
                                            T,
                                            x
                                        ]), p === t))
                                        break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                },
                PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error('unsupported pseudo: ' + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [
                        e,
                        e,
                        '',
                        t
                    ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--)
                            e[r = O(e, o[a])] = !(n[r] = o[a]);
                    }) : function (e) {
                        return i(e, 0, n);
                    }) : i;
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [], n = [], r = s(e.replace(B, '$1'));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0;
                    };
                }),
                contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                    };
                }),
                lang: se(function (e) {
                    return U.test(e || '') || oe.error('unsupported lang: ' + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function (e) {
                    return e === h;
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0;
                },
                parent: function (e) {
                    return !r.pseudos.empty(e);
                },
                header: function (e) {
                    return Y.test(e.nodeName);
                },
                input: function (e) {
                    return G.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && 'button' === e.type || 'button' === t;
                },
                text: function (e) {
                    var t;
                    return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
                },
                first: he(function () {
                    return [0];
                }),
                last: he(function (e, t) {
                    return [t - 1];
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e;
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e;
                }),
                lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)
                        e.push(r);
                    return e;
                }),
                gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)
                        e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            })
            r.pseudos[t] = pe(t);
        function ye() {
        }
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + ' '];
            if (c)
                return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, ' ')
                }), s = s.slice(n.length));
                for (a in r.filter)
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                if (!n)
                    break;
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        };
        function ve(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++)
                r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && 'parentNode' === o, s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1;
            } : function (t, n, u) {
                var l, c, f, p = [
                        T,
                        s
                    ];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0;
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u))
                                    return !0;
                            }
                return !1;
            };
        }
        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0;
            } : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)
                oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || '*', s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)
                                (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u);
                        }
                        c = v.length;
                        while (c--)
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                    }
                } else
                    v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
            });
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[' '], u = a ? 1 : 0, c = me(function (e) {
                        return e === t;
                    }, s, !0), f = me(function (e) {
                        return O(t, e) > -1;
                    }, s, !0), p = [function (e, n, r) {
                            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null, i;
                        }]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type])
                                break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: ' ' === e[u - 2].type ? '*' : '' })).replace(B, '$1'), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
                    }
                    p.push(n);
                }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) {
                    var f, h, y, v = 0, m = '0', x = o && [], b = [], w = l, C = o || i && r.find.TAG('*', c), E = T += null == w ? 1 : Math.random() || 0.1, k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++])
                            y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--)
                                    x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return c && (T = E, l = w), x;
                };
            return n ? se(o) : o;
        }
        return s = oe.compile = function (e, t) {
            var n, r = [], i = [], o = S[e + ' '];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e;
            }
            return o;
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = 'function' == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && 'ID' === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type])
                        break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u)))
                            return L.apply(n, i), n;
                        break;
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, n.sortStable = b.split('').sort(D).join('') === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
        }), ue(function (e) {
            return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
        }) || le('type|href|height|width', function (e, t, n) {
            if (!n)
                return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ue(function (e) {
            return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
        }) || le('value', function (e, t, n) {
            if (!n && 'input' === e.nodeName.toLowerCase())
                return e.defaultValue;
        }), ue(function (e) {
            return null == e.getAttribute('disabled');
        }) || le(P, function (e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[':'] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
            var r = [], i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n))
                        break;
                    r.push(e);
                }
            return r;
        }, S = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        }, D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n;
        }) : 'string' != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n;
        }) : w.filter(t, e, n);
    }
    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType;
        }));
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ('string' != typeof e)
                return this.pushStack(w(e).filter(function () {
                    for (t = 0; t < r; t++)
                        if (w.contains(i[t], this))
                            return !0;
                }));
            for (n = this.pushStack([]), t = 0; t < r; t++)
                w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n;
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1));
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0));
        },
        is: function (e) {
            return !!j(this, 'string' == typeof e && D.test(e) ? w(e) : e || [], !1).length;
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || q, 'string' == typeof e) {
            if (!(i = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [
                    null,
                    e,
                    null
                ] : L.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/, O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0;
            });
        },
        closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = 'string' != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? 'string' == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
            return k(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
            return k(e, 'parentNode', n);
        },
        next: function (e) {
            return P(e, 'nextSibling');
        },
        prev: function (e) {
            return P(e, 'previousSibling');
        },
        nextAll: function (e) {
            return k(e, 'nextSibling');
        },
        prevAll: function (e) {
            return k(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
            return k(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
            return k(e, 'previousSibling', n);
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
            return S(e.firstChild);
        },
        contents: function (e) {
            return N(e, 'iframe') ? e.contentDocument : (N(e, 'template') && (e = e.content || e), w.merge([], e.childNodes));
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
        };
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0;
        }), t;
    }
    w.Callbacks = function (e) {
        e = 'string' == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length)
                        !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : '');
            }, l = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function (n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && 'string' !== x(r) && t(r);
                        });
                    }(arguments), n && !t && u()), this;
                },
                remove: function () {
                    return w.each(arguments, function (e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1)
                            o.splice(n, 1), n <= s && s--;
                    }), this;
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return i = a = [], o = n = '', this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ''), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return i || (n = [
                        e,
                        (n = n || []).slice ? n.slice() : n
                    ], a.push(n), t || u()), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                }
            };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    [
                        'notify',
                        'progress',
                        w.Callbacks('memory'),
                        w.Callbacks('memory'),
                        2
                    ],
                    [
                        'resolve',
                        'done',
                        w.Callbacks('once memory'),
                        w.Callbacks('once memory'),
                        0,
                        'resolved'
                    ],
                    [
                        'reject',
                        'fail',
                        w.Callbacks('once memory'),
                        w.Callbacks('once memory'),
                        1,
                        'rejected'
                    ]
                ], r = 'pending', i = {
                    state: function () {
                        return r;
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this;
                    },
                    'catch': function (e) {
                        return i.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + 'With'](this, i ? [e] : arguments);
                                });
                            }), e = null;
                        }).promise();
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this, u = arguments, l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise())
                                                throw new TypeError('Thenable self-resolution');
                                            l = e && ('object' == typeof e || 'function' == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                                        }
                                    }, c = i ? l : function () {
                                        try {
                                            l();
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                            };
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                        }).promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i;
                    }
                }, o = {};
            return w.each(n, function (e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s;
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + 'With'](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + 'With'] = a.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        },
        when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
                    };
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), 'pending' === a.state() || g(i[n] && i[n].then)))
                return a.then();
            while (n--)
                $(i[n], s(n), a.reject);
            return a.promise();
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        });
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)['catch'](function (e) {
            w.readyException(e);
        }), this;
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
        }
    }), w.ready.then = F.then;
    function _() {
        r.removeEventListener('DOMContentLoaded', _), e.removeEventListener('load', _), w.ready();
    }
    'complete' === r.readyState || 'loading' !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener('DOMContentLoaded', _), e.addEventListener('load', _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0, u = e.length, l = null == n;
            if ('object' === x(n)) {
                i = !0;
                for (s in n)
                    z(e, t, s, n[s], !0, o, a);
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(w(e), n);
                })), t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        }, X = /^-ms-/, U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, 'ms-').replace(U, V);
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ('string' == typeof t)
                i[G(t)] = n;
            else
                for (r in t)
                    i[G(r)] = t[r];
            return i;
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
        },
        access: function (e, t, n) {
            return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--)
                        delete r[t[n]];
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t);
        }
    };
    var J = new Q(), K = new Q(), Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
    function te(e) {
        return 'true' === e || 'false' !== e && ('null' === e ? null : e === +e + '' ? +e : Z.test(e) ? JSON.parse(e) : e);
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = 'data-' + t.replace(ee, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n);
                } catch (e) {
                }
                K.set(e, t, n);
            } else
                n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, 'hasDataAttrs'))) {
                    n = a.length;
                    while (n--)
                        a[n] && 0 === (r = a[n].name).indexOf('data-') && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, 'hasDataAttrs', !0);
                }
                return i;
            }
            return 'object' == typeof e ? this.each(function () {
                K.set(this, e);
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e)))
                        return n;
                    if (void 0 !== (n = ne(o, e)))
                        return n;
                } else
                    this.each(function () {
                        K.set(this, e, t);
                    });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function (e) {
            return this.each(function () {
                K.remove(this, e);
            });
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e)
                return t = (t || 'fx') + 'queue', r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function (e, t) {
            t = t || 'fx';
            var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () {
                    w.dequeue(e, t);
                };
            'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks('once memory').add(function () {
                    J.remove(e, [
                        t + 'queue',
                        n
                    ]);
                })
            });
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && w.dequeue(this, e);
            });
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e);
            });
        },
        clearQueue: function (e) {
            return this.queue(e || 'fx', []);
        },
        promise: function (e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o]);
                };
            'string' != typeof e && (t = e, e = void 0), e = e || 'fx';
            while (a--)
                (n = J.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'), oe = [
            'Top',
            'Right',
            'Bottom',
            'Left'
        ], ae = function (e, t) {
            return 'none' === (e = t || e).style.display || '' === e.style.display && w.contains(e.ownerDocument, e) && 'none' === w.css(e, 'display');
        }, se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = a[o];
            return i;
        };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur();
            } : function () {
                return w.css(e, t, '');
            }, u = s(), l = n && n[3] || (w.cssNumber[t] ? '' : 'px'), c = (w.cssNumber[t] || 'px' !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--)
                w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, 'display'), t.parentNode.removeChild(t), 'none' === i && (i = 'block'), le[r] = i, i);
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display, t ? ('none' === n && (i[o] = J.get(r, 'display') || null, i[o] || (r.style.display = '')), '' === r.style.display && ae(r) && (i[o] = ce(r))) : 'none' !== n && (i[o] = 'none', J.set(r, 'display', n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0);
        },
        hide: function () {
            return fe(this);
        },
        toggle: function (e) {
            return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide();
            });
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
            option: [
                1,
                '<select multiple=\'multiple\'>',
                '</select>'
            ],
            thead: [
                1,
                '<table>',
                '</table>'
            ],
            col: [
                2,
                '<table><colgroup>',
                '</colgroup></table>'
            ],
            tr: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            td: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ],
            _default: [
                0,
                '',
                ''
            ]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(t || '*') : 'undefined' != typeof e.querySelectorAll ? e.querySelectorAll(t || '*') : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], 'globalEval', !t || J.get(t[n], 'globalEval'));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ('object' === x(o))
                    w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement('div')), s = (de.exec(o) || [
                        '',
                        ''
                    ])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
                    while (c--)
                        a = a.lastChild;
                    w.merge(p, a.childNodes), (a = f.firstChild).textContent = '';
                } else
                    p.push(t.createTextNode(o));
        f.textContent = '', d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), 'script'), l && ve(a), n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || '') && n.push(o);
            }
        return f;
    }
    !function () {
        var e = r.createDocumentFragment().appendChild(r.createElement('div')), t = r.createElement('input');
        t.setAttribute('type', 'radio'), t.setAttribute('checked', 'checked'), t.setAttribute('name', 't'), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = '<textarea>x</textarea>', h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {
        }
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ('object' == typeof t) {
            'string' != typeof n && (r = r || n, n = void 0);
            for (s in t)
                De(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ('string' == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
            i = ke;
        else if (!i)
            return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n);
        });
    }
    w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return 'undefined' != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                }), l = (t = (t || '').match(M) || ['']).length;
                while (l--)
                    d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || '').split('.').sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join('.')
                    }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || '').match(M) || ['']).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || '').split('.').sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = p.length;
                        while (o--)
                            c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else
                        for (d in u)
                            w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, 'handle events');
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, 'events') || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++)
                u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !('click' === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + ' '] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        });
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function () {
                    if (this.originalEvent)
                        return t(this.originalEvent);
                } : function () {
                    if (this.originalEvent)
                        return this.originalEvent[e];
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus)
                        return this.focus(), !1;
                },
                delegateType: 'focusin'
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur)
                        return this.blur(), !1;
                },
                delegateType: 'focusout'
            },
            click: {
                trigger: function () {
                    if ('checkbox' === this.type && this.click && N(this, 'input'))
                        return this.click(), !1;
                },
                _default: function (e) {
                    return N(e.target, 'a');
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        'char': !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, w.event.addProp), w.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }
        };
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
            if ('object' == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && 'function' != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t);
            });
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, 'table') && N(11 !== t.nodeType ? t : t.firstChild, 'tr') ? w(e).children('tbody')[0] || e : e;
    }
    function He(e) {
        return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
    }
    function Oe(e) {
        return 'true/' === (e.type || '').slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute('type'), e;
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++)
                        w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        'input' === n && pe.test(e.type) ? t.checked = e.checked : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && 'string' == typeof y && !h.checkClone && je.test(y))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, 'script'), He)).length; f < p; f++)
                l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, 'script'))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
                    l = s[f], he.test(l.type || '') && !J.access(l, 'globalEval') && w.contains(c, l) && (l.src && 'module' !== (l.type || '').toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ''), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, 'script')), r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, '<$1></$2>');
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
                        Pe(o[r], a[r]);
                else
                    Pe(e, s);
            return (a = ye(s, 'script')).length > 0 && ve(a, !u && ye(e, 'script')), s;
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0);
        },
        remove: function (e) {
            return Ie(this, e);
        },
        text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
            });
        },
        prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = '');
            return this;
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t);
            });
        },
        html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ('string' == typeof e && !Ae.test(e) && !ge[(de.exec(e) || [
                        '',
                        ''
                    ])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0;
                    } catch (e) {
                    }
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), w.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r);
        };
    });
    var We = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'), $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t);
        }, Be = new RegExp(oe.join('|'), 'i');
    !function () {
        function t() {
            if (c) {
                l.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', c.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = '1%' !== t.top, u = 12 === n(t.marginLeft), c.style.right = '60%', s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = 'absolute', a = 36 === c.offsetWidth || 'absolute', be.removeChild(l), c = null;
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i, o, a, s, u, l = r.createElement('div'), c = r.createElement('div');
        c.style && (c.style.backgroundClip = 'content-box', c.cloneNode(!0).style.backgroundClip = '', h.clearCloneStyle = 'content-box' === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o;
            },
            pixelBoxStyles: function () {
                return t(), s;
            },
            pixelPosition: function () {
                return t(), i;
            },
            reliableMarginLeft: function () {
                return t(), u;
            },
            scrollboxSize: function () {
                return t(), a;
            }
        }));
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ('' !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + '' : a;
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        }, Ve = {
            letterSpacing: '0',
            fontWeight: '400'
        }, Ge = [
            'Webkit',
            'Moz',
            'ms'
        ], Ye = r.createElement('div').style;
    function Qe(e) {
        if (e in Ye)
            return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye)
                return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? 'border' : 'content'))
            return 0;
        for (; a < 4; a += 2)
            'margin' === n && (u += w.css(e, n + oe[a], !0, i)), r ? ('content' === n && (u -= w.css(e, 'padding' + oe[a], !0, i)), 'margin' !== n && (u -= w.css(e, 'border' + oe[a] + 'Width', !0, i))) : (u += w.css(e, 'padding' + oe[a], !0, i), 'padding' !== n ? u += w.css(e, 'border' + oe[a] + 'Width', !0, i) : s += w.css(e, 'border' + oe[a] + 'Width', !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u;
    }
    function et(e, t, n) {
        var r = $e(e), i = Fe(e, t, r), o = 'border-box' === w.css(e, 'boxSizing', !1, r), a = o;
        if (We.test(i)) {
            if (!n)
                return i;
            i = 'auto';
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ('auto' === i || !parseFloat(i) && 'inline' === w.css(e, 'display', !1, r)) && (i = e['offset' + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? 'border' : 'content'), a, r, i) + 'px';
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, 'opacity');
                        return '' === n ? '1' : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n)
                    return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                'string' == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = 'number'), null != n && n === n && ('number' === o && (n += i && i[3] || (w.cssNumber[s] ? '' : 'px')), h.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), 'normal' === i && t in Ve && (i = Ve[t]), '' === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), w.each([
        'height',
        'width'
    ], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)
                    return !ze.test(w.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                        return et(e, t, r);
                    });
            },
            set: function (e, n, r) {
                var i, o = $e(e), a = 'border-box' === w.css(e, 'boxSizing', !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, 'border', !1, o) - 0.5)), s && (i = ie.exec(n)) && 'px' !== (i[3] || 'px') && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
            }
        };
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t)
            return (parseFloat(Fe(e, 'marginLeft')) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
            })) + 'px';
    }), w.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, 'margin' !== e && (w.cssHooks[e + t].set = Ke);
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
            }, e, t, arguments.length > 1);
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? '' : 'px');
        },
        cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
        },
        run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, w.easing = {
        linear: function (e) {
            return e;
        },
        swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: 'swing'
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }
    function st() {
        return e.setTimeout(function () {
            nt = void 0;
        }), nt = Date.now();
    }
    function ut(e, t) {
        var n, r = 0, i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i['margin' + (n = oe[r])] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners['*']), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r;
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = 'width' in t || 'height' in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, 'fxshow');
        n.queue || (null == (a = w._queueHooks(e, 'fx')).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, 'fx').length || a.empty.fire();
            });
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || 'toggle' === i, i === (g ? 'hide' : 'show')) {
                    if ('show' !== i || !y || void 0 === y[r])
                        continue;
                    g = !0;
                }
                d[r] = y && y[r] || w.style(e, r);
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [
                h.overflow,
                h.overflowX,
                h.overflowY
            ], null == (l = y && y.display) && (l = J.get(e, 'display')), 'none' === (c = w.css(e, 'display')) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, 'display'), fe([e]))), ('inline' === c || 'inline-block' === c && null != l) && 'none' === w.css(e, 'float') && (u || (p.done(function () {
                h.display = l;
            }), null == l && (c = h.display, l = 'none' === c ? '' : c)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;
            for (r in d)
                u || (y ? 'hidden' in y && (g = y.hidden) : y = J.access(e, 'fxshow', { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                    g || fe([e]), J.remove(e, 'fxshow');
                    for (r in d)
                        w.style(e, r, d[r]);
                })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && 'expand' in a) {
                o = a.expand(o), delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n], t[n] = i);
            } else
                t[r] = i;
    }
    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () {
                delete u.elem;
            }), u = function () {
                if (i)
                    return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                    l.tweens[o].run(r);
                return s.notifyWith(e, [
                    l,
                    r,
                    n
                ]), r < 1 && a ? n : (a || s.notifyWith(e, [
                    l,
                    1,
                    0
                ]), s.resolveWith(e, [l]), !1);
            }, l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0, r = t ? l.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; n < r; n++)
                        l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [
                        l,
                        1,
                        0
                    ]), s.resolveWith(e, [
                        l,
                        t
                    ])) : s.rejectWith(e, [
                        l,
                        t
                    ]), this;
                }
            }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts))
                return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            '*': [function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                }]
        },
        tweener: function (e, t) {
            g(e) ? (t = e, e = ['*']) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        }
    }), w.speed = function (e, t, n) {
        var r = e && 'object' == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : 'number' != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }, r;
    }, w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () {
                    var t = pt(this, w.extend({}, e), o);
                    (i || J.get(this, 'finish')) && t.stop(!0);
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return 'string' != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () {
                var t = !0, i = null != e && e + 'queueHooks', o = w.timers, a = J.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--;)
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e);
            });
        },
        finish: function (e) {
            return !1 !== e && (e = e || 'fx'), this.each(function () {
                var t, n = J.get(this), r = n[e + 'queue'], i = n[e + 'queueHooks'], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), w.each([
        'toggle',
        'show',
        'hide'
    ], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
        };
    }), w.each({
        slideDown: ut('show'),
        slideUp: ut('hide'),
        slideToggle: ut('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), w.timers = [], w.fx.tick = function () {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), nt = void 0;
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start();
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at());
    }, w.fx.stop = function () {
        rt = null;
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || 'fx', this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i);
            };
        });
    }, function () {
        var e = r.createElement('input'), t = r.createElement('select').appendChild(r.createElement('option'));
        e.type = 'checkbox', h.checkOn = '' !== e.value, h.optSelected = t.selected, (e = r.createElement('input')).value = 't', e.type = 'radio', h.radioValue = 't' === e.value;
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 'undefined' == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n) : i && 'get' in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && 'radio' === t && N(e, 'input')) {
                        var n = e.value;
                        return e.setAttribute('type', t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n);
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
        };
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, 'tabindex');
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            'for': 'htmlFor',
            'class': 'className'
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), w.each([
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
    ], function () {
        w.propFix[this.toLowerCase()] = this;
    });
    function vt(e) {
        return (e.match(M) || []).join(' ');
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute('class') || '';
    }
    function xt(e) {
        return Array.isArray(e) ? e : 'string' == typeof e ? e.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && ' ' + vt(i) + ' ') {
                        a = 0;
                        while (o = t[a++])
                            r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                        i !== (s = vt(r)) && n.setAttribute('class', s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                });
            if (!arguments.length)
                return this.attr('class', '');
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && ' ' + vt(i) + ' ') {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(' ' + o + ' ') > -1)
                                r = r.replace(' ' + o + ' ', ' ');
                        i !== (s = vt(r)) && n.setAttribute('class', s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e, r = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t);
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                } else
                    void 0 !== e && 'boolean' !== n || ((t = mt(this)) && J.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : J.get(this, '__className__') || ''));
            });
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = ' ' + e + ' ';
            while (n = this[r++])
                if (1 === n.nodeType && (' ' + vt(mt(n)) + ' ').indexOf(t) > -1)
                    return !0;
            return !1;
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = g(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = '' : 'number' == typeof i ? i += '' : Array.isArray(i) && (i = w.map(i, function (e) {
                            return null == e ? '' : e + '';
                        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, i, 'value') || (this.value = i));
                    });
                if (i)
                    return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (n = t.get(i, 'value')) ? n : 'string' == typeof (n = i.value) ? n.replace(bt, '') : null == n ? '' : n;
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, 'value');
                    return null != t ? t : vt(w.text(e));
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = 'select-one' === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, 'optgroup'))) {
                            if (t = w(n).val(), a)
                                return t;
                            s.push(t);
                        }
                    return s;
                },
                set: function (e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), w.each([
        'radio',
        'checkbox'
    ], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1;
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
        });
    }), h.focusin = 'onfocusin' in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, 'type') ? t.type : t, x = f.call(t, 'namespace') ? t.namespace.split('.') : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf('.') > -1 && (m = (x = m.split('.')).shift(), x.sort()), c = m.indexOf(':') < 0 && 'on' + m, t = t[w.expando] ? t : new w.Event(m, 'object' == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join('.'), t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + x.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, 'events') || {})[t.type] && J.get(s, 'handle')) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t);
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this);
            });
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0);
        }
    }), h.focusin || w.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
                var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
            }
        };
    });
    var Ct = e.location, Et = Date.now(), kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || 'string' != typeof t)
            return null;
        try {
            n = new e.DOMParser().parseFromString(t, 'text/xml');
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName('parsererror').length || w.error('Invalid XML: ' + t), n;
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || St.test(e) ? r(e, i) : jt(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r);
            });
        else if (n || 'object' !== x(t))
            r(e, t);
        else
            for (i in t)
                jt(e + '[' + i + ']', t[i], n, r);
    }
    w.param = function (e, t) {
        var n, r = [], i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join('&');
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, 'elements');
                return e ? w.makeArray(e) : this;
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(':disabled') && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, '\r\n')
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Dt, '\r\n')
                };
            }).get();
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = '*/'.concat('*'), Bt = r.createElement('a');
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            'string' != typeof t && (n = t, t = '*');
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++])
                    '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {}, o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return 'string' != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
            }), u;
        }
        return a(t.dataTypes[0]) || !i['*'] && a('*');
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ('*' === u[0])
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + ' ' + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o)
            return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ('*' === o)
                    o = u;
                else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                        for (i in l)
                            if ((s = i.split(' '))[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e['throws'])
                            t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return {
                                    state: 'parsererror',
                                    error: a ? e : 'No conversion from ' + u + ' to ' + o
                                };
                            }
                }
        return {
            state: 'success',
            data: t
        };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: 'GET',
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': $t,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': JSON.parse,
                'text xml': w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            'object' == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks('once memory'), x = h.statusCode || {}, b = {}, T = {}, C = 'canceled', E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a))
                                    s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c)
                                E.always(e[E.status]);
                            else
                                for (t in e)
                                    x[t] = [
                                        x[t],
                                        e[t]
                                    ];
                        return this;
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + '').replace(Rt, Ct.protocol + '//'), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || '*').toLowerCase().match(M) || [''], null == h.crossDomain) {
                l = r.createElement('a');
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + '//' + Bt.host != l.protocol + '//' + l.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && 'string' != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c)
                return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger('ajaxStart'), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ''), h.hasContent ? h.data && h.processData && 0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') && (h.data = h.data.replace(qt, '+')) : (d = h.url.slice(o.length), h.data && (h.processData || 'string' == typeof h.data) && (o += (kt.test(o) ? '&' : '?') + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, '$1'), d = (kt.test(o) ? '&' : '?') + '_=' + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader('If-Modified-Since', w.lastModified[o]), w.etag[o] && E.setRequestHeader('If-None-Match', w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader('Content-Type', h.contentType), E.setRequestHeader('Accept', h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + $t + '; q=0.01' : '') : h.accepts['*']);
            for (p in h.headers)
                E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (C = 'abort', m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger('ajaxSend', [
                        E,
                        h
                    ]), c)
                    return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort('timeout');
                }, h.timeout));
                try {
                    c = !1, i.send(b, k);
                } catch (e) {
                    if (c)
                        throw e;
                    k(-1, e);
                }
            } else
                k(-1, 'No Transport');
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || '', E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader('Last-Modified')) && (w.lastModified[o] = T), (T = E.getResponseHeader('etag')) && (w.etag[o] = T)), 204 === t || 'HEAD' === h.type ? C = 'nocontent' : 304 === t ? C = 'notmodified' : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = 'error', t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + '', l ? v.resolveWith(g, [
                    p,
                    C,
                    E
                ]) : v.rejectWith(g, [
                    E,
                    C,
                    d
                ]), E.statusCode(x), x = void 0, f && y.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
                    E,
                    h,
                    l ? p : d
                ]), m.fireWith(g, [
                    E,
                    C
                ]), f && (y.trigger('ajaxComplete', [
                    E,
                    h
                ]), --w.active || w.event.trigger('ajaxStop')));
            }
            return E;
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, 'json');
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, 'script');
        }
    }), w.each([
        'get',
        'post'
    ], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e));
        };
    }), w._evalUrl = function (e) {
        return w.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            'throws': !0
        });
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function (e) {
            return this.parent(e).not('body').each(function () {
                w(this).replaceWith(this.childNodes);
            }), this;
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e);
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {
        }
    };
    var Vt = {
            0: 200,
            1223: 204
        }, Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && 'withCredentials' in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain)
            return {
                send: function (i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function (e) {
                        return function () {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 'abort' === e ? s.abort() : 'error' === e ? 'number' != typeof s.status ? o(0, 'error') : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                        };
                    }, s.onload = n(), r = s.onerror = s.ontimeout = n('error'), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && e.setTimeout(function () {
                            n && r();
                        });
                    }, n = n('abort');
                    try {
                        s.send(t.hasContent && t.data || null);
                    } catch (e) {
                        if (n)
                            throw e;
                    }
                },
                abort: function () {
                    n && n();
                }
            };
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
    }), w.ajaxSetup({
        accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
            'text script': function (e) {
                return w.globalEval(e), e;
            }
        }
    }), w.ajaxPrefilter('script', function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }), w.ajaxTransport('script', function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w('<script>').prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on('load error', n = function (e) {
                        t.remove(), n = null, e && o('error' === e.type ? 404 : 200, e.type);
                    }), r.head.appendChild(t[0]);
                },
                abort: function () {
                    n && n();
                }
            };
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + '_' + Et++;
            return this[e] = !0, e;
        }
    }), w.ajaxPrefilter('json jsonp', function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && Qt.test(t.data) && 'data');
        if (s || 'jsonp' === t.dataTypes[0])
            return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, '$1' + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), t.converters['script json'] = function () {
                return a || w.error(i + ' was not called'), a[0];
            }, t.dataTypes[0] = 'json', o = e[i], e[i] = function () {
                a = arguments;
            }, r.always(function () {
                void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
            }), 'script';
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument('').body;
        return e.innerHTML = '<form></form><form></form>', 2 === e.childNodes.length;
    }(), w.parseHTML = function (e, t, n) {
        if ('string' != typeof e)
            return [];
        'boolean' == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument('')).createElement('base')).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(' ');
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (i = 'POST'), a.length > 0 && w.ajax({
            url: e,
            type: i || 'GET',
            dataType: 'html',
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w('<div>').append(w.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [
                    e.responseText,
                    t,
                    e
                ]);
            });
        }), this;
    }, w.each([
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
    ], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e);
        };
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem;
        }).length;
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, 'position'), f = w(e), p = {};
            'static' === c && (e.style.position = 'relative'), s = f.offset(), o = w.css(e, 'top'), u = w.css(e, 'left'), (l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), 'using' in t ? t.using.call(e, p) : f.css(p);
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function (t) {
                    w.offset.setOffset(this, e, t);
                });
            var t, n, r = this[0];
            if (r)
                return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                };
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                if ('fixed' === w.css(r, 'position'))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && 'static' === w.css(e, 'position'))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, 'borderTopWidth', !0), i.left += w.css(e, 'borderLeftWidth', !0));
                }
                return {
                    top: t.top - i.top - w.css(r, 'marginTop', !0),
                    left: t.left - i.left - w.css(r, 'marginLeft', !0)
                };
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && 'static' === w.css(e, 'position'))
                    e = e.offsetParent;
                return e || be;
            });
        }
    }), w.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function (e, t) {
        var n = 'pageYOffset' === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
        };
    }), w.each([
        'top',
        'left'
    ], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n)
                return n = Fe(e, t), We.test(n) ? w(e).position()[t] + 'px' : n;
        });
    }), w.each({
        Height: 'height',
        Width: 'width'
    }, function (e, t) {
        w.each({
            padding: 'inner' + e,
            content: t,
            '': 'outer' + e
        }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || 'boolean' != typeof i), s = n || (!0 === i || !0 === o ? 'margin' : 'border');
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body['scroll' + e], o['scroll' + e], t.body['offset' + e], o['offset' + e], o['client' + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
                }, t, a ? i : void 0, a);
            };
        });
    }), w.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
            return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ('string' == typeof t && (n = e[t], t = e, e = n), g(e))
            return r = o.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(o.call(arguments)));
            }, i.guid = e.guid = e.guid || w.guid++, i;
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }, 'function' == typeof define && define.amd && define('jquery', [], function () {
        return w;
    });
    var Jt = e.jQuery, Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }, t || (e.jQuery = e.$ = w), w;
});
!function (n, t) {
    'object' == typeof exports && 'undefined' != typeof module ? t(exports) : 'function' == typeof define && define.amd ? define('async', ['exports'], t) : t(n.async = n.async || {});
}(this, function (n) {
    'use strict';
    function t(n, t) {
        t |= 0;
        for (var e = Math.max(n.length - t, 0), r = Array(e), u = 0; u < e; u++)
            r[u] = n[t + u];
        return r;
    }
    function e(n) {
        var t = typeof n;
        return null != n && ('object' == t || 'function' == t);
    }
    function r(n) {
        setTimeout(n, 0);
    }
    function u(n) {
        return function (e) {
            var r = t(arguments, 1);
            n(function () {
                e.apply(null, r);
            });
        };
    }
    function i(n) {
        return ct(function (t, r) {
            var u;
            try {
                u = n.apply(this, t);
            } catch (n) {
                return r(n);
            }
            e(u) && 'function' == typeof u.then ? u.then(function (n) {
                o(r, null, n);
            }, function (n) {
                o(r, n.message ? n : new Error(n));
            }) : r(null, u);
        });
    }
    function o(n, t, e) {
        try {
            n(t, e);
        } catch (n) {
            lt(c, n);
        }
    }
    function c(n) {
        throw n;
    }
    function f(n) {
        return st && 'AsyncFunction' === n[Symbol.toStringTag];
    }
    function a(n) {
        return f(n) ? i(n) : n;
    }
    function l(n) {
        return function (e) {
            var r = t(arguments, 1), u = ct(function (t, r) {
                    var u = this;
                    return n(e, function (n, e) {
                        a(n).apply(u, t.concat(e));
                    }, r);
                });
            return r.length ? u.apply(this, r) : u;
        };
    }
    function s(n) {
        var t = mt.call(n, bt), e = n[bt];
        try {
            n[bt] = void 0;
            var r = !0;
        } catch (n) {
        }
        var u = gt.call(n);
        return r && (t ? n[bt] = e : delete n[bt]), u;
    }
    function p(n) {
        return St.call(n);
    }
    function h(n) {
        return null == n ? void 0 === n ? Lt : kt : Ot && Ot in Object(n) ? s(n) : p(n);
    }
    function y(n) {
        if (!e(n))
            return !1;
        var t = h(n);
        return t == xt || t == Et || t == wt || t == At;
    }
    function v(n) {
        return 'number' == typeof n && n > -1 && n % 1 == 0 && n <= Tt;
    }
    function d(n) {
        return null != n && v(n.length) && !y(n);
    }
    function m() {
    }
    function g(n) {
        return function () {
            if (null !== n) {
                var t = n;
                n = null, t.apply(this, arguments);
            }
        };
    }
    function b(n, t) {
        for (var e = -1, r = Array(n); ++e < n;)
            r[e] = t(e);
        return r;
    }
    function j(n) {
        return null != n && 'object' == typeof n;
    }
    function S(n) {
        return j(n) && h(n) == _t;
    }
    function k() {
        return !1;
    }
    function L(n, t) {
        var e = typeof n;
        return t = null == t ? Nt : t, !!t && ('number' == e || 'symbol' != e && Qt.test(n)) && n > -1 && n % 1 == 0 && n < t;
    }
    function O(n) {
        return j(n) && v(n.length) && !!me[h(n)];
    }
    function w(n) {
        return function (t) {
            return n(t);
        };
    }
    function x(n, t) {
        var e = Pt(n), r = !e && zt(n), u = !e && !r && Wt(n), i = !e && !r && !u && Oe(n), o = e || r || u || i, c = o ? b(n.length, String) : [], f = c.length;
        for (var a in n)
            !t && !xe.call(n, a) || o && ('length' == a || u && ('offset' == a || 'parent' == a) || i && ('buffer' == a || 'byteLength' == a || 'byteOffset' == a) || L(a, f)) || c.push(a);
        return c;
    }
    function E(n) {
        var t = n && n.constructor, e = 'function' == typeof t && t.prototype || Ee;
        return n === e;
    }
    function A(n, t) {
        return function (e) {
            return n(t(e));
        };
    }
    function T(n) {
        if (!E(n))
            return Ae(n);
        var t = [];
        for (var e in Object(n))
            Be.call(n, e) && 'constructor' != e && t.push(e);
        return t;
    }
    function B(n) {
        return d(n) ? x(n) : T(n);
    }
    function F(n) {
        var t = -1, e = n.length;
        return function () {
            return ++t < e ? {
                value: n[t],
                key: t
            } : null;
        };
    }
    function I(n) {
        var t = -1;
        return function () {
            var e = n.next();
            return e.done ? null : (t++, {
                value: e.value,
                key: t
            });
        };
    }
    function _(n) {
        var t = B(n), e = -1, r = t.length;
        return function () {
            var u = t[++e];
            return e < r ? {
                value: n[u],
                key: u
            } : null;
        };
    }
    function M(n) {
        if (d(n))
            return F(n);
        var t = It(n);
        return t ? I(t) : _(n);
    }
    function U(n) {
        return function () {
            if (null === n)
                throw new Error('Callback was already called.');
            var t = n;
            n = null, t.apply(this, arguments);
        };
    }
    function q(n) {
        return function (t, e, r) {
            function u(n, t) {
                if (f -= 1, n)
                    c = !0, r(n);
                else {
                    if (t === Bt || c && f <= 0)
                        return c = !0, r(null);
                    a || i();
                }
            }
            function i() {
                for (a = !0; f < n && !c;) {
                    var t = o();
                    if (null === t)
                        return c = !0, void (f <= 0 && r(null));
                    f += 1, e(t.value, t.key, U(u));
                }
                a = !1;
            }
            if (r = g(r || m), n <= 0 || !t)
                return r(null);
            var o = M(t), c = !1, f = 0, a = !1;
            i();
        };
    }
    function z(n, t, e, r) {
        q(t)(n, a(e), r);
    }
    function P(n, t) {
        return function (e, r, u) {
            return n(e, t, r, u);
        };
    }
    function V(n, t, e) {
        function r(n, t) {
            n ? e(n) : ++i !== o && t !== Bt || e(null);
        }
        e = g(e || m);
        var u = 0, i = 0, o = n.length;
        for (0 === o && e(null); u < o; u++)
            t(n[u], u, U(r));
    }
    function D(n) {
        return function (t, e, r) {
            return n(Ie, t, a(e), r);
        };
    }
    function R(n, t, e, r) {
        r = r || m, t = t || [];
        var u = [], i = 0, o = a(e);
        n(t, function (n, t, e) {
            var r = i++;
            o(n, function (n, t) {
                u[r] = t, e(n);
            });
        }, function (n) {
            r(n, u);
        });
    }
    function C(n) {
        return function (t, e, r, u) {
            return n(q(e), t, a(r), u);
        };
    }
    function $(n, t) {
        for (var e = -1, r = null == n ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1;);
        return n;
    }
    function W(n) {
        return function (t, e, r) {
            for (var u = -1, i = Object(t), o = r(t), c = o.length; c--;) {
                var f = o[n ? c : ++u];
                if (e(i[f], f, i) === !1)
                    break;
            }
            return t;
        };
    }
    function N(n, t) {
        return n && Pe(n, t, B);
    }
    function Q(n, t, e, r) {
        for (var u = n.length, i = e + (r ? 1 : -1); r ? i-- : ++i < u;)
            if (t(n[i], i, n))
                return i;
        return -1;
    }
    function G(n) {
        return n !== n;
    }
    function H(n, t, e) {
        for (var r = e - 1, u = n.length; ++r < u;)
            if (n[r] === t)
                return r;
        return -1;
    }
    function J(n, t, e) {
        return t === t ? H(n, t, e) : Q(n, G, e);
    }
    function K(n, t) {
        for (var e = -1, r = null == n ? 0 : n.length, u = Array(r); ++e < r;)
            u[e] = t(n[e], e, n);
        return u;
    }
    function X(n) {
        return 'symbol' == typeof n || j(n) && h(n) == De;
    }
    function Y(n) {
        if ('string' == typeof n)
            return n;
        if (Pt(n))
            return K(n, Y) + '';
        if (X(n))
            return $e ? $e.call(n) : '';
        var t = n + '';
        return '0' == t && 1 / n == -Re ? '-0' : t;
    }
    function Z(n, t, e) {
        var r = -1, u = n.length;
        t < 0 && (t = -t > u ? 0 : u + t), e = e > u ? u : e, e < 0 && (e += u), u = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var i = Array(u); ++r < u;)
            i[r] = n[r + t];
        return i;
    }
    function nn(n, t, e) {
        var r = n.length;
        return e = void 0 === e ? r : e, !t && e >= r ? n : Z(n, t, e);
    }
    function tn(n, t) {
        for (var e = n.length; e-- && J(t, n[e], 0) > -1;);
        return e;
    }
    function en(n, t) {
        for (var e = -1, r = n.length; ++e < r && J(t, n[e], 0) > -1;);
        return e;
    }
    function rn(n) {
        return n.split('');
    }
    function un(n) {
        return Xe.test(n);
    }
    function on(n) {
        return n.match(mr) || [];
    }
    function cn(n) {
        return un(n) ? on(n) : rn(n);
    }
    function fn(n) {
        return null == n ? '' : Y(n);
    }
    function an(n, t, e) {
        if (n = fn(n), n && (e || void 0 === t))
            return n.replace(gr, '');
        if (!n || !(t = Y(t)))
            return n;
        var r = cn(n), u = cn(t), i = en(r, u), o = tn(r, u) + 1;
        return nn(r, i, o).join('');
    }
    function ln(n) {
        return n = n.toString().replace(kr, ''), n = n.match(br)[2].replace(' ', ''), n = n ? n.split(jr) : [], n = n.map(function (n) {
            return an(n.replace(Sr, ''));
        });
    }
    function sn(n, t) {
        var e = {};
        N(n, function (n, t) {
            function r(t, e) {
                var r = K(u, function (n) {
                    return t[n];
                });
                r.push(e), a(n).apply(null, r);
            }
            var u, i = f(n), o = !i && 1 === n.length || i && 0 === n.length;
            if (Pt(n))
                u = n.slice(0, -1), n = n[n.length - 1], e[t] = u.concat(u.length > 0 ? r : n);
            else if (o)
                e[t] = n;
            else {
                if (u = ln(n), 0 === n.length && !i && 0 === u.length)
                    throw new Error('autoInject task functions require explicit parameters.');
                i || u.pop(), e[t] = u.concat(r);
            }
        }), Ve(e, t);
    }
    function pn() {
        this.head = this.tail = null, this.length = 0;
    }
    function hn(n, t) {
        n.length = 1, n.head = n.tail = t;
    }
    function yn(n, t, e) {
        function r(n, t, e) {
            if (null != e && 'function' != typeof e)
                throw new Error('task callback must be a function');
            if (s.started = !0, Pt(n) || (n = [n]), 0 === n.length && s.idle())
                return lt(function () {
                    s.drain();
                });
            for (var r = 0, u = n.length; r < u; r++) {
                var i = {
                    data: n[r],
                    callback: e || m
                };
                t ? s._tasks.unshift(i) : s._tasks.push(i);
            }
            f || (f = !0, lt(function () {
                f = !1, s.process();
            }));
        }
        function u(n) {
            return function (t) {
                o -= 1;
                for (var e = 0, r = n.length; e < r; e++) {
                    var u = n[e], i = J(c, u, 0);
                    0 === i ? c.shift() : i > 0 && c.splice(i, 1), u.callback.apply(u, arguments), null != t && s.error(t, u.data);
                }
                o <= s.concurrency - s.buffer && s.unsaturated(), s.idle() && s.drain(), s.process();
            };
        }
        if (null == t)
            t = 1;
        else if (0 === t)
            throw new Error('Concurrency must not be zero');
        var i = a(n), o = 0, c = [], f = !1, l = !1, s = {
                _tasks: new pn(),
                concurrency: t,
                payload: e,
                saturated: m,
                unsaturated: m,
                buffer: t / 4,
                empty: m,
                drain: m,
                error: m,
                started: !1,
                paused: !1,
                push: function (n, t) {
                    r(n, !1, t);
                },
                kill: function () {
                    s.drain = m, s._tasks.empty();
                },
                unshift: function (n, t) {
                    r(n, !0, t);
                },
                remove: function (n) {
                    s._tasks.remove(n);
                },
                process: function () {
                    if (!l) {
                        for (l = !0; !s.paused && o < s.concurrency && s._tasks.length;) {
                            var n = [], t = [], e = s._tasks.length;
                            s.payload && (e = Math.min(e, s.payload));
                            for (var r = 0; r < e; r++) {
                                var f = s._tasks.shift();
                                n.push(f), c.push(f), t.push(f.data);
                            }
                            o += 1, 0 === s._tasks.length && s.empty(), o === s.concurrency && s.saturated();
                            var a = U(u(n));
                            i(t, a);
                        }
                        l = !1;
                    }
                },
                length: function () {
                    return s._tasks.length;
                },
                running: function () {
                    return o;
                },
                workersList: function () {
                    return c;
                },
                idle: function () {
                    return s._tasks.length + o === 0;
                },
                pause: function () {
                    s.paused = !0;
                },
                resume: function () {
                    s.paused !== !1 && (s.paused = !1, lt(s.process));
                }
            };
        return s;
    }
    function vn(n, t) {
        return yn(n, 1, t);
    }
    function dn(n, t, e, r) {
        r = g(r || m);
        var u = a(e);
        Or(n, function (n, e, r) {
            u(t, n, function (n, e) {
                t = e, r(n);
            });
        }, function (n) {
            r(n, t);
        });
    }
    function mn() {
        var n = K(arguments, a);
        return function () {
            var e = t(arguments), r = this, u = e[e.length - 1];
            'function' == typeof u ? e.pop() : u = m, dn(n, e, function (n, e, u) {
                e.apply(r, n.concat(function (n) {
                    var e = t(arguments, 1);
                    u(n, e);
                }));
            }, function (n, t) {
                u.apply(r, [n].concat(t));
            });
        };
    }
    function gn(n) {
        return n;
    }
    function bn(n, t) {
        return function (e, r, u, i) {
            i = i || m;
            var o, c = !1;
            e(r, function (e, r, i) {
                u(e, function (r, u) {
                    r ? i(r) : n(u) && !o ? (c = !0, o = t(!0, e), i(null, Bt)) : i();
                });
            }, function (n) {
                n ? i(n) : i(null, c ? o : t(!1));
            });
        };
    }
    function jn(n, t) {
        return t;
    }
    function Sn(n) {
        return function (e) {
            var r = t(arguments, 1);
            r.push(function (e) {
                var r = t(arguments, 1);
                'object' == typeof console && (e ? console.error && console.error(e) : console[n] && $(r, function (t) {
                    console[n](t);
                }));
            }), a(e).apply(null, r);
        };
    }
    function kn(n, e, r) {
        function u(n) {
            if (n)
                return r(n);
            var e = t(arguments, 1);
            e.push(i), c.apply(this, e);
        }
        function i(n, t) {
            return n ? r(n) : t ? void o(u) : r(null);
        }
        r = U(r || m);
        var o = a(n), c = a(e);
        i(null, !0);
    }
    function Ln(n, e, r) {
        r = U(r || m);
        var u = a(n), i = function (n) {
                if (n)
                    return r(n);
                var o = t(arguments, 1);
                return e.apply(this, o) ? u(i) : void r.apply(null, [null].concat(o));
            };
        u(i);
    }
    function On(n, t, e) {
        Ln(n, function () {
            return !t.apply(this, arguments);
        }, e);
    }
    function wn(n, t, e) {
        function r(n) {
            return n ? e(n) : void o(u);
        }
        function u(n, t) {
            return n ? e(n) : t ? void i(r) : e(null);
        }
        e = U(e || m);
        var i = a(t), o = a(n);
        o(u);
    }
    function xn(n) {
        return function (t, e, r) {
            return n(t, r);
        };
    }
    function En(n, t, e) {
        Ie(n, xn(a(t)), e);
    }
    function An(n, t, e, r) {
        q(t)(n, xn(a(e)), r);
    }
    function Tn(n) {
        return f(n) ? n : ct(function (t, e) {
            var r = !0;
            t.push(function () {
                var n = arguments;
                r ? lt(function () {
                    e.apply(null, n);
                }) : e.apply(null, n);
            }), n.apply(this, t), r = !1;
        });
    }
    function Bn(n) {
        return !n;
    }
    function Fn(n) {
        return function (t) {
            return null == t ? void 0 : t[n];
        };
    }
    function In(n, t, e, r) {
        var u = new Array(t.length);
        n(t, function (n, t, r) {
            e(n, function (n, e) {
                u[t] = !!e, r(n);
            });
        }, function (n) {
            if (n)
                return r(n);
            for (var e = [], i = 0; i < t.length; i++)
                u[i] && e.push(t[i]);
            r(null, e);
        });
    }
    function _n(n, t, e, r) {
        var u = [];
        n(t, function (n, t, r) {
            e(n, function (e, i) {
                e ? r(e) : (i && u.push({
                    index: t,
                    value: n
                }), r());
            });
        }, function (n) {
            n ? r(n) : r(null, K(u.sort(function (n, t) {
                return n.index - t.index;
            }), Fn('value')));
        });
    }
    function Mn(n, t, e, r) {
        var u = d(t) ? In : _n;
        u(n, t, a(e), r || m);
    }
    function Un(n, t) {
        function e(n) {
            return n ? r(n) : void u(e);
        }
        var r = U(t || m), u = a(Tn(n));
        e();
    }
    function qn(n, t, e, r) {
        r = g(r || m);
        var u = {}, i = a(e);
        z(n, t, function (n, t, e) {
            i(n, t, function (n, r) {
                return n ? e(n) : (u[t] = r, void e());
            });
        }, function (n) {
            r(n, u);
        });
    }
    function zn(n, t) {
        return t in n;
    }
    function Pn(n, e) {
        var r = Object.create(null), u = Object.create(null);
        e = e || gn;
        var i = a(n), o = ct(function (n, o) {
                var c = e.apply(null, n);
                zn(r, c) ? lt(function () {
                    o.apply(null, r[c]);
                }) : zn(u, c) ? u[c].push(o) : (u[c] = [o], i.apply(null, n.concat(function () {
                    var n = t(arguments);
                    r[c] = n;
                    var e = u[c];
                    delete u[c];
                    for (var i = 0, o = e.length; i < o; i++)
                        e[i].apply(null, n);
                })));
            });
        return o.memo = r, o.unmemoized = n, o;
    }
    function Vn(n, e, r) {
        r = r || m;
        var u = d(e) ? [] : {};
        n(e, function (n, e, r) {
            a(n)(function (n, i) {
                arguments.length > 2 && (i = t(arguments, 1)), u[e] = i, r(n);
            });
        }, function (n) {
            r(n, u);
        });
    }
    function Dn(n, t) {
        Vn(Ie, n, t);
    }
    function Rn(n, t, e) {
        Vn(q(t), n, e);
    }
    function Cn(n, t) {
        if (t = g(t || m), !Pt(n))
            return t(new TypeError('First argument to race must be an array of functions'));
        if (!n.length)
            return t();
        for (var e = 0, r = n.length; e < r; e++)
            a(n[e])(t);
    }
    function $n(n, e, r, u) {
        var i = t(n).reverse();
        dn(i, e, r, u);
    }
    function Wn(n) {
        var e = a(n);
        return ct(function (n, r) {
            return n.push(function (n, e) {
                if (n)
                    r(null, { error: n });
                else {
                    var u;
                    u = arguments.length <= 2 ? e : t(arguments, 1), r(null, { value: u });
                }
            }), e.apply(this, n);
        });
    }
    function Nn(n) {
        var t;
        return Pt(n) ? t = K(n, Wn) : (t = {}, N(n, function (n, e) {
            t[e] = Wn.call(this, n);
        })), t;
    }
    function Qn(n, t, e, r) {
        Mn(n, t, function (n, t) {
            e(n, function (n, e) {
                t(n, !e);
            });
        }, r);
    }
    function Gn(n) {
        return function () {
            return n;
        };
    }
    function Hn(n, t, e) {
        function r(n, t) {
            if ('object' == typeof t)
                n.times = +t.times || i, n.intervalFunc = 'function' == typeof t.interval ? t.interval : Gn(+t.interval || o), n.errorFilter = t.errorFilter;
            else {
                if ('number' != typeof t && 'string' != typeof t)
                    throw new Error('Invalid arguments for async.retry');
                n.times = +t || i;
            }
        }
        function u() {
            f(function (n) {
                n && l++ < c.times && ('function' != typeof c.errorFilter || c.errorFilter(n)) ? setTimeout(u, c.intervalFunc(l)) : e.apply(null, arguments);
            });
        }
        var i = 5, o = 0, c = {
                times: i,
                intervalFunc: Gn(o)
            };
        if (arguments.length < 3 && 'function' == typeof n ? (e = t || m, t = n) : (r(c, n), e = e || m), 'function' != typeof t)
            throw new Error('Invalid arguments for async.retry');
        var f = a(t), l = 1;
        u();
    }
    function Jn(n, t) {
        Vn(Or, n, t);
    }
    function Kn(n, t, e) {
        function r(n, t) {
            var e = n.criteria, r = t.criteria;
            return e < r ? -1 : e > r ? 1 : 0;
        }
        var u = a(t);
        _e(n, function (n, t) {
            u(n, function (e, r) {
                return e ? t(e) : void t(null, {
                    value: n,
                    criteria: r
                });
            });
        }, function (n, t) {
            return n ? e(n) : void e(null, K(t.sort(r), Fn('value')));
        });
    }
    function Xn(n, t, e) {
        var r = a(n);
        return ct(function (u, i) {
            function o() {
                var t = n.name || 'anonymous', r = new Error('Callback function "' + t + '" timed out.');
                r.code = 'ETIMEDOUT', e && (r.info = e), f = !0, i(r);
            }
            var c, f = !1;
            u.push(function () {
                f || (i.apply(null, arguments), clearTimeout(c));
            }), c = setTimeout(o, t), r.apply(null, u);
        });
    }
    function Yn(n, t, e, r) {
        for (var u = -1, i = iu(uu((t - n) / (e || 1)), 0), o = Array(i); i--;)
            o[r ? i : ++u] = n, n += e;
        return o;
    }
    function Zn(n, t, e, r) {
        var u = a(e);
        Ue(Yn(0, n, 1), t, u, r);
    }
    function nt(n, t, e, r) {
        arguments.length <= 3 && (r = e, e = t, t = Pt(n) ? [] : {}), r = g(r || m);
        var u = a(e);
        Ie(n, function (n, e, r) {
            u(t, n, e, r);
        }, function (n) {
            r(n, t);
        });
    }
    function tt(n, e) {
        var r, u = null;
        e = e || m, Ur(n, function (n, e) {
            a(n)(function (n, i) {
                r = arguments.length > 2 ? t(arguments, 1) : i, u = n, e(!n);
            });
        }, function () {
            e(u, r);
        });
    }
    function et(n) {
        return function () {
            return (n.unmemoized || n).apply(null, arguments);
        };
    }
    function rt(n, e, r) {
        r = U(r || m);
        var u = a(e);
        if (!n())
            return r(null);
        var i = function (e) {
            if (e)
                return r(e);
            if (n())
                return u(i);
            var o = t(arguments, 1);
            r.apply(null, [null].concat(o));
        };
        u(i);
    }
    function ut(n, t, e) {
        rt(function () {
            return !n.apply(this, arguments);
        }, t, e);
    }
    var it, ot = function (n) {
            var e = t(arguments, 1);
            return function () {
                var r = t(arguments);
                return n.apply(null, e.concat(r));
            };
        }, ct = function (n) {
            return function () {
                var e = t(arguments), r = e.pop();
                n.call(this, e, r);
            };
        }, ft = 'function' == typeof setImmediate && setImmediate, at = 'object' == typeof process && 'function' == typeof process.nextTick;
    it = ft ? setImmediate : at ? process.nextTick : r;
    var lt = u(it), st = 'function' == typeof Symbol, pt = 'object' == typeof global && global && global.Object === Object && global, ht = 'object' == typeof self && self && self.Object === Object && self, yt = pt || ht || Function('return this')(), vt = yt.Symbol, dt = Object.prototype, mt = dt.hasOwnProperty, gt = dt.toString, bt = vt ? vt.toStringTag : void 0, jt = Object.prototype, St = jt.toString, kt = '[object Null]', Lt = '[object Undefined]', Ot = vt ? vt.toStringTag : void 0, wt = '[object AsyncFunction]', xt = '[object Function]', Et = '[object GeneratorFunction]', At = '[object Proxy]', Tt = 9007199254740991, Bt = {}, Ft = 'function' == typeof Symbol && Symbol.iterator, It = function (n) {
            return Ft && n[Ft] && n[Ft]();
        }, _t = '[object Arguments]', Mt = Object.prototype, Ut = Mt.hasOwnProperty, qt = Mt.propertyIsEnumerable, zt = S(function () {
            return arguments;
        }()) ? S : function (n) {
            return j(n) && Ut.call(n, 'callee') && !qt.call(n, 'callee');
        }, Pt = Array.isArray, Vt = 'object' == typeof n && n && !n.nodeType && n, Dt = Vt && 'object' == typeof module && module && !module.nodeType && module, Rt = Dt && Dt.exports === Vt, Ct = Rt ? yt.Buffer : void 0, $t = Ct ? Ct.isBuffer : void 0, Wt = $t || k, Nt = 9007199254740991, Qt = /^(?:0|[1-9]\d*)$/, Gt = '[object Arguments]', Ht = '[object Array]', Jt = '[object Boolean]', Kt = '[object Date]', Xt = '[object Error]', Yt = '[object Function]', Zt = '[object Map]', ne = '[object Number]', te = '[object Object]', ee = '[object RegExp]', re = '[object Set]', ue = '[object String]', ie = '[object WeakMap]', oe = '[object ArrayBuffer]', ce = '[object DataView]', fe = '[object Float32Array]', ae = '[object Float64Array]', le = '[object Int8Array]', se = '[object Int16Array]', pe = '[object Int32Array]', he = '[object Uint8Array]', ye = '[object Uint8ClampedArray]', ve = '[object Uint16Array]', de = '[object Uint32Array]', me = {};
    me[fe] = me[ae] = me[le] = me[se] = me[pe] = me[he] = me[ye] = me[ve] = me[de] = !0, me[Gt] = me[Ht] = me[oe] = me[Jt] = me[ce] = me[Kt] = me[Xt] = me[Yt] = me[Zt] = me[ne] = me[te] = me[ee] = me[re] = me[ue] = me[ie] = !1;
    var ge = 'object' == typeof n && n && !n.nodeType && n, be = ge && 'object' == typeof module && module && !module.nodeType && module, je = be && be.exports === ge, Se = je && pt.process, ke = function () {
            try {
                var n = be && be.require && be.require('util').types;
                return n ? n : Se && Se.binding && Se.binding('util');
            } catch (n) {
            }
        }(), Le = ke && ke.isTypedArray, Oe = Le ? w(Le) : O, we = Object.prototype, xe = we.hasOwnProperty, Ee = Object.prototype, Ae = A(Object.keys, Object), Te = Object.prototype, Be = Te.hasOwnProperty, Fe = P(z, 1 / 0), Ie = function (n, t, e) {
            var r = d(n) ? V : Fe;
            r(n, a(t), e);
        }, _e = D(R), Me = l(_e), Ue = C(R), qe = P(Ue, 1), ze = l(qe), Pe = W(), Ve = function (n, e, r) {
            function u(n, t) {
                j.push(function () {
                    f(n, t);
                });
            }
            function i() {
                if (0 === j.length && 0 === v)
                    return r(null, y);
                for (; j.length && v < e;) {
                    var n = j.shift();
                    n();
                }
            }
            function o(n, t) {
                var e = b[n];
                e || (e = b[n] = []), e.push(t);
            }
            function c(n) {
                var t = b[n] || [];
                $(t, function (n) {
                    n();
                }), i();
            }
            function f(n, e) {
                if (!d) {
                    var u = U(function (e, u) {
                        if (v--, arguments.length > 2 && (u = t(arguments, 1)), e) {
                            var i = {};
                            N(y, function (n, t) {
                                i[t] = n;
                            }), i[n] = u, d = !0, b = Object.create(null), r(e, i);
                        } else
                            y[n] = u, c(n);
                    });
                    v++;
                    var i = a(e[e.length - 1]);
                    e.length > 1 ? i(y, u) : i(u);
                }
            }
            function l() {
                for (var n, t = 0; S.length;)
                    n = S.pop(), t++, $(s(n), function (n) {
                        0 === --k[n] && S.push(n);
                    });
                if (t !== h)
                    throw new Error('async.auto cannot execute tasks due to a recursive dependency');
            }
            function s(t) {
                var e = [];
                return N(n, function (n, r) {
                    Pt(n) && J(n, t, 0) >= 0 && e.push(r);
                }), e;
            }
            'function' == typeof e && (r = e, e = null), r = g(r || m);
            var p = B(n), h = p.length;
            if (!h)
                return r(null);
            e || (e = h);
            var y = {}, v = 0, d = !1, b = Object.create(null), j = [], S = [], k = {};
            N(n, function (t, e) {
                if (!Pt(t))
                    return u(e, [t]), void S.push(e);
                var r = t.slice(0, t.length - 1), i = r.length;
                return 0 === i ? (u(e, t), void S.push(e)) : (k[e] = i, void $(r, function (c) {
                    if (!n[c])
                        throw new Error('async.auto task `' + e + '` has a non-existent dependency `' + c + '` in ' + r.join(', '));
                    o(c, function () {
                        i--, 0 === i && u(e, t);
                    });
                }));
            }), l(), i();
        }, De = '[object Symbol]', Re = 1 / 0, Ce = vt ? vt.prototype : void 0, $e = Ce ? Ce.toString : void 0, We = '\\ud800-\\udfff', Ne = '\\u0300-\\u036f', Qe = '\\ufe20-\\ufe2f', Ge = '\\u20d0-\\u20ff', He = Ne + Qe + Ge, Je = '\\ufe0e\\ufe0f', Ke = '\\u200d', Xe = RegExp('[' + Ke + We + He + Je + ']'), Ye = '\\ud800-\\udfff', Ze = '\\u0300-\\u036f', nr = '\\ufe20-\\ufe2f', tr = '\\u20d0-\\u20ff', er = Ze + nr + tr, rr = '\\ufe0e\\ufe0f', ur = '[' + Ye + ']', ir = '[' + er + ']', or = '\\ud83c[\\udffb-\\udfff]', cr = '(?:' + ir + '|' + or + ')', fr = '[^' + Ye + ']', ar = '(?:\\ud83c[\\udde6-\\uddff]){2}', lr = '[\\ud800-\\udbff][\\udc00-\\udfff]', sr = '\\u200d', pr = cr + '?', hr = '[' + rr + ']?', yr = '(?:' + sr + '(?:' + [
            fr,
            ar,
            lr
        ].join('|') + ')' + hr + pr + ')*', vr = hr + pr + yr, dr = '(?:' + [
            fr + ir + '?',
            ir,
            ar,
            lr,
            ur
        ].join('|') + ')', mr = RegExp(or + '(?=' + or + ')|' + dr + vr, 'g'), gr = /^\s+|\s+$/g, br = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m, jr = /,/, Sr = /(=.+)?(\s*)$/, kr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    pn.prototype.removeLink = function (n) {
        return n.prev ? n.prev.next = n.next : this.head = n.next, n.next ? n.next.prev = n.prev : this.tail = n.prev, n.prev = n.next = null, this.length -= 1, n;
    }, pn.prototype.empty = function () {
        for (; this.head;)
            this.shift();
        return this;
    }, pn.prototype.insertAfter = function (n, t) {
        t.prev = n, t.next = n.next, n.next ? n.next.prev = t : this.tail = t, n.next = t, this.length += 1;
    }, pn.prototype.insertBefore = function (n, t) {
        t.prev = n.prev, t.next = n, n.prev ? n.prev.next = t : this.head = t, n.prev = t, this.length += 1;
    }, pn.prototype.unshift = function (n) {
        this.head ? this.insertBefore(this.head, n) : hn(this, n);
    }, pn.prototype.push = function (n) {
        this.tail ? this.insertAfter(this.tail, n) : hn(this, n);
    }, pn.prototype.shift = function () {
        return this.head && this.removeLink(this.head);
    }, pn.prototype.pop = function () {
        return this.tail && this.removeLink(this.tail);
    }, pn.prototype.toArray = function () {
        for (var n = Array(this.length), t = this.head, e = 0; e < this.length; e++)
            n[e] = t.data, t = t.next;
        return n;
    }, pn.prototype.remove = function (n) {
        for (var t = this.head; t;) {
            var e = t.next;
            n(t) && this.removeLink(t), t = e;
        }
        return this;
    };
    var Lr, Or = P(z, 1), wr = function () {
            return mn.apply(null, t(arguments).reverse());
        }, xr = Array.prototype.concat, Er = function (n, e, r, u) {
            u = u || m;
            var i = a(r);
            Ue(n, e, function (n, e) {
                i(n, function (n) {
                    return n ? e(n) : e(null, t(arguments, 1));
                });
            }, function (n, t) {
                for (var e = [], r = 0; r < t.length; r++)
                    t[r] && (e = xr.apply(e, t[r]));
                return u(n, e);
            });
        }, Ar = P(Er, 1 / 0), Tr = P(Er, 1), Br = function () {
            var n = t(arguments), e = [null].concat(n);
            return function () {
                var n = arguments[arguments.length - 1];
                return n.apply(this, e);
            };
        }, Fr = D(bn(gn, jn)), Ir = C(bn(gn, jn)), _r = P(Ir, 1), Mr = Sn('dir'), Ur = P(An, 1), qr = D(bn(Bn, Bn)), zr = C(bn(Bn, Bn)), Pr = P(zr, 1), Vr = D(Mn), Dr = C(Mn), Rr = P(Dr, 1), Cr = function (n, t, e, r) {
            r = r || m;
            var u = a(e);
            Ue(n, t, function (n, t) {
                u(n, function (e, r) {
                    return e ? t(e) : t(null, {
                        key: r,
                        val: n
                    });
                });
            }, function (n, t) {
                for (var e = {}, u = Object.prototype.hasOwnProperty, i = 0; i < t.length; i++)
                    if (t[i]) {
                        var o = t[i].key, c = t[i].val;
                        u.call(e, o) ? e[o].push(c) : e[o] = [c];
                    }
                return r(n, e);
            });
        }, $r = P(Cr, 1 / 0), Wr = P(Cr, 1), Nr = Sn('log'), Qr = P(qn, 1 / 0), Gr = P(qn, 1);
    Lr = at ? process.nextTick : ft ? setImmediate : r;
    var Hr = u(Lr), Jr = function (n, t) {
            var e = a(n);
            return yn(function (n, t) {
                e(n[0], t);
            }, t, 1);
        }, Kr = function (n, t) {
            var e = Jr(n, t);
            return e.push = function (n, t, r) {
                if (null == r && (r = m), 'function' != typeof r)
                    throw new Error('task callback must be a function');
                if (e.started = !0, Pt(n) || (n = [n]), 0 === n.length)
                    return lt(function () {
                        e.drain();
                    });
                t = t || 0;
                for (var u = e._tasks.head; u && t >= u.priority;)
                    u = u.next;
                for (var i = 0, o = n.length; i < o; i++) {
                    var c = {
                        data: n[i],
                        priority: t,
                        callback: r
                    };
                    u ? e._tasks.insertBefore(u, c) : e._tasks.push(c);
                }
                lt(e.process);
            }, delete e.unshift, e;
        }, Xr = D(Qn), Yr = C(Qn), Zr = P(Yr, 1), nu = function (n, t) {
            t || (t = n, n = null);
            var e = a(t);
            return ct(function (t, r) {
                function u(n) {
                    e.apply(null, t.concat(n));
                }
                n ? Hn(n, u, r) : Hn(u, r);
            });
        }, tu = D(bn(Boolean, gn)), eu = C(bn(Boolean, gn)), ru = P(eu, 1), uu = Math.ceil, iu = Math.max, ou = P(Zn, 1 / 0), cu = P(Zn, 1), fu = function (n, e) {
            function r(t) {
                var e = a(n[i++]);
                t.push(U(u)), e.apply(null, t);
            }
            function u(u) {
                return u || i === n.length ? e.apply(null, arguments) : void r(t(arguments, 1));
            }
            if (e = g(e || m), !Pt(n))
                return e(new Error('First argument to waterfall must be an array of functions'));
            if (!n.length)
                return e();
            var i = 0;
            r([]);
        }, au = {
            apply: ot,
            applyEach: Me,
            applyEachSeries: ze,
            asyncify: i,
            auto: Ve,
            autoInject: sn,
            cargo: vn,
            compose: wr,
            concat: Ar,
            concatLimit: Er,
            concatSeries: Tr,
            constant: Br,
            detect: Fr,
            detectLimit: Ir,
            detectSeries: _r,
            dir: Mr,
            doDuring: kn,
            doUntil: On,
            doWhilst: Ln,
            during: wn,
            each: En,
            eachLimit: An,
            eachOf: Ie,
            eachOfLimit: z,
            eachOfSeries: Or,
            eachSeries: Ur,
            ensureAsync: Tn,
            every: qr,
            everyLimit: zr,
            everySeries: Pr,
            filter: Vr,
            filterLimit: Dr,
            filterSeries: Rr,
            forever: Un,
            groupBy: $r,
            groupByLimit: Cr,
            groupBySeries: Wr,
            log: Nr,
            map: _e,
            mapLimit: Ue,
            mapSeries: qe,
            mapValues: Qr,
            mapValuesLimit: qn,
            mapValuesSeries: Gr,
            memoize: Pn,
            nextTick: Hr,
            parallel: Dn,
            parallelLimit: Rn,
            priorityQueue: Kr,
            queue: Jr,
            race: Cn,
            reduce: dn,
            reduceRight: $n,
            reflect: Wn,
            reflectAll: Nn,
            reject: Xr,
            rejectLimit: Yr,
            rejectSeries: Zr,
            retry: Hn,
            retryable: nu,
            seq: mn,
            series: Jn,
            setImmediate: lt,
            some: tu,
            someLimit: eu,
            someSeries: ru,
            sortBy: Kn,
            timeout: Xn,
            times: ou,
            timesLimit: Zn,
            timesSeries: cu,
            transform: nt,
            tryEach: tt,
            unmemoize: et,
            until: ut,
            waterfall: fu,
            whilst: rt,
            all: qr,
            allLimit: zr,
            allSeries: Pr,
            any: tu,
            anyLimit: eu,
            anySeries: ru,
            find: Fr,
            findLimit: Ir,
            findSeries: _r,
            forEach: En,
            forEachSeries: Ur,
            forEachLimit: An,
            forEachOf: Ie,
            forEachOfSeries: Or,
            forEachOfLimit: z,
            inject: dn,
            foldl: dn,
            foldr: $n,
            select: Vr,
            selectLimit: Dr,
            selectSeries: Rr,
            wrapSync: i
        };
    n.default = au, n.apply = ot, n.applyEach = Me, n.applyEachSeries = ze, n.asyncify = i, n.auto = Ve, n.autoInject = sn, n.cargo = vn, n.compose = wr, n.concat = Ar, n.concatLimit = Er, n.concatSeries = Tr, n.constant = Br, n.detect = Fr, n.detectLimit = Ir, n.detectSeries = _r, n.dir = Mr, n.doDuring = kn, n.doUntil = On, n.doWhilst = Ln, n.during = wn, n.each = En, n.eachLimit = An, n.eachOf = Ie, n.eachOfLimit = z, n.eachOfSeries = Or, n.eachSeries = Ur, n.ensureAsync = Tn, n.every = qr, n.everyLimit = zr, n.everySeries = Pr, n.filter = Vr, n.filterLimit = Dr, n.filterSeries = Rr, n.forever = Un, n.groupBy = $r, n.groupByLimit = Cr, n.groupBySeries = Wr, n.log = Nr, n.map = _e, n.mapLimit = Ue, n.mapSeries = qe, n.mapValues = Qr, n.mapValuesLimit = qn, n.mapValuesSeries = Gr, n.memoize = Pn, n.nextTick = Hr, n.parallel = Dn, n.parallelLimit = Rn, n.priorityQueue = Kr, n.queue = Jr, n.race = Cn, n.reduce = dn, n.reduceRight = $n, n.reflect = Wn, n.reflectAll = Nn, n.reject = Xr, n.rejectLimit = Yr, n.rejectSeries = Zr, n.retry = Hn, n.retryable = nu, n.seq = mn, n.series = Jn, n.setImmediate = lt, n.some = tu, n.someLimit = eu, n.someSeries = ru, n.sortBy = Kn, n.timeout = Xn, n.times = ou, n.timesLimit = Zn, n.timesSeries = cu, n.transform = nt, n.tryEach = tt, n.unmemoize = et, n.until = ut, n.waterfall = fu, n.whilst = rt, n.all = qr, n.allLimit = zr, n.allSeries = Pr, n.any = tu, n.anyLimit = eu, n.anySeries = ru, n.find = Fr, n.findLimit = Ir, n.findSeries = _r, n.forEach = En, n.forEachSeries = Ur, n.forEachLimit = An, n.forEachOf = Ie, n.forEachOfSeries = Or, n.forEachOfLimit = z, n.inject = dn, n.foldl = dn, n.foldr = $n, n.select = Vr, n.selectLimit = Dr, n.selectSeries = Rr, n.wrapSync = i, Object.defineProperty(n, '__esModule', { value: !0 });
});
'use strict';
define('logger', [], function () {
    return {
        log: function debug(msg) {
            console.log(msg);
        },
        err: function debug(msg) {
            console.error(msg);
        }
    };
});
(function (undefined) {
    var root = this;
    var hasOwnProp = Object.prototype.hasOwnProperty;
    var clone = function (object) {
        if (typeof Object.hasOwnProperty !== 'undefined') {
            var target = {};
            for (var i in object) {
                if (hasOwnProp.call(object, i)) {
                    target[i] = object[i];
                }
            }
            return target;
        }
        if (typeof jQuery !== 'undefined') {
            return jQuery.extend({}, object);
        }
        if (typeof _ !== 'undefined') {
            return _.extend({}, object);
        }
    };
    var reverseDupArray = function (array) {
        var result = new Array(array.length);
        var index = array.length;
        var arrayMaxIndex = index - 1;
        while (index--) {
            result[arrayMaxIndex - index] = array[index];
        }
        return result;
    };
    var Dottie = function () {
        var args = Array.prototype.slice.call(arguments);
        if (args.length == 2) {
            return Dottie.find.apply(this, args);
        }
        return Dottie.transform.apply(this, args);
    };
    Dottie.find = function (path, object) {
        return Dottie.get(object, path);
    };
    Dottie.memoizePath = true;
    var memoized = {};
    Dottie.get = function (object, path, defaultVal) {
        if (object === undefined || object === null || path === undefined || path === null) {
            return defaultVal;
        }
        var names;
        if (typeof path === 'string') {
            if (Dottie.memoizePath) {
                if (memoized[path]) {
                    names = memoized[path].slice(0);
                } else {
                    names = path.split('.').reverse();
                    memoized[path] = names.slice(0);
                }
            } else {
                names = path.split('.').reverse();
            }
        } else if (Array.isArray(path)) {
            names = reverseDupArray(path);
        }
        while (names.length && (object = object[names.pop()]) !== undefined && object !== null);
        if (object === null && names.length)
            object = undefined;
        return object === undefined ? defaultVal : object;
    };
    Dottie.exists = function (object, path) {
        return Dottie.get(object, path) !== undefined;
    };
    Dottie.set = function (object, path, value, options) {
        var pieces = Array.isArray(path) ? path : path.split('.'), current = object, piece, length = pieces.length;
        if (typeof current !== 'object') {
            throw new Error('Parent is not an object.');
        }
        for (var index = 0; index < length; index++) {
            piece = pieces[index];
            if (!hasOwnProp.call(current, piece) || current[piece] === undefined || typeof current[piece] !== 'object' && options && options.force === true) {
                current[piece] = {};
            }
            if (index == length - 1) {
                current[piece] = value;
            } else {
                if (typeof current[piece] !== 'object') {
                    throw new Error('Target key "' + piece + '" is not suitable for a nested value. (It is in use as non-object. Set `force` to `true` to override.)');
                }
                current = current[piece];
            }
        }
        current[piece] = value;
    };
    Dottie['default'] = function (object, path, value) {
        if (Dottie.get(object, path) === undefined) {
            Dottie.set(object, path, value);
        }
    };
    Dottie.transform = function Dottie$transformfunction(object, options) {
        if (Array.isArray(object)) {
            return object.map(function (o) {
                return Dottie.transform(o, options);
            });
        }
        options = options || {};
        options.delimiter = options.delimiter || '.';
        var pieces, piecesLength, piece, current, transformed = {}, key, keys = Object.keys(object), length = keys.length, i;
        for (i = 0; i < length; i++) {
            key = keys[i];
            if (key.indexOf(options.delimiter) !== -1) {
                pieces = key.split(options.delimiter);
                piecesLength = pieces.length;
                current = transformed;
                for (var index = 0; index < piecesLength; index++) {
                    piece = pieces[index];
                    if (index != piecesLength - 1 && !current.hasOwnProperty(piece)) {
                        current[piece] = {};
                    }
                    if (index == piecesLength - 1) {
                        current[piece] = object[key];
                    }
                    current = current[piece];
                    if (current === null) {
                        break;
                    }
                }
            } else {
                transformed[key] = object[key];
            }
        }
        return transformed;
    };
    Dottie.flatten = function (object, seperator) {
        if (typeof seperator === 'undefined')
            seperator = '.';
        var flattened = {}, current, nested;
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                current = object[key];
                if (Object.prototype.toString.call(current) === '[object Object]') {
                    nested = Dottie.flatten(current, seperator);
                    for (var _key in nested) {
                        flattened[key + seperator + _key] = nested[_key];
                    }
                } else {
                    flattened[key] = current;
                }
            }
        }
        return flattened;
    };
    Dottie.paths = function (object, prefixes) {
        var paths = [];
        var value;
        var key;
        prefixes = prefixes || [];
        if (typeof object === 'object') {
            for (key in object) {
                value = object[key];
                if (typeof value === 'object') {
                    paths = paths.concat(Dottie.paths(value, prefixes.concat([key])));
                } else {
                    paths.push(prefixes.concat(key).join('.'));
                }
            }
        } else {
            throw new Error('Paths was called with non-object argument.');
        }
        return paths;
    };
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = Dottie;
    } else {
        root['Dottie'] = Dottie;
        root['Dot'] = Dottie;
        if (typeof define === 'function') {
            define('dottie', [], function () {
                return Dottie;
            });
        }
    }
}());
'use strict';
define('state', [
    'logger',
    'lodash',
    'dottie'
], function dependencies(logger, _, dottie) {
    var STATE_KEY = 'js_components_state';
    function State() {
        this.restore();
    }
    State.prototype = {
        restore: function restore() {
            this.state = localStorage.getItem(STATE_KEY) || {};
            if (_.isString(this.state))
                this.state = JSON.parse(this.state);
            this.needs_to_read_from_storage = false;
        },
        save: function save() {
            this.needs_to_read_from_storage = true;
            return localStorage.setItem(STATE_KEY, JSON.stringify(this.state));
        },
        set: function set(path, value) {
            if (_.isArray(path))
                path = path.join('.');
            dottie.set(this.state, path, value);
            this.save();
        },
        get: function get(path, default_value) {
            if (this.needs_to_read_from_storage)
                this.restore();
            if (_.isArray(path))
                path = path.join('.');
            if (!dottie.exists(this.state, path))
                return default_value;
            return dottie.get(this.state, path);
        }
    };
    return State;
});
'use strict';
define('components', [
    'lodash',
    'jquery',
    'moment',
    'async',
    'state'
], function dependencies(_, $, moment, async, State) {
    var app_state = new State();
    var enabledComponents = [];
    window.onbeforeunload = function alertUnsaved() {
        var haltUnload = null;
        var returnValue;
        enabledComponents.forEach(function detachComponents(component) {
            var componentWantsHalt;
            if (typeof component.detach === 'function') {
                componentWantsHalt = component.detach();
                haltUnload = haltUnload || componentWantsHalt;
            }
        });
        if (haltUnload) {
            returnValue = haltUnload;
        }
        return returnValue;
    };
    return {
        attach: function attach($targets, callback) {
            $targets = $targets || $('[data-component]');
            var tasks = [];
            _.each($targets, function (componentItem) {
                var $componentItem = $(componentItem);
                if ($componentItem.data('attached')) {
                    return;
                }
                var components = $componentItem.data('component').split(' ');
                _.each(components, function (componentName) {
                    if (!componentName)
                        return;
                    tasks.push(function (done) {
                        require(['app/' + componentName], function (Component) {
                            var c = void 0;
                            if (typeof Component === 'function') {
                                c = new Component($componentItem, app_state);
                                c.attach();
                                var uniqid = moment().format('HHmmssSSSSSSSSS') + '' + Math.floor(Math.random() * 100000 + 1);
                                c.uniqid = uniqid;
                                $componentItem.attr('data-attached', uniqid);
                                enabledComponents.push(c);
                            }
                            return done(null, c);
                        });
                    });
                });
            });
            async.parallel(tasks, function (err, results) {
                return callback && callback(err, results);
            });
        },
        detach: function detach(uniqid) {
            if (!Array.isArray(uniqid))
                uniqid = [uniqid];
            var to_detach = enabledComponents;
            if (uniqid) {
                to_detach = _.filter(enabledComponents, function (c) {
                    return c.uniqid == uniqid;
                });
            }
            to_detach.forEach(function (c) {
                if (typeof c.detach === 'function') {
                    c.detach();
                }
            });
            enabledComponents = _.difference(enabledComponents, to_detach);
        }
    };
});
'use strict';
define('app/main', [
    'require',
    'exports',
    'module',
    'moment',
    'components'
], function (require) {
    var moment = require('moment');
    moment.locale('fr');
    var components = require('components');
    components.attach();
});
'use strict';
define('config', ['module'], function dependencies(module) {
    function Config() {
        this.config = module.config();
    }
    Config.prototype.get = function (key, _default) {
        if (key in this.config)
            return this.config[key];
        return _default;
    };
    return new Config();
});
(function (e, t) {
    'function' == typeof define && define.amd ? define('postal', ['lodash'], function (n) {
        return t(n, e);
    }) : 'object' == typeof module && module.exports ? module.exports = t(require('lodash'), this) : e.postal = t(e._, e);
}(this, function (e, t, n) {
    function i() {
        for (; m.length;)
            l.unsubscribe(m.shift());
    }
    function c(e, t, n) {
        return function (i, c, r) {
            i === e && r.splice(c, 1), 0 === r.length && delete n[t];
        };
    }
    function r(e, t, n, i, c) {
        var r = c && c.headers || {};
        return function (c) {
            var o;
            f.resolver.compare(c.topic, e, r) && (r.resolverNoCache || (o = t[n] = t[n] || [], o.push(c), c.cacheKeys.push(n)), i && i(c));
        };
    }
    function o(e, t) {
        return {
            channel: f.SYSTEM_CHANNEL,
            topic: 'subscription.' + e,
            data: {
                event: 'subscription.' + e,
                channel: t.channel,
                topic: t.topic
            }
        };
    }
    function s(t, n) {
        return 'function' == typeof t ? t : t ? function (i) {
            var c = 0, r = 0;
            return e.each(t, function (e, o) {
                c += 1, ('topic' === o && n.compare(i.topic, t.topic, { resolverNoCache: !0 }) || 'context' === o && t.context === i._context || i[o] === t[o]) && (r += 1);
            }), c === r;
        } : function () {
            return !0;
        };
    }
    var a = t && t.postal, u = t && t._;
    u && u !== e && (e = e.noConflict());
    var h = {
            DEFAULT_CHANNEL: '/',
            SYSTEM_CHANNEL: 'postal',
            enableSystemMessages: !0,
            cacheKeyDelimiter: '|',
            autoCompactResolver: !1
        }, l = { configuration: e.extend({}, h) }, f = l.configuration, p = function (e, t) {
            this.bus = t, this.channel = e || f.DEFAULT_CHANNEL;
        };
    p.prototype.subscribe = function () {
        return this.bus.subscribe({
            channel: this.channel,
            topic: 1 === arguments.length ? arguments[0].topic : arguments[0],
            callback: 1 === arguments.length ? arguments[0].callback : arguments[1]
        });
    }, p.prototype.publish = function () {
        var t, n = {};
        if ('string' == typeof arguments[0] ? (n.topic = arguments[0], n.data = arguments[1], t = arguments[2]) : (n = arguments[0], t = arguments[1]), 'object' != typeof n)
            throw new Error('The first argument to ChannelDefinition.publish should be either an envelope object or a string topic.');
        n.headers = e.extend(n.headers || { resolverNoCache: f.resolverNoCache }), n.channel = this.channel, this.bus.publish(n, t);
    };
    var b = function (e, t, i) {
            if (3 !== arguments.length)
                throw new Error('You must provide a channel, topic and callback when creating a SubscriptionDefinition instance.');
            if (0 === t.length)
                throw new Error('Topics cannot be empty');
            this.channel = e, this.topic = t, this.callback = i, this.pipeline = [], this.cacheKeys = [], this._context = n;
        }, d = function () {
            var t;
            return function (n) {
                var i = !1;
                return 'string' == typeof n ? (i = n === t, t = n) : (i = e.isEqual(n, t), t = e.extend({}, n)), !i;
            };
        }, v = function () {
            var t = [];
            return function (n) {
                var i = !e.some(t, function (t) {
                    return e.isEqual(n, t);
                });
                return i && t.push(n), i;
            };
        };
    b.prototype = {
        'catch': function (e) {
            var t = this.callback, n = function () {
                    try {
                        t.apply(this, arguments);
                    } catch (n) {
                        e(n, arguments[0]);
                    }
                };
            return this.callback = n, this;
        },
        defer: function () {
            return this.delay(0);
        },
        disposeAfter: function (t) {
            if ('number' != typeof t || t <= 0)
                throw new Error('The value provided to disposeAfter (maxCalls) must be a number greater than zero.');
            var n = e.after(t, this.unsubscribe.bind(this));
            return this.pipeline.push(function (e, t, i) {
                i(e, t), n();
            }), this;
        },
        distinct: function () {
            return this.constraint(new v());
        },
        distinctUntilChanged: function () {
            return this.constraint(new d());
        },
        invokeSubscriber: function (e, t) {
            if (!this.inactive) {
                var n = this, i = n.pipeline, c = i.length, r = n._context, o = -1, s = !1;
                if (c) {
                    i = i.concat([n.callback]);
                    var a = function u(e, t) {
                        o += 1, o < c ? i[o].call(r, e, t, u) : (n.callback.call(r, e, t), s = !0);
                    };
                    a(e, t, 0);
                } else
                    n.callback.call(r, e, t), s = !0;
                return s;
            }
        },
        logError: function () {
            if (console) {
                var e;
                e = console.warn ? console.warn : console.log, this['catch'](e);
            }
            return this;
        },
        once: function () {
            return this.disposeAfter(1);
        },
        subscribe: function (e) {
            return this.callback = e, this;
        },
        unsubscribe: function () {
            this.inactive || l.unsubscribe(this);
        },
        constraint: function (e) {
            if ('function' != typeof e)
                throw new Error('Predicate constraint must be a function');
            return this.pipeline.push(function (t, n, i) {
                e.call(this, t, n) && i(t, n);
            }), this;
        },
        constraints: function (t) {
            var n = this;
            return e.each(t, function (e) {
                n.constraint(e);
            }), n;
        },
        context: function (e) {
            return this._context = e, this;
        },
        debounce: function (t, n) {
            if ('number' != typeof t)
                throw new Error('Milliseconds must be a number');
            var i = {};
            return !!n == !0 && (i.leading = !0, i.trailing = !1), this.pipeline.push(e.debounce(function (e, t, n) {
                n(e, t);
            }, t, i)), this;
        },
        delay: function (e) {
            if ('number' != typeof e)
                throw new Error('Milliseconds must be a number');
            var t = this;
            return t.pipeline.push(function (t, n, i) {
                setTimeout(function () {
                    i(t, n);
                }, e);
            }), this;
        },
        throttle: function (t) {
            if ('number' != typeof t)
                throw new Error('Milliseconds must be a number');
            var n = function (e, t, n) {
                n(e, t);
            };
            return this.pipeline.push(e.throttle(n, t)), this;
        }
    };
    var y = (f.resolver = {
            cache: {},
            regex: {},
            enableCache: !0,
            compare: function (t, n, i) {
                var c, r, o, s = n + f.cacheKeyDelimiter + t, a = this.cache[s], u = i || {}, h = this.enableCache && !u.resolverNoCache;
                return a === !0 ? a : t.indexOf('#') === -1 && t.indexOf('*') === -1 ? (a = n === t, h && (this.cache[s] = a), a) : ((r = this.regex[t]) || (c = '^' + e.map(t.split('.'), function (e) {
                    var t = '';
                    return o && (t = '#' !== o ? '\\.\\b' : '\\b'), t += '#' === e ? '[\\s\\S]*' : '*' === e ? '[^.]+' : e, o = e, t;
                }).join('') + '$', r = this.regex[t] = new RegExp(c)), a = r.test(n), h && (this.cache[s] = a), a);
            },
            reset: function () {
                this.cache = {}, this.regex = {};
            },
            purge: function (t) {
                var n = this, i = f.cacheKeyDelimiter, c = function (e, c) {
                        var r = c.split(i), o = r[0], s = r[1];
                        'undefined' != typeof t.topic && t.topic !== o || 'undefined' != typeof t.binding && t.binding !== s || delete n.cache[c];
                    }, r = function (e, t) {
                        var c = t.split(i);
                        0 === l.getSubscribersFor({ topic: c[0] }).length && delete n.cache[t];
                    };
                if ('undefined' == typeof t)
                    this.reset();
                else {
                    var o = t.compact === !0 ? r : c;
                    e.each(this.cache, o);
                }
            }
        }, 0), m = [], g = 0, w = o.bind(n, 'created'), _ = o.bind(n, 'removed');
    if (e.extend(l, {
            cache: {},
            subscriptions: {},
            wireTaps: [],
            ChannelDefinition: p,
            SubscriptionDefinition: b,
            channel: function (e) {
                return new p(e, this);
            },
            addWireTap: function (e) {
                var t = this;
                return t.wireTaps.push(e), function () {
                    var n = t.wireTaps.indexOf(e);
                    n !== -1 && t.wireTaps.splice(n, 1);
                };
            },
            noConflict: function () {
                if ('undefined' == typeof window || 'undefined' != typeof window && 'function' == typeof define && define.amd)
                    throw new Error('noConflict can only be used in browser clients which aren\'t using AMD modules');
                return t.postal = a, this;
            },
            getSubscribersFor: function (t) {
                var n = [], i = this;
                return e.each(i.subscriptions, function (i) {
                    e.each(i, function (i) {
                        n = n.concat(e.filter(i, s(t, f.resolver)));
                    });
                }), n;
            },
            publish: function (t, n) {
                ++y;
                var c = t.channel = t.channel || f.DEFAULT_CHANNEL, o = t.topic;
                t.timeStamp = new Date(), this.wireTaps.length && e.each(this.wireTaps, function (e) {
                    e(t.data, t, y);
                });
                var s = c + f.cacheKeyDelimiter + o, a = this.cache[s], u = 0, h = 0;
                if (a)
                    e.each(a, function (e) {
                        e.invokeSubscriber(t.data, t) ? h++ : u++;
                    });
                else {
                    var l = r(o, this.cache, s, function (e) {
                        e.invokeSubscriber(t.data, t) ? h++ : u++;
                    }, t);
                    e.each(this.subscriptions[c], function (t) {
                        e.each(t, l);
                    });
                }
                0 === --y && i(), n && n({
                    activated: h,
                    skipped: u
                });
            },
            reset: function () {
                this.unsubscribeFor(), f.resolver.reset(), this.subscriptions = {}, this.cache = {};
            },
            subscribe: function (t) {
                var n, i = this.subscriptions, c = new b(t.channel || f.DEFAULT_CHANNEL, t.topic, t.callback), o = i[c.channel], s = c.channel.length;
                o || (o = i[c.channel] = {}), n = i[c.channel][c.topic], n || (n = i[c.channel][c.topic] = []), n.push(c);
                var a = this.cache;
                return e.each(e.keys(a), function (e) {
                    e.substr(0, s) === c.channel && r(e.split(f.cacheKeyDelimiter)[1], a, e)(c);
                }), f.enableSystemMessages && this.publish(w(c)), c;
            },
            unsubscribe: function () {
                for (var t, n, i, r, o = arguments.length, s = 0; s < o; s++) {
                    if (t = arguments[s], t.inactive = !0, y)
                        return void m.push(t);
                    if (n = this.subscriptions[t.channel], i = n && n[t.topic]) {
                        var a = i.length;
                        for (r = 0; r < a;) {
                            if (i[r] === t) {
                                i.splice(r, 1);
                                break;
                            }
                            r += 1;
                        }
                        if (0 === i.length && (delete n[t.topic], e.keys(n).length || delete this.subscriptions[t.channel]), t.cacheKeys && t.cacheKeys.length)
                            for (var u; u = t.cacheKeys.pop();)
                                e.each(this.cache[u], c(t, u, this.cache));
                        if ('function' == typeof f.resolver.purge) {
                            var h = f.autoCompactResolver === !0 ? 0 : 'number' == typeof f.autoCompactResolver && f.autoCompactResolver - 1;
                            h >= 0 && g === h ? (f.resolver.purge({ compact: !0 }), g = 0) : h >= 0 && g < h && (g += 1);
                        }
                    }
                    f.enableSystemMessages && this.publish(_(t));
                }
            },
            unsubscribeFor: function (e) {
                var t = [];
                this.subscriptions && (t = this.getSubscribersFor(e), this.unsubscribe.apply(this, t));
            }
        }), t && Object.prototype.hasOwnProperty.call(t, '__postalReady__') && e.isArray(t.__postalReady__))
        for (; t.__postalReady__.length;)
            t.__postalReady__.shift().onReady(l);
    return l;
}));
'use strict';
define('template', ['lodash'], function dependencies(_) {
    function Template() {
    }
    Template.prototype.render = function (template_id, data) {
        var $tpl = $('#' + template_id);
        if (!$tpl.length)
            return null;
        return _.template($tpl.html())(data);
    };
    return new Template();
});
'use strict';
var Ticketack = function Ticketack(eshopUrl, apiKey, lang) {
    this.session_id = localStorage.getItem('tkt_session_id') != undefined ? localStorage.getItem('tkt_session_id') : '';
    this.eshopUrl = eshopUrl;
    this.apiKey = apiKey;
    this.lang = lang ? lang : '';
    this.cartViewUrl = this.eshopUrl + 'cart/view/';
    this.ticketViewUrl = this.eshopUrl + 'ticket/view/';
    this.passesViewUrl = this.eshopUrl + 'pass/new/';
    this.screeningViewUrl = this.eshopUrl + 'screening/buy/';
    this.cartJsonUrl = this.eshopUrl + 'cart/view_json';
    this.cartRemoveUrl = this.eshopUrl + 'cart/remove';
    this.cartAddUrl = this.eshopUrl + 'screening/buy/';
    this.screeningUrl = this.eshopUrl + 'screening/info_json/';
    this.bookUrl = this.eshopUrl + 'screening/book_on_ticket/';
    this.unbookUrl = this.eshopUrl + 'ticket/cancel_booking_json/';
    this.checkUrl = this.eshopUrl + 'screening/bookability/';
    this.loginUrl = this.eshopUrl + 'ticket/view_json/';
    this.logoutUrl = this.eshopUrl + 'ticket/disable_book_mode_json/';
    this.updateTicketEmailUrl = this.eshopUrl + 'tickets/contact_email/';
    this.passesUrl = this.eshopUrl + 'pass/tickettypes_json/';
};
Ticketack.prototype.getCartViewUrl = function () {
    var url = this.parametrize_url(this.cartViewUrl, {});
    return url;
};
Ticketack.prototype.getTicketViewUrl = function () {
    var url = this.parametrize_url(this.ticketViewUrl, {});
    return url;
};
Ticketack.prototype.getPassesViewUrl = function (tickettype_id, pricing_id) {
    var params = {};
    if (tickettype_id) {
        params.tickettype = tickettype_id;
        if (pricing_id) {
            params.pricing = pricing_id;
        }
    }
    var url = this.parametrize_url(this.passesViewUrl, params);
    return url;
};
Ticketack.prototype.getScreeningViewUrl = function (screening_ref) {
    var url = this.parametrize_url(this.screeningViewUrl + screening_ref, {});
    return url;
};
Ticketack.prototype.loadCart = function (callback) {
    var that = this;
    var url = this.parametrize_url(this.cartJsonUrl, {}, true);
    return this.get(url, {}, function (err, status, rsp) {
        if (err)
            return callback && callback(err, status, rsp);
        localStorage.setItem('tkt_session_id', rsp.session_id);
        that.session_id = rsp.session_id;
        return callback && callback(null, status, rsp);
    });
};
Ticketack.prototype.getScreeningsInfo = function (screening_refs, callback) {
    var url = this.parametrize_url(this.screeningUrl, { 'ids': screening_refs.join(',') }, true);
    return this.get(url, {}, callback);
};
Ticketack.prototype.addToCart = function (screening_id, pricing, callback) {
    var data = {
        'id': screening_id,
        'pricing': pricing || {}
    };
    return this.post(this.cartAddUrl + screening_id, data, callback);
};
Ticketack.prototype.addPassToCart = function (pass, pricing, userdata, callback) {
    headers = {};
    headers['X-API-Key'] = this.apiKey;
    headers['Content-type'] = undefined;
    userdata.pass = pass + ':' + pricing;
    var data = {
        'user': userdata,
        'format': 'json'
    };
    if (this.session_id)
        data.PHPSESSID = this.session_id;
    return this.post(this.passesViewUrl, data, callback);
};
Ticketack.prototype.removeFromCart = function (index, callback) {
    var data = { 'index': index };
    return this.post(this.cartRemoveUrl, data, callback);
};
Ticketack.prototype.checkBookability = function (screening_ref, callback) {
    var url = this.parametrize_url(this.checkUrl + screening_ref, {}, true);
    return this.get(url, {}, callback);
};
Ticketack.prototype.loginTicket = function (number, key, callback) {
    var data = {
        'ticket_number': number,
        'ticket_key': key
    };
    return this.post(this.loginUrl, data, callback);
};
Ticketack.prototype.logoutTicket = function (callback) {
    return this.get(this.logoutUrl, {}, callback);
};
Ticketack.prototype.viewTicket = function (callback) {
    return this.post(this.loginUrl, {}, callback);
};
Ticketack.prototype.updateTicketEmail = function (email, callback) {
    var url = this.parametrize_url(this.updateTicketEmailUrl, {}, true);
    return this.patch(url, { 'email': email }, callback);
};
Ticketack.prototype.book = function (screening_id, callback) {
    return this.post(this.bookUrl + screening_id, {}, callback);
};
Ticketack.prototype.unbook = function (booking_id, callback) {
    return this.post(this.unbookUrl + booking_id, {}, callback);
};
Ticketack.prototype.getPasses = function (callback) {
    var url = this.parametrize_url(this.passesUrl, {}, true);
    return this.get(url, {}, callback);
};
Ticketack.prototype.get = function (url, data, callback) {
    return this.request('GET', url, data, {}, callback);
};
Ticketack.prototype.post = function (url, data, callback) {
    data = data || {};
    data.format = 'json';
    data.lang = this.lang;
    if (this.session_id)
        data.PHPSESSID = this.session_id;
    return this.request('POST', url, data, {}, callback);
};
Ticketack.prototype.patch = function (url, data, callback) {
    return this.request('PATCH', url, data, { 'Content-type': 'application/json' }, callback);
};
Ticketack.prototype.parametrize_url = function (url, params) {
    var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var query = [];
    query.push('lang=' + this.lang);
    if (json)
        query.push('format=json');
    if (this.session_id)
        query.push('PHPSESSID=' + this.session_id);
    for (i in params) {
        query.push(i + '=' + params[i]);
    }
    return url + '?' + query.join('&');
};
Ticketack.prototype.request = function (method, url, data, headers, callback) {
    headers = headers || {};
    headers['X-API-Key'] = this.apiKey;
    if (headers['Content-type'] && headers['Content-type'] == 'application/json')
        data = JSON.stringify(data);
    return $.ajax(url, {
        type: method,
        data: data,
        headers: headers,
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function (data, textStatus, jqXHR) {
        return callback(null, jqXHR.status, jqXHR.responseJSON);
    }).fail(function (jqXHR) {
        var rsp = jqXHR.responseText.length ? JSON.parse(jqXHR.responseText) : null;
        return callback(new Error(), jqXHR.status, rsp);
    });
};
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('ticketack', ['jquery'], function ($) {
            return root.Ticketack = factory($);
        });
    } else {
        root.Ticketack = factory(root.jQuery);
    }
}(typeof self !== 'undefined' ? self : undefined, function ($) {
    return Ticketack;
}));
'use strict';
define('api', [
    'config',
    'ticketack'
], function dependencies(config, Ticketack) {
    return new Ticketack(config.get('eshop_uri'), config.get('api_key'));
});
'use strict';
define('csrf', ['module'], function dependencies(module, logger) {
    function Csrf() {
        this.param = module.config().param || 'csrf';
        this.token = module.config().token || '';
    }
    return new Csrf();
});
'use strict';
define('app/Models/Base', [
    'module',
    'lodash',
    'postal',
    'csrf'
], function dependencies(module, _, postal, csrf) {
    function Base(data) {
        this.id = (data || {}).id;
        this._id = (data || {})._id;
        this.$element = null;
    }
    Base.ACTION_LIST = 'list';
    Base.ACTION_CREATE = 'create';
    Base.ACTION_UPDATE = 'update';
    Base.ACTION_DELETE = 'delete';
    Base.all = function all(type, url, params, callback) {
        url += '/format/json';
        for (var param in params) {
            url += '/' + param + '/' + params[param];
        }
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function fetchSuccess(data) {
            var key = type + 's';
            if (!_.isArray(data.rsp[key]) || _.isEmpty(data.rsp[key]))
                return callback && callback(null, []);
            return callback && callback(null, data.rsp[key]);
        }).fail(function blocFetchFail() {
            postal.publish({ topic: 'model.' + type + '.list.error' });
            return callback && callback(new Error('Can not fetch list'));
        });
    };
    Base.prototype = {
        isNew: function isNew() {
            return;
            (_.isNull(this.id) || _.isEmpty(this.id)) && (_.isNull(this.__id) || _.isEmpty(this.id));
        },
        bindTo: function bindTo($element) {
            if (_.isEmpty(this.getId()))
                return false;
            this.$element = $element;
            this.$element.attr('data-model-id', this.getId());
            this._setUiValues();
            this._print();
        },
        sync: function sync() {
            if (_.isEmpty(this.$element))
                return false;
            this._getValuesFromUi();
            this._print();
        },
        _getValuesFromUi: function _getValuesFromUi() {
            var _this = this;
            _.map($('[data-model]', this.$element), function (field) {
                var $field = $(field);
                var editor = $field.attr('data-editor');
                if (editor == 'summernote')
                    _this[$field.attr('data-model')] = $field.summernote('code');
                else
                    _this[$field.attr('data-model')] = $field.val();
            });
        },
        _setUiValues: function _setUiValues() {
            var _this2 = this;
            _.map($('[data-model]', this.$element), function (field) {
                var $field = $(field);
                $field.val(_this2[$field.attr('data-model')]);
                $field.on('change', function (e) {
                    _this2.sync();
                    _this2.save();
                });
            });
        },
        _print: function _print() {
            var _this3 = this;
            _.map($('[data-model-print]', this.$element), function (output) {
                var $output = $(output);
                $output.html(_this3[$output.attr('data-model-print')]);
            });
        },
        getId: function getId() {
            return this.id || this._id;
        },
        setId: function setId(id) {
            this.id = id;
            this._id = _id;
        },
        getEndPointUrl: function getEndPointUrl(action) {
            return null;
        },
        getType: function getType(action) {
            return 'entity';
        },
        save: function save() {
            var callback = function callback(err, entity) {
                if (err)
                    return false;
                entity._setUiValues();
                entity._print();
            };
            return this.isNew() ? this._create(callback) : this._update(callback);
        },
        destroy: function destroy() {
            var _this4 = this;
            return this.isNew() ? false : this._delete(function (err, deleted) {
                _this4.$element.fadeOut(function () {
                    return _this4.$element.remove();
                });
            });
        },
        _create: function create(callback) {
            var _this5 = this;
            var url = this.getEndPointUrl(Base.ACTION_CREATE);
            if (_.isNull(url))
                return false;
            var type = this.getType();
            url += '/format/json';
            url += '/' + csrf.param + '/' + csrf.token;
            var payload = {};
            _.map(Object.entries(this), function (a) {
                payload[a[0]] = a[1];
            });
            $.post(url, payload).done(function (data) {
                _.extend(_this5, data.rsp[type]);
                var payload = {};
                payload[type] = _this5;
                postal.publish({
                    topic: 'model.' + type + '.create',
                    data: payload
                });
                return callback && callback(null, _this5);
            }).fail(function onAjaxFail() {
                var payload = {};
                payload[type] = this;
                postal.publish({
                    topic: 'model.' + type + '.create.error',
                    data: payload
                });
                return callback && callback(new Error());
            });
        },
        _update: function update(callback) {
            var _this6 = this;
            var url = this.getEndPointUrl(Base.ACTION_UPDATE);
            if (_.isNull(url))
                return false;
            var type = this.getType();
            url += '/id/' + this.getId();
            url += '/format/json';
            url += '/' + csrf.param + '/' + csrf.token;
            var payload = {};
            _.map(Object.entries(this), function (a) {
                var key = a[0], value = a[1];
                if (key.substring(0, 1) == '$' || key == 'id')
                    return;
                payload[key] = value;
            });
            $.post(url, payload).done(function (data) {
                _.extend(_this6, data.rsp[type]);
                var payload = {};
                payload[type] = _this6;
                postal.publish({
                    topic: 'model.' + type + '.update',
                    data: payload
                });
                return callback && callback(null, _this6);
            }).fail(function onAjaxFail() {
                var payload = {};
                payload[type] = this;
                postal.publish({
                    topic: 'model.' + type + '.update.error',
                    data: payload
                });
                return callback && callback(new Error());
            });
        },
        _delete: function update(callback) {
            var _this7 = this;
            var url = this.getEndPointUrl(Base.ACTION_DELETE);
            if (_.isNull(url))
                return false;
            var type = this.getType();
            url += '/id/' + this.getId();
            url += '/format/json';
            url += '/' + csrf.param + '/' + csrf.token;
            $.post(url, {}).done(function (data) {
                postal.publish({
                    topic: 'model.' + type + '.delete',
                    data: _this7
                });
                return callback && callback(null, _this7);
            }).fail(function onAjaxFail() {
                postal.publish({
                    topic: 'model.' + type + '.delete.error',
                    data: this
                });
                return callback && callback(new Error());
            });
        }
    };
    return Base;
});
'use strict';
define('CartItem', [
    'lodash',
    'moment',
    'app/Models/Base'
], function dependencies(_, moment, BaseModel) {
    CartItem.type = 'cart_item';
    CartItem.SCREENING_TYPE = 'screening';
    function CartItem(cartItem) {
        var _this = this;
        BaseModel.call(this, cartItem);
        cartItem = cartItem || {};
        _.mapObject(cartItem, function (val, key) {
            _this[key] = val;
        });
        this.expire = moment(this.expire);
    }
    CartItem.prototype.getFormattedTitle = function () {
        switch (this.type) {
        case CartItem.SCREENING_TYPE:
            return this.screening.title.fr + ' le ' + this.screening.start_at.format('LL') + ' à ' + this.screening.start_at.format('HH:mm');
        default:
            return this.name;
        }
    };
    CartItem.prototype.getFormattedExpireAt = function () {
        return this.expire.format('HH:mm');
    };
    CartItem.prototype.getFormattedPrice = function () {
        return this.amount + ' CHF';
    };
    return CartItem;
});
'use strict';
define('Screening', [
    'module',
    'lodash',
    'moment',
    'app/Models/Base'
], function dependencies(module, _, moment, BaseModel) {
    Screening.type = 'screening';
    function Screening(screening) {
        var _this = this;
        BaseModel.call(this, screening);
        screening = screening || {};
        _.mapObject(screening, function (val, key) {
            _this[key] = val;
        });
        this.start_at = moment(screening.start_at);
        this.stop_at = moment(screening.stop_at);
        this.buckets = this.buckets.map(function (b) {
            if ('not_before' in b.rules)
                b.rules.not_before = moment(b.rules.not_before);
            if ('not_after' in b.rules)
                b.rules.not_after = moment(b.rules.not_after);
            return b;
        });
    }
    return Screening;
});
'use strict';
define('Cart', [
    'lodash',
    'api',
    'app/Models/Base',
    'CartItem',
    'Screening'
], function dependencies(_, TKTApi, BaseModel, CartItem, Screening) {
    Cart.type = 'cart';
    function Cart(cart) {
        var _this = this;
        BaseModel.call(this, cart);
        cart = cart || {};
        _.mapObject(cart, function (val, key) {
            _this[key] = val;
        });
        this.items = _.map(this.items, function (i) {
            return new CartItem(i);
        });
    }
    Cart.prototype.loadItemsInfos = function (callback) {
        var _this2 = this;
        if (!this.items || this.items.length === 0)
            return callback(null);
        var screening_ids = _.map(_.filter(this.items, function (i) {
            return i.type === CartItem.SCREENING_TYPE;
        }), function (i) {
            return i.item_id;
        });
        TKTApi.getScreeningsInfo(screening_ids, function (err, status, rsp) {
            if (err)
                return callback(err);
            var screenings = _.map(rsp, function (s) {
                return new Screening(s);
            });
            _this2.items = _.map(_this2.items, function (i) {
                if (i.type === CartItem.SCREENING_TYPE)
                    i.screening = _.find(screenings, function (s) {
                        return s._id === i.item_id;
                    });
                return i;
            });
            return callback(null);
        });
    };
    Cart.prototype.getFormattedTotal = function () {
        var total = _.reduce(this.items, function (memo, item) {
            return memo + parseFloat(item.amount);
        }, 0);
        return total + ' CHF';
    };
    return Cart;
});
'use strict';
define('Ticket', [
    'module',
    'lodash',
    'moment',
    'app/Models/Base'
], function dependencies(module, _, moment, BaseModel) {
    Ticket.type = 'ticket';
    function Ticket(ticket) {
        var _this = this;
        BaseModel.call(this, ticket);
        ticket = ticket || {};
        _.mapObject(ticket, function (val, key) {
            _this[key] = val;
        });
        if (this.bookings) {
            this.bookings = this.bookings.map(function (b) {
                b.created_at = moment(b.created_at);
                b.confirmed_at = moment(b.confirmed_at);
                b.expire_at = moment(b.expire_at);
                b.screening_start_at = moment(b.screening_start_at);
                b.screening_stop_at = moment(b.screening_stop_at);
                return b;
            });
        }
    }
    return Ticket;
});
'use strict';
define('app/Booking/Form', [
    'config',
    'postal',
    'lodash',
    'template',
    'jquery',
    'api',
    'moment',
    'Cart',
    'Screening',
    'Ticket'
], function dependencies(config, postal, _, Template, $, TKTApi, moment, CartModel, Screening, Ticket) {
    function Form($container, state) {
        this.$container = $container;
        this.initialized = false;
        this.ids = this.$container.data('ids').split(',');
        this.show_on_load = this.$container.data('show-on-load');
    }
    Form.prototype = {
        attach: function attach() {
            var _this = this;
            this.init_store();
            $('.show-booking-form').click(function (e) {
                e.preventDefault();
                if (_this.initialized)
                    return _this.deinit();
                _this.init();
            });
            postal.subscribe({
                channel: 'connection',
                topic: 'update',
                callback: function callback(data, envelope) {
                    _this.check_bookability();
                }
            });
            if (this.show_on_load)
                this.init();
        },
        init: function init() {
            var _this2 = this;
            TKTApi.getScreeningsInfo(this.ids, function (err, status, rsp) {
                _this2.data.screenings = rsp.map(function (s) {
                    return new Screening(s);
                });
                _this2.build_form();
                _this2.initialized = true;
            });
        },
        init_store: function init_store() {
            this.data = {
                screenings: [],
                screening: {},
                pricings: [],
                pass_infos: {},
                ticket: {},
                bookability: {}
            };
        },
        reset_store_on_screening_change: function reset_store_on_screening_change() {
            this.data.screening = {};
            this.data.pricings = {};
            this.data.pass_infos = {};
            this.data.bookability = {};
        },
        deinit: function deinit() {
            this.$container.html('');
            this.initialized = false;
        },
        emit_cart_update: function emit_cart_update(cart) {
            postal.publish({
                channel: 'cart',
                topic: 'update',
                data: { cart: cart }
            });
        },
        emit_connection_update: function emit_connection_update(ticket) {
            postal.publish({
                channel: 'connection',
                topic: 'update',
                data: { ticket: ticket }
            });
        },
        process_add_to_cart: function process_add_to_cart() {
            var _this3 = this;
            $('.pricings-error').html('').addClass('d-none');
            var chosen_pricings = _.find(this.data.pricings, function (nb) {
                return nb > 0;
            });
            if (!chosen_pricings) {
                return $('.pricings-error').html('Veuillez choisir au moins un billet').removeClass('d-none');
            }
            TKTApi.addToCart(this.data.screening._id, this.data.pricings, function (err, status, rsp) {
                if (err) {
                    return $('.pricings-error').html(rsp.errorMsg).removeClass('d-none');
                }
                $('.dates-form, .tickets-form').addClass('d-none');
                $('.success-panel').removeClass('d-none');
                TKTApi.loadCart(function (err, status, rsp) {
                    if (err)
                        return;
                    _this3.emit_cart_update(new CartModel(rsp));
                });
            });
        },
        book: function book() {
            var _this4 = this;
            if (!this.data.screening._id)
                return new Error('No screening');
            TKTApi.book(this.data.screening._id, function (err, status, rsp) {
                if (err) {
                    $('.book-form-success', _this4.$container).addClass('d-none');
                    $('.book-form-error', _this4.$container).html('Une erreur est survenue. Veuillez ré-essayer ultérieurement.').removeClass('d-none');
                } else if (rsp.flash && rsp.flash.error) {
                    $('.book-form-success', _this4.$container).addClass('d-none');
                    $('.book-form-error', _this4.$container).html(rsp.flash.error).removeClass('d-none');
                } else {
                    $('.book-form-error', _this4.$container).addClass('d-none');
                    $('.book-form-success', _this4.$container).html(rsp.flash.success).removeClass('d-none');
                }
                _this4.check_bookability();
            });
        },
        connect_pass: function connect_pass() {
            var _this5 = this;
            $('.pass-error', this.$container).html('').addClass('d-none');
            if (!this.data.pass_infos.number || !this.data.pass_infos.key)
                return $('.pass-error').html('Veuillez remplir les deux champs').removeClass('d-none');
            TKTApi.loginTicket(this.data.pass_infos.number, this.data.pass_infos.key, function (err, status, rsp) {
                if (err)
                    return $('.pass-error').html('Les informations que vous avez saisies sont invalides').removeClass('d-none');
                _this5.data.ticket = new Ticket(rsp);
                _this5.emit_connection_update(_this5.data.ticket);
            });
        },
        check_bookability: function check_bookability(callback) {
            var _this6 = this;
            if (!this.data.screening._id)
                return new Error('No screening');
            TKTApi.checkBookability(this.data.screening._id, function (err, status, rsp) {
                if (err)
                    return false;
                _this6.data.bookability = rsp;
                if (_this6.data.bookability.ticket_logged_in) {
                    $('.connect-panel', _this6.$container).addClass('d-none');
                    $('.book-panel', _this6.$container).removeClass('d-none');
                    $('.show-bookings-btn', _this6.$container).removeClass('d-none');
                    if (_this6.data.bookability.ticket_can_book_screening) {
                        $('.book-btn', _this6.$container).removeClass('d-none');
                        $('.book-form-error', _this6.$container).addClass('d-none');
                    } else {
                        $('.book-btn', _this6.$container).addClass('d-none');
                        var msg = _this6.data.bookability.screening_already_booked ? 'Vous ne pouvez pas réserver plus de place pour cette séance avec votre abonnement.' : 'Vous ne pouvez pas réserver de place pour cette séance avec votre abonnement.';
                        $('.book-form-error', _this6.$container).html(msg).removeClass('d-none');
                    }
                } else {
                    $('.connect-panel', _this6.$container).removeClass('d-none');
                    $('.book-panel', _this6.$container).addClass('d-none');
                }
            });
        },
        build_form: function build_form() {
            this.$container.html('');
            this.$dates_form = $('<div class="dates-form"></div>').appendTo(this.$container);
            this.$tickets_form = $('<div class="tickets-form"></div>').appendTo(this.$container);
            this.$success_panel = $('<div class="success-panel d-none"></div>').appendTo(this.$container);
            this.build_dates_form();
            this.build_success_panel();
        },
        build_dates_form: function build_dates_form() {
            var _this7 = this;
            this.$dates_form.html(Template.render('tkt-booking-form-dates-tpl', { screenings: this.data.screenings }));
            $('.date-wrapper span.date').click(function (e) {
                var $date = $(e.target);
                _this7.select_screening($date.data('screening_id'));
            });
            this.select_screening(this.data.screenings[0]._id);
        },
        build_tickets_form: function build_tickets_form() {
            var _this8 = this;
            this.$tickets_form.html(Template.render('tkt-booking-form-pricings-tpl', { screening: this.data.screening }));
            $('.pricing-input', this.$container).change(function (e) {
                var $input = $(e.target);
                _this8.data.pricings[$input.data('pricing')] = parseInt($input.val());
            });
            $('a.show-connect-panel-form', this.$container).click(function (e) {
                e.preventDefault();
                $('.connect-panel-form').removeClass('d-none');
            });
            $('.pass-number-input,.pass-key-input', this.$container).change(function (e) {
                _this8.data.pass_infos = {
                    number: $('.pass-number-input', _this8.$container).val(),
                    key: $('.pass-key-input', _this8.$container).val()
                };
            });
            $('.connect-btn', this.$container).click(this.connect_pass.bind(this));
            $('.book-btn').click(this.book.bind(this));
            $('.add-to-cart-btn').click(function (e) {
                _this8.process_add_to_cart();
            });
        },
        build_success_panel: function build_success_panel() {
            this.$success_panel.html(Template.render('tkt-booking-form-success-tpl', {
                program_url: config.get('program_url'),
                cart_url: config.get('cart_url')
            }));
        },
        select_screening: function select_screening(screening_id) {
            $('.date-wrapper .date').removeClass('active');
            $('.date-wrapper .date[data-screening_id="' + screening_id + '"]').addClass('active');
            this.reset_store_on_screening_change();
            this.data.screening = _.find(this.data.screenings, function (s) {
                return s._id === screening_id;
            });
            this.build_tickets_form();
            this.check_bookability();
        },
        detach: function detach() {
        }
    };
    return Form;
});
'use strict';
define('app/Cart/Cart', [
    'config',
    'async',
    'jquery',
    'api',
    'template',
    'postal',
    'Cart'
], function dependencies(config, async, $, TKTApi, Template, postal, CartModel) {
    function Cart($container, state) {
        this.$container = $container;
        this.cart = {};
    }
    Cart.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            this.load_cart(function (err) {
                if (err)
                    return;
            });
            postal.subscribe({
                channel: 'cart',
                topic: 'reload',
                callback: function callback(data, envelope) {
                    _this.load_cart();
                }
            });
        },
        load_cart: function load_cart(callback) {
            var _this2 = this;
            callback = callback || function (err) {
            };
            TKTApi.loadCart(function (err, status, rsp) {
                if (err)
                    return callback(err);
                _this2.cart = new CartModel(rsp);
                _this2.cart.loadItemsInfos(function (err) {
                    if (err)
                        return callback(err);
                    _this2.build_table();
                    _this2.emit_update();
                    _this2.bind_remove_item_icons(function (err) {
                        return callback(err);
                    });
                });
            });
        },
        build_table: function build_table() {
            this.$container.html(Template.render('tkt-cart-table-tpl', {
                cart: this.cart,
                program_url: config.get('program_url'),
                cart_reset_url: config.get('cart_reset_url')
            }));
        },
        bind_remove_item_icons: function bind_remove_item_icons(callback) {
            var _this3 = this;
            $('.tkt-remove-cart-item').on('click', function (e) {
                var $x = $(e.target);
                var item_id = parseInt($x.data('item'));
                _this3.remove_item(item_id, function (err) {
                    if (err)
                        return callback(err);
                    return _this3.load_cart(callback);
                });
            });
            $('.tkt-reset-cart-btn').on('click', this.reset_cart.bind(this));
        },
        remove_item: function remove_item(item_id, callback) {
            TKTApi.removeFromCart(item_id, function (err, status, rsp) {
                return callback(err);
            });
        },
        reset_cart: function reset_cart(e) {
            var _this4 = this;
            e.preventDefault();
            var tasks = _.map($('.tkt-remove-cart-item'), function (x) {
                return function (done) {
                    var item_id = parseInt($(x).data('item'));
                    _this4.remove_item(item_id, done);
                };
            });
            async.parallel(tasks, function (err, results) {
                return _this4.load_cart();
            });
        },
        emit_update: function emit_update() {
            postal.publish({
                channel: 'cart',
                topic: 'update',
                data: { cart: this.cart }
            });
        },
        detach: function detach() {
        }
    };
    return Cart;
});
'use strict';
define('app/Cart/CartIcon', [
    'postal',
    'lodash',
    'jquery',
    'api',
    'moment',
    'Screening'
], function dependencies(postal, _, $, TKTApi, moment, Screening) {
    function CartIcon($container, state) {
        this.$container = $container;
        this.$icons = $('.tkt-cart-icon');
    }
    CartIcon.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            TKTApi.loadCart(function (err, status, rsp) {
                _this.update_nb(rsp.items.length);
            });
            this.$nb = $('<div class="cart-icon-nb assertive"></div>');
            this.$container.append(this.$nb);
            postal.subscribe({
                channel: 'cart',
                topic: 'update',
                callback: function callback(data, envelope) {
                    _this.update_nb(data.cart.items.length);
                }
            });
        },
        update_nb: function update_nb(nb) {
            this.$nb.html(nb > 0 ? nb : '');
        },
        detach: function detach() {
        }
    };
    return CartIcon;
});
'use strict';
define('app/User/UserConnect', [
    'postal',
    'jquery',
    'api',
    'template',
    'Ticket'
], function dependencies(postal, $, TKTApi, Template, Ticket) {
    function UserConnect($container, state) {
        this.$container = $container;
        this.data = { pass_infos: {} };
    }
    UserConnect.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            TKTApi.viewTicket(function (err, status, rsp) {
                _this.render(!err ? new Ticket(rsp) : null);
            });
            postal.subscribe({
                channel: 'connection',
                topic: 'update',
                callback: function callback(data, envelope) {
                    _this.render(data.ticket);
                }
            });
        },
        emit_connection_update: function emit_connection_update(ticket) {
            postal.publish({
                channel: 'connection',
                topic: 'update',
                data: { ticket: ticket }
            });
        },
        connect_pass: function connect_pass() {
            var _this2 = this;
            $('.user-connect-error', this.$container).html('').addClass('d-none');
            if (!this.data.pass_infos.number || !this.data.pass_infos.key)
                return $('.pass-error').html('Veuillez remplir les deux champs').removeClass('d-none');
            TKTApi.loginTicket(this.data.pass_infos.number, this.data.pass_infos.key, function (err, status, rsp) {
                if (err)
                    return $('.pass-error').html('Les informations que vous avez saisies sont invalides').removeClass('d-none');
                _this2.data.ticket = new Ticket(rsp);
                _this2.emit_connection_update(_this2.data.ticket);
            });
        },
        disconnect_pass: function disconnect_pass() {
            var _this3 = this;
            TKTApi.logoutTicket(function (err, status, rsp) {
                if (!err)
                    _this3.emit_connection_update(null);
            });
        },
        render: function render(ticket) {
            var _this4 = this;
            this.$container.html(Template.render('tkt-user-connect-tpl', { ticket: ticket }));
            $('.pass-number-input,.pass-key-input', this.$container).change(function (e) {
                _this4.data.pass_infos = {
                    number: $('.pass-number-input', _this4.$container).val(),
                    key: $('.pass-key-input', _this4.$container).val()
                };
            });
            $('.connect-btn', this.$container).click(this.connect_pass.bind(this));
            $('.disconnect-btn', this.$container).click(this.disconnect_pass.bind(this));
        },
        detach: function detach() {
        }
    };
    return UserConnect;
});
!function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? t(exports, require('jquery')) : 'function' == typeof define && define.amd ? define('bootstrap', [
        'exports',
        'jquery'
    ], t) : t(e.bootstrap = {}, e.jQuery);
}(this, function (e, t) {
    'use strict';
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
    }
    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {}, t = Object.keys(o);
            'function' == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
            }))), t.forEach(function (e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i;
            });
        }
        return r;
    }
    for (var r, n, o, a, c, u, f, h, d, p, m, g, _, v, y, E, b, w, C, T, S, D, A, I, O, N, k, x, P, L, j, H, M, F, W, R, U, B, q, K, Q, Y, V, z, G, J, Z, X, $, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, he, de, pe, me, ge, _e, ve, ye, Ee, be, we = function (i) {
                var t = 'transitionend';
                function e(e) {
                    var t = this, n = !1;
                    return i(this).one(l.TRANSITION_END, function () {
                        n = !0;
                    }), setTimeout(function () {
                        n || l.triggerTransitionEnd(t);
                    }, e), this;
                }
                var l = {
                    TRANSITION_END: 'bsTransitionEnd',
                    getUID: function (e) {
                        for (; e += ~~(1000000 * Math.random()), document.getElementById(e););
                        return e;
                    },
                    getSelectorFromElement: function (e) {
                        var t = e.getAttribute('data-target');
                        t && '#' !== t || (t = e.getAttribute('href') || '');
                        try {
                            return document.querySelector(t) ? t : null;
                        } catch (e) {
                            return null;
                        }
                    },
                    getTransitionDurationFromElement: function (e) {
                        if (!e)
                            return 0;
                        var t = i(e).css('transition-duration');
                        return parseFloat(t) ? (t = t.split(',')[0], 1000 * parseFloat(t)) : 0;
                    },
                    reflow: function (e) {
                        return e.offsetHeight;
                    },
                    triggerTransitionEnd: function (e) {
                        i(e).trigger(t);
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(t);
                    },
                    isElement: function (e) {
                        return (e[0] || e).nodeType;
                    },
                    typeCheckConfig: function (e, t, n) {
                        for (var i in n)
                            if (Object.prototype.hasOwnProperty.call(n, i)) {
                                var r = n[i], o = t[i], s = o && l.isElement(o) ? 'element' : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(r).test(s))
                                    throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
                            }
                        var a;
                    }
                };
                return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = {
                    bindType: t,
                    delegateType: t,
                    handle: function (e) {
                        if (i(e.target).is(this))
                            return e.handleObj.handler.apply(this, arguments);
                    }
                }, l;
            }(t = t && t.hasOwnProperty('default') ? t.default : t), Ce = (n = 'alert', a = '.' + (o = 'bs.alert'), c = (r = t).fn[n], u = {
                CLOSE: 'close' + a,
                CLOSED: 'closed' + a,
                CLICK_DATA_API: 'click' + a + '.data-api'
            }, f = 'alert', h = 'fade', d = 'show', p = function () {
                function i(e) {
                    this._element = e;
                }
                var e = i.prototype;
                return e.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
                }, e.dispose = function () {
                    r.removeData(this._element, o), this._element = null;
                }, e._getRootElement = function (e) {
                    var t = we.getSelectorFromElement(e), n = !1;
                    return t && (n = document.querySelector(t)), n || (n = r(e).closest('.' + f)[0]), n;
                }, e._triggerCloseEvent = function (e) {
                    var t = r.Event(u.CLOSE);
                    return r(e).trigger(t), t;
                }, e._removeElement = function (t) {
                    var n = this;
                    if (r(t).removeClass(d), r(t).hasClass(h)) {
                        var e = we.getTransitionDurationFromElement(t);
                        r(t).one(we.TRANSITION_END, function (e) {
                            return n._destroyElement(t, e);
                        }).emulateTransitionEnd(e);
                    } else
                        this._destroyElement(t);
                }, e._destroyElement = function (e) {
                    r(e).detach().trigger(u.CLOSED).remove();
                }, i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var e = r(this), t = e.data(o);
                        t || (t = new i(this), e.data(o, t)), 'close' === n && t[n](this);
                    });
                }, i._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }, s(i, null, [{
                        key: 'VERSION',
                        get: function () {
                            return '4.1.3';
                        }
                    }]), i;
            }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
                return r.fn[n] = c, p._jQueryInterface;
            }, p), Te = (g = 'button', v = '.' + (_ = 'bs.button'), y = '.data-api', E = (m = t).fn[g], b = 'active', w = 'btn', T = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', D = 'input', A = '.active', I = '.btn', O = {
                CLICK_DATA_API: 'click' + v + y,
                FOCUS_BLUR_DATA_API: (C = 'focus') + v + y + ' blur' + v + y
            }, N = function () {
                function n(e) {
                    this._element = e;
                }
                var e = n.prototype;
                return e.toggle = function () {
                    var e = !0, t = !0, n = m(this._element).closest(S)[0];
                    if (n) {
                        var i = this._element.querySelector(D);
                        if (i) {
                            if ('radio' === i.type)
                                if (i.checked && this._element.classList.contains(b))
                                    e = !1;
                                else {
                                    var r = n.querySelector(A);
                                    r && m(r).removeClass(b);
                                }
                            if (e) {
                                if (i.hasAttribute('disabled') || n.hasAttribute('disabled') || i.classList.contains('disabled') || n.classList.contains('disabled'))
                                    return;
                                i.checked = !this._element.classList.contains(b), m(i).trigger('change');
                            }
                            i.focus(), t = !1;
                        }
                    }
                    t && this._element.setAttribute('aria-pressed', !this._element.classList.contains(b)), e && m(this._element).toggleClass(b);
                }, e.dispose = function () {
                    m.removeData(this._element, _), this._element = null;
                }, n._jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = m(this).data(_);
                        e || (e = new n(this), m(this).data(_, e)), 'toggle' === t && e[t]();
                    });
                }, s(n, null, [{
                        key: 'VERSION',
                        get: function () {
                            return '4.1.3';
                        }
                    }]), n;
            }(), m(document).on(O.CLICK_DATA_API, T, function (e) {
                e.preventDefault();
                var t = e.target;
                m(t).hasClass(w) || (t = m(t).closest(I)), N._jQueryInterface.call(m(t), 'toggle');
            }).on(O.FOCUS_BLUR_DATA_API, T, function (e) {
                var t = m(e.target).closest(I)[0];
                m(t).toggleClass(C, /^focus(in)?$/.test(e.type));
            }), m.fn[g] = N._jQueryInterface, m.fn[g].Constructor = N, m.fn[g].noConflict = function () {
                return m.fn[g] = E, N._jQueryInterface;
            }, N), Se = (x = 'carousel', L = '.' + (P = 'bs.carousel'), j = '.data-api', H = (k = t).fn[x], M = {
                interval: 5000,
                keyboard: !0,
                slide: !1,
                pause: 'hover',
                wrap: !0
            }, F = {
                interval: '(number|boolean)',
                keyboard: 'boolean',
                slide: '(boolean|string)',
                pause: '(string|boolean)',
                wrap: 'boolean'
            }, W = 'next', R = 'prev', U = 'left', B = 'right', q = {
                SLIDE: 'slide' + L,
                SLID: 'slid' + L,
                KEYDOWN: 'keydown' + L,
                MOUSEENTER: 'mouseenter' + L,
                MOUSELEAVE: 'mouseleave' + L,
                TOUCHEND: 'touchend' + L,
                LOAD_DATA_API: 'load' + L + j,
                CLICK_DATA_API: 'click' + L + j
            }, K = 'carousel', Q = 'active', Y = 'slide', V = 'carousel-item-right', z = 'carousel-item-left', G = 'carousel-item-next', J = 'carousel-item-prev', Z = '.active', X = '.active.carousel-item', $ = '.carousel-item', ee = '.carousel-item-next, .carousel-item-prev', te = '.carousel-indicators', ne = '[data-slide], [data-slide-to]', ie = '[data-ride="carousel"]', re = function () {
                function o(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = k(e)[0], this._indicatorsElement = this._element.querySelector(te), this._addEventListeners();
                }
                var e = o.prototype;
                return e.next = function () {
                    this._isSliding || this._slide(W);
                }, e.nextWhenVisible = function () {
                    !document.hidden && k(this._element).is(':visible') && 'hidden' !== k(this._element).css('visibility') && this.next();
                }, e.prev = function () {
                    this._isSliding || this._slide(R);
                }, e.pause = function (e) {
                    e || (this._isPaused = !0), this._element.querySelector(ee) && (we.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
                }, e.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                }, e.to = function (e) {
                    var t = this;
                    this._activeElement = this._element.querySelector(X);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding)
                            k(this._element).one(q.SLID, function () {
                                return t.to(e);
                            });
                        else {
                            if (n === e)
                                return this.pause(), void this.cycle();
                            var i = n < e ? W : R;
                            this._slide(i, this._items[e]);
                        }
                }, e.dispose = function () {
                    k(this._element).off(L), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
                }, e._getConfig = function (e) {
                    return e = l({}, M, e), we.typeCheckConfig(x, e, F), e;
                }, e._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && k(this._element).on(q.KEYDOWN, function (e) {
                        return t._keydown(e);
                    }), 'hover' === this._config.pause && (k(this._element).on(q.MOUSEENTER, function (e) {
                        return t.pause(e);
                    }).on(q.MOUSELEAVE, function (e) {
                        return t.cycle(e);
                    }), 'ontouchstart' in document.documentElement && k(this._element).on(q.TOUCHEND, function () {
                        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e);
                        }, 500 + t._config.interval);
                    }));
                }, e._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName))
                        switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next();
                        }
                }, e._getItemIndex = function (e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll($)) : [], this._items.indexOf(e);
                }, e._getItemByDirection = function (e, t) {
                    var n = e === W, i = e === R, r = this._getItemIndex(t), o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap)
                        return t;
                    var s = (r + (e === R ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                }, e._triggerSlideEvent = function (e, t) {
                    var n = this._getItemIndex(e), i = this._getItemIndex(this._element.querySelector(X)), r = k.Event(q.SLIDE, {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n
                        });
                    return k(this._element).trigger(r), r;
                }, e._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                        k(t).removeClass(Q);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && k(n).addClass(Q);
                    }
                }, e._slide = function (e, t) {
                    var n, i, r, o = this, s = this._element.querySelector(X), a = this._getItemIndex(s), l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), u = Boolean(this._interval);
                    if (e === W ? (n = z, i = G, r = U) : (n = V, i = J, r = B), l && k(l).hasClass(Q))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                        this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                        var f = k.Event(q.SLID, {
                            relatedTarget: l,
                            direction: r,
                            from: a,
                            to: c
                        });
                        if (k(this._element).hasClass(Y)) {
                            k(l).addClass(i), we.reflow(l), k(s).addClass(n), k(l).addClass(n);
                            var h = we.getTransitionDurationFromElement(s);
                            k(s).one(we.TRANSITION_END, function () {
                                k(l).removeClass(n + ' ' + i).addClass(Q), k(s).removeClass(Q + ' ' + i + ' ' + n), o._isSliding = !1, setTimeout(function () {
                                    return k(o._element).trigger(f);
                                }, 0);
                            }).emulateTransitionEnd(h);
                        } else
                            k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(f);
                        u && this.cycle();
                    }
                }, o._jQueryInterface = function (i) {
                    return this.each(function () {
                        var e = k(this).data(P), t = l({}, M, k(this).data());
                        'object' == typeof i && (t = l({}, t, i));
                        var n = 'string' == typeof i ? i : t.slide;
                        if (e || (e = new o(this, t), k(this).data(P, e)), 'number' == typeof i)
                            e.to(i);
                        else if ('string' == typeof n) {
                            if ('undefined' == typeof e[n])
                                throw new TypeError('No method named "' + n + '"');
                            e[n]();
                        } else
                            t.interval && (e.pause(), e.cycle());
                    });
                }, o._dataApiClickHandler = function (e) {
                    var t = we.getSelectorFromElement(this);
                    if (t) {
                        var n = k(t)[0];
                        if (n && k(n).hasClass(K)) {
                            var i = l({}, k(n).data(), k(this).data()), r = this.getAttribute('data-slide-to');
                            r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), e.preventDefault();
                        }
                    }
                }, s(o, null, [
                    {
                        key: 'VERSION',
                        get: function () {
                            return '4.1.3';
                        }
                    },
                    {
                        key: 'Default',
                        get: function () {
                            return M;
                        }
                    }
                ]), o;
            }(), k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler), k(window).on(q.LOAD_DATA_API, function () {
                for (var e = [].slice.call(document.querySelectorAll(ie)), t = 0, n = e.length; t < n; t++) {
                    var i = k(e[t]);
                    re._jQueryInterface.call(i, i.data());
                }
            }), k.fn[x] = re._jQueryInterface, k.fn[x].Constructor = re, k.fn[x].noConflict = function () {
                return k.fn[x] = H, re._jQueryInterface;
            }, re), De = (se = 'collapse', le = '.' + (ae = 'bs.collapse'), ce = (oe = t).fn[se], ue = {
                toggle: !0,
                parent: ''
            }, fe = {
                toggle: 'boolean',
                parent: '(string|element)'
            }, he = {
                SHOW: 'show' + le,
                SHOWN: 'shown' + le,
                HIDE: 'hide' + le,
                HIDDEN: 'hidden' + le,
                CLICK_DATA_API: 'click' + le + '.data-api'
            }, de = 'show', pe = 'collapse', me = 'collapsing', ge = 'collapsed', _e = 'width', ve = 'height', ye = '.show, .collapsing', Ee = '[data-toggle="collapse"]', be = function () {
                function a(t, e) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i], s = we.getSelectorFromElement(o), a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                                return e === t;
                            });
                        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o));
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                }
                var e = a.prototype;
                return e.toggle = function () {
                    oe(this._element).hasClass(de) ? this.hide() : this.show();
                }, e.show = function () {
                    var e, t, n = this;
                    if (!this._isTransitioning && !oe(this._element).hasClass(de) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(ye)).filter(function (e) {
                            return e.getAttribute('data-parent') === n._config.parent;
                        })).length && (e = null), !(e && (t = oe(e).not(this._selector).data(ae)) && t._isTransitioning))) {
                        var i = oe.Event(he.SHOW);
                        if (oe(this._element).trigger(i), !i.isDefaultPrevented()) {
                            e && (a._jQueryInterface.call(oe(e).not(this._selector), 'hide'), t || oe(e).data(ae, null));
                            var r = this._getDimension();
                            oe(this._element).removeClass(pe).addClass(me), this._element.style[r] = 0, this._triggerArray.length && oe(this._triggerArray).removeClass(ge).attr('aria-expanded', !0), this.setTransitioning(!0);
                            var o = 'scroll' + (r[0].toUpperCase() + r.slice(1)), s = we.getTransitionDurationFromElement(this._element);
                            oe(this._element).one(we.TRANSITION_END, function () {
                                oe(n._element).removeClass(me).addClass(pe).addClass(de), n._element.style[r] = '', n.setTransitioning(!1), oe(n._element).trigger(he.SHOWN);
                            }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + 'px';
                        }
                    }
                }, e.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && oe(this._element).hasClass(de)) {
                        var t = oe.Event(he.HIDE);
                        if (oe(this._element).trigger(t), !t.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + 'px', we.reflow(this._element), oe(this._element).addClass(me).removeClass(pe).removeClass(de);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var r = 0; r < i; r++) {
                                    var o = this._triggerArray[r], s = we.getSelectorFromElement(o);
                                    if (null !== s)
                                        oe([].slice.call(document.querySelectorAll(s))).hasClass(de) || oe(o).addClass(ge).attr('aria-expanded', !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = '';
                            var a = we.getTransitionDurationFromElement(this._element);
                            oe(this._element).one(we.TRANSITION_END, function () {
                                e.setTransitioning(!1), oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN);
                            }).emulateTransitionEnd(a);
                        }
                    }
                }, e.setTransitioning = function (e) {
                    this._isTransitioning = e;
                }, e.dispose = function () {
                    oe.removeData(this._element, ae), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
                }, e._getConfig = function (e) {
                    return (e = l({}, ue, e)).toggle = Boolean(e.toggle), we.typeCheckConfig(se, e, fe), e;
                }, e._getDimension = function () {
                    return oe(this._element).hasClass(_e) ? _e : ve;
                }, e._getParent = function () {
                    var n = this, e = null;
                    we.isElement(this._config.parent) ? (e = this._config.parent, 'undefined' != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                    var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(e.querySelectorAll(t));
                    return oe(i).each(function (e, t) {
                        n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
                    }), e;
                }, e._addAriaAndCollapsedClass = function (e, t) {
                    if (e) {
                        var n = oe(e).hasClass(de);
                        t.length && oe(t).toggleClass(ge, !n).attr('aria-expanded', n);
                    }
                }, a._getTargetFromElement = function (e) {
                    var t = we.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null;
                }, a._jQueryInterface = function (i) {
                    return this.each(function () {
                        var e = oe(this), t = e.data(ae), n = l({}, ue, e.data(), 'object' == typeof i && i ? i : {});
                        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ae, t)), 'string' == typeof i) {
                            if ('undefined' == typeof t[i])
                                throw new TypeError('No method named "' + i + '"');
                            t[i]();
                        }
                    });
                }, s(a, null, [
                    {
                        key: 'VERSION',
                        get: function () {
                            return '4.1.3';
                        }
                    },
                    {
                        key: 'Default',
                        get: function () {
                            return ue;
                        }
                    }
                ]), a;
            }(), oe(document).on(he.CLICK_DATA_API, Ee, function (e) {
                'A' === e.currentTarget.tagName && e.preventDefault();
                var n = oe(this), t = we.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(t));
                oe(i).each(function () {
                    var e = oe(this), t = e.data(ae) ? 'toggle' : n.data();
                    be._jQueryInterface.call(e, t);
                });
            }), oe.fn[se] = be._jQueryInterface, oe.fn[se].Constructor = be, oe.fn[se].noConflict = function () {
                return oe.fn[se] = ce, be._jQueryInterface;
            }, be), Ae = 'undefined' != typeof window && 'undefined' != typeof document, Ie = [
                'Edge',
                'Trident',
                'Firefox'
            ], Oe = 0, Ne = 0; Ne < Ie.length; Ne += 1)
        if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) {
            Oe = 1;
            break;
        }
    var ke = Ae && window.Promise ? function (e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e();
            }));
        };
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e();
            }, Oe));
        };
    };
    function xe(e) {
        return e && '[object Function]' === {}.toString.call(e);
    }
    function Pe(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n;
    }
    function Le(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
    }
    function je(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
            return e.ownerDocument.body;
        case '#document':
            return e.body;
        }
        var t = Pe(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e));
    }
    var He = Ae && !(!window.MSInputMethodContext || !document.documentMode), Me = Ae && /MSIE 10/.test(navigator.userAgent);
    function Fe(e) {
        return 11 === e ? He : 10 === e ? Me : He || Me;
    }
    function We(e) {
        if (!e)
            return document.documentElement;
        for (var t = Fe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;)
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== [
            'TD',
            'TABLE'
        ].indexOf(n.nodeName) && 'static' === Pe(n, 'position') ? We(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
    }
    function Re(e) {
        return null !== e.parentNode ? Re(e.parentNode) : e;
    }
    function Ue(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e, o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r))
            return 'BODY' === (a = (s = l).nodeName) || 'HTML' !== a && We(s.firstElementChild) !== s ? We(l) : l;
        var c = Re(e);
        return c.host ? Ue(c.host, t) : Ue(e, Re(t).host);
    }
    function Be(e) {
        var t = 'top' === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top') ? 'scrollTop' : 'scrollLeft', n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t];
        }
        return e[t];
    }
    function qe(e, t) {
        var n = 'x' === t ? 'Left' : 'Top', i = 'Left' === n ? 'Right' : 'Bottom';
        return parseFloat(e['border' + n + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10);
    }
    function Ke(e, t, n, i) {
        return Math.max(t['offset' + e], t['scroll' + e], n['client' + e], n['offset' + e], n['scroll' + e], Fe(10) ? n['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
    }
    function Qe() {
        var e = document.body, t = document.documentElement, n = Fe(10) && getComputedStyle(t);
        return {
            height: Ke('Height', e, t, n),
            width: Ke('Width', e, t, n)
        };
    }
    var Ye = function () {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            return function (e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e;
            };
        }(), Ve = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }, ze = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        };
    function Ge(e) {
        return ze({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }
    function Je(e) {
        var t = {};
        try {
            if (Fe(10)) {
                t = e.getBoundingClientRect();
                var n = Be(e, 'top'), i = Be(e, 'left');
                t.top += n, t.left += i, t.bottom += n, t.right += i;
            } else
                t = e.getBoundingClientRect();
        } catch (e) {
        }
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            }, o = 'HTML' === e.nodeName ? Qe() : {}, s = o.width || e.clientWidth || r.right - r.left, a = o.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, c = e.offsetHeight - a;
        if (l || c) {
            var u = Pe(e);
            l -= qe(u, 'x'), c -= qe(u, 'y'), r.width -= l, r.height -= c;
        }
        return Ge(r);
    }
    function Ze(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = Fe(10), r = 'HTML' === t.nodeName, o = Je(e), s = Je(t), a = je(e), l = Pe(t), c = parseFloat(l.borderTopWidth, 10), u = parseFloat(l.borderLeftWidth, 10);
        n && 'HTML' === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = Ge({
            top: o.top - s.top - c,
            left: o.left - s.left - u,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var h = parseFloat(l.marginTop, 10), d = parseFloat(l.marginLeft, 10);
            f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d;
        }
        return (i && !n ? t.contains(a) : t === a && 'BODY' !== a.nodeName) && (f = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = Be(t, 'top'), r = Be(t, 'left'), o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e;
        }(f, t)), f;
    }
    function Xe(e) {
        if (!e || !e.parentElement || Fe())
            return document.documentElement;
        for (var t = e.parentElement; t && 'none' === Pe(t, 'transform');)
            t = t.parentElement;
        return t || document.documentElement;
    }
    function $e(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], o = {
                top: 0,
                left: 0
            }, s = r ? Xe(e) : Ue(e, t);
        if ('viewport' === i)
            o = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = e.ownerDocument.documentElement, i = Ze(e, n), r = Math.max(n.clientWidth, window.innerWidth || 0), o = Math.max(n.clientHeight, window.innerHeight || 0), s = t ? 0 : Be(n), a = t ? 0 : Be(n, 'left');
                return Ge({
                    top: s - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: r,
                    height: o
                });
            }(s, r);
        else {
            var a = void 0;
            'scrollParent' === i ? 'BODY' === (a = je(Le(t))).nodeName && (a = e.ownerDocument.documentElement) : a = 'window' === i ? e.ownerDocument.documentElement : i;
            var l = Ze(a, s, r);
            if ('HTML' !== a.nodeName || function e(t) {
                    var n = t.nodeName;
                    return 'BODY' !== n && 'HTML' !== n && ('fixed' === Pe(t, 'position') || e(Le(t)));
                }(s))
                o = l;
            else {
                var c = Qe(), u = c.height, f = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left;
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
    }
    function et(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var s = $e(i, n, o, r), a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            }, l = Object.keys(a).map(function (e) {
                return ze({ key: e }, a[e], { area: (t = a[e], t.width * t.height) });
                var t;
            }).sort(function (e, t) {
                return t.area - e.area;
            }), c = l.filter(function (e) {
                var t = e.width, n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight;
            }), u = 0 < c.length ? c[0].key : l[0].key, f = e.split('-')[1];
        return u + (f ? '-' + f : '');
    }
    function tt(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Ze(n, i ? Xe(t) : Ue(t, n), i);
    }
    function nt(e) {
        var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom), i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
    }
    function it(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
        });
    }
    function rt(e, t, n) {
        n = n.split('-')[0];
        var i = nt(e), r = {
                width: i.width,
                height: i.height
            }, o = -1 !== [
                'right',
                'left'
            ].indexOf(n), s = o ? 'top' : 'left', a = o ? 'left' : 'top', l = o ? 'height' : 'width', c = o ? 'width' : 'height';
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[it(a)], r;
    }
    function ot(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function st(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function (e) {
                    return e[t] === n;
                });
            var i = ot(e, function (e) {
                return e[t] === n;
            });
            return e.indexOf(i);
        }(e, 'name', t))).forEach(function (e) {
            e.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var t = e.function || e.fn;
            e.enabled && xe(t) && (n.offsets.popper = Ge(n.offsets.popper), n.offsets.reference = Ge(n.offsets.reference), n = t(n, e));
        }), n;
    }
    function at(e, n) {
        return e.some(function (e) {
            var t = e.name;
            return e.enabled && t === n;
        });
    }
    function lt(e) {
        for (var t = [
                    !1,
                    'ms',
                    'Webkit',
                    'Moz',
                    'O'
                ], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i], o = r ? '' + r + n : e;
            if ('undefined' != typeof document.body.style[o])
                return o;
        }
        return null;
    }
    function ct(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function ut(e, t, n, i) {
        n.updateBound = i, ct(e).addEventListener('resize', n.updateBound, { passive: !0 });
        var r = je(e);
        return function e(t, n, i, r) {
            var o = 'BODY' === t.nodeName, s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, { passive: !0 }), o || e(je(s.parentNode), n, i, r), r.push(s);
        }(r, 'scroll', n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
    }
    function ft() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound);
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
    }
    function ht(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function dt(n, i) {
        Object.keys(i).forEach(function (e) {
            var t = '';
            -1 !== [
                'width',
                'height',
                'top',
                'right',
                'bottom',
                'left'
            ].indexOf(e) && ht(i[e]) && (t = 'px'), n.style[e] = i[e] + t;
        });
    }
    function pt(e, t, n) {
        var i = ot(e, function (e) {
                return e.name === t;
            }), r = !!i && e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order;
            });
        if (!r) {
            var o = '`' + t + '`', s = '`' + n + '`';
            console.warn(s + ' modifier is required by ' + o + ' modifier in order to work, be sure to include it before ' + o + '!');
        }
        return r;
    }
    var mt = [
            'auto-start',
            'auto',
            'auto-end',
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start'
        ], gt = mt.slice(3);
    function _t(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = gt.indexOf(e), i = gt.slice(n + 1).concat(gt.slice(0, n));
        return t ? i.reverse() : i;
    }
    var vt = 'flip', yt = 'clockwise', Et = 'counterclockwise';
    function bt(e, r, o, t) {
        var s = [
                0,
                0
            ], a = -1 !== [
                'right',
                'left'
            ].indexOf(t), n = e.split(/(\+|\-)/).map(function (e) {
                return e.trim();
            }), i = n.indexOf(ot(n, function (e) {
                return -1 !== e.search(/,|\s/);
            }));
        n[i] && -1 === n[i].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var l = /\s*,\s*|\s+/, c = -1 !== i ? [
                n.slice(0, i).concat([n[i].split(l)[0]]),
                [n[i].split(l)[1]].concat(n.slice(i + 1))
            ] : [n];
        return (c = c.map(function (e, t) {
            var n = (1 === t ? !a : a) ? 'height' : 'width', i = !1;
            return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== [
                    '+',
                    '-'
                ].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t);
            }, []).map(function (e) {
                return function (e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
                    if (!o)
                        return e;
                    if (0 === s.indexOf('%')) {
                        var a = void 0;
                        switch (s) {
                        case '%p':
                            a = n;
                            break;
                        case '%':
                        case '%r':
                        default:
                            a = i;
                        }
                        return Ge(a)[t] / 100 * o;
                    }
                    if ('vh' === s || 'vw' === s)
                        return ('vh' === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o;
                }(e, n, r, o);
            });
        })).forEach(function (n, i) {
            n.forEach(function (e, t) {
                ht(e) && (s[i] += e * ('-' === n[t - 1] ? -1 : 1));
            });
        }), s;
    }
    var wt = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {
            },
            onUpdate: function () {
            },
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement, n = t.split('-')[0], i = t.split('-')[1];
                        if (i) {
                            var r = e.offsets, o = r.reference, s = r.popper, a = -1 !== [
                                    'bottom',
                                    'top'
                                ].indexOf(n), l = a ? 'left' : 'top', c = a ? 'width' : 'height', u = {
                                    start: Ve({}, l, o[l]),
                                    end: Ve({}, l, o[l] + o[c] - s[c])
                                };
                            e.offsets.popper = ze({}, s, u[i]);
                        }
                        return e;
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.offset, i = e.placement, r = e.offsets, o = r.popper, s = r.reference, a = i.split('-')[0], l = void 0;
                        return l = ht(+n) ? [
                            +n,
                            0
                        ] : bt(n, o, s, a), 'left' === a ? (o.top += l[0], o.left -= l[1]) : 'right' === a ? (o.top += l[0], o.left += l[1]) : 'top' === a ? (o.left += l[0], o.top -= l[1]) : 'bottom' === a && (o.left += l[0], o.top += l[1]), e.popper = o, e;
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, i) {
                        var t = i.boundariesElement || We(e.instance.popper);
                        e.instance.reference === t && (t = We(t));
                        var n = lt('transform'), r = e.instance.popper.style, o = r.top, s = r.left, a = r[n];
                        r.top = '', r.left = '', r[n] = '';
                        var l = $e(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                        var c = i.priority, u = e.offsets.popper, f = {
                                primary: function (e) {
                                    var t = u[e];
                                    return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), Ve({}, e, t);
                                },
                                secondary: function (e) {
                                    var t = 'right' === e ? 'left' : 'top', n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ('right' === e ? u.width : u.height))), Ve({}, t, n);
                                }
                            };
                        return c.forEach(function (e) {
                            var t = -1 !== [
                                'left',
                                'top'
                            ].indexOf(e) ? 'primary' : 'secondary';
                            u = ze({}, u, f[t](e));
                        }), e.offsets.popper = u, e;
                    },
                    priority: [
                        'left',
                        'right',
                        'top',
                        'bottom'
                    ],
                    padding: 5,
                    boundariesElement: 'scrollParent'
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split('-')[0], o = Math.floor, s = -1 !== [
                                'top',
                                'bottom'
                            ].indexOf(r), a = s ? 'right' : 'bottom', l = s ? 'left' : 'top', c = s ? 'width' : 'height';
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e;
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, t) {
                        var n;
                        if (!pt(e.instance.modifiers, 'arrow', 'keepTogether'))
                            return e;
                        var i = t.element;
                        if ('string' == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i)))
                                return e;
                        } else if (!e.instance.popper.contains(i))
                            return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                        var r = e.placement.split('-')[0], o = e.offsets, s = o.popper, a = o.reference, l = -1 !== [
                                'left',
                                'right'
                            ].indexOf(r), c = l ? 'height' : 'width', u = l ? 'Top' : 'Left', f = u.toLowerCase(), h = l ? 'left' : 'top', d = l ? 'bottom' : 'right', p = nt(i)[c];
                        a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ge(e.offsets.popper);
                        var m = a[f] + a[c] / 2 - p / 2, g = Pe(e.instance.popper), _ = parseFloat(g['margin' + u], 10), v = parseFloat(g['border' + u + 'Width'], 10), y = m - e.offsets.popper[f] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ve(n = {}, f, Math.round(y)), Ve(n, h, ''), n), e;
                    },
                    element: '[x-arrow]'
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (p, m) {
                        if (at(p.instance.modifiers, 'inner'))
                            return p;
                        if (p.flipped && p.placement === p.originalPlacement)
                            return p;
                        var g = $e(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed), _ = p.placement.split('-')[0], v = it(_), y = p.placement.split('-')[1] || '', E = [];
                        switch (m.behavior) {
                        case vt:
                            E = [
                                _,
                                v
                            ];
                            break;
                        case yt:
                            E = _t(_);
                            break;
                        case Et:
                            E = _t(_, !0);
                            break;
                        default:
                            E = m.behavior;
                        }
                        return E.forEach(function (e, t) {
                            if (_ !== e || E.length === t + 1)
                                return p;
                            _ = p.placement.split('-')[0], v = it(_);
                            var n, i = p.offsets.popper, r = p.offsets.reference, o = Math.floor, s = 'left' === _ && o(i.right) > o(r.left) || 'right' === _ && o(i.left) < o(r.right) || 'top' === _ && o(i.bottom) > o(r.top) || 'bottom' === _ && o(i.top) < o(r.bottom), a = o(i.left) < o(g.left), l = o(i.right) > o(g.right), c = o(i.top) < o(g.top), u = o(i.bottom) > o(g.bottom), f = 'left' === _ && a || 'right' === _ && l || 'top' === _ && c || 'bottom' === _ && u, h = -1 !== [
                                    'top',
                                    'bottom'
                                ].indexOf(_), d = !!m.flipVariations && (h && 'start' === y && a || h && 'end' === y && l || !h && 'start' === y && c || !h && 'end' === y && u);
                            (s || f || d) && (p.flipped = !0, (s || f) && (_ = E[t + 1]), d && (y = 'end' === (n = y) ? 'start' : 'start' === n ? 'end' : n), p.placement = _ + (y ? '-' + y : ''), p.offsets.popper = ze({}, p.offsets.popper, rt(p.instance.popper, p.offsets.reference, p.placement)), p = st(p.instance.modifiers, p, 'flip'));
                        }), p;
                    },
                    behavior: 'flip',
                    padding: 5,
                    boundariesElement: 'viewport'
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement, n = t.split('-')[0], i = e.offsets, r = i.popper, o = i.reference, s = -1 !== [
                                'left',
                                'right'
                            ].indexOf(n), a = -1 === [
                                'top',
                                'left'
                            ].indexOf(n);
                        return r[s ? 'left' : 'top'] = o[n] - (a ? r[s ? 'width' : 'height'] : 0), e.placement = it(t), e.offsets.popper = Ge(r), e;
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!pt(e.instance.modifiers, 'hide', 'preventOverflow'))
                            return e;
                        var t = e.offsets.reference, n = ot(e.instance.modifiers, function (e) {
                                return 'preventOverflow' === e.name;
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide)
                                return e;
                            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
                        } else {
                            if (!1 === e.hide)
                                return e;
                            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
                        }
                        return e;
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.x, i = t.y, r = e.offsets.popper, o = ot(e.instance.modifiers, function (e) {
                                return 'applyStyle' === e.name;
                            }).gpuAcceleration;
                        void 0 !== o && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                        var s = void 0 !== o ? o : t.gpuAcceleration, a = Je(We(e.instance.popper)), l = { position: r.position }, c = {
                                left: Math.floor(r.left),
                                top: Math.round(r.top),
                                bottom: Math.round(r.bottom),
                                right: Math.floor(r.right)
                            }, u = 'bottom' === n ? 'top' : 'bottom', f = 'right' === i ? 'left' : 'right', h = lt('transform'), d = void 0, p = void 0;
                        if (p = 'bottom' === u ? -a.height + c.bottom : c.top, d = 'right' === f ? -a.width + c.right : c.left, s && h)
                            l[h] = 'translate3d(' + d + 'px, ' + p + 'px, 0)', l[u] = 0, l[f] = 0, l.willChange = 'transform';
                        else {
                            var m = 'bottom' === u ? -1 : 1, g = 'right' === f ? -1 : 1;
                            l[u] = p * m, l[f] = d * g, l.willChange = u + ', ' + f;
                        }
                        var _ = { 'x-placement': e.placement };
                        return e.attributes = ze({}, _, e.attributes), e.styles = ze({}, l, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e;
                    },
                    gpuAcceleration: !0,
                    x: 'bottom',
                    y: 'right'
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        var t, n;
                        return dt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e;
                    },
                    onLoad: function (e, t, n, i, r) {
                        var o = tt(r, t, e, n.positionFixed), s = et(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute('x-placement', s), dt(t, { position: n.positionFixed ? 'fixed' : 'absolute' }), n;
                    },
                    gpuAcceleration: void 0
                }
            }
        }, Ct = function () {
            function o(e, t) {
                var n = this, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function');
                }(this, o), this.scheduleUpdate = function () {
                    return requestAnimationFrame(n.update);
                }, this.update = ke(this.update.bind(this)), this.options = ze({}, o.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(function (e) {
                    n.options.modifiers[e] = ze({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return ze({ name: e }, n.options.modifiers[e]);
                }).sort(function (e, t) {
                    return e.order - t.order;
                }), this.modifiers.forEach(function (e) {
                    e.enabled && xe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r;
            }
            return Ye(o, [
                {
                    key: 'update',
                    value: function () {
                        return function () {
                            if (!this.state.isDestroyed) {
                                var e = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
                            }
                        }.call(this);
                    }
                },
                {
                    key: 'destroy',
                    value: function () {
                        return function () {
                            return this.state.isDestroyed = !0, at(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[lt('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
                        }.call(this);
                    }
                },
                {
                    key: 'enableEventListeners',
                    value: function () {
                        return function () {
                            this.state.eventsEnabled || (this.state = ut(this.reference, this.options, this.state, this.scheduleUpdate));
                        }.call(this);
                    }
                },
                {
                    key: 'disableEventListeners',
                    value: function () {
                        return ft.call(this);
                    }
                }
            ]), o;
        }();
    Ct.Utils = ('undefined' != typeof window ? window : global).PopperUtils, Ct.placements = mt, Ct.Defaults = wt;
    var Tt, St, Dt, At, It, Ot, Nt, kt, xt, Pt, Lt, jt, Ht, Mt, Ft, Wt, Rt, Ut, Bt, qt, Kt, Qt, Yt, Vt, zt, Gt, Jt, Zt, Xt, $t, en, tn, nn, rn, on, sn, an, ln, cn, un, fn, hn, dn, pn, mn, gn, _n, vn, yn, En, bn, wn, Cn, Tn, Sn, Dn, An, In, On, Nn, kn, xn, Pn, Ln, jn, Hn, Mn, Fn, Wn, Rn, Un, Bn, qn, Kn, Qn, Yn, Vn, zn, Gn, Jn, Zn, Xn, $n, ei, ti, ni, ii, ri, oi, si, ai, li, ci, ui, fi, hi, di, pi, mi, gi, _i, vi, yi, Ei, bi, wi, Ci, Ti, Si, Di, Ai, Ii, Oi, Ni, ki, xi, Pi, Li, ji, Hi, Mi, Fi, Wi, Ri, Ui, Bi = (St = 'dropdown', At = '.' + (Dt = 'bs.dropdown'), It = '.data-api', Ot = (Tt = t).fn[St], Nt = new RegExp('38|40|27'), kt = {
            HIDE: 'hide' + At,
            HIDDEN: 'hidden' + At,
            SHOW: 'show' + At,
            SHOWN: 'shown' + At,
            CLICK: 'click' + At,
            CLICK_DATA_API: 'click' + At + It,
            KEYDOWN_DATA_API: 'keydown' + At + It,
            KEYUP_DATA_API: 'keyup' + At + It
        }, xt = 'disabled', Pt = 'show', Lt = 'dropup', jt = 'dropright', Ht = 'dropleft', Mt = 'dropdown-menu-right', Ft = 'position-static', Wt = '[data-toggle="dropdown"]', Rt = '.dropdown form', Ut = '.dropdown-menu', Bt = '.navbar-nav', qt = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)', Kt = 'top-start', Qt = 'top-end', Yt = 'bottom-start', Vt = 'bottom-end', zt = 'right-start', Gt = 'left-start', Jt = {
            offset: 0,
            flip: !0,
            boundary: 'scrollParent',
            reference: 'toggle',
            display: 'dynamic'
        }, Zt = {
            offset: '(number|string|function)',
            flip: 'boolean',
            boundary: '(string|element)',
            reference: '(string|element)',
            display: 'string'
        }, Xt = function () {
            function c(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
            }
            var e = c.prototype;
            return e.toggle = function () {
                if (!this._element.disabled && !Tt(this._element).hasClass(xt)) {
                    var e = c._getParentFromElement(this._element), t = Tt(this._menu).hasClass(Pt);
                    if (c._clearMenus(), !t) {
                        var n = { relatedTarget: this._element }, i = Tt.Event(kt.SHOW, n);
                        if (Tt(e).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ('undefined' == typeof Ct)
                                    throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
                                var r = this._element;
                                'parent' === this._config.reference ? r = e : we.isElement(this._config.reference) && (r = this._config.reference, 'undefined' != typeof this._config.reference.jquery && (r = this._config.reference[0])), 'scrollParent' !== this._config.boundary && Tt(e).addClass(Ft), this._popper = new Ct(r, this._menu, this._getPopperConfig());
                            }
                            'ontouchstart' in document.documentElement && 0 === Tt(e).closest(Bt).length && Tt(document.body).children().on('mouseover', null, Tt.noop), this._element.focus(), this._element.setAttribute('aria-expanded', !0), Tt(this._menu).toggleClass(Pt), Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n));
                        }
                    }
                }
            }, e.dispose = function () {
                Tt.removeData(this._element, Dt), Tt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
            }, e.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
            }, e._addEventListeners = function () {
                var t = this;
                Tt(this._element).on(kt.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle();
                });
            }, e._getConfig = function (e) {
                return e = l({}, this.constructor.Default, Tt(this._element).data(), e), we.typeCheckConfig(St, e, this.constructor.DefaultType), e;
            }, e._getMenuElement = function () {
                if (!this._menu) {
                    var e = c._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(Ut));
                }
                return this._menu;
            }, e._getPlacement = function () {
                var e = Tt(this._element.parentNode), t = Yt;
                return e.hasClass(Lt) ? (t = Kt, Tt(this._menu).hasClass(Mt) && (t = Qt)) : e.hasClass(jt) ? t = zt : e.hasClass(Ht) ? t = Gt : Tt(this._menu).hasClass(Mt) && (t = Vt), t;
            }, e._detectNavbar = function () {
                return 0 < Tt(this._element).closest('.navbar').length;
            }, e._getPopperConfig = function () {
                var t = this, e = {};
                'function' == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = l({}, e.offsets, t._config.offset(e.offsets) || {}), e;
                } : e.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: { enabled: this._config.flip },
                        preventOverflow: { boundariesElement: this._config.boundary }
                    }
                };
                return 'static' === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
            }, c._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = Tt(this).data(Dt);
                    if (e || (e = new c(this, 'object' == typeof t ? t : null), Tt(this).data(Dt, e)), 'string' == typeof t) {
                        if ('undefined' == typeof e[t])
                            throw new TypeError('No method named "' + t + '"');
                        e[t]();
                    }
                });
            }, c._clearMenus = function (e) {
                if (!e || 3 !== e.which && ('keyup' !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = t.length; n < i; n++) {
                        var r = c._getParentFromElement(t[n]), o = Tt(t[n]).data(Dt), s = { relatedTarget: t[n] };
                        if (e && 'click' === e.type && (s.clickEvent = e), o) {
                            var a = o._menu;
                            if (Tt(r).hasClass(Pt) && !(e && ('click' === e.type && /input|textarea/i.test(e.target.tagName) || 'keyup' === e.type && 9 === e.which) && Tt.contains(r, e.target))) {
                                var l = Tt.Event(kt.HIDE, s);
                                Tt(r).trigger(l), l.isDefaultPrevented() || ('ontouchstart' in document.documentElement && Tt(document.body).children().off('mouseover', null, Tt.noop), t[n].setAttribute('aria-expanded', 'false'), Tt(a).removeClass(Pt), Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s)));
                            }
                        }
                    }
            }, c._getParentFromElement = function (e) {
                var t, n = we.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode;
            }, c._dataApiKeydownHandler = function (e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Tt(e.target).closest(Ut).length)) : Nt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Tt(this).hasClass(xt))) {
                    var t = c._getParentFromElement(this), n = Tt(t).hasClass(Pt);
                    if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                        var i = [].slice.call(t.querySelectorAll(qt));
                        if (0 !== i.length) {
                            var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t.querySelector(Wt);
                            Tt(o).trigger('focus');
                        }
                        Tt(this).trigger('click');
                    }
                }
            }, s(c, null, [
                {
                    key: 'VERSION',
                    get: function () {
                        return '4.1.3';
                    }
                },
                {
                    key: 'Default',
                    get: function () {
                        return Jt;
                    }
                },
                {
                    key: 'DefaultType',
                    get: function () {
                        return Zt;
                    }
                }
            ]), c;
        }(), Tt(document).on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + ' ' + kt.KEYUP_DATA_API, Xt._clearMenus).on(kt.CLICK_DATA_API, Wt, function (e) {
            e.preventDefault(), e.stopPropagation(), Xt._jQueryInterface.call(Tt(this), 'toggle');
        }).on(kt.CLICK_DATA_API, Rt, function (e) {
            e.stopPropagation();
        }), Tt.fn[St] = Xt._jQueryInterface, Tt.fn[St].Constructor = Xt, Tt.fn[St].noConflict = function () {
            return Tt.fn[St] = Ot, Xt._jQueryInterface;
        }, Xt), qi = (en = 'modal', nn = '.' + (tn = 'bs.modal'), rn = ($t = t).fn[en], on = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, sn = {
            backdrop: '(boolean|string)',
            keyboard: 'boolean',
            focus: 'boolean',
            show: 'boolean'
        }, an = {
            HIDE: 'hide' + nn,
            HIDDEN: 'hidden' + nn,
            SHOW: 'show' + nn,
            SHOWN: 'shown' + nn,
            FOCUSIN: 'focusin' + nn,
            RESIZE: 'resize' + nn,
            CLICK_DISMISS: 'click.dismiss' + nn,
            KEYDOWN_DISMISS: 'keydown.dismiss' + nn,
            MOUSEUP_DISMISS: 'mouseup.dismiss' + nn,
            MOUSEDOWN_DISMISS: 'mousedown.dismiss' + nn,
            CLICK_DATA_API: 'click' + nn + '.data-api'
        }, ln = 'modal-scrollbar-measure', cn = 'modal-backdrop', un = 'modal-open', fn = 'fade', hn = 'show', dn = '.modal-dialog', pn = '[data-toggle="modal"]', mn = '[data-dismiss="modal"]', gn = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top', _n = '.sticky-top', vn = function () {
            function r(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
            }
            var e = r.prototype;
            return e.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e);
            }, e.show = function (e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    $t(this._element).hasClass(fn) && (this._isTransitioning = !0);
                    var n = $t.Event(an.SHOW, { relatedTarget: e });
                    $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(un), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(an.CLICK_DISMISS, mn, function (e) {
                        return t.hide(e);
                    }), $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function () {
                        $t(t._element).one(an.MOUSEUP_DISMISS, function (e) {
                            $t(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                        });
                    }), this._showBackdrop(function () {
                        return t._showElement(e);
                    }));
                }
            }, e.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = $t.Event(an.HIDE);
                    if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = $t(this._element).hasClass(fn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(an.FOCUSIN), $t(this._element).removeClass(hn), $t(this._element).off(an.CLICK_DISMISS), $t(this._dialog).off(an.MOUSEDOWN_DISMISS), i) {
                            var r = we.getTransitionDurationFromElement(this._element);
                            $t(this._element).one(we.TRANSITION_END, function (e) {
                                return t._hideModal(e);
                            }).emulateTransitionEnd(r);
                        } else
                            this._hideModal();
                    }
                }
            }, e.dispose = function () {
                $t.removeData(this._element, tn), $t(window, document, this._element, this._backdrop).off(nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
            }, e.handleUpdate = function () {
                this._adjustDialog();
            }, e._getConfig = function (e) {
                return e = l({}, on, e), we.typeCheckConfig(en, e, sn), e;
            }, e._showElement = function (e) {
                var t = this, n = $t(this._element).hasClass(fn);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = 'block', this._element.removeAttribute('aria-hidden'), this._element.scrollTop = 0, n && we.reflow(this._element), $t(this._element).addClass(hn), this._config.focus && this._enforceFocus();
                var i = $t.Event(an.SHOWN, { relatedTarget: e }), r = function () {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, $t(t._element).trigger(i);
                    };
                if (n) {
                    var o = we.getTransitionDurationFromElement(this._element);
                    $t(this._dialog).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
                } else
                    r();
            }, e._enforceFocus = function () {
                var t = this;
                $t(document).off(an.FOCUSIN).on(an.FOCUSIN, function (e) {
                    document !== e.target && t._element !== e.target && 0 === $t(t._element).has(e.target).length && t._element.focus();
                });
            }, e._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard ? $t(this._element).on(an.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide());
                }) : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS);
            }, e._setResizeEvent = function () {
                var t = this;
                this._isShown ? $t(window).on(an.RESIZE, function (e) {
                    return t.handleUpdate(e);
                }) : $t(window).off(an.RESIZE);
            }, e._hideModal = function () {
                var e = this;
                this._element.style.display = 'none', this._element.setAttribute('aria-hidden', !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    $t(document.body).removeClass(un), e._resetAdjustments(), e._resetScrollbar(), $t(e._element).trigger(an.HIDDEN);
                });
            }, e._removeBackdrop = function () {
                this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null);
            }, e._showBackdrop = function (e) {
                var t = this, n = $t(this._element).hasClass(fn) ? fn : '';
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement('div'), this._backdrop.className = cn, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(an.CLICK_DISMISS, function (e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ('static' === t._config.backdrop ? t._element.focus() : t.hide());
                        }), n && we.reflow(this._backdrop), $t(this._backdrop).addClass(hn), !e)
                        return;
                    if (!n)
                        return void e();
                    var i = we.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(we.TRANSITION_END, e).emulateTransitionEnd(i);
                } else if (!this._isShown && this._backdrop) {
                    $t(this._backdrop).removeClass(hn);
                    var r = function () {
                        t._removeBackdrop(), e && e();
                    };
                    if ($t(this._element).hasClass(fn)) {
                        var o = we.getTransitionDurationFromElement(this._backdrop);
                        $t(this._backdrop).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
                    } else
                        r();
                } else
                    e && e();
            }, e._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
            }, e._resetAdjustments = function () {
                this._element.style.paddingLeft = '', this._element.style.paddingRight = '';
            }, e._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
            }, e._setScrollbar = function () {
                var r = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(gn)), t = [].slice.call(document.querySelectorAll(_n));
                    $t(e).each(function (e, t) {
                        var n = t.style.paddingRight, i = $t(t).css('padding-right');
                        $t(t).data('padding-right', n).css('padding-right', parseFloat(i) + r._scrollbarWidth + 'px');
                    }), $t(t).each(function (e, t) {
                        var n = t.style.marginRight, i = $t(t).css('margin-right');
                        $t(t).data('margin-right', n).css('margin-right', parseFloat(i) - r._scrollbarWidth + 'px');
                    });
                    var n = document.body.style.paddingRight, i = $t(document.body).css('padding-right');
                    $t(document.body).data('padding-right', n).css('padding-right', parseFloat(i) + this._scrollbarWidth + 'px');
                }
            }, e._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(gn));
                $t(e).each(function (e, t) {
                    var n = $t(t).data('padding-right');
                    $t(t).removeData('padding-right'), t.style.paddingRight = n || '';
                });
                var t = [].slice.call(document.querySelectorAll('' + _n));
                $t(t).each(function (e, t) {
                    var n = $t(t).data('margin-right');
                    'undefined' != typeof n && $t(t).css('margin-right', n).removeData('margin-right');
                });
                var n = $t(document.body).data('padding-right');
                $t(document.body).removeData('padding-right'), document.body.style.paddingRight = n || '';
            }, e._getScrollbarWidth = function () {
                var e = document.createElement('div');
                e.className = ln, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t;
            }, r._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var e = $t(this).data(tn), t = l({}, on, $t(this).data(), 'object' == typeof n && n ? n : {});
                    if (e || (e = new r(this, t), $t(this).data(tn, e)), 'string' == typeof n) {
                        if ('undefined' == typeof e[n])
                            throw new TypeError('No method named "' + n + '"');
                        e[n](i);
                    } else
                        t.show && e.show(i);
                });
            }, s(r, null, [
                {
                    key: 'VERSION',
                    get: function () {
                        return '4.1.3';
                    }
                },
                {
                    key: 'Default',
                    get: function () {
                        return on;
                    }
                }
            ]), r;
        }(), $t(document).on(an.CLICK_DATA_API, pn, function (e) {
            var t, n = this, i = we.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = $t(t).data(tn) ? 'toggle' : l({}, $t(t).data(), $t(this).data());
            'A' !== this.tagName && 'AREA' !== this.tagName || e.preventDefault();
            var o = $t(t).one(an.SHOW, function (e) {
                e.isDefaultPrevented() || o.one(an.HIDDEN, function () {
                    $t(n).is(':visible') && n.focus();
                });
            });
            vn._jQueryInterface.call($t(t), r, this);
        }), $t.fn[en] = vn._jQueryInterface, $t.fn[en].Constructor = vn, $t.fn[en].noConflict = function () {
            return $t.fn[en] = rn, vn._jQueryInterface;
        }, vn), Ki = (En = 'tooltip', wn = '.' + (bn = 'bs.tooltip'), Cn = (yn = t).fn[En], Tn = 'bs-tooltip', Sn = new RegExp('(^|\\s)' + Tn + '\\S+', 'g'), In = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: !(An = {
                AUTO: 'auto',
                TOP: 'top',
                RIGHT: 'right',
                BOTTOM: 'bottom',
                LEFT: 'left'
            }),
            selector: !(Dn = {
                animation: 'boolean',
                template: 'string',
                title: '(string|element|function)',
                trigger: 'string',
                delay: '(number|object)',
                html: 'boolean',
                selector: '(string|boolean)',
                placement: '(string|function)',
                offset: '(number|string)',
                container: '(string|element|boolean)',
                fallbackPlacement: '(string|array)',
                boundary: '(string|element)'
            }),
            placement: 'top',
            offset: 0,
            container: !1,
            fallbackPlacement: 'flip',
            boundary: 'scrollParent'
        }, Nn = 'out', kn = {
            HIDE: 'hide' + wn,
            HIDDEN: 'hidden' + wn,
            SHOW: (On = 'show') + wn,
            SHOWN: 'shown' + wn,
            INSERTED: 'inserted' + wn,
            CLICK: 'click' + wn,
            FOCUSIN: 'focusin' + wn,
            FOCUSOUT: 'focusout' + wn,
            MOUSEENTER: 'mouseenter' + wn,
            MOUSELEAVE: 'mouseleave' + wn
        }, xn = 'fade', Pn = 'show', Ln = '.tooltip-inner', jn = '.arrow', Hn = 'hover', Mn = 'focus', Fn = 'click', Wn = 'manual', Rn = function () {
            function i(e, t) {
                if ('undefined' == typeof Ct)
                    throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
                this._isEnabled = !0, this._timeout = 0, this._hoverState = '', this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
            }
            var e = i.prototype;
            return e.enable = function () {
                this._isEnabled = !0;
            }, e.disable = function () {
                this._isEnabled = !1;
            }, e.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
            }, e.toggle = function (e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY, n = yn(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                    } else {
                        if (yn(this.getTipElement()).hasClass(Pn))
                            return void this._leave(null, this);
                        this._enter(null, this);
                    }
            }, e.dispose = function () {
                clearTimeout(this._timeout), yn.removeData(this.element, this.constructor.DATA_KEY), yn(this.element).off(this.constructor.EVENT_KEY), yn(this.element).closest('.modal').off('hide.bs.modal'), this.tip && yn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
            }, e.show = function () {
                var t = this;
                if ('none' === yn(this.element).css('display'))
                    throw new Error('Please use show on visible elements');
                var e = yn.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    yn(this.element).trigger(e);
                    var n = yn.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !n)
                        return;
                    var i = this.getTipElement(), r = we.getUID(this.constructor.NAME);
                    i.setAttribute('id', r), this.element.setAttribute('aria-describedby', r), this.setContent(), this.config.animation && yn(i).addClass(xn);
                    var o = 'function' == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement, s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : yn(document).find(this.config.container);
                    yn(i).data(this.constructor.DATA_KEY, this), yn.contains(this.element.ownerDocument.documentElement, this.tip) || yn(i).appendTo(a), yn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ct(this.element, i, {
                        placement: s,
                        modifiers: {
                            offset: { offset: this.config.offset },
                            flip: { behavior: this.config.fallbackPlacement },
                            arrow: { element: jn },
                            preventOverflow: { boundariesElement: this.config.boundary }
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                        },
                        onUpdate: function (e) {
                            t._handlePopperPlacementChange(e);
                        }
                    }), yn(i).addClass(Pn), 'ontouchstart' in document.documentElement && yn(document.body).children().on('mouseover', null, yn.noop);
                    var l = function () {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, yn(t.element).trigger(t.constructor.Event.SHOWN), e === Nn && t._leave(null, t);
                    };
                    if (yn(this.tip).hasClass(xn)) {
                        var c = we.getTransitionDurationFromElement(this.tip);
                        yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c);
                    } else
                        l();
                }
            }, e.hide = function (e) {
                var t = this, n = this.getTipElement(), i = yn.Event(this.constructor.Event.HIDE), r = function () {
                        t._hoverState !== On && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute('aria-describedby'), yn(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e();
                    };
                if (yn(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (yn(n).removeClass(Pn), 'ontouchstart' in document.documentElement && yn(document.body).children().off('mouseover', null, yn.noop), this._activeTrigger[Fn] = !1, this._activeTrigger[Mn] = !1, this._activeTrigger[Hn] = !1, yn(this.tip).hasClass(xn)) {
                        var o = we.getTransitionDurationFromElement(n);
                        yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
                    } else
                        r();
                    this._hoverState = '';
                }
            }, e.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
            }, e.isWithContent = function () {
                return Boolean(this.getTitle());
            }, e.addAttachmentClass = function (e) {
                yn(this.getTipElement()).addClass(Tn + '-' + e);
            }, e.getTipElement = function () {
                return this.tip = this.tip || yn(this.config.template)[0], this.tip;
            }, e.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()), yn(e).removeClass(xn + ' ' + Pn);
            }, e.setElementContent = function (e, t) {
                var n = this.config.html;
                'object' == typeof t && (t.nodeType || t.jquery) ? n ? yn(t).parent().is(e) || e.empty().append(t) : e.text(yn(t).text()) : e[n ? 'html' : 'text'](t);
            }, e.getTitle = function () {
                var e = this.element.getAttribute('data-original-title');
                return e || (e = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
            }, e._getAttachment = function (e) {
                return An[e.toUpperCase()];
            }, e._setListeners = function () {
                var i = this;
                this.config.trigger.split(' ').forEach(function (e) {
                    if ('click' === e)
                        yn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
                            return i.toggle(e);
                        });
                    else if (e !== Wn) {
                        var t = e === Hn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = e === Hn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        yn(i.element).on(t, i.config.selector, function (e) {
                            return i._enter(e);
                        }).on(n, i.config.selector, function (e) {
                            return i._leave(e);
                        });
                    }
                    yn(i.element).closest('.modal').on('hide.bs.modal', function () {
                        return i.hide();
                    });
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: 'manual',
                    selector: ''
                }) : this._fixTitle();
            }, e._fixTitle = function () {
                var e = typeof this.element.getAttribute('data-original-title');
                (this.element.getAttribute('title') || 'string' !== e) && (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''), this.element.setAttribute('title', ''));
            }, e._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger['focusin' === e.type ? Mn : Hn] = !0), yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On ? t._hoverState = On : (clearTimeout(t._timeout), t._hoverState = On, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === On && t.show();
                }, t.config.delay.show) : t.show());
            }, e._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger['focusout' === e.type ? Mn : Hn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Nn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    t._hoverState === Nn && t.hide();
                }, t.config.delay.hide) : t.hide());
            }, e._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e])
                        return !0;
                return !1;
            }, e._getConfig = function (e) {
                return 'number' == typeof (e = l({}, this.constructor.Default, yn(this.element).data(), 'object' == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), 'number' == typeof e.title && (e.title = e.title.toString()), 'number' == typeof e.content && (e.content = e.content.toString()), we.typeCheckConfig(En, e, this.constructor.DefaultType), e;
            }, e._getDelegateConfig = function () {
                var e = {};
                if (this.config)
                    for (var t in this.config)
                        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e;
            }, e._cleanTipClass = function () {
                var e = yn(this.getTipElement()), t = e.attr('class').match(Sn);
                null !== t && t.length && e.removeClass(t.join(''));
            }, e._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
            }, e._fixTransition = function () {
                var e = this.getTipElement(), t = this.config.animation;
                null === e.getAttribute('x-placement') && (yn(e).removeClass(xn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = yn(this).data(bn), t = 'object' == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), yn(this).data(bn, e)), 'string' == typeof n)) {
                        if ('undefined' == typeof e[n])
                            throw new TypeError('No method named "' + n + '"');
                        e[n]();
                    }
                });
            }, s(i, null, [
                {
                    key: 'VERSION',
                    get: function () {
                        return '4.1.3';
                    }
                },
                {
                    key: 'Default',
                    get: function () {
                        return In;
                    }
                },
                {
                    key: 'NAME',
                    get: function () {
                        return En;
                    }
                },
                {
                    key: 'DATA_KEY',
                    get: function () {
                        return bn;
                    }
                },
                {
                    key: 'Event',
                    get: function () {
                        return kn;
                    }
                },
                {
                    key: 'EVENT_KEY',
                    get: function () {
                        return wn;
                    }
                },
                {
                    key: 'DefaultType',
                    get: function () {
                        return Dn;
                    }
                }
            ]), i;
        }(), yn.fn[En] = Rn._jQueryInterface, yn.fn[En].Constructor = Rn, yn.fn[En].noConflict = function () {
            return yn.fn[En] = Cn, Rn._jQueryInterface;
        }, Rn), Qi = (Bn = 'popover', Kn = '.' + (qn = 'bs.popover'), Qn = (Un = t).fn[Bn], Yn = 'bs-popover', Vn = new RegExp('(^|\\s)' + Yn + '\\S+', 'g'), zn = l({}, Ki.Default, {
            placement: 'right',
            trigger: 'click',
            content: '',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Gn = l({}, Ki.DefaultType, { content: '(string|element|function)' }), Jn = 'fade', Xn = '.popover-header', $n = '.popover-body', ei = {
            HIDE: 'hide' + Kn,
            HIDDEN: 'hidden' + Kn,
            SHOW: (Zn = 'show') + Kn,
            SHOWN: 'shown' + Kn,
            INSERTED: 'inserted' + Kn,
            CLICK: 'click' + Kn,
            FOCUSIN: 'focusin' + Kn,
            FOCUSOUT: 'focusout' + Kn,
            MOUSEENTER: 'mouseenter' + Kn,
            MOUSELEAVE: 'mouseleave' + Kn
        }, ti = function (e) {
            var t, n;
            function i() {
                return e.apply(this, arguments) || this;
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function () {
                return this.getTitle() || this._getContent();
            }, r.addAttachmentClass = function (e) {
                Un(this.getTipElement()).addClass(Yn + '-' + e);
            }, r.getTipElement = function () {
                return this.tip = this.tip || Un(this.config.template)[0], this.tip;
            }, r.setContent = function () {
                var e = Un(this.getTipElement());
                this.setElementContent(e.find(Xn), this.getTitle());
                var t = this._getContent();
                'function' == typeof t && (t = t.call(this.element)), this.setElementContent(e.find($n), t), e.removeClass(Jn + ' ' + Zn);
            }, r._getContent = function () {
                return this.element.getAttribute('data-content') || this.config.content;
            }, r._cleanTipClass = function () {
                var e = Un(this.getTipElement()), t = e.attr('class').match(Vn);
                null !== t && 0 < t.length && e.removeClass(t.join(''));
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = Un(this).data(qn), t = 'object' == typeof n ? n : null;
                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Un(this).data(qn, e)), 'string' == typeof n)) {
                        if ('undefined' == typeof e[n])
                            throw new TypeError('No method named "' + n + '"');
                        e[n]();
                    }
                });
            }, s(i, null, [
                {
                    key: 'VERSION',
                    get: function () {
                        return '4.1.3';
                    }
                },
                {
                    key: 'Default',
                    get: function () {
                        return zn;
                    }
                },
                {
                    key: 'NAME',
                    get: function () {
                        return Bn;
                    }
                },
                {
                    key: 'DATA_KEY',
                    get: function () {
                        return qn;
                    }
                },
                {
                    key: 'Event',
                    get: function () {
                        return ei;
                    }
                },
                {
                    key: 'EVENT_KEY',
                    get: function () {
                        return Kn;
                    }
                },
                {
                    key: 'DefaultType',
                    get: function () {
                        return Gn;
                    }
                }
            ]), i;
        }(Ki), Un.fn[Bn] = ti._jQueryInterface, Un.fn[Bn].Constructor = ti, Un.fn[Bn].noConflict = function () {
            return Un.fn[Bn] = Qn, ti._jQueryInterface;
        }, ti), Yi = (ii = 'scrollspy', oi = '.' + (ri = 'bs.scrollspy'), si = (ni = t).fn[ii], ai = {
            offset: 10,
            method: 'auto',
            target: ''
        }, li = {
            offset: 'number',
            method: 'string',
            target: '(string|element)'
        }, ci = {
            ACTIVATE: 'activate' + oi,
            SCROLL: 'scroll' + oi,
            LOAD_DATA_API: 'load' + oi + '.data-api'
        }, ui = 'dropdown-item', fi = 'active', hi = '[data-spy="scroll"]', di = '.active', pi = '.nav, .list-group', mi = '.nav-link', gi = '.nav-item', _i = '.list-group-item', vi = '.dropdown', yi = '.dropdown-item', Ei = '.dropdown-toggle', bi = 'offset', wi = 'position', Ci = function () {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = 'BODY' === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + ' ' + mi + ',' + this._config.target + ' ' + _i + ',' + this._config.target + ' ' + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ni(this._scrollElement).on(ci.SCROLL, function (e) {
                    return n._process(e);
                }), this.refresh(), this._process();
            }
            var e = n.prototype;
            return e.refresh = function () {
                var t = this, e = this._scrollElement === this._scrollElement.window ? bi : wi, r = 'auto' === this._config.method ? e : this._config.method, o = r === wi ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                    var t, n = we.getSelectorFromElement(e);
                    if (n && (t = document.querySelector(n)), t) {
                        var i = t.getBoundingClientRect();
                        if (i.width || i.height)
                            return [
                                ni(t)[r]().top + o,
                                n
                            ];
                    }
                    return null;
                }).filter(function (e) {
                    return e;
                }).sort(function (e, t) {
                    return e[0] - t[0];
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1]);
                });
            }, e.dispose = function () {
                ni.removeData(this._element, ri), ni(this._scrollElement).off(oi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
            }, e._getConfig = function (e) {
                if ('string' != typeof (e = l({}, ai, 'object' == typeof e && e ? e : {})).target) {
                    var t = ni(e.target).attr('id');
                    t || (t = we.getUID(ii), ni(e.target).attr('id', t)), e.target = '#' + t;
                }
                return we.typeCheckConfig(ii, e, li), e;
            }, e._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }, e._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }, e._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }, e._process = function () {
                var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(), n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i);
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                        return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ('undefined' == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
                    }
                }
            }, e._activate = function (t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(',');
                e = e.map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                });
                var n = ni([].slice.call(document.querySelectorAll(e.join(','))));
                n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ', ' + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), ni(this._scrollElement).trigger(ci.ACTIVATE, { relatedTarget: t });
            }, e._clear = function () {
                var e = [].slice.call(document.querySelectorAll(this._selector));
                ni(e).filter(di).removeClass(fi);
            }, n._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = ni(this).data(ri);
                    if (e || (e = new n(this, 'object' == typeof t && t), ni(this).data(ri, e)), 'string' == typeof t) {
                        if ('undefined' == typeof e[t])
                            throw new TypeError('No method named "' + t + '"');
                        e[t]();
                    }
                });
            }, s(n, null, [
                {
                    key: 'VERSION',
                    get: function () {
                        return '4.1.3';
                    }
                },
                {
                    key: 'Default',
                    get: function () {
                        return ai;
                    }
                }
            ]), n;
        }(), ni(window).on(ci.LOAD_DATA_API, function () {
            for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--;) {
                var n = ni(e[t]);
                Ci._jQueryInterface.call(n, n.data());
            }
        }), ni.fn[ii] = Ci._jQueryInterface, ni.fn[ii].Constructor = Ci, ni.fn[ii].noConflict = function () {
            return ni.fn[ii] = si, Ci._jQueryInterface;
        }, Ci), Vi = (Di = '.' + (Si = 'bs.tab'), Ai = (Ti = t).fn.tab, Ii = {
            HIDE: 'hide' + Di,
            HIDDEN: 'hidden' + Di,
            SHOW: 'show' + Di,
            SHOWN: 'shown' + Di,
            CLICK_DATA_API: 'click' + Di + '.data-api'
        }, Oi = 'dropdown-menu', Ni = 'active', ki = 'disabled', xi = 'fade', Pi = 'show', Li = '.dropdown', ji = '.nav, .list-group', Hi = '.active', Mi = '> li > .active', Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wi = '.dropdown-toggle', Ri = '> .dropdown-menu .active', Ui = function () {
            function i(e) {
                this._element = e;
            }
            var e = i.prototype;
            return e.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ti(this._element).hasClass(Ni) || Ti(this._element).hasClass(ki))) {
                    var e, i, t = Ti(this._element).closest(ji)[0], r = we.getSelectorFromElement(this._element);
                    if (t) {
                        var o = 'UL' === t.nodeName ? Mi : Hi;
                        i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1];
                    }
                    var s = Ti.Event(Ii.HIDE, { relatedTarget: this._element }), a = Ti.Event(Ii.SHOW, { relatedTarget: i });
                    if (i && Ti(i).trigger(s), Ti(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, t);
                        var l = function () {
                            var e = Ti.Event(Ii.HIDDEN, { relatedTarget: n._element }), t = Ti.Event(Ii.SHOWN, { relatedTarget: i });
                            Ti(i).trigger(e), Ti(n._element).trigger(t);
                        };
                        e ? this._activate(e, e.parentNode, l) : l();
                    }
                }
            }, e.dispose = function () {
                Ti.removeData(this._element, Si), this._element = null;
            }, e._activate = function (e, t, n) {
                var i = this, r = ('UL' === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi))[0], o = n && r && Ti(r).hasClass(xi), s = function () {
                        return i._transitionComplete(e, r, n);
                    };
                if (r && o) {
                    var a = we.getTransitionDurationFromElement(r);
                    Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a);
                } else
                    s();
            }, e._transitionComplete = function (e, t, n) {
                if (t) {
                    Ti(t).removeClass(Pi + ' ' + Ni);
                    var i = Ti(t.parentNode).find(Ri)[0];
                    i && Ti(i).removeClass(Ni), 'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !1);
                }
                if (Ti(e).addClass(Ni), 'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !0), we.reflow(e), Ti(e).addClass(Pi), e.parentNode && Ti(e.parentNode).hasClass(Oi)) {
                    var r = Ti(e).closest(Li)[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(Wi));
                        Ti(o).addClass(Ni);
                    }
                    e.setAttribute('aria-expanded', !0);
                }
                n && n();
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = Ti(this), t = e.data(Si);
                    if (t || (t = new i(this), e.data(Si, t)), 'string' == typeof n) {
                        if ('undefined' == typeof t[n])
                            throw new TypeError('No method named "' + n + '"');
                        t[n]();
                    }
                });
            }, s(i, null, [{
                    key: 'VERSION',
                    get: function () {
                        return '4.1.3';
                    }
                }]), i;
        }(), Ti(document).on(Ii.CLICK_DATA_API, Fi, function (e) {
            e.preventDefault(), Ui._jQueryInterface.call(Ti(this), 'show');
        }), Ti.fn.tab = Ui._jQueryInterface, Ti.fn.tab.Constructor = Ui, Ti.fn.tab.noConflict = function () {
            return Ti.fn.tab = Ai, Ui._jQueryInterface;
        }, Ui);
    !function (e) {
        if ('undefined' == typeof e)
            throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
        var t = e.fn.jquery.split(' ')[0].split('.');
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
            throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }(t), e.Util = we, e.Alert = Ce, e.Button = Te, e.Carousel = Se, e.Collapse = De, e.Dropdown = Bi, e.Modal = qi, e.Popover = Qi, e.Scrollspy = Yi, e.Tab = Vi, e.Tooltip = Ki, Object.defineProperty(e, '__esModule', { value: !0 });
});
'use strict';
define('app/Media/Carousel', [
    'postal',
    'jquery',
    'bootstrap'
], function dependencies(postal, $) {
    function Carousel($container, state) {
        this.$container = $container;
        this.interval = this.$container.data('interval') || 3000;
    }
    Carousel.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            $(document).ready(this.init_carousel.bind(this));
            postal.subscribe({
                channel: 'carousel-' + this.$container.attr('id'),
                topic: 'action',
                callback: function callback(data, envelope) {
                    _this.$container.carousel(data.action);
                }
            });
        },
        init_carousel: function init_carousel() {
            var _this2 = this;
            this.$container.addClass('carousel').addClass('slide');
            this.$container.carousel({
                interval: this.interval,
                pause: false
            });
            this.$container.on('mouseenter', function () {
                $(this).carousel('pause');
            });
            $('.carousel-control-prev').on('click', function (e) {
                e.preventDefault();
                _this2.$container.carousel({
                    interval: 2000,
                    pause: false
                });
                _this2.$container.carousel('prev');
                return false;
            });
            $('.carousel-control-next').on('click', function (e) {
                e.preventDefault();
                _this2.$container.carousel({
                    interval: 2000,
                    pause: false
                });
                _this2.$container.carousel('next');
                return false;
            });
            this.$container.on('slid.bs.carousel', this.emit_slide.bind(this));
        },
        emit_slide: function emit_slide(e) {
            postal.publish({
                channel: 'carousel-' + this.$container.attr('id'),
                topic: 'slide',
                data: { e: e }
            });
        },
        detach: function detach() {
        }
    };
    return Carousel;
});
'use strict';
define('app/Media/Loading', ['jquery'], function dependencies(postal, $) {
    function Loading($container, state) {
        this.$container = $container;
        this.$container.addClass('tkt-loading');
    }
    Loading.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            this.$container.append('\n              <div class="tkt-loading-wrapper">\n                <div class="lds-double-ring">\n                  <div class="tkt-loading-outer"></div>\n                  <div class="tkt-loading-inner"></div>\n                </div>\n              </div>\n            ');
        },
        detach: function detach() {
        }
    };
    return Loading;
});
'use strict';
define('app/Media/YoutubeVideo', [
    'postal',
    'jquery',
    'bootstrap'
], function dependencies(postal, $) {
    function YoutubeVideo($container, state) {
        this.$container = $container;
        this.player = null;
        this.loaded = false;
        this.video_id = this.$container.data('video-id');
        this.video_image = this.$container.data('video-image');
        this.carousel_id = this.$container.data('bs4-carousel-id');
        this.autoplay = this.$container.data('autoplay') || '0';
        this.controls = this.$container.data('controls') || '0';
        this.showinfo = this.$container.data('showinfo') || '0';
    }
    YoutubeVideo.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            this.$container.addClass('yt-video-container');
            this.$video_container = $('<div></div>').attr('id', 'yt-video-' + this.video_id + '-' + new Date().getTime()).appendTo(this.$container);
            postal.subscribe({
                channel: 'youtubeIframeApi',
                topic: 'ready',
                callback: function callback(data, envelope) {
                    !_this.loaded && _this.loadPlayer();
                    _this.loaded = true;
                }
            });
            if (typeof YT == 'undefined' || typeof YT.Player == 'undefined') {
                window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this), $.getScript('//www.youtube.com/iframe_api');
            } else {
                this.loadPlayer();
            }
            if (this.carousel_id) {
                postal.subscribe({
                    channel: 'carousel-' + this.carousel_id,
                    topic: 'slide',
                    callback: function callback(data, envelope) {
                        _this.player && _this.player.stopVideo();
                    }
                });
            }
        },
        onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
            postal.publish({
                channel: 'youtubeIframeApi',
                topic: 'ready'
            });
        },
        onStateChange: function onStateChange(e) {
            if (this.carousel_id) {
                switch (e.data) {
                case YT.PlayerState.BUFFERING:
                case YT.PlayerState.PLAYING:
                    postal.publish({
                        channel: 'carousel-' + this.carousel_id,
                        topic: 'action',
                        data: { action: 'pause' }
                    });
                    break;
                case YT.PlayerState.ENDED:
                    postal.publish({
                        channel: 'carousel-' + this.carousel_id,
                        topic: 'action',
                        data: { action: 'cycle' }
                    });
                    break;
                }
            }
        },
        loadPlayer: function loadPlayer() {
            var _this2 = this;
            this.player = new YT.Player(this.$video_container.attr('id'), {
                videoId: this.video_id,
                width: this.$container.width(),
                host: 'https://www.youtube.com',
                events: { onStateChange: this.onStateChange.bind(this) },
                playerVars: {
                    autoplay: this.autoplay,
                    controls: this.controls,
                    showinfo: this.showinfo,
                    modestbranding: 1,
                    rel: 0
                }
            });
            if (this.video_image) {
                var $frame = $('iframe', this.$container);
                $frame.hide();
                this.$video_image = $('<img />').attr('src', this.video_image).attr('style', 'max-width: 924px').addClass('yt-video-image').appendTo(this.$container);
                this.$play_btn = $('<div></div>').addClass('yt-video-play-image').appendTo(this.$container);
                this.$play_btn.click(function (e) {
                    _this2.player.playVideo();
                    _this2.$video_image.addClass('hidden');
                    _this2.$play_btn.addClass('hidden');
                    $frame.show();
                });
            }
        },
        detach: function detach() {
        }
    };
    return YoutubeVideo;
});
'use strict';
var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};
define('app/Pass/BuyForm', [
    'config',
    'postal',
    'lodash',
    'template',
    'jquery',
    'api',
    'moment',
    'Cart',
    'Screening',
    'Ticket'
], function dependencies(config, postal, _, Template, $, TKTApi, moment, CartModel, Screening, Ticket) {
    function BuyForm($container, state) {
        this.$container = $container;
        this.$pass = $('.pass', this.$container);
        if ('object' === _typeof(this.$pass))
            this.$pass = [this.$pass];
        this.$selected_pass = this.$pass[0];
        this.$wrappers = $('.field-wrapper', this.$container);
        this.$fields = $('.field-wrapper .field', this.$container);
    }
    BuyForm.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            if (this.$pass.length == 1)
                this.sync_pass_form(this.$pass[0].data('type'));
            $('button[type="submit"]', this.$container).click(function (e) {
                e.preventDefault();
                _this.add_to_cart();
            });
        },
        add_to_cart: function add_to_cart() {
            var _this2 = this;
            var type = this.$selected_pass.data('type');
            var userdata = {};
            _.each($('.field:visible', this.$container), function (f) {
                var name = $(f).attr('id').replace('user_', '');
                userdata[name] = $(f).val();
            });
            userdata.no_photo = true;
            TKTApi.addPassToCart(type, 'fullprice', userdata, function (err, status, rsp) {
                if (err)
                    return _this2.show_err('Une erreur est survenue');
                postal.publish({
                    channel: 'cart',
                    topic: 'reload'
                });
            });
        },
        show_error: function show_error(msg) {
            alert(msg);
        },
        sync_pass_form: function sync_pass_form(pass) {
            var fields = $('#' + pass + '-fields').val().split(',');
            _.each(this.$wrappers, function (w) {
                var field = $(w).attr('id').replace('field-wrapper-', '');
                $(w)[fields.includes(field) ? 'fadeIn' : 'hide']();
            });
        },
        detach: function detach() {
        }
    };
    return BuyForm;
});
'use strict';
define('app/Program/BookabilityState', [
    'jquery',
    'lodash',
    'api'
], function dependencies($, _, TKTApi) {
    var MIN_SEATS_OCCUPATION = 90;
    var STATE_NOT_SOLD_HERE = 0;
    var STATE_NOT_BOOKABLE = 1;
    var STATE_ALMOST_NOT_BOOKABLE = 2;
    var STATE_BOOKABLE = 3;
    function BookabilityState($container, state) {
        this.$container = $container;
        this.$container.addClass('tkt-bookability-state-wrapper').addClass('loading-bookability-state');
    }
    BookabilityState.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            var items = $('[data-bookability-ids]', this.$container);
            if (!items)
                return;
            var ids = _.uniq(_.flatten(_.map(items, function (i) {
                return $(i).attr('data-bookability-ids').split(',');
            })));
            TKTApi.getScreeningsInfo(ids, function (err, status, rsp) {
                if (err)
                    return;
                var map = {};
                _.each(rsp, function (s) {
                    map[s._id] = {
                        seats: s.seats,
                        sold_here: _.keys(s.pricings).length > 0
                    };
                });
                _.each(items, function (i) {
                    var ids = $(i).attr('data-bookability-ids').split(',');
                    var state = _.max(_.map(ids, function (i) {
                        var seats = map[i]['seats'];
                        var sold_here = map[i]['sold_here'];
                        if (!sold_here)
                            return STATE_NOT_SOLD_HERE;
                        if (seats.available == 0)
                            return STATE_NOT_BOOKABLE;
                        if (seats.occupation_percentage >= MIN_SEATS_OCCUPATION)
                            return STATE_ALMOST_NOT_BOOKABLE;
                        return STATE_BOOKABLE;
                    }));
                    switch (state) {
                    case STATE_NOT_BOOKABLE:
                        return $(i).addClass('not-bookable');
                    case STATE_ALMOST_NOT_BOOKABLE:
                        return $(i).addClass('almost-not-bookable');
                    case STATE_BOOKABLE:
                        return $(i).addClass('bookable');
                    }
                });
                _this.$container.removeClass('loading-bookability-state').addClass('loaded-bookability-state');
                $('.show-if-bookable,.show-if-almost-not-bookable,.show-if-not-bookable', _this.$container).removeClass('d-none');
            });
        },
        detach: function detach() {
        }
    };
    return BookabilityState;
});
'use strict';
define('app/Program/Filter', [
    'postal',
    'jquery',
    'bootstrap'
], function dependencies(postal, $) {
    function Filter($container, state) {
        this.$container = $container;
        this._class = this.$container.data('class') || 'tkt_program_event';
        this.$filters = $('.tkt-filter', this.$container);
    }
    Filter.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            this.$filters.click(function (e) {
                var $filter = $(e.target);
                var type = $filter.data('type');
                $('.tkt-filter').removeClass('active');
                $filter.addClass('active');
                _this.filter_on($filter.data('type'));
            });
            this.$filters.each(function (i, f) {
                var type = $(f).data('type');
                if (!type)
                    return;
                if ($('.' + _this._class + '[data-type="' + type + '"]').length == 0)
                    $(f).remove();
            });
        },
        filter_on: function filter_on(type) {
            if (!type)
                return $('.' + this._class + '[data-type!="' + type + '"]').fadeIn();
            $('.' + this._class + '[data-type!="' + type + '"]').hide();
            $('.' + this._class + '[data-type="' + type + '"]').fadeIn();
        },
        detach: function detach() {
        }
    };
    return Filter;
});
'use strict';
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
requirejs.config({
    baseUrl: '/wp-content/plugins/wpticketack/assets/build/js',
    paths: _defineProperty({
        assets: 'app/Core/Assets',
        config: 'app/Core/Config',
        components: 'app/Core/Components',
        csrf: 'app/Core/Csrf',
        logger: 'app/Core/Logger',
        state: 'app/Core/State',
        template: 'app/Core/Template',
        api: 'app/Ticketack/Api',
        Cart: 'app/Models/Cart',
        CartItem: 'app/Models/CartItem',
        Screening: 'app/Models/Screening',
        Ticket: 'app/Models/Ticket',
        es6: '../../node_modules/requirejs-babel/es6',
        babel: '../../node_modules/requirejs-babel/babel-5.8.34',
        babel_polyfill: '../../node_modules/requirejs-babel/polyfill.min',
        async: '../../node_modules/async/dist/async.min',
        dottie: '../../node_modules/dottie/dottie',
        jquery: '../../node_modules/jquery/dist/jquery.min',
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min',
        ticketack: './ext/ticketack',
        urijs: '../../node_modules/urijs/src',
        moment: '../../node_modules/moment/min/moment-with-locales.min',
        postal: '../../node_modules/postal/lib/postal.min',
        lodash: '../../node_modules/lodash/lodash.min'
    }, 'lodash', '../../node_modules/lodash/lodash.min')
});
require([
    'app/main',
    'app/Booking/Form',
    'app/Cart/Cart',
    'app/Cart/CartIcon',
    'app/User/UserConnect',
    'app/Media/Carousel',
    'app/Media/Loading',
    'app/Media/YoutubeVideo',
    'app/Pass/BuyForm',
    'app/Program/BookabilityState',
    'app/Program/Filter'
]);
define('app', [
    'app/main',
    'app/Booking/Form',
    'app/Cart/Cart',
    'app/Cart/CartIcon',
    'app/User/UserConnect',
    'app/Media/Carousel',
    'app/Media/Loading',
    'app/Media/YoutubeVideo',
    'app/Pass/BuyForm',
    'app/Program/BookabilityState',
    'app/Program/Filter'
], function () {
    return;
});
//# sourceMappingURL=app.js.map
