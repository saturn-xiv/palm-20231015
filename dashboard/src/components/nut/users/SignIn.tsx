import { useRef, useEffect } from "react";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";
import { message } from "antd";

import {
  DURATION,
  to_user_query_request,
  TO_PROFILE,
  currentUser,
  to_user,
} from "../../../reducers/current-user";
import { UserSignInRequest } from "../../../protocols/nut_pb";
import { UserClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import { signIn } from "../../../reducers/current-user";
import { useAppSelector, useAppDispatch } from "../../../hooks";

interface IFormData {
  account: string;
  password: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      if (user) {
        navigate(TO_PROFILE);
      }
    };
  }, [user, navigate]);

  const formRef = useRef<ProFormInstance>();
  return (
    <ProForm<IFormData>
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new UserClient(GRPC_HOST);
        const request = new UserSignInRequest();
        request.setQuery(to_user_query_request(values.account));
        request.setPassword(values.password);
        {
          const ttl = new Duration();
          ttl.setSeconds(DURATION);
          request.setTtl(ttl);
        }

        client.signIn(request, grpc_metadata(), function (err, response) {
          if (err) {
            message.error(err.message);
          } else {
            try {
              const user = to_user(response);
              if (user) {
                dispatch(signIn([user, response.getToken()]));
                navigate(TO_PROFILE);
              }
            } catch {}
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
      <ProForm.Group>
        <ProFormText.Password
          width="md"
          name="password"
          label={intl.formatMessage({ id: "form.fields.password.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default Widget;
