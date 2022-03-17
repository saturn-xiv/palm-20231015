import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface IState {
  menus: IMenu[];
  selectedKey?: string;
  openKeys: string[];
}

export interface IMenu {
  to: string;
  label?: string;
  items: IMenu[];
}

const initialState: IState = {
  menus: [],
  openKeys: [],
};

export const slice = createSlice({
  name: "current-user",
  initialState,
  reducers: {
    refresh: (state, action: PayloadAction<IMenu[]>) => {
      state.menus = action.payload;
    },
  },
});

export const { refresh } = slice.actions;

export const selectSideBarMenus = (state: RootState): IMenu[] =>
  state.sideBar.menus;

export default slice.reducer;
