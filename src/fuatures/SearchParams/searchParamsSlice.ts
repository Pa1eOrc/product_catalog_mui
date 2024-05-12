import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchParamsState = {
  perPage: string;
  sort: string;
  query: string;
  page: number;
  breadcrumbs: string[];
};

const initialState: SearchParamsState = {
  perPage: "16",
  sort: "age",
  query: "",
  page: 1,
  breadcrumbs: [],
};

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<{ query: string }>) => {
      const { query } = action.payload;

      state.query = query;
    },

    setPage: (state, action: PayloadAction<{ page: number }>) => {
      const { page } = action.payload;

      state.page = page;
    },

    setSort: (state, action: PayloadAction<{ sort: string }>) => {
      const { sort } = action.payload;

      state.sort = sort;
    },

    setPerPage: (state, action: PayloadAction<{ perPage: string }>) => {
      const { perPage } = action.payload;

      state.perPage = perPage;
    },

    setBreadcrumbs: (state, action: PayloadAction<{ breadcrumbs: string[] }>) => {
      const { breadcrumbs } = action.payload;

      state.breadcrumbs = breadcrumbs;
    },
  },
});

export const { setQuery, setPage, setPerPage, setSort, setBreadcrumbs } =
  searchParamsSlice.actions;
export default searchParamsSlice.reducer;
