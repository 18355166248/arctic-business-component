import React from 'react';
import { Button } from 'antd';

function BaseButton(params) {
  return React.createElement(Button, { type: 'primary' }, '\u6D4B\u8BD5');
}

export default BaseButton;
