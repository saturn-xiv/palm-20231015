import { useIntl, FormattedMessage } from "react-intl";
import { MailOutlined } from "@ant-design/icons";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "../NonSignInLayout";
import { EMAIL_VALIDATOR } from "../../../../components/form";
import { graphql } from "../../../../request";
import { USERS_SIGN_IN_PATH } from "../..";

interface IFormData {
  email: string;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.users.confirm.title" });
  const navigate = useNavigate();

  const onSubmit = async (data: IFormData) => {
    graphql(
      `
        mutation PostForm($email: String!, $home: String!) {
          userConfirmByEmail(email: $email, home: $home) {
            createdAt
          }
        }
      `,
      {
        email: data.email,
        home: document.location.origin,
      },
      () => {
        message.success(intl.formatMessage({ id: "flashes.successed" }));
        navigate(USERS_SIGN_IN_PATH);
      }
    );
  };

  return (
    <Layout icon={<MailOutlined />} title={title}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormText
          width="md"
          name="email"
          rules={EMAIL_VALIDATOR}
          label={<FormattedMessage id="fields.email" />}
        />
      </ProForm>
    </Layout>
  );
};

export default Widget;
