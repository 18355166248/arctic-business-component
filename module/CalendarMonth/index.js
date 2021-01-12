!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t(require('react'), require('antd')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'antd'], t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).CalendarMonth = t(
        e.react,
        e.antd,
      ));
})(this, function (e, t) {
  'use strict';
  function n(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  var o = n(e),
    r = 'index_CMCard__2nt5e',
    l =
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
    c = 'object' == typeof self && self && self.Object === Object && self,
    i = (a || c || Function('return this')()).Symbol,
    u = Object.prototype,
    f = u.hasOwnProperty,
    d = u.toString,
    b = i ? i.toStringTag : void 0;
  var v = function (e) {
      var t = f.call(e, b),
        n = e[b];
      try {
        e[b] = void 0;
        var o = !0;
      } catch (e) {}
      var r = d.call(e);
      return o && (t ? (e[b] = n) : delete e[b]), r;
    },
    s = Object.prototype.toString;
  var p = function (e) {
      return s.call(e);
    },
    y = i ? i.toStringTag : void 0;
  var g = function (e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : y && y in Object(e)
      ? v(e)
      : p(e);
  };
  var j = function (e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  };
  var m = function (e) {
    if (!j(e)) return !1;
    var t = g(e);
    return (
      '[object Function]' == t ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  };
  return function (n) {
    const { value: l, onChange: a, PopoverContent: c } = n,
      [i, u] = e.useState({});
    return o.default.createElement(t.Calendar, {
      headerRender: () => null,
      onChange: function (e) {
        m(a) && a(e);
      },
      dateFullCellRender: function (e) {
        return o.default.createElement(
          'div',
          { className: r },
          e.format('DD'),
          o.default.createElement(
            t.Popover,
            { text: '33333', content: '33333', trigger: 'click' },
            o.default.createElement(
              'div',
              {
                onClick: () =>
                  u({ text: '2222', content: o.default.createElement('div', null, '99999') }),
              },
              '2',
            ),
          ),
          o.default.createElement(
            t.Popover,
            { text: '1111', content: '1111', trigger: 'click' },
            o.default.createElement(
              'div',
              {
                onClick: () =>
                  u({ text: '111', content: o.default.createElement('div', null, '77777') }),
              },
              '1',
            ),
          ),
        );
      },
      value: l,
    });
  };
});
