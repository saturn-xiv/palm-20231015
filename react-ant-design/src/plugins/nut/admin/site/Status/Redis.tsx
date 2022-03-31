import {
  Card,
  Collapse,
  Table,
  Popconfirm,
  message,
  Tooltip,
  Button,
} from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import { ClearOutlined } from "@ant-design/icons";

import { IOk } from "../../../..";
import { graphql } from "../../../../../request";

export interface IProps {
  info: string;
  items: IItem[];
}

interface IItem {
  ttl: number;
  key: string;
}

interface IPurgeResponse {
  purgeCache: IOk;
}
const Widget = (props: IProps) => {
  const intl = useIntl();
  return (
    <Card
      actions={[
        <Popconfirm
          key="purge"
          title={<FormattedMessage id="nut.admin.site.redis.confirm-purge" />}
          onConfirm={async () => {
            const response = await graphql<{}, IPurgeResponse>(
              `
                mutation PostForm {
                  purgeCache {
                    createdAt
                  }
                }
              `,
              {}
            );
            if (response.data) {
              message.success(intl.formatMessage({ id: "flashes.successed" }));
            } else {
              response.errors?.forEach((it) => {
                message.error(it.message);
              });
            }
          }}
        >
          <Tooltip title={<FormattedMessage id="buttons.purge" />}>
            <Button
              type="dashed"
              shape="circle"
              danger
              icon={<ClearOutlined />}
            />
          </Tooltip>
        </Popconfirm>,
      ]}
      title={<FormattedMessage id="nut.admin.site.redis.title" />}
    >
      <Collapse>
        <Collapse.Panel header="INFO" key="info">
          <pre>
            <code>{props.info}</code>
          </pre>
        </Collapse.Panel>
        <Collapse.Panel header="Cache" key="cache">
          <Table<IItem>
            rowKey="key"
            bordered
            dataSource={props.items}
            columns={[
              {
                title: "KEY",
                dataIndex: "key",
                key: "key",
              },
              {
                title: "TTL(S)",
                dataIndex: "ttl",
                key: "ttl",
              },
            ]}
          />
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};

export default Widget;
