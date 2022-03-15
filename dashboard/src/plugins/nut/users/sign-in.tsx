import { useIntl } from "react-intl";
import { UserAddOutlined } from "@ant-design/icons";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "./NonSignInLayout";
import { graphql } from "../../../request";
import { USERS_LOGS_PATH } from "..";
import {
  signIn as userSignIn,
  IProfile as IUserProfile,
  setToken,
} from "../../../reducers/current-user";
import { useAppDispatch } from "../../../hooks";
import jwtDecode, { JwtPayload } from "jwt-decode";

interface IFormData {
  id: string;
  password: string;
}

export interface IUserSignInResponse {
  token: string;
  profile: IUserProfile;
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
            profile {
              lang
              tz
              name
              logo
              roles
            }
          }
        }
      `,
      { id: data.id, password: data.password },
      (data: IFormResponse) => {
        try {
          const decoded: any = jwtDecode<JwtPayload>(data.userSignIn.token);
          dispatch(
            userSignIn({
              id: decoded.aud,
              profile: data.userSignIn.profile,
            })
          );
          message.success(intl.formatMessage({ id: "flashes.successed" }));
          navigate(USERS_LOGS_PATH);
          setToken(data.userSignIn.token);
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
          label={intl.formatMessage({ id: "nut.users.sign-in.fields.id" })}
        />
        <ProFormText.Password
          width="md"
          name="password"
          rules={[{ required: true }]}
          label={intl.formatMessage({ id: "fields.password" })}
        />
      </ProForm>
    </Layout>
  );
};

export default Widget;
