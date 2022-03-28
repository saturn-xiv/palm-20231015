import { Card, Collapse } from "antd";
import { FormattedMessage } from "react-intl";

export interface IProps {
  version: string;
  cpu: string;
  memory: string;
  boot: string;
  disk: string;
  load: string;
  fs: string;
  swap: string;
  uptime: string;
  network: string;
}

const Widget = (props: IProps) => {
  return (
    <Card title={<FormattedMessage id="nut.admin.site.system.title" />}>
      <Collapse>
        <Collapse.Panel header="Version" key="version">
          <pre>{props.version}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="Boot Options" key="boot">
          <pre>{props.boot}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="Up Time" key="uptime">
          <pre>{props.uptime}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="Load" key="load">
          <pre>{props.load}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="CPU" key="cpu">
          <pre>{props.cpu}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="Memory" key="memory">
          <pre>{props.memory}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="SWAP" key="swap">
          <pre>{props.swap}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="Disk" key="disk">
          <pre>{props.disk}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="File System" key="fs">
          <pre>{props.fs}</pre>
        </Collapse.Panel>
        <Collapse.Panel header="Network" key="network">
          <pre>{props.network}</pre>
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};

export default Widget;
