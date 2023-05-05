import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { productsApi } from "./productsApi";
import { Product, ProductResponse } from "./types";

type initialStateType = {
  products: Product[];
  total: Number;
};

const initialState: initialStateType = {
  products: [],
  total: 0,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state: initialStateType, action: PayloadAction<ProductResponse>) => {
        state.products = action.payload.products;
        state.total = action.payload.total;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.updateProduct.matchFulfilled,
      (state: initialStateType, action: PayloadAction<Product>) => {
        state.products = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      }
    );
  },
});

export default slice.reducer;

export const getAllProducts = (state: RootState) => state.products.products;
