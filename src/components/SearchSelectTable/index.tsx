import React, { useState, useRef, useEffect } from 'react';
import { Select, Spin, Table } from 'antd';
import _ from 'lodash';

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
   * 接口请求参数
   */
  paramsKey: string;
  /**
   * 表格唯一key
   */
  rowKey: string;
  /**
   * 表格选择一行后的回调
   */
  onSelect: Function;
  /**
   * 失去焦点回调
   */
  onBlurCb: Function;
  /**
   * 表格配置
   */
  columns: [];
  /**
   * 样式
   */
  style: object;
  /**
   * 输入框placeholder
   */
  placeholder: string;
  /**
   * 表格宽度
   */
  scrollY: number;
}

function SearchSelectTable(props: Props) {
  const {
    ctrlRef,
    onBlurCb,
    onSelect,
    scrollY = 500,
    showText = true,
    introducerPatientName,
    api,
    paramsKey = 'regularParam',
    columns,
    style = {
      width: '400px',
    },
    placeholder,
    rowKey = 'id',
    ...otherProps
  } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectValue, setSelectValue] = useState(undefined);
  const blurStatus = useRef(false);
  const selectRef = useRef(null);
  const fetchingRef = useRef(false);

  useEffect(() => {
    if (ctrlRef) {
      ctrlRef.current = {
        setFocus,
      };
    }

    if (!selectValue && showText) {
      setSelectValue(introducerPatientName);
    }
  });

  return (
    <Select
      style={style}
      ref={selectRef}
      showSearch
      value={selectValue}
      notFoundContent={getNotFoundContent()}
      filterOption={false}
      onSearch={_.debounce(onFetchUser, 300)}
      // suffixIcon={<DPMSIcon type="dpms-icon-search" />}
      onBlur={onBlur}
      bordered={showText ? true : false}
      onFocus={onFocus}
      dropdownRender={() => {
        if (loading) {
          return (
            <div style={{ textAlign: 'center' }}>
              <Spin size="small" className="m-6 ml-20" />
            </div>
          );
        }

        if (selectValue && data.length === 0) {
          return (
            <div className="p-10" style={{ textAlign: 'center' }}>
              暂无数据
            </div>
          );
        }

        if (data.length === 0) {
          return null;
        }

        return (
          <Table
            scroll={{ y: scrollY }}
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey={(record) => record[rowKey]}
            onRow={(record) => {
              return {
                onClick: () => {
                  _.isFunction(onSelect) && onSelect(record);
                  setData([]);

                  showText ? setSelectValue(record.patientName) : setSelectValue(undefined);
                  selectRef.current.blur();
                },
              };
            }}
          />
        );
      }}
      {...otherProps}
      placeholder={placeholder || '姓名/拼音/简拼/联系电话模糊查询'}
    >
      {data.map((item) => (
        <Select.Option key={item[rowKey]}>{item.text}</Select.Option>
      ))}
    </Select>
  );

  function onFetchUser(value) {
    // 这里使用缓存是因为判断selectValue在初始化设置的时候是异步的,
    // 所以需要缓存value的值在没有失去焦点的情况下才给他赋值
    // 如果是失去焦点的情况下再去获取焦点搜索, 这个时候onFetchUser的value其实是没有值的
    // 我需要去selectValue里面拿
    let cloneValue = '';

    !showText && setSelectValue(value);

    fetchingRef.current = true;
    const cloneBlurStatus = blurStatus.current;

    if (blurStatus.current) {
      blurStatus.current = false;
      cloneValue = selectValue;
      setData([]);
      !showText && setSelectValue(undefined);
    } else {
      cloneValue = value;
    }

    if (!cloneValue) {
      fetchingRef.current = false;

      return setData([]);
    }

    setLoading(true);

    if (cloneBlurStatus) {
      return;
    }

    api({ [paramsKey]: value })
      .then((res) => {
        setData(res.data);
        fetchingRef.current = false;
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      })
      .catch();
  }

  function setFocus() {
    selectRef.current.focus();
  }

  function onFocus() {
    blurStatus.current = false;
    setLoading(false);
  }

  function onBlur() {
    !showText && setSelectValue(undefined);
    // 这里需要注意的是 只有当搜索框有值并且下拉框有值的时候 才需要给blurStatus赋值true
    (!fetchingRef.current || data.length > 0) && (blurStatus.current = true);

    setTimeout(() => {
      if (!data.length) {
        onBlurCb && onBlurCb();
      }
    }, 200);
  }

  function getNotFoundContent() {
    if (loading) {
      return <Spin size="small" className="m-6 ml-20" />;
    }

    if (selectValue && data.length === 0) {
      return <div className="p-10">暂无数据</div>;
    }

    if (data.length === 0) {
      return null;
    }
  }
}

export default SearchSelectTable;
