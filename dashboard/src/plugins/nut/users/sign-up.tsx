import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { MessageBar } from "@fluentui/react/lib/MessageBar";

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
import { useAppDispatch } from "../../../hooks";
import { Stack } from "@fluentui/react/lib/Stack";
import { TextField } from "@fluentui/react/lib/TextField";

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
  const dispatch = useAppDispatch();

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
        // TODO
        // dispatch(
        //   showSuccess([intl.formatMessage({ id: "flashes.successed" })])
        // );
        navigate(USERS_SIGN_IN_PATH);
      },
      (items) => {
        // TODO
        // dispatch(showError(items));
      }
    );
  };
  return (
    <Layout title={intl.formatMessage({ id: "nut.users.sign-up.title" })}>
      <Stack.Item>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack tokens={{ childrenGap: 10 }}>
            <Controller
              name="realName"
              control={control}
              rules={REAL_NAME_VALIDATOR}
              render={({ field }) => (
                <TextField
                  required
                  label={intl.formatMessage({ id: "fields.real-name" })}
                  errorMessage={
                    errors.realName &&
                    intl.formatMessage({ id: "helpers.real-name" })
                  }
                  {...field}
                />
              )}
            />
            <Controller
              name="nickName"
              control={control}
              rules={NICK_NAME_VALIDATOR}
              render={({ field }) => (
                <TextField
                  required
                  label={intl.formatMessage({ id: "fields.nick-name" })}
                  errorMessage={
                    errors.nickName &&
                    intl.formatMessage({ id: "helpers.nick-name" })
                  }
                  {...field}
                />
              )}
            />
            <Controller
              name="email"
              rules={EMAIL_VALIDATOR}
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  label={intl.formatMessage({ id: "fields.email" })}
                  type="email"
                  errorMessage={
                    errors.email && intl.formatMessage({ id: "helpers.email" })
                  }
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              rules={PASSWORD_VALIDATOR}
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  label={intl.formatMessage({ id: "fields.password" })}
                  type="password"
                  canRevealPassword
                  errorMessage={
                    errors.password &&
                    intl.formatMessage({ id: "helpers.password" })
                  }
                  {...field}
                />
              )}
            />
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
                  label={intl.formatMessage({
                    id: "fields.password-confirmation",
                  })}
                  type="password"
                  canRevealPassword
                  errorMessage={
                    errors.passwordConfirmation &&
                    intl.formatMessage({ id: "helpers.password-confirmation" })
                  }
                  {...field}
                />
              )}
            />

            <Stack.Item>
              <PrimaryButton
                type="submit"
                text={intl.formatMessage({ id: "buttons.submit" })}
              />
            </Stack.Item>
          </Stack>
        </form>
      </Stack.Item>
    </Layout>
  );
};

export default Widget;
