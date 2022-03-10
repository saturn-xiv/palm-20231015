import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Layout from "../users/NonSignInLayout";
import { useIntl } from "react-intl";

const Widget = () => {
  const handleSubmit = () => {
    // TODO
    // console.log(data.get("email"));
  };
  const intl = useIntl();
  return (
    <Layout
      logo={<LockOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.leave-words.new.title" })}
      handleSubmit={handleSubmit}
    >
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="body"
          label={intl.formatMessage({ id: "fields.body" })}
          id="body"
          multiline
        />
      </Grid>
    </Layout>
  );
};

export default Widget;
