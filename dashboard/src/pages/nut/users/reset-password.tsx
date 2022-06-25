import { useRef } from "react";
import { message } from "antd";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { useIntl } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../../../layouts/non-sign-in";
import { RULE_PASSWORD } from "../../../components/forms";
import { UserResetPasswordRequest } from "../../../protocols/nut_pb";
import { UserClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import { TO_SIGN_IN } from "../../../reducers/current-user";

export interface IFormData {
  password: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { token } = useParams();
  const formRef = useRef<ProFormInstance>();
  return (
    <Layout title="nut.users.reset-password.title">
      <ProForm<IFormData>
        formRef={formRef}
        onFinish={async (values: IFormData) => {
          if (token) {
            const client = new UserClient(GRPC_HOST);

            const request = new UserResetPasswordRequest();
            request.setToken(token);
            request.setPassword(values.password);

            client.resetPassword(request, grpc_metadata(), function (error) {
              if (error) {
                message.error(error.message);
              } else {
                formRef.current?.resetFields();
                navigate(TO_SIGN_IN);
                message.success(
                  intl.formatMessage({
                    id: "nut.users.reset-password.successed",
                  })
                );
              }
            });
          }
        }}
      >
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
    </Layout>
  );
};

export default Widget;
