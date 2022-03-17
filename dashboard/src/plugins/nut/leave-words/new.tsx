import { useIntl, FormattedMessage } from "react-intl";
import { CommentOutlined } from "@ant-design/icons";
import ProForm, { ProFormTextArea } from "@ant-design/pro-form";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "../users/NonSignInLayout";
import { graphql } from "../../../request";
import { USERS_SIGN_IN_PATH } from "..";
import { Editor } from "../..";

interface IFormData {
  body: string;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.leave-words.new.title" });
  const navigate = useNavigate();
  const onSubmit = async (data: IFormData) => {
    graphql(
      `
        mutation PostForm($body: String!, $editor: String!) {
          createLeaveWord(body: $body, editor: $editor) {
            createdAt
          }
        }
      `,
      {
        body: data.body,
        editor: Editor.TEXTAREA,
      },
      () => {
        message.success(intl.formatMessage({ id: "flashes.successed" }));
        navigate(USERS_SIGN_IN_PATH);
      }
    );
  };

  return (
    <Layout icon={<CommentOutlined />} title={title}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormTextArea
          width="md"
          name="body"
          rules={[{ required: true }]}
          label={<FormattedMessage id="fields.body" />}
        />
      </ProForm>
    </Layout>
  );
};

export default Widget;
