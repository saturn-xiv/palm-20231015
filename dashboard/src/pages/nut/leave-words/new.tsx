import { useRef } from "react";
import { message } from "antd";
import ProForm, { ProFormTextArea } from "@ant-design/pro-form";
import { useIntl } from "react-intl";
import type { ProFormInstance } from "@ant-design/pro-form";

import Layout from "../../../layouts/non-sign-in";
import { SiteNewLeaveWordRequest } from "../../../protocols/nut_pb";
import { SiteClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";

export interface IFormData {
  body: string;
}

const Widget = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();

  return (
    <Layout title="nut.leave-words.new.title">
      <ProForm<IFormData>
        formRef={formRef}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);

          const request = new SiteNewLeaveWordRequest();
          request.setBody(values.body);
          client.newLeaveWord(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
              formRef.current?.resetFields();
              message.success(
                intl.formatMessage({
                  id: "form.submit.successed",
                })
              );
            }
          });
        }}
      >
        <ProForm.Group>
          <ProFormTextArea
            width="md"
            name="body"
            label={intl.formatMessage({ id: "form.fields.body.label" })}
            rules={[{ required: true }]}
          />
        </ProForm.Group>
      </ProForm>
    </Layout>
  );
};

export default Widget;
