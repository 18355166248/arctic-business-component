import e, { useState as t, useRef as n, useEffect as r } from 'react';
import { Select as o, Spin as i, Table as c, Calendar as l, Popover as a } from 'antd';
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
***************************************************************************** */ var u =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  f = 'object' == typeof u && u && u.Object === Object && u,
  s = 'object' == typeof self && self && self.Object === Object && self,
  d = f || s || Function('return this')(),
  m = d.Symbol,
  v = Object.prototype,
  p = v.hasOwnProperty,
  y = v.toString,
  b = m ? m.toStringTag : void 0;
var g = function (e) {
    var t = p.call(e, b),
      n = e[b];
    try {
      e[b] = void 0;
      var r = !0;
    } catch (e) {}
    var o = y.call(e);
    return r && (t ? (e[b] = n) : delete e[b]), o;
  },
  h = Object.prototype.toString;
var j = function (e) {
    return h.call(e);
  },
  O = m ? m.toStringTag : void 0;
var w = function (e) {
  return null == e
    ? void 0 === e
      ? '[object Undefined]'
      : '[object Null]'
    : O && O in Object(e)
    ? g(e)
    : j(e);
};
var x = function (e) {
  var t = typeof e;
  return null != e && ('object' == t || 'function' == t);
};
var E = function (e) {
    if (!x(e)) return !1;
    var t = w(e);
    return (
      '[object Function]' == t ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  },
  T = function () {
    return d.Date.now();
  };
var N = function (e) {
  return null != e && 'object' == typeof e;
};
var S = function (e) {
    return 'symbol' == typeof e || (N(e) && '[object Symbol]' == w(e));
  },
  C = /^\s+|\s+$/g,
  P = /^[-+]0x[0-9a-f]+$/i,
  F = /^0b[01]+$/i,
  k = /^0o[0-7]+$/i,
  R = parseInt;
var K = function (e) {
    if ('number' == typeof e) return e;
    if (S(e)) return NaN;
    if (x(e)) {
      var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
      e = x(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = e.replace(C, '');
    var n = F.test(e);
    return n || k.test(e) ? R(e.slice(2), n ? 2 : 8) : P.test(e) ? NaN : +e;
  },
  $ = Math.max,
  A = Math.min;
var B = function (e, t, n) {
  var r,
    o,
    i,
    c,
    l,
    a,
    u = 0,
    f = !1,
    s = !1,
    d = !0;
  if ('function' != typeof e) throw new TypeError('Expected a function');
  function m(t) {
    var n = r,
      i = o;
    return (r = o = void 0), (u = t), (c = e.apply(i, n));
  }
  function v(e) {
    return (u = e), (l = setTimeout(y, t)), f ? m(e) : c;
  }
  function p(e) {
    var n = e - a;
    return void 0 === a || n >= t || n < 0 || (s && e - u >= i);
  }
  function y() {
    var e = T();
    if (p(e)) return b(e);
    l = setTimeout(
      y,
      (function (e) {
        var n = t - (e - a);
        return s ? A(n, i - (e - u)) : n;
      })(e),
    );
  }
  function b(e) {
    return (l = void 0), d && r ? m(e) : ((r = o = void 0), c);
  }
  function g() {
    var e = T(),
      n = p(e);
    if (((r = arguments), (o = this), (a = e), n)) {
      if (void 0 === l) return v(a);
      if (s) return clearTimeout(l), (l = setTimeout(y, t)), m(a);
    }
    return void 0 === l && (l = setTimeout(y, t)), c;
  }
  return (
    (t = K(t) || 0),
    x(n) &&
      ((f = !!n.leading),
      (i = (s = 'maxWait' in n) ? $(K(n.maxWait) || 0, t) : i),
      (d = 'trailing' in n ? !!n.trailing : d)),
    (g.cancel = function () {
      void 0 !== l && clearTimeout(l), (u = 0), (r = a = o = l = void 0);
    }),
    (g.flush = function () {
      return void 0 === l ? c : b(T());
    }),
    g
  );
};
function D(l) {
  const {
      ctrlRef: a,
      onBlurCb: u,
      onSelect: f,
      scrollY: s = 500,
      showText: d = !0,
      introducerPatientName: m,
      api: v,
      paramsKey: p = 'regularParam',
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
    [O, w] = t([]),
    [x, T] = t(!1),
    [N, S] = t(void 0),
    C = n(!1),
    P = n(null),
    F = n(!1);
  return (
    r(() => {
      a && (a.current = { setFocus: k }), !N && d && S(m);
    }),
    e.createElement(
      o,
      Object.assign(
        {
          style: b,
          ref: P,
          showSearch: !0,
          value: N,
          notFoundContent: (function () {
            if (x) return e.createElement(i, { size: 'small', className: 'm-6 ml-20' });
            if (N && 0 === O.length)
              return e.createElement('div', { className: 'p-10' }, '暂无数据');
            if (0 === O.length) return null;
          })(),
          filterOption: !1,
          onSearch: B(function (e) {
            let t = '';
            !d && S(e), (F.current = !0);
            const n = C.current;
            C.current ? ((C.current = !1), (t = N), w([]), !d && S(void 0)) : (t = e);
            if (!t) return (F.current = !1), w([]);
            if ((T(!0), n)) return;
            v({ [p]: e })
              .then((e) => {
                w(e.data), (F.current = !1);
              })
              .finally(() => {
                setTimeout(() => {
                  T(!1);
                }, 100);
              })
              .catch();
          }, 300),
          onBlur: function () {
            !d && S(void 0),
              (!F.current || O.length > 0) && (C.current = !0),
              setTimeout(() => {
                O.length || (u && u());
              }, 200);
          },
          bordered: !!d,
          onFocus: function () {
            (C.current = !1), T(!1);
          },
          dropdownRender: () =>
            x
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
                      E(f) && f(e), w([]), S(d ? e.patientName : void 0), P.current.blur();
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
  function k() {
    P.current.focus();
  }
}
var M = 'index_CMCard__2nt5e';
function _(n) {
  const { value: r, onChange: o, PopoverContent: i } = n,
    [c, u] = t({});
  return e.createElement(l, {
    headerRender: () => null,
    onChange: function (e) {
      E(o) && o(e);
    },
    dateFullCellRender: function (t) {
      return e.createElement(
        'div',
        { className: M },
        t.format('DD'),
        e.createElement(
          a,
          { text: '33333', content: '33333', trigger: 'click' },
          e.createElement(
            'div',
            { onClick: () => u({ text: '2222', content: e.createElement('div', null, '99999') }) },
            '2',
          ),
        ),
        e.createElement(
          a,
          { text: '1111', content: '1111', trigger: 'click' },
          e.createElement(
            'div',
            { onClick: () => u({ text: '111', content: e.createElement('div', null, '77777') }) },
            '1',
          ),
        ),
      );
    },
    value: r,
  });
}
export { _ as CalendarMonth, D as SearchSelectTable };
