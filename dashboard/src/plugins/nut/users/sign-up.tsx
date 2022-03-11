import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import Alert from "@mui/material/Alert";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";

import Layout from "./NonSignInLayout";
import {
  REAL_NAME_VALIDATOR,
  NICK_NAME_VALIDATOR,
  EMAIL_VALIDATOR,
  PASSWORD_VALIDATOR,
} from "../../../components/form";
import { graphql } from "../../../request";
import { get as getLocale } from "../../../locales";
import { USERS_SIGN_IN_PATH } from "..";

export interface IFormData {
  realName: string;
  nickName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [formErrorMessages, setFormErrorMessages] = useState<string[]>();
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<IFormData>({
    defaultValues: {
      realName: "",
      nickName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    graphql(
      `
        mutation PostForm($user: UserSignUpRequest!) {
          userSignUp(form: $user) {
            createdAt
          }
        }
      `,
      {
        user: {
          nickName: data.nickName,
          realName: data.realName,
          email: data.email,
          password: data.password,
          lang: getLocale(),
          timeZone: moment.tz.guess(),
          home: document.location.origin,
        },
      },
      () => {
        navigate(USERS_SIGN_IN_PATH);
      },
      setFormErrorMessages
    );
  };
  return (
    <Layout
      logo={<PersonAddAltOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.users.sign-up.title" })}
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
          name="realName"
          control={control}
          rules={REAL_NAME_VALIDATOR}
          render={({ field }) => (
            <TextField
              required
              fullWidth
              label={intl.formatMessage({ id: "fields.real-name" })}
              error={errors.realName !== undefined}
              helperText={
                errors.realName &&
                intl.formatMessage({ id: "helpers.real-name" })
              }
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="nickName"
          control={control}
          rules={NICK_NAME_VALIDATOR}
          render={({ field }) => (
            <TextField
              required
              fullWidth
              label={intl.formatMessage({ id: "fields.nick-name" })}
              error={errors.nickName !== undefined}
              helperText={
                errors.nickName &&
                intl.formatMessage({ id: "helpers.nick-name" })
              }
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
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
