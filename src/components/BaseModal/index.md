```jsx
import React from 'react';
import BaseButton from '../BaseModal';
const [visible, setVisible] = React.useState(false);
const showModal = () => {
  console.log('showmodal');
  setVisible(true);
};

const closeModal = () => {
  console.log('closemodal');
  setVisible(false);
};

<>
  <BaseModal title="Basic Modal" visible={visible} onOk={closeModal} onCancel={closeModal}>
    <p>Some contents...</p>
  </BaseModal>
  <button type="primary" onClick={showModal}>
    点击我展示弹窗
  </button>
</>;
```
