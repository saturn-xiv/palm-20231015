import { useIntl } from "react-intl";
import WebAssetOffOutlinedIcon from "@mui/icons-material/WebAssetOffOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

import Layout from "./layouts/application";
import broken_link from "./assets/404.svg";

function Widget() {
  const intl = useIntl();
  const navigate = useNavigate();
  const title = intl.formatMessage({ id: "404.title" });
  return (
    <Layout title={title}>
      <Avatar sx={{ bgcolor: "secondary.main" }}>
        <WebAssetOffOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item width="100%">
          <img src={broken_link} alt={title} />
        </Grid>
        <Grid item>
          <ButtonGroup>
            <Button
              color="secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              <FormattedMessage id="buttons.go-back" />
            </Button>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              <FormattedMessage id="buttons.go-home" />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Widget;
