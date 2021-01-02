import './utils';
import searchSelectTable from './searchSelectTable';
import { login } from 'http/api/login';
import authConst from 'const/auth';
import account from '../../config/account.js';

/**
 * 模拟数据mock
 * mock是否开启模拟数据拦截
 */
searchSelectTable({ mock: false });

// 登录
// 调用登录接口
login(account).then((res) => {
  const auth = {
    _token: res.data._token,
    _uid: res.data.staff.staffId,
    _ut: 1,
    _t: 1,
    _s: 11,
    _mtId: res.data.medicalInstitution.medicalInstitutionId,
    _tenantId: res.data.medicalInstitution.tenantId,
    _cmtId: res.data.medicalInstitution.topParentId,
    _cmtType: res.data.medicalInstitution.medicalInstitutionChainType,
  };

  localStorage.setItem(authConst.hisAuth, JSON.stringify(auth));
});
