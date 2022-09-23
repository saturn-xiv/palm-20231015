import { useEffect } from "react";
import { message } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import { home_url } from "..";
import { RULE_EMAIL, RULE_NAME, RULE_CODE, RULE_PASSWORD } from "../forms";
import { SiteInstallRequest, UserSignUpRequest } from "../../protocols/nut_pb";
import { SiteClient } from "../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../request";
import { IFormData } from "./users/SignUp";
import { TO_SIGN_IN } from "../../reducers/current-user";
import { guess_timezone } from "../date";
import { get as getLocale } from "../../locales";
import { setTitle } from "../../reducers/layout";
import { useAppDispatch } from "../../hooks";

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(intl.formatMessage({ id: "nut.install.title" })));
  }, [dispatch, intl]);

  return (
    <ProForm<IFormData>
      onFinish={async (values: IFormData) => {
        const client = new SiteClient(GRPC_HOST);

        const request = new SiteInstallRequest();
        {
          const user = new UserSignUpRequest();
          user.setHome(home_url());
          user.setLang(getLocale());
          user.setTimeZone(guess_timezone());
          user.setNickName(values.nickName);
          user.setRealName(values.realName);
          user.setPassword(values.password);
          user.setEmail(values.email);
          request.setUser(user);
        }

        client.install(request, grpc_metadata(), function (error) {
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
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="nickName"
          label={intl.formatMessage({
            id: "form.fields.nick-name.label",
          })}
          rules={[RULE_CODE]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="realName"
          label={intl.formatMessage({
            id: "form.fields.real-name.label",
          })}
          rules={[RULE_NAME]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="email"
          label={intl.formatMessage({ id: "form.fields.email.label" })}
          rules={[RULE_EMAIL, { type: "email" }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText.Password
          width="md"
          name="password"
          label={intl.formatMessage({ id: "form.fields.password.label" })}
          rules={[RULE_PASSWORD]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText.Password
          width="md"
          name="passwordConfirmation"
          label={intl.formatMessage({
            id: "form.fields.password-confirmation.label",
          })}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    intl.formatMessage({
                      id: "form.fields.password-confirmation.invalid",
                    })
                  )
                );
              },
            }),
          ]}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default Widget;
