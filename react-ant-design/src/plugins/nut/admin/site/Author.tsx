import { useIntl, FormattedMessage } from "react-intl";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message, Card } from "antd";

import {
  EMAIL_VALIDATOR,
  REAL_NAME_VALIDATOR,
} from "../../../../components/form";
import { graphql } from "../../../../request";
import { selectSiteInfo } from "../../../../reducers/site-info";
import { useAppSelector } from "../../../../hooks";
import { IOk } from "../../..";

interface IFormData {
  name: string;
  email: string;
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
        mutation PostForm($name: String!, $email: String!) {
          setSiteAuthor(name: $name, email: $email) {
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
    <Card title={<FormattedMessage id="nut.admin.site.author.title" />}>
      <ProForm<IFormData> onFinish={onSubmit} name="author">
        <ProFormText
          width="md"
          name="name"
          rules={REAL_NAME_VALIDATOR}
          initialValue={site?.author.name}
          label={<FormattedMessage id="fields.real-name" />}
        />
        <ProFormText
          width="md"
          name="email"
          rules={EMAIL_VALIDATOR}
          initialValue={site?.author.email}
          label={<FormattedMessage id="fields.email" />}
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
