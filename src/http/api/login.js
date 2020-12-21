import { DPMSHTTP } from 'http/index';

// 登录接口
export function login(data) {
  DPMSHTTP.post('auth/login-general', data);
}
