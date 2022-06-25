import { message } from "antd";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import Layout from "../../../layouts/non-sign-in";
import { home_url } from "../../../components";
import { UserEmailRequest } from "../../../protocols/nut_pb.d";
import { UserClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import {
  TO_SIGN_IN,
  to_user_query_request,
} from "../../../reducers/current-user";

export interface IFormData {
  account: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <Layout title="nut.users.forgot-password.title">
      <ProForm<IFormData>
        onFinish={async (values: IFormData) => {
          const client = new UserClient(GRPC_HOST);

          const request = new UserEmailRequest();
          request.setHome(home_url());
          request.setQuery(to_user_query_request(values.account));

          client.forgotPassword(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
              navigate(TO_SIGN_IN);
              message.success(
                intl.formatMessage({
                  id: "nut.users.forgot-password.successed",
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
    </Layout>
  );
};

export default Widget;
