import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, useHistory, getLocale } from 'umi';

import Layout from '@/layouts/non-sign-in';
import { home_url } from '@/components';
import {
  RULE_EMAIL,
  RULE_NAME,
  RULE_CODE,
  RULE_PASSWORD,
} from '@/components/forms';
import { SiteInstallRequest, UserSignUpRequest } from '@/protocols/nut_pb';
import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { IFormData } from './users/sign-up';
import { TO_SIGN_IN } from '@/models/useAuthModel';
import { guess_timezone } from '@/components/date';

const Widget = () => {
  const intl = useIntl();
  const history = useHistory();

  return (
    <Layout title="nut.install.title">
      <ProForm<IFormData>
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);

          const request = new SiteInstallRequest();
          {
            const user = new UserSignUpRequest();
            user.setHome(home_url());
            user.setLang(getLocale());
            user.setTimeZone(guess_timezone());
            user.setNickName(values.nickName);
            user.setRealName(values.realName);
            user.setPassword(values.password);
            user.setEmail(values.email);
            request.setUser(user);
          }

          client.install(request, grpc_metadata(), function (error) {
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
        <ProForm.Group>
          <ProFormText
            width="md"
            name="nickName"
            label={intl.formatMessage({
              id: 'form.fields.nick-name.label',
            })}
            rules={[RULE_CODE]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="realName"
            label={intl.formatMessage({
              id: 'form.fields.real-name.label',
            })}
            rules={[RULE_NAME]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="email"
            label={intl.formatMessage({ id: 'form.fields.email.label' })}
            rules={[RULE_EMAIL]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText.Password
            width="md"
            name="password"
            label={intl.formatMessage({ id: 'form.fields.password.label' })}
            rules={[RULE_PASSWORD]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText.Password
            width="md"
            name="passwordConfirmation"
            label={intl.formatMessage({
              id: 'form.fields.password-confirmation.label',
            })}
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      intl.formatMessage({
                        id: 'form.fields.password-confirmation.invalid',
                      }),
                    ),
                  );
                },
              }),
            ]}
          />
        </ProForm.Group>
      </ProForm>
    </Layout>
  );
};

export default Widget;
