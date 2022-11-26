import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useIntl, FormattedMessage } from "react-intl";
import { useFormik } from "formik";
import { InferType, string as yup_string, object as yup_object } from "yup";

import background_jpg from "../assets/redwoods.jpg";
import Layout from "../layout";
import Copyright from "../layout/Copyright";

const formInputSchema = yup_object({
  nickname: yup_string().min(2).max(12).defined(),
  password: yup_string().min(6).max(32).defined(),
});

interface IFormInput extends InferType<typeof formInputSchema> {
  nickname: string;
  password: string;
}

const Widget = () => {
  const intl = useIntl();

  const formik = useFormik<IFormInput>({
    initialValues: {
      nickname: "",
      password: "",
    },
    validationSchema: formInputSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                name="nickname"
                label={intl.formatMessage({ id: "forms.fields.nickname" })}
                value={formik.values.nickname}
                onChange={formik.handleChange}
                error={
                  formik.touched.nickname && Boolean(formik.errors.nickname)
                }
                helperText={formik.touched.nickname && formik.errors.nickname}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                type="password"
                label={intl.formatMessage({ id: "forms.fields.password" })}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                <FormattedMessage id="buttons.submit" />
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
