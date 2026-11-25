import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchCategoryByName,
  fetchProductById,
  fetchProducts,
} from "../features/products/productThunk";

export const useProduct = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { data, isLoading, isError };
};

export const useProductById = (id) => {
  const dispatch = useDispatch();

  const { selecedProductLoading, selecedProduct, selecedProductError } =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  return { selecedProduct, selecedProductError, selecedProductLoading };
};

export const useCategories = () => {
  const dispatch = useDispatch();

  const { categories, categoriesLoading, categoriesError } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return { categories, categoriesError, categoriesLoading };
};

export const useCategoryName = (categoryName) => {
  const dispatch = useDispatch();

  const { selectedCategory, selectedCategoryLoading, selecetedCategoryError } =
    useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchCategoryByName(categoryName));
  }, [dispatch, categoryName]);

  return { selecetedCategoryError, selectedCategory, selectedCategoryLoading };
};
