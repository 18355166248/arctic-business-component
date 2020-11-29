import React from 'react';
import { Modal } from 'antd';

/**
 * Modal 组件
 * @link [antd modal](https://ant.design/components/modal-cn/)
 */
function BaseModal(props) {
    const { centered, visible, onOk, onCancel, okText, cancelText } = props;
    return (React.createElement(Modal, Object.assign({}, props, { className: "base-modal", visible: visible, okText: okText, cancelText: cancelText, centered: centered, closeIcon: React.createElement("span", { className: "base-closebtn" }, "\u00D7"), onOk: onOk, onCancel: onCancel })));
}
BaseModal.defaultProps = {
    visible: false,
    centered: true,
    okText: '确认',
    cancelText: '取消',
};

export default BaseModal;
