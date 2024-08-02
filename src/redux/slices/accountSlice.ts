import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AccountState {
  address: string | null;
  authenticated: boolean;
}

const initialState: AccountState = {
  address: null,
  authenticated: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export const { setAccount, setAuthenticated } = accountSlice.actions;

export default accountSlice.reducer;
