import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  quantityDecrease,
  quantityIncrease,
  removeToCart,
} from "../features/carts/cartSlice";
import { useEffect } from "react";
import { setLocalStorage } from "../utils/localStorage";

export const useCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.carts);

  useEffect(() => {
    setLocalStorage("cartItems", cartItems);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
  };

  const handleIncreseToCart = (id) => {
    dispatch(quantityIncrease(id));
  };

  const handleDecreaseToCart = (id) => {
    dispatch(quantityDecrease(id));
  };

  const totalCartAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return {
    handleAddToCart,
    cartItems,
    handleDecreaseToCart,
    handleIncreseToCart,
    handleRemoveToCart,
    totalCartAmount,
    totalCartCount,
  };
};
