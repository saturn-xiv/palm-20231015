import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, useHistory } from 'umi';

import Layout from '@/layouts/non-sign-in';
import { home_url, TO_SIGN_IN } from '@/components';
import { RULE_EMAIL } from '@/components/forms';
import { UserEmailRequest, UserQueryRequest } from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

export interface IFormData {
  email: string;
}

const Widget = () => {
  const intl = useIntl();
  const history = useHistory();

  return (
    <Layout title="nut.users.unlock.new.title">
      <ProForm<IFormData>
        onFinish={async (values: IFormData) => {
          const client = new UserClient(GRPC_HOST);

          const request = new UserEmailRequest();
          request.setHome(home_url());
          {
            const query = new UserQueryRequest();
            query.setEmail(values.email);
            request.setQuery(query);
          }

          client.unlockByEmail(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
              history.push(TO_SIGN_IN);
              message.success(
                intl.formatMessage({
                  id: 'nut.users.unlock.new.successed',
                }),
              );
            }
          });
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="email"
            label={intl.formatMessage({ id: 'form.fields.email.label' })}
            rules={[RULE_EMAIL]}
          />
        </ProForm.Group>
      </ProForm>
    </Layout>
  );
};

export default Widget;
