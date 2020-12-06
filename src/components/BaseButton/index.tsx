import React from 'react';
import { Button } from 'antd';
import './index.less';

interface Props {}

function BaseButton(params: Props) {
  return <Button type="primary">测试</Button>;
}

export default BaseButton;
