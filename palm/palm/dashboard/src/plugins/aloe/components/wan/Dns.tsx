import { AlertColor } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useIntl, FormattedMessage } from "react-intl";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { InferType, object as yup_object, string as yup_string } from "yup";

import { RouterClient } from "../../protocols/Ops-routerServiceClientPb";
import { Dns } from "../../protocols/ops-router_pb";
import { GRPC_HOST, grpc_metadata } from "../../request";
import RemoveDnsItem from "./RemoveDns";

interface IProps {
  servers: string[];
  refresh: () => void;
  setMessage: (color: AlertColor, message: string) => void;
}

const formInputSchema = yup_object({
  host: yup_string().min(7).max(100).defined(),
});

interface IFormInput extends InferType<typeof formInputSchema> {
  host: string;
}

const Widget = ({ servers, refresh, setMessage }: IProps) => {
  const intl = useIntl();

  const onSave = (items: string[]) => {
    const client = new RouterClient(GRPC_HOST);
    const request = new Dns();
    request.setItemsList(items);
    client.setDns(request, grpc_metadata(), function (err, response) {
      if (err) {
        setMessage("error", err.message);
      } else {
        setMessage("success", intl.formatMessage({ id: "flashes.succeeded" }));
        refresh();
      }
    });
  };

  const formik = useFormik<IFormInput>({
    initialValues: {
      host: "",
    },
    validationSchema: formInputSchema,
    onSubmit: (values) => {
      var items = servers.filter((x) => x !== values.host);
      items.push(values.host);
      onSave(items);
    },
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        <FormattedMessage id="pages.dashboard.wan.dns" />
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          name="host"
          label={intl.formatMessage({
            id: "forms.fields.host",
          })}
          value={formik.values.host}
          onChange={formik.handleChange}
          error={formik.touched.host && Boolean(formik.errors.host)}
          helperText={formik.touched.host && formik.errors.host}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          <FormattedMessage id="buttons.submit" />
        </Button>
      </form>

      <List>
        {servers.map((it) => (
          <RemoveDnsItem
            key={it}
            host={it}
            onRemove={(host: string) => {
              var items = servers.filter((x) => x !== host);
              onSave(items);
            }}
          />
        ))}
      </List>
    </>
  );
};

export default Widget;
