#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');

const env = process.argv[2];

if (!env) {
  throw new Error('未传入正确参数');
}

const configFile = fs.readFileSync(path.join(__dirname, `./enviroment/${env}.env.js`), 'utf8');

const config = `// 此文件由脚本 ./bin/config 生成
// 如需更改，请至 /enviroment 中修改配置

${configFile}
`;

fs.writeFileSync(path.join(__dirname, './env.config.js'), config);

console.log(`${env} 配置已生效`);
