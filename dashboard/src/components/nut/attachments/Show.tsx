import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyOutlined, EyeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Tooltip, Button, message } from "antd";
import { useState, useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import ProForm, {
  ModalForm,
  ProFormDateTimePicker,
} from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import dayjs from "dayjs";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";

import { IItem } from ".";
import { AttachemtShowRequest } from "../../../protocols/nut_pb.d";
import { AttachmentClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";

interface IProps {
  item: IItem;
}
interface IFormData {
  due: Date;
}

const Widget = ({ item }: IProps) => {
  const intl = useIntl();
  const [url, setUrl] = useState<string>();
  const formRef = useRef<ProFormInstance>();
  return (
    <ModalForm<IFormData>
      name="attachments.show"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      submitter={{
        render: (props, doms) => {
          return url
            ? [
                ...doms,
                <Tooltip
                  key="copy"
                  title={intl.formatMessage({
                    id: "buttons.copy-to-clipboard",
                  })}
                >
                  <CopyToClipboard text={url || ""} onCopy={() => {}}>
                    <Button icon={<CopyOutlined />} />
                  </CopyToClipboard>
                </Tooltip>,
                <Tooltip
                  key="open"
                  title={intl.formatMessage({ id: "buttons.open" })}
                >
                  <Button
                    onClick={() => {
                      window.open(url, "_blank");
                    }}
                    icon={<EyeOutlined />}
                  />
                </Tooltip>,
              ]
            : doms;
        },
      }}
      onFinish={async (values: IFormData) => {
        const client = new AttachmentClient(GRPC_HOST);

        const request = new AttachemtShowRequest();
        request.setId(item.id);

        {
          const now = dayjs();
          const due = dayjs(values.due);
          const seconds = due.diff(now, "second");
          const ttl = new Duration();
          ttl.setSeconds(seconds);
          request.setTtl(ttl);
        }

        client.show(request, grpc_metadata(), (err, res) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
            setUrl(res.getUrl());
          }
        });
      }}
      trigger={
        <Tooltip
          title={
            <FormattedMessage
              id="nut.attachments.show.title"
              values={{ name: item.title }}
            />
          }
        >
          <Button type="dashed" shape="circle" icon={<ShareAltOutlined />} />
        </Tooltip>
      }
    >
      <ProForm.Group>
        <ProFormDateTimePicker
          width="md"
          name="due"
          label={intl.formatMessage({
            id: "form.fields.due-day.label",
          })}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                const now = dayjs();
                const due = dayjs(getFieldValue("due"));
                if (due <= now) {
                  return Promise.reject(
                    new Error(
                      intl.formatMessage({
                        id: "form.fields.due-day.must-after-today",
                      })
                    )
                  );
                }
                if (due.diff(now, "week") > 0) {
                  return Promise.reject(
                    new Error(
                      intl.formatMessage({
                        id: "nut.attachments.show.due.invalid",
                      })
                    )
                  );
                }
                return Promise.resolve();
              },
            }),
          ]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default Widget;
