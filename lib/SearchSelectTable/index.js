import e, { useState as t, useRef as n, useEffect as r } from 'react';
import { Select as o, Spin as i, Table as c } from 'antd';
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var l =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  u = 'object' == typeof l && l && l.Object === Object && l,
  a = 'object' == typeof self && self && self.Object === Object && self,
  f = u || a || Function('return this')(),
  s = f.Symbol,
  d = Object.prototype,
  p = d.hasOwnProperty,
  m = d.toString,
  v = s ? s.toStringTag : void 0;
var y = function (e) {
    var t = p.call(e, v),
      n = e[v];
    try {
      e[v] = void 0;
      var r = !0;
    } catch (e) {}
    var o = m.call(e);
    return r && (t ? (e[v] = n) : delete e[v]), o;
  },
  b = Object.prototype.toString;
var g = function (e) {
    return b.call(e);
  },
  h = s ? s.toStringTag : void 0;
var j = function (e) {
  return null == e
    ? void 0 === e
      ? '[object Undefined]'
      : '[object Null]'
    : h && h in Object(e)
    ? y(e)
    : g(e);
};
var O = function (e) {
  var t = typeof e;
  return null != e && ('object' == t || 'function' == t);
};
var w = function (e) {
    if (!O(e)) return !1;
    var t = j(e);
    return (
      '[object Function]' == t ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  },
  x = function () {
    return f.Date.now();
  };
var T = function (e) {
  return null != e && 'object' == typeof e;
};
var S = function (e) {
    return 'symbol' == typeof e || (T(e) && '[object Symbol]' == j(e));
  },
  N = /^\s+|\s+$/g,
  E = /^[-+]0x[0-9a-f]+$/i,
  P = /^0b[01]+$/i,
  F = /^0o[0-7]+$/i,
  K = parseInt;
var C = function (e) {
    if ('number' == typeof e) return e;
    if (S(e)) return NaN;
    if (O(e)) {
      var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
      e = O(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = e.replace(N, '');
    var n = P.test(e);
    return n || F.test(e) ? K(e.slice(2), n ? 2 : 8) : E.test(e) ? NaN : +e;
  },
  R = Math.max,
  $ = Math.min;
var A = function (e, t, n) {
  var r,
    o,
    i,
    c,
    l,
    u,
    a = 0,
    f = !1,
    s = !1,
    d = !0;
  if ('function' != typeof e) throw new TypeError('Expected a function');
  function p(t) {
    var n = r,
      i = o;
    return (r = o = void 0), (a = t), (c = e.apply(i, n));
  }
  function m(e) {
    return (a = e), (l = setTimeout(y, t)), f ? p(e) : c;
  }
  function v(e) {
    var n = e - u;
    return void 0 === u || n >= t || n < 0 || (s && e - a >= i);
  }
  function y() {
    var e = x();
    if (v(e)) return b(e);
    l = setTimeout(
      y,
      (function (e) {
        var n = t - (e - u);
        return s ? $(n, i - (e - a)) : n;
      })(e),
    );
  }
  function b(e) {
    return (l = void 0), d && r ? p(e) : ((r = o = void 0), c);
  }
  function g() {
    var e = x(),
      n = v(e);
    if (((r = arguments), (o = this), (u = e), n)) {
      if (void 0 === l) return m(u);
      if (s) return clearTimeout(l), (l = setTimeout(y, t)), p(u);
    }
    return void 0 === l && (l = setTimeout(y, t)), c;
  }
  return (
    (t = C(t) || 0),
    O(n) &&
      ((f = !!n.leading),
      (i = (s = 'maxWait' in n) ? R(C(n.maxWait) || 0, t) : i),
      (d = 'trailing' in n ? !!n.trailing : d)),
    (g.cancel = function () {
      void 0 !== l && clearTimeout(l), (a = 0), (r = u = o = l = void 0);
    }),
    (g.flush = function () {
      return void 0 === l ? c : b(x());
    }),
    g
  );
};
function B(l) {
  const {
      ctrlRef: u,
      onBlurCb: a,
      onSelect: f,
      scrollY: s = 500,
      showText: d = !0,
      introducerPatientName: p,
      api: m,
      paramsKey: v = 'regularParam',
      columns: y,
      style: b = { width: '400px' },
      placeholder: g,
      rowKey: h = 'id',
    } = l,
    j = (function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    })(l, [
      'ctrlRef',
      'onBlurCb',
      'onSelect',
      'scrollY',
      'showText',
      'introducerPatientName',
      'api',
      'paramsKey',
      'columns',
      'style',
      'placeholder',
      'rowKey',
    ]),
    [O, x] = t([]),
    [T, S] = t(!1),
    [N, E] = t(void 0),
    P = n(!1),
    F = n(null),
    K = n(!1);
  return (
    r(() => {
      u && (u.current = { setFocus: C }), !N && d && E(p);
    }),
    e.createElement(
      o,
      Object.assign(
        {
          style: b,
          ref: F,
          showSearch: !0,
          value: N,
          notFoundContent: (function () {
            if (T) return e.createElement(i, { size: 'small', className: 'm-6 ml-20' });
            if (N && 0 === O.length)
              return e.createElement('div', { className: 'p-10' }, '暂无数据');
            if (0 === O.length) return null;
          })(),
          filterOption: !1,
          onSearch: A(function (e) {
            let t = '';
            !d && E(e), (K.current = !0);
            const n = P.current;
            P.current ? ((P.current = !1), (t = N), x([]), !d && E(void 0)) : (t = e);
            if (!t) return (K.current = !1), x([]);
            if ((S(!0), n)) return;
            m({ [v]: e })
              .then((e) => {
                x(e.data), (K.current = !1);
              })
              .finally(() => {
                setTimeout(() => {
                  S(!1);
                }, 100);
              })
              .catch();
          }, 300),
          onBlur: function () {
            !d && E(void 0),
              (!K.current || O.length > 0) && (P.current = !0),
              setTimeout(() => {
                O.length || (a && a());
              }, 200);
          },
          bordered: !!d,
          onFocus: function () {
            (P.current = !1), S(!1);
          },
          dropdownRender: () =>
            T
              ? e.createElement(
                  'div',
                  { style: { textAlign: 'center' } },
                  e.createElement(i, { size: 'small', className: 'm-6 ml-20' }),
                )
              : N && 0 === O.length
              ? e.createElement(
                  'div',
                  { className: 'p-10', style: { textAlign: 'center' } },
                  '暂无数据',
                )
              : 0 === O.length
              ? null
              : e.createElement(c, {
                  scroll: { y: s },
                  columns: y,
                  dataSource: O,
                  pagination: !1,
                  rowKey: (e) => e[h],
                  onRow: (e) => ({
                    onClick: () => {
                      w(f) && f(e), x([]), E(d ? e.patientName : void 0), F.current.blur();
                    },
                  }),
                }),
        },
        j,
        { placeholder: g || '姓名/拼音/简拼/联系电话模糊查询' },
      ),
      O.map((t) => e.createElement(o.Option, { key: t[h] }, t.text)),
    )
  );
  function C() {
    F.current.focus();
  }
}
export default B;
