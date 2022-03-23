import { useIntl, FormattedMessage } from "react-intl";
import { CommentOutlined } from "@ant-design/icons";
import ProForm, { ProFormTextArea, ProFormText } from "@ant-design/pro-form";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "../users/NonSignInLayout";
import { graphql } from "../../../request";
import { USERS_SIGN_IN_PATH } from "..";
import Captcha from "../../../components/Captcha";

interface IFormData {
  body: string;
  captcha: string;
}
interface IFormResponse {
  createLeaveWord: { createdAt: number };
}
interface IFormRequest {
  body: string;
  editor: string;
  captcha: string;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.leave-words.new.title" });
  const navigate = useNavigate();
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormRequest, IFormResponse>(
      `
        mutation PostForm($body: String!, $editor: String!, $captcha: String!) {
          createLeaveWord(body: $body, editor: $editor, captcha: $captcha) {
            createdAt
          }
        }
      `,
      {
        body: data.body,
        captcha: data.captcha,
        editor: "textarea",
      }
    );

    if (response.data) {
      message.success(intl.formatMessage({ id: "flashes.successed" }));
      navigate(USERS_SIGN_IN_PATH);
    } else {
      response.errors?.forEach((it) => {
        message.error(it.message);
      });
    }
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
        <ProForm.Group>
          <ProFormText
            width="xs"
            name="captcha"
            addonAfter={<Captcha />}
            rules={[{ required: true }]}
            label={<FormattedMessage id="fields.captcha" />}
          />
        </ProForm.Group>
      </ProForm>
    </Layout>
  );
};

export default Widget;
