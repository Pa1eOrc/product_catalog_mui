import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { getProducts } from "../../api/products";
import { getHotPriceProducts, getNewModelsProducts } from "../../helperFunctions/sortedFunctions";

type HomePageState = {
  products: Product[];
  hotPrice: Product[];
  newModels: Product[];
  loaded: boolean;
  hasError: { errorMessage: string; isError: boolean };
};

const initialState: HomePageState = {
  products: [],
  hotPrice: [],
  newModels: [],
  loaded: false,
  hasError: { errorMessage: "", isError: false },
};

export const init = createAsyncThunk<Product[], string>(
  "products/fetch",
  async (url: string) => {
    const response = await getProducts(url);
    return response;
  }
);


const HomePageSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loaded = false;
    });

    builder.addCase(
      init.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.hotPrice = getHotPriceProducts(action.payload);
        state.newModels = getNewModelsProducts(action.payload);
        state.loaded = true;
      }
    );

    builder.addCase(init.rejected, (state) => {
      state.loaded = true;
      state.hasError.errorMessage =
        "Something went wrong. Products is not found";
      state.hasError.isError = true;
    });
  },
});

export default HomePageSlice.reducer;
