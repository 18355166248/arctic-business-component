import axios from 'axios';
import EnvConfig from './env.config';
import { APIInterceptor } from './APIInterceptor';

const DPMSHTTP = axios.create({
  baseURL: EnvConfig.baseUrl,
  timeout: 60000,
});

// DPMSHTTP.interceptors.request.use(...APIInterceptor.redirectURL);
DPMSHTTP.interceptors.request.use(...APIInterceptor.transParams);

DPMSHTTP.interceptors.response.use(...APIInterceptor.dispatchByResStatus);
DPMSHTTP.interceptors.response.use(...APIInterceptor.handleError);
DPMSHTTP.interceptors.response.use(...APIInterceptor.flattenRes);

const JSONDPMSHTTP = axios.create({
  baseURL: EnvConfig.baseUrl,
  timeout: 60000,
});

// JSONDPMSHTTP.interceptors.request.use(...APIInterceptor.redirectURL);
JSONDPMSHTTP.interceptors.request.use(...APIInterceptor.transJSONParams);

JSONDPMSHTTP.interceptors.response.use(...APIInterceptor.dispatchByResStatus);
JSONDPMSHTTP.interceptors.response.use(...APIInterceptor.handleError);
JSONDPMSHTTP.interceptors.response.use(...APIInterceptor.flattenRes);

const SCRMHTTP = axios.create({
  baseURL: EnvConfig.SCRMServerUrl,
  timeout: 60000,
});

// SCRMHTTP.interceptors.request.use(...APIInterceptor.redirectURL);
SCRMHTTP.interceptors.request.use(...APIInterceptor.transJSONParamsWithScrm);

SCRMHTTP.interceptors.response.use(...APIInterceptor.dispatchByResStatus);
SCRMHTTP.interceptors.response.use(...APIInterceptor.handleError);
SCRMHTTP.interceptors.response.use(...APIInterceptor.flattenRes);

export { DPMSHTTP, JSONDPMSHTTP, SCRMHTTP };
