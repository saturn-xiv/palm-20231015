import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import { FormattedMessage } from "react-intl";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Helmet } from "react-helmet-async";

import {
  refresh,
  selectSiteInfo,
  IState as ISiteInfo,
} from "../reducers/site-info";
import {
  hide as hideNotificationBar,
  selectNotificationBar,
} from "../reducers/notification-bar";
import { useAppSelector, useAppDispatch } from "../hooks";
import { set as setLocale } from "../locales";
import { graphql } from "../request";

interface IProps {
  title: string;
}

interface IFetchResponse {
  siteInfo: ISiteInfo;
}

const Widget = (props: IProps) => {
  const site = useAppSelector(selectSiteInfo);
  const notificationBar = useAppSelector(selectNotificationBar);
  const dispatch = useAppDispatch();
  const onCloseNotificationBar = () => {
    dispatch(hideNotificationBar());
  };
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
    <Stack spacing={2} direction="row">
      <Helmet>
        <title>
          {props.title} | {site.title}
        </title>
      </Helmet>
      <Typography variant="body2" color="text.secondary" align="center">
        ©{site.copyright}
      </Typography>
      <Link
        color="inherit"
        target="_blank"
        href="https://github.com/saturn-xiv/palm"
      >
        <GitHubIcon />
      </Link>
      <Link color="inherit" target="_blank" href="/">
        <HomeIcon />
      </Link>
      {site.languages.map((it) => (
        <Link
          onClick={() => {
            setLocale(it);
            window.location.reload();
          }}
          key={it}
        >
          <FormattedMessage id={`languages.${it}`} />
        </Link>
      ))}
      <Snackbar
        autoHideDuration={6000}
        onClose={onCloseNotificationBar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={notificationBar.messages.length > 0}
      >
        <Alert
          variant="filled"
          severity={notificationBar.severity}
          onClose={onCloseNotificationBar}
        >
          <ol>
            {notificationBar.messages.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ol>
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Widget;
