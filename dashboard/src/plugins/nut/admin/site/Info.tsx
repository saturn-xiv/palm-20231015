import { useState, useRef } from "react";
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
import TagGroup from "../../../../components/form/TagGroup";
import { detect as detectLocale } from "../../../../locales";

interface IFormData {
  lang: string;
  title: string;
  subhead: string;
  description: string;
  copyright: string;
}

interface IFormRequest extends IFormData {
  keywords: string[];
}

interface IFormResponse {
  updateSiteInfo: { createdAt: number };
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

  const [keywords, setKeywords] = useState<string[]>([]);
  const intl = useIntl();
  const site = useAppSelector(selectSiteInfo);
  const user = useAppSelector(selectCurrentUser);
  const onSubmit = async (data: IFormData) => {
    // TODO
    const response = await graphql<IFormRequest, IFormResponse>(
      `
        mutation PostForm($user: UserUpdateProfileRequest!) {
          userUpdateProfile(form: $user) {
            createdAt
          }
        }
      `,
      { ...data, keywords }
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
            setKeywords(response.data.layout.siteInfo.keywords);
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
                  setKeywords(response.data.layout.siteInfo.keywords);
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
        <ProForm.Group>
          <ProForm.Item
            label={
              <FormattedMessage id="nut.admin.site.info.fields.keywords" />
            }
          >
            <TagGroup
              items={keywords}
              onUpdate={(items) => {
                setKeywords(items);
              }}
            />
          </ProForm.Item>
        </ProForm.Group>
        <ProFormTextArea
          width="md"
          name="description"
          rules={[{ required: true }]}
          label={
            <FormattedMessage id="nut.admin.site.info.fields.description" />
          }
        />
        <ProFormText
          required
          width="md"
          name="copyright"
          rules={[{ required: true }]}
          label={<FormattedMessage id="nut.admin.site.info.fields.copyright" />}
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
