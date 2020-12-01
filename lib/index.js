import React, { useState } from 'react';
import { Modal, Form, Table, InputNumber, Input, Popconfirm } from 'antd';

/**
 * Modal 组件
 * @link [antd modal](https://ant.design/components/modal-cn/)
 */
function BaseModal(props) {
  const { centered, visible, onOk, onCancel, okText, cancelText } = props;
  return React.createElement(
    Modal,
    Object.assign({}, props, {
      className: 'base-modal',
      visible: visible,
      okText: okText,
      cancelText: cancelText,
      centered: centered,
      closeIcon: React.createElement('span', { className: 'base-closebtn' }, '\u00D7'),
      onOk: onOk,
      onCancel: onCancel,
    }),
  );
}
BaseModal.defaultProps = {
  visible: false,
  centered: true,
  okText: '确认',
  cancelText: '取消',
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const EditableCell = (_a) => {
  var { editing, dataIndex, title, inputType, record, index, children } = _a,
    restProps = __rest(_a, [
      'editing',
      'dataIndex',
      'title',
      'inputType',
      'record',
      'index',
      'children',
    ]);
  const inputNode =
    inputType === 'number'
      ? React.createElement(InputNumber, null)
      : React.createElement(Input, null);
  return React.createElement(
    'td',
    Object.assign({}, restProps),
    editing
      ? React.createElement(
          Form.Item,
          {
            name: dataIndex,
            style: { margin: 0 },
            rules: [
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ],
          },
          inputNode,
        )
      : children,
  );
};
const EditableTable = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue(Object.assign({ name: '', age: '', address: '' }, record));
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = (key) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const row = yield form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, Object.assign(Object.assign({}, item), row));
          setData(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    });
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable
          ? React.createElement(
              'span',
              null,
              React.createElement(
                'a',
                {
                  href: 'javascript:;',
                  onClick: () => save(record.key),
                  style: { marginRight: 8 },
                },
                'Save',
              ),
              React.createElement(
                Popconfirm,
                { title: 'Sure to cancel?', onConfirm: cancel },
                React.createElement('a', null, 'Cancel'),
              ),
            )
          : React.createElement(
              'a',
              { disabled: editingKey !== '', onClick: () => edit(record) },
              'Edit',
            );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return Object.assign(Object.assign({}, col), {
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    });
  });
  return React.createElement(
    Form,
    { form: form, component: false },
    React.createElement(Table, {
      components: {
        body: {
          cell: EditableCell,
        },
      },
      bordered: true,
      dataSource: data,
      columns: mergedColumns,
      rowClassName: 'editable-row',
      pagination: {
        onChange: cancel,
      },
    }),
  );
};

export { BaseModal, EditableTable as EditTable };
