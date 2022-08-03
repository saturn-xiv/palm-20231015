import { useRef } from "react";
import { message, Button } from "antd";
import {
  ProForm,
  ModalForm,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components";
import { FormattedMessage, useIntl } from "react-intl";

import { IUserOption } from "../../../../reducers/current-user";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { RbacRoleForUserRequest } from "../../../../protocols/nut_pb";
import { RULE_CODE } from "../../../forms";
import { useAppSelector } from "../../../../hooks";
import { currentUser } from "../../../../reducers/current-user";

interface IProps {
  users: IUserOption[];
  handleRefresh: () => void;
}

interface IFormData {
  user: number;
  role: string;
}

const Widget = ({ users, handleRefresh }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  const current_user = useAppSelector(currentUser);
  return (
    <ModalForm<IFormData>
      name="add-role-for-user"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new RbacClient(GRPC_HOST);

        const request = new RbacRoleForUserRequest();
        request.setUser(values.user);
        request.setRole(values.role);

        client.addRoleForUser(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
            handleRefresh();
          }
        });
      }}
      trigger={
        <Button>
          <FormattedMessage id="nut.admin.permissions.add-role-for-user" />
        </Button>
      }
    >
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="user"
          options={users
            .filter((x) => x.id !== current_user?.id)
            .map((x) => ({
              value: x.id,
              label: `${x.nickName}(${x.realName})`,
            }))}
          label={intl.formatMessage({ id: "form.fields.user.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="role"
            label={intl.formatMessage({ id: "form.fields.role.label" })}
            rules={[RULE_CODE]}
          />
        </ProForm.Group>
      </ProForm.Group>
    </ModalForm>
  );
};
export default Widget;
