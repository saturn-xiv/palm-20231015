import { useEffect, useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import {
  InferType,
  string as yup_string,
  ref as yup_ref,
  object as yup_object,
} from "yup";

import { useAppDispatch } from "../../../hooks";
import { setTitle } from "../../../reducers/layout";

const formInputSchema = yup_object({
  currentNickname: yup_string().defined(),
  currentPassword: yup_string().defined(),
  newNickname: yup_string().min(2).max(12).defined(),
  newPassword: yup_string().min(6).max(32).defined(),
  passwordConfirmation: yup_string()
    .oneOf([yup_ref("newPassword")])
    .defined(),
});

interface IFormInput extends InferType<typeof formInputSchema> {
  currentNickname: string;
  currentPassword: string;
  newNickname: string;
  newPassword: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTitle(
        intl.formatMessage({ id: "pages.dashboard.users.profile.title" })
      )
    );
  }, [dispatch, intl]);

  const [message, setMessage] = useState<string | undefined>();

  const formik = useFormik<IFormInput>({
    initialValues: {
      currentNickname: "",
      currentPassword: "",
      newNickname: "",
      newPassword: "",
      passwordConfirmation: "",
    },
    validationSchema: formInputSchema,
    onSubmit: (values) => {
      // const client = new UserClient(GRPC_HOST);
      // const request = new UserSignInRequest();
      // {
      //   const user = new UserProfile();
      //   user.setNickname(values.nickname);
      //   user.setPassword(values.password);
      //   request.setUser(user);
      // }
      // {
      //   const ttl = new Duration();
      //   ttl.setSeconds(DURATION);
      //   request.setTtl(ttl);
      // }
      // client.signIn(request, grpc_metadata(), function (err, response) {
      //   if (err) {
      //     setMessage(err.message);
      //   } else {
      //     try {
      //       const user = to_user(response);
      //       if (user) {
      //         dispatch(signIn([user, response.getToken()]));
      //         navigate(TO_PROFILE);
      //       }
      //     } catch {}
      //   }
      // });
    },
  });
  return (
    <Grid item xs={12} md={8} lg={9}>
      {message && (
        <Alert
          onClose={() => {
            setMessage(undefined);
          }}
          severity="error"
        >
          {message}
        </Alert>
      )}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          name="currentNickname"
          label={intl.formatMessage({
            id: "pages.dashboard.users.profile.form.current-nickname",
          })}
          value={formik.values.currentNickname}
          onChange={formik.handleChange}
          error={
            formik.touched.currentNickname &&
            Boolean(formik.errors.currentNickname)
          }
          helperText={
            formik.touched.currentNickname && formik.errors.currentNickname
          }
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          name="currentPassword"
          type="password"
          label={intl.formatMessage({
            id: "pages.dashboard.users.profile.form.current-password",
          })}
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.currentPassword &&
            Boolean(formik.errors.currentPassword)
          }
          helperText={
            formik.touched.currentPassword && formik.errors.currentPassword
          }
        />
        <TextField
          margin="normal"
          fullWidth
          name="newNickname"
          label={intl.formatMessage({
            id: "pages.dashboard.users.profile.form.new-nickname",
          })}
          value={formik.values.newNickname}
          onChange={formik.handleChange}
          error={
            formik.touched.newNickname && Boolean(formik.errors.newNickname)
          }
          helperText={formik.touched.newNickname && formik.errors.newNickname}
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          name="newPassword"
          type="password"
          label={intl.formatMessage({
            id: "pages.dashboard.users.profile.form.new-password",
          })}
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <TextField
          margin="normal"
          fullWidth
          name="passwordConfirmation"
          type="password"
          label={intl.formatMessage({
            id: "pages.dashboard.users.profile.form.password-confirmation",
          })}
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordConfirmation &&
            Boolean(formik.errors.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          <FormattedMessage id="buttons.submit" />
        </Button>
      </form>
    </Grid>
  );
};

export default Widget;
