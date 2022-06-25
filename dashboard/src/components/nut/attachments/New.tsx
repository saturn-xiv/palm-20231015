import { useState } from "react";
import { message, Upload, Button, Modal, Tooltip } from "antd";
import { UploadOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";

import { get as getToken } from "../../../reducers/current-user";

interface IProps {
  handleRefresh: () => void;
}

const Widget = ({ handleRefresh }: IProps) => {
  const intl = useIntl();
  const [show, setShow] = useState(false);
  return (
    <>
      <Tooltip title={<FormattedMessage id="buttons.upload" />}>
        <Button
          onClick={() => {
            setShow(true);
          }}
          type="dashed"
          shape="circle"
          icon={<UploadOutlined />}
        />
      </Tooltip>

      <Modal
        title={intl.formatMessage({ id: "buttons.upload" })}
        destroyOnClose
        visible={show}
        onOk={() => {
          setShow(false);
        }}
        onCancel={() => {
          setShow(false);
        }}
      >
        <Upload
          multiple
          name="file"
          action="/api/attachments"
          headers={{
            Authorization: `Bearer ${getToken()}`,
          }}
          onChange={(info) => {
            if (info.file.status !== "uploading") {
              message.info(
                intl.formatMessage(
                  { id: "form.upload.processing" },
                  { name: info.file.name }
                )
              );
            }
            if (info.file.status === "done") {
              message.success(
                intl.formatMessage(
                  { id: "form.upload.successed" },
                  { name: info.file.name }
                )
              );
              handleRefresh();
            } else if (info.file.status === "error") {
              message.error(
                intl.formatMessage(
                  { id: "form.upload.failed" },
                  { name: info.file.name }
                )
              );
            }
          }}
        >
          <Button type="dashed" icon={<CloudUploadOutlined />}>
            &nbsp;
            <FormattedMessage id="buttons.click-to-upload" />
          </Button>
        </Upload>
      </Modal>
    </>
  );
};

export default Widget;
