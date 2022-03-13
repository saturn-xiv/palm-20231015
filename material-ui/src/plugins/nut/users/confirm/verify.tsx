import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useIntl } from "react-intl";

import Layout from "../../../../layouts/application";
import { graphql } from "../../../../request";
import { USERS_SIGN_IN_PATH } from "../..";
import {
  error as showError,
  success as showSuccess,
} from "../../../../reducers/notification-bar";
import { useAppDispatch } from "../../../../hooks";

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let params = useParams();
  useEffect(() => {
    graphql(
      `
        mutation PostForm($token: String!) {
          userConfirmByToken(token: $token) {
            createdAt
          }
        }
      `,
      { token: params.token },
      () => {
        dispatch(
          showSuccess([intl.formatMessage({ id: "flashes.successed" })])
        );
        navigate(USERS_SIGN_IN_PATH);
      },
      (items) => {
        dispatch(showError(items));
        navigate(USERS_SIGN_IN_PATH);
      }
    );
  });
  return (
    <Layout title={intl.formatMessage({ id: "nut.users.confirm.title" })}>
      <div />
    </Layout>
  );
};

export default Widget;
