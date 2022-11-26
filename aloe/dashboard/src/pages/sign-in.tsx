import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useIntl, FormattedMessage } from "react-intl";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import background_jpg from "../assets/redwoods.jpg";
import Layout from "../layout";
import Copyright from "../layout/Copyright";

interface IFormInput {
  nickname: string;
  password: string;
}

const Widget = () => {
  const intl = useIntl();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${background_jpg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <FormattedMessage id="pages.sign-in.title" />
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Alert severity="error">{errors.nickname?.message}</Alert>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="nickname"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  maxLength: 32,
                  min: 2,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    margin="normal"
                    fullWidth
                    value={value}
                    onChange={onChange}
                    label={intl.formatMessage({ id: "forms.fields.nickname" })}
                    autoFocus
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  maxLength: 32,
                  min: 6,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    margin="normal"
                    fullWidth
                    label={intl.formatMessage({ id: "forms.fields.password" })}
                    type="password"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />

              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                <FormattedMessage id="buttons.submit" />
              </Button>
              <Button
                onClick={() => reset()}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <FormattedMessage id="buttons.reset" />
              </Button>
            </form>
            <Copyright />
          </Box>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Widget;
