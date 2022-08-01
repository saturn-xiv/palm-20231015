import { useEffect } from "react";
import { message } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import { home_url } from "../../..";
import { UserEmailRequest } from "../../../../protocols/nut_pb";
import { UserClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { setTitle } from "../../../../reducers/layout";
import { useAppDispatch } from "../../../../hooks";
import {
  TO_SIGN_IN,
  to_user_query_request,
} from "../../../../reducers/current-user";

export interface IFormData {
  account: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTitle(intl.formatMessage({ id: "nut.users.unlock.new.title" }))
    );
  }, [dispatch, intl]);

  return (
    <ProForm<IFormData>
      onFinish={async (values: IFormData) => {
        const client = new UserClient(GRPC_HOST);

        const request = new UserEmailRequest();
        request.setHome(home_url());
        request.setQuery(to_user_query_request(values.account));

        client.unlockByEmail(request, grpc_metadata(), function (error) {
          if (error) {
            message.error(error.message);
          } else {
            navigate(TO_SIGN_IN);
            message.success(
              intl.formatMessage({
                id: "nut.users.unlock.new.successed",
              })
            );
          }
        });
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="account"
          label={intl.formatMessage({ id: "form.fields.account.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default Widget;
