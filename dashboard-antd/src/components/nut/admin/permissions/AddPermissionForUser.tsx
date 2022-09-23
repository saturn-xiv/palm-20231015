import { useRef } from "react";
import { message, Button } from "antd";
import {
  ProForm,
  ModalForm,
  ProFormSelect,
  ProFormText,
  ProFormDigit,
} from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components";
import { FormattedMessage, useIntl } from "react-intl";

import { IUserOption } from "../../../../reducers/current-user";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import {
  RbacGetPermissionsResponse,
  RbacPermissionForUserRequest,
} from "../../../../protocols/nut_pb";
import { RULE_CODE } from "../../../forms";
import { useAppSelector } from "../../../../hooks";
import { currentUser } from "../../../../reducers/current-user";

interface IProps {
  users: IUserOption[];
}

interface IFormData {
  resourceId?: number;
  resourceType: string;
  operation: string;
  user: number;
}

const Widget = ({ users }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  const current_user = useAppSelector(currentUser);
  return (
    <ModalForm<IFormData>
      name="add-permission-for-user"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new RbacClient(GRPC_HOST);

        const request = new RbacPermissionForUserRequest();
        request.setUser(values.user);

        var permission = new RbacGetPermissionsResponse.Item();
        permission.setOperation(values.operation);
        permission.setResourceType(values.resourceType);
        if (values.resourceId) {
          permission.setResourceId(values.resourceId);
        }
        request.setPermission(permission);

        client.addPermissionForUser(request, grpc_metadata(), (err) => {
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
          <FormattedMessage id="nut.admin.permissions.add-permission-for-user" />
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
        <ProFormText
          width="md"
          name="operation"
          label={intl.formatMessage({ id: "form.fields.operation.label" })}
          rules={[RULE_CODE]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="resourceType"
          label={intl.formatMessage({ id: "form.fields.resource.type.label" })}
          rules={[RULE_CODE]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit
          width="md"
          name="resourceId"
          label={intl.formatMessage({ id: "form.fields.resource.id.label" })}
          rules={[{ type: "integer" }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};
export default Widget;
