import { useIntl } from "react-intl";
import WebAssetOffOutlinedIcon from "@mui/icons-material/WebAssetOffOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

import Layout from "./layouts/application";
import broken_link from "./assets/page-not-found.svg";

function Widget() {
  const intl = useIntl();
  const navigate = useNavigate();
  const title = intl.formatMessage({ id: "404.title" });
  return (
    <Layout title={title}>
      <Grid item md={3}></Grid>
      <Grid item md={6}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Typography align="center" variant="h3">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Box justifyContent="center">
              <img
                src={broken_link}
                alt={title}
                style={{
                  display: "inline-block",
                  maxWidth: "100%",
                }}
              />
            </Box>
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
      </Grid>
    </Layout>
  );
}

export default Widget;
