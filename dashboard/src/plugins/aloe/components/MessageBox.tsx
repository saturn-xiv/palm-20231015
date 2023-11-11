import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import dayjs from "dayjs";

interface IProps {
  message?: string;
  color: AlertColor;
  open: boolean;
  setOpen: (show: boolean) => void;
}

const Widget = ({ message, color, open, setOpen }: IProps) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={() => {
      setOpen(false);
    }}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
  >
    <MuiAlert
      onClose={() => setOpen(false)}
      severity={color}
      variant="filled"
      sx={{ width: "100%" }}
    >
      {dayjs().toString()}: {message}
    </MuiAlert>
  </Snackbar>
);
export default Widget;
