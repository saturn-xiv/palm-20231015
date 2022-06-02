import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, useHistory } from 'umi';

import Layout from '@/layouts/non-sign-in';
import { home_url, TO_SIGN_IN } from '@/components';
import { UserEmailRequest } from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { to_user_query_request } from '@/models/useAuthModel';

export interface IFormData {
  account: string;
}

const Widget = () => {
  const intl = useIntl();
  const history = useHistory();

  return (
    <Layout title="nut.users.confirm.new.title">
      <ProForm<IFormData>
        onFinish={async (values: IFormData) => {
          const client = new UserClient(GRPC_HOST);

          const request = new UserEmailRequest();
          request.setHome(home_url());
          request.setQuery(to_user_query_request(values.account));

          client.confirmByEmail(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
              history.push(TO_SIGN_IN);
              message.success(
                intl.formatMessage({
                  id: 'nut.users.confirm.new.successed',
                }),
              );
            }
          });
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
      </ProForm>
    </Layout>
  );
};

export default Widget;
