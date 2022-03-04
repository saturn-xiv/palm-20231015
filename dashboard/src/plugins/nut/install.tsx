import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Layout from "../../layouts/application";

const Widget = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data.get("email"));
  };
  return (
    <Layout
      logo={<LockOutlinedIcon />}
      title="Sign Up1"
      handleSubmit={handleSubmit}
    >
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="realName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />
      </Grid>
    </Layout>
  );
};

export default Widget;
