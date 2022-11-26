import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useIntl } from "react-intl";

import { useAppSelector } from "../hooks";
import { pageTitle } from "../reducers/layout";

const theme = createTheme();

interface IProps {
  children: ReactNode;
}

const Widget = ({ children }: IProps) => {
  const intl = useIntl();
  const page_title = useAppSelector(pageTitle);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Grid container component="main" sx={{ height: "100vh" }}>
            {children}
            <Helmet>
              <title>
                {`${page_title} | ${intl.formatMessage({ id: "site.title" })}`}
              </title>
            </Helmet>
          </Grid>
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Widget;
