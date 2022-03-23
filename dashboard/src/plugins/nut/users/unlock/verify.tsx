import { useEffect } from "react";
import { useIntl } from "react-intl";
import { MailOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../NonSignInLayout";
import { graphql } from "../../../../request";
import { USERS_SIGN_IN_PATH } from "../..";
interface IFetchResponse {
  userUnlockByToken: { createdAt: number };
}

interface IRequest {
  token?: string;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.users.unlock.title" });
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    graphql<IRequest, IFetchResponse>(
      `
        mutation PostForm($token: String!) {
          userUnlockByToken(token: $token) {
            createdAt
          }
        }
      `,
      { token: params.token }
    ).then((response) => {
      if (response.data) {
        message.success(intl.formatMessage({ id: "flashes.successed" }));
      } else {
        response.errors?.forEach((it) => {
          message.error(it.message);
        });
      }
      navigate(USERS_SIGN_IN_PATH);
    });
  });

  return (
    <Layout icon={<MailOutlined />} title={title}>
      <div />
    </Layout>
  );
};

export default Widget;
