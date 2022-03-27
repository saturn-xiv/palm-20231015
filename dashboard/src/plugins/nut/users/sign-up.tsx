import { useIntl, FormattedMessage } from "react-intl";
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
import Captcha from "../../../components/Captcha";
import { IOk } from "../..";

export interface IFormData {
  nickName: string;
  realName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  captcha: string;
}

export interface IFormResponse {
  userSignUp: IOk;
}
export interface IFormRequest {
  user: {
    nickName: string;
    realName: string;
    email: string;
    password: string;
    lang: string;
    timeZone: string;
    home: string;
  };
  captcha: string;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.users.sign-up.title" });
  const navigate = useNavigate();
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormRequest, IFormResponse>(
      `
        mutation PostForm($user: UserSignUpRequest!, $captcha: String!) {
          userSignUp(form: $user, captcha: $captcha) {
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
        captcha: data.captcha,
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
    <Layout icon={<UserAddOutlined />} title={title}>
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
