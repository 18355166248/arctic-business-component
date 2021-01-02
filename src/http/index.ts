import axios from 'axios';
import account from '../../config/account'
import { APIInterceptor } from './APIInterceptor';

const EnvConfig = require('../../config/enviroment/' + account.env + '.env.js').default

localStorage.setItem('baseUrl', EnvConfig.baseUrl)

const DPMSHTTP = axios.create({
  baseURL: EnvConfig.DPMSServerUrl,
  timeout: 60000,
});

DPMSHTTP.interceptors.request.use(...APIInterceptor.transParams);

DPMSHTTP.interceptors.response.use(...APIInterceptor.dispatchByResStatus);
DPMSHTTP.interceptors.response.use(...APIInterceptor.handleError);
DPMSHTTP.interceptors.response.use(...APIInterceptor.flattenRes);

const JSONDPMSHTTP = axios.create({
  baseURL: EnvConfig.DPMSServerUrl,
  timeout: 60000,
});

JSONDPMSHTTP.interceptors.request.use(...APIInterceptor.transJSONParams);

JSONDPMSHTTP.interceptors.response.use(...APIInterceptor.dispatchByResStatus);
JSONDPMSHTTP.interceptors.response.use(...APIInterceptor.handleError);
JSONDPMSHTTP.interceptors.response.use(...APIInterceptor.flattenRes);

const SCRMHTTP = axios.create({
  baseURL: EnvConfig.SCRMServerUrl,
  timeout: 60000,
});

SCRMHTTP.interceptors.request.use(...APIInterceptor.transJSONParamsWithScrm);

SCRMHTTP.interceptors.response.use(...APIInterceptor.dispatchByResStatus);
SCRMHTTP.interceptors.response.use(...APIInterceptor.handleError);
SCRMHTTP.interceptors.response.use(...APIInterceptor.flattenRes);

export { DPMSHTTP, JSONDPMSHTTP, SCRMHTTP };
