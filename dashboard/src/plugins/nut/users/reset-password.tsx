import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import Alert from "@mui/material/Alert";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "./NonSignInLayout";
import { PASSWORD_VALIDATOR } from "../../../components/form";
import { graphql } from "../../../request";
import { USERS_SIGN_IN_PATH } from "..";

export interface IFormData {
  password: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  let params = useParams();
  const [formErrorMessages, setFormErrorMessages] = useState<string[]>();
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<IFormData>({
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    graphql(
      `
        mutation PostForm($token: String!, $password: String!) {
          userResetPassword(token: $token, password: $password) {
            createdAt
          }
        }
      `,
      {
        password: data.password,
        token: params.token,
      },
      () => {
        navigate(USERS_SIGN_IN_PATH);
      },
      setFormErrorMessages
    );
  };
  return (
    <Layout
      logo={<PasswordOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.users.reset-password.title" })}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Grid item xs={12}>
        {formErrorMessages && (
          <Alert
            variant="filled"
            severity="error"
            onClose={() => {
              setFormErrorMessages(undefined);
            }}
          >
            <ol>
              {formErrorMessages.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ol>
          </Alert>
        )}
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="password"
          rules={PASSWORD_VALIDATOR}
          control={control}
          render={({ field }) => (
            <TextField
              required
              fullWidth
              label={intl.formatMessage({ id: "fields.password" })}
              type="password"
              error={errors.password !== undefined}
              helperText={
                errors.password &&
                intl.formatMessage({ id: "helpers.password" })
              }
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="passwordConfirmation"
          control={control}
          rules={{
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value;
              },
            },
          }}
          render={({ field }) => (
            <TextField
              required
              fullWidth
              label={intl.formatMessage({ id: "fields.password-confirmation" })}
              type="password"
              error={errors.passwordConfirmation !== undefined}
              helperText={
                errors.passwordConfirmation &&
                intl.formatMessage({ id: "helpers.password-confirmation" })
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
