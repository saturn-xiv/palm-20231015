import { useRef, useState } from 'react';
import { message, Tooltip, Button, Card } from 'antd';
import ProForm, { ProFormDateTimePicker } from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { useIntl } from 'umi';
import dayjs from 'dayjs';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyOutlined } from '@ant-design/icons';

import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

interface IFormData {
  due: string;
}

const Widget = () => {
  const [token, setToken] = useState<string>();
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  return (
    <Card
      title={intl.formatMessage({ id: 'nut.admin.site.profile.token.title' })}
    >
      <ProForm<IFormData>
        name="site.token"
        formRef={formRef}
        submitter={{
          render: (props, doms) => {
            return token
              ? [
                  ...doms,
                  <Tooltip
                    key="copy"
                    title={intl.formatMessage({
                      id: 'buttons.copy-to-clipboard',
                    })}
                  >
                    <CopyToClipboard text={token} onCopy={() => {}}>
                      <Button icon={<CopyOutlined />} />
                    </CopyToClipboard>
                  </Tooltip>,
                ]
              : doms;
          },
        }}
        onFinish={async (values: IFormData) => {
          const now = dayjs();
          const due = dayjs(values.due);
          const seconds = due.diff(now, 'second');

          const client = new UserClient(GRPC_HOST);
          const request = new Duration();
          request.setSeconds(seconds);

          client.refresh(request, grpc_metadata(), function (error, response) {
            if (error) {
              message.error(error.message);
            } else {
              setToken(response.getToken());
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
          <ProFormDateTimePicker
            width="md"
            name="due"
            label={intl.formatMessage({
              id: 'form.fields.due-day.label',
            })}
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const now = dayjs();
                  const due = dayjs(getFieldValue('due'));
                  if (due <= now) {
                    return Promise.reject(
                      new Error(
                        intl.formatMessage({
                          id: 'form.fields.due-day.must-after-today',
                        }),
                      ),
                    );
                  }

                  return Promise.resolve();
                },
              }),
            ]}
          />
        </ProForm.Group>
      </ProForm>
      <br />

      <Card.Meta description={<pre>{token}</pre>} />
    </Card>
  );
};

export default Widget;
