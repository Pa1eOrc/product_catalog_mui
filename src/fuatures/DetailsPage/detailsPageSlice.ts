import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDeatails } from "../../types/ProductDetails";
import { getProductsDetails } from "../../api/products";

type DetailsPageState = {
  productDetails: ProductDeatails;
  loaded: boolean;
  hasError: { errorMessage: string; isError: boolean };
};

const initialState: DetailsPageState = {
  productDetails: {
    id: "",
    name: "",
    capacityAvailable: [],
    colorsAvailable: [],
    color: "",
    capacity: "",
    namespaceId: "",
    images: [],
    description: [{ title: "", text: [] }],
    screen: "",
    resolution: "",
    processor: "",
    camera: "",
    zoom: "",
    cell: [],
    ram: "",
    priceRegular: "",
    priceDiscount: "",
  },
  loaded: false,
  hasError: { errorMessage: "", isError: false },
};

export const init = createAsyncThunk(
  "details/fetch",
  async (urlParams: string) => {
    const detailsSearchParams = urlParams.slice(1).split("/");
    const products = await getProductsDetails(detailsSearchParams[0]);

    if (products) {
      return products.find((product) => product.id === detailsSearchParams[1]);
    }
  }
);

const DetailsPageSlice = createSlice({
  name: "datails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loaded = false;
    });

    builder.addCase(
      init.fulfilled,
      (state, action: PayloadAction<ProductDeatails | undefined>) => {
        if (action.payload) {
          state.productDetails = action.payload;
          state.loaded = true;
        }
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

export default DetailsPageSlice.reducer;
