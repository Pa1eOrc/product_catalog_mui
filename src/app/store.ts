import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import homePageSlice from "../fuatures/HomePage/homePageSlice";
import searchParamsSlice from "../fuatures/SearchParams/searchParamsSlice";

export const store = configureStore({
  reducer: {
    homePageSlice,
    searchParamsSlice,
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