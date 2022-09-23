import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";

import {
  DURATION,
  get as getToken,
  to_user,
  signIn,
} from "./reducers/current-user";
import { refresh as refreshLayout, to_site } from "./reducers/layout";
import { UserClient, SiteClient } from "./protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "./request";
import store from "./store";

const init = () => {
  const client = new SiteClient(GRPC_HOST);
  client.layout(new Empty(), grpc_metadata(), (err, response) => {
    if (!err) {
      const it = to_site(response);
      if (it) {
        store.dispatch(refreshLayout(it));
      }
    }
  });

  if (getToken()) {
    const client = new UserClient(GRPC_HOST);
    const request = new Duration();
    request.setSeconds(DURATION);

    client.refresh(request, grpc_metadata(), function (err, response) {
      if (!err) {
        try {
          const user = to_user(response);
          if (user) {
            store.dispatch(signIn([user, response.getToken()]));
          }
        } catch {}
      }
    });
  }
};

export default init;
