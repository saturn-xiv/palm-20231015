import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

const theme = createTheme();

interface IProps {
  children: ReactNode;
}

const Widget = ({ children }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {children}
      </Grid>
    </ThemeProvider>
  );
};

export default Widget;
