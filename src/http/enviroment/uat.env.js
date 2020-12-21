const config = {
  env: 'uat',
  debug: {
    http: false,
    websocket: false,
    notVerifyPath: false,
  },
  DPMSServerUrl: 'http://uat-tx.dental.his.laoganma.fun/',
  SCRMServerUrl: 'http://api.scrm.uat-tx.laoganma.fun/',
  useServerUrlRedirection: {
    open: false,
    pathMap: {
      institution: 'http://0.0.0.0:7777/',
    },
  },
};

export default config;
