import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/localStorage";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: getLocalStorage("cartItems") || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log("cart item dispatch", item);

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
        });
      }
    },
    removeToCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    quantityIncrease: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload,
      );

      if (item) {
        item.quantity += 1;
      }
    },
    quantityDecrease: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload,
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeToCart, quantityDecrease, quantityIncrease } =
  cartSlice.actions;
