import React, { useState } from 'react';
import { Calendar, Popover } from 'antd';
import styles from './index.less'
import isFunction from 'lodash/isFunction'

interface Props {
  /**
   * 控制器
   */
  ctrlRef?: object;
  /**
   * 接口请求 Promise
   */
  api: Function;
  /**
   * 月份
   */
  value: object;
  /**
   * 月份改变
   */
  onChange: Function;
  /**
   * 下面内容popover壳子
   */
  PopoverContent: Function;
}

function CalendarMonth(prop: Props) {
  const { value, onChange, PopoverContent } = prop
  const [appt, setAppt] = useState({})

  return (
    <Calendar headerRender={() => null} onChange={_onChange} dateFullCellRender={dateFullCellRender} value={value} />
  );

  function _onChange(date: object) {
    isFunction(onChange) && onChange(date)
  }

  function dateFullCellRender(date: { format: Function, startOf: Function }) {
    return (
      <div className={styles.CMCard}>
        {date.format('DD')}
        <Popover text='33333' content='33333' trigger="click">
          <div onClick={() => setAppt({ text: '2222', content: <div>99999</div> })}>2</div>
        </Popover>
        <Popover text='1111' content='1111' trigger="click">
          <div onClick={() => setAppt({ text: '111', content: <div>77777</div> })}>1</div>
        </Popover>
      </div>
    )
  }
}

export default CalendarMonth;
