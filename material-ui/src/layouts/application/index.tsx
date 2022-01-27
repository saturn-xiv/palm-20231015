import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from '../Copyright';

export interface IProps {
  children: React.ReactNode;
}

const theme = createTheme();

export default ({ children }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {children}
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
