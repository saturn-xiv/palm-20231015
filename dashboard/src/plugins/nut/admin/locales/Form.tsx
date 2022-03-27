import { ReactNode, useRef } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import ProForm, {
  ProFormSelect,
  ProFormText,
  ModalForm,
} from "@ant-design/pro-form";
import type { ProFormInstance } from "@ant-design/pro-form";
import { message, Tooltip, Button } from "antd";

import { selectSiteInfo } from "../../../../reducers/site-info";
import { useAppSelector } from "../../../../hooks";
import { graphql } from "../../../../request";
import { IOk } from "../../../";

interface IFormData {
  lang: string;
  code: string;
  message: string;
}
interface IButton {
  icon: ReactNode;
  title: ReactNode;
}

interface IProps {
  value: IFormData;
  button: IButton;
  refresh: () => void;
}

interface IFormResponse {
  setLocale: IOk;
}

const Widget = ({ value, button, refresh }: IProps) => {
  const intl = useIntl();
  const site = useAppSelector(selectSiteInfo);
  const formRef = useRef<ProFormInstance>();
  return (
    <ModalForm<IFormData>
      formRef={formRef}
      trigger={
        <Tooltip title={button.title}>
          <Button type="primary" icon={button.icon} />
        </Tooltip>
      }
      onFinish={async (data: IFormData) => {
        const response = await graphql<IFormData, IFormResponse>(
          `
            mutation PostForm(
              $lang: String!
              $code: String!
              $message: String!
            ) {
              setLocale(lang: $lang, code: $code, message: $message) {
                createdAt
              }
            }
          `,
          data
        );
        if (response.data) {
          message.success(intl.formatMessage({ id: "flashes.successed" }));
          refresh();
        } else {
          response.errors?.forEach((it) => {
            message.error(it.message);
          });
        }
      }}
      request={async (params = {}) => {
        return value;
      }}
    >
      <ProForm.Group>
        <ProFormSelect
          required
          options={site.languages.map((it) => {
            return {
              value: it,
              label: intl.formatMessage({ id: `languages.${it}` }),
            };
          })}
          name="lang"
          label={<FormattedMessage id="fields.language" />}
        />
      </ProForm.Group>
      <ProFormText
        width="md"
        name="code"
        rules={[{ required: true }]}
        label={<FormattedMessage id="fields.code" />}
      />
      <ProFormText
        width="md"
        name="message"
        rules={[{ required: true }]}
        label={<FormattedMessage id="fields.message" />}
      />
    </ModalForm>
  );
};

export default Widget;
