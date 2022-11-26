import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { FormattedMessage } from "react-intl";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { useNavigate } from "react-router-dom";

import { UserClient } from "../../protocols/Ops-routerServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../request";
import { TO_SIGN_IN, signOut } from "../../reducers/current-user";
import { useAppDispatch } from "../../hooks";

const Widget = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <FormattedMessage id="pages.dashboard.users.sign-out.title" />
          }
        />
      </ListItemButton>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <FormattedMessage id="pages.dashboard.users.sign-out.confirm.title" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormattedMessage id="pages.dashboard.users.sign-out.confirm.subject" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            <FormattedMessage id="buttons.cancel" />
          </Button>
          <Button
            onClick={() => {
              const client = new UserClient(GRPC_HOST);
              client.signOut(new Empty(), grpc_metadata(), (err) => {
                dispatch(signOut());
                navigate(TO_SIGN_IN);
              });
            }}
            autoFocus
          >
            <FormattedMessage id="buttons.ok" />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Widget;
