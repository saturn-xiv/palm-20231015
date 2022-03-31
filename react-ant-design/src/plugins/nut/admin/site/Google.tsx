import { useRef } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import type { ProFormInstance } from "@ant-design/pro-form";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message, Button, Tooltip, Card } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

import { graphql } from "../../../../request";
import { IOk } from "../../..";

interface IFormData {
  siteVerifyCode: string;
}

interface IFormResponse {
  setSiteGoogle: IOk;
}

interface IFetchResponse {
  getSiteGoogle: IFormData;
}

const Widget = () => {
  const formRef = useRef<ProFormInstance>();

  const intl = useIntl();
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormData, IFormResponse>(
      `
        mutation PostForm($siteVerifyCode: String!) {
          setSiteGoogle(siteVerifyCode: $siteVerifyCode) {
            createdAt
          }
        }
      `,
      data
    );

    if (response.data) {
      message.success(intl.formatMessage({ id: "flashes.successed" }));
    } else {
      response.errors?.forEach((it) => {
        message.error(it.message);
      });
    }
  };

  return (
    <Card title={<FormattedMessage id="nut.admin.site.google.title" />}>
      <ProForm<IFormData>
        name="google"
        onFinish={onSubmit}
        formRef={formRef}
        submitter={{
          render: (props, doms) => {
            return [
              ...doms,
              <Button
                key="help"
                type="link"
                onClick={() => {
                  window.open(
                    "https://support.google.com/webmasters/answer/9008080?hl=en",
                    "_blank"
                  );
                }}
              >
                <FormattedMessage id="buttons.help" />
              </Button>,
              <Button
                key="show"
                type="link"
                onClick={() => {
                  window.open(
                    `/google${formRef.current?.getFieldValue(
                      "siteVerifyCode"
                    )}.html`,
                    "_blank"
                  );
                }}
              >
                <FormattedMessage id="buttons.verify" />
              </Button>,
              <Tooltip
                key="ping"
                title={<FormattedMessage id="buttons.ping" />}
              >
                <Button
                  type="dashed"
                  shape="circle"
                  icon={<CloudUploadOutlined />}
                  onClick={() => {
                    // TODO
                    console.log("TODO");
                  }}
                />
              </Tooltip>,
            ];
          },
        }}
        request={async (params = {}) => {
          const response = await graphql<{}, IFetchResponse>(
            `
              query Fetch {
                getSiteGoogle {
                  siteVerifyCode
                }
              }
            `,
            {}
          );
          if (response.data) {
            return response.data.getSiteGoogle;
          }

          return {
            siteVerifyCode: "",
          };
        }}
      >
        <ProFormText
          required
          width="md"
          name="siteVerifyCode"
          rules={[{ required: true }]}
          label={
            <FormattedMessage id="nut.admin.site.google.site-verify-code" />
          }
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
