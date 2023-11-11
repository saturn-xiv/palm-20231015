import { useEffect, useState } from "react";
import { AlertColor } from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import { useIntl } from "react-intl";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { RouterClient } from "../../protocols/Ops-routerServiceClientPb";
import { useAppDispatch } from "../../hooks";
import { setTitle } from "../../reducers/layout";
import { RouterStatusResponse } from "../../protocols/ops-router_pb";
import { GRPC_HOST, grpc_metadata } from "../../request";
import MessageBox from "../../components/MessageBox";
import InterfaceForm from "../../components/lan/Interface";
import { IEthernet } from "../../components";

const Widget = () => {
  const [status, setStatus] = useState<RouterStatusResponse | undefined>();
  const [message, setMessage] = useState<[AlertColor, string]>();
  const intl = useIntl();

  const refresh = () => {
    const client = new RouterClient(GRPC_HOST);
    const request = new Empty();
    client.status(request, grpc_metadata(), function (err, response) {
      if (err) {
        setMessage(["error", err.message]);
      } else {
        setStatus(response);
      }
    });
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(intl.formatMessage({ id: "pages.dashboard.lan.title" })));
    refresh();
  }, [dispatch, intl]);

  const interfaces: IEthernet[] = [];
  status?.getInterfacesMap().forEach((mac, device) => {
    if (device === status?.getDmz()?.getDevice()) {
      return;
    }
    for (var it of status.getWanList()) {
      if (device === it.getDevice()) {
        return;
      }
    }
    interfaces.push({ device, mac });
  });

  return (
    <>
      <Grid item xs={12}>
        <MessageBox
          open={message !== undefined}
          color={message ? message[0] : "info"}
          message={message ? message[1] : ""}
          setOpen={(show) => {
            if (!show) {
              setMessage(undefined);
            }
          }}
        />
      </Grid>
      <Grid item xs={12} md={4} lg={6}>
        <InterfaceForm
          interfaces={interfaces}
          lan={status?.getLan()}
          refresh={refresh}
          setMessage={(color, message) => {
            setMessage([color, message]);
          }}
        />
      </Grid>
    </>
  );
};

export default Widget;
