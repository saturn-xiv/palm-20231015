import { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import ProForm from "@ant-design/pro-form";
import { message, Card } from "antd";

import { graphql } from "../../../../request";
import { selectSiteInfo } from "../../../../reducers/site-info";
import { useAppSelector } from "../../../../hooks";
import { IOk } from "../../..";
import TagGroup from "../../../../components/form/TagGroup";

interface IFormData {
  keywords: string[];
}

interface IFormResponse {
  setSiteKeywords: IOk;
}

const Widget = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const intl = useIntl();
  const site = useAppSelector(selectSiteInfo);
  useEffect(() => {
    setKeywords(site.keywords);
  }, [site, setKeywords]);
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormData, IFormResponse>(
      `
        mutation PostForm($keywords: [String!]!) {
          setSiteKeywords(keywords: $keywords) {
            createdAt
          }
        }
      `,
      { keywords }
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
    <Card title={<FormattedMessage id="nut.admin.site.keywords.title" />}>
      <ProForm<IFormData>
        onReset={() => {
          setKeywords(site.keywords);
        }}
        onFinish={onSubmit}
      >
        <TagGroup
          title={intl.formatMessage({ id: "fields.tags" })}
          items={keywords}
          onUpdate={(items) => {
            setKeywords(items);
          }}
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
