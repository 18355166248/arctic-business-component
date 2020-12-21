const config = {
  env: 'staging',
  debug: {
    http: false,
    websocket: false,
    notVerifyPath: false,
  },
  DPMSServerUrl: 'http://pre.api.dental.his.medcloud.cn/',
  SCRMServerUrl: 'http://pre.api.scrm.medcloud.cn/',
  useServerUrlRedirection: {
    open: false,
    pathMap: {
      institution: 'http://0.0.0.0:7777/',
    },
  },
};

export default config;
