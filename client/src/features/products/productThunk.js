import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCategories,
  getAllProducts,
  getByIdProduct,
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

