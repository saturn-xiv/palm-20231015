import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import Button from "@mui/material/Button";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

interface ILink {
  to: string;
  label: string;
  icon: ReactNode;
}

const Widget = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const links: ILink[] = [
    {
      to: "users/sign-in",
      label: "users.sign-in",
      icon: <LoginOutlinedIcon />,
    },
    {
      to: "users/sign-up",
      label: "users.sign-up",
      icon: <PersonAddOutlinedIcon />,
    },
    {
      to: "users/forgot-password",
      label: "users.forgot-password",
      icon: <PasswordOutlinedIcon />,
    },
    {
      to: "users/confirm/new",
      label: "users.confirm.new",
      icon: <ConfirmationNumberOutlinedIcon />,
    },
    {
      to: "users/unlock/new",
      label: "users.unlock.new",
      icon: <LockOpenOutlinedIcon />,
    },
    {
      to: "leave-words/new",
      label: "leave-words.new",
      icon: <CommentOutlinedIcon />,
    },
  ];
  return (
    <Stack alignItems="flex-start" spacing={1}>
      {links.map((x) => (
        <Button
          variant="text"
          key={x.to}
          startIcon={x.icon}
          onClick={() => {
            navigate(`/anonymous/${x.to}`);
          }}
        >
          {intl.formatMessage({ id: `nut.${x.label}.title` })}
        </Button>
      ))}
    </Stack>
  );
};

export default Widget;
