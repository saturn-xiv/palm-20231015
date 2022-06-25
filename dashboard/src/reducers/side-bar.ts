import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface IState {
  openKeys: string[];
  selectedKey?: string;
}

const initialState: IState = {
  openKeys: [],
};

export const slice = createSlice({
  name: "side-bar",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<string>) => {
      state.selectedKey = action.payload;
    },
  },
});

export const { select } = slice.actions;

export const sideBar = (state: RootState): IState => state.sideBar;

export default slice.reducer;
