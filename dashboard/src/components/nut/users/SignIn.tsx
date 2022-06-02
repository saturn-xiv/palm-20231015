import { useRef } from 'react';
import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { useIntl } from 'umi';

interface IFormData {
  account: string;
  password: string;
}

const Widget = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  return (
    <ProForm<IFormData>
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        console.log(values);
        message.success(intl.formatMessage({ id: 'form.submit.success' }));
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="account"
          label={intl.formatMessage({ id: 'form.fields.account.label' })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText.Password
          width="md"
          name="password"
          label={intl.formatMessage({ id: 'form.fields.password.label' })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default Widget;
