import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import Layout from "./NonSignInLayout";
import { EMAIL_VALIDATOR } from "../../../components/form";
import { graphql } from "../../../request";
import { USERS_SIGN_IN_PATH } from "..";
import {
  error as showError,
  success as showSuccess,
} from "../../../reducers/notification-bar";
import { useAppDispatch } from "../../../hooks";

interface IFormData {
  email: string;
}

const Widget = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    graphql(
      `
        mutation PostForm($email: String!, $home: String!) {
          userForgotPassword(email: $email, home: $home) {
            createdAt
          }
        }
      `,
      {
        email: data.email,
        home: document.location.origin,
      },
      () => {
        dispatch(
          showSuccess([intl.formatMessage({ id: "flashes.successed" })])
        );
        navigate(USERS_SIGN_IN_PATH);
      },
      (items) => dispatch(showError(items))
    );
  };
  return (
    <Layout
      logo={<PasswordOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.users.forgot-password.title" })}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Grid item>
        <Controller
          name="email"
          rules={EMAIL_VALIDATOR}
          control={control}
          render={({ field }) => (
            <TextField
              required
              fullWidth
              label={intl.formatMessage({ id: "fields.email" })}
              type="email"
              error={errors.email !== undefined}
              helperText={
                errors.email && intl.formatMessage({ id: "helpers.email" })
              }
              {...field}
            />
          )}
        />
      </Grid>
    </Layout>
  );
};

export default Widget;