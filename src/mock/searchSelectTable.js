import Mock from 'mockjs';

export default ({ mock }) => {
  if (!mock) return;
  // 获取列表
  Mock.mock(/\/patient\/patient\/home\/list\/regular/, 'get', () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push(
        Mock.mock({
          name: Mock.mock('@cname'),
          'sex|0-1': 0,
          id: Mock.mock('@id'),
        }),
      );
    }
    return data;
  });
  // 删除
  Mock.mock(/\/crud\/del/, 'delete', () => {
    return {
      data: {},
    };
  });
  // 新增
  Mock.mock(/\/crud\/add/, 'post', () => {
    return {
      data: {},
    };
  });
  // 更新
  Mock.mock(/\/crud\/update/, 'put', () => {
    return {
      data: {},
    };
  });
};
