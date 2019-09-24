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
    function k(n, t) {
        return c(t, function (t) {
            return [
                t,
                n[t]
            ];
        });
    }
    function E(n) {
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
        return '\\' + Ln[n];
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
    function U(n, t) {
        return function (r) {
            return n(t(r));
        };
    }
    function B(n, t) {
        for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            o !== t && '__lodash_placeholder__' !== o || (n[r] = '__lodash_placeholder__', i[u++] = r);
        }
        return i;
    }
    function L(n) {
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
        ], P = /\b__p\+='';/g, Z = /\b(__p\+=)''\+/g, q = /(__e\(.*?\)|\b__t\))\+'';/g, V = /&(?:amp|lt|gt|quot|#39);/g, K = /[&<>"']/g, G = RegExp(V.source), H = RegExp(K.source), J = /<%-([\s\S]+?)%>/g, Y = /<%([\s\S]+?)%>/g, Q = /<%=([\s\S]+?)%>/g, X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nn = /^\w*$/, tn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rn = /[\\^$.*+?()[\]{}|]/g, en = RegExp(rn.source), un = /^\s+|\s+$/g, on = /^\s+/, fn = /\s+$/, cn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, an = /\{\n\/\* \[wrapped with (.+)\] \*/, ln = /,? & /, sn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, hn = /\\(\\)?/g, pn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _n = /\w*$/, vn = /^[-+]0x[0-9a-f]+$/i, gn = /^0b[01]+$/i, dn = /^\[object .+?Constructor\]$/, yn = /^0o[0-7]+$/i, bn = /^(?:0|[1-9]\d*)$/, xn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, jn = /($^)/, wn = /['\n\r\u2028\u2029\\]/g, mn = '[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*', An = '(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])' + mn, kn = '(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])', En = RegExp('[\'\u2019]', 'g'), Sn = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g'), On = RegExp('\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|' + kn + mn, 'g'), In = RegExp([
            '[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:[\'\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:[\'\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:[\'\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:[\'\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+',
            An
        ].join('|'), 'g'), Rn = RegExp('[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'), zn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Wn = 'Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout'.split(' '), Un = {};
    Un['[object Float32Array]'] = Un['[object Float64Array]'] = Un['[object Int8Array]'] = Un['[object Int16Array]'] = Un['[object Int32Array]'] = Un['[object Uint8Array]'] = Un['[object Uint8ClampedArray]'] = Un['[object Uint16Array]'] = Un['[object Uint32Array]'] = true, Un['[object Arguments]'] = Un['[object Array]'] = Un['[object ArrayBuffer]'] = Un['[object Boolean]'] = Un['[object DataView]'] = Un['[object Date]'] = Un['[object Error]'] = Un['[object Function]'] = Un['[object Map]'] = Un['[object Number]'] = Un['[object Object]'] = Un['[object RegExp]'] = Un['[object Set]'] = Un['[object String]'] = Un['[object WeakMap]'] = false;
    var Bn = {};
    Bn['[object Arguments]'] = Bn['[object Array]'] = Bn['[object ArrayBuffer]'] = Bn['[object DataView]'] = Bn['[object Boolean]'] = Bn['[object Date]'] = Bn['[object Float32Array]'] = Bn['[object Float64Array]'] = Bn['[object Int8Array]'] = Bn['[object Int16Array]'] = Bn['[object Int32Array]'] = Bn['[object Map]'] = Bn['[object Number]'] = Bn['[object Object]'] = Bn['[object RegExp]'] = Bn['[object Set]'] = Bn['[object String]'] = Bn['[object Symbol]'] = Bn['[object Uint8Array]'] = Bn['[object Uint8ClampedArray]'] = Bn['[object Uint16Array]'] = Bn['[object Uint32Array]'] = true, Bn['[object Error]'] = Bn['[object Function]'] = Bn['[object WeakMap]'] = false;
    var Ln = {
            '\\': '\\',
            '\'': '\'',
            '\n': 'n',
            '\r': 'r',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        }, Cn = parseFloat, Dn = parseInt, Mn = typeof global == 'object' && global && global.Object === Object && global, Tn = typeof self == 'object' && self && self.Object === Object && self, $n = Mn || Tn || Function('return this')(), Fn = typeof exports == 'object' && exports && !exports.nodeType && exports, Nn = Fn && typeof module == 'object' && module && !module.nodeType && module, Pn = Nn && Nn.exports === Fn, Zn = Pn && Mn.process, qn = function () {
            try {
                var n = Nn && Nn.require && Nn.require('util').types;
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
                if (yu(n) && !ff(n) && !(n instanceof Ln)) {
                    if (n instanceof On)
                        return n;
                    if (oi.call(n, '__wrapped__'))
                        return Fe(n);
                }
                return new On(n);
            }
            function kn() {
            }
            function On(n, t) {
                this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = T;
            }
            function Ln(n) {
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
                var r, e = ff(n), u = !e && of(n), i = !e && !u && af(n), o = !e && !u && !i && _f(n), u = (e = e || u || i || o) ? A(n.length, ni) : [], f = u.length;
                for (r in n)
                    !t && !oi.call(n, r) || e && ('length' == r || i && ('offset' == r || 'parent' == r) || o && ('buffer' == r || 'byteLength' == r || 'byteOffset' == r) || Se(r, f)) || u.push(r);
                return u;
            }
            function Qn(n) {
                var t = n.length;
                return t ? n[ir(0, t - 1)] : T;
            }
            function et(n, t) {
                return De(Lr(n), pt(t, 0, n.length));
            }
            function ut(n) {
                return De(Lr(n));
            }
            function it(n, t, r) {
                (r === T || lu(n[t], r)) && (r !== T || t in n) || st(n, t, r);
            }
            function ot(n, t, r) {
                var e = n[t];
                oi.call(n, t) && lu(e, r) && (r !== T || t in n) || st(n, t, r);
            }
            function ft(n, t) {
                for (var r = n.length; r--;)
                    if (lu(n[r][0], t))
                        return r;
                return -1;
            }
            function ct(n, t, r, e) {
                return uo(n, function (n, u, i) {
                    t(e, n, r(n), i);
                }), e;
            }
            function at(n, t) {
                return n && Cr(t, Wu(t), n);
            }
            function lt(n, t) {
                return n && Cr(t, Uu(t), n);
            }
            function st(n, t, r) {
                '__proto__' == t && Ai ? Ai(n, t, {
                    configurable: true,
                    enumerable: true,
                    value: r,
                    writable: true
                }) : n[t] = r;
            }
            function ht(n, t) {
                for (var r = -1, e = t.length, u = Ku(e), i = null == n; ++r < e;)
                    u[r] = i ? T : Ru(n, t[r]);
                return u;
            }
            function pt(n, t, r) {
                return n === n && (r !== T && (n = n <= r ? n : r), t !== T && (n = n >= t ? n : t)), n;
            }
            function _t(n, t, e, u, i, o) {
                var f, c = 1 & t, a = 2 & t, l = 4 & t;
                if (e && (f = i ? e(n, u, i, o) : e(n)), f !== T)
                    return f;
                if (!du(n))
                    return n;
                if (u = ff(n)) {
                    if (f = me(n), !c)
                        return Lr(n, f);
                } else {
                    var s = vo(n), h = '[object Function]' == s || '[object GeneratorFunction]' == s;
                    if (af(n))
                        return Ir(n, c);
                    if ('[object Object]' == s || '[object Arguments]' == s || h && !i) {
                        if (f = a || h ? {} : Ae(n), !c)
                            return a ? Mr(n, lt(f, n)) : Dr(n, at(f, n));
                    } else {
                        if (!Bn[s])
                            return i ? n : {};
                        f = ke(n, s, c);
                    }
                }
                if (o || (o = new Zn()), i = o.get(n))
                    return i;
                if (o.set(n, f), pf(n))
                    return n.forEach(function (r) {
                        f.add(_t(r, t, e, r, n, o));
                    }), f;
                if (sf(n))
                    return n.forEach(function (r, u) {
                        f.set(u, _t(r, t, e, u, n, o));
                    }), f;
                var a = l ? a ? ve : _e : a ? Uu : Wu, p = u ? T : a(n);
                return r(p || n, function (r, u) {
                    p && (u = r, r = n[u]), ot(f, u, _t(r, t, e, u, n, o));
                }), f;
            }
            function vt(n) {
                var t = Wu(n);
                return function (r) {
                    return gt(r, n, t);
                };
            }
            function gt(n, t, r) {
                var e = r.length;
                if (null == n)
                    return !e;
                for (n = Qu(n); e--;) {
                    var u = r[e], i = t[u], o = n[u];
                    if (o === T && !(u in n) || !i(o))
                        return false;
                }
                return true;
            }
            function dt(n, t, r) {
                if (typeof n != 'function')
                    throw new ti('Expected a function');
                return bo(function () {
                    n.apply(T, r);
                }, t);
            }
            function yt(n, t, r, e) {
                var u = -1, i = o, a = true, l = n.length, s = [], h = t.length;
                if (!l)
                    return s;
                r && (t = c(t, E(r))), e ? (i = f, a = false) : 200 <= t.length && (i = O, a = false, t = new Nn(t));
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
                return uo(n, function (n, e, u) {
                    return r = !!t(n, e, u);
                }), r;
            }
            function xt(n, t, r) {
                for (var e = -1, u = n.length; ++e < u;) {
                    var i = n[e], o = t(i);
                    if (null != o && (f === T ? o === o && !wu(o) : r(o, f)))
                        var f = o, c = i;
                }
                return c;
            }
            function jt(n, t) {
                var r = [];
                return uo(n, function (n, e, u) {
                    t(n, e, u) && r.push(n);
                }), r;
            }
            function wt(n, t, r, e, u) {
                var i = -1, o = n.length;
                for (r || (r = Ee), u || (u = []); ++i < o;) {
                    var f = n[i];
                    0 < t && r(f) ? 1 < t ? wt(f, t - 1, r, e, u) : a(u, f) : e || (u[u.length] = f);
                }
                return u;
            }
            function mt(n, t) {
                return n && oo(n, t, Wu);
            }
            function At(n, t) {
                return n && fo(n, t, Wu);
            }
            function kt(n, t) {
                return i(t, function (t) {
                    return _u(n[t]);
                });
            }
            function Et(n, t) {
                t = Sr(t, n);
                for (var r = 0, e = t.length; null != n && r < e;)
                    n = n[Me(t[r++])];
                return r && r == e ? n : T;
            }
            function St(n, t, r) {
                return t = t(n), ff(n) ? t : a(t, r(n));
            }
            function Ot(n) {
                if (null == n)
                    return n === T ? '[object Undefined]' : '[object Null]';
                if (mi && mi in Qu(n)) {
                    var t = oi.call(n, mi), r = n[mi];
                    try {
                        n[mi] = T;
                        var e = true;
                    } catch (n) {
                    }
                    var u = ai.call(n);
                    e && (t ? n[mi] = r : delete n[mi]), n = u;
                } else
                    n = ai.call(n);
                return n;
            }
            function It(n, t) {
                return n > t;
            }
            function Rt(n, t) {
                return null != n && oi.call(n, t);
            }
            function zt(n, t) {
                return null != n && t in Qu(n);
            }
            function Wt(n, t, r) {
                for (var e = r ? f : o, u = n[0].length, i = n.length, a = i, l = Ku(i), s = 1 / 0, h = []; a--;) {
                    var p = n[a];
                    a && t && (p = c(p, E(t))), s = Ci(p.length, s), l[a] = !r && (t || 120 <= u && 120 <= p.length) ? new Nn(a && p) : T;
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
            function Ut(n, t, r, e) {
                return mt(n, function (n, u, i) {
                    t(e, r(n), u, i);
                }), e;
            }
            function Bt(t, r, e) {
                return r = Sr(r, t), t = 2 > r.length ? t : Et(t, hr(r, 0, -1)), r = null == t ? t : t[Me(Ve(r))], null == r ? T : n(r, t, e);
            }
            function Lt(n) {
                return yu(n) && '[object Arguments]' == Ot(n);
            }
            function Ct(n) {
                return yu(n) && '[object ArrayBuffer]' == Ot(n);
            }
            function Dt(n) {
                return yu(n) && '[object Date]' == Ot(n);
            }
            function Mt(n, t, r, e, u) {
                if (n === t)
                    return true;
                if (null == n || null == t || !yu(n) && !yu(t))
                    return n !== n && t !== t;
                n: {
                    var i = ff(n), o = ff(t), f = i ? '[object Array]' : vo(n), c = o ? '[object Array]' : vo(t), f = '[object Arguments]' == f ? '[object Object]' : f, c = '[object Arguments]' == c ? '[object Object]' : c, a = '[object Object]' == f, o = '[object Object]' == c;
                    if ((c = f == c) && af(n)) {
                        if (!af(t)) {
                            t = false;
                            break n;
                        }
                        i = true, a = false;
                    }
                    if (c && !a)
                        u || (u = new Zn()), t = i || _f(n) ? se(n, t, r, e, Mt, u) : he(n, t, f, r, e, Mt, u);
                    else {
                        if (!(1 & r) && (i = a && oi.call(n, '__wrapped__'), f = o && oi.call(t, '__wrapped__'), i || f)) {
                            n = i ? n.value() : n, t = f ? t.value() : t, u || (u = new Zn()), t = Mt(n, t, r, e, u);
                            break n;
                        }
                        if (c)
                            t:
                                if (u || (u = new Zn()), i = 1 & r, f = _e(n), o = f.length, c = _e(t).length, o == c || i) {
                                    for (a = o; a--;) {
                                        var l = f[a];
                                        if (!(i ? l in t : oi.call(t, l))) {
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
                return yu(n) && '[object Map]' == vo(n);
            }
            function $t(n, t, r, e) {
                var u = r.length, i = u, o = !e;
                if (null == n)
                    return !i;
                for (n = Qu(n); u--;) {
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
                return !(!du(n) || ci && ci in n) && (_u(n) ? hi : dn).test(Te(n));
            }
            function Nt(n) {
                return yu(n) && '[object RegExp]' == Ot(n);
            }
            function Pt(n) {
                return yu(n) && '[object Set]' == vo(n);
            }
            function Zt(n) {
                return yu(n) && gu(n.length) && !!Un[Ot(n)];
            }
            function qt(n) {
                return typeof n == 'function' ? n : null == n ? $u : typeof n == 'object' ? ff(n) ? Jt(n[0], n[1]) : Ht(n) : Zu(n);
            }
            function Vt(n) {
                if (!ze(n))
                    return Bi(n);
                var t, r = [];
                for (t in Qu(n))
                    oi.call(n, t) && 'constructor' != t && r.push(t);
                return r;
            }
            function Kt(n, t) {
                return n < t;
            }
            function Gt(n, t) {
                var r = -1, e = su(n) ? Ku(n.length) : [];
                return uo(n, function (n, u, i) {
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
                return Ie(n) && t === t && !du(t) ? We(Me(n), t) : function (r) {
                    var e = Ru(r, n);
                    return e === T && e === t ? zu(r, n) : Mt(t, e, 3);
                };
            }
            function Yt(n, t, r, e, u) {
                n !== t && oo(t, function (i, o) {
                    if (du(i)) {
                        u || (u = new Zn());
                        var f = u, c = Be(n, o), a = Be(t, o), l = f.get(a);
                        if (!l) {
                            var l = e ? e(c, a, o + '', n, t, f) : T, s = l === T;
                            if (s) {
                                var h = ff(a), p = !h && af(a), _ = !h && !p && _f(a), l = a;
                                h || p || _ ? ff(c) ? l = c : hu(c) ? l = Lr(c) : p ? (s = false, l = Ir(a, true)) : _ ? (s = false, l = zr(a, true)) : l = [] : xu(a) || of(a) ? (l = c, of(c) ? l = Ou(c) : du(c) && !_u(c) || (l = Ae(a))) : s = false;
                            }
                            s && (f.set(a, l), Yt(l, a, r, e, f), f.delete(a));
                        }
                        it(n, o, l);
                    } else
                        f = e ? e(Be(n, o), i, o + '', n, t, u) : T, f === T && (f = i), it(n, o, f);
                }, Uu);
            }
            function Qt(n, t) {
                var r = n.length;
                if (r)
                    return t += 0 > t ? r : 0, Se(t, r) ? n[t] : T;
            }
            function Xt(n, t, r) {
                var e = -1;
                return t = c(t.length ? t : [$u], E(ye())), n = Gt(n, function (n, r, u) {
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
                                if (e >= f) {
                                    e = c;
                                    break n;
                                }
                                e = c * ('desc' == r[e] ? -1 : 1);
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
                    return zu(n, r);
                });
            }
            function tr(n, t, r) {
                for (var e = -1, u = t.length, i = {}; ++e < u;) {
                    var o = t[e], f = Et(n, o);
                    r(f, o) && lr(i, Sr(o, n), f);
                }
                return i;
            }
            function rr(n) {
                return function (t) {
                    return Et(t, n);
                };
            }
            function er(n, t, r, e) {
                var u = e ? g : v, i = -1, o = t.length, f = n;
                for (n === t && (t = Lr(t)), r && (f = c(n, E(r))); ++i < o;)
                    for (var a = 0, l = t[i], l = r ? r(l) : l; -1 < (a = u(f, l, a, e));)
                        f !== n && xi.call(f, a, 1), xi.call(n, a, 1);
                return n;
            }
            function ur(n, t) {
                for (var r = n ? t.length : 0, e = r - 1; r--;) {
                    var u = t[r];
                    if (r == e || u !== i) {
                        var i = u;
                        Se(u) ? xi.call(n, u, 1) : xr(n, u);
                    }
                }
                return n;
            }
            function ir(n, t) {
                return n + Ii(Ti() * (t - n + 1));
            }
            function or(n, t) {
                var r = '';
                if (!n || 1 > t || 9007199254740991 < t)
                    return r;
                do
                    t % 2 && (r += n), (t = Ii(t / 2)) && (n += n);
                while (t);
                return r;
            }
            function fr(n, t) {
                return xo(Ue(n, t, $u), n + '');
            }
            function cr(n) {
                return Qn(Lu(n));
            }
            function ar(n, t) {
                var r = Lu(n);
                return De(r, pt(t, 0, r.length));
            }
            function lr(n, t, r, e) {
                if (!du(n))
                    return n;
                t = Sr(t, n);
                for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
                    var c = Me(t[u]), a = r;
                    if (u != o) {
                        var l = f[c], a = e ? e(l, c, f) : T;
                        a === T && (a = du(l) ? l : Se(t[u + 1]) ? [] : {});
                    }
                    ot(f, c, a), f = f[c];
                }
                return n;
            }
            function sr(n) {
                return De(Lu(n));
            }
            function hr(n, t, r) {
                var e = -1, u = n.length;
                for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Ku(u); ++e < u;)
                    r[e] = n[e + t];
                return r;
            }
            function pr(n, t) {
                var r;
                return uo(n, function (n, e, u) {
                    return r = t(n, e, u), !r;
                }), !!r;
            }
            function _r(n, t, r) {
                var e = 0, u = null == n ? e : n.length;
                if (typeof t == 'number' && t === t && 2147483647 >= u) {
                    for (; e < u;) {
                        var i = e + u >>> 1, o = n[i];
                        null !== o && !wu(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i;
                    }
                    return u;
                }
                return vr(n, t, $u, r);
            }
            function vr(n, t, r, e) {
                t = r(t);
                for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = wu(t), a = t === T; u < i;) {
                    var l = Ii((u + i) / 2), s = r(n[l]), h = s !== T, p = null === s, _ = s === s, v = wu(s);
                    (o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= t : s < t) ? u = l + 1 : i = l;
                }
                return Ci(i, 4294967294);
            }
            function gr(n, t) {
                for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
                    var o = n[r], f = t ? t(o) : o;
                    if (!r || !lu(f, c)) {
                        var c = f;
                        i[u++] = 0 === o ? 0 : o;
                    }
                }
                return i;
            }
            function dr(n) {
                return typeof n == 'number' ? n : wu(n) ? F : +n;
            }
            function yr(n) {
                if (typeof n == 'string')
                    return n;
                if (ff(n))
                    return c(n, yr) + '';
                if (wu(n))
                    return ro ? ro.call(n) : '';
                var t = n + '';
                return '0' == t && 1 / n == -$ ? '-0' : t;
            }
            function br(n, t, r) {
                var e = -1, u = o, i = n.length, c = true, a = [], l = a;
                if (r)
                    c = false, u = f;
                else if (200 <= i) {
                    if (u = t ? null : so(n))
                        return L(u);
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
                return t = Sr(t, n), n = 2 > t.length ? n : Et(n, hr(t, 0, -1)), null == n || delete n[Me(Ve(t))];
            }
            function jr(n, t, r, e) {
                for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n););
                return r ? hr(n, e ? 0 : i, e ? i + 1 : u) : hr(n, e ? i + 1 : 0, e ? u : i);
            }
            function wr(n, t) {
                var r = n;
                return r instanceof Ln && (r = r.value()), l(t, function (n, t) {
                    return t.func.apply(t.thisArg, a([n], t.args));
                }, r);
            }
            function mr(n, t, r) {
                var e = n.length;
                if (2 > e)
                    return e ? br(n[0]) : [];
                for (var u = -1, i = Ku(e); ++u < e;)
                    for (var o = n[u], f = -1; ++f < e;)
                        f != u && (i[u] = yt(i[u] || o, n[f], t, r));
                return br(wt(i, 1), t, r);
            }
            function Ar(n, t, r) {
                for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;)
                    r(o, n[e], e < i ? t[e] : T);
                return o;
            }
            function kr(n) {
                return hu(n) ? n : [];
            }
            function Er(n) {
                return typeof n == 'function' ? n : $u;
            }
            function Sr(n, t) {
                return ff(n) ? n : Ie(n, t) ? [n] : jo(Iu(n));
            }
            function Or(n, t, r) {
                var e = n.length;
                return r = r === T ? e : r, !t && r >= e ? n : hr(n, t, r);
            }
            function Ir(n, t) {
                if (t)
                    return n.slice();
                var r = n.length, r = gi ? gi(r) : new n.constructor(r);
                return n.copy(r), r;
            }
            function Rr(n) {
                var t = new n.constructor(n.byteLength);
                return new vi(t).set(new vi(n)), t;
            }
            function zr(n, t) {
                return new n.constructor(t ? Rr(n.buffer) : n.buffer, n.byteOffset, n.length);
            }
            function Wr(n, t) {
                if (n !== t) {
                    var r = n !== T, e = null === n, u = n === n, i = wu(n), o = t !== T, f = null === t, c = t === t, a = wu(t);
                    if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u)
                        return 1;
                    if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c)
                        return -1;
                }
                return 0;
            }
            function Ur(n, t, r, e) {
                var u = -1, i = n.length, o = r.length, f = -1, c = t.length, a = Li(i - o, 0), l = Ku(c + a);
                for (e = !e; ++f < c;)
                    l[f] = t[f];
                for (; ++u < o;)
                    (e || u < i) && (l[r[u]] = n[u]);
                for (; a--;)
                    l[f++] = n[u++];
                return l;
            }
            function Br(n, t, r, e) {
                var u = -1, i = n.length, o = -1, f = r.length, c = -1, a = t.length, l = Li(i - f, 0), s = Ku(l + a);
                for (e = !e; ++u < l;)
                    s[u] = n[u];
                for (l = u; ++c < a;)
                    s[l + c] = t[c];
                for (; ++o < f;)
                    (e || u < i) && (s[l + r[o]] = n[u++]);
                return s;
            }
            function Lr(n, t) {
                var r = -1, e = n.length;
                for (t || (t = Ku(e)); ++r < e;)
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
                return Cr(n, po(n), t);
            }
            function Mr(n, t) {
                return Cr(n, _o(n), t);
            }
            function Tr(n, r) {
                return function (e, u) {
                    var i = ff(e) ? t : ct, o = r ? r() : {};
                    return i(e, n, ye(u, 2), o);
                };
            }
            function $r(n) {
                return fr(function (t, r) {
                    var e = -1, u = r.length, i = 1 < u ? r[u - 1] : T, o = 2 < u ? r[2] : T, i = 3 < n.length && typeof i == 'function' ? (u--, i) : T;
                    for (o && Oe(r[0], r[1], o) && (i = 3 > u ? T : i, u = 1), t = Qu(t); ++e < u;)
                        (o = r[e]) && n(t, o, e, i);
                    return t;
                });
            }
            function Fr(n, t) {
                return function (r, e) {
                    if (null == r)
                        return r;
                    if (!su(r))
                        return n(r, e);
                    for (var u = r.length, i = t ? u : -1, o = Qu(r); (t ? i-- : ++i < u) && false !== e(o[i], i, o););
                    return r;
                };
            }
            function Nr(n) {
                return function (t, r, e) {
                    var u = -1, i = Qu(t);
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
                    t = Iu(t);
                    var r = Rn.test(t) ? M(t) : T, e = r ? r[0] : t.charAt(0);
                    return t = r ? Or(r, 1).join('') : t.slice(1), e[n]() + t;
                };
            }
            function qr(n) {
                return function (t) {
                    return l(Mu(Du(t).replace(En, '')), n, '');
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
                    var r = eo(n.prototype), t = n.apply(r, t);
                    return du(t) ? t : r;
                };
            }
            function Kr(t, r, e) {
                function u() {
                    for (var o = arguments.length, f = Ku(o), c = o, a = de(u); c--;)
                        f[c] = arguments[c];
                    return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : B(f, a), o -= c.length, o < e ? ue(t, r, Jr, u.placeholder, T, f, c, T, T, e - o) : n(this && this !== $n && this instanceof u ? i : t, this, f);
                }
                var i = Vr(t);
                return u;
            }
            function Gr(n) {
                return function (t, r, e) {
                    var u = Qu(t);
                    if (!su(t)) {
                        var i = ye(r, 3);
                        t = Wu(t), r = function (n) {
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
                            throw new ti('Expected a function');
                        if (u && !o && 'wrapper' == ge(i))
                            var o = new On([], true);
                    }
                    for (e = o ? e : r; ++e < r;)
                        var i = t[e], u = ge(i), f = 'wrapper' == u ? ho(i) : T, o = f && Re(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[ge(f[0])].apply(o, f[3]) : 1 == i.length && Re(i) ? o[u]() : o.thru(i);
                    return function () {
                        var n = arguments, e = n[0];
                        if (o && 1 == n.length && ff(e))
                            return o.plant(e).value();
                        for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r;)
                            n = t[u].call(this, n);
                        return n;
                    };
                });
            }
            function Jr(n, t, r, e, u, i, o, f, c, a) {
                function l() {
                    for (var d = arguments.length, y = Ku(d), b = d; b--;)
                        y[b] = arguments[b];
                    if (_) {
                        var x, j = de(l), b = y.length;
                        for (x = 0; b--;)
                            y[b] === j && ++x;
                    }
                    if (e && (y = Ur(y, e, u, _)), i && (y = Br(y, i, o, _)), d -= x, _ && d < a)
                        return j = B(y, j), ue(n, t, Jr, l.placeholder, r, y, j, f, c, a - d);
                    if (j = h ? r : this, b = p ? j[n] : n, d = y.length, f) {
                        x = y.length;
                        for (var w = Ci(f.length, x), m = Lr(y); w--;) {
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
                    return Ut(r, n, t(e), {});
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
                    return r = c(r, E(ye())), fr(function (e) {
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
                return 2 > r ? r ? or(t, n) : t : (r = or(t, Oi(n / D(t))), Rn.test(t) ? Or(M(r), 0, n).join('') : r.slice(0, n));
            }
            function te(t, r, e, u) {
                function i() {
                    for (var r = -1, c = arguments.length, a = -1, l = u.length, s = Ku(l + c), h = this && this !== $n && this instanceof i ? f : t; ++a < l;)
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
                    e && typeof e != 'number' && Oe(t, r, e) && (r = e = T), t = Au(t), r === T ? (r = t, t = 0) : r = Au(r), e = e === T ? t < r ? 1 : -1 : Au(e);
                    var u = -1;
                    r = Li(Oi((r - t) / (e || 1)), 0);
                    for (var i = Ku(r); r--;)
                        i[n ? r : ++u] = t, t += e;
                    return i;
                };
            }
            function ee(n) {
                return function (t, r) {
                    return typeof t == 'string' && typeof r == 'string' || (t = Su(t), r = Su(r)), n(t, r);
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
                ], r = r.apply(T, u), Re(n) && yo(r, u), r.placeholder = e, Le(r, n, t);
            }
            function ie(n) {
                var t = Yu[n];
                return function (n, r) {
                    if (n = Su(n), r = null == r ? 0 : Ci(ku(r), 292)) {
                        var e = (Iu(n) + 'e').split('e'), e = t(e[0] + 'e' + (+e[1] + r)), e = (Iu(e) + 'e').split('e');
                        return +(e[0] + 'e' + (+e[1] - r));
                    }
                    return t(n);
                };
            }
            function oe(n) {
                return function (t) {
                    var r = vo(t);
                    return '[object Map]' == r ? W(t) : '[object Set]' == r ? C(t) : k(t, n(t));
                };
            }
            function fe(n, t, r, e, u, i, o, f) {
                var c = 2 & t;
                if (!c && typeof n != 'function')
                    throw new ti('Expected a function');
                var a = e ? e.length : 0;
                if (a || (t &= -97, e = u = T), o = o === T ? o : Li(ku(o), 0), f = f === T ? f : ku(f), a -= u ? u.length : 0, 64 & t) {
                    var l = e, s = u;
                    e = u = T;
                }
                var h = c ? T : ho(n);
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
                ], h && (r = i[1], n = h[1], t = r | n, e = 128 == n && 8 == r || 128 == n && 256 == r && i[7].length <= h[8] || 384 == n && h[7].length <= h[8] && 8 == r, 131 > t || e) && (1 & n && (i[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], i[3] = e ? Ur(e, r, h[4]) : r, i[4] = e ? B(i[3], '__lodash_placeholder__') : h[4]), (r = h[5]) && (e = i[5], i[5] = e ? Br(e, r, h[6]) : r, i[6] = e ? B(i[5], '__lodash_placeholder__') : h[6]), (r = h[7]) && (i[7] = r), 128 & n && (i[8] = null == i[8] ? h[8] : Ci(i[8], h[8])), null == i[9] && (i[9] = h[9]), i[0] = h[0], i[1] = t), n = i[0], t = i[1], r = i[2], e = i[3], u = i[4], f = i[9] = i[9] === T ? c ? 0 : n.length : Li(i[9] - a, 0), !f && 24 & t && (t &= -25), c = t && 1 != t ? 8 == t || 16 == t ? Kr(n, t, f) : 32 != t && 33 != t || u.length ? Jr.apply(T, i) : te(n, t, r, e) : Pr(n, t, r), Le((h ? co : yo)(c, i), n, t);
            }
            function ce(n, t, r, e) {
                return n === T || lu(n, ei[r]) && !oi.call(e, r) ? t : n;
            }
            function ae(n, t, r, e, u, i) {
                return du(n) && du(t) && (i.set(t, n), Yt(n, t, T, ae, i), i.delete(t)), n;
            }
            function le(n) {
                return xu(n) ? T : n;
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
                    if (n.byteLength != t.byteLength || !i(new vi(n), new vi(t)))
                        break;
                    return true;
                case '[object Boolean]':
                case '[object Date]':
                case '[object Number]':
                    return lu(+n, +t);
                case '[object Error]':
                    return n.name == t.name && n.message == t.message;
                case '[object RegExp]':
                case '[object String]':
                    return n == t + '';
                case '[object Map]':
                    var f = W;
                case '[object Set]':
                    if (f || (f = L), n.size != t.size && !(1 & e))
                        break;
                    return (r = o.get(n)) ? r == t : (e |= 2, o.set(n, t), t = se(f(n), f(t), e, u, i, o), o.delete(n), t);
                case '[object Symbol]':
                    if (to)
                        return to.call(n) == to.call(t);
                }
                return false;
            }
            function pe(n) {
                return xo(Ue(n, T, Ze), n + '');
            }
            function _e(n) {
                return St(n, Wu, po);
            }
            function ve(n) {
                return St(n, Uu, _o);
            }
            function ge(n) {
                for (var t = n.name + '', r = Gi[t], e = oi.call(Gi, t) ? r.length : 0; e--;) {
                    var u = r[e], i = u.func;
                    if (null == i || i == n)
                        return u.name;
                }
                return t;
            }
            function de(n) {
                return (oi.call(An, 'placeholder') ? An : n).placeholder;
            }
            function ye() {
                var n = An.iteratee || Fu, n = n === Fu ? qt : n;
                return arguments.length ? n(arguments[0], arguments[1]) : n;
            }
            function be(n, t) {
                var r = n.__data__, e = typeof t;
                return ('string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
            }
            function xe(n) {
                for (var t = Wu(n), r = t.length; r--;) {
                    var e = t[r], u = n[e];
                    t[r] = [
                        e,
                        u,
                        u === u && !du(u)
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
                    var o = Me(t[e]);
                    if (!(i = null != n && r(n, o)))
                        break;
                    n = n[o];
                }
                return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && gu(u) && Se(o, u) && (ff(n) || of(n)));
            }
            function me(n) {
                var t = n.length, r = new n.constructor(t);
                return t && 'string' == typeof n[0] && oi.call(n, 'index') && (r.index = n.index, r.input = n.input), r;
            }
            function Ae(n) {
                return typeof n.constructor != 'function' || ze(n) ? {} : eo(di(n));
            }
            function ke(n, t, r) {
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
                    return to ? Qu(to.call(n)) : {};
                }
            }
            function Ee(n) {
                return ff(n) || of(n) || !!(ji && n && n[ji]);
            }
            function Se(n, t) {
                var r = typeof n;
                return t = null == t ? 9007199254740991 : t, !!t && ('number' == r || 'symbol' != r && bn.test(n)) && -1 < n && 0 == n % 1 && n < t;
            }
            function Oe(n, t, r) {
                if (!du(r))
                    return false;
                var e = typeof t;
                return !!('number' == e ? su(r) && Se(t, r.length) : 'string' == e && t in r) && lu(r[t], n);
            }
            function Ie(n, t) {
                if (ff(n))
                    return false;
                var r = typeof n;
                return !('number' != r && 'symbol' != r && 'boolean' != r && null != n && !wu(n)) || (nn.test(n) || !X.test(n) || null != t && n in Qu(t));
            }
            function Re(n) {
                var t = ge(n), r = An[t];
                return typeof r == 'function' && t in Ln.prototype && (n === r || (t = ho(r), !!t && n === t[0]));
            }
            function ze(n) {
                var t = n && n.constructor;
                return n === (typeof t == 'function' && t.prototype || ei);
            }
            function We(n, t) {
                return function (r) {
                    return null != r && (r[n] === t && (t !== T || n in Qu(r)));
                };
            }
            function Ue(t, r, e) {
                return r = Li(r === T ? t.length - 1 : r, 0), function () {
                    for (var u = arguments, i = -1, o = Li(u.length - r, 0), f = Ku(o); ++i < o;)
                        f[i] = u[r + i];
                    for (i = -1, o = Ku(r + 1); ++i < r;)
                        o[i] = u[i];
                    return o[r] = e(f), n(t, this, o);
                };
            }
            function Be(n, t) {
                if ('__proto__' != t)
                    return n[t];
            }
            function Le(n, t, r) {
                var e = t + '';
                t = xo;
                var u, i = $e;
                return u = (u = e.match(an)) ? u[1].split(ln) : [], r = i(u, r), (i = r.length) && (u = i - 1, r[u] = (1 < i ? '& ' : '') + r[u], r = r.join(2 < i ? ', ' : ' '), e = e.replace(cn, '{\n/* [wrapped with ' + r + '] */\n')), t(n, e);
            }
            function Ce(n) {
                var t = 0, r = 0;
                return function () {
                    var e = Di(), u = 16 - (e - r);
                    if (r = e, 0 < u) {
                        if (800 <= ++t)
                            return arguments[0];
                    } else
                        t = 0;
                    return n.apply(T, arguments);
                };
            }
            function De(n, t) {
                var r = -1, e = n.length, u = e - 1;
                for (t = t === T ? e : t; ++r < t;) {
                    var e = ir(r, u), i = n[e];
                    n[e] = n[r], n[r] = i;
                }
                return n.length = t, n;
            }
            function Me(n) {
                if (typeof n == 'string' || wu(n))
                    return n;
                var t = n + '';
                return '0' == t && 1 / n == -$ ? '-0' : t;
            }
            function Te(n) {
                if (null != n) {
                    try {
                        return ii.call(n);
                    } catch (n) {
                    }
                    return n + '';
                }
                return '';
            }
            function $e(n, t) {
                return r(N, function (r) {
                    var e = '_.' + r[0];
                    t & r[1] && !o(n, e) && n.push(e);
                }), n.sort();
            }
            function Fe(n) {
                if (n instanceof Ln)
                    return n.clone();
                var t = new On(n.__wrapped__, n.__chain__);
                return t.__actions__ = Lr(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
            }
            function Ne(n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r = null == r ? 0 : ku(r), 0 > r && (r = Li(e + r, 0)), _(n, ye(t, 3), r)) : -1;
            }
            function Pe(n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e)
                    return -1;
                var u = e - 1;
                return r !== T && (u = ku(r), u = 0 > r ? Li(e + u, 0) : Ci(u, e - 1)), _(n, ye(t, 3), u, true);
            }
            function Ze(n) {
                return (null == n ? 0 : n.length) ? wt(n, 1) : [];
            }
            function qe(n) {
                return n && n.length ? n[0] : T;
            }
            function Ve(n) {
                var t = null == n ? 0 : n.length;
                return t ? n[t - 1] : T;
            }
            function Ke(n, t) {
                return n && n.length && t && t.length ? er(n, t) : n;
            }
            function Ge(n) {
                return null == n ? n : $i.call(n);
            }
            function He(n) {
                if (!n || !n.length)
                    return [];
                var t = 0;
                return n = i(n, function (n) {
                    if (hu(n))
                        return t = Li(n.length, t), true;
                }), A(t, function (t) {
                    return c(n, b(t));
                });
            }
            function Je(t, r) {
                if (!t || !t.length)
                    return [];
                var e = He(t);
                return null == r ? e : c(e, function (t) {
                    return n(r, T, t);
                });
            }
            function Ye(n) {
                return n = An(n), n.__chain__ = true, n;
            }
            function Qe(n, t) {
                return t(n);
            }
            function Xe() {
                return this;
            }
            function nu(n, t) {
                return (ff(n) ? r : uo)(n, ye(t, 3));
            }
            function tu(n, t) {
                return (ff(n) ? e : io)(n, ye(t, 3));
            }
            function ru(n, t) {
                return (ff(n) ? c : Gt)(n, ye(t, 3));
            }
            function eu(n, t, r) {
                return t = r ? T : t, t = n && null == t ? n.length : t, fe(n, 128, T, T, T, T, t);
            }
            function uu(n, t) {
                var r;
                if (typeof t != 'function')
                    throw new ti('Expected a function');
                return n = ku(n), function () {
                    return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = T), r;
                };
            }
            function iu(n, t, r) {
                return t = r ? T : t, n = fe(n, 8, T, T, T, T, T, t), n.placeholder = iu.placeholder, n;
            }
            function ou(n, t, r) {
                return t = r ? T : t, n = fe(n, 16, T, T, T, T, T, t), n.placeholder = ou.placeholder, n;
            }
            function fu(n, t, r) {
                function e(t) {
                    var r = c, e = a;
                    return c = a = T, _ = t, s = n.apply(e, r);
                }
                function u(n) {
                    var r = n - p;
                    return n -= _, p === T || r >= t || 0 > r || g && n >= l;
                }
                function i() {
                    var n = Go();
                    if (u(n))
                        return o(n);
                    var r, e = bo;
                    r = n - _, n = t - (n - p), r = g ? Ci(n, l - r) : n, h = e(i, r);
                }
                function o(n) {
                    return h = T, d && c ? e(n) : (c = a = T, s);
                }
                function f() {
                    var n = Go(), r = u(n);
                    if (c = arguments, a = this, p = n, r) {
                        if (h === T)
                            return _ = n = p, h = bo(i, t), v ? e(n) : s;
                        if (g)
                            return h = bo(i, t), e(p);
                    }
                    return h === T && (h = bo(i, t)), s;
                }
                var c, a, l, s, h, p, _ = 0, v = false, g = false, d = true;
                if (typeof n != 'function')
                    throw new ti('Expected a function');
                return t = Su(t) || 0, du(r) && (v = !!r.leading, l = (g = 'maxWait' in r) ? Li(Su(r.maxWait) || 0, t) : l, d = 'trailing' in r ? !!r.trailing : d), f.cancel = function () {
                    h !== T && lo(h), _ = 0, c = p = a = h = T;
                }, f.flush = function () {
                    return h === T ? s : o(Go());
                }, f;
            }
            function cu(n, t) {
                if (typeof n != 'function' || null != t && typeof t != 'function')
                    throw new ti('Expected a function');
                var r = function () {
                    var e = arguments, u = t ? t.apply(this, e) : e[0], i = r.cache;
                    return i.has(u) ? i.get(u) : (e = n.apply(this, e), r.cache = i.set(u, e) || i, e);
                };
                return r.cache = new (cu.Cache || Fn)(), r;
            }
            function au(n) {
                if (typeof n != 'function')
                    throw new ti('Expected a function');
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
            function lu(n, t) {
                return n === t || n !== n && t !== t;
            }
            function su(n) {
                return null != n && gu(n.length) && !_u(n);
            }
            function hu(n) {
                return yu(n) && su(n);
            }
            function pu(n) {
                if (!yu(n))
                    return false;
                var t = Ot(n);
                return '[object Error]' == t || '[object DOMException]' == t || typeof n.message == 'string' && typeof n.name == 'string' && !xu(n);
            }
            function _u(n) {
                return !!du(n) && (n = Ot(n), '[object Function]' == n || '[object GeneratorFunction]' == n || '[object AsyncFunction]' == n || '[object Proxy]' == n);
            }
            function vu(n) {
                return typeof n == 'number' && n == ku(n);
            }
            function gu(n) {
                return typeof n == 'number' && -1 < n && 0 == n % 1 && 9007199254740991 >= n;
            }
            function du(n) {
                var t = typeof n;
                return null != n && ('object' == t || 'function' == t);
            }
            function yu(n) {
                return null != n && typeof n == 'object';
            }
            function bu(n) {
                return typeof n == 'number' || yu(n) && '[object Number]' == Ot(n);
            }
            function xu(n) {
                return !(!yu(n) || '[object Object]' != Ot(n)) && (n = di(n), null === n || (n = oi.call(n, 'constructor') && n.constructor, typeof n == 'function' && n instanceof n && ii.call(n) == li));
            }
            function ju(n) {
                return typeof n == 'string' || !ff(n) && yu(n) && '[object String]' == Ot(n);
            }
            function wu(n) {
                return typeof n == 'symbol' || yu(n) && '[object Symbol]' == Ot(n);
            }
            function mu(n) {
                if (!n)
                    return [];
                if (su(n))
                    return ju(n) ? M(n) : Lr(n);
                if (wi && n[wi]) {
                    n = n[wi]();
                    for (var t, r = []; !(t = n.next()).done;)
                        r.push(t.value);
                    return r;
                }
                return t = vo(n), ('[object Map]' == t ? W : '[object Set]' == t ? L : Lu)(n);
            }
            function Au(n) {
                return n ? (n = Su(n), n === $ || n === -$ ? 1.7976931348623157e+308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0;
            }
            function ku(n) {
                n = Au(n);
                var t = n % 1;
                return n === n ? t ? n - t : n : 0;
            }
            function Eu(n) {
                return n ? pt(ku(n), 0, 4294967295) : 0;
            }
            function Su(n) {
                if (typeof n == 'number')
                    return n;
                if (wu(n))
                    return F;
                if (du(n) && (n = typeof n.valueOf == 'function' ? n.valueOf() : n, n = du(n) ? n + '' : n), typeof n != 'string')
                    return 0 === n ? n : +n;
                n = n.replace(un, '');
                var t = gn.test(n);
                return t || yn.test(n) ? Dn(n.slice(2), t ? 2 : 8) : vn.test(n) ? F : +n;
            }
            function Ou(n) {
                return Cr(n, Uu(n));
            }
            function Iu(n) {
                return null == n ? '' : yr(n);
            }
            function Ru(n, t, r) {
                return n = null == n ? T : Et(n, t), n === T ? r : n;
            }
            function zu(n, t) {
                return null != n && we(n, t, zt);
            }
            function Wu(n) {
                return su(n) ? qn(n) : Vt(n);
            }
            function Uu(n) {
                if (su(n))
                    n = qn(n, true);
                else if (du(n)) {
                    var t, r = ze(n), e = [];
                    for (t in n)
                        ('constructor' != t || !r && oi.call(n, t)) && e.push(t);
                    n = e;
                } else {
                    if (t = [], null != n)
                        for (r in Qu(n))
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
                return null == n ? [] : S(n, Wu(n));
            }
            function Cu(n) {
                return $f(Iu(n).toLowerCase());
            }
            function Du(n) {
                return (n = Iu(n)) && n.replace(xn, Xn).replace(Sn, '');
            }
            function Mu(n, t, r) {
                return n = Iu(n), t = r ? T : t, t === T ? zn.test(n) ? n.match(In) || [] : n.match(sn) || [] : n.match(t) || [];
            }
            function Tu(n) {
                return function () {
                    return n;
                };
            }
            function $u(n) {
                return n;
            }
            function Fu(n) {
                return qt(typeof n == 'function' ? n : _t(n, 1));
            }
            function Nu(n, t, e) {
                var u = Wu(t), i = kt(t, u);
                null != e || du(t) && (i.length || !u.length) || (e = t, t = n, n = this, i = kt(t, Wu(t)));
                var o = !(du(e) && 'chain' in e && !e.chain), f = _u(n);
                return r(i, function (r) {
                    var e = t[r];
                    n[r] = e, f && (n.prototype[r] = function () {
                        var t = this.__chain__;
                        if (o || t) {
                            var r = n(this.__wrapped__);
                            return (r.__actions__ = Lr(this.__actions__)).push({
                                func: e,
                                args: arguments,
                                thisArg: n
                            }), r.__chain__ = t, r;
                        }
                        return e.apply(n, a([this.value()], arguments));
                    });
                }), n;
            }
            function Pu() {
            }
            function Zu(n) {
                return Ie(n) ? b(Me(n)) : rr(n);
            }
            function qu() {
                return [];
            }
            function Vu() {
                return false;
            }
            mn = null == mn ? $n : rt.defaults($n.Object(), mn, rt.pick($n, Wn));
            var Ku = mn.Array, Gu = mn.Date, Hu = mn.Error, Ju = mn.Function, Yu = mn.Math, Qu = mn.Object, Xu = mn.RegExp, ni = mn.String, ti = mn.TypeError, ri = Ku.prototype, ei = Qu.prototype, ui = mn['__core-js_shared__'], ii = Ju.prototype.toString, oi = ei.hasOwnProperty, fi = 0, ci = function () {
                    var n = /[^.]+$/.exec(ui && ui.keys && ui.keys.IE_PROTO || '');
                    return n ? 'Symbol(src)_1.' + n : '';
                }(), ai = ei.toString, li = ii.call(Qu), si = $n._, hi = Xu('^' + ii.call(oi).replace(rn, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'), pi = Pn ? mn.Buffer : T, _i = mn.Symbol, vi = mn.Uint8Array, gi = pi ? pi.allocUnsafe : T, di = U(Qu.getPrototypeOf, Qu), yi = Qu.create, bi = ei.propertyIsEnumerable, xi = ri.splice, ji = _i ? _i.isConcatSpreadable : T, wi = _i ? _i.iterator : T, mi = _i ? _i.toStringTag : T, Ai = function () {
                    try {
                        var n = je(Qu, 'defineProperty');
                        return n({}, '', {}), n;
                    } catch (n) {
                    }
                }(), ki = mn.clearTimeout !== $n.clearTimeout && mn.clearTimeout, Ei = Gu && Gu.now !== $n.Date.now && Gu.now, Si = mn.setTimeout !== $n.setTimeout && mn.setTimeout, Oi = Yu.ceil, Ii = Yu.floor, Ri = Qu.getOwnPropertySymbols, zi = pi ? pi.isBuffer : T, Wi = mn.isFinite, Ui = ri.join, Bi = U(Qu.keys, Qu), Li = Yu.max, Ci = Yu.min, Di = Gu.now, Mi = mn.parseInt, Ti = Yu.random, $i = ri.reverse, Fi = je(mn, 'DataView'), Ni = je(mn, 'Map'), Pi = je(mn, 'Promise'), Zi = je(mn, 'Set'), qi = je(mn, 'WeakMap'), Vi = je(Qu, 'create'), Ki = qi && new qi(), Gi = {}, Hi = Te(Fi), Ji = Te(Ni), Yi = Te(Pi), Qi = Te(Zi), Xi = Te(qi), no = _i ? _i.prototype : T, to = no ? no.valueOf : T, ro = no ? no.toString : T, eo = function () {
                    function n() {
                    }
                    return function (t) {
                        return du(t) ? yi ? yi(t) : (n.prototype = t, t = new n(), n.prototype = T, t) : {};
                    };
                }();
            An.templateSettings = {
                escape: J,
                evaluate: Y,
                interpolate: Q,
                variable: '',
                imports: { _: An }
            }, An.prototype = kn.prototype, An.prototype.constructor = An, On.prototype = eo(kn.prototype), On.prototype.constructor = On, Ln.prototype = eo(kn.prototype), Ln.prototype.constructor = Ln, Mn.prototype.clear = function () {
                this.__data__ = Vi ? Vi(null) : {}, this.size = 0;
            }, Mn.prototype.delete = function (n) {
                return n = this.has(n) && delete this.__data__[n], this.size -= n ? 1 : 0, n;
            }, Mn.prototype.get = function (n) {
                var t = this.__data__;
                return Vi ? (n = t[n], '__lodash_hash_undefined__' === n ? T : n) : oi.call(t, n) ? t[n] : T;
            }, Mn.prototype.has = function (n) {
                var t = this.__data__;
                return Vi ? t[n] !== T : oi.call(t, n);
            }, Mn.prototype.set = function (n, t) {
                var r = this.__data__;
                return this.size += this.has(n) ? 0 : 1, r[n] = Vi && t === T ? '__lodash_hash_undefined__' : t, this;
            }, Tn.prototype.clear = function () {
                this.__data__ = [], this.size = 0;
            }, Tn.prototype.delete = function (n) {
                var t = this.__data__;
                return n = ft(t, n), !(0 > n) && (n == t.length - 1 ? t.pop() : xi.call(t, n, 1), --this.size, true);
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
                    map: new (Ni || Tn)(),
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
                    if (!Ni || 199 > e.length)
                        return e.push([
                            n,
                            t
                        ]), this.size = ++r.size, this;
                    r = this.__data__ = new Fn(e);
                }
                return r.set(n, t), this.size = r.size, this;
            };
            var uo = Fr(mt), io = Fr(At, true), oo = Nr(), fo = Nr(true), co = Ki ? function (n, t) {
                    return Ki.set(n, t), n;
                } : $u, ao = Ai ? function (n, t) {
                    return Ai(n, 'toString', {
                        configurable: true,
                        enumerable: false,
                        value: Tu(t),
                        writable: true
                    });
                } : $u, lo = ki || function (n) {
                    return $n.clearTimeout(n);
                }, so = Zi && 1 / L(new Zi([
                    ,
                    -0
                ]))[1] == $ ? function (n) {
                    return new Zi(n);
                } : Pu, ho = Ki ? function (n) {
                    return Ki.get(n);
                } : Pu, po = Ri ? function (n) {
                    return null == n ? [] : (n = Qu(n), i(Ri(n), function (t) {
                        return bi.call(n, t);
                    }));
                } : qu, _o = Ri ? function (n) {
                    for (var t = []; n;)
                        a(t, po(n)), n = di(n);
                    return t;
                } : qu, vo = Ot;
            (Fi && '[object DataView]' != vo(new Fi(new ArrayBuffer(1))) || Ni && '[object Map]' != vo(new Ni()) || Pi && '[object Promise]' != vo(Pi.resolve()) || Zi && '[object Set]' != vo(new Zi()) || qi && '[object WeakMap]' != vo(new qi())) && (vo = function (n) {
                var t = Ot(n);
                if (n = (n = '[object Object]' == t ? n.constructor : T) ? Te(n) : '')
                    switch (n) {
                    case Hi:
                        return '[object DataView]';
                    case Ji:
                        return '[object Map]';
                    case Yi:
                        return '[object Promise]';
                    case Qi:
                        return '[object Set]';
                    case Xi:
                        return '[object WeakMap]';
                    }
                return t;
            });
            var go = ui ? _u : Vu, yo = Ce(co), bo = Si || function (n, t) {
                    return $n.setTimeout(n, t);
                }, xo = Ce(ao), jo = function (n) {
                    n = cu(n, function (n) {
                        return 500 === t.size && t.clear(), n;
                    });
                    var t = n.cache;
                    return n;
                }(function (n) {
                    var t = [];
                    return 46 === n.charCodeAt(0) && t.push(''), n.replace(tn, function (n, r, e, u) {
                        t.push(e ? u.replace(hn, '$1') : r || n);
                    }), t;
                }), wo = fr(function (n, t) {
                    return hu(n) ? yt(n, wt(t, 1, hu, true)) : [];
                }), mo = fr(function (n, t) {
                    var r = Ve(t);
                    return hu(r) && (r = T), hu(n) ? yt(n, wt(t, 1, hu, true), ye(r, 2)) : [];
                }), Ao = fr(function (n, t) {
                    var r = Ve(t);
                    return hu(r) && (r = T), hu(n) ? yt(n, wt(t, 1, hu, true), T, r) : [];
                }), ko = fr(function (n) {
                    var t = c(n, kr);
                    return t.length && t[0] === n[0] ? Wt(t) : [];
                }), Eo = fr(function (n) {
                    var t = Ve(n), r = c(n, kr);
                    return t === Ve(r) ? t = T : r.pop(), r.length && r[0] === n[0] ? Wt(r, ye(t, 2)) : [];
                }), So = fr(function (n) {
                    var t = Ve(n), r = c(n, kr);
                    return (t = typeof t == 'function' ? t : T) && r.pop(), r.length && r[0] === n[0] ? Wt(r, T, t) : [];
                }), Oo = fr(Ke), Io = pe(function (n, t) {
                    var r = null == n ? 0 : n.length, e = ht(n, t);
                    return ur(n, c(t, function (n) {
                        return Se(n, r) ? +n : n;
                    }).sort(Wr)), e;
                }), Ro = fr(function (n) {
                    return br(wt(n, 1, hu, true));
                }), zo = fr(function (n) {
                    var t = Ve(n);
                    return hu(t) && (t = T), br(wt(n, 1, hu, true), ye(t, 2));
                }), Wo = fr(function (n) {
                    var t = Ve(n), t = typeof t == 'function' ? t : T;
                    return br(wt(n, 1, hu, true), T, t);
                }), Uo = fr(function (n, t) {
                    return hu(n) ? yt(n, t) : [];
                }), Bo = fr(function (n) {
                    return mr(i(n, hu));
                }), Lo = fr(function (n) {
                    var t = Ve(n);
                    return hu(t) && (t = T), mr(i(n, hu), ye(t, 2));
                }), Co = fr(function (n) {
                    var t = Ve(n), t = typeof t == 'function' ? t : T;
                    return mr(i(n, hu), T, t);
                }), Do = fr(He), Mo = fr(function (n) {
                    var t = n.length, t = 1 < t ? n[t - 1] : T, t = typeof t == 'function' ? (n.pop(), t) : T;
                    return Je(n, t);
                }), To = pe(function (n) {
                    var t = n.length, r = t ? n[0] : 0, e = this.__wrapped__, u = function (t) {
                            return ht(t, n);
                        };
                    return !(1 < t || this.__actions__.length) && e instanceof Ln && Se(r) ? (e = e.slice(r, +r + (t ? 1 : 0)), e.__actions__.push({
                        func: Qe,
                        args: [u],
                        thisArg: T
                    }), new On(e, this.__chain__).thru(function (n) {
                        return t && !n.length && n.push(T), n;
                    })) : this.thru(u);
                }), $o = Tr(function (n, t, r) {
                    oi.call(n, r) ? ++n[r] : st(n, r, 1);
                }), Fo = Gr(Ne), No = Gr(Pe), Po = Tr(function (n, t, r) {
                    oi.call(n, r) ? n[r].push(t) : st(n, r, [t]);
                }), Zo = fr(function (t, r, e) {
                    var u = -1, i = typeof r == 'function', o = su(t) ? Ku(t.length) : [];
                    return uo(t, function (t) {
                        o[++u] = i ? n(r, t, e) : Bt(t, r, e);
                    }), o;
                }), qo = Tr(function (n, t, r) {
                    st(n, r, t);
                }), Vo = Tr(function (n, t, r) {
                    n[r ? 0 : 1].push(t);
                }, function () {
                    return [
                        [],
                        []
                    ];
                }), Ko = fr(function (n, t) {
                    if (null == n)
                        return [];
                    var r = t.length;
                    return 1 < r && Oe(n, t[0], t[1]) ? t = [] : 2 < r && Oe(t[0], t[1], t[2]) && (t = [t[0]]), Xt(n, wt(t, 1), []);
                }), Go = Ei || function () {
                    return $n.Date.now();
                }, Ho = fr(function (n, t, r) {
                    var e = 1;
                    if (r.length)
                        var u = B(r, de(Ho)), e = 32 | e;
                    return fe(n, e, t, r, u);
                }), Jo = fr(function (n, t, r) {
                    var e = 3;
                    if (r.length)
                        var u = B(r, de(Jo)), e = 32 | e;
                    return fe(t, e, n, r, u);
                }), Yo = fr(function (n, t) {
                    return dt(n, 1, t);
                }), Qo = fr(function (n, t, r) {
                    return dt(n, Su(t) || 0, r);
                });
            cu.Cache = Fn;
            var Xo = fr(function (t, r) {
                    r = 1 == r.length && ff(r[0]) ? c(r[0], E(ye())) : c(wt(r, 1), E(ye()));
                    var e = r.length;
                    return fr(function (u) {
                        for (var i = -1, o = Ci(u.length, e); ++i < o;)
                            u[i] = r[i].call(this, u[i]);
                        return n(t, this, u);
                    });
                }), nf = fr(function (n, t) {
                    return fe(n, 32, T, t, B(t, de(nf)));
                }), tf = fr(function (n, t) {
                    return fe(n, 64, T, t, B(t, de(tf)));
                }), rf = pe(function (n, t) {
                    return fe(n, 256, T, T, T, t);
                }), ef = ee(It), uf = ee(function (n, t) {
                    return n >= t;
                }), of = Lt(function () {
                    return arguments;
                }()) ? Lt : function (n) {
                    return yu(n) && oi.call(n, 'callee') && !bi.call(n, 'callee');
                }, ff = Ku.isArray, cf = Vn ? E(Vn) : Ct, af = zi || Vu, lf = Kn ? E(Kn) : Dt, sf = Gn ? E(Gn) : Tt, hf = Hn ? E(Hn) : Nt, pf = Jn ? E(Jn) : Pt, _f = Yn ? E(Yn) : Zt, vf = ee(Kt), gf = ee(function (n, t) {
                    return n <= t;
                }), df = $r(function (n, t) {
                    if (ze(t) || su(t))
                        Cr(t, Wu(t), n);
                    else
                        for (var r in t)
                            oi.call(t, r) && ot(n, r, t[r]);
                }), yf = $r(function (n, t) {
                    Cr(t, Uu(t), n);
                }), bf = $r(function (n, t, r, e) {
                    Cr(t, Uu(t), n, e);
                }), xf = $r(function (n, t, r, e) {
                    Cr(t, Wu(t), n, e);
                }), jf = pe(ht), wf = fr(function (n, t) {
                    n = Qu(n);
                    var r = -1, e = t.length, u = 2 < e ? t[2] : T;
                    for (u && Oe(t[0], t[1], u) && (e = 1); ++r < e;)
                        for (var u = t[r], i = Uu(u), o = -1, f = i.length; ++o < f;) {
                            var c = i[o], a = n[c];
                            (a === T || lu(a, ei[c]) && !oi.call(n, c)) && (n[c] = u[c]);
                        }
                    return n;
                }), mf = fr(function (t) {
                    return t.push(T, ae), n(Of, T, t);
                }), Af = Yr(function (n, t, r) {
                    null != t && typeof t.toString != 'function' && (t = ai.call(t)), n[t] = r;
                }, Tu($u)), kf = Yr(function (n, t, r) {
                    null != t && typeof t.toString != 'function' && (t = ai.call(t)), oi.call(n, t) ? n[t].push(r) : n[t] = [r];
                }, ye), Ef = fr(Bt), Sf = $r(function (n, t, r) {
                    Yt(n, t, r);
                }), Of = $r(function (n, t, r, e) {
                    Yt(n, t, r, e);
                }), If = pe(function (n, t) {
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
                }), Rf = pe(function (n, t) {
                    return null == n ? {} : nr(n, t);
                }), zf = oe(Wu), Wf = oe(Uu), Uf = qr(function (n, t, r) {
                    return t = t.toLowerCase(), n + (r ? Cu(t) : t);
                }), Bf = qr(function (n, t, r) {
                    return n + (r ? '-' : '') + t.toLowerCase();
                }), Lf = qr(function (n, t, r) {
                    return n + (r ? ' ' : '') + t.toLowerCase();
                }), Cf = Zr('toLowerCase'), Df = qr(function (n, t, r) {
                    return n + (r ? '_' : '') + t.toLowerCase();
                }), Mf = qr(function (n, t, r) {
                    return n + (r ? ' ' : '') + $f(t);
                }), Tf = qr(function (n, t, r) {
                    return n + (r ? ' ' : '') + t.toUpperCase();
                }), $f = Zr('toUpperCase'), Ff = fr(function (t, r) {
                    try {
                        return n(t, T, r);
                    } catch (n) {
                        return pu(n) ? n : new Hu(n);
                    }
                }), Nf = pe(function (n, t) {
                    return r(t, function (t) {
                        t = Me(t), st(n, t, Ho(n[t], n));
                    }), n;
                }), Pf = Hr(), Zf = Hr(true), qf = fr(function (n, t) {
                    return function (r) {
                        return Bt(r, n, t);
                    };
                }), Vf = fr(function (n, t) {
                    return function (r) {
                        return Bt(n, r, t);
                    };
                }), Kf = Xr(c), Gf = Xr(u), Hf = Xr(h), Jf = re(), Yf = re(true), Qf = Qr(function (n, t) {
                    return n + t;
                }, 0), Xf = ie('ceil'), nc = Qr(function (n, t) {
                    return n / t;
                }, 1), tc = ie('floor'), rc = Qr(function (n, t) {
                    return n * t;
                }, 1), ec = ie('round'), uc = Qr(function (n, t) {
                    return n - t;
                }, 0);
            return An.after = function (n, t) {
                if (typeof t != 'function')
                    throw new ti('Expected a function');
                return n = ku(n), function () {
                    if (1 > --n)
                        return t.apply(this, arguments);
                };
            }, An.ary = eu, An.assign = df, An.assignIn = yf, An.assignInWith = bf, An.assignWith = xf, An.at = jf, An.before = uu, An.bind = Ho, An.bindAll = Nf, An.bindKey = Jo, An.castArray = function () {
                if (!arguments.length)
                    return [];
                var n = arguments[0];
                return ff(n) ? n : [n];
            }, An.chain = Ye, An.chunk = function (n, t, r) {
                if (t = (r ? Oe(n, t, r) : t === T) ? 1 : Li(ku(t), 0), r = null == n ? 0 : n.length, !r || 1 > t)
                    return [];
                for (var e = 0, u = 0, i = Ku(Oi(r / t)); e < r;)
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
                for (var t = Ku(n - 1), r = arguments[0]; n--;)
                    t[n - 1] = arguments[n];
                return a(ff(r) ? Lr(r) : [r], wt(t, 1));
            }, An.cond = function (t) {
                var r = null == t ? 0 : t.length, e = ye();
                return t = r ? c(t, function (n) {
                    if ('function' != typeof n[1])
                        throw new ti('Expected a function');
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
            }, An.constant = Tu, An.countBy = $o, An.create = function (n, t) {
                var r = eo(n);
                return null == t ? r : at(r, t);
            }, An.curry = iu, An.curryRight = ou, An.debounce = fu, An.defaults = wf, An.defaultsDeep = mf, An.defer = Yo, An.delay = Qo, An.difference = wo, An.differenceBy = mo, An.differenceWith = Ao, An.drop = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === T ? 1 : ku(t), hr(n, 0 > t ? 0 : t, e)) : [];
            }, An.dropRight = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === T ? 1 : ku(t), t = e - t, hr(n, 0, 0 > t ? 0 : t)) : [];
            }, An.dropRightWhile = function (n, t) {
                return n && n.length ? jr(n, ye(t, 3), true, true) : [];
            }, An.dropWhile = function (n, t) {
                return n && n.length ? jr(n, ye(t, 3), true) : [];
            }, An.fill = function (n, t, r, e) {
                var u = null == n ? 0 : n.length;
                if (!u)
                    return [];
                for (r && typeof r != 'number' && Oe(n, t, r) && (r = 0, e = u), u = n.length, r = ku(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === T || e > u ? u : ku(e), 0 > e && (e += u), e = r > e ? 0 : Eu(e); r < e;)
                    n[r++] = t;
                return n;
            }, An.filter = function (n, t) {
                return (ff(n) ? i : jt)(n, ye(t, 3));
            }, An.flatMap = function (n, t) {
                return wt(ru(n, t), 1);
            }, An.flatMapDeep = function (n, t) {
                return wt(ru(n, t), $);
            }, An.flatMapDepth = function (n, t, r) {
                return r = r === T ? 1 : ku(r), wt(ru(n, t), r);
            }, An.flatten = Ze, An.flattenDeep = function (n) {
                return (null == n ? 0 : n.length) ? wt(n, $) : [];
            }, An.flattenDepth = function (n, t) {
                return null != n && n.length ? (t = t === T ? 1 : ku(t), wt(n, t)) : [];
            }, An.flip = function (n) {
                return fe(n, 512);
            }, An.flow = Pf, An.flowRight = Zf, An.fromPairs = function (n) {
                for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
                    var u = n[t];
                    e[u[0]] = u[1];
                }
                return e;
            }, An.functions = function (n) {
                return null == n ? [] : kt(n, Wu(n));
            }, An.functionsIn = function (n) {
                return null == n ? [] : kt(n, Uu(n));
            }, An.groupBy = Po, An.initial = function (n) {
                return (null == n ? 0 : n.length) ? hr(n, 0, -1) : [];
            }, An.intersection = ko, An.intersectionBy = Eo, An.intersectionWith = So, An.invert = Af, An.invertBy = kf, An.invokeMap = Zo, An.iteratee = Fu, An.keyBy = qo, An.keys = Wu, An.keysIn = Uu, An.map = ru, An.mapKeys = function (n, t) {
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
            }, An.memoize = cu, An.merge = Sf, An.mergeWith = Of, An.method = qf, An.methodOf = Vf, An.mixin = Nu, An.negate = au, An.nthArg = function (n) {
                return n = ku(n), fr(function (t) {
                    return Qt(t, n);
                });
            }, An.omit = If, An.omitBy = function (n, t) {
                return Bu(n, au(ye(t)));
            }, An.once = function (n) {
                return uu(2, n);
            }, An.orderBy = function (n, t, r, e) {
                return null == n ? [] : (ff(t) || (t = null == t ? [] : [t]), r = e ? T : r, ff(r) || (r = null == r ? [] : [r]), Xt(n, t, r));
            }, An.over = Kf, An.overArgs = Xo, An.overEvery = Gf, An.overSome = Hf, An.partial = nf, An.partialRight = tf, An.partition = Vo, An.pick = Rf, An.pickBy = Bu, An.property = Zu, An.propertyOf = function (n) {
                return function (t) {
                    return null == n ? T : Et(n, t);
                };
            }, An.pull = Oo, An.pullAll = Ke, An.pullAllBy = function (n, t, r) {
                return n && n.length && t && t.length ? er(n, t, ye(r, 2)) : n;
            }, An.pullAllWith = function (n, t, r) {
                return n && n.length && t && t.length ? er(n, t, T, r) : n;
            }, An.pullAt = Io, An.range = Jf, An.rangeRight = Yf, An.rearg = rf, An.reject = function (n, t) {
                return (ff(n) ? i : jt)(n, au(ye(t, 3)));
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
                    throw new ti('Expected a function');
                return t = t === T ? t : ku(t), fr(n, t);
            }, An.reverse = Ge, An.sampleSize = function (n, t, r) {
                return t = (r ? Oe(n, t, r) : t === T) ? 1 : ku(t), (ff(n) ? et : ar)(n, t);
            }, An.set = function (n, t, r) {
                return null == n ? n : lr(n, t, r);
            }, An.setWith = function (n, t, r, e) {
                return e = typeof e == 'function' ? e : T, null == n ? n : lr(n, t, r, e);
            }, An.shuffle = function (n) {
                return (ff(n) ? ut : sr)(n);
            }, An.slice = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r && typeof r != 'number' && Oe(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : ku(t), r = r === T ? e : ku(r)), hr(n, t, r)) : [];
            }, An.sortBy = Ko, An.sortedUniq = function (n) {
                return n && n.length ? gr(n) : [];
            }, An.sortedUniqBy = function (n, t) {
                return n && n.length ? gr(n, ye(t, 2)) : [];
            }, An.split = function (n, t, r) {
                return r && typeof r != 'number' && Oe(n, t, r) && (t = r = T), r = r === T ? 4294967295 : r >>> 0, r ? (n = Iu(n)) && (typeof t == 'string' || null != t && !hf(t)) && (t = yr(t), !t && Rn.test(n)) ? Or(M(n), 0, r) : n.split(t, r) : [];
            }, An.spread = function (t, r) {
                if (typeof t != 'function')
                    throw new ti('Expected a function');
                return r = null == r ? 0 : Li(ku(r), 0), fr(function (e) {
                    var u = e[r];
                    return e = Or(e, 0, r), u && a(e, u), n(t, this, e);
                });
            }, An.tail = function (n) {
                var t = null == n ? 0 : n.length;
                return t ? hr(n, 1, t) : [];
            }, An.take = function (n, t, r) {
                return n && n.length ? (t = r || t === T ? 1 : ku(t), hr(n, 0, 0 > t ? 0 : t)) : [];
            }, An.takeRight = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === T ? 1 : ku(t), t = e - t, hr(n, 0 > t ? 0 : t, e)) : [];
            }, An.takeRightWhile = function (n, t) {
                return n && n.length ? jr(n, ye(t, 3), false, true) : [];
            }, An.takeWhile = function (n, t) {
                return n && n.length ? jr(n, ye(t, 3)) : [];
            }, An.tap = function (n, t) {
                return t(n), n;
            }, An.throttle = function (n, t, r) {
                var e = true, u = true;
                if (typeof n != 'function')
                    throw new ti('Expected a function');
                return du(r) && (e = 'leading' in r ? !!r.leading : e, u = 'trailing' in r ? !!r.trailing : u), fu(n, t, {
                    leading: e,
                    maxWait: t,
                    trailing: u
                });
            }, An.thru = Qe, An.toArray = mu, An.toPairs = zf, An.toPairsIn = Wf, An.toPath = function (n) {
                return ff(n) ? c(n, Me) : wu(n) ? [n] : Lr(jo(Iu(n)));
            }, An.toPlainObject = Ou, An.transform = function (n, t, e) {
                var u = ff(n), i = u || af(n) || _f(n);
                if (t = ye(t, 4), null == e) {
                    var o = n && n.constructor;
                    e = i ? u ? new o() : [] : du(n) && _u(o) ? eo(di(n)) : {};
                }
                return (i ? r : mt)(n, function (n, r, u) {
                    return t(e, n, r, u);
                }), e;
            }, An.unary = function (n) {
                return eu(n, 1);
            }, An.union = Ro, An.unionBy = zo, An.unionWith = Wo, An.uniq = function (n) {
                return n && n.length ? br(n) : [];
            }, An.uniqBy = function (n, t) {
                return n && n.length ? br(n, ye(t, 2)) : [];
            }, An.uniqWith = function (n, t) {
                return t = typeof t == 'function' ? t : T, n && n.length ? br(n, T, t) : [];
            }, An.unset = function (n, t) {
                return null == n || xr(n, t);
            }, An.unzip = He, An.unzipWith = Je, An.update = function (n, t, r) {
                return null != n && (r = Er(r), n = lr(n, t, r(Et(n, t)), void 0)), n;
            }, An.updateWith = function (n, t, r, e) {
                return e = typeof e == 'function' ? e : T, null != n && (r = Er(r), n = lr(n, t, r(Et(n, t)), e)), n;
            }, An.values = Lu, An.valuesIn = function (n) {
                return null == n ? [] : S(n, Uu(n));
            }, An.without = Uo, An.words = Mu, An.wrap = function (n, t) {
                return nf(Er(t), n);
            }, An.xor = Bo, An.xorBy = Lo, An.xorWith = Co, An.zip = Do, An.zipObject = function (n, t) {
                return Ar(n || [], t || [], ot);
            }, An.zipObjectDeep = function (n, t) {
                return Ar(n || [], t || [], lr);
            }, An.zipWith = Mo, An.entries = zf, An.entriesIn = Wf, An.extend = yf, An.extendWith = bf, Nu(An, An), An.add = Qf, An.attempt = Ff, An.camelCase = Uf, An.capitalize = Cu, An.ceil = Xf, An.clamp = function (n, t, r) {
                return r === T && (r = t, t = T), r !== T && (r = Su(r), r = r === r ? r : 0), t !== T && (t = Su(t), t = t === t ? t : 0), pt(Su(n), t, r);
            }, An.clone = function (n) {
                return _t(n, 4);
            }, An.cloneDeep = function (n) {
                return _t(n, 5);
            }, An.cloneDeepWith = function (n, t) {
                return t = typeof t == 'function' ? t : T, _t(n, 5, t);
            }, An.cloneWith = function (n, t) {
                return t = typeof t == 'function' ? t : T, _t(n, 4, t);
            }, An.conformsTo = function (n, t) {
                return null == t || gt(n, t, Wu(t));
            }, An.deburr = Du, An.defaultTo = function (n, t) {
                return null == n || n !== n ? t : n;
            }, An.divide = nc, An.endsWith = function (n, t, r) {
                n = Iu(n), t = yr(t);
                var e = n.length, e = r = r === T ? e : pt(ku(r), 0, e);
                return r -= t.length, 0 <= r && n.slice(r, e) == t;
            }, An.eq = lu, An.escape = function (n) {
                return (n = Iu(n)) && H.test(n) ? n.replace(K, nt) : n;
            }, An.escapeRegExp = function (n) {
                return (n = Iu(n)) && en.test(n) ? n.replace(rn, '\\$&') : n;
            }, An.every = function (n, t, r) {
                var e = ff(n) ? u : bt;
                return r && Oe(n, t, r) && (t = T), e(n, ye(t, 3));
            }, An.find = Fo, An.findIndex = Ne, An.findKey = function (n, t) {
                return p(n, ye(t, 3), mt);
            }, An.findLast = No, An.findLastIndex = Pe, An.findLastKey = function (n, t) {
                return p(n, ye(t, 3), At);
            }, An.floor = tc, An.forEach = nu, An.forEachRight = tu, An.forIn = function (n, t) {
                return null == n ? n : oo(n, ye(t, 3), Uu);
            }, An.forInRight = function (n, t) {
                return null == n ? n : fo(n, ye(t, 3), Uu);
            }, An.forOwn = function (n, t) {
                return n && mt(n, ye(t, 3));
            }, An.forOwnRight = function (n, t) {
                return n && At(n, ye(t, 3));
            }, An.get = Ru, An.gt = ef, An.gte = uf, An.has = function (n, t) {
                return null != n && we(n, t, Rt);
            }, An.hasIn = zu, An.head = qe, An.identity = $u, An.includes = function (n, t, r, e) {
                return n = su(n) ? n : Lu(n), r = r && !e ? ku(r) : 0, e = n.length, 0 > r && (r = Li(e + r, 0)), ju(n) ? r <= e && -1 < n.indexOf(t, r) : !!e && -1 < v(n, t, r);
            }, An.indexOf = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r = null == r ? 0 : ku(r), 0 > r && (r = Li(e + r, 0)), v(n, t, r)) : -1;
            }, An.inRange = function (n, t, r) {
                return t = Au(t), r === T ? (r = t, t = 0) : r = Au(r), n = Su(n), n >= Ci(t, r) && n < Li(t, r);
            }, An.invoke = Ef, An.isArguments = of, An.isArray = ff, An.isArrayBuffer = cf, An.isArrayLike = su, An.isArrayLikeObject = hu, An.isBoolean = function (n) {
                return true === n || false === n || yu(n) && '[object Boolean]' == Ot(n);
            }, An.isBuffer = af, An.isDate = lf, An.isElement = function (n) {
                return yu(n) && 1 === n.nodeType && !xu(n);
            }, An.isEmpty = function (n) {
                if (null == n)
                    return true;
                if (su(n) && (ff(n) || typeof n == 'string' || typeof n.splice == 'function' || af(n) || _f(n) || of(n)))
                    return !n.length;
                var t = vo(n);
                if ('[object Map]' == t || '[object Set]' == t)
                    return !n.size;
                if (ze(n))
                    return !Vt(n).length;
                for (var r in n)
                    if (oi.call(n, r))
                        return false;
                return true;
            }, An.isEqual = function (n, t) {
                return Mt(n, t);
            }, An.isEqualWith = function (n, t, r) {
                var e = (r = typeof r == 'function' ? r : T) ? r(n, t) : T;
                return e === T ? Mt(n, t, T, r) : !!e;
            }, An.isError = pu, An.isFinite = function (n) {
                return typeof n == 'number' && Wi(n);
            }, An.isFunction = _u, An.isInteger = vu, An.isLength = gu, An.isMap = sf, An.isMatch = function (n, t) {
                return n === t || $t(n, t, xe(t));
            }, An.isMatchWith = function (n, t, r) {
                return r = typeof r == 'function' ? r : T, $t(n, t, xe(t), r);
            }, An.isNaN = function (n) {
                return bu(n) && n != +n;
            }, An.isNative = function (n) {
                if (go(n))
                    throw new Hu('Unsupported core-js use. Try https://npms.io/search?q=ponyfill.');
                return Ft(n);
            }, An.isNil = function (n) {
                return null == n;
            }, An.isNull = function (n) {
                return null === n;
            }, An.isNumber = bu, An.isObject = du, An.isObjectLike = yu, An.isPlainObject = xu, An.isRegExp = hf, An.isSafeInteger = function (n) {
                return vu(n) && -9007199254740991 <= n && 9007199254740991 >= n;
            }, An.isSet = pf, An.isString = ju, An.isSymbol = wu, An.isTypedArray = _f, An.isUndefined = function (n) {
                return n === T;
            }, An.isWeakMap = function (n) {
                return yu(n) && '[object WeakMap]' == vo(n);
            }, An.isWeakSet = function (n) {
                return yu(n) && '[object WeakSet]' == Ot(n);
            }, An.join = function (n, t) {
                return null == n ? '' : Ui.call(n, t);
            }, An.kebabCase = Bf, An.last = Ve, An.lastIndexOf = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e)
                    return -1;
                var u = e;
                if (r !== T && (u = ku(r), u = 0 > u ? Li(e + u, 0) : Ci(u, e - 1)), t === t)
                    n: {
                        for (r = u + 1; r--;)
                            if (n[r] === t) {
                                n = r;
                                break n;
                            }
                        n = r;
                    }
                else
                    n = _(n, d, u, true);
                return n;
            }, An.lowerCase = Lf, An.lowerFirst = Cf, An.lt = vf, An.lte = gf, An.max = function (n) {
                return n && n.length ? xt(n, $u, It) : T;
            }, An.maxBy = function (n, t) {
                return n && n.length ? xt(n, ye(t, 2), It) : T;
            }, An.mean = function (n) {
                return y(n, $u);
            }, An.meanBy = function (n, t) {
                return y(n, ye(t, 2));
            }, An.min = function (n) {
                return n && n.length ? xt(n, $u, Kt) : T;
            }, An.minBy = function (n, t) {
                return n && n.length ? xt(n, ye(t, 2), Kt) : T;
            }, An.stubArray = qu, An.stubFalse = Vu, An.stubObject = function () {
                return {};
            }, An.stubString = function () {
                return '';
            }, An.stubTrue = function () {
                return true;
            }, An.multiply = rc, An.nth = function (n, t) {
                return n && n.length ? Qt(n, ku(t)) : T;
            }, An.noConflict = function () {
                return $n._ === this && ($n._ = si), this;
            }, An.noop = Pu, An.now = Go, An.pad = function (n, t, r) {
                n = Iu(n);
                var e = (t = ku(t)) ? D(n) : 0;
                return !t || e >= t ? n : (t = (t - e) / 2, ne(Ii(t), r) + n + ne(Oi(t), r));
            }, An.padEnd = function (n, t, r) {
                n = Iu(n);
                var e = (t = ku(t)) ? D(n) : 0;
                return t && e < t ? n + ne(t - e, r) : n;
            }, An.padStart = function (n, t, r) {
                n = Iu(n);
                var e = (t = ku(t)) ? D(n) : 0;
                return t && e < t ? ne(t - e, r) + n : n;
            }, An.parseInt = function (n, t, r) {
                return r || null == t ? t = 0 : t && (t = +t), Mi(Iu(n).replace(on, ''), t || 0);
            }, An.random = function (n, t, r) {
                if (r && typeof r != 'boolean' && Oe(n, t, r) && (t = r = T), r === T && (typeof t == 'boolean' ? (r = t, t = T) : typeof n == 'boolean' && (r = n, n = T)), n === T && t === T ? (n = 0, t = 1) : (n = Au(n), t === T ? (t = n, n = 0) : t = Au(t)), n > t) {
                    var e = n;
                    n = t, t = e;
                }
                return r || n % 1 || t % 1 ? (r = Ti(), Ci(n + r * (t - n + Cn('1e-' + ((r + '').length - 1))), t)) : ir(n, t);
            }, An.reduce = function (n, t, r) {
                var e = ff(n) ? l : j, u = 3 > arguments.length;
                return e(n, ye(t, 4), r, u, uo);
            }, An.reduceRight = function (n, t, r) {
                var e = ff(n) ? s : j, u = 3 > arguments.length;
                return e(n, ye(t, 4), r, u, io);
            }, An.repeat = function (n, t, r) {
                return t = (r ? Oe(n, t, r) : t === T) ? 1 : ku(t), or(Iu(n), t);
            }, An.replace = function () {
                var n = arguments, t = Iu(n[0]);
                return 3 > n.length ? t : t.replace(n[1], n[2]);
            }, An.result = function (n, t, r) {
                t = Sr(t, n);
                var e = -1, u = t.length;
                for (u || (u = 1, n = T); ++e < u;) {
                    var i = null == n ? T : n[Me(t[e])];
                    i === T && (e = u, i = r), n = _u(i) ? i.call(n) : i;
                }
                return n;
            }, An.round = ec, An.runInContext = x, An.sample = function (n) {
                return (ff(n) ? Qn : cr)(n);
            }, An.size = function (n) {
                if (null == n)
                    return 0;
                if (su(n))
                    return ju(n) ? D(n) : n.length;
                var t = vo(n);
                return '[object Map]' == t || '[object Set]' == t ? n.size : Vt(n).length;
            }, An.snakeCase = Df, An.some = function (n, t, r) {
                var e = ff(n) ? h : pr;
                return r && Oe(n, t, r) && (t = T), e(n, ye(t, 3));
            }, An.sortedIndex = function (n, t) {
                return _r(n, t);
            }, An.sortedIndexBy = function (n, t, r) {
                return vr(n, t, ye(r, 2));
            }, An.sortedIndexOf = function (n, t) {
                var r = null == n ? 0 : n.length;
                if (r) {
                    var e = _r(n, t);
                    if (e < r && lu(n[e], t))
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
                    if (lu(n[r], t))
                        return r;
                }
                return -1;
            }, An.startCase = Mf, An.startsWith = function (n, t, r) {
                return n = Iu(n), r = null == r ? 0 : pt(ku(r), 0, n.length), t = yr(t), n.slice(r, r + t.length) == t;
            }, An.subtract = uc, An.sum = function (n) {
                return n && n.length ? m(n, $u) : 0;
            }, An.sumBy = function (n, t) {
                return n && n.length ? m(n, ye(t, 2)) : 0;
            }, An.template = function (n, t, r) {
                var e = An.templateSettings;
                r && Oe(n, t, r) && (t = T), n = Iu(n), t = bf({}, t, e, ce), r = bf({}, t.imports, e.imports, ce);
                var u, i, o = Wu(r), f = S(r, o), c = 0;
                r = t.interpolate || jn;
                var a = '__p+=\'';
                r = Xu((t.escape || jn).source + '|' + r.source + '|' + (r === Q ? pn : jn).source + '|' + (t.evaluate || jn).source + '|$', 'g');
                var l = 'sourceURL' in t ? '//# sourceURL=' + t.sourceURL + '\n' : '';
                if (n.replace(r, function (t, r, e, o, f, l) {
                        return e || (e = o), a += n.slice(c, l).replace(wn, z), r && (u = true, a += '\'+__e(' + r + ')+\''), f && (i = true, a += '\';' + f + ';\n__p+=\''), e && (a += '\'+((__t=(' + e + '))==null?\'\':__t)+\''), c = l + t.length, t;
                    }), a += '\';', (t = t.variable) || (a = 'with(obj){' + a + '}'), a = (i ? a.replace(P, '') : a).replace(Z, '$1').replace(q, '$1;'), a = 'function(' + (t || 'obj') + '){' + (t ? '' : 'obj||(obj={});') + 'var __t,__p=\'\'' + (u ? ',__e=_.escape' : '') + (i ? ',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,\'\')}' : ';') + a + 'return __p}', t = Ff(function () {
                        return Ju(o, l + 'return ' + a).apply(T, f);
                    }), t.source = a, pu(t))
                    throw t;
                return t;
            }, An.times = function (n, t) {
                if (n = ku(n), 1 > n || 9007199254740991 < n)
                    return [];
                var r = 4294967295, e = Ci(n, 4294967295);
                for (t = ye(t), n -= 4294967295, e = A(e, t); ++r < n;)
                    t(r);
                return e;
            }, An.toFinite = Au, An.toInteger = ku, An.toLength = Eu, An.toLower = function (n) {
                return Iu(n).toLowerCase();
            }, An.toNumber = Su, An.toSafeInteger = function (n) {
                return n ? pt(ku(n), -9007199254740991, 9007199254740991) : 0 === n ? n : 0;
            }, An.toString = Iu, An.toUpper = function (n) {
                return Iu(n).toUpperCase();
            }, An.trim = function (n, t, r) {
                return (n = Iu(n)) && (r || t === T) ? n.replace(un, '') : n && (t = yr(t)) ? (n = M(n), r = M(t), t = I(n, r), r = R(n, r) + 1, Or(n, t, r).join('')) : n;
            }, An.trimEnd = function (n, t, r) {
                return (n = Iu(n)) && (r || t === T) ? n.replace(fn, '') : n && (t = yr(t)) ? (n = M(n), t = R(n, M(t)) + 1, Or(n, 0, t).join('')) : n;
            }, An.trimStart = function (n, t, r) {
                return (n = Iu(n)) && (r || t === T) ? n.replace(on, '') : n && (t = yr(t)) ? (n = M(n), t = I(n, M(t)), Or(n, t).join('')) : n;
            }, An.truncate = function (n, t) {
                var r = 30, e = '...';
                if (du(t))
                    var u = 'separator' in t ? t.separator : u, r = 'length' in t ? ku(t.length) : r, e = 'omission' in t ? yr(t.omission) : e;
                n = Iu(n);
                var i = n.length;
                if (Rn.test(n))
                    var o = M(n), i = o.length;
                if (r >= i)
                    return n;
                if (i = r - D(e), 1 > i)
                    return e;
                if (r = o ? Or(o, 0, i).join('') : n.slice(0, i), u === T)
                    return r + e;
                if (o && (i += r.length - i), hf(u)) {
                    if (n.slice(i).search(u)) {
                        var f = r;
                        for (u.global || (u = Xu(u.source, Iu(_n.exec(u)) + 'g')), u.lastIndex = 0; o = u.exec(f);)
                            var c = o.index;
                        r = r.slice(0, c === T ? i : c);
                    }
                } else
                    n.indexOf(yr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));
                return r + e;
            }, An.unescape = function (n) {
                return (n = Iu(n)) && G.test(n) ? n.replace(V, tt) : n;
            }, An.uniqueId = function (n) {
                var t = ++fi;
                return Iu(n) + t;
            }, An.upperCase = Tf, An.upperFirst = $f, An.each = nu, An.eachRight = tu, An.first = qe, Nu(An, function () {
                var n = {};
                return mt(An, function (t, r) {
                    oi.call(An.prototype, r) || (n[r] = t);
                }), n;
            }(), { chain: false }), An.VERSION = '4.17.11', r('bind bindKey curry curryRight partial partialRight'.split(' '), function (n) {
                An[n].placeholder = An;
            }), r([
                'drop',
                'take'
            ], function (n, t) {
                Ln.prototype[n] = function (r) {
                    r = r === T ? 1 : Li(ku(r), 0);
                    var e = this.__filtered__ && !t ? new Ln(this) : this.clone();
                    return e.__filtered__ ? e.__takeCount__ = Ci(r, e.__takeCount__) : e.__views__.push({
                        size: Ci(r, 4294967295),
                        type: n + (0 > e.__dir__ ? 'Right' : '')
                    }), e;
                }, Ln.prototype[n + 'Right'] = function (t) {
                    return this.reverse()[n](t).reverse();
                };
            }), r([
                'filter',
                'map',
                'takeWhile'
            ], function (n, t) {
                var r = t + 1, e = 1 == r || 3 == r;
                Ln.prototype[n] = function (n) {
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
                Ln.prototype[n] = function () {
                    return this[r](1).value()[0];
                };
            }), r([
                'initial',
                'tail'
            ], function (n, t) {
                var r = 'drop' + (t ? '' : 'Right');
                Ln.prototype[n] = function () {
                    return this.__filtered__ ? new Ln(this) : this[r](1);
                };
            }), Ln.prototype.compact = function () {
                return this.filter($u);
            }, Ln.prototype.find = function (n) {
                return this.filter(n).head();
            }, Ln.prototype.findLast = function (n) {
                return this.reverse().find(n);
            }, Ln.prototype.invokeMap = fr(function (n, t) {
                return typeof n == 'function' ? new Ln(this) : this.map(function (r) {
                    return Bt(r, n, t);
                });
            }), Ln.prototype.reject = function (n) {
                return this.filter(au(ye(n)));
            }, Ln.prototype.slice = function (n, t) {
                n = ku(n);
                var r = this;
                return r.__filtered__ && (0 < n || 0 > t) ? new Ln(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== T && (t = ku(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r);
            }, Ln.prototype.takeRightWhile = function (n) {
                return this.reverse().takeWhile(n).reverse();
            }, Ln.prototype.toArray = function () {
                return this.take(4294967295);
            }, mt(Ln.prototype, function (n, t) {
                var r = /^(?:filter|find|map|reject)|While$/.test(t), e = /^(?:head|last)$/.test(t), u = An[e ? 'take' + ('last' == t ? 'Right' : '') : t], i = e || /^find/.test(t);
                u && (An.prototype[t] = function () {
                    var t = this.__wrapped__, o = e ? [1] : arguments, f = t instanceof Ln, c = o[0], l = f || ff(t), s = function (n) {
                            return n = u.apply(An, a([n], o)), e && h ? n[0] : n;
                        };
                    l && r && typeof c == 'function' && 1 != c.length && (f = l = false);
                    var h = this.__chain__, p = !!this.__actions__.length, c = i && !h, f = f && !p;
                    return !i && l ? (t = f ? t : new Ln(this), t = n.apply(t, o), t.__actions__.push({
                        func: Qe,
                        args: [s],
                        thisArg: T
                    }), new On(t, h)) : c && f ? n.apply(this, o) : (t = this.thru(s), c ? e ? t.value()[0] : t.value() : t);
                });
            }), r('pop push shift sort splice unshift'.split(' '), function (n) {
                var t = ri[n], r = /^(?:push|sort|unshift)$/.test(n) ? 'tap' : 'thru', e = /^(?:pop|shift)$/.test(n);
                An.prototype[n] = function () {
                    var n = arguments;
                    if (e && !this.__chain__) {
                        var u = this.value();
                        return t.apply(ff(u) ? u : [], n);
                    }
                    return this[r](function (r) {
                        return t.apply(ff(r) ? r : [], n);
                    });
                };
            }), mt(Ln.prototype, function (n, t) {
                var r = An[t];
                if (r) {
                    var e = r.name + '';
                    (Gi[e] || (Gi[e] = [])).push({
                        name: t,
                        func: r
                    });
                }
            }), Gi[Jr(T, 2).name] = [{
                    name: 'wrapper',
                    func: T
                }], Ln.prototype.clone = function () {
                var n = new Ln(this.__wrapped__);
                return n.__actions__ = Lr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Lr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Lr(this.__views__), n;
            }, Ln.prototype.reverse = function () {
                if (this.__filtered__) {
                    var n = new Ln(this);
                    n.__dir__ = -1, n.__filtered__ = true;
                } else
                    n = this.clone(), n.__dir__ *= -1;
                return n;
            }, Ln.prototype.value = function () {
                var n, t = this.__wrapped__.value(), r = this.__dir__, e = ff(t), u = 0 > r, i = e ? t.length : 0;
                n = 0;
                for (var o = i, f = this.__views__, c = -1, a = f.length; ++c < a;) {
                    var l = f[c], s = l.size;
                    switch (l.type) {
                    case 'drop':
                        n += s;
                        break;
                    case 'dropRight':
                        o -= s;
                        break;
                    case 'take':
                        o = Ci(o, n + s);
                        break;
                    case 'takeRight':
                        n = Li(n, o - s);
                    }
                }
                if (n = {
                        start: n,
                        end: o
                    }, o = n.start, f = n.end, n = f - o, o = u ? f : o - 1, f = this.__iteratees__, c = f.length, a = 0, l = Ci(n, this.__takeCount__), !e || !u && i == n && l == n)
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
            }, An.prototype.at = To, An.prototype.chain = function () {
                return Ye(this);
            }, An.prototype.commit = function () {
                return new On(this.value(), this.__chain__);
            }, An.prototype.next = function () {
                this.__values__ === T && (this.__values__ = mu(this.value()));
                var n = this.__index__ >= this.__values__.length;
                return {
                    done: n,
                    value: n ? T : this.__values__[this.__index__++]
                };
            }, An.prototype.plant = function (n) {
                for (var t, r = this; r instanceof kn;) {
                    var e = Fe(r);
                    e.__index__ = 0, e.__values__ = T, t ? u.__wrapped__ = e : t = e;
                    var u = e, r = r.__wrapped__;
                }
                return u.__wrapped__ = n, t;
            }, An.prototype.reverse = function () {
                var n = this.__wrapped__;
                return n instanceof Ln ? (this.__actions__.length && (n = new Ln(this)), n = n.reverse(), n.__actions__.push({
                    func: Qe,
                    args: [Ge],
                    thisArg: T
                }), new On(n, this.__chain__)) : this.thru(Ge);
            }, An.prototype.toJSON = An.prototype.valueOf = An.prototype.value = function () {
                return wr(this.__wrapped__, this.__actions__);
            }, An.prototype.first = An.prototype.head, wi && (An.prototype[wi] = Xe), An;
        }();
    typeof define == 'function' && typeof define.amd == 'object' && define.amd ? ($n._ = rt, define('lodash', [], function () {
        return rt;
    })) : Nn ? ((Nn.exports = rt)._ = rt, Fn._ = rt) : $n._ = rt;
}.call(this));
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
    moment.locale(window.moment_locale || 'fr');
    var components = require('components');
    components.attach();
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
'use strict';
var Ticketack = function Ticketack(eshopUrl, apiKey, lang) {
    this.session_id = localStorage.getItem('tkt_session_id') != undefined ? localStorage.getItem('tkt_session_id') : '';
    this.eshopUrl = eshopUrl;
    this.apiKey = apiKey;
    this.lang = lang ? lang : '';
    this.cartViewUrl = this.eshopUrl + 'cart/view/';
    this.checkoutUrl = this.eshopUrl + 'cart/validate/';
    this.ticketViewUrl = this.eshopUrl + 'ticket/view/';
    this.passesViewUrl = this.eshopUrl + 'pass/new/';
    this.screeningViewUrl = this.eshopUrl + 'screening/buy/';
    this.cartJsonUrl = this.eshopUrl + 'cart/view_json';
    this.cartRemoveUrl = this.eshopUrl + 'cart/remove';
    this.cartAddUrl = this.eshopUrl + 'screening/buy/';
    this.cartAddArticlesUrl = this.eshopUrl + 'articles/add_to_cart';
    this.cartSetPendingUrl = this.eshopUrl + 'carts/pending/id/';
    this.cartSetOpenUrl = this.eshopUrl + 'carts/open/id/';
    this.cartGetNewUrl = this.eshopUrl + 'carts/new/';
    this.cartUserDataUrl = this.eshopUrl + 'carts/user_data/';
    this.payUrl = this.eshopUrl + 'carts/pay/id/';
    this.confirmUrl = this.eshopUrl + 'carts/confirm/id/';
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
Ticketack.prototype.getCheckoutUrl = function () {
    var url = this.parametrize_url(this.checkoutUrl, {});
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
Ticketack.prototype.addArticlesToCart = function (articles, callback) {
    var data = { 'articles': articles };
    return this.request('POST', this.parametrize_url(this.cartAddArticlesUrl, {}, true), data, { 'Content-type': 'application/json' }, callback);
};
Ticketack.prototype.setPending = function (cart_id, callback) {
    return this.request('PUT', this.cartSetPendingUrl + cart_id, {}, { 'Content-type': 'application/json' }, callback);
};
Ticketack.prototype.setOpen = function (cart_id, callback) {
    return this.request('PUT', this.cartSetOpenUrl + cart_id, {}, { 'Content-type': 'application/json' }, callback);
};
Ticketack.prototype.getNew = function (callback) {
    return this.request('GET', this.cartGetNewUrl, {}, { 'Content-type': 'application/json' }, callback);
};
Ticketack.prototype.setUserData = function (cart_id, user_data, callback) {
    var data = { 'user_data': user_data };
    return this.request('PUT', this.cartUserDataUrl + cart_id, data, { 'Content-type': 'application/json' }, callback);
};
Ticketack.prototype.pay = function (cart_id, payment_method, user_data, callback) {
    var data = {
        'payment_method': payment_method,
        'user': user_data
    };
    return this.request('POST', this.payUrl + cart_id, data, { 'Content-type': 'application/json' }, callback);
};
Ticketack.prototype.confirm = function (cart_id, callback) {
    return this.request('POST', this.confirmUrl + cart_id, {}, { 'Content-type': 'application/json' }, callback);
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
        _.mapKeys(cartItem, function (val, key) {
            _this[key] = val;
        });
        this.expire = moment(this.expire);
    }
    CartItem.prototype.getFormattedTitle = function () {
        return this.name;
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
        _.mapKeys(screening, function (val, key) {
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
        _.mapKeys(cart, function (val, key) {
            _this[key] = val;
        });
        if (this.order_id && this.order_id.length)
            this.id = parseInt(this.order_id.split('-')[1]);
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
        }, 0).toFixed(2);
        return total + ' CHF';
    };
    return Cart;
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
define('app/Articles/Article', [
    'postal',
    'jquery',
    'lodash',
    'api',
    'Cart',
    'bootstrap'
], function dependencies(postal, $, _, TKTApi, CartModel) {
    function Article($container, state) {
        this.$container = $container;
        this._id = this.$container.data('id');
        this.$triggers = $('.show-variants', this.$container);
        this.$closers = $('.close-variants', this.$container);
        this.$modal = $('.article-variants-form', this.$container);
        this.$variants = $('.variant-wrapper', this.$container);
        this.$submit = $('.variants-submit', this.$container);
        this.$go_to_cart = $('.go-to-cart', this.$container);
        this.$error = $('.variants-error', this.$container);
        this.$submit_success = $('.variants-submit-success', this.$container);
        this.$submit_error = $('.variants-submit-error', this.$container);
    }
    Article.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            this.$triggers.click(function (e) {
                return _this.show_variants(e);
            });
            this.$closers.click(function (e) {
                return _this.hide_variants(e);
            });
            var $total = $('.variant-total', this.$container);
            _.map(this.$variants, function (v) {
                var v_id = $(v).data('id');
                var $sub = $('.variant-sub', $(v));
                var $add = $('.variant-add', $(v));
                var $quantity = $('.variant-quantity', $(v));
                var price = parseFloat($('.variant-price', $(v)).data('price'));
                $add.click(function (e) {
                    _this.hide_messages();
                    _this.$submit.fadeIn();
                    $quantity.html(parseInt($quantity.html()) + 1);
                    $total.html((parseFloat($total.html()) + price).toFixed(2));
                });
                $sub.click(function (e) {
                    var quantity = parseInt($quantity.html());
                    if (quantity <= 0)
                        return;
                    if (quantity == 1)
                        _this.$submit.fadeOut();
                    $quantity.html(quantity - 1);
                    $total.html(parseFloat($total.html() - price).toFixed(2));
                });
            });
            this.$submit.click(function (e) {
                _this.add_to_cart();
            });
        },
        show_variants: function show_variants(e) {
            this.$modal.fadeIn();
        },
        hide_variants: function hide_variants(e) {
            this.$modal.fadeOut();
        },
        show_error: function show_error() {
            this.$error.show();
        },
        show_submit_success: function show_submit_success(msg) {
            this.hide_messages();
            this.$submit_success.html(msg).show();
        },
        show_submit_error: function show_submit_error(err) {
            this.$submit_error.html(err).show();
        },
        hide_messages: function hide_messages() {
            this.$go_to_cart.fadeOut();
            this.$error.fadeOut();
            this.$submit_success.fadeOut();
            this.$submit_error.fadeOut();
        },
        build_articles_to_add: function build_articles_to_add() {
            var article = {
                '_id': this._id,
                'variants': []
            };
            _.map(this.$variants, function (v) {
                var v_id = $(v).data('id');
                var $quantity = $('.variant-quantity', $(v));
                var quantity = parseInt($quantity.html());
                if (quantity <= 0)
                    return false;
                var price = parseFloat($('.variant-price', $(v)).data('price'));
                article.variants.push({
                    '_id': v_id,
                    'quantity': quantity,
                    'price': price
                });
            });
            return [article];
        },
        add_to_cart: function add_to_cart() {
            var _this2 = this;
            var articles = this.build_articles_to_add();
            console.log(articles);
            if (_.isEmpty(articles[0].variants)) {
                this.show_error();
                return false;
            }
            TKTApi.addArticlesToCart(articles, function (err, status, rsp) {
                if (err)
                    return _this2.show_submit_error(rsp.errorMsg);
                _this2.show_submit_success(rsp.flash.success);
                $('.variant-quantity').html(0);
                $('.variant-total').html('0.00');
                _this2.$go_to_cart.fadeIn();
                _this2.$submit.fadeOut();
                TKTApi.loadCart(function (err, status, rsp) {
                    if (err)
                        return;
                    _this2.emit_cart_update(new CartModel(rsp));
                });
            });
        },
        emit_cart_update: function emit_cart_update(cart) {
            postal.publish({
                channel: 'cart',
                topic: 'update',
                data: { cart: cart }
            });
        },
        detach: function detach() {
        }
    };
    return Article;
});
'use strict';
define('i18n', ['module'], function dependencies(module) {
    function i18n() {
        this.translations = module.config();
    }
    i18n.prototype.t = function (key) {
        if (key in this.translations)
            return this.translations[key];
        return key;
    };
    return new i18n();
});
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
        _.mapKeys(ticket, function (val, key) {
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
    'i18n',
    'postal',
    'lodash',
    'template',
    'jquery',
    'api',
    'moment',
    'Cart',
    'Screening',
    'Ticket'
], function dependencies(config, i18n, postal, _, Template, $, TKTApi, moment, CartModel, Screening, Ticket) {
    function Form($container, state) {
        this.$container = $container;
        this.initialized = false;
        this.ids = this.$container.data('ids').split(',');
        this.show_on_load = parseInt(this.getUrlParam('book')) == 1;
        this.selected_screening = this.getUrlParam('s_id');
    }
    Form.prototype = {
        attach: function attach() {
            var _this = this;
            this.init_store();
            postal.subscribe({
                channel: 'connection',
                topic: 'update',
                callback: function callback(data, envelope) {
                    _this.check_bookability();
                }
            });
            this.init();
        },
        init: function init() {
            var _this2 = this;
            TKTApi.getScreeningsInfo(this.ids, function (err, status, rsp) {
                _this2.data.screenings = rsp.map(function (s) {
                    var screening = new Screening(s);
                    screening.eligible_types = s.eligible_types;
                    return screening;
                });
                _this2.data.screenings = _.sortBy(_this2.data.screenings, function (s) {
                    return s.start_at;
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
            $('.success-panel').addClass('d-none');
            var chosen_pricings = _.find(this.data.pricings, function (nb) {
                return nb > 0;
            });
            if (!chosen_pricings) {
                return $('.pricings-error').html(i18n.t('Veuillez choisir au moins un billet')).removeClass('d-none');
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
                    $('.book-form-error', _this4.$container).html(i18n.t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.')).removeClass('d-none');
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
                return $('.pass-error').html(i18n.t('Veuillez remplir les deux champs')).removeClass('d-none');
            TKTApi.loginTicket(this.data.pass_infos.number, this.data.pass_infos.key, function (err, status, rsp) {
                if (err)
                    return $('.pass-error').html(i18n.t('Les informations que vous avez saisies sont invalides')).removeClass('d-none');
                _this5.data.ticket = new Ticket(rsp);
                _this5.emit_connection_update(_this5.data.ticket);
                if (_this5.data.ticket.status == 'new')
                    window.location.href = TKTApi.getTicketViewUrl();
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
                        var msg = _this6.data.bookability.screening_already_booked ? i18n.t('Vous ne pouvez pas réserver plus de place pour cette séance avec votre abonnement.') : i18n.t('Vous ne pouvez pas réserver de place pour cette séance avec votre abonnement.');
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
            $('.dates-wrapper .date').click(function (e) {
                var $date = $(e.target);
                ;
                if (!$date.data('screening_id'))
                    $date = $date.closest('[data-screening_id]');
                _this7.select_screening($date.data('screening_id'));
            });
            if ($('.days-wrapper')) {
                $('.days-wrapper .day').click(function (e) {
                    _this7.select_day($(e.target).data('day'));
                });
            }
            var s_to_select = this.selected_screening;
            if (!s_to_select) {
                var i = this.data.screenings.length - 1;
                while (i >= 0) {
                    if (this.data.screenings[i].seats.available > 0)
                        s_to_select = this.data.screenings[i]._id;
                    i--;
                }
            }
            var d_to_select = $('.days-wrapper .day[data-screening_id*="' + s_to_select + '"]').data('day');
            this.select_day(d_to_select);
            this.select_screening(s_to_select);
        },
        build_tickets_form: function build_tickets_form() {
            var _this8 = this;
            var ticket_view_url = TKTApi.getTicketViewUrl();
            this.$tickets_form.html(Template.render('tkt-booking-form-pricings-tpl', {
                screening: this.data.screening,
                ticket_view_url: ticket_view_url
            }));
            $('.tkt-minus-btn', this.$container).click(function (e) {
                var $t = $(e.target);
                var $input = $t.parent().next('.pricing-input').eq(0);
                var val = parseInt($input.val());
                if (val > 0) {
                    $input.val(val - 1).trigger('change');
                    var $qty = $t.parent().find('.pricing-qty').eq(0);
                    $qty.text(val - 1);
                }
                if (val > 1)
                    $t.removeClass('tkt-grey-badge').addClass('tkt-dark-badge');
                else
                    $t.removeClass('tkt-dark-badge').addClass('tkt-grey-badge');
            });
            $('.tkt-plus-btn', this.$container).click(function (e) {
                var $t = $(e.target);
                var $input = $t.parent().next('.pricing-input').eq(0);
                var val = parseInt($input.val());
                $input.val(val + 1).trigger('change');
                var $qty = $t.parent().find('.pricing-qty').eq(0);
                $qty.text(val + 1);
                $('.tkt-minus-btn', $t.parent()).removeClass('tkt-grey-badge').addClass('tkt-dark-badge');
            });
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
        activate_day: function activate_day(day) {
            $('.days-wrapper .day').removeClass('active');
            $('.days-wrapper .day[data-day*="' + day + '"]').addClass('active');
            $('.dates-wrapper .date').hide();
            $('.dates-wrapper .date[data-day="' + day + '"]').show();
        },
        select_day: function select_day(day) {
            this.activate_day(day);
            var $day_input = $('.days-wrapper .day[data-day*="' + day + '"]');
            var data_screening_id = $day_input.data('screening_id');
            if (data_screening_id) {
                var first_screening = data_screening_id.split(',')[0];
                this.select_screening(first_screening);
            }
        },
        activate_screening: function activate_screening(screening_id) {
            $('.dates-wrapper .date').removeClass('active');
            $('.dates-wrapper .date[data-screening_id="' + screening_id + '"]').addClass('active');
        },
        select_screening: function select_screening(screening_id) {
            this.activate_screening(screening_id);
            this.reset_store_on_screening_change();
            this.data.screening = _.find(this.data.screenings, function (s) {
                return s._id === screening_id;
            });
            this.build_tickets_form();
            this.check_bookability();
        },
        getUrlParam: function getUrlParam(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
            this.load_cart();
            postal.subscribe({
                channel: 'cart',
                topic: 'reload',
                callback: function callback(data, envelope) {
                    _this.load_cart();
                }
            });
            postal.subscribe({
                channel: 'cart',
                topic: 'update',
                callback: function callback(data, envelope) {
                    if (!data.internal)
                        _this.load_cart();
                }
            });
            $(document).on('click', '.finish-cart-btn', function (e) {
                e.preventDefault();
                var user_data = {};
                var firstname = $('#firstname-input', _this.$container).val();
                var lastname = $('#lastname-input', _this.$container).val();
                var tab = $('#tab-input', _this.$container).val();
                var email = $('#email-input', _this.$container).val();
                if (firstname)
                    user_data.firstname = firstname;
                if (lastname)
                    user_data.lastname = lastname;
                if (tab)
                    user_data.tab = tab;
                if (email)
                    user_data.email = email;
                _this.checkout(user_data, function (err, rsp) {
                    if (err)
                        return;
                    _this.cart = {};
                    $('#cart').fadeOut();
                    $('#checkout-confirm-popup').fadeIn();
                });
            });
            $(document).on('click', '.open-cart-btn', function (e) {
                e.preventDefault();
                $('#cart').fadeOut();
                var user_data = {};
                var tab = $('#tab-input', _this.$container).val();
                if (tab)
                    user_data.tab = tab;
                _this.set_user_data(user_data, function (err, rsp) {
                    if (err)
                        return;
                    _this.set_open(function (err, rsp) {
                        if (err)
                            return;
                        _this.get_new(function (err, rsp) {
                            if (err)
                                return;
                            $('#checkout-confirm-popup').fadeIn();
                        });
                    });
                });
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
                    _this2.bind_remove_item_icons();
                    if (window.TKT_SET_CARTS_PENDING && _this2.cart.id) {
                        _this2.set_pending(function (err, rsp) {
                            if (err)
                                return callback(err);
                        });
                    } else {
                        return callback();
                    }
                });
            });
        },
        build_table: function build_table() {
            this.$container.html(Template.render('tkt-cart-table-tpl', {
                cart: this.cart,
                program_url: config.get('program_url'),
                cart_reset_url: config.get('cart_reset_url'),
                validate_cart_url: this.cart.validate_cart_url + '?PHPSESSID=' + TKTApi.session_id + '&lang=' + config.get('lang')
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
        set_pending: function set_pending(callback) {
            callback = callback || function (err) {
            };
            TKTApi.setPending(this.cart.id, function (err, status, rsp) {
                if (err)
                    return callback(err);
                return callback(null, rsp);
            });
        },
        set_open: function set_open(callback) {
            callback = callback || function (err) {
            };
            TKTApi.setOpen(this.cart.id, function (err, status, rsp) {
                return callback(err);
            });
        },
        get_new: function get_new(callback) {
            var _this5 = this;
            callback = callback || function (err) {
            };
            TKTApi.getNew(function (err, status, rsp) {
                if (err)
                    return callback(err);
                return _this5.load_cart(callback);
            });
        },
        set_user_data: function set_user_data(data, callback) {
            callback = callback || function (err) {
            };
            TKTApi.setUserData(this.cart.id, data, function (err, status, rsp) {
                return callback(err);
            });
        },
        checkout: function checkout(user_data, callback) {
            var _this6 = this;
            callback = callback || function (err) {
            };
            user_data = user_data || {};
            TKTApi.pay(this.cart.id, 'POS_CASH', user_data, function (err, status, rsp) {
                if (err)
                    return callback(err);
                TKTApi.confirm(_this6.cart.id, function (err, status, rsp) {
                    if (err)
                        return callback(err);
                    return callback(null, rsp);
                });
            });
        },
        emit_update: function emit_update() {
            postal.publish({
                channel: 'cart',
                topic: 'update',
                data: {
                    cart: this.cart,
                    internal: true
                }
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
            this.$nb = $('<div class="cart-icon-nb assertive empty"></div>');
            this.$container.append(this.$nb);
            TKTApi.loadCart(function (err, status, rsp) {
                _this.update_nb(rsp.items.length);
            });
            postal.subscribe({
                channel: 'cart',
                topic: 'update',
                callback: function callback(data, envelope) {
                    _this.update_nb(data.cart.items.length);
                }
            });
        },
        update_nb: function update_nb(nb) {
            if (nb > 0)
                this.$nb.removeClass('empty');
            else
                this.$nb.addClass('empty');
            this.$nb.html(nb > 0 ? nb : '');
        },
        detach: function detach() {
        }
    };
    return CartIcon;
});
'use strict';
var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};
(function () {
    var d = !1, l = function l(e) {
            return e instanceof l ? e : this instanceof l ? void (this.EXIFwrapped = e) : new l(e);
        };
    'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = l), exports.EXIF = l) : this.EXIF = l;
    var u = l.Tags = {
            36864: 'ExifVersion',
            40960: 'FlashpixVersion',
            40961: 'ColorSpace',
            40962: 'PixelXDimension',
            40963: 'PixelYDimension',
            37121: 'ComponentsConfiguration',
            37122: 'CompressedBitsPerPixel',
            37500: 'MakerNote',
            37510: 'UserComment',
            40964: 'RelatedSoundFile',
            36867: 'DateTimeOriginal',
            36868: 'DateTimeDigitized',
            37520: 'SubsecTime',
            37521: 'SubsecTimeOriginal',
            37522: 'SubsecTimeDigitized',
            33434: 'ExposureTime',
            33437: 'FNumber',
            34850: 'ExposureProgram',
            34852: 'SpectralSensitivity',
            34855: 'ISOSpeedRatings',
            34856: 'OECF',
            37377: 'ShutterSpeedValue',
            37378: 'ApertureValue',
            37379: 'BrightnessValue',
            37380: 'ExposureBias',
            37381: 'MaxApertureValue',
            37382: 'SubjectDistance',
            37383: 'MeteringMode',
            37384: 'LightSource',
            37385: 'Flash',
            37396: 'SubjectArea',
            37386: 'FocalLength',
            41483: 'FlashEnergy',
            41484: 'SpatialFrequencyResponse',
            41486: 'FocalPlaneXResolution',
            41487: 'FocalPlaneYResolution',
            41488: 'FocalPlaneResolutionUnit',
            41492: 'SubjectLocation',
            41493: 'ExposureIndex',
            41495: 'SensingMethod',
            41728: 'FileSource',
            41729: 'SceneType',
            41730: 'CFAPattern',
            41985: 'CustomRendered',
            41986: 'ExposureMode',
            41987: 'WhiteBalance',
            41988: 'DigitalZoomRation',
            41989: 'FocalLengthIn35mmFilm',
            41990: 'SceneCaptureType',
            41991: 'GainControl',
            41992: 'Contrast',
            41993: 'Saturation',
            41994: 'Sharpness',
            41995: 'DeviceSettingDescription',
            41996: 'SubjectDistanceRange',
            40965: 'InteroperabilityIFDPointer',
            42016: 'ImageUniqueID'
        }, c = l.TiffTags = {
            256: 'ImageWidth',
            257: 'ImageHeight',
            34665: 'ExifIFDPointer',
            34853: 'GPSInfoIFDPointer',
            40965: 'InteroperabilityIFDPointer',
            258: 'BitsPerSample',
            259: 'Compression',
            262: 'PhotometricInterpretation',
            274: 'Orientation',
            277: 'SamplesPerPixel',
            284: 'PlanarConfiguration',
            530: 'YCbCrSubSampling',
            531: 'YCbCrPositioning',
            282: 'XResolution',
            283: 'YResolution',
            296: 'ResolutionUnit',
            273: 'StripOffsets',
            278: 'RowsPerStrip',
            279: 'StripByteCounts',
            513: 'JPEGInterchangeFormat',
            514: 'JPEGInterchangeFormatLength',
            301: 'TransferFunction',
            318: 'WhitePoint',
            319: 'PrimaryChromaticities',
            529: 'YCbCrCoefficients',
            532: 'ReferenceBlackWhite',
            306: 'DateTime',
            270: 'ImageDescription',
            271: 'Make',
            272: 'Model',
            305: 'Software',
            315: 'Artist',
            33432: 'Copyright'
        }, f = l.GPSTags = {
            0: 'GPSVersionID',
            1: 'GPSLatitudeRef',
            2: 'GPSLatitude',
            3: 'GPSLongitudeRef',
            4: 'GPSLongitude',
            5: 'GPSAltitudeRef',
            6: 'GPSAltitude',
            7: 'GPSTimeStamp',
            8: 'GPSSatellites',
            9: 'GPSStatus',
            10: 'GPSMeasureMode',
            11: 'GPSDOP',
            12: 'GPSSpeedRef',
            13: 'GPSSpeed',
            14: 'GPSTrackRef',
            15: 'GPSTrack',
            16: 'GPSImgDirectionRef',
            17: 'GPSImgDirection',
            18: 'GPSMapDatum',
            19: 'GPSDestLatitudeRef',
            20: 'GPSDestLatitude',
            21: 'GPSDestLongitudeRef',
            22: 'GPSDestLongitude',
            23: 'GPSDestBearingRef',
            24: 'GPSDestBearing',
            25: 'GPSDestDistanceRef',
            26: 'GPSDestDistance',
            27: 'GPSProcessingMethod',
            28: 'GPSAreaInformation',
            29: 'GPSDateStamp',
            30: 'GPSDifferential'
        }, g = l.IFD1Tags = {
            256: 'ImageWidth',
            257: 'ImageHeight',
            258: 'BitsPerSample',
            259: 'Compression',
            262: 'PhotometricInterpretation',
            273: 'StripOffsets',
            274: 'Orientation',
            277: 'SamplesPerPixel',
            278: 'RowsPerStrip',
            279: 'StripByteCounts',
            282: 'XResolution',
            283: 'YResolution',
            284: 'PlanarConfiguration',
            296: 'ResolutionUnit',
            513: 'JpegIFOffset',
            514: 'JpegIFByteCount',
            529: 'YCbCrCoefficients',
            530: 'YCbCrSubSampling',
            531: 'YCbCrPositioning',
            532: 'ReferenceBlackWhite'
        }, m = l.StringValues = {
            ExposureProgram: {
                0: 'Not defined',
                1: 'Manual',
                2: 'Normal program',
                3: 'Aperture priority',
                4: 'Shutter priority',
                5: 'Creative program',
                6: 'Action program',
                7: 'Portrait mode',
                8: 'Landscape mode'
            },
            MeteringMode: {
                0: 'Unknown',
                1: 'Average',
                2: 'CenterWeightedAverage',
                3: 'Spot',
                4: 'MultiSpot',
                5: 'Pattern',
                6: 'Partial',
                255: 'Other'
            },
            LightSource: {
                0: 'Unknown',
                1: 'Daylight',
                2: 'Fluorescent',
                3: 'Tungsten (incandescent light)',
                4: 'Flash',
                9: 'Fine weather',
                10: 'Cloudy weather',
                11: 'Shade',
                12: 'Daylight fluorescent (D 5700 - 7100K)',
                13: 'Day white fluorescent (N 4600 - 5400K)',
                14: 'Cool white fluorescent (W 3900 - 4500K)',
                15: 'White fluorescent (WW 3200 - 3700K)',
                17: 'Standard light A',
                18: 'Standard light B',
                19: 'Standard light C',
                20: 'D55',
                21: 'D65',
                22: 'D75',
                23: 'D50',
                24: 'ISO studio tungsten',
                255: 'Other'
            },
            Flash: {
                0: 'Flash did not fire',
                1: 'Flash fired',
                5: 'Strobe return light not detected',
                7: 'Strobe return light detected',
                9: 'Flash fired, compulsory flash mode',
                13: 'Flash fired, compulsory flash mode, return light not detected',
                15: 'Flash fired, compulsory flash mode, return light detected',
                16: 'Flash did not fire, compulsory flash mode',
                24: 'Flash did not fire, auto mode',
                25: 'Flash fired, auto mode',
                29: 'Flash fired, auto mode, return light not detected',
                31: 'Flash fired, auto mode, return light detected',
                32: 'No flash function',
                65: 'Flash fired, red-eye reduction mode',
                69: 'Flash fired, red-eye reduction mode, return light not detected',
                71: 'Flash fired, red-eye reduction mode, return light detected',
                73: 'Flash fired, compulsory flash mode, red-eye reduction mode',
                77: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
                79: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
                89: 'Flash fired, auto mode, red-eye reduction mode',
                93: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
                95: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
            },
            SensingMethod: {
                1: 'Not defined',
                2: 'One-chip color area sensor',
                3: 'Two-chip color area sensor',
                4: 'Three-chip color area sensor',
                5: 'Color sequential area sensor',
                7: 'Trilinear sensor',
                8: 'Color sequential linear sensor'
            },
            SceneCaptureType: {
                0: 'Standard',
                1: 'Landscape',
                2: 'Portrait',
                3: 'Night scene'
            },
            SceneType: { 1: 'Directly photographed' },
            CustomRendered: {
                0: 'Normal process',
                1: 'Custom process'
            },
            WhiteBalance: {
                0: 'Auto white balance',
                1: 'Manual white balance'
            },
            GainControl: {
                0: 'None',
                1: 'Low gain up',
                2: 'High gain up',
                3: 'Low gain down',
                4: 'High gain down'
            },
            Contrast: {
                0: 'Normal',
                1: 'Soft',
                2: 'Hard'
            },
            Saturation: {
                0: 'Normal',
                1: 'Low saturation',
                2: 'High saturation'
            },
            Sharpness: {
                0: 'Normal',
                1: 'Soft',
                2: 'Hard'
            },
            SubjectDistanceRange: {
                0: 'Unknown',
                1: 'Macro',
                2: 'Close view',
                3: 'Distant view'
            },
            FileSource: { 3: 'DSC' },
            Components: {
                0: '',
                1: 'Y',
                2: 'Cb',
                3: 'Cr',
                4: 'R',
                5: 'G',
                6: 'B'
            }
        };
    function i(e) {
        return !!e.exifdata;
    }
    function r(i, o) {
        function t(e) {
            var t = p(e);
            i.exifdata = t || {};
            var n = function (e) {
                var t = new DataView(e);
                d && console.log('Got file of length ' + e.byteLength);
                if (255 != t.getUint8(0) || 216 != t.getUint8(1))
                    return d && console.log('Not a valid JPEG'), !1;
                var n = 2, r = e.byteLength;
                for (; n < r;) {
                    if (l = n, 56 === (s = t).getUint8(l) && 66 === s.getUint8(l + 1) && 73 === s.getUint8(l + 2) && 77 === s.getUint8(l + 3) && 4 === s.getUint8(l + 4) && 4 === s.getUint8(l + 5)) {
                        var i = t.getUint8(n + 7);
                        i % 2 != 0 && (i += 1), 0 === i && (i = 4);
                        var o = n + 8 + i, a = t.getUint16(n + 6 + i);
                        return S(e, o, a);
                    }
                    n++;
                }
                var s, l;
            }(e);
            if (i.iptcdata = n || {}, l.isXmpEnabled) {
                var r = function (e) {
                    if (!('DOMParser' in self))
                        return;
                    var t = new DataView(e);
                    d && console.log('Got file of length ' + e.byteLength);
                    if (255 != t.getUint8(0) || 216 != t.getUint8(1))
                        return d && console.log('Not a valid JPEG'), !1;
                    var n = 2, r = e.byteLength, i = new DOMParser();
                    for (; n < r - 4;) {
                        if ('http' == y(t, n, 4)) {
                            var o = n - 1, a = t.getUint16(n - 2) - 1, s = y(t, o, a), l = s.indexOf('xmpmeta>') + 8, u = (s = s.substring(s.indexOf('<x:xmpmeta'), l)).indexOf('x:xmpmeta') + 10;
                            s = s.slice(0, u) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + s.slice(u);
                            var c = i.parseFromString(s, 'text/xml');
                            return x(c);
                        }
                        n++;
                    }
                }(e);
                i.xmpdata = r || {};
            }
            o && o.call(i);
        }
        var e, n, r;
        if (i.src) {
            if (/^data\:/i.test(i.src))
                t(function (e, t) {
                    t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || '', e = e.replace(/^data\:([^\;]+)\;base64,/gim, '');
                    for (var n = atob(e), r = n.length, i = new ArrayBuffer(r), o = new Uint8Array(i), a = 0; a < r; a++) {
                        o[a] = n.charCodeAt(a);
                    }
                    return i;
                }(i.src));
            else if (/^blob\:/i.test(i.src)) {
                (s = new FileReader()).onload = function (e) {
                    t(e.target.result);
                }, e = i.src, n = function n(e) {
                    s.readAsArrayBuffer(e);
                }, (r = new XMLHttpRequest()).open('GET', e, !0), r.responseType = 'blob', r.onload = function (e) {
                    200 != this.status && 0 !== this.status || n(this.response);
                }, r.send();
            } else {
                var a = new XMLHttpRequest();
                a.onload = function () {
                    if (200 != this.status && 0 !== this.status)
                        throw 'Could not load image';
                    t(a.response), a = null;
                }, a.open('GET', i.src, !0), a.responseType = 'arraybuffer', a.send(null);
            }
        } else if (self.FileReader && (i instanceof self.Blob || i instanceof self.File)) {
            var s;
            (s = new FileReader()).onload = function (e) {
                d && console.log('Got file of length ' + e.target.result.byteLength), t(e.target.result);
            }, s.readAsArrayBuffer(i);
        }
    }
    function p(e) {
        var t = new DataView(e);
        if (d && console.log('Got file of length ' + e.byteLength), 255 != t.getUint8(0) || 216 != t.getUint8(1))
            return d && console.log('Not a valid JPEG'), !1;
        for (var n, r = 2, i = e.byteLength; r < i;) {
            if (255 != t.getUint8(r))
                return d && console.log('Not a valid marker at offset ' + r + ', found: ' + t.getUint8(r)), !1;
            if (n = t.getUint8(r + 1), d && console.log(n), 225 == n)
                return d && console.log('Found 0xFFE1 marker'), o(t, r + 4, t.getUint16(r + 2));
            r += 2 + t.getUint16(r + 2);
        }
    }
    var h = {
        120: 'caption',
        110: 'credit',
        25: 'keywords',
        55: 'dateCreated',
        80: 'byline',
        85: 'bylineTitle',
        122: 'captionWriter',
        105: 'headline',
        116: 'copyright',
        15: 'category'
    };
    function S(e, t, n) {
        for (var r, i, o, a, s = new DataView(e), l = {}, u = t; u < t + n;) {
            28 === s.getUint8(u) && 2 === s.getUint8(u + 1) && (a = s.getUint8(u + 2)) in h && ((o = s.getInt16(u + 3)) + 5, i = h[a], r = y(s, u + 5, o), l.hasOwnProperty(i) ? l[i] instanceof Array ? l[i].push(r) : l[i] = [
                l[i],
                r
            ] : l[i] = r), u++;
        }
        return l;
    }
    function P(e, t, n, r, i) {
        var o, a, s, l = e.getUint16(n, !i), u = {};
        for (s = 0; s < l; s++) {
            o = n + 12 * s + 2, !(a = r[e.getUint16(o, !i)]) && d && console.log('Unknown tag: ' + e.getUint16(o, !i)), u[a] = F(e, o, t, n, i);
        }
        return u;
    }
    function F(e, t, n, r, i) {
        var o, a, s, l, u, c, d = e.getUint16(t + 2, !i), f = e.getUint32(t + 4, !i), g = e.getUint32(t + 8, !i) + n;
        switch (d) {
        case 1:
        case 7:
            if (1 == f)
                return e.getUint8(t + 8, !i);
            for (o = 4 < f ? g : t + 8, a = [], l = 0; l < f; l++) {
                a[l] = e.getUint8(o + l);
            }
            return a;
        case 2:
            return y(e, o = 4 < f ? g : t + 8, f - 1);
        case 3:
            if (1 == f)
                return e.getUint16(t + 8, !i);
            for (o = 2 < f ? g : t + 8, a = [], l = 0; l < f; l++) {
                a[l] = e.getUint16(o + 2 * l, !i);
            }
            return a;
        case 4:
            if (1 == f)
                return e.getUint32(t + 8, !i);
            for (a = [], l = 0; l < f; l++) {
                a[l] = e.getUint32(g + 4 * l, !i);
            }
            return a;
        case 5:
            if (1 == f)
                return u = e.getUint32(g, !i), c = e.getUint32(g + 4, !i), (s = new Number(u / c)).numerator = u, s.denominator = c, s;
            for (a = [], l = 0; l < f; l++) {
                u = e.getUint32(g + 8 * l, !i), c = e.getUint32(g + 4 + 8 * l, !i), a[l] = new Number(u / c), a[l].numerator = u, a[l].denominator = c;
            }
            return a;
        case 9:
            if (1 == f)
                return e.getInt32(t + 8, !i);
            for (a = [], l = 0; l < f; l++) {
                a[l] = e.getInt32(g + 4 * l, !i);
            }
            return a;
        case 10:
            if (1 == f)
                return e.getInt32(g, !i) / e.getInt32(g + 4, !i);
            for (a = [], l = 0; l < f; l++) {
                a[l] = e.getInt32(g + 8 * l, !i) / e.getInt32(g + 4 + 8 * l, !i);
            }
            return a;
        }
    }
    function y(e, t, r) {
        var i = '';
        for (n = t; n < t + r; n++) {
            i += String.fromCharCode(e.getUint8(n));
        }
        return i;
    }
    function o(e, t) {
        if ('Exif' != y(e, t, 4))
            return d && console.log('Not valid EXIF data! ' + y(e, t, 4)), !1;
        var n, r, i, o, a, s = t + 6;
        if (18761 == e.getUint16(s))
            n = !1;
        else {
            if (19789 != e.getUint16(s))
                return d && console.log('Not valid TIFF data! (no 0x4949 or 0x4D4D)'), !1;
            n = !0;
        }
        if (42 != e.getUint16(s + 2, !n))
            return d && console.log('Not valid TIFF data! (no 0x002A)'), !1;
        var l = e.getUint32(s + 4, !n);
        if (l < 8)
            return d && console.log('Not valid TIFF data! (First offset less than 8)', e.getUint32(s + 4, !n)), !1;
        if ((r = P(e, s, s + l, c, n)).ExifIFDPointer)
            for (i in o = P(e, s, s + r.ExifIFDPointer, u, n)) {
                switch (i) {
                case 'LightSource':
                case 'Flash':
                case 'MeteringMode':
                case 'ExposureProgram':
                case 'SensingMethod':
                case 'SceneCaptureType':
                case 'SceneType':
                case 'CustomRendered':
                case 'WhiteBalance':
                case 'GainControl':
                case 'Contrast':
                case 'Saturation':
                case 'Sharpness':
                case 'SubjectDistanceRange':
                case 'FileSource':
                    o[i] = m[i][o[i]];
                    break;
                case 'ExifVersion':
                case 'FlashpixVersion':
                    o[i] = String.fromCharCode(o[i][0], o[i][1], o[i][2], o[i][3]);
                    break;
                case 'ComponentsConfiguration':
                    o[i] = m.Components[o[i][0]] + m.Components[o[i][1]] + m.Components[o[i][2]] + m.Components[o[i][3]];
                }
                r[i] = o[i];
            }
        if (r.GPSInfoIFDPointer)
            for (i in a = P(e, s, s + r.GPSInfoIFDPointer, f, n)) {
                switch (i) {
                case 'GPSVersionID':
                    a[i] = a[i][0] + '.' + a[i][1] + '.' + a[i][2] + '.' + a[i][3];
                }
                r[i] = a[i];
            }
        return r.thumbnail = function (e, t, n, r) {
            var i, o, a, s, l = (o = t + n, a = r, s = (i = e).getUint16(o, !a), i.getUint32(o + 2 + 12 * s, !a));
            if (!l)
                return {};
            if (l > e.byteLength)
                return {};
            var u = P(e, t, t + l, g, r);
            if (u.Compression)
                switch (u.Compression) {
                case 6:
                    if (u.JpegIFOffset && u.JpegIFByteCount) {
                        var c = t + u.JpegIFOffset, d = u.JpegIFByteCount;
                        u.blob = new Blob([new Uint8Array(e.buffer, c, d)], { type: 'image/jpeg' });
                    }
                    break;
                case 1:
                    console.log('Thumbnail image format is TIFF, which is not implemented.');
                    break;
                default:
                    console.log('Unknown thumbnail image format \'%s\'', u.Compression);
                }
            else
                2 == u.PhotometricInterpretation && console.log('Thumbnail image format is RGB, which is not implemented.');
            return u;
        }(e, s, l, n), r;
    }
    function b(e) {
        var t = {};
        if (1 == e.nodeType) {
            if (0 < e.attributes.length) {
                t['@attributes'] = {};
                for (var n = 0; n < e.attributes.length; n++) {
                    var r = e.attributes.item(n);
                    t['@attributes'][r.nodeName] = r.nodeValue;
                }
            }
        } else if (3 == e.nodeType)
            return e.nodeValue;
        if (e.hasChildNodes())
            for (var i = 0; i < e.childNodes.length; i++) {
                var o = e.childNodes.item(i), a = o.nodeName;
                if (null == t[a])
                    t[a] = b(o);
                else {
                    if (null == t[a].push) {
                        var s = t[a];
                        t[a] = [], t[a].push(s);
                    }
                    t[a].push(b(o));
                }
            }
        return t;
    }
    function x(e) {
        try {
            var t = {};
            if (0 < e.children.length)
                for (var n = 0; n < e.children.length; n++) {
                    var r = e.children.item(n), i = r.attributes;
                    for (var o in i) {
                        var a = i[o], s = a.nodeName, l = a.nodeValue;
                        void 0 !== s && (t[s] = l);
                    }
                    var u = r.nodeName;
                    if (void 0 === t[u])
                        t[u] = b(r);
                    else {
                        if (void 0 === t[u].push) {
                            var c = t[u];
                            t[u] = [], t[u].push(c);
                        }
                        t[u].push(b(r));
                    }
                }
            else
                t = e.textContent;
            return t;
        } catch (e) {
            console.log(e.message);
        }
    }
    l.enableXmp = function () {
        l.isXmpEnabled = !0;
    }, l.disableXmp = function () {
        l.isXmpEnabled = !1;
    }, l.getData = function (e, t) {
        return !((self.Image && e instanceof self.Image || self.HTMLImageElement && e instanceof self.HTMLImageElement) && !e.complete) && (i(e) ? t && t.call(e) : r(e, t), !0);
    }, l.getTag = function (e, t) {
        if (i(e))
            return e.exifdata[t];
    }, l.getIptcTag = function (e, t) {
        if (i(e))
            return e.iptcdata[t];
    }, l.getAllTags = function (e) {
        if (!i(e))
            return {};
        var t, n = e.exifdata, r = {};
        for (t in n) {
            n.hasOwnProperty(t) && (r[t] = n[t]);
        }
        return r;
    }, l.getAllIptcTags = function (e) {
        if (!i(e))
            return {};
        var t, n = e.iptcdata, r = {};
        for (t in n) {
            n.hasOwnProperty(t) && (r[t] = n[t]);
        }
        return r;
    }, l.pretty = function (e) {
        if (!i(e))
            return '';
        var t, n = e.exifdata, r = '';
        for (t in n) {
            n.hasOwnProperty(t) && ('object' == _typeof(n[t]) ? n[t] instanceof Number ? r += t + ' : ' + n[t] + ' [' + n[t].numerator + '/' + n[t].denominator + ']\r\n' : r += t + ' : [' + n[t].length + ' values]\r\n' : r += t + ' : ' + n[t] + '\r\n');
        }
        return r;
    }, l.readFromBinaryFile = function (e) {
        return p(e);
    }, 'function' == typeof define && define.amd && define('exif-js', [], function () {
        return l;
    });
}.call(undefined));
define('exif', [], function () {
    return;
});
'use strict';
(function ($) {
    var settings = {};
    $.fn.fileinput_to_dataurl = function (options) {
        if (typeof EXIF !== 'function') {
            throw new Error('EXIF (exif-js) is not defined.');
        }
        settings = $.extend({
            max_width: 100,
            data_url_input: null,
            callback: null
        }, options);
        var $file_input = this;
        var $form = $file_input.closest('form');
        if ($('#' + settings.data_url_input).length === 0) {
            $file_input.before('<input type="hidden" name="' + settings.data_url_input + '" id="' + settings.data_url_input + '" />');
        }
        $form.on('submit', function (e) {
            $file_input.val('');
        });
        process($file_input);
    };
    function process($file_input) {
        if (window.File && window.FileReader && window.FormData) {
            $file_input.on('change', function (e) {
                var file = e.target.files[0];
                if (file && /^image\//i.test(file.type)) {
                    read_photo(file);
                }
            });
        }
    }
    ;
    function read_photo(photo) {
        var reader = new FileReader();
        reader.onloadend = function () {
            process_photo(reader.result, photo);
        };
        reader.readAsDataURL(photo);
    }
    ;
    function process_photo(data_url, photo) {
        var max_width = settings.max_width;
        var image = new Image();
        image.src = data_url;
        image.onload = function () {
            var width = image.width;
            var height = image.height;
            var should_resize = width > max_width;
            if (!should_resize) {
                $('#' + settings.data_url_input).val(data_url);
                if (typeof settings.callback === 'function') {
                    settings.callback();
                }
                return;
            }
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var new_width, new_height;
            if (width > height) {
                new_height = height * (max_width / width);
                new_width = max_width;
            } else {
                var max_height = image.height * max_width / image.width;
                new_width = width * (max_height / height);
                new_height = max_height;
            }
            EXIF.getData(photo, function () {
                var orientation = EXIF.getTag(this, 'Orientation');
                if (orientation && [
                        6,
                        8
                    ].indexOf(orientation) > -1) {
                    canvas.width = new_height;
                    canvas.height = new_width;
                    switch (orientation) {
                    case 6:
                        context.transform(0, 1, -1, 0, new_height, 0);
                        break;
                    case 8:
                        context.transform(0, -1, 1, 0, 0, new_width);
                        break;
                    }
                } else if (orientation && orientation == 3) {
                    canvas.width = new_width;
                    canvas.height = new_height;
                    context.transform(-1, 0, 0, -1, new_width, new_height);
                } else {
                    canvas.width = new_width;
                    canvas.height = new_height;
                }
                context.drawImage(image, 0, 0, new_width, new_height);
                data_url = canvas.toDataURL(photo.type);
                $('#' + settings.data_url_input).val(data_url);
                if (typeof settings.callback === 'function') {
                    settings.callback();
                }
            });
        };
    }
}(jQuery));
define('filetodataurl', [], function () {
    return;
});
'use strict';
define('app/Form/ImageDataUrl', [
    'exif',
    'filetodataurl'
], function dependencies(EXIF, filetodataurl) {
    function ImageDataUrl($container, state) {
        this.$container = $container;
        this.max_width = this.$container.data('max-width') || 200;
    }
    ImageDataUrl.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            this.$container.fileinput_to_dataurl({
                max_width: this.max_width,
                data_url_input: 'photo_data_url'
            });
            $('#photo_data_url').addClass('opaque_field');
        },
        detach: function detach() {
        }
    };
    return ImageDataUrl;
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
                if (_this2.data.ticket.status == 'new')
                    window.location.href = TKTApi.getTicketViewUrl();
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
            var ticket_view_url = TKTApi.getTicketViewUrl();
            this.$container.html(Template.render('tkt-user-connect-tpl', {
                ticket: ticket,
                ticket_view_url: ticket_view_url
            }));
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
            this.$container.addClass('tkt-carousel');
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
            this.fix_carousel_height();
            $(window).on('resize', function (e) {
                _this2.fix_carousel_height();
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
        fix_carousel_height: function fix_carousel_height() {
            this.$container.height(this.$container.width() * 9 / 16);
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
                this.$video_image = $('<img />').attr('src', this.video_image).attr('style', 'max-width: 100%').addClass('yt-video-image').appendTo(this.$container);
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
!function (e) {
    if ('function' == typeof define && define.amd)
        define('jqueryjson', ['jquery'], e);
    else if ('object' == typeof exports) {
        var n = require('jquery');
        module.exports = e(n);
    } else
        e(window.jQuery || window.Zepto || window.$);
}(function (e) {
    'use strict';
    e.fn.serializeJSON = function (n) {
        var r, s, t, i, a, u, l, o, p, c, d, f, y;
        return r = e.serializeJSON, s = this, t = r.setupOpts(n), i = s.serializeArray(), r.readCheckboxUncheckedValues(i, t, s), a = {}, e.each(i, function (e, n) {
            u = n.name, l = n.value, p = r.extractTypeAndNameWithNoType(u), c = p.nameWithNoType, (d = p.type) || (d = r.attrFromInputWithName(s, u, 'data-value-type')), r.validateType(u, d, t), 'skip' !== d && (f = r.splitInputNameIntoKeysArray(c), o = r.parseValue(l, u, d, t), (y = !o && r.shouldSkipFalsy(s, u, c, d, t)) || r.deepSet(a, f, o, t));
        }), a;
    }, e.serializeJSON = {
        defaultOptions: {
            checkboxUncheckedValue: void 0,
            parseNumbers: !1,
            parseBooleans: !1,
            parseNulls: !1,
            parseAll: !1,
            parseWithFunction: null,
            skipFalsyValuesForTypes: [],
            skipFalsyValuesForFields: [],
            customTypes: {},
            defaultTypes: {
                string: function (e) {
                    return String(e);
                },
                number: function (e) {
                    return Number(e);
                },
                boolean: function (e) {
                    return -1 === [
                        'false',
                        'null',
                        'undefined',
                        '',
                        '0'
                    ].indexOf(e);
                },
                null: function (e) {
                    return -1 === [
                        'false',
                        'null',
                        'undefined',
                        '',
                        '0'
                    ].indexOf(e) ? e : null;
                },
                array: function (e) {
                    return JSON.parse(e);
                },
                object: function (e) {
                    return JSON.parse(e);
                },
                auto: function (n) {
                    return e.serializeJSON.parseValue(n, null, null, {
                        parseNumbers: !0,
                        parseBooleans: !0,
                        parseNulls: !0
                    });
                },
                skip: null
            },
            useIntKeysAsArrayIndex: !1
        },
        setupOpts: function (n) {
            var r, s, t, i, a, u;
            u = e.serializeJSON, null == n && (n = {}), t = u.defaultOptions || {}, s = [
                'checkboxUncheckedValue',
                'parseNumbers',
                'parseBooleans',
                'parseNulls',
                'parseAll',
                'parseWithFunction',
                'skipFalsyValuesForTypes',
                'skipFalsyValuesForFields',
                'customTypes',
                'defaultTypes',
                'useIntKeysAsArrayIndex'
            ];
            for (r in n)
                if (-1 === s.indexOf(r))
                    throw new Error('serializeJSON ERROR: invalid option \'' + r + '\'. Please use one of ' + s.join(', '));
            return i = function (e) {
                return !1 !== n[e] && '' !== n[e] && (n[e] || t[e]);
            }, a = i('parseAll'), {
                checkboxUncheckedValue: i('checkboxUncheckedValue'),
                parseNumbers: a || i('parseNumbers'),
                parseBooleans: a || i('parseBooleans'),
                parseNulls: a || i('parseNulls'),
                parseWithFunction: i('parseWithFunction'),
                skipFalsyValuesForTypes: i('skipFalsyValuesForTypes'),
                skipFalsyValuesForFields: i('skipFalsyValuesForFields'),
                typeFunctions: e.extend({}, i('defaultTypes'), i('customTypes')),
                useIntKeysAsArrayIndex: i('useIntKeysAsArrayIndex')
            };
        },
        parseValue: function (n, r, s, t) {
            var i, a;
            return i = e.serializeJSON, a = n, t.typeFunctions && s && t.typeFunctions[s] ? a = t.typeFunctions[s](n) : t.parseNumbers && i.isNumeric(n) ? a = Number(n) : !t.parseBooleans || 'true' !== n && 'false' !== n ? t.parseNulls && 'null' == n ? a = null : t.typeFunctions && t.typeFunctions.string && (a = t.typeFunctions.string(n)) : a = 'true' === n, t.parseWithFunction && !s && (a = t.parseWithFunction(a, r)), a;
        },
        isObject: function (e) {
            return e === Object(e);
        },
        isUndefined: function (e) {
            return void 0 === e;
        },
        isValidArrayIndex: function (e) {
            return /^[0-9]+$/.test(String(e));
        },
        isNumeric: function (e) {
            return e - parseFloat(e) >= 0;
        },
        optionKeys: function (e) {
            if (Object.keys)
                return Object.keys(e);
            var n, r = [];
            for (n in e)
                r.push(n);
            return r;
        },
        readCheckboxUncheckedValues: function (n, r, s) {
            var t, i, a;
            null == r && (r = {}), e.serializeJSON, t = 'input[type=checkbox][name]:not(:checked):not([disabled])', s.find(t).add(s.filter(t)).each(function (s, t) {
                if (i = e(t), null == (a = i.attr('data-unchecked-value')) && (a = r.checkboxUncheckedValue), null != a) {
                    if (t.name && -1 !== t.name.indexOf('[]['))
                        throw new Error('serializeJSON ERROR: checkbox unchecked values are not supported on nested arrays of objects like \'' + t.name + '\'. See https://github.com/marioizquierdo/jquery.serializeJSON/issues/67');
                    n.push({
                        name: t.name,
                        value: a
                    });
                }
            });
        },
        extractTypeAndNameWithNoType: function (e) {
            var n;
            return (n = e.match(/(.*):([^:]+)$/)) ? {
                nameWithNoType: n[1],
                type: n[2]
            } : {
                nameWithNoType: e,
                type: null
            };
        },
        shouldSkipFalsy: function (n, r, s, t, i) {
            var a = e.serializeJSON.attrFromInputWithName(n, r, 'data-skip-falsy');
            if (null != a)
                return 'false' !== a;
            var u = i.skipFalsyValuesForFields;
            if (u && (-1 !== u.indexOf(s) || -1 !== u.indexOf(r)))
                return !0;
            var l = i.skipFalsyValuesForTypes;
            return null == t && (t = 'string'), !(!l || -1 === l.indexOf(t));
        },
        attrFromInputWithName: function (e, n, r) {
            var s, t;
            return s = n.replace(/(:|\.|\[|\]|\s)/g, '\\$1'), t = '[name="' + s + '"]', e.find(t).add(e.filter(t)).attr(r);
        },
        validateType: function (n, r, s) {
            var t, i;
            if (i = e.serializeJSON, t = i.optionKeys(s ? s.typeFunctions : i.defaultOptions.defaultTypes), r && -1 === t.indexOf(r))
                throw new Error('serializeJSON ERROR: Invalid type ' + r + ' found in input name \'' + n + '\', please use one of ' + t.join(', '));
            return !0;
        },
        splitInputNameIntoKeysArray: function (n) {
            var r;
            return e.serializeJSON, r = n.split('['), '' === (r = e.map(r, function (e) {
                return e.replace(/\]/g, '');
            }))[0] && r.shift(), r;
        },
        deepSet: function (n, r, s, t) {
            var i, a, u, l, o, p;
            if (null == t && (t = {}), (p = e.serializeJSON).isUndefined(n))
                throw new Error('ArgumentError: param \'o\' expected to be an object or array, found undefined');
            if (!r || 0 === r.length)
                throw new Error('ArgumentError: param \'keys\' expected to be an array with least one element');
            i = r[0], 1 === r.length ? '' === i ? n.push(s) : n[i] = s : (a = r[1], '' === i && (o = n[l = n.length - 1], i = p.isObject(o) && (p.isUndefined(o[a]) || r.length > 2) ? l : l + 1), '' === a ? !p.isUndefined(n[i]) && e.isArray(n[i]) || (n[i] = []) : t.useIntKeysAsArrayIndex && p.isValidArrayIndex(a) ? !p.isUndefined(n[i]) && e.isArray(n[i]) || (n[i] = []) : !p.isUndefined(n[i]) && p.isObject(n[i]) || (n[i] = {}), u = r.slice(1), p.deepSet(n[i], u, s, t));
        }
    };
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
    'jquery',
    'jqueryjson',
    'api',
    'i18n',
    'exif',
    'filetodataurl'
], function dependencies(config, postal, _, $, $json, TKTApi, i18n, EXIF, filetodataurl) {
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
            $('form', this.$container).submit(function (e) {
                e.preventDefault();
                _this.add_to_cart($('button[type="submit"]', _this.$container).data('redirect'));
                return false;
            });
        },
        add_to_cart: function add_to_cart(redirect) {
            var _this2 = this;
            var userdata = $('.field:visible,.opaque_field', this.$container).filter(function (i) {
                return !!$(this).val();
            }).serializeJSON();
            userdata.no_photo = true;
            this.$selected_pass = $('.choose-pass:checked', this.$container).parents('.pass');
            var type = this.$selected_pass.data('type');
            var pricing = $('.choose-pass:checked', this.$container).val();
            if (!pricing) {
                if ($('.choose-pass', this.$container).val().indexOf(':') === -1)
                    return this.show_error(i18n.t('Veuillez choisir un tarif'));
                var pass = $('.choose-pass', this.$container).val().split(':');
                type = pass[0];
                pricing = pass[1];
            }
            TKTApi.addPassToCart(type, pricing, userdata, function (err, status, rsp) {
                if (err)
                    return _this2.show_error(i18n.t('Une erreur est survenue. Veuillez ré-essayer ultérieurement.'));
                var url = null;
                switch (redirect) {
                case 'none':
                    _this2.show_success(i18n.t('Votre panier a été mis à jour'));
                    break;
                case 'cart':
                    url = config.get('cart_url');
                    break;
                case 'tkt_cart':
                    url = TKTApi.getCartViewUrl();
                    break;
                case 'tkt_checkout':
                    url = TKTApi.getCheckoutUrl();
                    break;
                }
                url && (window.location.href = url);
                postal.publish({
                    channel: 'cart',
                    topic: 'reload'
                });
            });
        },
        show_success: function show_success(msg) {
            $('.alert-success', this.$container).html(msg).show();
        },
        show_error: function show_error(msg) {
            $('.alert-danger', this.$container).html(msg).show();
        },
        sync_pass_form: function sync_pass_form(pass) {
            var fields_to_show = $('#' + pass + '-fields').val().split(',');
            var required_fields = [];
            var requested_fields = [];
            fields_to_show.map(function (field) {
                if (field.endsWith('?'))
                    requested_fields.push(field.slice(0, -1));
                else
                    required_fields.push(field);
            });
            $('.field', this.$container).each(function (i) {
                $(this).attr('required', false);
            });
            this.$wrappers.hide();
            _.each(this.$wrappers, function (w) {
                var id = $(w).attr('id').replace('field-wrapper-', '');
                var $field = $('#' + id);
                var $label = $('label[for=' + id + ']');
                if (required_fields.includes(id)) {
                    $field.attr('required', true);
                    $(w).fadeIn();
                } else if (requested_fields.includes(id)) {
                    $label.removeClass('required');
                    $(w).fadeIn();
                }
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
    'async',
    'api'
], function dependencies($, _, async, TKTApi) {
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
            var ids = _.compact(_.uniq(_.flatten(_.map(items, function (i) {
                return $(i).attr('data-bookability-ids').split(',');
            }))));
            var map = {};
            var chunks = _.chunk(ids, 150);
            var tasks = _.map(chunks, function (ids) {
                return function (done) {
                    TKTApi.getScreeningsInfo(ids, function (err, status, rsp) {
                        if (err)
                            return done(err);
                        _.each(rsp, function (s) {
                            map[s._id] = {
                                seats: s.seats,
                                sold_here: _.keys(s.pricings).length > 0 || s.eligible_types.length > 0
                            };
                        });
                        return done(null);
                    });
                };
            });
            async.parallel(tasks, function (err, results) {
                if (err)
                    return err;
                _.each(items, function (i) {
                    var ids = $(i).attr('data-bookability-ids').split(',');
                    var state = _.max(_.map(ids, function (i) {
                        var seats = map[i] ? map[i]['seats'] : 0;
                        var sold_here = map[i] ? map[i]['sold_here'] : false;
                        if (!sold_here)
                            return STATE_NOT_SOLD_HERE;
                        if (seats.available == 0)
                            return STATE_NOT_BOOKABLE;
                        if (seats.occupation_percentage >= MIN_SEATS_OCCUPATION)
                            return STATE_ALMOST_NOT_BOOKABLE;
                        return STATE_BOOKABLE;
                    }));
                    switch (state) {
                    case STATE_NOT_SOLD_HERE:
                        return $(i).addClass('not-sold-here');
                    case STATE_NOT_BOOKABLE:
                        return $(i).addClass('not-bookable');
                    case STATE_ALMOST_NOT_BOOKABLE:
                        return $(i).addClass('almost-not-bookable');
                    case STATE_BOOKABLE:
                        return $(i).addClass('bookable');
                    }
                });
                _this.$container.removeClass('loading-bookability-state').addClass('loaded-bookability-state');
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
    'lodash',
    'bootstrap'
], function dependencies(postal, $, _) {
    var _this2 = this;
    function Filter($container, state) {
        this.$container = $container;
        this.target = this.$container.data('target') || '.tkt_program_event';
        this.criteria = this.$container.data('criteria') || 'type';
        this.$filters = $('.tkt-filter', this.$container);
    }
    Filter.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            this.$filters.click(function (e) {
                return _this.handle_click(e);
            });
            this.$filters.each(function (i, f) {
                var value = $(f).data(_this.criteria);
                if (!value)
                    return;
                if ($(_this.target + '[data-' + _this.criteria + '*="' + value + '"]').length == 0)
                    $(f).remove();
            });
        },
        handle_click: function handle_click(e) {
            var $filter = $(e.target);
            if ($filter.parent('.tkt-filter').length) {
                $filter = $filter.parent('.tkt-filter');
            }
            var value = $filter.data(this.criteria);
            $('.tkt-filter').removeClass('active');
            $filter.addClass('active');
            this.filter_on(this.target, this.criteria, value);
        },
        filter_on: function filter_on(target, criteria, value) {
            if (!value)
                return $(_this2.target).not('[data-' + _this2.criteria + '*="' + value + '"]').fadeIn();
            $(target).not('[data-' + criteria + '*="' + value + '"]').hide();
            $(target + '[data-' + criteria + '*="' + value + '"]').fadeIn();
        },
        detach: function detach() {
        }
    };
    return Filter;
});
'use strict';
define('app/Program/Filters', [
    'postal',
    'jquery',
    'lodash',
    'moment',
    'bootstrap'
], function dependencies(postal, $, _, moment) {
    function Filters($container, state) {
        this.$container = $container;
        this.FILTER_TYPE_DAY = 'day';
        this.FILTER_TYPE_TIME = 'time';
        this.FILTER_TYPE_PLACE = 'place';
        this.target = '.' + (this.$container.data('target-class') || 'tkt_program_event');
        this.$targets = $(this.target, this.$container);
        this.$filters = $('.tkt-filter', this.$container);
    }
    Filters.prototype = {
        attach: function attach() {
            this.init();
        },
        init: function init() {
            var _this = this;
            this.$filters.click(function (e) {
                return _this.handle_click(e);
            });
        },
        handle_click: function handle_click(e) {
            var $filter = $(e.target);
            if ($filter.parent('.tkt-filter').length) {
                $filter = $filter.parent('.tkt-filter');
            }
            var value = $filter.data('filter');
            var criteria = $filter.data('filter-type');
            if ($filter.hasClass('active')) {
                $('.tkt-filter[data-filter-type="' + criteria + '"]').removeClass('active');
            } else {
                $('.tkt-filter[data-filter-type="' + criteria + '"]').removeClass('active');
                $filter.addClass('active');
            }
            _.map(this.$targets, function (t) {
                $(t).attr('data-filter-show', true);
            });
            this.filter_on_day(this.get_active_filter_value(this.FILTER_TYPE_DAY));
            this.filter_on_time(this.get_active_filter_value(this.FILTER_TYPE_TIME));
            this.filter_on_place(this.get_active_filter_value(this.FILTER_TYPE_PLACE));
            $(this.target + '[data-filter-show="false"]', this.$container).hide();
            $(this.target + '[data-filter-show="true"]', this.$container).fadeIn();
        },
        filter_on_day: function filter_on_day(value) {
            console.log(value);
            if (!value)
                return;
            $(this.target).not('[data-day*="' + value + '"]').attr('data-filter-show', false);
        },
        filter_on_time: function filter_on_time(value) {
            console.log(value);
            if (!value)
                return;
            var parts = value.split('-');
            var lower = moment(parts[0], 'HH:mm');
            var upper = moment(parts[1], 'HH:mm');
            _.map(this.$targets, function (t) {
                var time = moment($(t).data('time'), 'HH:mm');
                if (time.isBefore(lower) || time.isSame(upper) || time.isAfter(upper))
                    $(t).attr('data-filter-show', false);
            });
        },
        filter_on_place: function filter_on_place(value) {
            console.log(value);
            if (!value)
                return;
            $(this.target).not('[data-place*="' + value + '"]').attr('data-filter-show', false);
        },
        get_active_filter_value: function get_active_filter_value(criteria) {
            var active = $('.tkt-filter[data-filter-type="' + criteria + '"].active');
            return active ? $(active).data('filter') : null;
        },
        detach: function detach() {
        }
    };
    return Filters;
});
'use strict';
define('app/Ui/PlusMinus', [
    'postal',
    'jquery',
    'lodash',
    'bootstrap',
    'template'
], function dependencies(postal, $, _, Template) {
    function PlusMinus($container, state) {
        this.$container = $container;
    }
    PlusMinus.prototype = {
        attach: function attach() {
            var _this = this;
            setTimeout(function (e) {
                _this.init();
            }, 4000);
        },
        init: function init() {
            var _this2 = this;
            this.$inputs = $('.plus-minus-input', this.$container);
            _.map(this.$inputs, function (i) {
                _this2.build_ui(i);
            });
        },
        build_ui: function build_ui(input) {
            var $parent = $(input).parent();
            var $wrapper = $('<div/>').addClass('input-group');
            var $minus_btn = $('<span/>').addClass('.input-group-btn').text('-');
            var $plus_btn = $('<span/>').addClass('.input-group-btn').text('-');
            $wrapper.append($minus_btn).append(input).append($plus_btn).appendTo($parent);
        },
        detach: function detach() {
        }
    };
    return PlusMinus;
});
!function (a, b, c, d) {
    'use strict';
    function e(a, b, c) {
        return setTimeout(j(a, c), b);
    }
    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
    }
    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach)
                a.forEach(b, c);
            else if (a.length !== d)
                for (e = 0; e < a.length;)
                    b.call(c, a[e], e, a), e++;
            else
                for (e in a)
                    a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function h(b, c, d) {
        var e = 'DEPRECATED METHOD: ' + c + '\n' + d + ' AT \n';
        return function () {
            var c = new Error('get-stack-trace'), d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace', f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d), b.apply(this, arguments);
        };
    }
    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
    }
    function j(a, b) {
        return function () {
            return a.apply(b, arguments);
        };
    }
    function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function l(a, b) {
        return a === d ? b : a;
    }
    function m(a, b, c) {
        g(q(b), function (b) {
            a.addEventListener(b, c, !1);
        });
    }
    function n(a, b, c) {
        g(q(b), function (b) {
            a.removeEventListener(b, c, !1);
        });
    }
    function o(a, b) {
        for (; a;) {
            if (a == b)
                return !0;
            a = a.parentNode;
        }
        return !1;
    }
    function p(a, b) {
        return a.indexOf(b) > -1;
    }
    function q(a) {
        return a.trim().split(/\s+/g);
    }
    function r(a, b, c) {
        if (a.indexOf && !c)
            return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b)
                return d;
            d++;
        }
        return -1;
    }
    function s(a) {
        return Array.prototype.slice.call(a, 0);
    }
    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
        }
        return c && (d = b ? d.sort(function (a, c) {
            return a[b] > c[b];
        }) : d.sort()), d;
    }
    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
            if (c = ma[g], e = c ? c + f : b, e in a)
                return e;
            g++;
        }
        return d;
    }
    function v() {
        return ua++;
    }
    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a;
    }
    function x(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            k(a.options.enable, [a]) && c.handler(b);
        }, this.init();
    }
    function y(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
    }
    function z(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & Ea && d - e === 0, g = b & (Ga | Ha) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit('hammer.input', c), a.recognize(c), a.session.prevInput = c;
    }
    function A(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = E(d);
        b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
    }
    function B(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
    }
    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX, k = b.deltaY - h.deltaY, l = F(i, j, k);
            e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
        } else
            c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
    }
    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;)
            b[c] = {
                clientX: pa(a.pointers[c].clientX),
                clientY: pa(a.pointers[c].clientY)
            }, c++;
        return {
            timeStamp: ra(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        };
    }
    function E(a) {
        var b = a.length;
        if (1 === b)
            return {
                x: pa(a[0].clientX),
                y: pa(a[0].clientY)
            };
        for (var c = 0, d = 0, e = 0; b > e;)
            c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: pa(c / b),
            y: pa(d / b)
        };
    }
    function F(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        };
    }
    function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
    }
    function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e);
    }
    function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI;
    }
    function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
    }
    function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
    }
    function L() {
        this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
    }
    function M() {
        this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    function N() {
        this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
    }
    function O(a, b) {
        var c = s(a.touches), d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), 'identifier', !0)), [
            c,
            d
        ];
    }
    function P() {
        this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
    }
    function Q(a, b) {
        var c = s(a.touches), d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length)
            return d[c[0].identifier] = !0, [
                c,
                c
            ];
        var e, f, g = s(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function (a) {
                return o(a.target, i);
            }), b === Ea)
            for (e = 0; e < f.length;)
                d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;)
            d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
        return h.length ? [
            t(f.concat(h), 'identifier', !0),
            h
        ] : void 0;
    }
    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
    }
    function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
    }
    function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
            var c = {
                x: b.clientX,
                y: b.clientY
            };
            this.lastTouches.push(c);
            var d = this.lastTouches, e = function () {
                    var a = d.indexOf(c);
                    a > -1 && d.splice(a, 1);
                };
            setTimeout(e, cb);
        }
    }
    function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d], f = Math.abs(b - e.x), g = Math.abs(c - e.y);
            if (db >= f && db >= g)
                return !0;
        }
        return !1;
    }
    function V(a, b) {
        this.manager = a, this.set(b);
    }
    function W(a) {
        if (p(a, jb))
            return jb;
        var b = p(a, kb), c = p(a, lb);
        return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
    }
    function X() {
        if (!fb)
            return !1;
        var b = {}, c = a.CSS && a.CSS.supports;
        return [
            'auto',
            'manipulation',
            'pan-y',
            'pan-x',
            'pan-x pan-y',
            'none'
        ].forEach(function (d) {
            b[d] = c ? a.CSS.supports('touch-action', d) : !0;
        }), b;
    }
    function Y(a) {
        this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
    }
    function Z(a) {
        return a & sb ? 'cancel' : a & qb ? 'end' : a & pb ? 'move' : a & ob ? 'start' : '';
    }
    function $(a) {
        return a == Ma ? 'down' : a == La ? 'up' : a == Ja ? 'left' : a == Ka ? 'right' : '';
    }
    function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a;
    }
    function aa() {
        Y.apply(this, arguments);
    }
    function ba() {
        aa.apply(this, arguments), this.pX = null, this.pY = null;
    }
    function ca() {
        aa.apply(this, arguments);
    }
    function da() {
        Y.apply(this, arguments), this._timer = null, this._input = null;
    }
    function ea() {
        aa.apply(this, arguments);
    }
    function fa() {
        aa.apply(this, arguments);
    }
    function ga() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    function ha(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
    }
    function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
        }, this);
    }
    function ja(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            g(a.options.cssProps, function (e, f) {
                d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || '';
            }), b || (a.oldCssProps = {});
        }
    }
    function ka(a, c) {
        var d = b.createEvent('Event');
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
    }
    var la, ma = [
            '',
            'webkit',
            'Moz',
            'MS',
            'ms',
            'o'
        ], na = b.createElement('div'), oa = 'function', pa = Math.round, qa = Math.abs, ra = Date.now;
    la = 'function' != typeof Object.assign ? function (a) {
        if (a === d || null === a)
            throw new TypeError('Cannot convert undefined or null to object');
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)
                for (var f in e)
                    e.hasOwnProperty(f) && (b[f] = e[f]);
        }
        return b;
    } : Object.assign;
    var sa = h(function (a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length;)
                (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
            return a;
        }, 'extend', 'Use `assign`.'), ta = h(function (a, b) {
            return sa(a, b, !0);
        }, 'merge', 'Use `assign`.'), ua = 1, va = /mobile|tablet|ip(ad|hone|od)|android/i, wa = 'ontouchstart' in a, xa = u(a, 'PointerEvent') !== d, ya = wa && va.test(navigator.userAgent), za = 'touch', Aa = 'pen', Ba = 'mouse', Ca = 'kinect', Da = 25, Ea = 1, Fa = 2, Ga = 4, Ha = 8, Ia = 1, Ja = 2, Ka = 4, La = 8, Ma = 16, Na = Ja | Ka, Oa = La | Ma, Pa = Na | Oa, Qa = [
            'x',
            'y'
        ], Ra = [
            'clientX',
            'clientY'
        ];
    x.prototype = {
        handler: function () {
        },
        init: function () {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
        }
    };
    var Sa = {
            mousedown: Ea,
            mousemove: Fa,
            mouseup: Ga
        }, Ta = 'mousedown', Ua = 'mousemove mouseup';
    i(L, x, {
        handler: function (a) {
            var b = Sa[a.type];
            b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a
            }));
        }
    });
    var Va = {
            pointerdown: Ea,
            pointermove: Fa,
            pointerup: Ga,
            pointercancel: Ha,
            pointerout: Ha
        }, Wa = {
            2: za,
            3: Aa,
            4: Ba,
            5: Ca
        }, Xa = 'pointerdown', Ya = 'pointermove pointerup pointercancel';
    a.MSPointerEvent && !a.PointerEvent && (Xa = 'MSPointerDown', Ya = 'MSPointerMove MSPointerUp MSPointerCancel'), i(M, x, {
        handler: function (a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace('ms', ''), e = Va[d], f = Wa[a.pointerType] || a.pointerType, g = f == za, h = r(b, a.pointerId, 'pointerId');
            e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1));
        }
    });
    var Za = {
            touchstart: Ea,
            touchmove: Fa,
            touchend: Ga,
            touchcancel: Ha
        }, $a = 'touchstart', _a = 'touchstart touchmove touchend touchcancel';
    i(N, x, {
        handler: function (a) {
            var b = Za[a.type];
            if (b === Ea && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                });
            }
        }
    });
    var ab = {
            touchstart: Ea,
            touchmove: Fa,
            touchend: Ga,
            touchcancel: Ha
        }, bb = 'touchstart touchmove touchend touchcancel';
    i(P, x, {
        handler: function (a) {
            var b = ab[a.type], c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a
            });
        }
    });
    var cb = 2500, db = 25;
    i(R, x, {
        handler: function (a, b, c) {
            var d = c.pointerType == za, e = c.pointerType == Ba;
            if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d)
                    S.call(this, b, c);
                else if (e && U.call(this, c))
                    return;
                this.callback(a, b, c);
            }
        },
        destroy: function () {
            this.touch.destroy(), this.mouse.destroy();
        }
    });
    var eb = u(na.style, 'touchAction'), fb = eb !== d, gb = 'compute', hb = 'auto', ib = 'manipulation', jb = 'none', kb = 'pan-x', lb = 'pan-y', mb = X();
    V.prototype = {
        set: function (a) {
            a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
        },
        update: function () {
            this.set(this.manager.options.touchAction);
        },
        compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
            }), W(a.join(' '));
        },
        preventDefaults: function (a) {
            var b = a.srcEvent, c = a.offsetDirection;
            if (this.manager.session.prevented)
                return void b.preventDefault();
            var d = this.actions, e = p(d, jb) && !mb[jb], f = p(d, lb) && !mb[lb], g = p(d, kb) && !mb[kb];
            if (e) {
                var h = 1 === a.pointers.length, i = a.distance < 2, j = a.deltaTime < 250;
                if (h && i && j)
                    return;
            }
            return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
        },
        preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault();
        }
    };
    var nb = 1, ob = 2, pb = 4, qb = 8, rb = qb, sb = 16, tb = 32;
    Y.prototype = {
        defaults: {},
        set: function (a) {
            return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function (a) {
            if (f(a, 'recognizeWith', this))
                return this;
            var b = this.simultaneous;
            return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
        },
        dropRecognizeWith: function (a) {
            return f(a, 'dropRecognizeWith', this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
        },
        requireFailure: function (a) {
            if (f(a, 'requireFailure', this))
                return this;
            var b = this.requireFail;
            return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
        },
        dropRequireFailure: function (a) {
            if (f(a, 'dropRequireFailure', this))
                return this;
            a = _(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this;
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id];
        },
        emit: function (a) {
            function b(b) {
                c.manager.emit(b, a);
            }
            var c = this, d = this.state;
            qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
        },
        tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : void (this.state = tb);
        },
        canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (tb | nb)))
                    return !1;
                a++;
            }
            return !0;
        },
        recognize: function (a) {
            var b = la({}, a);
            return k(this.options.enable, [
                this,
                b
            ]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
        },
        process: function (a) {
        },
        getTouchAction: function () {
        },
        reset: function () {
        }
    }, i(aa, Y, {
        defaults: { pointers: 1 },
        attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b;
        },
        process: function (a) {
            var b = this.state, c = a.eventType, d = b & (ob | pb), e = this.attrTest(a);
            return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
        }
    }), i(ba, aa, {
        defaults: {
            event: 'pan',
            threshold: 10,
            pointers: 1,
            direction: Pa
        },
        getTouchAction: function () {
            var a = this.options.direction, b = [];
            return a & Na && b.push(lb), a & Oa && b.push(kb), b;
        },
        directionTest: function (a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
        },
        attrTest: function (a) {
            return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
        },
        emit: function (a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = $(a.direction);
            b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
        }
    }), i(ca, aa, {
        defaults: {
            event: 'pinch',
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [jb];
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
        },
        emit: function (a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? 'in' : 'out';
                a.additionalEvent = this.options.event + b;
            }
            this._super.emit.call(this, a);
        }
    }), i(da, Y, {
        defaults: {
            event: 'press',
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function () {
            return [hb];
        },
        process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f)
                this.reset();
            else if (a.eventType & Ea)
                this.reset(), this._timer = e(function () {
                    this.state = rb, this.tryEmit();
                }, b.time, this);
            else if (a.eventType & Ga)
                return rb;
            return tb;
        },
        reset: function () {
            clearTimeout(this._timer);
        },
        emit: function (a) {
            this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + 'up', a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
        }
    }), i(ea, aa, {
        defaults: {
            event: 'rotate',
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [jb];
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
        }
    }), i(fa, aa, {
        defaults: {
            event: 'swipe',
            threshold: 10,
            velocity: 0.3,
            direction: Na | Oa,
            pointers: 1
        },
        getTouchAction: function () {
            return ba.prototype.getTouchAction.call(this);
        },
        attrTest: function (a) {
            var b, c = this.options.direction;
            return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
        },
        emit: function (a) {
            var b = $(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
        }
    }), i(ga, Y, {
        defaults: {
            event: 'tap',
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function () {
            return [ib];
        },
        process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & Ea && 0 === this.count)
                return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ga)
                    return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i)
                    return this.hasRequireFailures() ? (this._timer = e(function () {
                        this.state = rb, this.tryEmit();
                    }, b.interval, this), ob) : rb;
            }
            return tb;
        },
        failTimeout: function () {
            return this._timer = e(function () {
                this.state = tb;
            }, this.options.interval, this), tb;
        },
        reset: function () {
            clearTimeout(this._timer);
        },
        emit: function () {
            this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
    }), ha.VERSION = '2.0.7', ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [
                ea,
                { enable: !1 }
            ],
            [
                ca,
                { enable: !1 },
                ['rotate']
            ],
            [
                fa,
                { direction: Na }
            ],
            [
                ba,
                { direction: Na },
                ['swipe']
            ],
            [ga],
            [
                ga,
                {
                    event: 'doubletap',
                    taps: 2
                },
                ['tap']
            ],
            [da]
        ],
        cssProps: {
            userSelect: 'none',
            touchSelect: 'none',
            touchCallout: 'none',
            contentZooming: 'none',
            userDrag: 'none',
            tapHighlightColor: 'rgba(0,0,0,0)'
        }
    };
    var ub = 1, vb = 2;
    ia.prototype = {
        set: function (a) {
            return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
        },
        stop: function (a) {
            this.session.stopped = a ? vb : ub;
        },
        recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;)
                    c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
            }
        },
        get: function (a) {
            if (a instanceof Y)
                return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a)
                    return b[c];
            return null;
        },
        add: function (a) {
            if (f(a, 'add', this))
                return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
        },
        remove: function (a) {
            if (f(a, 'remove', this))
                return this;
            if (a = this.get(a)) {
                var b = this.recognizers, c = r(b, a);
                -1 !== c && (b.splice(c, 1), this.touchAction.update());
            }
            return this;
        },
        on: function (a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    c[a] = c[a] || [], c[a].push(b);
                }), this;
            }
        },
        off: function (a, b) {
            if (a !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
                }), this;
            }
        },
        emit: function (a, b) {
            this.options.domEvents && ka(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault();
                };
                for (var d = 0; d < c.length;)
                    c[d](b), d++;
            }
        },
        destroy: function () {
            this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        }
    }, la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var wb = 'undefined' != typeof a ? a : 'undefined' != typeof self ? self : {};
    wb.Hammer = ha, 'function' == typeof define && define.amd ? define('hammer', [], function () {
        return ha;
    }) : 'undefined' != typeof module && module.exports ? module.exports = ha : a[c] = ha;
}(window, document, 'Hammer');
'use strict';
define('app/Ui/ScreenSaver', [
    'postal',
    'jquery',
    'hammer'
], function dependencies(postal, $, Template, hammer) {
    function ScreenSaver($container, state) {
        this.$container = $container;
        this.hammer = new Hammer(document.getElementsByTagName('body')[0], {});
        this.$container.addClass('tkt-screen-saver');
        this.default_countdown = this.$container.data('countdown') || 300;
        this.redirect_url = this.$container.data('redirect-on-lock') || 300;
    }
    ScreenSaver.prototype = {
        attach: function attach() {
            this.initState();
            this.init();
        },
        initState: function initState() {
            this.state = {
                'locked': false,
                'countdown': this.default_countdown
            };
        },
        setState: function setState(newState) {
            for (var i in newState) {
                this.state[i] = newState[i];
            }
        },
        init: function init() {
            var _this = this;
            if (window.location.hash == '#show-screen-saver') {
                this.lock();
            }
            this.interval = setInterval(function (e) {
                _this.check_countdown();
            }, 1000);
            this.hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            this.hammer.on('swipe tap', this.touched.bind(this));
            this.$container.on('click', this.touched.bind(this));
            this.$debug = $('<span/>').appendTo(this.$container);
        },
        check_countdown: function check_countdown() {
            if (this.state.locked)
                return;
            this.setState({ 'countdown': this.state.countdown - 1 });
            this.$debug.text(this.state.countdown);
            if (this.state.countdown <= 0) {
                this.lock();
            }
        },
        touched: function touched() {
            if (this.state.locked) {
                this.unlock();
            } else {
                this.setState({ 'countdown': this.default_countdown });
            }
        },
        lock: function lock() {
            this.setState({ 'locked': true });
            if (window.location.hash == '#show-screen-saver') {
                this.$container.show();
            } else {
                window.location.href = this.redirect_url + '#show-screen-saver';
            }
        },
        unlock: function unlock() {
            this.$container.hide();
            this.setState({
                'locked': false,
                'countdown': this.default_countdown
            });
        },
        detach: function detach() {
        }
    };
    return ScreenSaver;
});
'use strict';
requirejs.config({
    paths: {
        assets: 'app/Core/Assets',
        config: 'app/Core/Config',
        i18n: 'app/Core/i18n',
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
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min',
        ticketack: './ext/ticketack',
        exif: './ext/exif-js.min',
        filetodataurl: './ext/fileinput-to-dataurl',
        urijs: '../../node_modules/urijs/src',
        moment: '../../node_modules/moment/min/moment-with-locales.min',
        postal: '../../node_modules/postal/lib/postal.min',
        lodash: '../../node_modules/lodash/lodash.min',
        hammer: '../../node_modules/hammerjs/hammer.min',
        jqueryjson: '../../node_modules/jquery-serializejson/jquery.serializejson.min'
    }
});
define('jquery', [], function () {
    return window.jQuery.noConflict(true);
});
require([
    'app/main',
    'app/Articles/Article',
    'app/Booking/Form',
    'app/Cart/Cart',
    'app/Cart/CartIcon',
    'app/Form/ImageDataUrl',
    'app/User/UserConnect',
    'app/Media/Carousel',
    'app/Media/Loading',
    'app/Media/YoutubeVideo',
    'app/Pass/BuyForm',
    'app/Program/BookabilityState',
    'app/Program/Filter',
    'app/Program/Filters',
    'app/Ui/PlusMinus',
    'app/Ui/ScreenSaver'
]);
define('app', [
    'app/main',
    'app/Articles/Article',
    'app/Booking/Form',
    'app/Cart/Cart',
    'app/Cart/CartIcon',
    'app/Form/ImageDataUrl',
    'app/User/UserConnect',
    'app/Media/Carousel',
    'app/Media/Loading',
    'app/Media/YoutubeVideo',
    'app/Pass/BuyForm',
    'app/Program/BookabilityState',
    'app/Program/Filter',
    'app/Program/Filters',
    'app/Ui/PlusMinus',
    'app/Ui/ScreenSaver'
], function () {
    return;
});
//# sourceMappingURL=app.js.map
