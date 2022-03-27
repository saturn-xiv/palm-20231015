import { useRef } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import type { ProFormInstance } from "@ant-design/pro-form";
import ProForm, {
  ProFormText,
  ProFormTextArea,
  ProFormSelect,
} from "@ant-design/pro-form";
import { message, Card } from "antd";

import { graphql } from "../../../../request";
import {
  IState as ISiteInfo,
  selectSiteInfo,
} from "../../../../reducers/site-info";
import { selectCurrentUser } from "../../../../reducers/current-user";
import { useAppSelector } from "../../../../hooks";
import { detect as detectLocale } from "../../../../locales";
import { IOk } from "../../..";

interface IFormData {
  lang: string;
  title: string;
  subhead: string;
  description: string;
}

interface IFormResponse {
  setSiteInfo: IOk;
}

interface IFetchResponse {
  layout: { siteInfo: ISiteInfo };
}

const QUERY = `
query Fetch($lang: String) {
  layout(lang: $lang) {
    siteInfo {
      title
      subhead
      keywords
      description
      copyright
      languages
      author {
        email
        name
      }
    }
  }
}
`;

const Widget = () => {
  const formRef = useRef<ProFormInstance>();

  const intl = useIntl();
  const site = useAppSelector(selectSiteInfo);
  const user = useAppSelector(selectCurrentUser);
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormData, IFormResponse>(
      `
        mutation PostForm(
          $lang: String!
          $title: String!
          $subhead: String!
          $description: String!
        ) {
          setSiteInfo(
            lang: $lang
            title: $title
            subhead: $subhead
            description: $description
          ) {
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
    <Card title={<FormattedMessage id="nut.admin.site.info.title" />}>
      <ProForm<IFormData>
        onFinish={onSubmit}
        formRef={formRef}
        request={async (params = {}) => {
          const lang = user?.lang || detectLocale();
          const response = await graphql<{ lang: string }, IFetchResponse>(
            QUERY,
            { lang }
          );
          if (response.data) {
            return {
              lang,
              title: response.data.layout.siteInfo.title,
              subhead: response.data.layout.siteInfo.subhead,
              copyright: response.data.layout.siteInfo.copyright,
              description: response.data.layout.siteInfo.description,
            };
          }

          return {
            lang: "",
            title: "",
            subhead: "",
            copyright: "",
            description: "",
          };
        }}
      >
        <ProForm.Group>
          <ProFormSelect
            required
            fieldProps={{
              onSelect: async (lang: string) => {
                const response = await graphql<
                  { lang: string },
                  IFetchResponse
                >(QUERY, { lang });
                if (response.data) {
                  formRef.current?.setFieldsValue({
                    title: response.data.layout.siteInfo.title,
                    subhead: response.data.layout.siteInfo.subhead,
                    copyright: response.data.layout.siteInfo.copyright,
                    description: response.data.layout.siteInfo.description,
                  });
                }
              },
            }}
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
          required
          width="md"
          name="title"
          rules={[{ required: true }]}
          label={<FormattedMessage id="nut.admin.site.info.fields.title" />}
        />
        <ProFormText
          required
          width="md"
          name="subhead"
          rules={[{ required: true }]}
          label={<FormattedMessage id="nut.admin.site.info.fields.subhead" />}
        />

        <ProFormTextArea
          width="md"
          name="description"
          rules={[{ required: true }]}
          label={
            <FormattedMessage id="nut.admin.site.info.fields.description" />
          }
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
