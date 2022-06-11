import { useRef } from 'react';
import { message, Card } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl } from 'umi';
import type { ProFormInstance } from '@ant-design/pro-form';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import { AwsProfile } from '@/protocols/nut_pb';
import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import S3TestForm from './S3Test';

interface IFormData {
  region: string;
  endpoint?: string;
  accessKeyId: string;
  secretAccessKey: string;
}

const Widget = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();

  return (
    <Card title="Aws" extra={<S3TestForm />}>
      <ProForm<IFormData>
        name="site.aws.profile"
        formRef={formRef}
        request={async () => {
          const client = new SiteClient(GRPC_HOST);
          const response = await client.getAws(new Empty(), grpc_metadata());
          return {
            region: response.getRegion(),
            endpoint: response.getEndpoint(),
            secretAccessKey: response.getSecretAccessKey(),
            accessKeyId: response.getAccessKeyId(),
          };
        }}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);
          const request = new AwsProfile();

          if (values.endpoint) {
            request.setEndpoint(values.endpoint);
          }
          request.setSecretAccessKey(values.secretAccessKey);
          request.setRegion(values.region);
          request.setAccessKeyId(values.accessKeyId);

          client.setAws(request, grpc_metadata(), function (error) {
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
            name="region"
            label={intl.formatMessage({
              id: 'form.fields.region.label',
            })}
            rules={[{ required: true }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="endpoint"
            label={intl.formatMessage({
              id: 'form.fields.endpoint.label',
            })}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="accessKeyId"
            label="Access key id"
            rules={[{ required: true }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="secretAccessKey"
            label="Secret access key"
            rules={[{ required: true }]}
          />
        </ProForm.Group>
      </ProForm>
    </Card>
  );
};

export default Widget;
