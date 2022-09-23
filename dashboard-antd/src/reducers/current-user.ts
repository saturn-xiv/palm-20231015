import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode, { JwtPayload } from "jwt-decode";

import type { RootState } from "../store";
import {
  UserSignInResponse,
  UserQueryRequest,
  RbacGetPermissionsResponse,
} from "../protocols/nut_pb";

export const ROLE_ROOT = "root";
export const ROLE_ADMINISTRATOR = "administrator";

export const TO_SIGN_IN = "/anonymous/users/sign-in";
export const TO_PROFILE = "/dashboard/users/logs";

const KEY = "token";
export const DURATION = 60 * 60 * 24;

export const to_user_query_request = (account: string): UserQueryRequest => {
  const query = new UserQueryRequest();

  if (account.includes("@")) {
    query.setEmail(account);
  } else {
    query.setNickName(account);
  }

  return query;
};

export const get = (): string | null => {
  return sessionStorage.getItem(KEY);
};

const set = (token: string) => {
  sessionStorage.setItem(KEY, token);
};

const remove = () => {
  sessionStorage.removeItem(KEY);
};

export const OPERATION_READ = "read";
export const OPERATION_WRITE = "write";
export const OPERATION_CREATE = "create";
export const OPERATION_UPDATE = "update";
export const OPERATION_REMOVE = "remove";

export interface IRoleOption {
  code: string;
  name: string;
}

export const user_option_to_string = (it: IUserOption): string =>
  `${it.nickName}(${it.realName})`;

export const permission2string = (it: IPermission): string =>
  `${it.resourceType}://${it.resourceId ? it.resourceId : "*"}/${it.operation}`;

export interface IUserOption {
  id: number;
  nickName: string;
  realName: string;
}

export interface IUserDetails {
  id: number;
  email: string;
  nickName: string;
  realName: string;
  lang: string;
  uid: string;
  timeZone: string;
  avatar: string;
  signInCount: number;
  currentSignInAt?: Date;
  currentSignInIp?: string;
  lastSignInAt?: Date;
  lastSignInIp?: string;
  lockedAt?: Date;
  confirmedAt?: Date;
  deletedAt?: Date;
  updatedAt: Date;
}

export interface IPermission {
  operation: string;
  resourceType: string;
  resourceId?: number;
}

export interface IUser {
  id: number;
  uid: string;
  nickName: string;
  realName: string;
  avatar: string;
  permissions: IPermission[];
  roles: string[];
}

export const to_permission = (
  x: RbacGetPermissionsResponse.Item
): IPermission => {
  const it: IPermission = {
    operation: x.getOperation(),
    resourceId: x.hasResourceId() ? x.getResourceId() : undefined,
    resourceType: x.getResourceType(),
  };
  return it;
};

export const to_user = (response: UserSignInResponse): IUser | undefined => {
  const decoded: any = jwtDecode<JwtPayload>(response.getToken());
  const payload = response.getPayload();
  if (!payload) {
    return;
  }
  return {
    uid: decoded.aud,
    id: payload.getId(),
    nickName: payload.getNickName(),
    realName: payload.getRealName(),
    avatar: payload.getAvatar(),
    permissions: response.getPermissionsList().map(to_permission),
    roles: response.getRolesList(),
  };
};

interface IState {
  payload?: IUser;
}

const initialState: IState = {};

export const slice = createSlice({
  name: "current-user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<[IUser, string]>) => {
      state.payload = action.payload[0];
      set(action.payload[1]);
    },
    signOut: (state) => {
      state.payload = undefined;
      remove();
    },
  },
});

export const { signIn, signOut } = slice.actions;

export const permissions = (state: RootState): IPermission[] =>
  state.currentUser.payload?.permissions || [];
export const isRoot = (state: RootState): boolean =>
  state.currentUser.payload?.roles.includes(ROLE_ROOT) || false;
export const isAdministrator = (state: RootState): boolean =>
  state.currentUser.payload?.roles.includes(ROLE_ADMINISTRATOR) || false;
export const currentUser = (state: RootState): IUser | undefined =>
  state.currentUser.payload;

export default slice.reducer;
