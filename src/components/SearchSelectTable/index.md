# 搜索下拉表格组件

```jsx
import React from 'react';
import SearchSelectTable from '../SearchSelectTable';
import { getTemList } from './index.api.ts';

const columns = [
  {
    title: '名字',
    dataIndex: 'patientName',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '邮件',
    dataIndex: 'email',
  },
  {
    title: '手机',
    dataIndex: 'mobile',
  },
];

<>
  <SearchSelectTable api={getTemList} columns={columns} rowKey="patientId" />
</>;
```
