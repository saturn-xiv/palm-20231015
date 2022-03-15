import { useIntl } from "react-intl";
import { UserAddOutlined } from "@ant-design/icons";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import moment from "moment-timezone";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "./NonSignInLayout";
import {
  REAL_NAME_VALIDATOR,
  EMAIL_VALIDATOR,
  NICK_NAME_VALIDATOR,
  PASSWORD_VALIDATOR,
} from "../../../components/form";
import { graphql } from "../../../request";
import { detect as detectLocale } from "../../../locales";
import { USERS_SIGN_IN_PATH } from "..";

export interface IFormData {
  nickName: string;
  realName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.users.sign-up.title" });
  const navigate = useNavigate();
  const onSubmit = async (data: IFormData) => {
    graphql(
      `
        mutation PostForm($user: UserSignUpRequest!) {
          userSignUp(form: $user) {
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
    <Layout icon={<UserAddOutlined />} title={title}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormText
          width="md"
          name="realName"
          rules={REAL_NAME_VALIDATOR}
          label={intl.formatMessage({ id: "fields.real-name" })}
        />
        <ProFormText
          width="md"
          name="nickName"
          rules={NICK_NAME_VALIDATOR}
          label={intl.formatMessage({ id: "fields.nick-name" })}
        />
        <ProFormText
          width="md"
          name="email"
          rules={EMAIL_VALIDATOR}
          label={intl.formatMessage({ id: "fields.email" })}
        />
        <ProFormText.Password
          width="md"
          name="password"
          rules={PASSWORD_VALIDATOR}
          label={intl.formatMessage({ id: "fields.password" })}
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
          label={intl.formatMessage({ id: "fields.password-confirmation" })}
        />
      </ProForm>
    </Layout>
  );
};

export default Widget;
