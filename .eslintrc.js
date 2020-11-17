const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.default,
  rules: {
    ...fabric.default.rules,
    // 'no-restricted-syntax': 'off', // 此规则不允许指定（即用户定义）语法 如果您不想限制您的代码使用任何 JavaScript 功能或语法，则不应使用此规则。
    // 'no-plusplus': 'off', // 这条规则不允许一元运算符++和--
    // 'no-underscore-dangle': 'off', // 此规则不允许在标识符中使用悬空下划线
    // 'consistent-return': 'off', // 如果您想允许函数return根据代码分支具有不同的行为，那么禁用此规则是安全的。
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/no-object-literal-type-assertion': 'off',
  },
};
