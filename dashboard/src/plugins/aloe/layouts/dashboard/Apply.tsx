import { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import ApprovalIcon from "@mui/icons-material/Approval";
import { FormattedMessage } from "react-intl";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { RouterClient } from "../../protocols/Ops-routerServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../request";

const Widget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | undefined>();

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => {
          setOpen(true);
        }}
      >
        <ApprovalIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <FormattedMessage id="dialogs.confirm.title" />
        </DialogTitle>
        <DialogContent>
          {message && <Alert severity="error">{message}</Alert>}
          <DialogContentText id="alert-dialog-description">
            <FormattedMessage id="dashboard.apply.confirm.subject" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              setMessage(undefined);
            }}
          >
            <FormattedMessage id="buttons.cancel" />
          </Button>
          <Button
            onClick={() => {
              const client = new RouterClient(GRPC_HOST);
              client.apply(new Empty(), grpc_metadata(), (err) => {
                if (err) {
                  setMessage(err.message);
                } else {
                  setOpen(false);
                }
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
