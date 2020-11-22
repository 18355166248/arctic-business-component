module.exports = (plop) => {
  plop.setGenerator('component', {
    description: '生成组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名？',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/index.less',
        templateFile: 'templates/index.less',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.md',
        templateFile: 'templates/index.md',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.tsx',
        templateFile: 'templates/index.tsx',
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
        template: "export { default as {{name}} } from './{{name}}' ",
      },
    ],
  });
};
