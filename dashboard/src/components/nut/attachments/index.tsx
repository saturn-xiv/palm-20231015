import { useRef } from "react";
import { useIntl } from "react-intl";
import ProTable, { ActionType } from "@ant-design/pro-table";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import filesize from "filesize";

import {
  DEFAULT_PAGE,
  DEFAULT_SIZE,
  ID_WIDTH,
  TIMESTAMP_COLUMN_WIDTH,
  to_date,
} from "../../";
import { Pager } from "../../../protocols/nut_pb.d";
import { AttachmentClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import { ShowTimestamp } from "../../date";
import DestroyDialog from "./Destroy";
import NewForm from "./New";
import ShowForm from "./Show";

export interface IItem {
  id: number;
  title: string;
  contentType: string;
  size: number;
  updatedAt: Date;
}

const Widget = () => {
  const intl = useIntl();
  const ref = useRef<ActionType>();
  return (
    <ProTable<IItem>
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
          title: intl.formatMessage({ id: "form.fields.name.label" }),
          key: "title",
          dataIndex: "title",
        },
        {
          title: intl.formatMessage({ id: "form.fields.content-type.label" }),
          dataIndex: "contentType",
          key: "contentType",
        },
        {
          title: intl.formatMessage({ id: "form.fields.file-size.label" }),
          key: "size",
          render: (_, it) => <>{filesize(it.size)}</>,
        },
        {
          title: intl.formatMessage({ id: "form.fields.updated-at.label" }),
          key: "updated-at",
          width: TIMESTAMP_COLUMN_WIDTH,
          render: (_, it) => <ShowTimestamp value={it.updatedAt} />,
        },
        {
          title: intl.formatMessage({ id: "table.columns.operation.label" }),
          key: "operation",
          width: 100,

          render: (_, it) => (
            <>
              <ShowForm item={it} />
              <DestroyDialog
                item={it}
                handleRefresh={async () => {
                  ref.current?.reload();
                }}
              />
            </>
          ),
        },
      ]}
      request={async (params, sorter, filter) => {
        const client = new AttachmentClient(GRPC_HOST);

        const request = new Pager();
        request.setPage(params.current || DEFAULT_PAGE);
        request.setSize(params.pageSize || DEFAULT_SIZE);

        const response = await client.index(request, grpc_metadata());
        return {
          total: response.getPagination()?.getTotal(),
          success: true,
          data: response.getItemsList().map((x) => {
            var it: IItem = {
              id: x.getId(),
              title: x.getTitle(),
              contentType: x.getContentType(),
              size: x.getSize(),
              updatedAt: to_date(x.getUpdatedAt() || new Timestamp()),
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
      headerTitle={intl.formatMessage({ id: "nut.attachments.title" })}
      toolBarRender={() => [
        <NewForm
          handleRefresh={async () => {
            ref.current?.reload();
          }}
        />,
      ]}
    />
  );
};

export default Widget;
