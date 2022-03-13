import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";

import Layout from "./NonSignInLayout";
import { graphql } from "../../../request";
import { USERS_LOGS_PATH } from "..";
import {
  error as showError,
  success as showSuccess,
} from "../../../reducers/notification-bar";
import {
  signIn as userSignIn,
  IProfile as IUserProfile,
  setToken,
} from "../../../reducers/current-user";
import { useAppDispatch } from "../../../hooks";

interface IFormData {
  id: string;
  password: string;
}

export interface IUserSignInResponse {
  token: string;
  profile: IUserProfile;
}

interface IFormResponse {
  userSignIn: IUserSignInResponse;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>({
    defaultValues: {
      password: "",
      id: "",
    },
  });
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    graphql(
      `
        mutation PostForm($id: String!, $password: String!) {
          userSignIn(id: $id, password: $password) {
            token
            profile {
              lang
              tz
              name
              logo
              roles
            }
          }
        }
      `,
      {
        id: data.id,
        password: data.password,
      },
      (data: IFormResponse) => {
        try {
          const decoded: any = jwtDecode<JwtPayload>(data.userSignIn.token);
          dispatch(
            userSignIn({
              id: decoded.aud,
              profile: data.userSignIn.profile,
            })
          );
          dispatch(
            showSuccess([intl.formatMessage({ id: "flashes.successed" })])
          );
          navigate(USERS_LOGS_PATH);
          setToken(data.userSignIn.token);
        } catch (e) {
          if (e instanceof Error) {
            dispatch(showError([e.message]));
          } else {
            console.error(e);
          }
        }
      },
      (items) => dispatch(showError(items))
    );
  };
  return (
    <Layout
      logo={<PersonAddAltOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.users.sign-in.title" })}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Grid item>
        <Controller
          name="id"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              required
              fullWidth
              label={intl.formatMessage({ id: "nut.users.sign-in.fields.id" })}
              error={errors.id !== undefined}
              helperText={
                errors.id && intl.formatMessage({ id: "helpers.required" })
              }
              {...field}
            />
          )}
        />
      </Grid>

      <Grid item>
        <Controller
          name="password"
          rules={{ required: true }}
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
                intl.formatMessage({ id: "helpers.required" })
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
