import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet } from "react-router-dom";

import Copyright from "../Copyright";
import Layout from "..";
import { useAppSelector } from "../../hooks";
import { currentUser } from "../../reducers/current-user";
import { pageTitle } from "../../reducers/layout";
import Drawer from "./Drawer";
import AppBar from "./AppBar";
import NavBar from "./NavBar";
import unauthorised_svg from "../../assets/unauthorised.svg";
import Apply from "./Apply";
import Reboot from "./Reboot";

export const drawerWidth: number = 240;

const Widget = () => {
  const user = useAppSelector(currentUser);
  const page_title = useAppSelector(pageTitle);

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Layout>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {page_title}
          </Typography>
          <Apply />
          <Reboot />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <NavBar />
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {user ? (
              <Outlet />
            ) : (
              <Grid item xs={12} md={8} lg={9}>
                <img alt="unauthorised" src={unauthorised_svg} />
              </Grid>
            )}
          </Grid>
          <Copyright />
        </Container>
      </Box>
    </Layout>
  );
};

export default Widget;
