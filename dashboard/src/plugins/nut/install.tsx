import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import Stack from "@mui/material/Stack";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import Layout from "./users/NonSignInLayout";
import {
  REAL_NAME_VALIDATOR,
  EMAIL_VALIDATOR,
  PASSWORD_VALIDATOR,
} from "../../components/form";
import { USERS_SIGN_IN_PATH } from ".";
import postInstall, { IFormData } from "../../api/nut/postInstall";
import { useAppDispatch } from "../../hooks";
import {
  success as showSuccess,
  error as showError,
} from "../../reducers/snack-bar";
import Captcha from "../../components/Captcha";

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
      captcha: "",
    },
  });
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    postInstall(data)
      .then(() => {
        dispatch(
          showSuccess([intl.formatMessage({ id: "flashes.successed" })])
        );
        navigate(USERS_SIGN_IN_PATH);
      })
      .catch((e) => {
        dispatch(showError([e.message]));
      });
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
      <Grid item>
        <Stack spacing={2} direction="row">
          <Controller
            name="captcha"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                label={intl.formatMessage({ id: "fields.captcha" })}
                error={errors.realName !== undefined}
                helperText={
                  errors.realName &&
                  intl.formatMessage({ id: "helpers.required" })
                }
                {...field}
              />
            )}
          />
          <Captcha />
        </Stack>
      </Grid>
    </Layout>
  );
};

export default Widget;
