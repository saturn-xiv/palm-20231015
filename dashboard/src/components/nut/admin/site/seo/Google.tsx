import { useRef } from "react";
import { message, Card } from "antd";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { useIntl, FormattedMessage } from "react-intl";
import type { ProFormInstance } from "@ant-design/pro-form";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { GoogleOutlined } from "@ant-design/icons";

import { GoogleProfile } from "../../../../../protocols/nut_pb";
import { SiteClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";

interface IFormData {
  recaptchaSiteKey?: string;
  recaptchaSecret?: string;
  siteVerifyId?: string;
}

const Widget = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();

  return (
    <Card
      title={
        <>
          <GoogleOutlined /> &nbsp;{" "}
          <FormattedMessage id="nut.admin.site.google.title" />
        </>
      }
      extra={
        <a
          rel="noreferrer"
          target="_blank"
          href={`/google_${formRef.current?.getFieldValue(
            "siteVerifyId"
          )}.html`}
        >
          <FormattedMessage id="buttons.test" />
        </a>
      }
    >
      <ProForm<IFormData>
        name="admin.site.google"
        formRef={formRef}
        request={async () => {
          const client = new SiteClient(GRPC_HOST);
          const response = await client.getGoogle(new Empty(), grpc_metadata());
          return {
            siteVerifyId: response.getSiteVerifyId(),
            recaptchaSecret: response.getReCaptcha()?.getSecret(),
            recaptchaSiteKey: response.getReCaptcha()?.getSiteKey(),
          };
        }}
        onFinish={async (values: IFormData) => {
          const client = new SiteClient(GRPC_HOST);
          const request = new GoogleProfile();
          {
            const recaptcha = new GoogleProfile.ReCaptcha();
            if (values.recaptchaSecret) {
              recaptcha.setSecret(values.recaptchaSecret);
            }
            if (values.recaptchaSiteKey) {
              recaptcha.setSiteKey(values.recaptchaSiteKey);
            }
            request.setReCaptcha(recaptcha);
          }
          if (values.siteVerifyId) {
            request.setSiteVerifyId(values.siteVerifyId);
          }
          client.setGoogle(request, grpc_metadata(), function (error) {
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
              id: "nut.admin.site.google.site-verify-id",
            })}
          />
        </ProForm.Group>
        <ProForm.Group
          title={intl.formatMessage({
            id: "nut.admin.site.google.recaptcha.title",
          })}
        >
          <ProFormText
            width="md"
            name="recaptchaSiteKey"
            label={intl.formatMessage({
              id: "nut.admin.site.google.recaptcha.site-key",
            })}
          />
          <ProFormText
            width="md"
            name="recaptchaSecret"
            label={intl.formatMessage({
              id: "nut.admin.site.google.recaptcha.secret",
            })}
          />
        </ProForm.Group>
      </ProForm>

      <br />
      <Card.Meta
        description={
          <a
            rel="noreferrer"
            target="_blank"
            href="https://support.google.com/webmasters/answer/9008080?hl=en#html_verification"
          >
            Verify your site ownership
          </a>
        }
      />
      <Card.Meta
        description={
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/recaptcha/about/"
          >
            WHAT IS RECAPTCHA?
          </a>
        }
      />
    </Card>
  );
};

export default Widget;
