import { useIntl, FormattedMessage } from "react-intl";
import { SecurityScanOutlined } from "@ant-design/icons";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "./NonSignInLayout";
import { PASSWORD_VALIDATOR } from "../../../components/form";
import { graphql } from "../../../request";
import { USERS_SIGN_IN_PATH } from "..";
import Captcha from "../../../components/Captcha";
import { IOk } from "../..";

export interface IFormData {
  password: string;
  passwordConfirmation: string;
  captcha: string;
}

interface IFormRequest {
  user: { token?: string; password: string };
  captcha: string;
}

interface IFormResponse {
  userResetPassword: IOk;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.users.reset-password.title" });
  const navigate = useNavigate();
  let params = useParams();
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormRequest, IFormResponse>(
      `
        mutation PostForm(
          $token: String!
          $password: String!
          $captcha: String!
        ) {
          userResetPassword(
            token: $token
            password: $password
            captcha: $captcha
          ) {
            createdAt
          }
        }
      `,
      {
        user: {
          password: data.password,
          token: params.token,
        },
        captcha: data.captcha,
      }
    );
    if (response.data) {
      message.success(intl.formatMessage({ id: "flashes.successed" }));
      navigate(USERS_SIGN_IN_PATH);
    } else {
      response.errors?.forEach((it) => {
        message.error(it.message);
      });
    }
  };

  return (
    <Layout icon={<SecurityScanOutlined />} title={title}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormText.Password
          width="md"
          name="password"
          rules={PASSWORD_VALIDATOR}
          label={<FormattedMessage id="fields.password" />}
        />
        <ProFormText.Password
          width="md"
          name="passwordConfirmation"
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    intl.formatMessage({ id: "helpers.password-confirmation" })
                  )
                );
              },
            }),
          ]}
          label={<FormattedMessage id="fields.password-confirmation" />}
        />
        <ProForm.Group>
          <ProFormText
            width="xs"
            name="captcha"
            addonAfter={<Captcha />}
            rules={[{ required: true }]}
            label={<FormattedMessage id="fields.captcha" />}
          />
        </ProForm.Group>
      </ProForm>
    </Layout>
  );
};

export default Widget;
