const path = require('path');
const packagePath = path.resolve(__dirname, 'package.json');
const packageFile = require(packagePath);

module.exports = {
  title: 'Arctic业务组件库',
  version: packageFile.version, // 同上 使用 package.json 的 version
  usageMode: 'expand', // 自动打开文档的缩放
  pagePerSection: true || process.env.NODE_ENV === 'production', // 是否每页一个组件显示
  sections: [
    {
      name: '介绍',
      content: 'src/index.md',
    },
    {
      name: '基础组件库',
      components: 'src/components/*/**/index.{js,jsx,tsx}',
    },
    {
      name: '多重组件库',
      components: 'src/business-components/*/**/index.{js,jsx,tsx}',
    },
  ],
  styleguideDir: 'dist_docs', // 打包的目录
  components: 'src/components/**/*.tsx', // 写入对应目录的文档
  defaultExample: true,
  moduleAliases: {
    '@': path.resolve(__dirname, 'src'),
    http: path.resolve(__dirname, 'src/http'),
    components: path.resolve(__dirname, 'src/components'),
    const: path.resolve(__dirname, 'src/const'),
    utils: path.resolve(__dirname, 'src/utils'),
  },
  exampleMode: 'expand', // 表示示例代码是否展开或者合上文档中代码示例的标签初始化状态，决定是否展开
  webpackConfig: require('./webpack.config'),
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse, // 用来支持 tsx
  verbose: true, // 打印详细信息
  compilerConfig: {
    target: { ie: 11 },
    transforms: {
      modules: false,
      // to make async/await work by default (no transformation)
      asyncAwait: false,
    },
  },
  updateDocs(docs, file) {
    if (docs.doclets.version) {
      const version = packageFile.version;
      docs.doclets.version = version;
      docs.tags.version[0].description = version;
    }
    return docs;
  }, // 在使用 @version 时 使用 package.json 的 version
};
