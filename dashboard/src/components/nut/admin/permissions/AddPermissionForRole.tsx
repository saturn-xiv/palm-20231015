import { useRef } from "react";
import { message, Button } from "antd";
import {
  ProForm,
  ModalForm,
  ProFormText,
  ProFormDigit,
  ProFormSelect,
} from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components";
import { FormattedMessage, useIntl } from "react-intl";

import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import {
  RbacGetPermissionsResponse,
  RbacPermissionForRoleRequest,
} from "../../../../protocols/nut_pb";
import { RULE_CODE } from "../../../forms";
import {
  IRoleOption,
  ROLE_ADMINISTRATOR,
  ROLE_ROOT,
} from "../../../../reducers/current-user";

interface IProps {
  roles: IRoleOption[];
}

interface IFormData {
  resourceId?: number;
  resourceType: string;
  operation: string;
  role: string;
}

const Widget = ({ roles }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm<IFormData>
      name="add-permission-for-role"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new RbacClient(GRPC_HOST);

        const request = new RbacPermissionForRoleRequest();
        request.setRole(values.role);

        var permission = new RbacGetPermissionsResponse.Item();
        permission.setOperation(values.operation);
        permission.setResourceType(values.resourceType);
        if (values.resourceId) {
          permission.setResourceId(values.resourceId);
        }
        request.setPermission(permission);

        client.addPermissionForRole(request, grpc_metadata(), (err) => {
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
          <FormattedMessage id="nut.admin.permissions.add-permission-for-role" />
        </Button>
      }
    >
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="role"
          options={roles
            .filter((x) => ![ROLE_ROOT, ROLE_ADMINISTRATOR].includes(x.code))
            .map((x) => ({
              value: x.code,
              label: x.name,
            }))}
          label={intl.formatMessage({ id: "form.fields.role.label" })}
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
