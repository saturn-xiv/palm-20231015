import { useRef } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import type { ProFormInstance } from "@ant-design/pro-form";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message, Card, Tooltip, Button } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

import { graphql } from "../../../../request";
import { IOk } from "../../..";

interface IFormData {
  siteVerifyCode: string;
}

interface IFormResponse {
  setSiteBaidu: IOk;
}

interface IFetchResponse {
  getSiteBaidu: IFormData;
}

const Widget = () => {
  const formRef = useRef<ProFormInstance>();

  const intl = useIntl();
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormData, IFormResponse>(
      `
        mutation PostForm($siteVerifyCode: String!) {
          setSiteBaidu(siteVerifyCode: $siteVerifyCode) {
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
    <Card title={<FormattedMessage id="nut.admin.site.baidu.title" />}>
      <ProForm<IFormData>
        name="baidu"
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
                    "https://ziyuan.baidu.com/dashboard/index",
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
                    `/baidu_${formRef.current?.getFieldValue(
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
                getSiteBaidu {
                  siteVerifyCode
                }
              }
            `,
            {}
          );
          if (response.data) {
            return response.data.getSiteBaidu;
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
            <FormattedMessage id="nut.admin.site.baidu.site-verify-code" />
          }
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
