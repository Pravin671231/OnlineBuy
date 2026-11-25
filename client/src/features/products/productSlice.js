import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productThunk";

const initialState = {
  data: [],
  isLoading: false,
  isError: null,

  selecedProductLoading: false,
  selecedProduct: null,
  selecedProductError: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        ((state.isLoading = true), (state.isError = null));
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        ((state.isLoading = false), (state.data = action.payload));
        console.log("redux product", state.data);
      })
      //   product get by id
      .addCase(fetchProducts.rejected, (state, action) => {
        ((state.isLoading = false), (state.isError = action.payload));
      });
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.selecedProductLoading = true;
        state.selecedProductError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selecedProductLoading = false;
        state.selecedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.selecedProductLoading = false;
        state.selecedProductError = action.payload;
      });
  },
});

export default productSlice.reducer;
