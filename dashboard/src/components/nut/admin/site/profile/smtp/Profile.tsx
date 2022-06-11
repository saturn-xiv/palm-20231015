import { useRef } from 'react';
import { message, Card, List } from 'antd';
import ProForm, { ProFormText, ProFormSelect } from '@ant-design/pro-form';
import { useIntl } from 'umi';
import type { ProFormInstance } from '@ant-design/pro-form';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import { RULE_EMAIL, RULE_PASSWORD } from '@/components/forms';
import { SmtpProfile } from '@/protocols/nut_pb';
import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import SmtpTestForm from './Test';

interface IFormData {
  host: string;
  port: number;
  user: string;
  password: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();

  return (
    <Card
      title={intl.formatMessage({ id: 'nut.admin.site.profile.smtp' })}
      extra={<SmtpTestForm />}
    >
      <ProForm<IFormData>
        name="site.smtp.profile"
        formRef={formRef}
        request={async () => {
          const client = new SiteClient(GRPC_HOST);
          const response = await client.getSmtp(new Empty(), grpc_metadata());
          return {
            host: response.getHost(),
            port: response.getPort(),
            user: response.getUser(),
            password: '',
            passwordConfirmation: '',
          };
        }}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);
          const request = new SmtpProfile();

          request.setHost(values.host);
          request.setPort(values.port);
          request.setUser(values.user);
          request.setPassword(values.password);

          client.setSmtp(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
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
            name="host"
            label={intl.formatMessage({
              id: 'form.fields.host.label',
            })}
            rules={[{ required: true }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect<number>
            width="md"
            name="port"
            options={[25, 465, 587].map((x) => ({
              value: x,
              label: x,
            }))}
            label={intl.formatMessage({ id: 'form.fields.port.label' })}
            rules={[{ required: true }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="user"
            label={intl.formatMessage({
              id: 'form.fields.email.label',
            })}
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
      <br />
      <Card.Meta
        description={
          <List bordered>
            <List.Item>
              <a
                href="https://developers.google.com/gmail/imap/imap-smtp"
                target="_blank"
              >
                IMAP, POP, and SMTP - Gmail for Developers
              </a>
            </List.Item>
          </List>
        }
      />
    </Card>
  );
};

export default Widget;
