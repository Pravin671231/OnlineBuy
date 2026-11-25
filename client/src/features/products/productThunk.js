import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCategories,
  getAllProducts,
  getByIdProduct,
  getCategoryByName,
} from "../../services/productService";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllProducts();
      return data;

      console.log("thunk", data);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getByIdProduct(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllCategories();
      return data;
    } catch (error) {
      rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const fetchCategoryByName = createAsyncThunk(
  "products/fetchCategoryByName",
  async (categoryName, { rejectWithValue }) => {
    try {
      const data = getCategoryByName(categoryName);
      return data;
    } catch (error) {
      rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
