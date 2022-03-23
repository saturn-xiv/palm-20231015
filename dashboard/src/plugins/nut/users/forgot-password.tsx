import { useIntl, FormattedMessage } from "react-intl";
import { SecurityScanOutlined } from "@ant-design/icons";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "./NonSignInLayout";
import { EMAIL_VALIDATOR } from "../../../components/form";
import { graphql } from "../../../request";
import { USERS_SIGN_IN_PATH } from "..";
import Captcha from "../../../components/Captcha";

interface IFormData {
  email: string;
  captcha: string;
}
interface IFormResponse {
  userForgotPassword: { createdAt: number };
}
interface IFormRequest {
  email: string;
  home: string;
  captcha: string;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.users.forgot-password.title" });
  const navigate = useNavigate();
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormRequest, IFormResponse>(
      `
        mutation PostForm($email: String!, $home: String!, $captcha: String!) {
          userForgotPassword(email: $email, home: $home, captcha: $captcha) {
            createdAt
          }
        }
      `,
      {
        email: data.email,
        home: document.location.origin,
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
        <ProFormText
          width="md"
          name="email"
          rules={EMAIL_VALIDATOR}
          label={<FormattedMessage id="fields.email" />}
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
