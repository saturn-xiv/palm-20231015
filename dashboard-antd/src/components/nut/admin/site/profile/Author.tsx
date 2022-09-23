import { useRef } from "react";
import { message, Card } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components";
import { useIntl } from "react-intl";

import { SiteClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";
import { SiteLayoutResponse } from "../../../../../protocols/nut_pb";
import { RULE_EMAIL, RULE_NAME } from "../../../../forms";

interface IFormData {
  email: string;
  name: string;
}

const Widget = (props: IFormData) => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  return (
    <Card title={intl.formatMessage({ id: "nut.admin.site.profile.author" })}>
      <ProForm<IFormData>
        name="site.author"
        formRef={formRef}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);
          const request = new SiteLayoutResponse.Author();
          request.setEmail(values.email);
          request.setName(values.name);
          client.setAuthor(request, grpc_metadata(), function (error) {
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
            name="name"
            label={intl.formatMessage({
              id: "form.fields.real-name.label",
            })}
            rules={[RULE_NAME]}
          />
          <ProFormText
            width="md"
            name="email"
            label={intl.formatMessage({
              id: "form.fields.email.label",
            })}
            rules={[RULE_EMAIL, { type: "email" }]}
          />
        </ProForm.Group>
      </ProForm>
    </Card>
  );
};

export default Widget;
