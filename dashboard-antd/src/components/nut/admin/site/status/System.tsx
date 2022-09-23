import { Card, Typography, List } from "antd";

import { SiteStatusResponse } from "../../../../../protocols/nut_pb";

export interface IProps {
  item?: SiteStatusResponse.System;
}

interface IItem {
  key?: string;
  value?: string;
}

const Widget = ({ item }: IProps) => {
  var items: IItem[] = [
    { key: "version", value: item?.getVersion() },
    { key: "cpu", value: item?.getCpu() },
    { key: "memory", value: item?.getMemory() },
    { key: "swap", value: item?.getSwap() },
    { key: "boot", value: item?.getBoot() },
    { key: "uptime", value: item?.getUptime() },
    { key: "load", value: item?.getLoad() },
    { key: "disk", value: item?.getDisk() },
    { key: "fs", value: item?.getFs() },
    { key: "network", value: item?.getNetwork() },
  ];

  return (
    <Card title="System">
      <List<IItem>
        bordered
        dataSource={items}
        renderItem={(it) => (
          <List.Item>
            <Typography.Paragraph ellipsis={{ rows: 2, expandable: true }}>
              <Typography.Text mark>{it.key}</Typography.Text>: &nbsp;{" "}
              <pre>{it.value}</pre>
            </Typography.Paragraph>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Widget;
