import { ReactNode } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Copyright from "../Copyright";

const theme = createTheme();

const shared_links = [
  {
    to: "/users/sign-in",
    label: "nut.users.sign-in.title",
    icon: <PersonPinOutlinedIcon />,
  },
  {
    to: "/users/sign-up",
    label: "nut.users.sign-up.title",
    icon: <PersonAddAltOutlinedIcon />,
  },
  {
    to: "/users/confirm",
    label: "nut.users.confirm.title",
    icon: <ConfirmationNumberOutlinedIcon />,
  },
  {
    to: "/users/unlock",
    label: "nut.users.unlock.title",
    icon: <LockOutlinedIcon />,
  },
  {
    to: "/users/forgot-password",
    label: "nut.users.forgot-password.title",
    icon: <PasswordOutlinedIcon />,
  },
  {
    to: "/leave-words/new",
    label: "nut.leave-words.new.title",
    icon: <CommentOutlinedIcon />,
  },
];
interface IProps {
  title: string;
  children: ReactNode;
  logo: ReactNode;
  handleSubmit: (event: FormData) => void;
}

function Widget({ title, logo, children, handleSubmit }: IProps) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleSubmit(data);
  };
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>{logo}</Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit}>
            <Grid container spacing={2}>
              {children}
            </Grid>
            <Button type="submit" fullWidth variant="contained">
              <FormattedMessage id="buttons.submit" />
            </Button>
            <List>
              {shared_links.map((it) => (
                <ListItem key={it.to} disablePadding>
                  <ListItemButton onClick={() => navigate(it.to)}>
                    <ListItemIcon>{it.icon}</ListItemIcon>
                    <ListItemText
                      primary={<FormattedMessage id={it.label} />}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default Widget;
