import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl } from 'umi';

import Layout from '@/layouts/non-sign-in';

interface IFormData {
  account: string;
  password: string;
}

const Widget = () => {
  const intl = useIntl();

  return (
    <Layout title="nut.users.sign-in.title">
      <ProForm<IFormData>
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
    </Layout>
  );
};

export default Widget;
