import { useRef } from 'react';
import { message, Button, Tooltip } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { MailOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from 'umi';

import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { SiteSmtpTestRequst } from '@/protocols/nut_pb';
import { RULE_EMAIL, RULE_PASSWORD } from '@/components/forms';

interface IFormData {
  to: string;
  subject: string;
  body: string;
}

const Widget = () => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm<IFormData>
      name="site.smtp.test"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new SiteClient(GRPC_HOST);

        const request = new SiteSmtpTestRequst();
        request.setTo(values.to);
        request.setSubject(values.subject);
        request.setBody(values.body);
        client.testSmtp(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: 'form.submit.successed' }),
            );
          }
        });
      }}
      trigger={
        <Tooltip
          title={<FormattedMessage id="nut.admin.site.profile.smtp.test" />}
        >
          <Button type="dashed" shape="circle" icon={<MailOutlined />} />
        </Tooltip>
      }
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="to"
          label={intl.formatMessage({ id: 'form.fields.email.label' })}
          rules={[RULE_EMAIL]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="subject"
          label={intl.formatMessage({ id: 'form.fields.subject.label' })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormTextArea
          width="md"
          name="body"
          label={intl.formatMessage({ id: 'form.fields.body.label' })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default Widget;
