import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchCategoryByName,
  fetchProductById,
  fetchProducts,
} from "./productThunk";

const initialState = {
  data: [],
  isLoading: false,
  isError: null,

  selecedProductLoading: false,
  selecedProduct: null,
  selecedProductError: null,

  categories: [],
  categoriesLoading: false,
  categoriesError: null,

  selectedCategory: null,
  selectedCategoryLoading: false,
  selectedCategoryError: null,
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
      })
      //   getCategories
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesLoading = true;
        state.categoriesError = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        state.categoriesError = action.payload;
      })
      // categoryByName
      .addCase(fetchCategoryByName.pending, (state) => {
        state.selectedCategoryLoading = true;
        state.selectedCategoryError = null;
      })
      .addCase(fetchCategoryByName.fulfilled, (state, action) => {
        state.selecedProductLoading = false;
        state.selectedCategory = action.payload;
      })
      .addCase(fetchCategoryByName.rejected, (state, action) => {
        state.selectedCategoryLoading = false;
        state.selecedProductError = action.payload;
      });
  },
});

export default productSlice.reducer;
