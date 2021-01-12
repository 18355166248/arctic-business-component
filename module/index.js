!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react'), require('antd'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react', 'antd'], t)
    : t(
        ((e = 'undefined' != typeof globalThis ? globalThis : e || self).index = {}),
        e.react,
        e.antd,
      );
})(this, function (e, t, n) {
  'use strict';
  function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  var o = r(t);
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
    a = 'object' == typeof l && l && l.Object === Object && l,
    u = 'object' == typeof self && self && self.Object === Object && self,
    i = a || u || Function('return this')(),
    c = i.Symbol,
    f = Object.prototype,
    d = f.hasOwnProperty,
    s = f.toString,
    p = c ? c.toStringTag : void 0;
  var v = function (e) {
      var t = d.call(e, p),
        n = e[p];
      try {
        e[p] = void 0;
        var r = !0;
      } catch (e) {}
      var o = s.call(e);
      return r && (t ? (e[p] = n) : delete e[p]), o;
    },
    m = Object.prototype.toString;
  var y = function (e) {
      return m.call(e);
    },
    b = c ? c.toStringTag : void 0;
  var g = function (e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : b && b in Object(e)
      ? v(e)
      : y(e);
  };
  var h = function (e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  };
  var j = function (e) {
      if (!h(e)) return !1;
      var t = g(e);
      return (
        '[object Function]' == t ||
        '[object GeneratorFunction]' == t ||
        '[object AsyncFunction]' == t ||
        '[object Proxy]' == t
      );
    },
    x = function () {
      return i.Date.now();
    };
  var O = function (e) {
    return null != e && 'object' == typeof e;
  };
  var S = function (e) {
      return 'symbol' == typeof e || (O(e) && '[object Symbol]' == g(e));
    },
    w = /^\s+|\s+$/g,
    E = /^[-+]0x[0-9a-f]+$/i,
    T = /^0b[01]+$/i,
    C = /^0o[0-7]+$/i,
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
      var n = T.test(e);
      return n || C.test(e) ? N(e.slice(2), n ? 2 : 8) : E.test(e) ? NaN : +e;
    },
    R = Math.max,
    F = Math.min;
  var k = function (e, t, n) {
    var r,
      o,
      l,
      a,
      u,
      i,
      c = 0,
      f = !1,
      d = !1,
      s = !0;
    if ('function' != typeof e) throw new TypeError('Expected a function');
    function p(t) {
      var n = r,
        l = o;
      return (r = o = void 0), (c = t), (a = e.apply(l, n));
    }
    function v(e) {
      return (c = e), (u = setTimeout(y, t)), f ? p(e) : a;
    }
    function m(e) {
      var n = e - i;
      return void 0 === i || n >= t || n < 0 || (d && e - c >= l);
    }
    function y() {
      var e = x();
      if (m(e)) return b(e);
      u = setTimeout(
        y,
        (function (e) {
          var n = t - (e - i);
          return d ? F(n, l - (e - c)) : n;
        })(e),
      );
    }
    function b(e) {
      return (u = void 0), s && r ? p(e) : ((r = o = void 0), a);
    }
    function g() {
      var e = x(),
        n = m(e);
      if (((r = arguments), (o = this), (i = e), n)) {
        if (void 0 === u) return v(i);
        if (d) return clearTimeout(u), (u = setTimeout(y, t)), p(i);
      }
      return void 0 === u && (u = setTimeout(y, t)), a;
    }
    return (
      (t = P(t) || 0),
      h(n) &&
        ((f = !!n.leading),
        (l = (d = 'maxWait' in n) ? R(P(n.maxWait) || 0, t) : l),
        (s = 'trailing' in n ? !!n.trailing : s)),
      (g.cancel = function () {
        void 0 !== u && clearTimeout(u), (c = 0), (r = i = o = u = void 0);
      }),
      (g.flush = function () {
        return void 0 === u ? a : b(x());
      }),
      g
    );
  };
  var K = 'index_CMCard__2nt5e';
  (e.CalendarMonth = function (e) {
    const { value: r, onChange: l, PopoverContent: a } = e,
      [u, i] = t.useState({});
    return o.default.createElement(n.Calendar, {
      headerRender: () => null,
      onChange: function (e) {
        j(l) && l(e);
      },
      dateFullCellRender: function (e) {
        return o.default.createElement(
          'div',
          { className: K },
          e.format('DD'),
          o.default.createElement(
            n.Popover,
            { text: '33333', content: '33333', trigger: 'click' },
            o.default.createElement(
              'div',
              {
                onClick: () =>
                  i({ text: '2222', content: o.default.createElement('div', null, '99999') }),
              },
              '2',
            ),
          ),
          o.default.createElement(
            n.Popover,
            { text: '1111', content: '1111', trigger: 'click' },
            o.default.createElement(
              'div',
              {
                onClick: () =>
                  i({ text: '111', content: o.default.createElement('div', null, '77777') }),
              },
              '1',
            ),
          ),
        );
      },
      value: r,
    });
  }),
    (e.SearchSelectTable = function (e) {
      const {
          ctrlRef: r,
          onBlurCb: l,
          onSelect: a,
          scrollY: u = 500,
          showText: i = !0,
          introducerPatientName: c,
          api: f,
          paramsKey: d = 'regularParam',
          columns: s,
          style: p = { width: '400px' },
          placeholder: v,
          rowKey: m = 'id',
        } = e,
        y = (function (e, t) {
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
        })(e, [
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
        [b, g] = t.useState([]),
        [h, x] = t.useState(!1),
        [O, S] = t.useState(void 0),
        w = t.useRef(!1),
        E = t.useRef(null),
        T = t.useRef(!1);
      return (
        t.useEffect(() => {
          r && (r.current = { setFocus: C }), !O && i && S(c);
        }),
        o.default.createElement(
          n.Select,
          Object.assign(
            {
              style: p,
              ref: E,
              showSearch: !0,
              value: O,
              notFoundContent: (function () {
                if (h)
                  return o.default.createElement(n.Spin, { size: 'small', className: 'm-6 ml-20' });
                if (O && 0 === b.length)
                  return o.default.createElement('div', { className: 'p-10' }, '暂无数据');
                if (0 === b.length) return null;
              })(),
              filterOption: !1,
              onSearch: k(function (e) {
                let t = '';
                !i && S(e), (T.current = !0);
                const n = w.current;
                w.current ? ((w.current = !1), (t = O), g([]), !i && S(void 0)) : (t = e);
                if (!t) return (T.current = !1), g([]);
                if ((x(!0), n)) return;
                f({ [d]: e })
                  .then((e) => {
                    g(e.data), (T.current = !1);
                  })
                  .finally(() => {
                    setTimeout(() => {
                      x(!1);
                    }, 100);
                  })
                  .catch();
              }, 300),
              onBlur: function () {
                !i && S(void 0),
                  (!T.current || b.length > 0) && (w.current = !0),
                  setTimeout(() => {
                    b.length || (l && l());
                  }, 200);
              },
              bordered: !!i,
              onFocus: function () {
                (w.current = !1), x(!1);
              },
              dropdownRender: () =>
                h
                  ? o.default.createElement(
                      'div',
                      { style: { textAlign: 'center' } },
                      o.default.createElement(n.Spin, { size: 'small', className: 'm-6 ml-20' }),
                    )
                  : O && 0 === b.length
                  ? o.default.createElement(
                      'div',
                      { className: 'p-10', style: { textAlign: 'center' } },
                      '暂无数据',
                    )
                  : 0 === b.length
                  ? null
                  : o.default.createElement(n.Table, {
                      scroll: { y: u },
                      columns: s,
                      dataSource: b,
                      pagination: !1,
                      rowKey: (e) => e[m],
                      onRow: (e) => ({
                        onClick: () => {
                          j(a) && a(e), g([]), S(i ? e.patientName : void 0), E.current.blur();
                        },
                      }),
                    }),
            },
            y,
            { placeholder: v || '姓名/拼音/简拼/联系电话模糊查询' },
          ),
          b.map((e) => o.default.createElement(n.Select.Option, { key: e[m] }, e.text)),
        )
      );
      function C() {
        E.current.focus();
      }
    }),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
