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
import jwtDecode, { JwtPayload } from "jwt-decode";

import {
  selectSiteInfo,
  refresh as refreshSiteInfo,
} from "../reducers/site-info";
import { hide as hideSnackBar, selectSnackBar } from "../reducers/snack-bar";
import { useAppSelector, useAppDispatch } from "../hooks";
import { set as setLocale } from "../i18n";
import api from "../api";
import { getToken, signIn, signOut } from "../reducers/current-user";
import { refresh as refreshSideBar } from "../reducers/side-bar";

interface IProps {
  title: string;
}

const Widget = (props: IProps) => {
  const site = useAppSelector(selectSiteInfo);
  const snackBar = useAppSelector(selectSnackBar);
  const dispatch = useAppDispatch();
  const onCloseNotificationBar = () => {
    dispatch(hideSnackBar());
  };

  useEffect(() => {
    if (site.languages.length === 0) {
      api.nut
        .fetchLayout()
        .then((it) => {
          dispatch(refreshSiteInfo(it.siteInfo));
          const token = getToken();
          if (token !== null && it.userProfile) {
            const decoded: any = jwtDecode<JwtPayload>(token);
            dispatch(signIn({ id: decoded.aud, profile: it.userProfile }));
          } else {
            dispatch(signOut());
          }
          dispatch(refreshSideBar(it.sideBar));
        })
        .catch((e) => {
          console.log(e);
        });
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
            setLocale(it, true);
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
        open={snackBar.messages.length > 0}
      >
        <Alert
          variant="filled"
          severity={snackBar.severity}
          onClose={onCloseNotificationBar}
        >
          <ol>
            {snackBar.messages.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ol>
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Widget;
