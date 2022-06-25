import { useRef } from "react";
import { message, Button, Tooltip } from "antd";
import ProForm, {
  ModalForm,
  ProFormSelect,
  ProFormDateRangePicker,
} from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { PlusOutlined } from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import dayjs from "dayjs";

import {
  RoleClient,
  SiteClient,
} from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { RoleUserAssociateRequest } from "../../../../protocols/nut_pb";
import { useAppSelector } from "../../../../hooks";
import { ROLE_ROOT } from "../../../../reducers/current-user";

interface IProps {
  handleRefresh: () => void;
}

interface IFormData {
  user: number;
  roles: string[];
  dates: string[];
}

const Widget = ({ handleRefresh }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const currentUser = useAppSelector((state) => state.currentUser);
  const intl = useIntl();
  return (
    <ModalForm<IFormData>
      name="user.roles.associate"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new RoleClient(GRPC_HOST);

        const request = new RoleUserAssociateRequest();
        request.setUser(values.user);
        request.setRolesList(values.roles);
        {
          var nbf = new Timestamp();
          nbf.setSeconds(dayjs(values.dates[0]).unix());
          request.setNotBefore(nbf);
        }
        {
          var exp = new Timestamp();
          exp.setSeconds(dayjs(values.dates[1]).unix());
          request.setExpiredAt(exp);
        }
        client.associate(request, grpc_metadata(), (err) => {
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
        <Tooltip title={<FormattedMessage id="buttons.associate" />}>
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Tooltip>
      }
    >
      <ProForm.Group>
        <ProFormSelect
          width="md"
          request={async () => {
            const client = new SiteClient(GRPC_HOST);
            const response = await client.listUser(
              new Empty(),
              grpc_metadata()
            );
            return response
              .getItemsList()
              .filter((x) => x.getId() !== currentUser?.id)
              .map((it, id) => ({
                label: `${it.getRealName()}(${it.getNickName()})`,
                value: it.getId(),
                key: id,
              }));
          }}
          name="user"
          required
          label={intl.formatMessage({ id: "form.fields.user.label" })}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          width="md"
          fieldProps={{ mode: "multiple" }}
          request={async () => {
            const client = new RoleClient(GRPC_HOST);
            const response = await client.options(new Empty(), grpc_metadata());
            return response
              .getItemsList()
              .filter((x) => x.getCode() !== ROLE_ROOT)
              .map((it, id) => ({
                lable: it.getLabel(),
                value: it.getCode(),
                key: id,
              }));
          }}
          required
          name="roles"
          label={intl.formatMessage({ id: "form.fields.roles.label" })}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDateRangePicker
          width="md"
          name="dates"
          label={intl.formatMessage({
            id: "form.fields.validate-date-range.label",
          })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default Widget;
