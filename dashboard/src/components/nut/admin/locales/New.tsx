import { useRef } from "react";
import { message, Button, Tooltip } from "antd";
import {
  ProForm,
  ModalForm,
  ProFormTextArea,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components";
import { PlusOutlined } from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";

import { LocaleClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { LocaleSetRequest } from "../../../../protocols/nut_pb";
import { RULE_CODE } from "../../../forms";
import { LANGUAGES } from "../../../../locales";

interface IProps {
  handleRefresh: () => void;
}

interface IFormData {
  lang: string;
  code: string;
  message: string;
}

const Widget = ({ handleRefresh }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm<IFormData>
      name="locales.new"
      modalProps={{ destroyOnClose: true }}
      formRef={formRef}
      onFinish={async (values: IFormData) => {
        const client = new LocaleClient(GRPC_HOST);

        const request = new LocaleSetRequest();
        request.setCode(values.code);
        request.setLang(values.lang);
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
        <Tooltip title={<FormattedMessage id="buttons.new" />}>
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Tooltip>
      }
    >
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="lang"
          options={LANGUAGES.map((x) => ({
            value: x,
            label: intl.formatMessage({ id: `languages.${x}` }),
          }))}
          label={intl.formatMessage({ id: "form.fields.language.label" })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="code"
          label={intl.formatMessage({ id: "form.fields.code.label" })}
          rules={[RULE_CODE]}
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
