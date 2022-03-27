import { useIntl, FormattedMessage } from "react-intl";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message, Card } from "antd";

import { graphql } from "../../../../request";
import { selectSiteInfo } from "../../../../reducers/site-info";
import { useAppSelector } from "../../../../hooks";
import { IOk } from "../../..";

interface IFormData {
  copyright: string;
}

interface IFormResponse {
  setSiteCopyright: IOk;
}

const Widget = () => {
  const intl = useIntl();
  const site = useAppSelector(selectSiteInfo);
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormData, IFormResponse>(
      `
        mutation PostForm($copyright: String!) {
          setSiteCopyright(copyright: $copyright) {
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
    <Card title={<FormattedMessage id="nut.admin.site.copyright.title" />}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormText
          width="md"
          name="copyright"
          rules={[{ required: true }]}
          initialValue={site?.copyright}
          label={<FormattedMessage id="fields.real-name" />}
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
