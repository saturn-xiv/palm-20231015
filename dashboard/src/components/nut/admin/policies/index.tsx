import { useIntl } from "react-intl";
import { useRef } from "react";
import ProTable, { ActionType } from "@ant-design/pro-table";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

import { DEFAULT_PAGE, DEFAULT_SIZE, ID_WIDTH, to_date } from "../../..";
import { Pager } from "../../../../protocols/nut_pb.d";
import { PolicyClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import DenyForm from "./Deny";
import ApplyForm from "./Apply";

interface IItem {
  code: string;
  label: string;
}

export interface ITableItem {
  id: number;
  role: IItem;
  operation: IItem;
  resourceType: IItem;
  resourceId?: number;
  createdAt: Date;
}

const Widget = () => {
  const intl = useIntl();
  const ref = useRef<ActionType>();
  return (
    <ProTable<ITableItem>
      search={false}
      actionRef={ref}
      columns={[
        {
          title: intl.formatMessage({ id: "form.fields.id.label" }),
          dataIndex: "id",
          key: "id",
          width: ID_WIDTH,
        },
        {
          title: intl.formatMessage({ id: "form.fields.role.label" }),
          key: "role",
          render: (_, it) => (
            <>
              {it.role.label}({it.role.code})
            </>
          ),
        },
        {
          title: intl.formatMessage({ id: "form.fields.operation.label" }),
          key: "operation.code",
          render: (_, it) => (
            <>
              {it.operation.label}({it.operation.code})
            </>
          ),
        },
        {
          title: intl.formatMessage({ id: "form.fields.resource.label" }),
          key: "resource",
          render: (_, it) => (
            <>
              {it.resourceType.label}({it.resourceType.code})[
              {it.resourceId || ""}]
            </>
          ),
        },

        {
          title: intl.formatMessage({ id: "table.columns.operation.label" }),
          key: "operation",
          width: 120,
          render: (_, it) => (
            <DenyForm
              item={it}
              handleRefresh={async () => {
                ref.current?.reload();
              }}
            />
          ),
        },
      ]}
      request={async (params, sorter, filter) => {
        const client = new PolicyClient(GRPC_HOST);

        const request = new Pager();
        request.setPage(params.current || DEFAULT_PAGE);
        request.setSize(params.pageSize || DEFAULT_SIZE);

        const response = await client.index(request, grpc_metadata());
        return {
          total: response.getPagination()?.getTotal(),
          success: true,
          data: response.getItemsList().map((x) => {
            var it: ITableItem = {
              id: x.getId(),
              role: {
                code: x.getRole()?.getCode() || "",
                label: x.getRole()?.getLabel() || "",
              },
              operation: {
                code: x.getOperation()?.getCode() || "",
                label: x.getOperation()?.getLabel() || "",
              },
              resourceType: {
                code: x.getResourceType()?.getCode() || "",
                label: x.getResourceType()?.getLabel() || "",
              },
              resourceId: x.getResourceId(),
              createdAt: to_date(x.getCreatedAt() || new Timestamp()),
            };
            return it;
          }),
        };
      }}
      rowKey="id"
      bordered
      pagination={{
        showQuickJumper: true,
        showSizeChanger: true,
      }}
      headerTitle={intl.formatMessage({ id: "nut.admin.policies.title" })}
      toolBarRender={() => [
        <ApplyForm
          handleRefresh={async () => {
            ref.current?.reload();
          }}
        />,
      ]}
    />
  );
};

export default Widget;
