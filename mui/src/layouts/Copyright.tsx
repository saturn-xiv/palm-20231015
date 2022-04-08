import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import { FormattedMessage } from "react-intl";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Helmet } from "react-helmet-async";

import { selectSiteInfo, IState as ISiteInfo } from "../reducers/site-info";
import { hide as hideSnackBar, selectSnackBar } from "../reducers/snack-bar";
import { useAppSelector, useAppDispatch } from "../hooks";
import { set as setLocale } from "../i18n";

interface IProps {
  title: string;
}

interface IFetchResponse {
  siteInfo: ISiteInfo;
}

const Widget = (props: IProps) => {
  const site = useAppSelector(selectSiteInfo);
  const snackBar = useAppSelector(selectSnackBar);
  const dispatch = useAppDispatch();
  const onCloseNotificationBar = () => {
    dispatch(hideSnackBar());
  };
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
