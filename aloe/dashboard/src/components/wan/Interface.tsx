import { ReactNode, SyntheticEvent } from "react";
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
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import {
  InferType,
  string as yup_string,
  object as yup_object,
  number as yup_number,
} from "yup";
import FormControl from "@mui/material/FormControl";

import { RouterClient } from "../../protocols/Ops-routerServiceClientPb";
import { Wan, Dhcp, Static } from "../../protocols/ops-router_pb";
import { GRPC_HOST, grpc_metadata } from "../../request";

interface IProps {
  devices: Wan[];
  refresh: () => void;
  setMessage: (color: AlertColor, message: string) => void;
}

const formInputSchema = yup_object({
  name: yup_string().min(2).max(12).defined(),
  capacity: yup_number()
    .min(2)
    .max(1 << 12)
    .defined(),
  metric: yup_number().min(100).max(300).defined(),
  address: yup_string().nullable().min(7).max(64),
  gateway: yup_string().nullable().min(7).max(64),
  dns1: yup_string().nullable().min(7).max(64),
  dns2: yup_string().nullable().min(7).max(64),
});

interface IFormInput extends InferType<typeof formInputSchema> {
  device: string;
  mac: string;
  name: string;
  capacity: number;
  metric: number;
  dhcp: boolean;
  address: string;
  gateway: string;
  dns1: string;
  dns2: string;
  enable: boolean;
}

const Widget = ({ devices, refresh, setMessage }: IProps) => {
  const intl = useIntl();

  const formik = useFormik<IFormInput>({
    initialValues: {
      device: "",
      mac: "",
      capacity: 10,
      metric: 100,
      name: "",
      dhcp: false,
      address: "",
      gateway: "",
      dns1: "",
      dns2: "",
      enable: false,
    },
    validationSchema: formInputSchema,
    onSubmit: (values) => {
      const client = new RouterClient(GRPC_HOST);
      const request = new Wan();
      request.setDevice(values.device);
      request.setMac(values.mac);
      request.setName(values.name);
      request.setCapacity(values.capacity);
      request.setMetric(values.metric);
      if (values.enable) {
        if (values.dhcp) {
          const it = new Dhcp();
          it.setV6(false);
          request.setDhcp(it);
        } else {
          const it = new Static();
          it.setAddress(values.address);
          it.setGateway(values.gateway);
          it.setDns1(values.dns1);
          if (values.dns2 !== "") {
            it.setDns2(values.dns2);
          }
          request.setStatic(it);
        }
      }
      client.setWan(request, grpc_metadata(), function (err, response) {
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
        formik.setFieldValue("capacity", it.getCapacity());
        formik.setFieldValue("metric", it.getMetric());

        if (it.hasDhcp()) {
          formik.setFieldValue("dhcp", true);
          formik.setFieldValue("enable", true);
        } else if (it.hasStatic()) {
          const ip = it.getStatic();
          formik.setFieldValue("dhcp", false);
          formik.setFieldValue("address", ip?.getAddress());
          formik.setFieldValue("gateway", ip?.getGateway());
          formik.setFieldValue("dns1", ip?.getDns1());
          formik.setFieldValue("dns2", ip?.getDns2());
          formik.setFieldValue("enable", true);
        } else {
          formik.setFieldValue("enable", false);
          formik.setFieldValue("dhcp", true);
        }

        break;
      }
    }
  };

  const onChangeDhcp = (event: SyntheticEvent, checked: boolean) => {
    formik.setFieldValue("dhcp", checked);
    formik.setFieldValue("address", "");
    formik.setFieldValue("gateway", "");
    formik.setFieldValue("dns1", "");
    formik.setFieldValue("dns2", "");
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        <FormattedMessage id="pages.dashboard.wan.interfaces" />
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
            {devices.map((it) => (
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
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin="normal"
          fullWidth
          name="capacity"
          label={intl.formatMessage({
            id: "forms.fields.capacity",
          })}
          value={formik.values.capacity}
          onChange={formik.handleChange}
          error={formik.touched.capacity && Boolean(formik.errors.capacity)}
          helperText={formik.touched.capacity && formik.errors.capacity}
        />
        <TextField
          margin="normal"
          fullWidth
          name="metric"
          label={intl.formatMessage({
            id: "forms.fields.metric",
          })}
          value={formik.values.metric}
          onChange={formik.handleChange}
          error={formik.touched.metric && Boolean(formik.errors.metric)}
          helperText={formik.touched.metric && formik.errors.metric}
        />
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={formik.values.dhcp} />}
            onChange={onChangeDhcp}
            label={intl.formatMessage({ id: "forms.fields.dhcp" })}
          />
        </FormGroup>

        {formik.values.dhcp || (
          <>
            <TextField
              margin="normal"
              fullWidth
              name="address"
              label={intl.formatMessage({
                id: "forms.fields.address",
              })}
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <TextField
              margin="normal"
              fullWidth
              name="gateway"
              label={intl.formatMessage({
                id: "forms.fields.gateway",
              })}
              value={formik.values.gateway}
              onChange={formik.handleChange}
              error={formik.touched.gateway && Boolean(formik.errors.gateway)}
              helperText={formik.touched.gateway && formik.errors.gateway}
            />
            <TextField
              margin="normal"
              fullWidth
              name="dns1"
              label={intl.formatMessage({
                id: "forms.fields.dns1",
              })}
              value={formik.values.dns1}
              onChange={formik.handleChange}
              error={formik.touched.dns1 && Boolean(formik.errors.dns1)}
              helperText={formik.touched.dns1 && formik.errors.dns1}
            />
            <TextField
              margin="normal"
              fullWidth
              name="dns2"
              label={intl.formatMessage({
                id: "forms.fields.dns2",
              })}
              value={formik.values.dns2}
              onChange={formik.handleChange}
              error={formik.touched.dns2 && Boolean(formik.errors.dns2)}
              helperText={formik.touched.dns2 && formik.errors.dns2}
            />
          </>
        )}

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
    </>
  );
};

export default Widget;
