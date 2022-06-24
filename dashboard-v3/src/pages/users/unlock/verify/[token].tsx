import { message, Button } from 'antd';
import { useIntl, useParams, useHistory, FormattedMessage } from 'umi';

import Layout from '@/layouts/non-sign-in';
import { UserTokenRequest } from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { TO_SIGN_IN } from '@/models/useAuthModel';

export interface IFormData {
  email: string;
}

interface IParam {
  token: string;
}

const Widget = () => {
  const intl = useIntl();
  const history = useHistory();
  const params = useParams<IParam>();
  return (
    <Layout title="nut.users.unlock.verify.title">
      <Button
        type="primary"
        shape="round"
        onClick={async () => {
          const client = new UserClient(GRPC_HOST);

          const request = new UserTokenRequest();
          request.setToken(params.token);

          client.unlockByToken(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
              history.push(TO_SIGN_IN);
              message.success(
                intl.formatMessage({
                  id: 'form.submit.successed',
                }),
              );
            }
          });
        }}
      >
        <FormattedMessage id="buttons.submit" />
      </Button>
    </Layout>
  );
};

export default Widget;
