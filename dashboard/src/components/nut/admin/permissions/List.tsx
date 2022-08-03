import { useState, useEffect } from "react";
import { Table, Modal, Tooltip, Button } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";

import { IPermission } from "../../../../reducers/current-user";
import { RbacGetPermissionsResponse } from "../../../../protocols/nut_pb";

interface IProps {
  onRefresh: () => Promise<RbacGetPermissionsResponse>;
  title: string;
}

const Widget = ({ title, onRefresh }: IProps) => {
  const [items, setItems] = useState<IPermission[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const intl = useIntl();

  useEffect(() => {
    if (show) {
      onRefresh().then((response) => {
        setItems(
          response.getItemsList().map((x) => {
            var it: IPermission = {
              operation: x.getOperation(),
              resourceType: x.getResourceType(),
            };
            if (x.hasResourceId()) {
              it.resourceId = x.getResourceId();
            }
            return it;
          })
        );
      });
    }
  }, [setItems, onRefresh, show]);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Tooltip title={title}>
        <Button
          type="dashed"
          onClick={() => setShow(true)}
          shape="circle"
          icon={<UnorderedListOutlined />}
        />
      </Tooltip>
      <Modal
        title={title}
        visible={show}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <Table<IPermission>
          columns={[
            {
              dataIndex: "operation",
              title: intl.formatMessage({ id: "form.fields.operation.label" }),
            },
            {
              dataIndex: "resourceType",
              title: intl.formatMessage({
                id: "form.fields.resource.type.label",
              }),
            },
            {
              dataIndex: "resourceId",
              title: intl.formatMessage({
                id: "form.fields.resource.id.label",
              }),
            },
          ]}
          dataSource={items}
          rowKey={(it) =>
            `${it.resourceType}://${it.resourceId ? it.resourceId : "*"}/${
              it.operation
            }`
          }
          bordered
        />
      </Modal>
    </>
  );
};

export default Widget;
