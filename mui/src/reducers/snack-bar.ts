import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material/Alert";

import type { RootState } from "../store";

export const ACTION_REFRESH = "site.refresh";

export interface IState {
  severity: AlertColor;
  messages: string[];
}

const initialState: IState = {
  severity: "success",
  messages: [],
};

export const slice = createSlice({
  name: "current-user",
  initialState,
  reducers: {
    success: (state, action: PayloadAction<string[]>) => {
      state.severity = "success";
      state.messages = action.payload;
    },
    error: (state, action: PayloadAction<string[]>) => {
      state.severity = "error";
      state.messages = action.payload;
    },
    hide: (state) => {
      state.messages = [];
    },
  },
});

export const { success, error, hide } = slice.actions;

export const selectSnackBar = (state: RootState): IState => {
  return { ...state.snackBar };
};

export default slice.reducer;
