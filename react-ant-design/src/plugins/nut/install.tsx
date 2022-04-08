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
import { graphql } from "../../request";
import { detect as detectLocale } from "../../locales";
import { USERS_SIGN_IN_PATH } from ".";
import {
  IFormData as ISignUpFormData,
  IFormRequest as ISignUpFormRequest,
} from "./users/sign-up";
import Captcha from "../../components/Captcha";
import { IOk } from "..";
import api from "../../api";

interface IFormData extends ISignUpFormData {}

interface IFormResponse {
  install: IOk;
}

interface IFormRequest extends ISignUpFormRequest {}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.install.title" });
  const navigate = useNavigate();
  const onSubmit = async (data: IFormData) => {
    api.nut.postSiteInstall(data).then((res) => {
      console.log(res);
    });
    // const response = await graphql<IFormRequest, IFormResponse>(
    //   `
    //     mutation PostForm($user: UserSignUpRequest!, $captcha: String!) {
    //       install(form: $user, captcha: $captcha) {
    //         createdAt
    //       }
    //     }
    //   `,
    //   {
    //     user: {
    //       nickName: data.nickName,
    //       realName: data.realName,
    //       email: data.email,
    //       password: data.password,
    //       lang: detectLocale(),
    //       timeZone: moment.tz.guess(),
    //       home: document.location.origin,
    //     },
    //     captcha: data.captcha,
    //   }
    // );
    // if (response.data) {
    //   message.success(intl.formatMessage({ id: "flashes.successed" }));
    //   navigate(USERS_SIGN_IN_PATH);
    // } else {
    //   response.errors?.forEach((it) => {
    //     message.error(it.message);
    //   });
    // }
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
