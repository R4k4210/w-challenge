import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "@slices/accountSlice";
import targetSlice from "@slices/targetSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice,
    target: targetSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
