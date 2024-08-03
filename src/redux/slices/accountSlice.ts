import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AccountState {
  address: string | null;
  authenticated: boolean;
  isValidChain: boolean;
}

const initialState: AccountState = {
  address: null,
  authenticated: false,
  isValidChain: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    setIsValidChain: (state, action: PayloadAction<boolean>) => {
      state.isValidChain = action.payload;
    },
  },
});

export const { setAddress, setAuthenticated, setIsValidChain } = accountSlice.actions;

export default accountSlice.reducer;
