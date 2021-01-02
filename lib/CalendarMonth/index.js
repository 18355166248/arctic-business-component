import e, { useState as t } from 'react';
import { Calendar as n, Popover as o } from 'antd';
var r = 'index_CMCard__2nt5e',
  c =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  l = 'object' == typeof c && c && c.Object === Object && c,
  i = 'object' == typeof self && self && self.Object === Object && self,
  a = (l || i || Function('return this')()).Symbol,
  u = Object.prototype,
  f = u.hasOwnProperty,
  d = u.toString,
  v = a ? a.toStringTag : void 0;
var b = function (e) {
    var t = f.call(e, v),
      n = e[v];
    try {
      e[v] = void 0;
      var o = !0;
    } catch (e) {}
    var r = d.call(e);
    return o && (t ? (e[v] = n) : delete e[v]), r;
  },
  g = Object.prototype.toString;
var j = function (e) {
    return g.call(e);
  },
  p = a ? a.toStringTag : void 0;
var m = function (e) {
  return null == e
    ? void 0 === e
      ? '[object Undefined]'
      : '[object Null]'
    : p && p in Object(e)
    ? b(e)
    : j(e);
};
var s = function (e) {
  var t = typeof e;
  return null != e && ('object' == t || 'function' == t);
};
var y = function (e) {
  if (!s(e)) return !1;
  var t = m(e);
  return (
    '[object Function]' == t ||
    '[object GeneratorFunction]' == t ||
    '[object AsyncFunction]' == t ||
    '[object Proxy]' == t
  );
};
function h(c) {
  const { value: l, onChange: i, PopoverContent: a } = c,
    [u, f] = t({});
  return e.createElement(n, {
    headerRender: () => null,
    onChange: function (e) {
      y(i) && i(e);
    },
    dateFullCellRender: function (t) {
      return e.createElement(
        'div',
        { className: r },
        t.format('DD'),
        e.createElement(
          o,
          { text: '33333', content: '33333', trigger: 'click' },
          e.createElement(
            'div',
            { onClick: () => f({ text: '2222', content: e.createElement('div', null, '99999') }) },
            '2',
          ),
        ),
        e.createElement(
          o,
          { text: '1111', content: '1111', trigger: 'click' },
          e.createElement(
            'div',
            { onClick: () => f({ text: '111', content: e.createElement('div', null, '77777') }) },
            '1',
          ),
        ),
      );
    },
    value: l,
  });
}
export default h;
