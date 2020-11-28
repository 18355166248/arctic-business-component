import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import json from '@rollup/plugin-json';

const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

// 按需加载方式进行打包
const packages = {};
const dir = path.join(__dirname, '/src/components');
const files = fs.readdirSync(dir);

files.forEach((file) => {
  if (file !== 'index.js') {
    packages[file] = `src/components/${file}/index.tsx`;
  }
});

const all = `index`;
packages[all] = path.join(__dirname, '/src/components/index.js');

const createRollupConfig = (file, name) => {
  const config = {
    input: file,
    output: {
      file: name === all ? 'lib/es/index.js' : `lib/es/${name}/index.js`,
      format: 'es', // 因为已经是多入口打包了，所以本身引入的时候就是打算单独引入组件实现按需加载
      name,
      globals: {
        antd: 'antd',
        react: 'react',
      },
    },
    plugins: [
      json(),
      nodeResolve({ browser: true }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        // babel 默认不支持 ts 需要手动添加
        extensions: [...DEFAULT_EXTENSIONS, '.ts'],
      }),
      typescript(),
      // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
      commonjs(),
      postcss({
        // 单独打包css文件默认false
        extract: true, // 也可以指定打包后的路径或css文件名
        // Minimize CSS, boolean or options for cssnano.
        minimize: isProd,
        // Enable sourceMap.
        sourceMap: !isProd,
        // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
        extensions: ['.less', '.css'],
      }),
      isProd && terser(), // 压缩js
    ],
    // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
    external: ['antd', 'react', 'react-dom'],
  };
  return config;
};

const buildPackages = [];
Object.keys(packages).forEach((name) => {
  const file = packages[name];
  buildPackages.push(createRollupConfig(file, name));
});

export default buildPackages;
