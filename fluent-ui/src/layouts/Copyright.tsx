import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  HomeIcon,
  ViewDashboardIcon,
  GitHubLogoIcon,
} from "@fluentui/react-icons-mdl2";
import { Stack } from "@fluentui/react/lib/Stack";
import { useNavigate } from "react-router-dom";

import {
  refresh,
  selectSiteInfo,
  IState as ISiteInfo,
} from "../reducers/site-info";
import { useAppSelector, useAppDispatch } from "../hooks";
import { graphql } from "../request";
import SwitchLanguage from "./SwitchLanguage";

interface IProps {
  title: string;
}

interface IFetchResponse {
  siteInfo: ISiteInfo;
}

const Widget = (props: IProps) => {
  const site = useAppSelector(selectSiteInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="center">
      <Stack.Item>
        <Helmet>
          <title>
            {props.title} | {site.title}
          </title>
        </Helmet>
      </Stack.Item>
      <Stack.Item>©{site.copyright}</Stack.Item>
      <Stack.Item>
        <HomeIcon onClick={() => window.open("/", "_blank")} />
      </Stack.Item>
      <Stack.Item>
        <ViewDashboardIcon onClick={() => navigate("/")} />
      </Stack.Item>
      <Stack.Item>
        <GitHubLogoIcon
          onClick={() =>
            window.open("https://github.com/saturn-xiv/palm", "_blank")
          }
        />
      </Stack.Item>
      <Stack.Item>
        <SwitchLanguage />
      </Stack.Item>
    </Stack>
  );
};

export default Widget;
