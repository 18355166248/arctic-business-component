import e, { useState as t } from 'react';
import { Calendar as n, Popover as o } from 'antd';
var r =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  c = 'object' == typeof r && r && r.Object === Object && r,
  l = 'object' == typeof self && self && self.Object === Object && self,
  i = (c || l || Function('return this')()).Symbol,
  a = Object.prototype,
  u = a.hasOwnProperty,
  f = a.toString,
  d = i ? i.toStringTag : void 0;
var v = function (e) {
    var t = u.call(e, d),
      n = e[d];
    try {
      e[d] = void 0;
      var o = !0;
    } catch (e) {}
    var r = f.call(e);
    return o && (t ? (e[d] = n) : delete e[d]), r;
  },
  b = Object.prototype.toString;
var g = function (e) {
    return b.call(e);
  },
  j = i ? i.toStringTag : void 0;
var p = function (e) {
  return null == e
    ? void 0 === e
      ? '[object Undefined]'
      : '[object Null]'
    : j && j in Object(e)
    ? v(e)
    : g(e);
};
var m = function (e) {
  var t = typeof e;
  return null != e && ('object' == t || 'function' == t);
};
var s = function (e) {
  if (!m(e)) return !1;
  var t = p(e);
  return (
    '[object Function]' == t ||
    '[object GeneratorFunction]' == t ||
    '[object AsyncFunction]' == t ||
    '[object Proxy]' == t
  );
};
function y(r) {
  const { value: c, onChange: l, PopoverContent: i } = r,
    [a, u] = t({});
  return e.createElement(n, {
    headerRender: () => null,
    onChange: function (e) {
      s(l) && l(e);
    },
    dateFullCellRender: function (t) {
      return e.createElement(
        'div',
        { className: 'CM-card' },
        t.format('DD'),
        e.createElement(
          o,
          { text: '33333', content: '33333', trigger: 'click' },
          e.createElement(
            'div',
            { onClick: () => u({ text: '2222', content: e.createElement('div', null, '99999') }) },
            '2',
          ),
        ),
        e.createElement(
          o,
          { text: '1111', content: '1111', trigger: 'click' },
          e.createElement(
            'div',
            { onClick: () => u({ text: '111', content: e.createElement('div', null, '77777') }) },
            '1',
          ),
        ),
      );
    },
    value: c,
  });
}
export default y;
