import RefreshIcon from "@mui/icons-material/Refresh";
import Grid from "@mui/material/Unstable_Grid2";

import Layout from "../layouts/application";

const Widget = () => {
  return (
    <Layout>
      <Grid container spacing={2} minHeight={320}>
        <Grid
          display="flex"
          mdOffset={4}
          md={4}
          justifyContent="center"
          alignItems="center"
        >
          <RefreshIcon fontSize="large" />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Widget;
