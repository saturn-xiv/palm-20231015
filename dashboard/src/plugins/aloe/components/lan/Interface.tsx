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
import { Lan, RouterSetLanRequest } from "../../protocols/ops-router_pb";
import { GRPC_HOST, grpc_metadata } from "../../request";
import { IEthernet, local_networks } from "..";

interface IProps {
  interfaces: IEthernet[];
  lan?: Lan;
  refresh: () => void;
  setMessage: (color: AlertColor, message: string) => void;
}

const formInputSchema = yup_object({
  metric: yup_number().min(100).max(300).defined(),
  address: yup_string().nullable().min(7).max(64),
});

interface IFormInput extends InferType<typeof formInputSchema> {
  device: string;
  mac: string;
  metric: number;
  address: string;
  enable: boolean;
}

const Widget = ({ interfaces, lan, refresh, setMessage }: IProps) => {
  const intl = useIntl();

  const formik = useFormik<IFormInput>({
    initialValues: {
      device: lan?.getDevice() || "",
      mac: lan?.getMac() || "",
      metric: lan?.getMetric() || 200,
      address: lan?.getAddress() || "",
      enable: lan !== undefined,
    },
    validationSchema: formInputSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const client = new RouterClient(GRPC_HOST);
      const request = new RouterSetLanRequest();
      request.setEnable(values.enable);
      {
        const it = new Lan();
        it.setDevice(values.device);
        it.setMac(values.mac);
        it.setAddress(values.address);
        it.setMetric(values.metric);

        request.setPayload(it);
      }
      client.setLan(request, grpc_metadata(), function (err, response) {
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

  // const update_form = () => {
  //   formik.setFieldValue("device", lan?.getDevice() || "");
  //   formik.setFieldValue("mac", lan?.getMac() || "");
  //   formik.setFieldValue("metric", lan?.getMetric() || "");
  //   formik.setFieldValue("address", lan?.getAddress() || "");
  //   formik.setFieldValue("enable", lan !== undefined);
  // };

  // useEffect(() => {
  //   update_form();
  // }, [update_form]);

  const onChangeDevice = (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => {
    formik.handleChange(event);

    for (var jt of interfaces) {
      if (jt.device === event.target.value) {
        formik.setFieldValue("mac", jt.mac);
      }
    }
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
            {interfaces.map((it) => (
              <MenuItem key={it.device} value={it.device}>
                {it.device} ({it.mac})
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
          name="metric"
          label={intl.formatMessage({
            id: "forms.fields.metric",
          })}
          value={formik.values.metric}
          onChange={formik.handleChange}
          error={formik.touched.metric && Boolean(formik.errors.metric)}
          helperText={formik.touched.metric && formik.errors.metric}
        />

        <FormControl fullWidth>
          <InputLabel id="address-label">
            {intl.formatMessage({
              id: "forms.fields.address",
            })}
          </InputLabel>
          <Select
            labelId="address-label"
            name="address"
            label={intl.formatMessage({
              id: "forms.fields.address",
            })}
            value={formik.values.address}
            onChange={formik.handleChange}
          >
            {local_networks.map((it) => (
              <MenuItem key={it} value={it}>
                {it}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
