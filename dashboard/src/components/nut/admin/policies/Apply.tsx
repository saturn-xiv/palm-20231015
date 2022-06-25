import { useRef } from "react";
import { message, Button, Tooltip } from "antd";
import ProForm, {
  ModalForm,
  ProFormDigit,
  ProFormText,
} from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { PlusOutlined } from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";

import { PolicyClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { PolicyPermission } from "../../../../protocols/nut_pb";
import { RULE_CODE } from "../../../forms";

interface IProps {
  handleRefresh: () => void;
}

interface IFormData {
  role: string;
  operation: string;
  resourceType: string;
  resourceId?: number;
}

const Widget = ({ handleRefresh }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm<IFormData>
      name="policy.apply"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new PolicyClient(GRPC_HOST);

        const request = new PolicyPermission();
        request.setRole(values.role);
        request.setOperation(values.operation);
        request.setResourceType(values.resourceType);
        if (values.resourceId) {
          request.setResourceId(values.resourceId);
        }

        client.apply(request, grpc_metadata(), (err) => {
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
        <Tooltip title={<FormattedMessage id="buttons.new" />}>
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Tooltip>
      }
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="role"
          label={intl.formatMessage({ id: "form.fields.role.label" })}
          rules={[RULE_CODE]}
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
      <ProForm.Group
        title={<FormattedMessage id="form.fields.resource.label" />}
      >
        <ProFormText
          width="md"
          name="resourceType"
          label={intl.formatMessage({ id: "form.fields.type.label" })}
          rules={[RULE_CODE]}
        />
        <ProFormDigit
          width="md"
          name="resourceId"
          label={intl.formatMessage({ id: "form.fields.id.label" })}
          rules={[{ type: "integer" }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default Widget;
