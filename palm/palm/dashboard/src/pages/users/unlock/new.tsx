import { useIntl } from "react-intl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import Layout from "../../../layouts/anonymous/Form";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout
      title={intl.formatMessage({ id: "nut.users.unlock.title" })}
      avatar={<LockOpenOutlinedIcon />}
      onSubmit={(data: FormData) => {
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
      }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
    </Layout>
  );
};

export default Widget;
