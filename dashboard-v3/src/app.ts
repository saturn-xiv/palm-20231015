import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';

import {
  DURATION as TOKEN_DURATION,
  ICurrentUser,
  getToken,
  to_current_user,
} from './models/useAuthModel';
import { ILayout, to_layout } from './models/useSiteModel';
import { UserClient, SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

export interface IApplicationState {
  currentUser?: ICurrentUser;
  layout: ILayout;
}

export async function getInitialState(): Promise<IApplicationState> {
  const sc = new SiteClient(GRPC_HOST);
  const sr = await sc.layout(new Empty(), grpc_metadata());

  if (getToken()) {
    const uc = new UserClient(GRPC_HOST);
    const ttl = new Duration();
    ttl.setSeconds(TOKEN_DURATION);
    const ur = await uc.refresh(ttl, grpc_metadata());
    return {
      currentUser: to_current_user(ur),
      layout: to_layout(sr),
    };
  }
  return {
    layout: to_layout(sr),
  };
}
