import { useRef } from "react";
import { message } from "antd";
import ProForm, { ProFormText, ProFormSelect } from "@ant-design/pro-form";
import { useIntl } from "react-intl";
import type { ProFormInstance } from "@ant-design/pro-form";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";

import { RULE_NAME } from "../../forms";
import { UserSetProfileRequest } from "../../../protocols/nut_pb";
import { UserClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import { all_time_zones } from "../../date";
import { set as setLocale, LANGUAGES } from "../../../locales";

interface IFormData {
  email: string;
  nickName: string;
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
        const response = await client.refresh(new Duration(), grpc_metadata());
        const user = response.getPayload();
        const it: IFormData = {
          email: user?.getEmail() || "",
          nickName: user?.getNickName() || "",
          realName: user?.getRealName() || "",
          lang: user?.getLang() || "",
          avatar: user?.getAvatar() || "",
          timeZone: user?.getTimeZone() || "",
        };
        return it;
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
            setLocale(values.lang, true);
            message.success(
              intl.formatMessage({
                id: "form.submit.successed",
              })
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
            id: "form.fields.nick-name.label",
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
            id: "form.fields.real-name.label",
          })}
          rules={[RULE_NAME]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="email"
          disabled
          label={intl.formatMessage({ id: "form.fields.email.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="avatar"
          label={intl.formatMessage({ id: "form.fields.avatar.label" })}
          rules={[{ required: true, type: "url" }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="lang"
          options={LANGUAGES.map((x) => ({
            value: x,
            label: intl.formatMessage({ id: `languages.${x}` }),
          }))}
          label={intl.formatMessage({ id: "form.fields.language.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="timeZone"
          options={all_time_zones()}
          label={intl.formatMessage({ id: "form.fields.time-zone.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default Widget;
