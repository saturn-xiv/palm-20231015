import { Col, message } from "antd";
import { useIntl } from "react-intl";
import ProTable from "@ant-design/pro-table";

import Layout from "../../../layouts/dashboard";
import { graphql } from "../../../request";
import { TIMESTAMP_COLUMN_WIDTH } from "../../../components/table";
import { Timestamp } from "../../../components";
import { IPager, IPagination } from "../..";

interface IItem {
  id: String;
  level: String;
  ip: String;
  resourceType: String;
  resourceId: String;
  message: String;
  createdAt: number;
}

interface IFetchResponse {
  userLogs: IPagination<IItem>;
}

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.users.logs.title" })}>
      <Col span={24}>
        <ProTable<IItem>
          rowKey="id"
          bordered
          search={false}
          request={async (params = {}, sort, filter) => {
            const response = await graphql<IPager, IFetchResponse>(
              `
                query Fetch($pageSize: Int!, $current: Int!) {
                  userLogs(pageSize: $pageSize, current: $current) {
                    data {
                      id
                      level
                      ip
                      resourceType
                      resourceId
                      message
                      createdAt
                    }
                    total
                  }
                }
              `,
              { pageSize: params.pageSize || 20, current: params.current || 1 }
            );
            if (response.data) {
              return {
                data: response.data.userLogs.data,
                total: response.data.userLogs.total,
                success: true,
              };
            }
            response.errors?.forEach((it) => {
              message.error(it.message);
            });
            return {
              data: [],
              total: 0,
              success: false,
            };
          }}
          columns={[
            {
              title: intl.formatMessage({ id: "fields.level" }),
              dataIndex: "level",
              key: "level",
              width: 80,
            },
            {
              title: intl.formatMessage({ id: "fields.ip" }),
              dataIndex: "ip",
              key: "ip",
              width: 120,
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
              render: (_, it) => <Timestamp value={it.createdAt} />,
            },
          ]}
        />
      </Col>
    </Layout>
  );
};

export default Widget;
