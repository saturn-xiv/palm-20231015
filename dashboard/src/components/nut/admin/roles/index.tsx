import { useIntl } from "react-intl";
import { useRef } from "react";
import ProTable, { ActionType } from "@ant-design/pro-table";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

import { DEFAULT_PAGE, DEFAULT_SIZE, ID_WIDTH, to_date } from "../../..";
import { Pager } from "../../../../protocols/nut_pb";
import { RoleClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import Associate from "./Associate";
import Unassociate from "./Unassociate";
import { useAppSelector } from "../../../../hooks";
import { ROLE_ROOT } from "../../../../reducers/current-user";

export interface ITableItem {
  id: number;
  role: { code: string; label: string };
  user: { id: number; nickName: string; realName: String };
  createdAt: Date;
}

const Widget = () => {
  const intl = useIntl();
  const ref = useRef<ActionType>();
  const currentUser = useAppSelector((state) => state.currentUser);

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
          title: intl.formatMessage({ id: "form.fields.user.label" }),
          key: "operation.code",
          render: (_, it) => (
            <>
              {it.user.realName}({it.user.nickName})
            </>
          ),
        },
        {
          title: intl.formatMessage({ id: "table.columns.operation.label" }),
          key: "operation",
          width: 120,
          render: (_, it) =>
            it.user.id === currentUser.id || it.role.code === ROLE_ROOT ? (
              <></>
            ) : (
              <Unassociate
                item={it}
                handleRefresh={async () => {
                  ref.current?.reload();
                }}
              />
            ),
        },
      ]}
      request={async (params, sorter, filter) => {
        const client = new RoleClient(GRPC_HOST);

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
              user: {
                id: x.getUser()?.getId() || 0,
                realName: x.getUser()?.getRealName() || "",
                nickName: x.getUser()?.getNickName() || "",
              },
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
      headerTitle={intl.formatMessage({ id: "nut.admin.roles.title" })}
      toolBarRender={() => [
        <Associate
          handleRefresh={async () => {
            ref.current?.reload();
          }}
        />,
      ]}
    />
  );
};

export default Widget;
