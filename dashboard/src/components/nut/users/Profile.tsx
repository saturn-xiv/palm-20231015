import { useRef } from 'react';
import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, getLocale, getAllLocales } from 'umi';
import type { ProFormInstance } from '@ant-design/pro-form';

import { guess_timezone } from '@/components';
import { RULE_EMAIL, RULE_NAME, RULE_CODE } from '@/components/forms';
import {
  UserSetProfileRequest,
  UserGetProfileResponse,
} from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

interface IFormData {
  email: string;
  nickName: string;
  realName: string;
  lang: string;
  avatar: string;
  timeZone: string;
}

interface IFormRequest {
  realName: string;
  lang: string;
  avatar: string;
  timeZone: string;
}
const Widget = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();

  return (
    <ProForm<IFormData>
      name="user.profile"
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new UserClient(GRPC_HOST);
        const request = new UserSetProfileRequest();

        request.setLang(getLocale());
        request.setTimeZone(guess_timezone());
        request.setAvatar(values.avatar);
        request.setRealName(values.realName);

        client.setProfile(request, grpc_metadata(), function (error) {
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
          name="nickName"
          label={intl.formatMessage({
            id: 'form.fields.nick-name.label',
          })}
          disabled
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
          disabled
          label={intl.formatMessage({ id: 'form.fields.email.label' })}
          rules={[RULE_EMAIL]}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default Widget;
