import { Button, Col, Transfer, message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl } from 'umi';

import Layout from '@/layouts/application';

interface IFormData {
  account: string;
  password: string;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'nut.users.sign-in.title' });
  return (
    <Layout title={title}>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
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
      </Col>
    </Layout>
  );
};

export default Widget;
