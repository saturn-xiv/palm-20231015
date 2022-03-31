import { useEffect } from "react";
import {
  GithubOutlined,
  HomeOutlined,
  DashboardOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Space, message } from "antd";
import { useNavigate } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";

import { IMenu, refresh as refreshSideBar } from "../reducers/side-bar";
import {
  getToken,
  IProfile as IUser,
  signIn,
  signOut,
} from "../reducers/current-user";
import { graphql } from "../request";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  refresh as refreshSiteInfo,
  selectSiteInfo,
  IState as ISiteInfo,
} from "../reducers/site-info";

export const Copyright = () => {
  const site = useAppSelector(selectSiteInfo);
  return <span>&copy;{site.copyright}</span>;
};

export const Home = () => (
  <HomeOutlined
    key="home"
    onClick={(ev) => {
      ev.preventDefault();
      window.open("/", "_blank");
    }}
  />
);
export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <DashboardOutlined
      onClick={(ev) => {
        ev.preventDefault();
        navigate("/");
      }}
    />
  );
};

export const Github = () => {
  return (
    <GithubOutlined
      onClick={(ev) => {
        ev.preventDefault();
        window.open("https://github.com/saturn-xiv/palm", "_blank");
      }}
      key="github"
    />
  );
};

export interface ILayout {
  siteInfo: ISiteInfo;
  userProfile?: IUser;
  sideBar: IMenu[];
}

interface IFetchLayoutResponse {
  layout: ILayout;
}

export const Layout = () => {
  const dispatch = useAppDispatch();
  const site = useAppSelector(selectSiteInfo);
  useEffect(() => {
    if (site.languages.length === 0) {
      try {
        graphql<{}, IFetchLayoutResponse>(
          `
            query Fetch {
              layout {
                siteInfo {
                  title
                  keywords
                  description
                  subhead
                  copyright
                  languages
                  author {
                    email
                    name
                  }
                }
                userProfile {
                  realName
                  nickName
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
          `,
          {}
        ).then((response) => {
          if (response.data) {
            const data = response.data.layout;
            dispatch(refreshSiteInfo(data.siteInfo));
            const token = getToken();
            if (token !== null && data.userProfile) {
              const decoded: any = jwtDecode<JwtPayload>(token);
              dispatch(signIn({ id: decoded.aud, profile: data.userProfile }));
            } else {
              dispatch(signOut());
            }
            dispatch(refreshSideBar(data.sideBar));
          }
        });
      } catch (e) {
        if (e instanceof Error) {
          message.error(e.message);
        } else {
          console.error(e);
        }
      }
    }
  });
  return <Space />;
};

export const I18n = () => {
  const navigate = useNavigate();
  return (
    <GlobalOutlined
      onClick={(ev) => {
        ev.preventDefault();
        navigate("/switch-language");
      }}
    />
  );
};
