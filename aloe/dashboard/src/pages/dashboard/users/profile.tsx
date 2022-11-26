import { useEffect, useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import Grid from "@mui/material/Grid";
import Alert, { AlertColor } from "@mui/material/Alert";
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
import { useAppSelector } from "../../../hooks";
import { currentUser } from "../../../reducers/current-user";
import { UserClient } from "../../../protocols/Ops-routerServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import {
  UserProfile,
  UserUpdateRequest,
} from "../../../protocols/ops-router_pb";

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
  const user = useAppSelector(currentUser);
  useEffect(() => {
    dispatch(
      setTitle(
        intl.formatMessage({ id: "pages.dashboard.users.profile.title" })
      )
    );
  }, [dispatch, intl]);

  const [message, setMessage] = useState<[AlertColor, string | undefined]>();

  const formik = useFormik<IFormInput>({
    initialValues: {
      currentNickname: user?.nickname || "",
      currentPassword: "",
      newNickname: "",
      newPassword: "",
      passwordConfirmation: "",
    },
    validationSchema: formInputSchema,
    onSubmit: (values) => {
      const client = new UserClient(GRPC_HOST);
      const request = new UserUpdateRequest();
      {
        const user = new UserProfile();
        user.setNickname(values.currentNickname);
        user.setPassword(values.currentPassword);
        request.setCurrent(user);
      }
      {
        const user = new UserProfile();
        user.setNickname(values.newNickname);
        user.setPassword(values.newPassword);
        request.setNew(user);
      }

      client.update(request, grpc_metadata(), function (err, response) {
        if (err) {
          setMessage(["error", err.message]);
        } else {
          setMessage([
            "success",
            intl.formatMessage({ id: "flashes.successed" }),
          ]);
          formik.resetForm();
        }
      });
    },
  });
  return (
    <Grid item xs={12} md={8} lg={9}>
      {message && (
        <Alert
          onClose={() => {
            setMessage(undefined);
          }}
          severity={message[0]}
        >
          {message[1]}
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
          disabled
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
          autoFocus
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
