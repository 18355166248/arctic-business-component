import { DPMSHTTP } from 'http/index';

// 登录接口
export function login(data) {
  const baseURL = localStorage.getItem('baseUrl');
  return DPMSHTTP({
    url: 'auth/login-general',
    method: 'post',
    data,
    baseURL,
  });
}
