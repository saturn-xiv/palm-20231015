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
  name: "side-bar",
  initialState,
  reducers: {
    refresh: (state, action: PayloadAction<IMenu[]>) => {
      state.menus = action.payload;
    },
    goto: (state, action: PayloadAction<string>) => {
      state.selectedKey = action.payload;
    },
  },
});

export const { goto, refresh } = slice.actions;

export const selectSideBarMenus = (state: RootState): IMenu[] =>
  state.sideBar.menus;

export const selectSideBarSelectedKey = (
  state: RootState
): string | undefined => state.sideBar.selectedKey;

export default slice.reducer;
