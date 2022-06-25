import { useRef } from "react";
import { message, Card } from "antd";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { useIntl, FormattedMessage } from "react-intl";
import type { ProFormInstance } from "@ant-design/pro-form";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { BaiduProfile } from "../../../../../protocols/nut_pb.d";
import { SiteClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";

interface IFormData {
  siteVerifyId?: string;
}

const Widget = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();

  return (
    <Card
      title={intl.formatMessage({ id: "nut.admin.site.baidu.title" })}
      extra={
        <a
          rel="noreferrer"
          target="_blank"
          href={`/baidu-${formRef.current?.getFieldValue("siteVerifyId")}.html`}
        >
          <FormattedMessage id="buttons.test" />
        </a>
      }
    >
      <ProForm<IFormData>
        name="admin.site.baidu"
        formRef={formRef}
        request={async () => {
          const client = new SiteClient(GRPC_HOST);
          const response = await client.getBaidu(new Empty(), grpc_metadata());
          return {
            siteVerifyId: response.getSiteVerifyId(),
          };
        }}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);
          const request = new BaiduProfile();

          if (values.siteVerifyId) {
            request.setSiteVerifyId(values.siteVerifyId);
          }
          client.setBaidu(request, grpc_metadata(), function (error) {
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
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="siteVerifyId"
            label={intl.formatMessage({
              id: "nut.admin.site.baidu.site-verify-id",
            })}
          />
        </ProForm.Group>
      </ProForm>
    </Card>
  );
};

export default Widget;
