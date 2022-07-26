import { message } from "antd";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import { home_url } from "../../../components";
import {
  RULE_EMAIL,
  RULE_NAME,
  RULE_CODE,
  RULE_PASSWORD,
} from "../../../components/forms";
import { UserSignUpRequest } from "../../../protocols/nut_pb";
import { UserClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import { TO_SIGN_IN } from "../../../reducers/current-user";
import { guess_timezone } from "../../../components/date";
import { get as getLocale } from "../../../locales";

export interface IFormData {
  email: string;
  realName: string;
  nickName: string;
  password: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  return (
    <ProForm<IFormData>
      onFinish={async (values: IFormData) => {
        const client = new UserClient(GRPC_HOST);

        const request = new UserSignUpRequest();
        request.setHome(home_url());
        request.setLang(getLocale());
        request.setTimeZone(guess_timezone());
        request.setNickName(values.nickName);
        request.setRealName(values.realName);
        request.setPassword(values.password);
        request.setEmail(values.email);

        client.signUp(request, grpc_metadata(), function (error) {
          if (error) {
            message.error(error.message);
          } else {
            navigate(TO_SIGN_IN);
            message.success(
              intl.formatMessage({
                id: "nut.users.confirm.new.successed",
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
          rules={[RULE_CODE]}
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
          label={intl.formatMessage({ id: "form.fields.email.label" })}
          rules={[RULE_EMAIL]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText.Password
          width="md"
          name="password"
          label={intl.formatMessage({ id: "form.fields.password.label" })}
          rules={[RULE_PASSWORD]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText.Password
          width="md"
          name="passwordConfirmation"
          label={intl.formatMessage({
            id: "form.fields.password-confirmation.label",
          })}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    intl.formatMessage({
                      id: "form.fields.password-confirmation.invalid",
                    })
                  )
                );
              },
            }),
          ]}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default Widget;