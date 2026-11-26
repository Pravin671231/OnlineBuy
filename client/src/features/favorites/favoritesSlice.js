import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/localStorage";

const initialItems = getLocalStorage("app_favorites") || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: initialItems,
    count: initialItems.length,
  },
  reducers: {
    addToFavorite: (state, action) => {
      const product = action.payload;

      const exists = state.items.some((item) => item.id === product.id);

      if (!exists) {
        state.items.push(product);
      }
    },
    toggleFavorite: (state, action) => {
      const product = action.payload;

      const exists = state.items.some((item) => item.id === product.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== product.id);
      } else {
        state.items.push(product);
      }
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorite, toggleFavorite } = favoritesSlice.actions;
