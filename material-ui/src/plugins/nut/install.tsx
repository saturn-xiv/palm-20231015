import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";

import Layout from "./users/NonSignInLayout";
import {
  REAL_NAME_VALIDATOR,
  EMAIL_VALIDATOR,
  PASSWORD_VALIDATOR,
} from "../../components/form";
import { graphql } from "../../request";
import { get as getLocale } from "../../locales";
import { IFormData } from "./users/sign-up";
import { USERS_SIGN_IN_PATH } from ".";
import {
  error as showError,
  success as showSuccess,
} from "../../reducers/notification-bar";
import { useAppDispatch } from "../../hooks";

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<IFormData>({
    defaultValues: {
      realName: "",
      nickName: "admin",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    graphql(
      `
        mutation PostForm($user: UserSignUpRequest!) {
          install(form: $user) {
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
      logo={<SupervisorAccountOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.install.title" })}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Grid item>
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
      <Grid item>
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
      <Grid item>
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
