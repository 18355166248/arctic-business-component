import _ from 'lodash';
import axios from 'axios';
import qs from 'qs';
import { APIUtil } from './API.util';
import { objectUtil } from 'utils/object.util';
import EnvConfig from './env.config';
import { notification } from 'antd';

const authErrorNotificationThrottler = _.throttle(notification.error, 1000);

const APIInterceptor = {
  // 本地调试方法
  redirectURL: [
    (config) => {
      if (!EnvConfig.useServerUrlRedirection?.open) {
        return config;
      }

      const pathname = config.url.replace(config.baseURL, '').replace(/^\//, '');

      const rootPath = pathname.split('/')[0];
      const redirecttedBaseURL = EnvConfig.useServerUrlRedirection.pathMap[rootPath];

      if (!redirecttedBaseURL) {
        return config;
      }

      config.baseURL = redirecttedBaseURL;
      config.url = redirecttedBaseURL + pathname;

      return config;
    },
  ],

  /**
   * 转换请求参数的拦截器
   *
   * 1. 添加系统级参数
   * 2. 移除空值参数，值为 undefined null
   * 3. 当为 post put 等请求时，把参数放到 data 上
   *
   */
  transParams: [
    (config) => {
      const configCopy = _.cloneDeep(config);
      const defaultSystemParams = APIUtil.createSystemParams();

      // 判断是否有特殊参数
      convertSpecialParams(configCopy);

      let params = {
        ...defaultSystemParams,
        ...(configCopy.params || {}),
      };

      configCopy.params = objectUtil.omitUndefinedAndNullValue(params);

      if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(config.method.toUpperCase())) {
        // 1. 如果是 post 等类型请求，则把 params 合并到 data 中
        // 2. 如果 data 是 FormData 构造的，则把 params 添入其中
        // 3. 否则直接序列化
        // 4. 删除 params
        if (configCopy?.data?.constructor === FormData) {
          configCopy.headers['Content-Type'] = 'multipart/form-data';
          Object.keys(configCopy.params).forEach((key) => {
            configCopy.data.append(key, configCopy.params[key]);
          });
        } else {
          configCopy.headers['Content-Type'] = 'application/x-www-form-urlencoded';

          configCopy.data = {
            ...configCopy.params,
            ...configCopy.data,
          };

          configCopy.data = qs.stringify(configCopy.data, {
            arrayFormat: 'comma', // a: [1, 2] => a=1,2
          });
        }

        delete configCopy.params;
      }

      if (EnvConfig.debug.http) {
        console.group('%c★★★ 发送 http 请求 ★★★', 'color: #5FCAFF;');
        console.log(configCopy);
        console.groupEnd();
      }

      return configCopy;
    },
  ],

  transJSONParams: [
    (config) => {
      const configCopy = _.cloneDeep(config);
      const defaultSystemParams = APIUtil.createSystemParams();

      // 判断是否有特殊参数
      convertSpecialParams(configCopy);

      let params = {
        ...defaultSystemParams,
        ...(configCopy.params || {}),
      };

      configCopy.params = objectUtil.omitUndefinedAndNullValue(params);

      if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(config.method.toUpperCase())) {
        // 1. 如果是 post 等类型请求，则把 params 合并到 data 中
        // 2. 如果 data 是 FormData 构造的，则把 params 添入其中
        // 3. 否则直接序列化
        // 4. 删除 params
        if (configCopy?.data?.constructor === FormData) {
          configCopy.headers['Content-Type'] = 'multipart/form-data';
          Object.keys(configCopy.params).forEach((key) => {
            configCopy.data.append(key, configCopy.params[key]);
          });
        } else {
          configCopy.headers['Content-Type'] = 'application/json';

          configCopy.data = JSON.stringify(configCopy.data);
        }
      }

      if (EnvConfig.debug.http) {
        console.group('%c★★★ 发送 http 请求 ★★★', 'color: #5FCAFF;');
        console.log(configCopy);
        console.groupEnd();
      }

      return configCopy;
    },
  ],

  transJSONParamsWithScrm: [
    (config) => {
      const configCopy = _.cloneDeep(config);
      const defaultSystemParams = APIUtil.createSystemParams();
      const store = dvaInstance._store.getState();

      // 判断是否有特殊参数
      convertSpecialParams(configCopy);

      let params = {
        ...defaultSystemParams,
        ...(configCopy.params || {}),
        _token: store.auth._token,
      };

      // configCopy.params = objectUtil.omitUndefinedAndNullValue(params);
      configCopy.params = params;

      if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(config.method.toUpperCase())) {
        // 1. 如果是 post 等类型请求，则把 params 合并到 data 中
        // 2. 如果 data 是 FormData 构造的，则把 params 添入其中
        // 3. 否则直接序列化
        // 4. 删除 params
        if (configCopy?.data?.constructor === FormData) {
          configCopy.headers['Content-Type'] = 'multipart/form-data';
          Object.keys(configCopy.params).forEach((key) => {
            configCopy.data.append(key, configCopy.params[key]);
          });
        } else {
          const data = { ...configCopy.data, ...configCopy.params };

          const formData = Object.keys(data)
            .map((k) => `${k}=${data[k]}`)
            .join('&');

          configCopy.headers['Content-Type'] = 'application/x-www-form-urlencoded';
          configCopy.data = formData;
        }
      }

      if (EnvConfig.debug.http) {
        console.group('%c★★★ 发送 http 请求 ★★★', 'color: #5FCAFF;');
        console.log(configCopy);
        console.groupEnd();
      }

      return configCopy;
    },
  ],

  /**
   * 根据响应状态分发结果的拦截器
   * 这里只根据状态来分类是否「resolve」或「reject」
   * 对于异常的处理使用别的拦截器
   */
  dispatchByResStatus: [
    (response) => {
      /**
       * 1. 判断 response.code 是否为 0 ，是则通过，不是则拒绝
       * @param response
       */

      if (response?.data?.code === 0) {
        return response;
      }

      return Promise.reject(response);
    },
  ],

  /**
   * 处理失败响应的拦截器
   */
  handleError: [
    (response) => {
      if (response?.config?.$skipResponseInterceptor) {
        return response;
      }

      if (EnvConfig.debug.http) {
        console.group('%c★★★ http 响应成功 ★★★', 'color: #31DA43;');
        console.log(response);
        console.groupEnd();
      }

      return response;
    },
    (error) => {
      if (error?.config?.$skipResponseInterceptor || error?.config?.$skipAuthMonitor) {
        return Promise.reject(error);
      }

      if (EnvConfig.debug.http) {
        console.group('%c★★★ http 响应失败 ★★★', 'color: #FF3F3F;');
        console.log(error);
        console.groupEnd();
      }

      // 权限错误
      if (
        [
          402,
          1001001001,
          1001001002,
          1001001004,
          1001001005,
          1001001006,
          1001001007,
          1001001100,
          1001001101,
          1001001102,
        ].includes(error?.data?.code)
      ) {
        !error?.config?.$skipErrorToast &&
          authErrorNotificationThrottler({
            message: '登录权限校验失败，请重新登录',
          });

        if (window.__POWERED_BY_QIANKUN__) {
          console.log('回到登录页');
        } else {
          console.log('退出登录');
        }

        return Promise.reject(error);
      }

      // 900: 机构已停用  901: 员工已离职
      if ([900, 901].includes(error?.data?.code)) {
        !error?.config?.$skipErrorToast &&
          notification.error({
            message: error?.data?.msg || error?.data?.message || '登录权限校验失败，请重新登录',
          });

        if (window.__POWERED_BY_QIANKUN__) {
          console.log('回到登录页');
        } else {
          console.log('退出登录');
        }

        return Promise.reject(error);
      }

      if (!axios.isCancel(error) && error?.code !== 'ECONNABORTED') {
        !error?.config?.$skipErrorToast &&
          notification.error({
            message: error?.data?.msg || error?.data?.message || '数据请求失败',
          });
      }

      return Promise.reject(error);
    },
  ],

  /**
   * 减少一级 response 结构
   */
  flattenRes: [
    (response) => {
      if (response?.config?.$skipResponseInterceptor) {
        return response;
      }

      return response?.data;
    },
  ],

  /**
   * 合流，把 resolve 和 reject 合到一个数组中
   * 这意味着接下来的 promise 一定会进入 resolve 中
   * 这个 resolve 接收到参数为数组 [err, res]
   * 如果请求过车中有任何错误，都会放在数组的第一个值中，如果没有错误则 err 为 null
   */
  interflow: [(response) => [null, response], (error) => [error, null]],
};

function convertSpecialParams(config) {
  if (!config?.params && !config?.data) {
    return config;
  }

  if (config?.params) {
    Object.keys(config.params).forEach((key) => {
      if (!/^\$/.test(key)) {
        return;
      }

      config[key] = config.params[key];
      delete config.params[key];
    });
  }

  if (config?.data) {
    Object.keys(config.data).forEach((key) => {
      if (!/^\$/.test(key)) {
        return;
      }

      config[key] = config.data[key];
      delete config.data[key];
    });
  }

  return config;
}

export { APIInterceptor };
