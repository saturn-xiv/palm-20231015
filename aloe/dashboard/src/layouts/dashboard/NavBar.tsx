import { Fragment, useState, ReactNode } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListSubheader from "@mui/material/ListSubheader";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PeopleIcon from "@mui/icons-material/People";
import LanIcon from "@mui/icons-material/Lan";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import InputIcon from "@mui/icons-material/Input";
import PublicIcon from "@mui/icons-material/Public";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

interface IItem {
  to: string;
  label: string;
  icon: ReactNode;
}

interface IList {
  lable: string;
  items: IItem[];
}

const SIGN_OUT = "users.sign-out";

const Widget = () => {
  const navigate = useNavigate();
  const [currentKey, setCurrentKey] = useState<string | undefined>();
  const items: IList[] = [
    {
      lable: "device",
      items: [
        {
          to: "status",
          label: "status",
          icon: <DashboardIcon />,
        },
        {
          to: "wan",
          label: "wan",
          icon: <PublicIcon />,
        },
        {
          to: "lan",
          label: "lan",
          icon: <NetworkWifiIcon />,
        },
        {
          to: "dmz",
          label: "dmz",
          icon: <LanIcon />,
        },
        {
          to: "hosts",
          label: "hosts",
          icon: <PeopleIcon />,
        },
        {
          to: "in-bound",
          label: "in-bound",
          icon: <InputIcon />,
        },
        {
          to: "nat",
          label: "nat",
          icon: <MultipleStopIcon />,
        },
      ],
    },
    {
      lable: "personal",
      items: [
        {
          to: "users/profile",
          label: "users.profile",
          icon: <AccountBoxIcon />,
        },
        { to: SIGN_OUT, label: "users.sign-out", icon: <LogoutIcon /> },
      ],
    },
  ];
  return (
    <List component="nav">
      {items.map((it, id, row) => (
        <Fragment key={it.lable}>
          <ListSubheader component="div" inset>
            <FormattedMessage id={`dashboard.nav.${it.lable}`} />
          </ListSubheader>
          {it.items.map((it) => (
            <ListItemButton
              onClick={() => {
                if (it.to === SIGN_OUT) {
                  //   TODO
                } else {
                  setCurrentKey(it.to);
                  navigate(it.to);
                }
              }}
              selected={it.to === currentKey}
              key={it.label}
            >
              <ListItemIcon>{it.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <FormattedMessage id={`pages.dashboard.${it.label}.title`} />
                }
              />
            </ListItemButton>
          ))}
          {id + 1 < row.length && <Divider sx={{ my: 1 }} />}
        </Fragment>
      ))}
    </List>
  );
};

export default Widget;
