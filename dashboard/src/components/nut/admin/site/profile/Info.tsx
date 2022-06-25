import { useRef } from "react";
import { message, Card } from "antd";
import ProForm, { ProFormText, ProFormTextArea } from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { useIntl } from "react-intl";

import { SiteClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";
import { SiteSetInfoRequest } from "../../../../../protocols/nut_pb.d";

interface IFormData {
  title: string;
  subhead: string;
  description: string;
}

const Widget = (props: IFormData) => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  return (
    <Card title={intl.formatMessage({ id: "nut.admin.site.profile.info" })}>
      <ProForm<IFormData>
        name="site.info"
        formRef={formRef}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);
          const request = new SiteSetInfoRequest();
          request.setTitle(values.title);
          request.setSubhead(values.subhead);
          request.setDescription(values.description);
          client.setInfo(request, grpc_metadata(), function (error) {
            if (error) {
              message.error(error.message);
            } else {
              message.success(
                intl.formatMessage({
                  id: "form.submit.successed",
                })
              );
            }
          });
        }}
        initialValues={props}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="title"
            label={intl.formatMessage({
              id: "form.fields.title.label",
            })}
            rules={[{ required: true }]}
          />
          <ProFormText
            width="md"
            name="subhead"
            label={intl.formatMessage({
              id: "form.fields.subhead.label",
            })}
            rules={[{ required: true, max: 32, min: 2 }]}
          />
          <ProFormTextArea
            width="md"
            name="description"
            label={intl.formatMessage({
              id: "form.fields.description.label",
            })}
            rules={[{ required: true }]}
          />
        </ProForm.Group>
      </ProForm>
    </Card>
  );
};

export default Widget;
