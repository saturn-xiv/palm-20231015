import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { useAppSelector } from "../hooks";
import { pageTitle } from "../reducers/layout";

const theme = createTheme();

interface IProps {
  children: ReactNode;
}

const Widget = ({ children }: IProps) => {
  const page_title = useAppSelector(pageTitle);
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          {children}
          <Helmet>
            <title>{page_title}</title>
          </Helmet>
        </Grid>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Widget;
