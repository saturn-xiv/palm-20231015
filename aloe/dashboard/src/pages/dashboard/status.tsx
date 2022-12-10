import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import Grid from "@mui/material/Grid";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { useAppDispatch } from "../../hooks";
import { RouterClient } from "../../protocols/Ops-routerServiceClientPb";
import {
  RouterStatusResponse,
  WanPool,
  Lan,
  Dmz,
} from "../../protocols/ops-router_pb";
import { setTitle } from "../../reducers/layout";
import { GRPC_HOST, grpc_metadata } from "../../request";
import WanPanel from "../../components/status/Wan";
import LanPanel from "../../components/status/Lan";
import DmzPanel from "../../components/status/Dmz";
import OsPanel from "../../components/status/Os";

const Widget = () => {
  const [status, setStatus] = useState<RouterStatusResponse | undefined>();
  const intl = useIntl();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTitle(intl.formatMessage({ id: "pages.dashboard.status.title" }))
    );
    const client = new RouterClient(GRPC_HOST);
    const request = new Empty();
    client.status(request, grpc_metadata(), function (err, response) {
      if (err) {
        console.log(err.message);
      } else {
        setStatus(response);
      }
    });
  }, [dispatch, setStatus, intl]);
  return (
    <Grid item xs={12} md={8} lg={9}>
      <WanPanel
        pool={status?.getWanPool() || new WanPool()}
        devices={status?.getWanList() || []}
      />
      <LanPanel lan={status?.getLan() || new Lan()} />
      <DmzPanel dmz={status?.getDmz() || new Dmz()} />
      <OsPanel
        ip={status?.getIp() || new RouterStatusResponse.Ip()}
        firewall={status?.getFirewall() || ""}
        uptime={status?.getUptime() || new Duration()}
      />
    </Grid>
  );
};

export default Widget;
