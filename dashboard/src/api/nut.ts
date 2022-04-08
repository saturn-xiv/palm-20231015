import dayjs from "dayjs";

import { IState as ISiteInfo } from "../reducers/site-info";
import { IFormData as IInstallFormData } from "../plugins/nut/install";
import { IOk, metadata } from ".";
import { detect as detechLang } from "../i18n";

const { SiteClient } = require("../protocols/nut_grpc_web_pb");
const {
  SiteInstallRequest,
  UserSignUpRequest,
} = require("../protocols/nut_pb");

const postSiteInstall = async (form: IInstallFormData): Promise<IOk> => {
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

const fetchSiteInfo = async (lang: string): Promise<ISiteInfo> => {
  return {
    title: "ttt",
    subhead: "sss",
    description: "",
    keywords: [],
    copyright: "ccc",
    languages: ["en-US", "zh-Hans", "zh-Hant"],
    author: {
      name: "nnn",
      email: "eee",
    },
  };
};

export default {
  fetchSiteInfo,
  postSiteInstall,
};
