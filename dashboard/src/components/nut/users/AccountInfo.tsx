import { useRef } from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormSelect } from '@ant-design/pro-form';
import { useIntl, getAllLocales } from 'umi';
import type { ProFormInstance } from '@ant-design/pro-form';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import { RULE_NAME } from '@/components/forms';
import { UserSetProfileRequest } from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { all_time_zones } from '@/components/date';
import { setLocale } from '@/i18n';

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
      request={async () => {
        const client = new UserClient(GRPC_HOST);
        const response = await client.getProfile(new Empty(), grpc_metadata());
        return {
          email: response.getEmail(),
          nickName: response.getNickName(),
          realName: response.getRealName(),
          lang: response.getLang(),
          avatar: response.getAvatar(),
          timeZone: response.getTimeZone(),
        };
      }}
      onFinish={async (values: IFormData) => {
        const client = new UserClient(GRPC_HOST);
        const request = new UserSetProfileRequest();

        request.setLang(values.lang);
        request.setTimeZone(values.timeZone);
        request.setAvatar(values.avatar);
        request.setRealName(values.realName);

        client.setProfile(request, grpc_metadata(), function (error) {
          if (error) {
            message.error(error.message);
          } else {
            setLocale(values.lang);
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
          rules={[{ required: true }]}
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
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="avatar"
          label={intl.formatMessage({ id: 'form.fields.avatar.label' })}
          rules={[{ required: true, type: 'url' }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="lang"
          options={getAllLocales().map((x) => ({
            value: x,
            label: intl.formatMessage({ id: `languages.${x}` }),
          }))}
          label={intl.formatMessage({ id: 'form.fields.language.label' })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="timeZone"
          options={all_time_zones()}
          label={intl.formatMessage({ id: 'form.fields.time-zone.label' })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default Widget;
