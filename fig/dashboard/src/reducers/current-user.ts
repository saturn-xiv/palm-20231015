import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode, { JwtPayload } from "jwt-decode";

import { UserQueryRequest, UserSignInResponse } from "../protocols/nut_pb";
import { PermissionsResponse } from "../protocols/rbac_pb";
import type { RootState } from "../store";
import { home_url } from "../utils";

export const ROLE_ROOT = "root";
export const ROLE_ADMINISTRATOR = "administrator";

export const TO_SIGN_IN = "/anonymous/users/sign-in";
export const TO_PROFILE = "/dashboard/users/logs";

const KEY = "token";
export const DURATION = 60 * 60 * 24;

const ENABLE_LOCAL_TOKEN = process.env.REACT_APP_ENABLE_LOCAL_TOKEN === "true";

export const get = (): string | null => {
  const token = sessionStorage.getItem(KEY);
  if (token) {
    return token;
  }
  if (ENABLE_LOCAL_TOKEN) {
    return localStorage.getItem(KEY);
  }
  return null;
};

const set = (token: string) => {
  sessionStorage.setItem(KEY, token);
  if (ENABLE_LOCAL_TOKEN) {
    localStorage.setItem(KEY, token);
  }
};

const remove = () => {
  sessionStorage.removeItem(KEY);
  localStorage.removeItem(KEY);
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

// nickname or email
export const to_user_query_request = (account: string): UserQueryRequest => {
  const query = new UserQueryRequest();

  if (account.includes("@")) {
    query.setEmail(account);
  } else {
    query.setNickname(account);
  }
  query.setHome(home_url());

  return query;
};

export const user_option_to_string = (it: IUserOption): string =>
  `${it.nickname}(${it.realName})`;

export const permission2string = (it: IPermission): string =>
  `${it.resourceType}://${it.resourceId ? it.resourceId : "*"}/${it.operation}`;

export const to_permission = (x: PermissionsResponse.Item): IPermission => {
  const it: IPermission = {
    operation: x.getOperation(),
    resourceId: x.getResource()?.hasId() ? x.getResource()?.getId() : undefined,
    resourceType: x.getResource()?.getType() || "",
  };
  return it;
};

export const to_user = (response: UserSignInResponse): IUser | undefined => {
  const decoded: any = jwtDecode<JwtPayload>(response.getToken());
  const payload = response.getUser();
  if (!payload) {
    return;
  }
  return {
    uid: decoded.aud,
    providerType: response.getProviderType(),
    nickname: payload.getNickname(),
    realName: payload.getRealName(),
    email: payload.getEmail(),
    avatar: payload.getAvatar(),
    permissions: response.getPermissionsList().map(to_permission),
    roles: response.getRolesList(),
    hasGoogle: response.getHasGoogle(),
    hasWechatOauth2: response.getHasWechatOauth2(),
    hasWechatMiniProgram: response.getHasWechatMiniProgram(),
  };
};

export interface IUserOption {
  id: number;
  nickname: string;
  realName: string;
}

export interface IUserDetails {
  id: number;
  email: string;
  nickname: string;
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
  uid: string;
  providerType: string;
  email: string;
  nickname: string;
  realName: string;
  avatar: string;
  permissions: IPermission[];
  roles: string[];
  hasGoogle: boolean;
  hasWechatOauth2: boolean;
  hasWechatMiniProgram: boolean;
}

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
