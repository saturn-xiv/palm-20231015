import { Card, List, Collapse, Table } from "antd";
import { FormattedMessage, useIntl } from "react-intl";

import { Timestamp } from "../../../../../components";

export interface IProps {
  version: string;
  now: number;
  databases: IDatabase[];
}
interface IDatabase {
  name: string;
  size: string;
}
const Widget = (props: IProps) => {
  const intl = useIntl();
  return (
    <Card title={<FormattedMessage id="nut.admin.site.postgresql.title" />}>
      <Collapse>
        <Collapse.Panel header="Info" key="info">
          <List bordered>
            <List.Item>{props.version}</List.Item>
            <List.Item>
              <Timestamp value={props.now} />
            </List.Item>
          </List>
        </Collapse.Panel>
        <Collapse.Panel
          header={intl.formatMessage({
            id: "nut.admin.site.postgresql.databases",
          })}
          key="databases"
        >
          <Table<IDatabase>
            rowKey="name"
            bordered
            dataSource={props.databases}
            columns={[
              {
                title: intl.formatMessage({
                  id: "nut.admin.site.postgresql.fields.name",
                }),
                dataIndex: "name",
                key: "name",
              },
              {
                title: intl.formatMessage({
                  id: "nut.admin.site.postgresql.fields.size",
                }),
                dataIndex: "size",
                key: "size",
              },
            ]}
          />
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};

export default Widget;
