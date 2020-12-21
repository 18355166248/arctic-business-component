import React from 'react';
import { Calendar } from 'antd';

interface Props {
  /**
   * 控制器
   */
  ctrlRef?: object;
  /**
   * 接口请求 Promise
   */
  api: Function;
}

function CalendarMonth(prop: Props) {
  return <Calendar onPanelChange={onPanelChange} headerRender={headerRender} />;

  function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }

  // 自定义头部
  function headerRender({ value, type, onChange, onTypeChange }) {
    console.log(value, type, onChange, onTypeChange);

    return <div>66666</div>;
  }
}

export default CalendarMonth;
