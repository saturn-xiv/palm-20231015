import { useState, useEffect } from "react";
import { Col, Table } from "antd";
import { useIntl } from "react-intl";

import Layout from "../../../layouts/dashboard";
import { graphql } from "../../../request";
import { TIMESTAMP_COLUMN_WIDTH } from "../../../components/table";
import { Timestamp } from "../../../components";
import { IPagination } from "../..";

interface ILogItem {
  id: String;
  level: String;
  ip: String;
  resourceType: String;
  resourceId: String;
  message: String;
  createdAt: Date;
}

interface ILogList {
  items: ILogItem[];
  pagination: IPagination;
}
interface IFetchLayoutResponse {
  userLogs: ILogList;
}

const Widget = () => {
  const [items, setItems] = useState<ILogItem[]>();

  useEffect(() => {
    graphql(
      `
        query Fetch($pager: Pager!) {
          userLogs(pager: $pager) {
            items {
              id
              level
              ip
              resourceType
              resourceId
              message
              createdAt
            }
            pagination {
              capacity
              size
              index
            }
          }
        }
      `,
      { pager: { size: 1 << 12, index: 1 } },
      (res: IFetchLayoutResponse) => {
        setItems(res.userLogs.items);
      }
    );
  }, []);
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.users.logs.title" })}>
      <Col span={24}>
        <Table
          rowKey="id"
          bordered
          dataSource={items}
          columns={[
            {
              title: intl.formatMessage({ id: "fields.level" }),
              dataIndex: "level",
              key: "level",
              width: 80,
            },
            {
              title: intl.formatMessage({ id: "fields.message" }),
              dataIndex: "message",
              key: "message",
            },
            {
              title: intl.formatMessage({ id: "fields.created-at" }),
              key: "created-at",
              width: TIMESTAMP_COLUMN_WIDTH,
              render: (it) => <Timestamp value={it.createdAt} />,
            },
          ]}
        />
      </Col>
    </Layout>
  );
};

export default Widget;
