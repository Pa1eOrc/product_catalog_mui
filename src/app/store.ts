import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import homePageSlice from "../fuatures/HomePage/homePageSlice";
import searchParamsSlice from "../fuatures/SearchParams/searchParamsSlice";
import detailsPageSlice from "../fuatures/DetailsPage/detailsPageSlice";

export const store = configureStore({
  reducer: {
    homePageSlice,
    searchParamsSlice,
    detailsPageSlice,
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