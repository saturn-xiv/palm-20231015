import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { useIntl, FormattedMessage } from "react-intl";
import { useFormik } from "formik";
import { InferType, string as yup_string, object as yup_object } from "yup";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../hooks";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import {
  DURATION,
  TO_PROFILE,
  to_user,
  signIn,
} from "../../../reducers/current-user";
import Layout from "../../../layouts/anonymous/Box";
import { UserClient } from "../../../protocols/Ops-routerServiceClientPb";
import {
  UserProfile,
  UserSignInRequest,
} from "../../../protocols/ops-router_pb";

const formInputSchema = yup_object({
  nickname: yup_string().defined(),
  password: yup_string().defined(),
});

interface IFormInput extends InferType<typeof formInputSchema> {
  nickname: string;
  password: string;
}

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string | undefined>();

  const formik = useFormik<IFormInput>({
    initialValues: {
      nickname: "",
      password: "",
    },
    validationSchema: formInputSchema,
    onSubmit: (values) => {
      const client = new UserClient(GRPC_HOST);
      const request = new UserSignInRequest();
      {
        const user = new UserProfile();
        user.setNickname(values.nickname);
        user.setPassword(values.password);
        request.setUser(user);
      }
      {
        const ttl = new Duration();
        ttl.setSeconds(DURATION);
        request.setTtl(ttl);
      }

      client.signIn(request, grpc_metadata(), function (err, response) {
        if (err) {
          setMessage(err.message);
        } else {
          try {
            const user = to_user(response);
            if (user) {
              dispatch(signIn([user, response.getToken()]));
              navigate(TO_PROFILE);
            }
          } catch {}
        }
      });
    },
  });

  return (
    <Layout title="pages.anonymous.users.sign-in.title">
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
          name="nickname"
          label={intl.formatMessage({ id: "forms.fields.nickname" })}
          value={formik.values.nickname}
          onChange={formik.handleChange}
          error={formik.touched.nickname && Boolean(formik.errors.nickname)}
          helperText={formik.touched.nickname && formik.errors.nickname}
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          type="password"
          label={intl.formatMessage({ id: "forms.fields.password" })}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          <FormattedMessage id="buttons.submit" />
        </Button>
      </form>
    </Layout>
  );
};

export default Widget;
