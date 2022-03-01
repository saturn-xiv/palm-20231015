import { useIntl, getLocale, history } from 'umi';
import { Form, Input, message, Button } from 'antd';
import moment from 'moment-timezone';

import NonSignInForm from '@/components/NonSignInForm';
import {
  CODE_VALIDATOR,
  EMAIL_VALIDATOR,
  NAME_VALIDATOR,
  PASSWORD_VALIDATOR,
  FormButtonGroupWrapper,
} from '@/components/form';
import { graphql } from '@/global';

export default () => {
  const intl = useIntl();

  const onFinish = (values: any) => {
    graphql(
      `
        mutation SignUp($user: UserSignUpRequest!) {
          userSignUp(form: $user) {
            createdAt
          }
        }
      `,
      {
        user: {
          nickName: values.nickName,
          realName: values.realName,
          email: values.email,
          password: values.password,
          lang: getLocale(),
          timeZone: moment.tz.guess(),
          home: document.location.origin,
        },
      },
      (res: any) => {
        message.success(
          intl.formatMessage({ id: 'users.confirm.successed' }),
          15,
        );
        history.push('/users/sign-in');
      },
    );
  };

  return (
    <NonSignInForm title={intl.formatMessage({ id: 'users.sign-up.title' })}>
      <Form name="install" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={intl.formatMessage({ id: 'attributes.nick-name' })}
          name="nickName"
          rules={[CODE_VALIDATOR]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={intl.formatMessage({ id: 'attributes.email' })}
          name="email"
          rules={[EMAIL_VALIDATOR]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={intl.formatMessage({ id: 'attributes.real-name' })}
          name="realName"
          rules={[NAME_VALIDATOR]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={intl.formatMessage({ id: 'attributes.password' })}
          name="password"
          rules={[PASSWORD_VALIDATOR]}
        >
          <Input.Password type="password" />
        </Form.Item>
        <Form.Item
          label={intl.formatMessage({ id: 'attributes.password-confirmation' })}
          name="passwordConfirmation"
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
                      id: 'helpers.password-onfirmation',
                    }),
                  ),
                );
              },
            }),
          ]}
        >
          <Input.Password type="password" />
        </Form.Item>

        <Form.Item wrapperCol={FormButtonGroupWrapper}>
          <Button type="primary" htmlType="submit">
            {intl.formatMessage({
              id: 'buttons.submit',
            })}
          </Button>
        </Form.Item>
      </Form>
    </NonSignInForm>
  );
};
