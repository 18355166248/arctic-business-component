# 日历(月)

```jsx
import React, { useState } from 'react';
import { DatePicker, ConfigProvider, Popover } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
import CalendarMonth from '../CalendarMonth';
import 'antd/dist/antd.less';

function onChange(value) {
  setMonth(value);
}

function onChangeCalendar(value) {
  setMonth(value);
}

function popoverContent({ text, content, children }) {
  return (
    <Popover title={text} content={content} trigger="click">
      {children}
    </Popover>
  );
}

const [month, setMonth] = useState(moment());

<ConfigProvider locale={zhCN}>
  <div>
    <span style={{ marginRight: '30px' }}>{month.format('MM')} 月</span>
    <DatePicker picker="month" onChange={onChange} value={month} />
  </div>
  <CalendarMonth value={month} onChange={onChangeCalendar} PopoverContent={popoverContent} />
</ConfigProvider>;
```
