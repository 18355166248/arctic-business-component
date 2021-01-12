!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t(require('react'), require('antd')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'antd'], t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).SearchSelectTable = t(
        e.react,
        e.antd,
      ));
})(this, function (e, t) {
  'use strict';
  function n(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  var r = n(e);
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
    ***************************************************************************** */ var o =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    i = 'object' == typeof o && o && o.Object === Object && o,
    u = 'object' == typeof self && self && self.Object === Object && self,
    l = i || u || Function('return this')(),
    a = l.Symbol,
    c = Object.prototype,
    f = c.hasOwnProperty,
    s = c.toString,
    d = a ? a.toStringTag : void 0;
  var p = function (e) {
      var t = f.call(e, d),
        n = e[d];
      try {
        e[d] = void 0;
        var r = !0;
      } catch (e) {}
      var o = s.call(e);
      return r && (t ? (e[d] = n) : delete e[d]), o;
    },
    y = Object.prototype.toString;
  var m = function (e) {
      return y.call(e);
    },
    v = a ? a.toStringTag : void 0;
  var b = function (e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : v && v in Object(e)
      ? p(e)
      : m(e);
  };
  var h = function (e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  };
  var g = function (e) {
      if (!h(e)) return !1;
      var t = b(e);
      return (
        '[object Function]' == t ||
        '[object GeneratorFunction]' == t ||
        '[object AsyncFunction]' == t ||
        '[object Proxy]' == t
      );
    },
    j = function () {
      return l.Date.now();
    };
  var O = function (e) {
    return null != e && 'object' == typeof e;
  };
  var S = function (e) {
      return 'symbol' == typeof e || (O(e) && '[object Symbol]' == b(e));
    },
    w = /^\s+|\s+$/g,
    T = /^[-+]0x[0-9a-f]+$/i,
    x = /^0b[01]+$/i,
    E = /^0o[0-7]+$/i,
    N = parseInt;
  var P = function (e) {
      if ('number' == typeof e) return e;
      if (S(e)) return NaN;
      if (h(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = h(t) ? t + '' : t;
      }
      if ('string' != typeof e) return 0 === e ? e : +e;
      e = e.replace(w, '');
      var n = x.test(e);
      return n || E.test(e) ? N(e.slice(2), n ? 2 : 8) : T.test(e) ? NaN : +e;
    },
    F = Math.max,
    R = Math.min;
  var K = function (e, t, n) {
    var r,
      o,
      i,
      u,
      l,
      a,
      c = 0,
      f = !1,
      s = !1,
      d = !0;
    if ('function' != typeof e) throw new TypeError('Expected a function');
    function p(t) {
      var n = r,
        i = o;
      return (r = o = void 0), (c = t), (u = e.apply(i, n));
    }
    function y(e) {
      return (c = e), (l = setTimeout(v, t)), f ? p(e) : u;
    }
    function m(e) {
      var n = e - a;
      return void 0 === a || n >= t || n < 0 || (s && e - c >= i);
    }
    function v() {
      var e = j();
      if (m(e)) return b(e);
      l = setTimeout(
        v,
        (function (e) {
          var n = t - (e - a);
          return s ? R(n, i - (e - c)) : n;
        })(e),
      );
    }
    function b(e) {
      return (l = void 0), d && r ? p(e) : ((r = o = void 0), u);
    }
    function g() {
      var e = j(),
        n = m(e);
      if (((r = arguments), (o = this), (a = e), n)) {
        if (void 0 === l) return y(a);
        if (s) return clearTimeout(l), (l = setTimeout(v, t)), p(a);
      }
      return void 0 === l && (l = setTimeout(v, t)), u;
    }
    return (
      (t = P(t) || 0),
      h(n) &&
        ((f = !!n.leading),
        (i = (s = 'maxWait' in n) ? F(P(n.maxWait) || 0, t) : i),
        (d = 'trailing' in n ? !!n.trailing : d)),
      (g.cancel = function () {
        void 0 !== l && clearTimeout(l), (c = 0), (r = a = o = l = void 0);
      }),
      (g.flush = function () {
        return void 0 === l ? u : b(j());
      }),
      g
    );
  };
  return function (n) {
    const {
        ctrlRef: o,
        onBlurCb: i,
        onSelect: u,
        scrollY: l = 500,
        showText: a = !0,
        introducerPatientName: c,
        api: f,
        paramsKey: s = 'regularParam',
        columns: d,
        style: p = { width: '400px' },
        placeholder: y,
        rowKey: m = 'id',
      } = n,
      v = (function (e, t) {
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
      })(n, [
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
      [b, h] = e.useState([]),
      [j, O] = e.useState(!1),
      [S, w] = e.useState(void 0),
      T = e.useRef(!1),
      x = e.useRef(null),
      E = e.useRef(!1);
    return (
      e.useEffect(() => {
        o && (o.current = { setFocus: N }), !S && a && w(c);
      }),
      r.default.createElement(
        t.Select,
        Object.assign(
          {
            style: p,
            ref: x,
            showSearch: !0,
            value: S,
            notFoundContent: (function () {
              if (j)
                return r.default.createElement(t.Spin, { size: 'small', className: 'm-6 ml-20' });
              if (S && 0 === b.length)
                return r.default.createElement('div', { className: 'p-10' }, '暂无数据');
              if (0 === b.length) return null;
            })(),
            filterOption: !1,
            onSearch: K(function (e) {
              let t = '';
              !a && w(e), (E.current = !0);
              const n = T.current;
              T.current ? ((T.current = !1), (t = S), h([]), !a && w(void 0)) : (t = e);
              if (!t) return (E.current = !1), h([]);
              if ((O(!0), n)) return;
              f({ [s]: e })
                .then((e) => {
                  h(e.data), (E.current = !1);
                })
                .finally(() => {
                  setTimeout(() => {
                    O(!1);
                  }, 100);
                })
                .catch();
            }, 300),
            onBlur: function () {
              !a && w(void 0),
                (!E.current || b.length > 0) && (T.current = !0),
                setTimeout(() => {
                  b.length || (i && i());
                }, 200);
            },
            bordered: !!a,
            onFocus: function () {
              (T.current = !1), O(!1);
            },
            dropdownRender: () =>
              j
                ? r.default.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    r.default.createElement(t.Spin, { size: 'small', className: 'm-6 ml-20' }),
                  )
                : S && 0 === b.length
                ? r.default.createElement(
                    'div',
                    { className: 'p-10', style: { textAlign: 'center' } },
                    '暂无数据',
                  )
                : 0 === b.length
                ? null
                : r.default.createElement(t.Table, {
                    scroll: { y: l },
                    columns: d,
                    dataSource: b,
                    pagination: !1,
                    rowKey: (e) => e[m],
                    onRow: (e) => ({
                      onClick: () => {
                        g(u) && u(e), h([]), w(a ? e.patientName : void 0), x.current.blur();
                      },
                    }),
                  }),
          },
          v,
          { placeholder: y || '姓名/拼音/简拼/联系电话模糊查询' },
        ),
        b.map((e) => r.default.createElement(t.Select.Option, { key: e[m] }, e.text)),
      )
    );
    function N() {
      x.current.focus();
    }
  };
});
