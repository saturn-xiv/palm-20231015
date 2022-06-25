import { useRef } from "react";
import { message, Card } from "antd";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { useIntl } from "react-intl";

import { SiteClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";
import { SiteSetCopyrightRequest } from "../../../../../protocols/nut_pb.d";

interface IFormData {
  value: string;
}

const Widget = (props: IFormData) => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  return (
    <Card
      title={intl.formatMessage({ id: "nut.admin.site.profile.copyright" })}
    >
      <ProForm<IFormData>
        name="site.copyright"
        formRef={formRef}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);
          const request = new SiteSetCopyrightRequest();
          request.setPayload(values.value);
          client.setCopyright(request, grpc_metadata(), function (error) {
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
            name="value"
            label={intl.formatMessage({
              id: "form.fields.value.label",
            })}
            rules={[{ required: true }]}
          />
        </ProForm.Group>
      </ProForm>
    </Card>
  );
};

export default Widget;
