import { useState } from "react";
import { Card, List, Table } from "antd";

import { SiteStatusResponse } from "../../../../../../protocols/nut_pb.d";
import ClearButton from "./Clear";

export interface IProps {
  item?: SiteStatusResponse.Redis;
}

const Widget = ({ item }: IProps) => {
  const [clear, setClear] = useState(false);
  return (
    <Card title="Redis">
      <Table
        footer={() => (
          <ClearButton
            handleRefresh={() => {
              setClear(true);
            }}
          />
        )}
        columns={[
          { title: "KEY", dataIndex: "key", key: "key" },
          { title: "TTL", dataIndex: "ttl", key: "ttl" },
        ]}
        dataSource={
          clear
            ? []
            : item
                ?.getItemsList()
                .map((x) => ({ key: x.getKey(), ttl: x.getTtl() }))
        }
      />

      <List
        dataSource={item?.getInfo().split("\r\n")}
        bordered
        renderItem={(item) => <List.Item>${item}</List.Item>}
        pagination={{ position: "bottom" }}
      />
    </Card>
  );
};

export default Widget;
