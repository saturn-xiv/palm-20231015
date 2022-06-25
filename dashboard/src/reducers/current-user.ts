import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode, { JwtPayload } from "jwt-decode";

import type { RootState } from "../store";
import { UserSignInResponse, UserQueryRequest } from "../protocols/nut_pb";

export const ROLE_ROOT = "root";

export const TO_SIGN_IN = "/users/sign-in";
export const TO_PROFILE = "/users/profile";

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

export const set = (token: string) => {
  sessionStorage.setItem(KEY, token);
};

export const remove = () => {
  sessionStorage.removeItem(KEY);
};

export const OPERATION_READ = "read";
export const OPERATION_WRITE = "write";
export const OPERATION_CREATE = "create";
export const OPERATION_UPDATE = "update";
export const OPERATION_REMOVE = "remove";

export interface IPermission {
  operation: string;
  resourceType: string;
  resourceId: number;
}

export interface IUser {
  id: number;
  uid: string;
  realName: string;
  avatar: string;
  permissions: IPermission[];
  isAdministrator: boolean;
}

export const to_user = (response: UserSignInResponse): IUser | undefined => {
  const decoded: any = jwtDecode<JwtPayload>(response.getToken());
  const payload = response.getPayload();
  if (!payload) {
    return;
  }
  return {
    uid: decoded.aud,
    id: payload.getId(),
    realName: payload.getRealName(),
    avatar: payload.getAvatar(),
    permissions: response.getPoliciesList().map((x) => ({
      operation: x.getOperation(),
      resourceId: x.getResourceId(),
      resourceType: x.getResourceType(),
    })),
    isAdministrator: response.getIsAdministrator(),
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
      try {
        state.payload = action.payload[0];
        set(action.payload[1]);
      } catch {}
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
export const isAdministrator = (state: RootState): boolean =>
  state.currentUser.payload?.isAdministrator || false;
export const currentUser = (state: RootState): IUser | undefined =>
  state.currentUser.payload;

export default slice.reducer;
