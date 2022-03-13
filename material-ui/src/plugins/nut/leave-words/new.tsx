import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { useNavigate } from "react-router-dom";

import Layout from "../users/NonSignInLayout";
import { graphql } from "../../../request";
import { Editor } from "../../";
import {
  error as showError,
  success as showSuccess,
} from "../../../reducers/notification-bar";
import { useAppDispatch } from "../../../hooks";
import { USERS_SIGN_IN_PATH } from "..";

interface IFormData {
  body: string;
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
      body: "",
    },
  });
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    graphql(
      `
        mutation PostForm($body: String!, $editor: String!) {
          createLeaveWord(body: $body, editor: $editor) {
            createdAt
          }
        }
      `,
      {
        body: data.body,
        editor: Editor.TEXTAREA,
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
      logo={<CommentOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.leave-words.new.title" })}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Grid item>
        <Controller
          name="body"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <TextField
              required
              fullWidth
              label={intl.formatMessage({ id: "fields.body" })}
              multiline
              rows={4}
              error={errors.body !== undefined}
              helperText={
                errors.body && intl.formatMessage({ id: "helpers.required" })
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
