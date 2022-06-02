import { useRef, useEffect } from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { useIntl, useModel, useHistory } from 'umi';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import { message } from 'antd';

import {
  DURATION,
  removeToken,
  setToken,
  TO_PROFILE,
  to_user_query_request,
} from '@/models/useAuthModel';
import { UserSignInRequest } from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { setLocale } from '@/i18n';

interface IFormData {
  account: string;
  password: string;
}

const Widget = () => {
  const { initialState, refresh } = useModel('@@initialState');
  const intl = useIntl();
  const history = useHistory();

  useEffect(() => {
    if (initialState?.currentUser) {
      history.push(TO_PROFILE);
    }
  }, [initialState, history]);

  const formRef = useRef<ProFormInstance>();
  return (
    <ProForm<IFormData>
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new UserClient(GRPC_HOST);

        const request = new UserSignInRequest();
        request.setQuery(to_user_query_request(values.account));
        request.setPassword(values.password);
        {
          const ttl = new Duration();
          ttl.setSeconds(DURATION);
          request.setTtl(ttl);
        }

        client.signIn(request, grpc_metadata(), function (err, response) {
          if (err) {
            removeToken();
            message.error(err.message);
          } else {
            setToken(response.getToken());
            setLocale(response.getLang());
            refresh();
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
