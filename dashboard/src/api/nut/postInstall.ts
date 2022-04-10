import dayjs from "dayjs";

import { IOk, graphql, metadata } from "..";
import { detect as detechLang } from "../../i18n";

const { SiteClient } = require("../../protocols/nut_grpc_web_pb");
const {
  SiteInstallRequest,
  UserSignUpRequest,
} = require("../../protocols/nut_pb");

export const postSiteInstall = async (form: IFormData): Promise<IOk> => {
  const cli = new SiteClient(process.env.REACT_APP_GRPC_HOST);
  const req = new SiteInstallRequest();
  {
    const user = new UserSignUpRequest();
    user.setEmail(form.email);
    user.setRealName(form.realName);
    user.setNickName(form.nickName);
    user.setPassword(form.password);
    user.setHome(document.location.origin);
    user.setLang(detechLang());
    user.setTimeZone(dayjs.tz.guess());

    req.setAdministrator(user);
  }
  return cli.install(req, metadata(), () => {
    // TODO
    console.error("todo");
  });
};

export interface IFormData {
  nickName: string;
  realName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  captcha: string;
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

interface IFormResponse {
  install: IOk;
}

export const api = async (data: IFormData): Promise<IOk> => {
  const it = await graphql<IFormRequest, IFormResponse>(
    `
      mutation PostForm($user: UserSignUpRequest!, $captcha: String!) {
        install(form: $user, captcha: $captcha) {
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
        lang: detechLang(),
        timeZone: dayjs.tz.guess(),
        home: document.location.origin,
      },
      captcha: data.captcha,
    }
  );
  if (it.data) {
    return it.data?.install;
  }
  throw new Error(it.errors?.map((it) => it.message).join(""));
};

export default api;
