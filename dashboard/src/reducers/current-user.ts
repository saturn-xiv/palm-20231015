import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode, { JwtPayload } from "jwt-decode";

import type { RootState } from "../store";
import { UserSignInResponse } from "../protocols/nut_pb";

export interface IPermission {
  operation: string;
  resourceType: string;
  resourceId: number;
}

interface IState {
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
        state.realName = action.payload.getPayload()?.getRealName() || "";
        state.avatar = action.payload.getPayload()?.getAvatar() || "";
        state.permissions = action.payload.getPoliciesList().map((x) => ({
          operation: x.getOperation(),
          resourceId: x.getResourceId(),
          resourceType: x.getResourceType(),
        }));
        state.isAdministrator = action.payload.getIsAdministrator();
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

export default slice.reducer;
