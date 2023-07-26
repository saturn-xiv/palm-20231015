import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import Grid from "@mui/material/Grid";

interface IProps {
  id: string;
  logo: string;
}

const Widget = ({ id, logo }: IProps) => {
  const navigate = useNavigate();
  const intl = useIntl();
  const title = intl.formatMessage({ id: `errors.${id}.title` });
  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" color="textPrimary" variant="h1">
            {title}
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            {intl.formatMessage({ id: `errors.${id}.description` })}
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <img
              alt={title}
              src={logo}
              style={{
                marginTop: 50,
                display: "inline-block",
                maxWidth: "100%",
                width: 560,
              }}
            />
          </Box>

          <Grid container>
            <Grid item xs>
              <Button
                component="a"
                onClick={() => {
                  navigate(-1);
                }}
                startIcon={<ArrowBackIcon fontSize="small" />}
                sx={{ mt: 3 }}
                variant="text"
              >
                {intl.formatMessage({ id: "buttons.go-back" })}
              </Button>
            </Grid>
            <Grid item>
              <Button
                component="a"
                onClick={() => {
                  navigate("/");
                }}
                startIcon={<HomeOutlinedIcon fontSize="small" />}
                sx={{ mt: 3 }}
                variant="text"
              >
                {intl.formatMessage({ id: "buttons.go-home" })}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Widget;
