import { useIntl, history } from 'umi';
import { Form, Input, message, Button } from 'antd';

import NonSignInForm from '@/components/NonSignInForm';
import { EMAIL_VALIDATOR, FormButtonGroupWrapper } from '@/components/form';
import { graphql } from '@/global';

export default () => {
  const intl = useIntl();

  const onFinish = (values: any) => {
    graphql(
      `
        mutation SignUp($form: UserConfirmByEmailRequest!) {
          userConfirmByEmail(form: $form) {
            createdAt
          }
        }
      `,
      {
        form: {
          email: values.email,
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
    <NonSignInForm title={intl.formatMessage({ id: 'users.confirm.title' })}>
      <Form name="install" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={intl.formatMessage({ id: 'attributes.email' })}
          name="email"
          rules={[EMAIL_VALIDATOR]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={FormButtonGroupWrapper}>
          <Button type="primary" htmlType="submit">
            {intl.formatMessage({
              id: 'users.confirm.submit',
            })}
          </Button>
        </Form.Item>
      </Form>
    </NonSignInForm>
  );
};
