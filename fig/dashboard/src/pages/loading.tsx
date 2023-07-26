import RefreshIcon from "@mui/icons-material/Refresh";
import Grid from "@mui/material/Unstable_Grid2";

const Widget = () => {
  return (
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
  );
};

export default Widget;
