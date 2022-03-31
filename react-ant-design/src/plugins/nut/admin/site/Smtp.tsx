import { useRef } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import type { ProFormInstance } from "@ant-design/pro-form";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message, Button, Tooltip, Card } from "antd";
import { SendOutlined } from "@ant-design/icons";

import { graphql } from "../../../../request";
import {
  EMAIL_VALIDATOR,
  PASSWORD_VALIDATOR,
} from "../../../../components/form";
import { IOk } from "../../..";

interface IFormData extends IFormRequest {
  passwordConfirmation: string;
}

interface IFormRequest {
  host: string;
  account: string;
  password: string;
}

interface IFormResponse {
  setSiteSmtp: IOk;
}

interface IFetchResponse {
  getSiteSmtp: IFormData;
}

const Widget = () => {
  const formRef = useRef<ProFormInstance>();

  const intl = useIntl();
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormRequest, IFormResponse>(
      `
        mutation PostForm(
          $host: String!
          $account: String!
          $password: String!
        ) {
          setSiteSmtp(host: $host, account: $account, password: $password) {
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
    <Card title={<FormattedMessage id="nut.admin.site.smtp.title" />}>
      <ProForm<IFormData>
        name="smtp"
        onFinish={onSubmit}
        formRef={formRef}
        submitter={{
          render: (props, doms) => {
            return [
              ...doms,
              <Button
                key="gmail"
                type="link"
                onClick={() => {
                  window.open(
                    "https://support.google.com/mail/answer/7126229?hl=en",
                    "_blank"
                  );
                }}
              >
                Gmail
              </Button>,
              <Button
                key="qq"
                type="link"
                onClick={() => {
                  window.open(
                    "https://service.mail.qq.com/cgi-bin/help?id=28&no=167&subtype=1",
                    "_blank"
                  );
                }}
              >
                QQ
              </Button>,
              <Tooltip
                key="test"
                title={<FormattedMessage id="nut.admin.site.smtp.demo" />}
              >
                <Button
                  type="dashed"
                  shape="circle"
                  icon={<SendOutlined />}
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
                getSiteSmtp {
                  host
                  account
                  password
                }
              }
            `,
            {}
          );
          if (response.data) {
            return { ...response.data.getSiteSmtp, passwordConfirmation: "" };
          }

          return {
            host: "",
            account: "",
            password: "",
            passwordConfirmation: "",
          };
        }}
      >
        <ProFormText
          required
          width="md"
          name="host"
          rules={[{ required: true }]}
          label={<FormattedMessage id="fields.host" />}
        />
        <ProFormText
          required
          width="md"
          name="account"
          rules={EMAIL_VALIDATOR}
          label={<FormattedMessage id="fields.account" />}
        />
        <ProFormText.Password
          width="md"
          name="password"
          rules={PASSWORD_VALIDATOR}
          label={<FormattedMessage id="fields.password" />}
        />
        <ProFormText.Password
          width="md"
          name="passwordConfirmation"
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    intl.formatMessage({ id: "helpers.password-confirmation" })
                  )
                );
              },
            }),
          ]}
          label={<FormattedMessage id="fields.password-confirmation" />}
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
