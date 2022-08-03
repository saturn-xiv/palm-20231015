import { useRef } from "react";
import { message, Button } from "antd";
import { ProForm, ModalForm, ProFormSelect } from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components";
import { FormattedMessage, useIntl } from "react-intl";

import {
  IRoleOption,
  IUserOption,
  ROLE_ROOT,
} from "../../../../reducers/current-user";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { RbacRoleForUserRequest } from "../../../../protocols/nut_pb";

interface IProps {
  roles: IRoleOption[];
  users: IUserOption[];
}

interface IFormData {
  user: number;
  role: string;
}

const Widget = ({ users, roles }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
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
          options={users.map((x) => ({
            value: x.id,
            label: `${x.nickName}(${x.realName})`,
          }))}
          label={intl.formatMessage({ id: "form.fields.user.label" })}
          rules={[{ required: true }]}
        />
        <ProFormSelect
          width="md"
          name="role"
          options={roles
            .filter((x) => x.code !== ROLE_ROOT)
            .map((x) => ({
              value: x.code,
              label: x.name,
            }))}
          label={intl.formatMessage({ id: "form.fields.role.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};
export default Widget;
