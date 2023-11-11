import { ReactNode, FormEvent } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import Copyright from "../application/Copyright";
import SharedLinks from "./SharedLinks";

interface IProps {
  children: ReactNode;
  avatar: ReactNode;
  title: string;
  onSubmit: (data: FormData) => void;
}

const Widget = ({ avatar, children, title, onSubmit }: IProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSubmit(data);
  };
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{avatar}</Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        {children}
        <SharedLinks />
        <Copyright />
      </Box>
    </>
  );
};

export default Widget;
