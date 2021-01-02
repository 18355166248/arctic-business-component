const config = {
  env: 'prod',
  debug: {
    http: false,
    websocket: false,
    notVerifyPath: false,
  },
  baseUrl: 'https://api.dental.his.medcloud.cn/',
  SCRMServerUrl: '//api.scrm.medcloud.cn/',
  useServerUrlRedirection: {
    open: false,
    pathMap: {
      institution: 'http://0.0.0.0:7777/',
    },
  },
};

// export default config;
module.exports = config;
