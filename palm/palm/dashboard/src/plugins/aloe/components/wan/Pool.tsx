import { ReactNode } from "react";
import { AlertColor } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useIntl, FormattedMessage } from "react-intl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { InferType, object as yup_object, number as yup_number } from "yup";
import FormControl from "@mui/material/FormControl";

import { RouterClient } from "../../protocols/Ops-routerServiceClientPb";
import { Wan, WanPool } from "../../protocols/ops-router_pb";
import { GRPC_HOST, grpc_metadata } from "../../request";
import WanPoolItem from "../../components/status/WanPool";

interface IProps {
  devices: Wan[];
  pool: WanPool.Item[];
  refresh: () => void;
  setMessage: (color: AlertColor, message: string) => void;
}

const formInputSchema = yup_object({
  weight: yup_number().min(1).max(100).defined(),
});

interface IFormInput extends InferType<typeof formInputSchema> {
  device: string;
  mac: string;
  name: string;
  weight: number;
  enable: boolean;
}

const Widget = ({ devices, pool, refresh, setMessage }: IProps) => {
  const intl = useIntl();

  const formik = useFormik<IFormInput>({
    initialValues: {
      device: "",
      name: "",
      mac: "",
      weight: 1,
      enable: false,
    },
    validationSchema: formInputSchema,
    onSubmit: (values) => {
      const client = new RouterClient(GRPC_HOST);
      const request = new WanPool();

      var items = pool.filter((x) => x.getDevice() !== values.device);
      if (values.enable) {
        const it = new WanPool.Item();
        it.setDevice(values.device);
        it.setWeight(values.weight);
        items.push(it);
      }
      request.setItemsList(items);

      client.setWanPool(request, grpc_metadata(), function (err, response) {
        if (err) {
          setMessage("error", err.message);
        } else {
          setMessage(
            "success",
            intl.formatMessage({ id: "flashes.succeeded" })
          );
          refresh();
        }
      });
    },
  });

  const onChangeDevice = (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => {
    formik.handleChange(event);

    for (var it of devices) {
      if (it.getDevice() === event.target.value) {
        formik.setFieldValue("mac", it.getMac());
        formik.setFieldValue("name", it.getName());
        formik.setFieldValue("enable", false);

        for (var jt of pool) {
          if (it.getDevice() === jt.getDevice()) {
            formik.setFieldValue("weight", jt.getWeight());
            formik.setFieldValue("enable", true);
            break;
          }
        }

        break;
      }
    }
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        <FormattedMessage id="pages.dashboard.wan.pool" />
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="device-label">
            {intl.formatMessage({
              id: "forms.fields.device",
            })}
          </InputLabel>
          <Select
            labelId="device-label"
            name="device"
            label={intl.formatMessage({
              id: "forms.fields.device",
            })}
            value={formik.values.device}
            onChange={onChangeDevice}
          >
            {devices
              .filter((it) => it.hasDhcp() || it.hasStatic())
              .map((it) => (
                <MenuItem key={it.getDevice()} value={it.getDevice()}>
                  {it.getDevice()} ({it.getName()})
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          fullWidth
          name="mac"
          label={intl.formatMessage({
            id: "forms.fields.mac",
          })}
          value={formik.values.mac}
          disabled
        />
        <TextField
          margin="normal"
          fullWidth
          name="name"
          label={intl.formatMessage({
            id: "forms.fields.name",
          })}
          value={formik.values.name}
          disabled
        />
        <TextField
          margin="normal"
          fullWidth
          name="weight"
          label={intl.formatMessage({
            id: "forms.fields.weight",
          })}
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
        />

        <FormGroup>
          <FormControlLabel
            control={<Switch name="enable" checked={formik.values.enable} />}
            onChange={formik.handleChange}
            label={intl.formatMessage({ id: "forms.fields.enable" })}
          />
        </FormGroup>
        <Button color="primary" variant="contained" fullWidth type="submit">
          <FormattedMessage id="buttons.submit" />
        </Button>
      </form>

      <List>
        {pool.map((it) => (
          <ListItem key={it.getDevice()}>
            <ListItemText
              primary={
                <WanPoolItem
                  key={it.getDevice()}
                  device={it.getDevice()}
                  weight={it.getWeight()}
                />
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Widget;
