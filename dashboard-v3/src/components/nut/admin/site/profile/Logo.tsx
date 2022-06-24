import { useRef } from 'react';
import { message, Card } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { useIntl } from 'umi';

import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { SiteSetLogoRequest } from '@/protocols/nut_pb';

interface IFormData {
  url: string;
}

const Widget = (props: IFormData) => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  return (
    <Card title={intl.formatMessage({ id: 'nut.admin.site.profile.logo' })}>
      <ProForm<IFormData>
        name="site.logo"
        formRef={formRef}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);
          const request = new SiteSetLogoRequest();
          request.setUrl(values.url);
          client.setLogo(request, grpc_metadata(), function (error) {
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
        initialValues={props}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="url"
            label={intl.formatMessage({
              id: 'form.fields.url.label',
            })}
            rules={[{ required: true, type: 'url' }]}
          />
        </ProForm.Group>
      </ProForm>
    </Card>
  );
};

export default Widget;
