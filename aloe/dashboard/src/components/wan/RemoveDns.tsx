import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { FormattedMessage } from "react-intl";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  host: string;
  onRemove: (host: string) => void;
}

const Widget = ({ host, onRemove }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ListItemButton>
      <ListItemIcon>
        <DeleteIcon
          onClick={() => {
            setOpen(true);
          }}
        />

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
            <DialogContentText id="alert-dialog-description">
              <FormattedMessage
                id="pages.dashboard.wan.dns.remove.confirm.title"
                values={{ host }}
              />
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
                onRemove(host);
              }}
              autoFocus
            >
              <FormattedMessage id="buttons.ok" />
            </Button>
          </DialogActions>
        </Dialog>
      </ListItemIcon>
      <ListItemText primary={host} />
    </ListItemButton>
  );
};

export default Widget;
