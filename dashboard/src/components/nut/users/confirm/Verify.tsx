import { useEffect } from "react";
import { message, Button } from "antd";
import { useIntl, FormattedMessage } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";

import { UserTokenRequest } from "../../../../protocols/nut_pb";
import { UserClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { TO_SIGN_IN } from "../../../../reducers/current-user";
import { setTitle } from "../../../../reducers/layout";
import { useAppDispatch } from "../../../../hooks";

export interface IFormData {
  email: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTitle(intl.formatMessage({ id: "nut.users.confirm.verify.title" }))
    );
  }, [dispatch, intl]);

  return (
    <Button
      type="primary"
      shape="round"
      onClick={async () => {
        if (token) {
          const client = new UserClient(GRPC_HOST);

          const request = new UserTokenRequest();
          request.setToken(token);

          client.confirmByToken(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
              navigate(TO_SIGN_IN);
              message.success(
                intl.formatMessage({
                  id: "form.submit.successed",
                })
              );
            }
          });
        }
      }}
    >
      <FormattedMessage id="buttons.submit" />
    </Button>
  );
};

export default Widget;
