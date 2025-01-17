// 此文件由脚本 ./bin/config 生成
// 如需更改，请至 /enviroment 中修改配置

const config = {
  env: 'dev',
  debug: {
    http: false,
    websocket: false,
    notVerifyPath: true,
  },
  baseUrl: 'http://api.scrm.dev.laoganma.fun/scrm/',
  DPMSServerUrl: 'http://dev-tx.dental.his.laoganma.fun/',
  SCRMServerUrl: 'http://api.scrm.dev.laoganma.fun/',
  useServerUrlRedirection: {
    open: false,
    pathMap: {
      institution: 'http://0.0.0.0:7777/',
    },
  },
};

export default config;
