```jsx
import React from 'react';
import SearchSelectTable from '../SearchSelectTable';
import { getTemList } from './index.api.ts';

const columns = [
  {
    title: '名字',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
];

<>
  <SearchSelectTable api={getTemList} columns={columns} rowKey="id" />
</>;
```
