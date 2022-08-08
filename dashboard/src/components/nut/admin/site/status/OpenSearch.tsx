import { Card } from "antd";
import ReactJson from "react-json-view";

import { SiteStatusResponse } from "../../../../../protocols/nut_pb";

export interface IProps {
  item?: SiteStatusResponse.OpenSearch;
}

const Widget = ({ item }: IProps) => {
  return (
    <Card title="OpenSearch">
      <p>
        <ReactJson src={JSON.parse(item?.getInfo() || "{}")} />
      </p>
      <Card.Meta description={item?.getUrl()} />
    </Card>
  );
};

export default Widget;
