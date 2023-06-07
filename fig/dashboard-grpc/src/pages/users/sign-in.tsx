import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import GoogleOauthButton from "../../components/nut/users/sign-in/Google";

const Widget = () => {
  const [tab, setTab] = useState("email");
  const [emailSent, setEmailSent] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      // TODO
      // if (!ENABLE_AUTH) {
      //   helpers.setFieldError("submit", "Zalter authentication not enabled");
      //   helpers.setSubmitting(false);
      //   return;
      // }
      // try {
      //   // When in development, this will be 'http://localhost:3000/sign-in/confirm'
      //   // Remember to configure it in your project settings
      //   const redirectUri = window.location.href + "/confirm";
      //   // This can be call inside AuthProvider component, but we do it here for simplicity
      //   await auth.signInWithLink("start", {
      //     email: values.email,
      //     redirectUri,
      //   });
      //   helpers.setSubmitting(false);
      //   setEmailSent(true);
      // } catch (err) {
      //   console.error(err);
      //   helpers.setFieldError("submit", err.message || "Something went wrong");
      //   helpers.setSubmitting(false);
      // }
    },
  });

  const handleTabChange = (event: any, value: any) => {
    setTab(value);
  };

  const handleSkip = () => {
    // Since skip is requested, we set a fake user as authenticated
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid item xs={12} lg={4} />
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            backgroundColor: "neutral.50",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              flex: "1 1 auto",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                px: 3,
                py: "100px",
                width: "100%",
              }}
            >
              <Typography sx={{ mb: 1 }} variant="h4">
                Welcome
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }} variant="body2">
                Sign up on the internal platform
              </Typography>
              <Tabs onChange={handleTabChange} sx={{ mb: 3 }} value={tab}>
                <Tab label="Email" value="email" />
                <Tab label="Phone Number" value="phoneNumber" />
              </Tabs>
              {tab === "email" && (
                <div>
                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    variant="outlined"
                  />
                  <FormHelperText sx={{ mt: 1 }}>
                    Enter a valid email since this is a fully integrated
                    authentication system. Optionally you can skip.
                  </FormHelperText>
                  {formik.errors.submit && (
                    <Typography color="error" sx={{ mt: 2 }} variant="body2">
                      {formik.errors.submit}
                    </Typography>
                  )}
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    onClick={() => formik.handleSubmit()}
                    variant="contained"
                  >
                    Continue
                  </Button>
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    onClick={handleSkip}
                  >
                    Skip authentication
                  </Button>
                </div>
              )}
              {tab === "phoneNumber" && (
                <div>
                  <Typography sx={{ mb: 1 }} variant="h6">
                    Not available in the demo
                  </Typography>
                  <Typography color="text.secondary">TODO</Typography>
                </div>
              )}

              <div>
                {process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID && (
                  <GoogleOauthButton />
                )}
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Widget;
