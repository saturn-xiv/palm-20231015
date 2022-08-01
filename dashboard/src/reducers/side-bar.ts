import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface IState {
  selectedKey?: string;
}

const initialState: IState = {};

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

export const selectedKey = (state: RootState): string | undefined =>
  state.sideBar.selectedKey;

export default slice.reducer;
