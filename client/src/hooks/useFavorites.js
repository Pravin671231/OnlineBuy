import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  addToFavorite,
} from "../features/favorites/favoritesSlice";
import { setLocalStorage } from "../utils/localStorage";
import { useEffect } from "react";

export const useFavorites = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.favorites);

  const countItems = items.length;

  useEffect(() => {
    setLocalStorage("app_favorites", items);
  }, [items]);

  // Check whether a product is in favorites
  const isFavorite = (id) => {
    return items.some((item) => item.id === id);
  };

  // Toggle favorite
  const handleToggleFavorite = (product) => {
    dispatch(toggleFavorite(product));
  };

  // Add favorite
  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
  };

  // Remove favorite
  const handleRemoveFavorite = (id) => {
    const product = items.find((item) => item.id === id);

    if (product) {
      dispatch(toggleFavorite(product));
    }
  };

  return {
    favorites: items,
    isFavorite,
    handleToggleFavorite,
    handleAddToFavorite,
    handleRemoveFavorite,
    countItems,
  };
};
