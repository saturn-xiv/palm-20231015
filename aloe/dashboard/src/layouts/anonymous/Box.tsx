import { ReactNode, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useIntl, FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

import Copyright from "../Copyright";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setTitle } from "../../reducers/layout";
import { TO_PROFILE, currentUser } from "../../reducers/current-user";

interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      navigate(TO_PROFILE);
    }
    dispatch(setTitle(intl.formatMessage({ id: title })));
  }, [user, dispatch, title, intl, navigate]);
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LoginIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        <FormattedMessage id={title} />
      </Typography>
      <Box sx={{ mt: 1 }}>
        {children}
        <Copyright />
      </Box>
    </>
  );
};

export default Widget;
