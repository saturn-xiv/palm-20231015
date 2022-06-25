import { FormattedMessage, useIntl } from "react-intl";
import { Typography } from "antd";
import { useRef } from "react";
import ProTable, { ActionType } from "@ant-design/pro-table";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

import {
  DEFAULT_PAGE,
  DEFAULT_SIZE,
  ID_WIDTH,
  IP_WIDTH,
  LANGUAGE_WIDTH,
  TIMESTAMP_COLUMN_WIDTH,
  to_date,
} from "../../..";
import { Pager } from "../../../../protocols/nut_pb";
import { SiteClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { ShowTimestamp } from "../../../date";
import DestroyDialog from "./Destroy";

interface IItem {
  id: number;
  lang: string;
  ip: string;
  body: string;
  createdAt: Date;
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
          title: intl.formatMessage({ id: "form.fields.ip.label" }),
          dataIndex: "ip",
          key: "ip",
          width: IP_WIDTH,
        },
        {
          title: intl.formatMessage({ id: "form.fields.language.label" }),
          key: "lang",
          width: LANGUAGE_WIDTH,
          render: (_, it) => <FormattedMessage id={`languages.${it.lang}`} />,
        },
        {
          title: intl.formatMessage({ id: "form.fields.body.label" }),

          key: "body",
          render: (_, it) => (
            <Typography.Paragraph ellipsis={{ rows: 2, expandable: true }}>
              <Typography.Text>{it.body}</Typography.Text>
            </Typography.Paragraph>
          ),
        },
        {
          title: intl.formatMessage({ id: "form.fields.created-at.label" }),
          key: "created-at",
          width: TIMESTAMP_COLUMN_WIDTH,
          render: (_, it) => <ShowTimestamp value={it.createdAt} />,
        },
        {
          title: intl.formatMessage({ id: "table.columns.operation.label" }),
          key: "operation",
          width: 80,
          render: (_, it) => (
            <DestroyDialog
              id={it.id}
              handleRefresh={async () => {
                ref.current?.reload();
              }}
            />
          ),
        },
      ]}
      request={async (params, sorter, filter) => {
        const client = new SiteClient(GRPC_HOST);

        const request = new Pager();
        request.setPage(params.current || DEFAULT_PAGE);
        request.setSize(params.pageSize || DEFAULT_SIZE);

        const response = await client.indexLeaveWord(request, grpc_metadata());
        return {
          total: response.getPagination()?.getTotal(),
          success: true,
          data: response.getItemsList().map((x) => {
            var it: IItem = {
              id: x.getId(),
              lang: x.getLang(),
              ip: x.getIp(),
              body: x.getBody(),
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
      headerTitle={intl.formatMessage({ id: "nut.admin.leave-words.title" })}
    />
  );
};

export default Widget;
