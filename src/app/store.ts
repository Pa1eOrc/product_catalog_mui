import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import homePageSlice from "../fuatures/HomePage/homePageSlice";

export const store = configureStore({
  reducer: {
    homePageSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;