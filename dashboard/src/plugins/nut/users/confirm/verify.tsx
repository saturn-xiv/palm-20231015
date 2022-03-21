import { useEffect } from "react";
import { useIntl } from "react-intl";
import { MailOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../NonSignInLayout";
import { graphql_ } from "../../../../request";
import { USERS_SIGN_IN_PATH } from "../..";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.users.confirm.title" });
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    graphql_(
      `
        mutation PostForm($token: String!) {
          userConfirmByToken(token: $token) {
            createdAt
          }
        }
      `,
      { token: params.token },
      () => {
        message.success(intl.formatMessage({ id: "flashes.successed" }));
        navigate(USERS_SIGN_IN_PATH);
      },
      (items) => {
        items.forEach((it) => message.error(it));
        navigate(USERS_SIGN_IN_PATH);
      }
    );
  });

  return (
    <Layout icon={<MailOutlined />} title={title}>
      <div />
    </Layout>
  );
};

export default Widget;
