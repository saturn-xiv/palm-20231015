import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import Copyright from "../Copyright";
import { containerPadding } from "..";

interface IProps {
  title: string;
  children: ReactNode;
}

function Widget({ title, children }: IProps) {
  const theme = createTheme();
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Container style={containerPadding} maxWidth={false} component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              marginBottom: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2} direction="row">
              {children}
              <Grid item md={12}>
                <Box display="flex" justifyContent="center">
                  <Copyright title={title} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default Widget;
