import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useIntl } from "react-intl";
import Alert from "@mui/material/Alert";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import Snackbar from "@mui/material/Snackbar";

import Layout from "../users/NonSignInLayout";
import { graphql } from "../../../request";
import { Editor, IMessageBar } from "../../";

export interface IFormData {
  body: string;
}

const Widget = () => {
  const intl = useIntl();
  const [formErrorMessages, setFormErrorMessages] = useState<IMessageBar>();
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
        setFormErrorMessages({ severity: "success", items: ["aaa"] });
      },
      (items) => setFormErrorMessages({ severity: "error", items })
    );
  };
  return (
    <Layout
      logo={<CommentOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.leave-words.new.title" })}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Grid item xs={12}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={formErrorMessages && formErrorMessages?.items.length > 0}
        >
          <Alert
            variant="filled"
            severity={formErrorMessages?.severity}
            onClose={() => {
              setFormErrorMessages({ severity: "success", items: [] });
            }}
          >
            <ol>
              {formErrorMessages?.items.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ol>
          </Alert>
        </Snackbar>
      </Grid>
      <Grid item xs={12}>
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
