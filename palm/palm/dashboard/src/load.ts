import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";

import {
  DURATION,
  get as getToken,
  signIn,
  to_user,
} from "./reducers/current-user";
import { refresh as refreshLayout, to_site } from "./reducers/layout";
import { GRPC_HOST, grpc_metadata } from "./request";
import store from "./store";
import { SiteClient, UserClient } from "./protocols/NutServiceClientPb";

const init = () => {
  {
    const client = new SiteClient(GRPC_HOST);
    client.layout(new Empty(), grpc_metadata(), (err, res) => {
      if (!err) {
        const it = to_site(res);
        if (it) {
          store.dispatch(refreshLayout(it));
        }
      }
    });
  }

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
