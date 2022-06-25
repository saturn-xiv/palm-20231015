import { useRef } from "react";
import { message, Button, Tooltip } from "antd";
import ProForm, {
  ModalForm,
  ProFormTextArea,
  ProFormText,
} from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { EditOutlined } from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";

import { LocaleClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { LocaleSetRequest } from "../../../../protocols/nut_pb.d";
import { IItem } from ".";

interface IProps {
  item: IItem;
  handleRefresh: () => void;
}

interface IFormData {
  code: string;
  message: string;
}

const Widget = ({ item, handleRefresh }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm<IFormData>
      name="locales.edit"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new LocaleClient(GRPC_HOST);

        const request = new LocaleSetRequest();
        request.setCode(item.code);
        request.setLang(item.lang);
        request.setMessage(values.message);

        client.set(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            handleRefresh();
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
          }
        });
      }}
      trigger={
        <Tooltip title={<FormattedMessage id="buttons.edit" />}>
          <Button type="dashed" shape="circle" icon={<EditOutlined />} />
        </Tooltip>
      }
      initialValues={{ code: item.code, message: item.message }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="code"
          label={intl.formatMessage({ id: "form.fields.code.label" })}
          rules={[{ required: true }]}
          disabled
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormTextArea
          width="md"
          name="message"
          label={intl.formatMessage({ id: "form.fields.message.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default Widget;
