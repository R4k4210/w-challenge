import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TargetState {
  address: string | null;
}

const initialState: TargetState = {
  address: null,
};

export const targetSlice = createSlice({
  name: "target",
  initialState,
  reducers: {
    setTargetAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
    },
  },
});

export const { setTargetAddress } = targetSlice.actions;

export default targetSlice.reducer;
