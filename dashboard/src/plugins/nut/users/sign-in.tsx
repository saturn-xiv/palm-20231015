import { useIntl, FormattedMessage } from "react-intl";
import { UserAddOutlined } from "@ant-design/icons";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";

import Layout from "./NonSignInLayout";
import { graphql } from "../../../request";
import { USERS_LOGS_PATH } from "..";
import { signIn as userSignIn, setToken } from "../../../reducers/current-user";
import { refresh as refreshSideBar } from "../../../reducers/side-bar";
import { refresh as refreshSiteInfo } from "../../../reducers/site-info";
import { useAppDispatch } from "../../../hooks";
import { ILayout } from "../../../layouts/footer";

interface IFormData {
  id: string;
  password: string;
}

export interface IUserSignInResponse {
  token: string;
  layout: ILayout;
}

interface IFormResponse {
  userSignIn: IUserSignInResponse;
}

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.users.sign-in.title" });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = async (data: IFormData) => {
    graphql(
      `
        mutation PostForm($id: String!, $password: String!) {
          userSignIn(id: $id, password: $password) {
            token
            layout {
              siteInfo {
                title
                subhead
                copyright
                languages
              }
              userProfile {
                nickName
                realName
                email
                lang
                logo
                timeZone
              }
              sideBar {
                to
                label
                items {
                  to
                  label
                }
              }
            }
          }
        }
      `,
      { id: data.id, password: data.password },
      (res: IFormResponse) => {
        const data = res.userSignIn;
        try {
          if (data.layout.userProfile) {
            const decoded: any = jwtDecode<JwtPayload>(data.token);
            dispatch(
              userSignIn({
                id: decoded.aud,
                profile: data.layout.userProfile,
              })
            );
            dispatch(refreshSideBar(data.layout.sideBar));
            dispatch(refreshSiteInfo(data.layout.siteInfo));
            message.success(intl.formatMessage({ id: "flashes.successed" }));
            navigate(USERS_LOGS_PATH);
            setToken(data.token);
          }
        } catch (e) {
          if (e instanceof Error) {
            message.error(e.message);
          } else {
            console.error(e);
          }
        }
      }
    );
  };

  return (
    <Layout icon={<UserAddOutlined />} title={title}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormText
          width="md"
          name="id"
          rules={[{ required: true }]}
          label={<FormattedMessage id="nut.users.sign-in.fields.id" />}
        />
        <ProFormText.Password
          width="md"
          name="password"
          rules={[{ required: true }]}
          label={<FormattedMessage id="fields.password" />}
        />
      </ProForm>
    </Layout>
  );
};

export default Widget;
