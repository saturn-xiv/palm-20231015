import dayjs from "dayjs";

import { IState as ISiteInfo } from "../reducers/site-info";
import { IFormData as IInstallFormData } from "../plugins/nut/users/sign-up";
import { IOk, metadata } from ".";
import { detect as detechLang } from "../locales";

// import { SiteInstallRequest, UserSignUpRequest } from "../protocols/nut_pb.d";
// import { SiteClient } from "../protocols/nut_grpc_web_pb";
// import { SiteInstallRequest, UserSignUpRequest } from "../protocols/nut_pb.d";
// import { SiteClient } from "../protocols/NutServiceClientPb";

const { SiteClient } = require("../protocols/nut_grpc_web_pb");
const {
  SiteInstallRequest,
  UserSignUpRequest,
} = require("../protocols/nut_pb");

const RPC_HOST = "http://localhost:9999";

const postSiteInstall = async (form: IInstallFormData): Promise<IOk> => {
  const cli = new SiteClient(RPC_HOST);
  const req = new SiteInstallRequest();
  {
    const user = new UserSignUpRequest();
    console.log(user, "111", form.email, "aaa", user.getEmail);
    console.log(user.setEmail);
    user.setEmail(form.email);
    user.setRealName(form.realName);
    user.setNickName(form.nickName);
    user.setPassword(form.password);
    user.setHome(document.location.origin);
    user.setLang(detechLang());
    // dayjs.tz.guess()
    user.setTimeZone("UTC");

    req.setAdministrator(user);
  }
  return cli.install(req, metadata(), () => {
    // if (err) {
    //   console.log(err.code);
    //   console.log(err.message);
    // }
    console.log("error");
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

const Api = {
  fetchSiteInfo,
  postSiteInstall,
};

export default Api;
