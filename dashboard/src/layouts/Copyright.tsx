import { useEffect } from "react";
import {
  GithubOutlined,
  HomeOutlined,
  DashboardOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import Footer from "@ant-design/pro-layout/lib/Footer";

import {
  refresh,
  selectSiteInfo,
  IState as ISiteInfo,
} from "../reducers/site-info";
import { useAppSelector, useAppDispatch } from "../hooks";
import { graphql } from "../request";
import { BASE_NAME } from ".";

interface IProps {
  title: string;
}

interface IFetchResponse {
  siteInfo: ISiteInfo;
}

const Widget = (props: IProps) => {
  const site = useAppSelector(selectSiteInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (site.languages.length === 0) {
      graphql(
        `
          query Fetch {
            siteInfo {
              title
              subhead
              copyright
              languages
            }
          }
        `,
        {},
        (data: IFetchResponse) => {
          dispatch(refresh(data.siteInfo));
        }
      );
    }
  });

  return (
    <Footer
      copyright={site?.copyright}
      links={[
        {
          key: "home",
          title: <HomeOutlined />,
          href: "/",
          blankTarget: true,
        },
        {
          key: "dashboard",
          title: <DashboardOutlined />,
          href: BASE_NAME,
        },
        {
          key: "github",
          title: <GithubOutlined />,
          href: "https://github.com/saturn-xiv/palm",
          blankTarget: true,
        },
        {
          key: "global",
          title: <GlobalOutlined />,
          href: `${BASE_NAME}switch-language`,
        },
      ]}
    />
  );
};

export default Widget;
