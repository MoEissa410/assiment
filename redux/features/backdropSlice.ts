"use client";
import { RootState } from "@redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  backdrop: boolean;
};

const initialState = {
  backdrop: false,
} as InitialState;
//
const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    closeBackdrop: (state) => {
      state.backdrop = false;
    },
    openBackdrop: (state) => {
      state.backdrop = true;
    },
  },
});
export const { closeBackdrop, openBackdrop } = backdropSlice.actions;

export default backdropSlice.reducer;
