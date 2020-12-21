import authConst from 'const/auth';

const APIUtil = {
  createSystemParams() {
    const auth = JSON.parse(localStorage.getItem(authConst.hisAuth)) || {};

    return {
      // ██████ 鉴权 ██████
      _token: auth[authConst._token],
      // 用户 ID
      _uid: auth[authConst._uid],
      // 用户类型
      _ut: 1,
      // 终端
      _t: 1,
      // 系统
      _s: 11,
      // 机构 ID
      _mtId: auth[authConst._mtId],
      // ██████ 鉴权 over ██████
      // 租户 ID
      _tenantId: auth[authConst._mtId],
      // 连锁机构总部 Id
      _cmtId: auth[authConst._cmtId],
      // 连锁机构类型
      _cmtType: auth[authConst._cmtType],
      // 语言
      _lang: 'zh_CN',
    };
  },
};

export { APIUtil };
