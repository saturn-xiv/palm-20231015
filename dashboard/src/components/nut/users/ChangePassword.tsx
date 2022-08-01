import { useRef, useEffect } from "react";
import { message, Col } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components";
import { useIntl } from "react-intl";

import { RULE_PASSWORD } from "../../forms";
import { UserChangePasswordRequest } from "../../../protocols/nut_pb";
import { UserClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import { setTitle } from "../../../reducers/layout";
import { useAppDispatch } from "../../../hooks";

interface IFormData {
  newPassword: string;
  currentPassword: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTitle(intl.formatMessage({ id: "nut.users.change-password.title" }))
    );
  }, [dispatch, intl]);

  return (
    <Col sm={{ span: 22, offset: 1 }} md={{ span: 8 }}>
      <ProForm<IFormData>
        name="user.change-password"
        formRef={formRef}
        onFinish={async (values: IFormData) => {
          const client = new UserClient(GRPC_HOST);

          const request = new UserChangePasswordRequest();
          request.setCurrentPassword(values.currentPassword);
          request.setNewPassword(values.newPassword);

          client.changePassword(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
              formRef.current?.resetFields();
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
          <ProFormText.Password
            width="md"
            name="currentPassword"
            label={intl.formatMessage({
              id: "form.fields.current-password.label",
            })}
            rules={[{ required: true }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText.Password
            width="md"
            name="newPassword"
            label={intl.formatMessage({
              id: "form.fields.new-password.label",
            })}
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
                  if (!value || getFieldValue("newPassword") === value) {
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
    </Col>
  );
};

export default Widget;
