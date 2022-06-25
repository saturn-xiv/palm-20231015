import { useRef } from "react";
import { message, Button, Tooltip } from "antd";
import ProForm, { ModalForm, ProFormText } from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { SecurityScanOutlined } from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";

import { SiteClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { SiteSetUserPasswordRequest } from "../../../../protocols/nut_pb.d";
import { IItem } from ".";
import { RULE_PASSWORD } from "../../../forms";

interface IProps {
  item: IItem;
  handleRefresh: () => void;
}

interface IFormData {
  nickName: string;
  password: string;
  passwordConfirmation: string;
}

const Widget = ({ item, handleRefresh }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm<IFormData>
      name="user.set-password"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      initialValues={{
        nickName: item.nickName,
        password: "",
        passwordConfirmation: "",
      }}
      onFinish={async (values: IFormData) => {
        const client = new SiteClient(GRPC_HOST);

        const request = new SiteSetUserPasswordRequest();
        request.setPassword(values.password);
        request.setUser(item.id);
        client.setUserPassword(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            handleRefresh();
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
          }
        });
      }}
      trigger={
        <Tooltip title={<FormattedMessage id="nut.admin.users.set-password" />}>
          <Button
            type="dashed"
            shape="circle"
            icon={<SecurityScanOutlined />}
          />
        </Tooltip>
      }
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="nickName"
          disabled
          label={intl.formatMessage({ id: "form.fields.nick-name.label" })}
          rules={[{ required: true }]}
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
    </ModalForm>
  );
};

export default Widget;
