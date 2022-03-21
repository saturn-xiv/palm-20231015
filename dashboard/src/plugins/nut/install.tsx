import { useIntl, FormattedMessage } from "react-intl";
import { ToolOutlined } from "@ant-design/icons";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import moment from "moment-timezone";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "./users/NonSignInLayout";
import {
  REAL_NAME_VALIDATOR,
  EMAIL_VALIDATOR,
  NICK_NAME_VALIDATOR,
  PASSWORD_VALIDATOR,
} from "../../components/form";
import { graphql_ } from "../../request";
import { detect as detectLocale } from "../../locales";
import { USERS_SIGN_IN_PATH } from ".";
import { IFormData as ISignUpForm } from "./users/sign-up";

interface IFormData extends ISignUpForm {}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.install.title" });
  const navigate = useNavigate();
  const onSubmit = async (data: IFormData) => {
    graphql_(
      `
        mutation PostForm($user: UserSignUpRequest!) {
          install(form: $user) {
            createdAt
          }
        }
      `,
      {
        user: {
          nickName: data.nickName,
          realName: data.realName,
          email: data.email,
          password: data.password,
          lang: detectLocale(),
          timeZone: moment.tz.guess(),
          home: document.location.origin,
        },
      },
      () => {
        message.success(intl.formatMessage({ id: "flashes.successed" }));
        navigate(USERS_SIGN_IN_PATH);
      }
    );
  };

  return (
    <Layout icon={<ToolOutlined />} title={title}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormText
          width="md"
          name="realName"
          rules={REAL_NAME_VALIDATOR}
          label={<FormattedMessage id="fields.real-name" />}
        />
        <ProFormText
          width="md"
          name="nickName"
          rules={NICK_NAME_VALIDATOR}
          label={<FormattedMessage id="fields.nick-name" />}
        />
        <ProFormText
          width="md"
          name="email"
          rules={EMAIL_VALIDATOR}
          label={<FormattedMessage id="fields.email" />}
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
    </Layout>
  );
};

export default Widget;
