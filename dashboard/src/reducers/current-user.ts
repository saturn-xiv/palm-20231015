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

interface IState {
  id?: number;
  uid?: string;
  realName?: string;
  avatar?: string;
  permissions: IPermission[];
  isAdministrator: boolean;
}

const initialState: IState = {
  permissions: [],
  isAdministrator: false,
};

export const slice = createSlice({
  name: "current-user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserSignInResponse>) => {
      try {
        const decoded: any = jwtDecode<JwtPayload>(action.payload.getToken());
        state.uid = decoded.aud;
        state.id = action.payload.getPayload()?.getId();
        state.realName = action.payload.getPayload()?.getRealName() || "";
        state.avatar = action.payload.getPayload()?.getAvatar() || "";
        state.permissions = action.payload.getPoliciesList().map((x) => ({
          operation: x.getOperation(),
          resourceId: x.getResourceId(),
          resourceType: x.getResourceType(),
        }));
        state.isAdministrator = action.payload.getIsAdministrator();

        set(action.payload.getToken());
      } catch {}
    },
    signOut: (state) => {
      state = { permissions: [], isAdministrator: false };
    },
  },
});

export const { signIn, signOut } = slice.actions;

export const permissions = (state: RootState): IPermission[] =>
  state.currentUser.permissions;
export const isAdministrator = (state: RootState): boolean =>
  state.currentUser.isAdministrator;
export const currentUser = (state: RootState): IState => state.currentUser;

export default slice.reducer;
