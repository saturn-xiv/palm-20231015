import { Duration } from "google-protobuf/google/protobuf/duration_pb";

import {
  DURATION,
  get as getToken,
  to_user,
  signIn,
} from "./reducers/current-user";
import { GRPC_HOST, grpc_metadata } from "./request";
import store from "./store";
import { UserClient } from "./protocols/Ops-routerServiceClientPb";

const init = () => {
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
